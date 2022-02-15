import React from 'react'
import "./Home.css";
import Product from "./Product";
import ArrowRightIcon from '@material-ui/icons/ArrowRight';



function Home() {
    return (
        <div className='home'>
            <div className="home__container">
               
                    <Product
                        id="4903850"
                        image='https://www.asus.com/media/IN/products/kKqRzVJHGa1IDdqZ/P_setting_111_1_90_end_225.png'
                        title='ROG MAXIMUS XI EXTREME'
                        info='Intel Z390 EATX gaming motherboard with 802.11ac Wi-Fi, ROG DIMM.2 dual M.2 expansion card, Aura Sync RGB LED, DDR4 4400MHz, four M.2, SATA 6Gbps, HDMI and USB 3.1 Gen 2'
                        price={220.50}
                        rating={5}
                    />

                    <Product
                        id="4903851"
                        title='ROG MAXIMUS XI FORMULA'
                        info='Intel Z390 ATX Gaming motherboard with M.2 heatsink, Aura Sync RGB LED, DDR4 4400MHz, 802.11ac Wi-Fi , dual M.2, SATA 6Gb/s, and USB 3.1 Gen 2'
                        price={225.99}
                        image='https://www.asus.com/media/IN/products/MQ9gaOaFluarIrbV/P_setting_111_1_90_end_225.png'
                        rating={5}
                    />

                    <Product
                        id="4903852"
                        title='ROG MAXIMUS XI HERO'
                        info='Intel Z390 ATX Gaming motherboard with M.2 heatsink, Aura Sync RGB LED, DDR4 4400MHz, dual M.2, SATA 6Gb/s, and USB 3.1 Gen 2'
                        price={299.99}
                        image='https://www.asus.com/media/IN/products/KlHNlGQwkFhViAQE/P_setting_111_1_90_end_225.png'
                        rating={5}
                    />

                    <Product
                        id="4903853"
                        title='ROG STRIX Z390-E GAMING'
                        info='Intel Z390 LGA 1151 ATX gaming motherboard with Aura Sync RGB, 802.11ac Wi-Fi, DDR4 4266z+, dual M.2 with heatsinks, SATA 6Gbps, HDMI, and USB 3.1 Gen 2 '
                        price={322.99}
                        image='https://www.asus.com/media/IN/products/mutJZMS4AmtmyQbV/P_setting_111_1_90_end_225.png'
                        rating={5}
                    />

                    <Product
                        image='https://resource.logitechg.com/e_trim/w_490,h_310,c_limit/c_lpad,ar_413:310,q_auto:best,f_auto,dpr_auto/content/dam/products/gaming/mice/g402-hyperion-fury-fps-gaming-mouse/910-004068/g402-hyperion-fury-ultra-fast-fps-gaming-mouse30.png?v=1'
                        title='G402 HYPERION FURY'
                        info='Logitech G 402 Hyperion Fury Wired Gaming Mouse, 4,000 DPI, Lightweight, 8 Programmable Buttons, Compatible with PC/Mac - Black'
                        price={30.00}
                        rating={5}
                    />

                    <Product
                        image='https://resource.logitechg.com/e_trim/w_490,h_310,c_limit/c_lpad,ar_413:310,q_auto:best,f_auto,dpr_auto/content/dam/gaming/en/products/g502-hero/g502-hero-gallery-1.png?v=1'
                        title='G502 HERO'
                        info='Logitech G502 Hero High Performance Wired Gaming Mouse, Hero 16K Sensor, 16,000 DPI, RGB, Adjustable Weights, 11 Programmable Buttons, On-Board Memory, PC/Mac - Black'
                        price={90.25}
                        rating={5}
                    />

                    <Product
                        image='https://resource.logitechg.com/e_trim/w_490,h_310,c_limit/c_lpad,ar_413:310,q_auto:best,f_auto,dpr_auto/content/dam/gaming/en/products/g300s/g300s-gallery-1.png?v=1'
                        title='G300S'
                        info='Logitech G300s Wired Gaming Mouse, 2,500 DPI, RGB, Lightweight, 9 Programmable Controls, On-Board Memory, Compatible with PC/Mac - Black'
                        price={33.33}
                        rating={4}
                    />
            </div>
        </div>
    )
}

export default Home
