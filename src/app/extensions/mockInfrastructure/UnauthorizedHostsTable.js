import React from 'react'
import Button from 'material-ui/Button'
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table'

const UnauthorizedHostRow = ({ host, authorizeHost }) => (
  <TableRow>
    <TableCell>{host.hostname}</TableCell>
    <TableCell>{host.ipAddress}</TableCell>
    <TableCell>{host.os}</TableCell>
    <TableCell><Button color="primary" onClick={authorizeHost}>Authorize</Button></TableCell>
  </TableRow>
)

const UnauthorizedHostsTable = ({ hosts, authorizeHost }) => (
  <Table>
    <TableHead>
      <TableRow>
        <TableCell>Hostname</TableCell>
        <TableCell>IP Address</TableCell>
        <TableCell>Operating System</TableCell>
        <TableCell>&nbsp;</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {hosts.map(host => <UnauthorizedHostRow key={host.hostname} host={host} authorizeHost={authorizeHost(host.hostname)} />)}
    </TableBody>
  </Table>
)

export default UnauthorizedHostsTable
