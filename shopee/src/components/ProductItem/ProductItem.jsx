import React from 'react'
import { Link } from 'react-router-dom'
import ProductRating from '../ProductRating/ProductRating'
import * as S from './productItem.style'

export default function ProductItem() {
  const rating = 4.4

  return (
    <S.Product>
      <Link to="">
        <S.ProductItem>
          <S.ProductItemImage>
            <img
              src="https://cf.shopee.vn/file/b302186dae9a329ec6e4448e1386e5b3_tn"
              alt=""
            />
          </S.ProductItemImage>
          <S.ProductItemInfor>
            <S.ProductItemTitle>
              Bình Nước 2 Lít Có Vạch Kẻ Chia ML Cho Mỗi Ngày Kèm Ống Hút Tiện
              Lợi
            </S.ProductItemTitle>
            <S.ProductItemPrice>
              <S.ProductItemPriceSale>đ98000</S.ProductItemPriceSale>
              <S.ProductItemPriceOriginal>đ94000</S.ProductItemPriceOriginal>
            </S.ProductItemPrice>
            <S.ProductItemMeta>
              <ProductRating rating={rating}></ProductRating>
              <S.ProductItemSold>
                <span>1.7k</span>
                <span>Đã bán</span>
              </S.ProductItemSold>
            </S.ProductItemMeta>
            <S.ProductPlace>Hà Nội</S.ProductPlace>
          </S.ProductItemInfor>
        </S.ProductItem>
      </Link>
    </S.Product>
  )
}
