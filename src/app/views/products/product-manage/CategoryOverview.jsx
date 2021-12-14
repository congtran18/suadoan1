import React, { useEffect, useState } from 'react'
import {
    Grid,
    Divider,
    Card,
    TextField,
    Icon,
    // Button,
    IconButton,
    Row,
} from '@material-ui/core'
import { Autocomplete, createFilterOptions, Pagination } from '@material-ui/lab'
import { makeStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import axios from 'axios'

const useStyles = makeStyles(({ palette, ...theme }) => ({
    Autocomplete: {
        height: 20,
    },
}))

const suggestions = [
    { label: 'Afghanistan' },
    { label: 'Aland Islands' },
    { label: 'Albania' },
    { label: 'Algeria' },
    { label: 'American Samoa' },
    { label: 'Andorra' },
    { label: 'Angola' },
    { label: 'Anguilla' },
    { label: 'Antarctica' },
    { label: 'Antigua and Barbuda' },
    { label: 'Argentina' },
    { label: 'Armenia' },
    { label: 'Aruba' },
    { label: 'Australia' },
    { label: 'Austria' },
    { label: 'Azerbaijan' },
    { label: 'Bahamas' },
    { label: 'Bahrain' },
    { label: 'Bangladesh' },
    { label: 'Barbados' },
    { label: 'Belarus' },
    { label: 'Belgium' },
    { label: 'Belize' },
    { label: 'Benin' },
    { label: 'Bermuda' },
    { label: 'Bhutan' },
    { label: 'Bolivia, Plurinational State of' },
    { label: 'Bonaire, Sint Eustatius and Saba' },
    { label: 'Bosnia and Herzegovina' },
    { label: 'Botswana' },
    { label: 'Bouvet Island' },
    { label: 'Brazil' },
    { label: 'British Indian Ocean Territory' },
    { label: 'Brunei Darussalam' },
]

const ProductOverview = ({ categoryProduct: { _id, realname, type } }) => {
    const classes = useStyles()
    const [page, setPage] = useState(1);
    return (
        <>
                <Grid
                    item
                    lg={3}
                    md={3}
                    sm={3}
                    xs={3}
                    className="text-center"
                >
                    <h6 className="m-0 text-15">{_id}</h6>
                </Grid>
                <Grid
                    item
                    lg={3}
                    md={3}
                    sm={3}
                    xs={3}
                    className="text-center"
                >
                    <h6 className="m-0 text-15">{realname}</h6>
                </Grid>
                <Grid
                    item
                    lg={3}
                    md={3}
                    sm={3}
                    xs={3}
                    className="text-center"
                >
                    <big className={
					type === 'áo'
						? 'border-radius-4 bg-error text-white px-2 py-2px'
						: type === 'quần'
						? 'border-radius-4 bg-primary text-white px-2 py-2px'
						: 'border-radius-4 bg-secondary text-white px-2 py-2px'
				}>
                        {type}
                    </big>
                </Grid>
        </>

    )
}


export default ProductOverview
