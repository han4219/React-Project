import React from 'react'
import { Link } from 'react-router-dom'
import { path } from 'src/constants/path'
import { formatMoney, formatSold, generateNameId } from 'src/utils/helper'
import ProductRating from '../ProductRating/ProductRating'
import * as S from './productItem.style'

export default function ProductItem({ product }) {
  return (
    <S.Product>
      <Link to={path.product + `/${generateNameId(product)}`}>
        <S.ProductItem>
          <S.ProductItemImage>
            <img src={product.image} alt={product.name} />
          </S.ProductItemImage>
          <S.ProductItemInfor>
            <S.ProductItemTitle>{product.name}</S.ProductItemTitle>
            <S.ProductItemPrice>
              <S.ProductItemPriceSale>
                đ{formatMoney(product.price)}
              </S.ProductItemPriceSale>
              <S.ProductItemPriceOriginal>
                đ{formatMoney(product.price_before_discount)}
              </S.ProductItemPriceOriginal>
            </S.ProductItemPrice>
            <S.ProductItemMeta>
              <ProductRating rating={product.rating}></ProductRating>
              <S.ProductItemSold>
                <span>{formatSold(product.sold)}</span>
                <span>Đã bán</span>
              </S.ProductItemSold>
            </S.ProductItemMeta>
          </S.ProductItemInfor>
        </S.ProductItem>
      </Link>
    </S.Product>
  )
}
