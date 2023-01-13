import React from 'react'

const RecentOrders = () => {
    return (
        <div className='recent_orders'>
            <h4>Recent Orders</h4>
            <div className='btns'>
                <div>
                    <a href="#">Open Orders</a>
                    <a className='active' href="#">Closed Orders</a>
                    <a href="#">Trade Orders</a>
                </div>
                <a className='cancel_all' href="">
                    <i class='bx bx-x-circle'></i>
                    Cancel All
                </a>
            </div>
            <div className="body">
                <ul>
                    <li>
                        <p>No.</p>
                        <p>1</p>
                        <p>2</p>
                        <p>3</p>
                        <p>4</p>
                        <p>5</p>
                    </li>
                    <li>
                        <p>Signal No.</p>
                        <p>2012</p>
                        <p>2013</p>
                        <p>2014</p>
                        <p>2015</p>
                        <p>2016</p>
                    </li>
                    <li>
                        <p>Data & Time</p>
                        <p>28 Dec 13:24:26</p>
                        <p>29 Dec 11:24:26</p>
                        <p>30 Dec 15:24:26</p>
                        <p>31 Dec 14:24:26</p>
                        <p>32 Dec 19:24:26</p>
                    </li>
                    <li>
                        <p>Pair</p>
                        <p>BTC/USDT</p>
                        <p>BTC/USDT</p>
                        <p>BTC/USDT</p>
                        <p>BTC/USDT</p>
                        <p>BTC/USDT</p>
                    </li>
                    <li>
                        <p>Buy/Sell</p>
                        <p>Buy-Sell</p>
                        <p>Buy-Sell</p>
                        <p>Buy-Sell</p>
                        <p>Buy-Sell</p>
                        <p>Buy-Sell</p>
                    </li>
                    <li>
                        <p>Entry 1</p>
                        <p className='entry-f'>
                            0.0054665
                            <span>F.00246</span>
                        </p>
                        <p className='entry-p'>
                            0.0054665
                            <span>P.00246</span>
                        </p>
                        <p className='entry-f'>
                            0.0054665
                            <span>F.00246</span>
                        </p>
                        <p className='entry-p'>
                            0.0054665
                            <span>P.00246</span>
                        </p>
                        <p className='entry-f'>
                            0.0054665
                            <span>F.00246</span>
                        </p>
                    </li>
                    <li>
                        <p>Entry 2</p>
                        <p className='entry-f'>
                            0.0054665
                            <span>F.00246</span>
                        </p>
                        <p className='entry-p'>
                            0.0054665
                            <span>P.00246</span>
                        </p>
                        <p>
                            -
                        </p>
                        <p className='entry-p'>
                            0.0054665
                            <span>P.00246</span>
                        </p>
                        <p className='entry-f'>
                            0.0054665
                            <span>F.00246</span>
                        </p>
                    </li>
                    <li>
                        <p>Entry 3</p>
                        <p className='entry-f'>
                            0.0054665
                            <span>F.00246</span>
                        </p>
                        <p className='entry-c'>
                            0.0054665
                            <span>C.00246</span>
                        </p>
                        <p>
                            -
                        </p>
                        <p className='entry-p'>
                            0.0054665
                            <span>P.00246</span>
                        </p>
                        <p className='entry-f'>
                            0.0054665
                            <span>F.00246</span>
                        </p>
                    </li>
                    <li>
                        <p>Target 1</p>
                        <p className='entry-p'>
                            0.0054665
                            <span>P.00246</span>
                        </p>
                        <p>
                            0.0054665
                            <span>-</span>
                        </p>
                        <p className='entry-p'>
                            0.0054665
                            <span>P.00246</span>
                        </p>
                        <p className='entry-c'>
                            0.0054665
                            <span>C.00246</span>
                        </p>
                        <p className='entry-f'>
                            0.0054665
                            <span>F.00246</span>
                        </p>
                    </li>
                    <li>
                        <p>Target 2</p>
                        <p className='entry-p'>
                            0.0054665
                            <span>P.00246</span>
                        </p>
                        <p>
                            0.0054665
                            <span>-</span>
                        </p>
                        <p className='entry-c'>
                            0.0054665
                            <span>C.00246</span>
                        </p>
                        <p>
                            0.0054665
                            <span>-</span>
                        </p>
                        <p className='entry-f'>
                            0.0054665
                            <span>F.00246</span>
                        </p>
                    </li>
                    <li>
                        <p>Target 3</p>
                        <p>
                            -
                        </p>
                        <p>
                            0.0054665
                            <span>-</span>
                        </p>
                        <p>
                            0.0054665
                            <span>-</span>
                        </p>
                        <p>
                            0.0054665
                            <span>-</span>
                        </p>
                        <p className='entry-f'>
                            0.0054665
                            <span>F.00246</span>
                        </p>
                    </li>
                    <li>
                        <p>Status</p>
                        <p>Open</p>
                        <p>Compeleted</p>
                        <p>Open</p>
                        <p>Compeleted</p>
                        <p>Open</p>
                    </li>
                    <li>
                        <p>
                            Gain
                            <span>(%)($)</span>
                        </p>
                        <p>
                            <span>%-31</span>
                            <span>$-24.876</span>
                        </p>
                        <p>
                            <span>%31</span>
                            <span>$24.876</span>
                        </p>
                        <p>
                            <span>%-31</span>
                            <span>$-24.876</span>
                        </p>
                        <p>
                            <span>%31</span>
                            <span>$24.876</span>
                        </p>
                        <p>
                            <span>%-31</span>
                            <span>$-24.876</span>
                        </p>
                    </li>
                    <li>
                        <p>Action</p>
                        <p>
                            <i class='bx bx-link-external'></i>
                            <i class='bx bx-duplicate'></i>
                            <i class='bx bx-x-circle'></i>
                        </p>
                        <p>
                            <i class='bx bx-link-external'></i>
                            <i class='bx bx-duplicate'></i>
                            <i class='bx bx-x-circle'></i>
                        </p>
                        <p>
                            <i class='bx bx-link-external'></i>
                            <i class='bx bx-duplicate'></i>
                            <i class='bx bx-x-circle'></i>
                        </p>
                        <p>
                            <i class='bx bx-link-external'></i>
                            <i class='bx bx-duplicate'></i>
                            <i class='bx bx-x-circle'></i>
                        </p>
                        <p>
                            <i class='bx bx-link-external'></i>
                            <i class='bx bx-duplicate'></i>
                            <i class='bx bx-x-circle'></i>
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default RecentOrders