import type { GetStaticPropsResult, NextPage } from 'next'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { cartSelector, setData, setInfo } from '../store/cart.slice'
import React from 'react'
import TopSlider from '../components/TopSlider'



interface Props {

  post?: any[],
  infos?: any[]

}

const Casa: NextPage<Props> = ({ post, infos }) => {
  const { data, info } = useAppSelector(cartSelector)
  console.log({ post })

  const dispatch = useAppDispatch()

  React.useEffect(() => {
    window.onpopstate = () => { };
  }, [])

  React.useEffect(() => {
    dispatch(setInfo(infos))
  }, [])

  return (
    <>
      <TopSlider />
    </>
  )
}

export default Casa
