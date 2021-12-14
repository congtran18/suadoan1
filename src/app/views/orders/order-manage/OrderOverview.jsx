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

const OrderOverview = ({ order: { _id, realname, user, totalPrice, isPaid, updatedAt } }) => {
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
                    lg={2}
                    md={2}
                    sm={2}
                    xs={2}
                    className="text-center"
                >
                    <h6 className="m-0 text-15">{(user.name) ? (user.name) : realname}</h6>
                </Grid>
                <Grid
                    item
                    lg={2}
                    md={2}
                    sm={2}
                    xs={2}
                    className="text-center"
                >
                    <h6 className="m-0 text-15">{totalPrice}</h6>
                </Grid>
                <Grid
                    item
                    lg={1}
                    md={1}
                    sm={1}
                    xs={1}
                    className="text-center"
                >
                    {/* <big className={
					isPaid === true
						? 'border-radius-4 bg-primary text-white px-2 py-2px'
						: 'border-radius-4 bg-secondary text-white px-2 py-2px'
				}>
                        {(isPaid) ? "Đã thanh toán" : "Chưa thanh toán"}
                    </big> */}
                    {(!isPaid) ? <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"/>
  <path fill-rule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"/>
</svg> : <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2" viewBox="0 0 16 16">
  <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
</svg>}
                </Grid>
                <Grid
                    item
                    lg={2}
                    md={2}
                    sm={2}
                    xs={2}
                    className="text-center"
                >
                    <h6 className="m-0 text-15">{updatedAt}</h6>
                </Grid>
        </>

    )
}


export default OrderOverview
