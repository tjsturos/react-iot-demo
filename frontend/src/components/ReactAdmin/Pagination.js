import { useListContext, } from 'react-admin'
import { Button, Toolbar, Typography, Select } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'
import ChevronLeft from '@material-ui/icons/ChevronLeft'
import ChevronRight from '@material-ui/icons/ChevronRight'

const useStyles = makeStyles({
    toolbar: {
        justifyContent: 'flex-end',
        paddingRight: '10rem'
    },
    selectLabel: {
        paddingRight: '2rem',
        color: "gray"
    },
    indicatorLabel: {
        paddingLeft: '2rem',
        paddingRight: '2rem'
    }
})
const DevicePagination = () => {
    const classes = useStyles()
    const { page, perPage, total, setPage, setPerPage } = useListContext();
    const nbPages = Math.ceil(total / perPage) || 1;
    return (
            <Toolbar classes={{root: classes.toolbar}}>
                <Typography classes={{ root: classes.selectLabel}} variant="body2">Rows per page:</Typography>
                <Select defaultValue='10' onChange={(value) => setPerPage(value)}>
                    <option value={10}>10</option>
                    <option value={20}>20</option>
                    <option value={30}>30</option>
                </Select>
                <Typography classes={{ root: classes.indicatorLabel}}  variant="body2">{1+(page-1)*perPage}-{perPage*(page) < total ? perPage*(page) : total } of {total}</Typography>
                <Button disabled={page === 1} key="prev" onClick={() => setPage(page - 1)}>
                    <ChevronLeft />
                </Button>
                <Button disabled={page === nbPages} key="next" onClick={() => setPage(page + 1)}>
                    <ChevronRight />
                </Button>
            </Toolbar>
    );
}

export default DevicePagination