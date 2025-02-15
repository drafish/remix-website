import React from "react";
import rewardsBckMobile from "../../assets/images/rewards-mobile-bck.svg";
import {Section} from "../../scroll-section";
import {sectionId} from "../../constants";

const Rewards = () => {
    return (
        <Section id={sectionId.rewards}>
            <div
                className="md:bg-rewards-desktop-bck bg-no-repeat bg-rewards-background-position 2xl:bg-rewards-background-position-lg">
                <img src={rewardsBckMobile} className="md:hidden m-auto w-full" alt="remix-rewards"/>
                <div className="sm:container sm:m-auto pb-20 pt-10 md:py-50 mx-6">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <div/>
                        <div>
                            <h1 className="font-sfProThin pb-2 md:text-8xl">REMIX REWARDS</h1>
                            <h2 className="text-4xl md:text-5xl font-latoBold pb-6">NFTs FOR OUR USERS</h2>
                            <p className="font-sfProRegular text-gray text-lg pb-6">
                                Remix Project rewards contributors, beta testers, and UX research participants with NFTs
                                deployed on Optimism.
                                Remix Reward holders are able to mint a second “Remixer” NFT badge to any
                                other user of their choice.
                            </p>
                            <p className="font-sfProRegular text-gray text-lg">
                                This feature allows Remix contributors to help
                                grow our user base into a larger and more genuine open source community of practice.
                            </p>
                            <a href="https://rewards.remix.ethereum.eth.limo/" target="_blank" rel="noreferrer">
                                <button className="text-white
                            h-10 w-138
                            rounded-lg
                            border border-blue
                            border-solid
                            bg-blue
                            flex
                            items-center
                            justify-center
                            text-sm
                            font-sfProRegular
                            mt-6
                            ">
                                    Remix Rewards
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    )
};

export default Rewards;
