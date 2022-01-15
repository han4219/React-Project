import React, { useEffect, useState, useMemo } from 'react'
import * as S from './productDetail.style'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import {
  formatMoney,
  formatSold,
  getProductId,
  percentSale
} from 'src/utils/helper'
import { unwrapResult } from '@reduxjs/toolkit'
import { addToCart, getProductDetail } from './productDetail.slice'
import QuantityInputNumber from 'src/components/QuantityInputNumber/QuantityInputNumber'
import ProductRating from 'src/components/ProductRating/ProductRating'
import DOMPurify from 'dompurify'
import { toast } from 'react-toastify'
import { getCartPurchases } from '../Cart/cart.slice'

export default function ProductDetail() {
  const [product, setProduct] = useState()
  const [currentImage, setCurrentImage] = useState({})
  const [currentIndexImages, setCurrentIndexImages] = useState([0, 5])
  const [quantity, setQuantity] = useState(1)
  const { productId } = useParams()
  const dispatch = useDispatch()

  const currentListImages = useMemo(() => {
    if (product) {
      return product.images.slice(...currentIndexImages)
    }
    return []
  }, [product, currentIndexImages])

  useEffect(() => {
    const realId = getProductId(productId)
    dispatch(getProductDetail(realId))
      .then(unwrapResult)
      .then(res => {
        res.data.images = res.data.images.map((image, index) => {
          return {
            id: index,
            url: image
          }
        })
        setCurrentImage(res.data.images[0])
        setProduct(res.data)
      })
  }, [productId, dispatch])

  const chooseCurrentImage = image => setCurrentImage(image)

  const choosePrev = () => {
    if (currentIndexImages[0] > 0) {
      currentIndexImages[0] = currentIndexImages[0] - 1
      currentIndexImages[1] = currentIndexImages[1] - 1
      setCurrentIndexImages([currentIndexImages[0], currentIndexImages[1]])
    }
  }
  const chooseNext = () => {
    if (currentIndexImages[1] < product.images.length) {
      currentIndexImages[0] = currentIndexImages[0] + 1
      currentIndexImages[1] = currentIndexImages[1] + 1
      setCurrentIndexImages([currentIndexImages[0], currentIndexImages[1]])
    }
  }

  const handleChangeQuantity = value => setQuantity(value)

  const handleAddToCart = async () => {
    const body = {
      product_id: product._id,
      buy_count: quantity
    }
    await dispatch(addToCart(body))
      .then(unwrapResult)
      .then(() => {
        toast.success('Thêm thành công bé ưiii', {
          position: 'top-center',
          autoClose: 4000
        })
      })
    await dispatch(getCartPurchases()).then(unwrapResult)
  }

  return (
    <div>
      {product && (
        <div className="container">
          <S.ProductBrief>
            <S.ProductImage>
              <S.ProductMainImage>
                <img src={currentImage.url} alt="" />
              </S.ProductMainImage>
              <S.ProductSlide>
                <S.ProductButtonIconPrev onClick={choosePrev}>
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
                {currentListImages.map(image => (
                  <S.ProductImageItem
                    key={image.id}
                    active={image.id === currentImage.id}
                    onMouseEnter={() => chooseCurrentImage(image)}
                  >
                    <img src={image.url} alt="" />
                  </S.ProductImageItem>
                ))}
                <S.ProductButtonIconNext onClick={chooseNext}>
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
                <QuantityInputNumber
                  value={quantity}
                  max={product.quantity}
                  onChange={handleChangeQuantity}
                />

                <S.ProductQuantityAvailable>
                  {product.quantity} sản phẩm có sẵn
                </S.ProductQuantityAvailable>
              </S.ProductQuantity>

              <S.AddToCart>
                <S.AddToCartButton onClick={handleAddToCart}>
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
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(product.description)
                }}
              ></div>
            </S.ProductContentText>
          </S.ProductContent>
        </div>
      )}
    </div>
  )
}
