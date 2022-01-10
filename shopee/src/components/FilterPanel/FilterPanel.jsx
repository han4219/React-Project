import React from 'react'
import { NavLink } from 'react-router-dom'
import { path } from 'src/constants/path'
import RatingStars from '../RatingStars/RatingStars'
import * as S from './filterPanel.style'

export default function FilterPanel() {
  return (
    <div>
      <S.CategoryTitleLink to={path.home}>
        <i className="fas fa-bars"></i>
        tất cả danh mục
      </S.CategoryTitleLink>

      <S.CategoryList>
        <S.CategoryItem>
          <NavLink to="" className="first-child">
            <i className="fas fa-sort-up"></i>
            nhà cửa & đời sống
          </NavLink>
        </S.CategoryItem>
        <S.CategoryItem>
          <NavLink to="">chăn, ga, gối & nệm</NavLink>
        </S.CategoryItem>
        <S.CategoryItem>
          <NavLink to="">đồ nội thất</NavLink>
        </S.CategoryItem>
      </S.CategoryList>

      <S.CategoryTitle>
        <i className="fas fa-filter"></i>
        bộ lọc tìm kiếm
      </S.CategoryTitle>

      <S.FilterGroup>
        <S.FilterGroupHeader>khoảng giá</S.FilterGroupHeader>
        <S.PriceRange>
          <S.PriceRangeGroup>
            <S.PriceRangeInput placeholder="đ TỪ"></S.PriceRangeInput>
            <S.PriceRangeLine />
            <S.PriceRangeInput placeholder="đ ĐẾN"></S.PriceRangeInput>
          </S.PriceRangeGroup>
          <S.PriceErrorMessage>
            Vui lòng điền khoảng giá phù hợp
          </S.PriceErrorMessage>
          <S.PriceRangeButton>Áp dụng</S.PriceRangeButton>
        </S.PriceRange>
      </S.FilterGroup>

      <S.FilterGroup>
        <S.FilterGroupHeader>đánh giá</S.FilterGroupHeader>
        <RatingStars />
      </S.FilterGroup>

      <S.RemoveFilterButton>Xóa tất cả</S.RemoveFilterButton>
    </div>
  )
}
