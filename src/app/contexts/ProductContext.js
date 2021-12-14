import React, { createContext, useState, useEffect } from 'react'


export const ProductContext = createContext()

const ProductContextProvider = ({ children }) => {
	// State

	// const [product, setProduct] = useState('')
	const [imagePreview, setImagePreview] = useState('')
	const [showAddProductModal, setShowAddProductModal] = useState(false)
	const [showAddOrderModal, setShowAddOrderModal] = useState(false)
	const [showImagePreviewModal, setShowImagePreviewModal] = useState(false);
	const [showToast, setShowToast] = useState({
		show: false,
		message: '',
		type: null
	})


	// product context data
	const productContextData = {
		showAddProductModal,
		setShowAddProductModal,
		showImagePreviewModal,
		setShowImagePreviewModal,
		showAddOrderModal,
		setShowAddOrderModal,
		imagePreview,
		setImagePreview,
		showToast,
		setShowToast,
	}

	return (
		<ProductContext.Provider value={productContextData}>
			{children}
		</ProductContext.Provider>
	)
}

export default ProductContextProvider