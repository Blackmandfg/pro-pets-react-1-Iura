import { ButtonBurger } from "../ButtonBurger/ButtonBurger"
import { ButtonPrimary } from "../ButtonPrimary/ButtonPrimary"
import { ButtonSecondary } from "../ButtonSecondary/ButtonSecondary"
import { Logo } from "../Logo/Logo"
import { CatInBox } from "../icons/CatInBox"
import { PawIcon } from "../icons/PawIcon"

export const Header = () => {
    return (
        <header className="bg-[#266F62] py-[10px]">
            <div className="container m-auto flex justify-between px-[20px]">
                <div>
                    {/* <img src="" alt="logo" /> */}
                    <Logo />
                </div>
                <div className="hidden items-center gap-[15px] sm:flex">
                    <ButtonPrimary icon={<CatInBox />} text="I found a Pet" />
                    <ButtonSecondary icon={<PawIcon />} text="I lost a Pet" />
                </div>
                <ButtonBurger />
            </div>
        </header>
    )
}
