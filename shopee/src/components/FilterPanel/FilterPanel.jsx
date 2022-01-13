import { React, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { path } from 'src/constants/path'
import RatingStars from '../RatingStars/RatingStars'
import * as S from './filterPanel.style'
import PropTypes from 'prop-types'
import qs from 'query-string'
import { Controller, useForm } from 'react-hook-form'

export default function FilterPanel({ categories, filters }) {
  const location = useLocation()
  const navigate = useNavigate()
  const {
    control,
    getValues,
    handleSubmit,
    formState: { errors },
    clearErrors,
    reset,
    setValue
  } = useForm({
    defaultValues: {
      minPrice: filters.minPrice || '',
      maxPrice: filters.maxPrice || ''
    },
    reValidateMode: 'onSubmit'
  })

  const validPrice = () => {
    const maxPrice = getValues('maxPrice')
    const minPrice = getValues('minPrice')
    const message = 'Vui lòng điền khoảng giá phù hợp'
    if (minPrice !== '' && maxPrice !== '') {
      return maxPrice > minPrice || message
    }
    return minPrice !== '' || maxPrice !== '' || message
  }

  const clearAll = () => {
    reset()
    navigate(path.home)
  }

  const searchPrice = data => {
    const { minPrice, maxPrice } = data
    if (minPrice !== '' || maxPrice !== '') {
      let _filters = filters
      if (minPrice !== '') {
        _filters = { ..._filters, minPrice }
      } else {
        delete _filters.minPrice
      }
      if (maxPrice !== '') {
        _filters = { ..._filters, maxPrice }
      } else {
        delete _filters.maxPrice
      }
      navigate(path.home + `?${qs.stringify(_filters)}`)
    }
  }
  const handleActiveClassItem = category => {
    const query = qs.parse(location.search)
    return query.category === category._id ? 'active' : ''
  }

  useEffect(() => {
    setValue('minPrice', filters.minPrice || '')
    setValue('maxPrice', filters.maxPrice || '')
  }, [setValue, filters])

  return (
    <div>
      <S.CategoryTitleLink to={path.home}>
        <i className="fas fa-bars"></i>
        tất cả danh mục
      </S.CategoryTitleLink>
      <S.CategoryList>
        {categories.map(category => {
          return (
            <S.CategoryItem key={category._id}>
              <Link
                to={path.home + `?category=${category._id}`}
                className={handleActiveClassItem(category)}
              >
                {category.name}
              </Link>
            </S.CategoryItem>
          )
        })}
      </S.CategoryList>
      <S.CategoryTitle>
        <i className="fas fa-filter"></i>
        bộ lọc tìm kiếm
      </S.CategoryTitle>
      <S.FilterGroup>
        <S.FilterGroupHeader>khoảng giá</S.FilterGroupHeader>
        <S.PriceRange>
          <S.PriceRangeGroup>
            <Controller
              name="minPrice"
              control={control}
              rules={{
                validate: { validPrice }
              }}
              render={({ field }) => (
                <S.PriceRangeInput
                  placeholder="đ TỪ"
                  onChange={value => {
                    clearErrors()
                    field.onChange(value)
                  }}
                  value={getValues('minPrice')}
                ></S.PriceRangeInput>
              )}
            />
            <S.PriceRangeLine />
            <Controller
              name="maxPrice"
              control={control}
              rules={{
                validate: { validPrice }
              }}
              render={({ field }) => (
                <S.PriceRangeInput
                  placeholder="đ ĐẾN"
                  onChange={value => {
                    clearErrors()
                    field.onChange(value)
                  }}
                  value={getValues('maxPrice')}
                ></S.PriceRangeInput>
              )}
            />
          </S.PriceRangeGroup>
          {Object.keys(errors).length !== 0 && (
            <S.PriceErrorMessage>
              Vui lòng điền khoảng giá phù hợp
            </S.PriceErrorMessage>
          )}

          <S.PriceRangeButton onClick={handleSubmit(searchPrice)}>
            Áp dụng
          </S.PriceRangeButton>
        </S.PriceRange>
      </S.FilterGroup>

      <S.FilterGroup>
        <S.FilterGroupHeader>đánh giá</S.FilterGroupHeader>
        <RatingStars filters={filters} />
      </S.FilterGroup>

      <S.RemoveFilterButton onClick={clearAll}>Xóa tất cả</S.RemoveFilterButton>
    </div>
  )
}

FilterPanel.propTypes = {
  categories: PropTypes.array.isRequired,
  filters: PropTypes.object.isRequired
}
