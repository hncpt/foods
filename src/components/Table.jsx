import React, { useContext } from 'react'
import { ProductsContext } from '../App'

import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import IconButton from '@material-ui/core/IconButton'
import BackspaceIcon from '@material-ui/icons/Backspace'

const useStyles = makeStyles({
  table: {
    minWidth: 'unset',
    minHeight: '250px',
  },
})

export default function SpanningTable({ rows }) {
  const classes = useStyles()
  const { dispatch } = useContext(ProductsContext)

  function format1(n, currency) {
    return (
      currency +
      n.toFixed().replace(/./g, function (c, i, a) {
        return i > 0 && c !== '.' && (a.length - i) % 3 === 0 ? ',' + c : c
      })
    )
  }

  function subtotal(items) {
    return items.map(({ sub }) => sub).reduce((sum, i) => sum + i, 0)
  }

  const invoiceSubtotal = subtotal(rows)

  return (
    <TableContainer component={Paper}>
      <Table size='small' className={classes.table} aria-label='spanning table'>
        <TableHead>
          <TableRow>
            <TableCell>Desc</TableCell>
            <TableCell align='right'>Kg</TableCell>
            <TableCell align='right'>Price</TableCell>
            <TableCell align='right'>Sub</TableCell>
            <TableCell align='right'>Del</TableCell>
          </TableRow>
        </TableHead>
        <TableBody className='table-body-style'>
          {rows.map((row) => {
            return (
              <TableRow key={row.id}>
                <TableCell>{row.desc}</TableCell>
                <TableCell align='right'>{row.kg}</TableCell>
                <TableCell align='right'>{format1(row.price, 'đ')}</TableCell>
                <TableCell align='right'>{format1(row.sub, 'đ')}</TableCell>
                <TableCell align='right'>
                  <IconButton
                    size='small'
                    onClick={() => {
                      dispatch({
                        type: 'REMOVE_PRODUCT',
                        payload: row.id,
                      })
                    }}
                  >
                    <BackspaceIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            )
          })}

          {rows.length > 0 ? (
            <TableRow>
              <TableCell colSpan={2} />
              <TableCell colSpan={2}>
                <strong>Subtotal</strong>
              </TableCell>
              <TableCell align='right'>
                <strong>{format1(invoiceSubtotal, 'đ')}</strong>
              </TableCell>
            </TableRow>
          ) : null}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
