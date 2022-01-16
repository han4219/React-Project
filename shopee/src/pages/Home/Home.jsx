import { unwrapResult } from '@reduxjs/toolkit'
import { React, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import FilterPanel from 'src/components/FilterPanel/FilterPanel'
import SearchItemResult from 'src/components/SearchItemResult/SearchItemResult'
import useQuery from 'src/hooks/useQuery'
import { getCategories, getProducts } from './home.slice'
import * as S from './home.style'

export default function Home() {
  const [categories, setCategories] = useState([])
  const [products, setProducts] = useState([])
  const [pagination, setPagination] = useState({})
  const [filters, setFilters] = useState({})
  const dispatch = useDispatch()
  const query = useQuery()

  useEffect(() => {
    dispatch(getCategories())
      .then(unwrapResult)
      .then(res => {
        setCategories(res.data)
      })
  }, [dispatch])

  useEffect(() => {
    const _filters = {
      ...query,
      page: query.page || 1,
      limit: query.limit || 15,
      sortBy: query.sortBy || 'view'
    }
    setFilters(_filters)
    const params = {
      page: _filters.page,
      limit: _filters.limit,
      category: _filters.category,
      rating_filter: _filters.rating,
      excluce: _filters.excluce,
      price_max: _filters.maxPrice,
      price_min: _filters.minPrice,
      sort_by: _filters.sortBy,
      name: _filters.name
    }
    const _getProducts = async () => {
      const data = await dispatch(getProducts({ params }))
      const res = unwrapResult(data)
      if (res) {
        setProducts(res.data.products)
        setPagination(res.data.pagination)
      }
    }
    _getProducts()
  }, [query, dispatch])

  return (
    <S.Container>
      <S.Side>
        <FilterPanel categories={categories} filters={filters} />
      </S.Side>
      <S.Main>
        <SearchItemResult
          products={products}
          filters={filters}
          pagination={pagination}
        />
      </S.Main>
    </S.Container>
  )
}
