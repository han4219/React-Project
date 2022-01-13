import React from 'react'
import * as S from './productDetail.style'
import { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import {
  formatMoney,
  formatSold,
  getProductId,
  percentSale
} from 'src/utils/helper'
import { unwrapResult } from '@reduxjs/toolkit'
import { getProductDetail } from './productDetail.slice'
import QuantityInputNumber from 'src/components/QuantityInputNumber/QuantityInputNumber'
import ProductRating from 'src/components/ProductRating/ProductRating'

export default function ProductDetail() {
  const [product, setProduct] = useState()
  const { productId } = useParams()
  const dispatch = useDispatch()

  useEffect(() => {
    const realId = getProductId(productId)
    dispatch(getProductDetail(realId))
      .then(unwrapResult)
      .then(res => {
        setProduct(res.data)
      })
  }, [productId, dispatch])
  return (
    <div>
      {product && (
        <div className="container">
          <S.ProductBrief>
            <S.ProductImage>
              <S.ProductMainImage>
                <img src={product.image} alt="" />
              </S.ProductMainImage>
              <S.ProductSlide>
                <S.ProductButtonIconPrev>
                  <svg
                    enableBackground="new 0 0 13 20"
                    viewBox="0 0 13 20"
                    x={0}
                    y={0}
                    className="shopee-svg-icon icon-arrow-left-bold"
                  >
                    <polygon points="4.2 10 12.1 2.1 10 -.1 1 8.9 -.1 10 1 11 10 20 12.1 17.9" />
                  </svg>
                </S.ProductButtonIconPrev>
                {product.images.map((image, index) => (
                  <S.ProductImageItem key={index}>
                    <img src={image} alt="" />
                  </S.ProductImageItem>
                ))}
                <S.ProductButtonIconNext>
                  <svg
                    enableBackground="new 0 0 13 21"
                    viewBox="0 0 13 21"
                    x={0}
                    y={0}
                    className="shopee-svg-icon icon-arrow-right-bold"
                  >
                    <polygon points="11.1 9.9 2.1 .9 -.1 3.1 7.9 11 -.1 18.9 2.1 21 11.1 12 12.1 11" />
                  </svg>
                </S.ProductButtonIconNext>
              </S.ProductSlide>
            </S.ProductImage>

            <S.ProductMeta>
              <S.ProductTitle>{product.name}</S.ProductTitle>

              <S.ProductSubMeta>
                <S.ProductRating>
                  {product.rating}
                  <ProductRating rating={product.rating} />
                </S.ProductRating>
                <S.ProductView>
                  {formatSold(product.view)} lượt xem
                </S.ProductView>
                <S.ProductSold>{formatSold(product.sold)} đã bán</S.ProductSold>
              </S.ProductSubMeta>

              <S.ProductPrice>
                <S.ProductPriceOriginal>
                  đ{formatMoney(product.price_before_discount)}
                </S.ProductPriceOriginal>
                <S.ProductSale>đ{formatMoney(product.price)}</S.ProductSale>
                <S.ProductPercentSale>
                  {percentSale(product.price_before_discount, product.price)}%
                  giảm
                </S.ProductPercentSale>
              </S.ProductPrice>

              <S.ProductQuantity>
                <div className="text">số lượng</div>
                <QuantityInputNumber />

                <S.ProductQuantityAvailable>
                  {product.quantity} sản phẩm có sẵn
                </S.ProductQuantityAvailable>
              </S.ProductQuantity>

              <S.AddToCart>
                <S.AddToCartButton>
                  <i className="fas fa-cart-plus"></i>

                  <span>thêm vào giỏ hàng</span>
                </S.AddToCartButton>
              </S.AddToCart>
            </S.ProductMeta>
          </S.ProductBrief>

          <S.ProductContent>
            <S.ProductContentTitle>mô tả sản phẩm</S.ProductContentTitle>
            <S.ProductContentText>
              <div
                dangerouslySetInnerHTML={{ __html: product.description }}
              ></div>
            </S.ProductContentText>
          </S.ProductContent>
        </div>
      )}
    </div>
  )
}
