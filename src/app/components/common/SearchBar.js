import React from 'react'
import { withStyles } from 'material-ui/styles'
import Paper from 'material-ui/Paper'
import SearchIcon from 'material-ui-icons/Search'
import Input, { InputAdornment } from 'material-ui/Input'
import { FormControl } from 'material-ui/Form'

const styles = {
  searchContainer: {},
}
const SearchBar = withStyles(styles)(({ classes }) => (
  <Paper>
    <div className={classes.searchContainer}>
      <FormControl>
        <Input
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon color="primary" />
            </InputAdornment>
          }
        />
      </FormControl>
    </div>
  </Paper>
))

export default SearchBar
