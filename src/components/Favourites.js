import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Meta from './layout/Meta';
import Header from './layout/Header'
import BtcUsdStatic from './SymbolsStatic/BtcUsdStatic';
import EthBtcStatic from './SymbolsStatic/EthBtcStatic';
import EthUsdStatic from './SymbolsStatic/EthUsdStatic';
import LtcBtcStatic from './SymbolsStatic/LtcBtcStatic';
import LtcUsdStatic from './SymbolsStatic/LtcUsdStatic';
import { removeBtcUsd } from '../redux/actions/btcUsdActions';
import { removeEthUSD } from '../redux/actions/ethUsdActions';
import { removeEthBtc } from '../redux/actions/ethBtcActions';
import { removeLtcBtc } from '../redux/actions/ltcBtcActions';
import { removeLtcUsd } from '../redux/actions/ltcUsdActions';

const Favourites = () => {
    
    const { btcusd }  = useSelector(state => state.BtcUsd);
    const { ethusd }  = useSelector(state => state.EthUsd);
    const { ethbtc }  = useSelector(state => state.EthBtc);
    const { ltcusd }  = useSelector(state => state.LtcUsd);
    const { ltcbtc }  = useSelector(state => state.LtcBtc);
    

    const dispatch = useDispatch();

   
    const removeBtcUSDFromFavs = () => {
        dispatch(removeBtcUsd(btcusd));
    }

    const removeEthBTCFromFavs = () => {
        dispatch(removeEthBtc(ethbtc));
    }

    const removeEthUSDFromFavs = () => {
        dispatch(removeEthUSD(ethusd));
    }

    const removeLtcBTCFromFavs = () => {
        dispatch(removeLtcBtc(ltcbtc));
    }

    const removeLtcUSDFromFavs = () => {
        dispatch(removeLtcUsd(ltcusd));
    }
    

    return (
        <div>
            <Meta title={"Favourites"} />
            <Header />
            {btcusd ? <BtcUsdStatic onClick={removeBtcUSDFromFavs} /> : null}
            {ethbtc ? <EthBtcStatic onClick={removeEthBTCFromFavs} /> : null}
            {ethusd ? <EthUsdStatic onClick={removeEthUSDFromFavs} /> : null}
            {ltcbtc ? <LtcBtcStatic onClick={removeLtcBTCFromFavs} /> : null}
            {ltcusd ? <LtcUsdStatic onClick={removeLtcUSDFromFavs} /> : null}
           
        </div>
    )
}

export default Favourites