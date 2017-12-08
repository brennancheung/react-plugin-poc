import React from 'react'
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table'

const percentRounded = value => `${Math.round(100 * value)}%`

const HostIpAddress = ({ ip, iface }) => <div>{ip} {iface}</div>
const HostIpAddresses = ({ addresses }) => addresses.map(address => <HostIpAddress key={address.ip} address={address} />)

const ComputeDetails = ({ used, allocated }) => (
  <div>
    <div>{percentRounded(used.used / used.available)} - {used.used}/{used.available}GHz Used</div>
    <div>{allocated.percent}% - {allocated.allocated}GHz Allocated</div>
  </div>
)

const MemoryDetails = ({ used, allocated }) => (
  <div>
    <div>{percentRounded(used.used / used.available)}% - {used.used}/{used.available}GB Used</div>
    <div>{allocated.percent}% - {allocated.allocated}GB Allocated</div>
  </div>
)

const StorageDetails = ({ used, allocated }) => (
  <div>
    <div>{percentRounded(used.used / used.available)}% - {used.used}/{used.available}GB Used</div>
    <div>{allocated.percent}% - {allocated.allocated}GB Allocated</div>
  </div>
)

const HostRow = ({ host }) => (
  <TableRow>
    <TableCell>{host.hostname}</TableCell>
    <TableCell>{host.status}</TableCell>
    <TableCell><HostIpAddresses addresses={host.ipAddresses} /></TableCell>
    <TableCell><ComputeDetails {...host.compute} /></TableCell>
    <TableCell><MemoryDetails {...host.memory} /></TableCell>
    <TableCell><StorageDetails {...host.storage} /></TableCell>
    <TableCell>
      All Tenants: {host.runningInstances.allTenants}
      <br />
      Current Tenant: {host.runningInstances.currentTenant}
    </TableCell>
    <TableCell>{host.assignedRoles.map((role, idx) => <div key={idx}>{role}</div>)}</TableCell>
    <TableCell>{host.availabilityZone}</TableCell>
  </TableRow>
)

const HostsTable = ({ hosts, actions }) => (
  <Table>
    <TableHead>
      <TableRow>
        <TableCell>Hostname</TableCell>
        <TableCell>Status</TableCell>
        <TableCell>IP Address</TableCell>
        <TableCell>Compute</TableCell>
        <TableCell>Memory</TableCell>
        <TableCell>Storage</TableCell>
        <TableCell>Running Instances</TableCell>
        <TableCell>Assigned Roles</TableCell>
        <TableCell>Availability Zone</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {hosts.map(host => <HostRow key={host.hostname} host={host} />)}
    </TableBody>
  </Table>
)

export default HostsTable
