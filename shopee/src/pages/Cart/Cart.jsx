import React from 'react'
import { useSelector } from 'react-redux'
import CheckBox from 'src/components/CheckBox/CheckBox'
import QuantityInputNumber from 'src/components/QuantityInputNumber/QuantityInputNumber'
import { formatMoney, percentSale } from 'src/utils/helper'
import * as S from './cart.style'

export default function Cart() {
  const purchases = useSelector(state => state.cart.purchase)
  return (
    <div className="container">
      <S.ProductHeader>
        <S.ProductHeaderLeft>
          <S.ProductHeaderCheckbox>
            <CheckBox />
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
        {purchases &&
          purchases.map(purchase => {
            return (
              <S.CartProductItem key={purchase._id}>
                <S.CartProductItemLeft>
                  <S.CartProductItemCheckbox>
                    <CheckBox />
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
                  <S.CartProductItemTotalPrice>
                    đ{formatMoney(purchase.product.price * purchase.buy_count)}
                  </S.CartProductItemTotalPrice>
                  <S.CartProductItemQuantity>
                    <QuantityInputNumber value={purchase.buy_count} />
                  </S.CartProductItemQuantity>
                  <S.CartProductItemDelete>Xóa</S.CartProductItemDelete>
                </S.CartProductItemRight>
              </S.CartProductItem>
            )
          })}
      </S.CartSection>

      <S.CartFooter>
        <S.CartFooterLeft>
          <S.CartFooterCheckbox>
            <CheckBox />
          </S.CartFooterCheckbox>
          <S.CartFooterSelectAll>
            chọn tất cả ({purchases.length})
          </S.CartFooterSelectAll>
        </S.CartFooterLeft>
        <S.CartFooterRight>
          <S.CartFooterTotalPrice>
            Tổng thanh toán (0 Sản phẩm):
            <p>đ0</p>
          </S.CartFooterTotalPrice>
          <S.CartFooterBuyButton>mua hàng</S.CartFooterBuyButton>
        </S.CartFooterRight>
      </S.CartFooter>
    </div>
  )
}
