import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import LocalShippingRoundedIcon from '@material-ui/icons/LocalShippingRounded';
import LanguageRoundedIcon from '@material-ui/icons/LanguageRounded';
import ShoppingCartRoundedIcon from '@material-ui/icons/ShoppingCartRounded';
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';
import MicRoundedIcon from '@material-ui/icons/MicRounded';




function Header() {
    return (
        <div className='header'>
            
           <img className="header__logo" alt="svgImg" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNjQiIGhlaWdodD0iNjQiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxkZWZzPjxsaW5lYXJHcmFkaWVudCB4MT0iOS40MzU4MSIgeTE9IjEzNy4xODA3NSIgeDI9IjE1My45MzQ2MiIgeTI9IjEzNy4xODA3NSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGlkPSJjb2xvci0xX01RSXd5UFA5bG5DT19ncjEiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iI2VhZWU4MyI+PC9zdG9wPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2ZkYzU5OSI+PC9zdG9wPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IHgxPSI5LjQzNTgxIiB5MT0iMTMyLjExNzUiIHgyPSIxNTMuOTM0NjIiIHkyPSIxMzIuMTE3NSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGlkPSJjb2xvci0yX01RSXd5UFA5bG5DT19ncjIiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iI2VhZWU4MyI+PC9zdG9wPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2ZkYzU5OSI+PC9zdG9wPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IHgxPSI4NiIgeTE9IjIxLjkwMDQ0IiB4Mj0iODYiIHkyPSIxMTguNDI3MzgiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiBpZD0iY29sb3ItM19NUUl3eVBQOWxuQ09fZ3IzIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNkOWUwMjEiPjwvc3RvcD48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmYjg3MmIiPjwvc3RvcD48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBmb250LWZhbWlseT0ibm9uZSIgZm9udC13ZWlnaHQ9Im5vbmUiIGZvbnQtc2l6ZT0ibm9uZSIgdGV4dC1hbmNob3I9Im5vbmUiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48cGF0aCBkPSJNMCwxNzJ2LTE3MmgxNzJ2MTcyeiIgZmlsbD0ibm9uZSI+PC9wYXRoPjxnPjxwYXRoIGQ9Ik0xMzUuNjgxMTIsMTMwLjMxNjg4Yy0xNS41NDQ1LDYuNjE2NjIgLTM0LjczMDU2LDkuOTIyMjUgLTQ5Ljk1MjU2LDkuOTIyMjVjLTIyLjQ4MDk0LDAgLTQyLjY2NDA2LC01Ljk0NDc1IC02MC41MTk4MSwtMTYuMjAyOTRjLTEuMzMwMzEsLTAuNjU4NDQgLTIuNjQ5ODgsMC42NTg0NCAtMS4zMzAzMSwxLjk4ODc1YzE2LjUzODg4LDE0Ljg4ODc1IDM4LjAzODg4LDI0LjQ3NTA2IDYyLjE4ODc1LDI0LjQ3NTA2YzE2Ljg3NDgxLDAgMzcuNzAyOTQsLTYuMjgwNjkgNTEuNjA1MzcsLTE2LjUzODg3YzIuMzExMjUsLTEuNjUyODEgMC4zMjI1LC00LjMwMjY5IC0xLjk5MTQ0LC0zLjY0NDI1eiIgZmlsbD0idXJsKCNjb2xvci0xX01RSXd5UFA5bG5DT19ncjEpIj48L3BhdGg+PHBhdGggZD0iTTE0OC4yNTMyNSwxMjIuMzgzMzdjLTEuMzMwMzEsLTEuOTg4NzUgLTE0LjIyNDk0LC0zLjY0NDI1IC0yMS44MzU5NCwxLjk4ODc1Yy0xLjMxNjg4LDAuOTgwOTQgLTAuOTk0MzcsMS45NzggMC4zMzU5NCwxLjk3OGM0LjMwMjY5LC0wLjMyMjUgMTQuMjI0OTQsLTEuNjUyODEgMTUuODgwNDQsMC42NTg0NGMxLjY1MjgxLDIuMzI0NjkgLTEuOTg4NzUsMTEuNTc3NzUgLTMuNjQ0MjUsMTUuNTU1MjVjLTAuNjU4NDQsMC45ODA5NCAwLjY1ODQ0LDEuNjUyODEgMS42NTI4MSwwLjY1ODQ0YzcuMjc1MDYsLTUuOTUyODEgOC45Mjc4OCwtMTguODQ3NDQgNy42MTEsLTIwLjgzODg3eiIgZmlsbD0idXJsKCNjb2xvci0yX01RSXd5UFA5bG5DT19ncjIpIj48L3BhdGg+PGcgZmlsbD0idXJsKCNjb2xvci0zX01RSXd5UFA5bG5DT19ncjMpIj48cGF0aCBkPSJNMTEwLjQxODYzLDEyMC45NDI4OGMtMS4wMDc4MSwwIC0yLjA2NCwtMC4yMzY1IC0zLjA2MTA2LC0wLjcyODMxYy0wLjIwMTU2LC0wLjEwMjEyIC0wLjM5MjM4LC0wLjIyNTc1IC0wLjU2NDM3LC0wLjM3MzU2Yy00LjUyMDM4LC0zLjg5NDE5IC02LjM1ODYzLC02LjM5ODk0IC04LjM2ODg3LC05LjQ2MjY5Yy04LjYxMDc1LDcuNzQ1MzcgLTE1Ljk3NDUsMTAuNDMwMTkgLTI3LjcyNjk0LDEwLjQzMDE5Yy0xNy4wODQ0NCwwLjAwMjY5IC0yNy42OTczNywtMTAuODY1NTYgLTI3LjY5NzM3LC0yOC4zNTg1YzAsLTEzLjUyMzUgNy4xNDg3NSwtMjQuMjQ2NjMgMTkuNjEzMzgsLTI5LjQxNDY5YzguNjc3OTQsLTMuNjI4MTMgMTguNjc1NDQsLTMuOTMxODEgMjguNDk4MjUsLTMuOTU4Njl2LTYuNzA4YzAsLTYuNTE3MTkgLTYuODEwMTIsLTYuNzA1MzEgLTcuNTg2ODEsLTYuNzA1MzFjLTIuNzE5NzUsMCAtOS4xODMxOSwwLjczMzY5IC0xMC41MDI3NSw3LjUzNTc1Yy0wLjY3NzI1LDMuMjM4NDQgLTIuODQ2MDYsNS4zMDc4MSAtNS41MzM1Niw1LjMwNzgxYy0wLjEwMjEzLDAgLTAuMjA0MjUsLTAuMDA1MzggLTAuMzA2MzgsLTAuMDE2MTNsLTE2LjM1MDc1LC0xLjg4Mzk0Yy0wLjExMjg4LC0wLjAxMzQ0IC0wLjIyNTc1LC0wLjAzNDk0IC0wLjMzNTk0LC0wLjA1OTEyYy0zLjI0NjUsLTAuNzk4MTkgLTUuMDQ3MTMsLTMuMzMyNSAtNC41ODQ4NywtNi40NTI2OWMzLjY2MDM4LC0xOC40ODczMSAxNy42OTcxOSwtMjguNTk1IDM5LjU0NjU2LC0yOC41OTVjNC4xMzMzOCwwIDE4LjMwNDU2LDAuNjM5NjIgMjcuMTYyNTYsOC44NjMzOGM4Ljg3NjgxLDguMzE1MTIgOC44NzY4MSwxOC45MjI2OSA4Ljg3NjgxLDMwLjE1MTA2djI1Ljk4MDA2YzAsNi4zNDc4OCAyLjI4MTY5LDkuMjEyNzUgNS4xNjgwNiwxMi44NDA4N2wwLjY1MDM3LDAuODE5NjljMS4yNDE2MywxLjUxMzA2IDEuODMwMTksMy4yMzg0NCAxLjY1MjgxLDQuODUzNjJjLTAuMTU1ODgsMS40MzUxMiAtMC44NzYxMywyLjY5Mjg4IC0yLjA4MjgxLDMuNjQ0MjVjLTMuODM1MDYsMy4wNjY0NCAtMTAuNjk4OTQsOS4wODkxMiAtMTIuNzExODcsMTAuODYyODhjLTAuOTQwNjMsMC45MzI1NiAtMi4yOTc4MSwxLjQyNzA2IC0zLjc1NDQ0LDEuNDI3MDZ6TTEwOS45ODMyNSwxMTUuNDkyNjJjMC4yNzk1LDAuMDg2IDAuNTA3OTQsMC4wNzc5NCAwLjU4ODU2LDAuMDQ4MzhjMi4wODI4MSwtMS44NTE2OSA5LjAzLC03Ljk0Njk0IDEyLjk3NTI1LC0xMS4wOTkzOGMwLjA3Nzk0LC0wLjA4MDYyIC0wLjAwNTM4LC0wLjQxMTE5IC0wLjM5NTA2LC0wLjg4Njg4Yy0wLjAxMzQ0LC0wLjAxNjEyIC0wLjAyNjg3LC0wLjAzMjI1IC0wLjA0MDMxLC0wLjA0ODM3bC0wLjY1MzA2LC0wLjgyNTA2Yy0zLjExNDgxLC0zLjkxNTY5IC02LjMzNDQ0LC03Ljk2MDM4IC02LjMzNDQ0LC0xNi4xODY4MXYtMjUuOTgwMDZjMCwtMTAuODk3ODEgMCwtMTkuNTA1ODcgLTcuMTY3NTYsLTI2LjIxOTI1Yy01Ljg5MSwtNS40NjkwNiAtMTYuMDA0MDYsLTcuNDIwMTkgLTIzLjQ5OTUsLTcuNDIwMTljLTEzLjQ0Mjg3LDAgLTMwLjI5NjE5LDQuMTg3MTIgLTM0LjI1MjE5LDI0LjEzMTA2YzAuMDI2ODgsMC4wODg2OSAwLjE3NzM3LDAuMTk2MTkgMC40NDM0NCwwLjI3OTVsMTUuODE1OTQsMS44MjIxMmMtMC4wMjY4OCwtMC4wODYgMC4xNzczNywtMC40MzUzNyAwLjI5MDI1LC0wLjk3NTU2YzEuNDEwOTQsLTcuMjkxMTkgNy40NTc4MSwtMTEuODQ2NSAxNS43NzAyNSwtMTEuODQ2NWM2LjI0MzA2LDAgMTIuOTYxODEsMy43ODEzMSAxMi45NjE4MSwxMi4wODAzMXY5LjM5MjgxYzAsMS40ODM1IC0xLjIwMTMxLDIuNjg3NSAtMi42ODc1LDIuNjg3NWMtMTAuMTQyNjMsMCAtMjAuNjM3MzEsMCAtMjkuMTIxNzUsMy41NDc1Yy0xMC41MTYxOSw0LjM2NDUgLTE2LjMwMjM3LDEzLjA0NzgxIC0xNi4zMDIzNywyNC40NTYyNWMwLDE0LjM5NDI1IDguMzQyLDIyLjk4NjE5IDIyLjMyMjM3LDIyLjk4NjE5YzExLjMyMjQ0LDAgMTcuNzI2NzUsLTIuNzA2MzEgMjYuMzUwOTQsLTExLjEzN2MwLjU3NTEyLC0wLjU1OSAxLjM1NzE5LC0wLjgzMzEzIDIuMTY4ODEsLTAuNzQ5ODFjMC43OTgxOSwwLjA4NiAxLjUxMzA2LDAuNTI0MDYgMS45NTY1LDEuMTkzMjVsMS4wMTg1NiwxLjU2MTQ0YzIuMTI1ODEsMy4yODk1IDMuNTUyODgsNS40OTA1NiA3Ljc5MTA2LDkuMTg4NTZ6TTc3LjYyNTc1LDEwMi4yNjQ3NWMtOS4wOTE4MSwwIC0xMi4zOTIwNiwtNy4yNzUwNiAtMTIuMzkyMDYsLTEyLjE2MDk0YzAsLTE4LjQ3NjU2IDIwLjAxOTE5LC0xOC40NzY1NiAyOC41NjgxMiwtMTguNDc2NTZjMS40ODYxOSwwIDIuNjg3NSwxLjIwNCAyLjY4NzUsMi42ODc1djMuNDc3NjNjLTAuMDAyNjksMTYuMjM3ODcgLTYuMzQ3ODgsMjQuNDcyMzcgLTE4Ljg2MzU2LDI0LjQ3MjM3ek05MS4xMTE2Myw3Ny4wMzQ1Yy0xNC43MDYsMC4zOTIzOCAtMjAuNTA1NjIsNC4xNjI5NCAtMjAuNTA1NjIsMTMuMDY5MzFjMC4wMTYxMywxLjExOCAwLjQyNzMxLDYuNzg1OTQgNy4wMTcwNiw2Ljc4NTk0YzExLjk1NCwwIDEzLjQ4ODU2LC0xMC4yMDcxMyAxMy40ODg1NiwtMTkuMDk3Mzd6Ij48L3BhdGg+PC9nPjwvZz48L2c+PC9zdmc+"/>

            <div
                className="header__search">
                <div className="header__searchBar">
                    <input
                        className="header__searchInput"
                        type="text" />
                    <SearchIcon className="header__searchIcon" fontSize="medium" />
                </div>

                <MicRoundedIcon className="header__micIcon" fontSize="medium"/>

                <div className="location">
                    <LocalShippingRoundedIcon className="shipping__icon" />
                </div>
                <div className="header__option">
                    <span className="header__optionLineOne">Deliever to</span>
                    <span className="header__optionLineTwo">India</span>
                </div>
                <div className="language">
                    <LanguageRoundedIcon className="language__icon" />
                </div>
                <div className="header__option">
                    <span className="header__optionLineOne">Language</span>
                    <span className="header__optionLineTwo">En</span>
                </div>
            </div>

            <div className="header__nav">
                <PersonRoundedIcon className="person__icon" />
                <div className="header__option">
                    <span className='header__optionLineOne'>
                        Hello Guest
                        </span>
                    <span className='header__optionLineTwo'>
                        Sign In
                        </span>
                </div>

                <div className="header__option">
                    <span className='header__optionLineOne'>
                        Returns
                        </span>
                    <span className='header__optionLineTwo'>
                        & Orders
                        </span>
                </div>
                <div className="header__option">
                    <span className='header__optionLineOne'>
                        Your
                        </span>
                    <span className='header__optionLineTwo'>
                        Prime
                        </span>
                </div>

                <div className="header__optionBasket">
                    <span className="header__optionLineTwo header__basketCount">
                        0
                        </span>
                    <ShoppingCartRoundedIcon className="cart__icon" />
                </div>
            </div>
        </div>

    )
}

export default Header
