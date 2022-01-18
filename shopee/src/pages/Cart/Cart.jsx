import React, { useState, useEffect } from 'react'
import * as S from './cart.style'
import { useDispatch, useSelector } from 'react-redux'
import { createNextState, unwrapResult } from '@reduxjs/toolkit'
import CheckBox from 'src/components/CheckBox/CheckBox'
import QuantityInputNumber from 'src/components/QuantityInputNumber/QuantityInputNumber'
import { formatMoney, percentSale } from 'src/utils/helper'
import {
  buyPurchase,
  deletePurchase,
  getCartPurchases,
  updateCartPurchase
} from './cart.slice'
import keyBy from 'lodash/keyBy'
import { toast } from 'react-toastify'

export default function Cart() {
  const purchases = useSelector(state => state.cart.purchase)
  const [localPurchase, setLocalPurchase] = useState(() =>
    createNextState(purchases, draft => {
      draft.forEach(purchase => {
        purchase.disabled = false
        purchase.checked = false
      })
    })
  )
  const dispatch = useDispatch()
  const isCheckAll = localPurchase.every(purchase => purchase.checked)
  const checkedPurchases = localPurchase.filter(purchase => purchase.checked)
  const totalCheckedPurchase = checkedPurchases.length
  const totalCheckedPurchasePrice = checkedPurchases.reduce(
    (result, current) => {
      return result + current.product.price * current.buy_count
    },
    0
  )
  const totalCheckedPurchaseSavingPrice = checkedPurchases.reduce(
    (result, current) => {
      return (
        result +
        (current.product.price_before_discount - current.product.price) *
          current.buy_count
      )
    },
    0
  )

  useEffect(() => {
    setLocalPurchase(localPurchase => {
      const localPurchaseObject = keyBy(localPurchase, '_id')
      return createNextState(purchases, draft => {
        draft.forEach(purchase => {
          purchase.disabled = false
          purchase.checked = Boolean(localPurchaseObject[purchase._id]?.checked)
        })
      })
    })
  }, [purchases])

  const handleInputQuantity = index => value => {
    setLocalPurchase(
      createNextState(localPurchase, draft => {
        draft[index].buy_count = value
      })
    )
  }

  const handleCheck = index => value => {
    setLocalPurchase(
      createNextState(localPurchase, draft => {
        draft[index].checked = value
      })
    )
  }

  const handleBlur = index => async value => {
    const purchase = localPurchase[index]
    setLocalPurchase(
      createNextState(localPurchase, draft => {
        draft[index].disabled = true
      })
    )
    await dispatch(
      updateCartPurchase({
        product_id: purchase.product._id,
        buy_count: value
      })
    ).then(unwrapResult)
    setLocalPurchase(
      createNextState(localPurchase, draft => {
        draft[index].disabled = false
      })
    )
    await dispatch(getCartPurchases()).then(unwrapResult)
  }

  const handleIncreaseAndDecrease = index => async value => {
    const purchase = localPurchase[index]
    setLocalPurchase(
      createNextState(localPurchase, draft => {
        draft[index].disabled = true
        draft[index].buy_count = value
      })
    )
    await dispatch(
      updateCartPurchase({
        product_id: purchase.product._id,
        buy_count: value
      })
    ).then(unwrapResult)
    setLocalPurchase(
      createNextState(localPurchase, draft => {
        draft[index].disabled = false
      })
    )
    await dispatch(getCartPurchases()).then(unwrapResult)
  }

  const handleCheckAll = () => {
    setLocalPurchase(localPurchase =>
      createNextState(localPurchase, draft => {
        draft.forEach(purchase => {
          purchase.checked = !isCheckAll
        })
      })
    )
  }

  const handleDelete = index => async () => {
    const purchaseId = localPurchase[index]._id
    await dispatch(deletePurchase([purchaseId])).then(unwrapResult)
    await dispatch(getCartPurchases()).then(unwrapResult)
    toast.success('Xóa đơn hàng thành công')
  }

  const handleDeleteAll = async () => {
    const purchase_ids = checkedPurchases.map(purchase => purchase._id)
    await dispatch(deletePurchase(purchase_ids)).then(unwrapResult)
    await dispatch(getCartPurchases()).then(unwrapResult)
    toast.success('Xóa đơn hàng thành công')
  }

  const handleBuyPurchase = async () => {
    const buy_purchases = checkedPurchases.map(purchase => ({
      product_id: purchase.product._id,
      buy_count: purchase.buy_count
    }))
    await dispatch(buyPurchase(buy_purchases)).then(unwrapResult)
    await dispatch(getCartPurchases()).then(unwrapResult)
    toast.success('Đặt hàng thành công')
  }

  return (
    <div className="container">
      <S.ProductHeader>
        <S.ProductHeaderLeft>
          <S.ProductHeaderCheckbox>
            <CheckBox onChange={handleCheckAll} checked={isCheckAll} />
          </S.ProductHeaderCheckbox>
          <S.ProductHeaderName>sản phẩm</S.ProductHeaderName>
        </S.ProductHeaderLeft>
        <S.ProductHeaderRight>
          <S.ProductHeaderPrice>đơn giá</S.ProductHeaderPrice>
          <S.ProductHeaderQuantity>số lượng</S.ProductHeaderQuantity>
          <S.ProductHeaderTotalPrice>số tiền</S.ProductHeaderTotalPrice>
          <S.ProductHeaderAction>thao tác</S.ProductHeaderAction>
        </S.ProductHeaderRight>
      </S.ProductHeader>

      <S.CartSection>
        {localPurchase &&
          localPurchase.map((purchase, index) => {
            return (
              <S.CartProductItem key={purchase._id}>
                <S.CartProductItemLeft>
                  <S.CartProductItemCheckbox>
                    <CheckBox
                      checked={purchase.checked}
                      onChange={handleCheck(index)}
                    />
                  </S.CartProductItemCheckbox>
                  <S.CartProductItemImage>
                    <img src={purchase.product.image} alt="" />
                  </S.CartProductItemImage>
                  <S.CartProductItemName>
                    {purchase.product.name}
                  </S.CartProductItemName>
                  <S.CartProductItemCategory>
                    <div>Phân Loại Danh Mục:</div>
                    <div>{purchase.product.category.name}</div>
                  </S.CartProductItemCategory>
                </S.CartProductItemLeft>
                <S.CartProductItemRight>
                  <S.CartProductItemPrice>
                    <div className="top">
                      <S.CartProductItemPriceOrigin>
                        đ{formatMoney(purchase.product.price_before_discount)}
                      </S.CartProductItemPriceOrigin>
                      <S.CartProductItemPriceSale>
                        đ{formatMoney(purchase.product.price)}
                      </S.CartProductItemPriceSale>
                    </div>
                    <div className="bottom">
                      <S.CartProductItemPercentDiscount>
                        Giảm Giá{' '}
                        {percentSale(
                          purchase.product.price_before_discount,
                          purchase.product.price
                        )}
                        %
                      </S.CartProductItemPercentDiscount>
                    </div>
                  </S.CartProductItemPrice>
                  <S.CartProductItemQuantity>
                    <QuantityInputNumber
                      value={purchase.buy_count}
                      max={purchase.product.quantity}
                      disabled={purchase.disabled}
                      onInput={handleInputQuantity(index)}
                      onIncrease={handleIncreaseAndDecrease(index)}
                      onDecrease={handleIncreaseAndDecrease(index)}
                      onBlur={handleBlur(index)}
                    />
                  </S.CartProductItemQuantity>
                  <S.CartProductItemTotalPrice>
                    đ{formatMoney(purchase.product.price * purchase.buy_count)}
                  </S.CartProductItemTotalPrice>
                  <S.CartProductItemDelete onClick={handleDelete(index)}>
                    Xóa
                  </S.CartProductItemDelete>
                </S.CartProductItemRight>
              </S.CartProductItem>
            )
          })}
      </S.CartSection>

      <S.CartFooter>
        <S.CartFooterLeft>
          <S.CartFooterCheckbox>
            <CheckBox onChange={handleCheckAll} checked={isCheckAll} />
          </S.CartFooterCheckbox>
          <S.CartFooterSelectAll onClick={handleCheckAll}>
            chọn tất cả ({purchases.length})
          </S.CartFooterSelectAll>
          <S.CartFooterDeleteAllButton onClick={handleDeleteAll}>
            Xóa
          </S.CartFooterDeleteAllButton>
        </S.CartFooterLeft>
        <S.CartFooterRight>
          <S.CartFooterTotalPrice>
            Tổng thanh toán ({totalCheckedPurchase} Sản phẩm):
            <p>
              đ{formatMoney(totalCheckedPurchasePrice)} <br />
              <span>
                tiết kiệm: đ{formatMoney(totalCheckedPurchaseSavingPrice)}
              </span>
            </p>
          </S.CartFooterTotalPrice>
          <S.CartFooterBuyButton onClick={handleBuyPurchase}>
            mua hàng
          </S.CartFooterBuyButton>
        </S.CartFooterRight>
      </S.CartFooter>
    </div>
  )
}
