import React, {useState} from "react";
import pluginsMobileBck from "../../assets/images/plugins-mobile-bck.svg";
import documentIcon from "../../assets/images/documentation-icon.svg";
import githubIconBlue from "../../assets/images/github-icon-blue.svg";
import twoArrowsIcon from "../../assets/images/arrows-icon.svg";
import etherScanIcon from "../../assets/images/etherscan-icon.svg";
import twoDocumentsIcon from "../../assets/images/documents-icon.svg";
import bugIcon from "../../assets/images/bugs-icon.svg";
import chartIcon from "../../assets/images/chart-icon.svg";
import tickIcon from "../../assets/images/ticks-icon.svg";
import verifiedIcon from "../../assets/images/verified-icon.svg";
import contractIcon from "../../assets/images/contract-deployer.svg";
import skyIcon from "../../assets/images/starknet.svg"
import faceIcon from "../../assets/images/zokrates.svg"
import bracketIcon from "../../assets/images/sourcify.svg"
import {Section} from "../../scroll-section";
import {sectionId} from "../../constants";

const Plugins = () => {
    const [showCorePlugins, setShowCorePlugins] = useState(true);
    const [showAdditionalPlugins, setShowAdditionalPlugins] = useState(false);

    const handelShowAdditionalPlugins = () => {
        setShowCorePlugins(false);
        setShowAdditionalPlugins(true)
    }

    const handleShowCorePlugins = () => {
        setShowAdditionalPlugins(false)
        setShowCorePlugins(true)
    }

    return (
        <Section id={sectionId.plugins}>
            <div className="md:bg-plugins-desktop
        bg-no-repeat
        bg-plugins-background-position">
                <img src={pluginsMobileBck} className="md:hidden m-auto w-full" alt="plugins"/>
                <div className="sm:container sm:m-auto pb-20 pt-10 md:py-50 mx-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24">
                        <div>
                            <h1 className="font-sfProThin pb-2 md:text-8xl">PLUGINS</h1>
                            <h2 className="text-4xl md:text-5xl font-latoBold pb-6">EVERYTHING IS A PLUGIN</h2>
                            <p className="
                                font-sfProRegular
                                text-gray
                                text-lg pb-6">
                                In Remix, everything is a plugin. Core plugins are preloaded for essential operations.
                                Additional plugins offer an expanded palette of tools.
                            </p>
                            <p className="
                                font-sfProRegular
                                text-gray
                                text-lg pb-6">
                                The Remix team builds all core plugins and some additional plugins, all of which are
                                designated by the green checkmark.
                                We also support teams who build plugins to allow their projects to be used inside of
                                Remix.
                            </p>
                        </div>
                    </div>
                    <div className="mt-10 mb-8">
                        <button className={
                            !showAdditionalPlugins ? `border
                        border-solid
                        border-blue
                        text-white text-sm
                        bg-blue
                        px-4 py-1.5 mr-4
                        font-sfProSemiBold
                        rounded-[18.5px]` : `text-gray text-sm font-sfProSemiBold mr-4`}
                                onClick={handleShowCorePlugins}>
                            Core Plugins
                        </button>
                        <button className={
                            !showCorePlugins ? `border
                        border-solid
                        border-blue
                        text-white text-sm
                        bg-blue
                        px-4 py-1.5 mr-4
                        font-sfProSemiBold
                        rounded-[18.5px]` : `text-gray text-sm font-sfProSemiBold`}
                                onClick={handelShowAdditionalPlugins}>
                            Additional Plugins
                        </button>
                    </div>
                    {showCorePlugins &&
                        <div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                <a href="https://remix-ide.readthedocs.io/en/latest/compile.html" target="_blank"
                                   rel="noreferrer">
                                    <div
                                        className="bg-white border border-borderColor border-solid rounded-lg p-4 min-h-[13.75rem] hover:border-black relative">
                                        <div className="flex justify-between items-start">
                                            <img src={twoArrowsIcon} alt="arrows" className="mb-3"/>
                                            <div
                                                className="relative group inline-block underline duration-300">
                                                <img  src={verifiedIcon} alt="✓"/>
                                                <span
                                                    className="absolute hidden
                                                    group-hover:block -right-12 -top-2 -translate-y-full h-5 py-1 px-3 rounded-[18.5px]
                                                    z-10 w-32 text-center
                                                    bg-gray break-normal text-white text-xxs font-sfProSemiBold after:absolute after:left-1/2 after:top-[100%] after:-translate-x-1/2">Maintained by Remix</span>
                                            </div>
                                        </div>
                                        <h5 className="font-latoBold text-black text-xl pb-4">Solidity Compiler</h5>

                                        <p className="font-sfProRegular text-gray text-sm">
                                            Compiles Solidity and YUL contracts. Accesses compilation details.
                                            Publishes compiled contract and metadata to IPFS or Swarm.
                                        </p>
                                    </div>
                                </a>
                                <a href="https://remix-ide.readthedocs.io/en/latest/run.html" target="_blank"
                                   rel="noreferrer">
                                    <div
                                        className="bg-white border border-borderColor border-solid rounded-lg p-4 min-h-[13.75rem] hover:border-black relative">
                                        <div className="flex justify-between items-start">
                                            <img src={etherScanIcon} alt="arrows" className="mb-3"/>
                                            <div
                                                className="group relative inline-block text-blue-500 underline hover:text-red-500 duration-300">
                                                <img src={verifiedIcon} alt="✓"/>
                                                <span
                                                    className="absolute hidden
                                                    group-hover:block -right-12 -top-2 -translate-y-full h-5 py-1 px-3 rounded-[18.5px]
                                                    z-10 w-32 text-center
                                                    bg-gray break-normal text-white text-xxs font-sfProSemiBold after:absolute after:left-1/2 after:top-[100%] after:-translate-x-1/2">Maintained by Remix</span>
                                            </div>
                                        </div>
                                        <h5 className="font-latoBold text-black text-xl pb-4">Deploy & Run</h5>
                                        <p className="font-sfProRegular text-gray text-sm">
                                            Deploys contracts to the in-browser chain (Remix VM), local nodes, or public
                                            networks.
                                            Accesses and interacts with deployed contracts. Records and plays back
                                            transactions.
                                        </p>
                                    </div>
                                </a>
                                <a href="https://remix-ide.readthedocs.io/en/latest/file_explorer.html" target="_blank"
                                   rel="noreferrer">
                                    <div
                                        className="bg-white border border-borderColor border-solid rounded-lg p-4 min-h-[13.75rem] hover:border-black relative">
                                        <div className="flex justify-between items-start">
                                            <img src={twoDocumentsIcon} alt="arrows" className="mb-3"/>
                                            <div
                                                className="group relative inline-block text-blue-500 underline hover:text-red-500 duration-300">
                                                <img src={verifiedIcon} alt="✓"/>
                                                <span
                                                    className="absolute hidden
                                                    group-hover:block -right-12 -top-2 -translate-y-full h-5 py-1 px-3 rounded-[18.5px]
                                                    z-10 w-32 text-center
                                                    bg-gray break-normal text-white text-xxs font-sfProSemiBold after:absolute after:left-1/2 after:top-[100%] after:-translate-x-1/2">Maintained by Remix</span>
                                            </div>
                                        </div>
                                        <h5 className="font-latoBold text-black text-xl pb-4">File Explorer</h5>
                                        <p className="font-sfProRegular text-gray text-sm">
                                            Organizes files in Workspaces and folders, clones Git repos,
                                            uploads files, creates GISTs, flattens files and more.
                                        </p>
                                    </div>
                                </a>
                                <a href="https://remix-ide.readthedocs.io/en/latest/debugger.html" target="_blank"
                                   rel="noreferrer">
                                    <div
                                        className="bg-white border border-borderColor border-solid rounded-lg p-4 min-h-[13.75rem] hover:border-black relative">
                                        <div className="flex justify-between items-start">
                                            <img src={bugIcon} alt="arrows" className="mb-3"/>
                                            <div
                                                className="group relative inline-block text-blue-500 underline hover:text-red-500 duration-300">
                                                <img src={verifiedIcon} alt="✓"/>
                                                <span
                                                    className="absolute hidden
                                                    group-hover:block -right-12 -top-2 -translate-y-full h-5 py-1 px-3 rounded-[18.5px]
                                                    z-10 w-32 text-center
                                                    bg-gray break-normal text-white text-xxs font-sfProSemiBold after:absolute after:left-1/2 after:top-[100%] after:-translate-x-1/2">Maintained by Remix</span>
                                            </div>
                                        </div>
                                        <h5 className="font-latoBold text-black text-xl pb-4">Debugger</h5>
                                        <p className="font-sfProRegular text-gray text-sm">
                                            A visual debugger that includes breakpoints and a stepper.
                                            Checks high and low level parameters, and fetches and debugs transactions of
                                            verified contracts.
                                        </p>
                                    </div>
                                </a>
                                <a href="https://remix-ide.readthedocs.io/en/latest/static_analysis.html"
                                   target="_blank" rel="noreferrer">
                                    <div
                                        className="bg-white border border-borderColor border-solid rounded-lg p-4 min-h-[13.75rem] hover:border-black relative">
                                        <div className="flex justify-between items-start">
                                            <img src={chartIcon} alt="arrows" className="mb-3"/>
                                            <div
                                                className="group relative inline-block text-blue-500 underline hover:text-red-500 duration-300">
                                                <img src={verifiedIcon} alt="✓"/>
                                                <span
                                                    className="absolute hidden
                                                    group-hover:block -right-12 -top-2 -translate-y-full h-5 py-1 px-3 rounded-[18.5px]
                                                    z-10 w-32 text-center
                                                    bg-gray break-normal text-white text-xxs font-sfProSemiBold after:absolute after:left-1/2 after:top-[100%] after:-translate-x-1/2">Maintained by Remix</span>
                                            </div>
                                        </div>
                                        <h5 className="font-latoBold text-black text-xl pb-4">Solidity Analyzers</h5>
                                        <p className="font-sfProRegular text-gray text-sm">
                                            Examines and debugs code without actually executing it. Integrates with
                                            Slither.
                                        </p>
                                    </div>
                                </a>
                                <a href="https://remix-ide.readthedocs.io/en/latest/unittesting.html" target="_blank"
                                   rel="noreferrer">
                                    <div
                                        className="bg-white border border-borderColor border-solid rounded-lg p-4 min-h-[13.75rem] hover:border-black relative">
                                        <div className="flex justify-between items-start">
                                            <img src={tickIcon} alt="arrows" className="mb-3"/>
                                            <div
                                                className="group relative inline-block text-blue-500 underline hover:text-red-500 duration-300">
                                                <img src={verifiedIcon} alt="✓"/>
                                                <span
                                                    className="absolute hidden
                                                    group-hover:block -right-12 -top-2 -translate-y-full h-5 py-1 px-3 rounded-[18.5px]
                                                    z-10 w-32 text-center
                                                    bg-gray break-normal text-white text-xxs font-sfProSemiBold after:absolute after:left-1/2 after:top-[100%] after:-translate-x-1/2">Maintained by Remix</span>
                                            </div>
                                        </div>
                                        <h5 className="font-latoBold text-black text-xl pb-4">Solidity Unit Testing</h5>
                                        <p className="font-sfProRegular text-gray text-sm">
                                            Runs unit tests written in Solidity.
                                        </p>
                                    </div>
                                </a>
                                <a href="https://remix-ide.readthedocs.io/en/latest/remixd.html" target="_blank"
                                   rel="noreferrer">
                                    <div
                                        className="bg-white border border-borderColor border-solid rounded-lg p-4 min-h-[13.75rem] hover:border-black relative">
                                        <div className="flex justify-between items-start">
                                            <img src={tickIcon} alt="arrows" className="mb-3"/>
                                            <div
                                                className="group relative inline-block text-blue-500 underline hover:text-red-500 duration-300">
                                                <img src={verifiedIcon} alt="✓"/>
                                                <span
                                                    className="absolute hidden
                                                    group-hover:block -right-12 -top-2 -translate-y-full h-5 py-1 px-3 rounded-[18.5px]
                                                    z-10 w-32 text-center
                                                    bg-gray break-normal text-white text-xxs font-sfProSemiBold after:absolute after:left-1/2 after:top-[100%] after:-translate-x-1/2">Maintained by Remix</span>
                                            </div>
                                        </div>
                                        <h5 className="font-latoBold text-black text-xl pb-4">Remixd</h5>
                                        <p className="font-sfProRegular text-gray text-sm">
                                            An npm package run locally to connect a folder on your filesystem to the
                                            Remix website.
                                        </p>
                                    </div>
                                </a>

                                <div className="p-4">
                                    <a href="https://remix-ide.readthedocs.io/en/latest/plugin_list.html#core-plugins"
                                       rel="noreferrer"
                                       target="_blank"
                                       className="text-xl text-black font-latoBold mt-4 md:mt-24 block hover:underline"
                                    >View All</a>
                                    <p className="font-sfProRegular text-gray text-sm">Explore all our core plugins on
                                        GitHub</p>
                                </div>
                            </div>
                        </div>
                    }
                    {showAdditionalPlugins &&
                        <div>
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                                <a href="https://github.com/ethereum/sourcify" target="_blank" rel="noreferrer">
                                    <div
                                        className="bg-white border border-borderColor border-solid rounded-lg p-4 min-h-[13.75rem] hover:border-black relative">
                                        <div className="flex justify-between items-start">
                                            <img src={bracketIcon} alt="arrows" className="mb-3"/>
                                            <div
                                                className="group relative inline-block text-blue-500 underline hover:text-red-500 duration-300">
                                                <img src={verifiedIcon} alt="✓"/>
                                                <span
                                                    className="absolute hidden
                                                    group-hover:block -right-12 -top-2 -translate-y-full h-5 py-1 px-3 rounded-[18.5px]
                                                    z-10 w-32 text-center
                                                    bg-gray break-normal text-white text-xxs font-sfProSemiBold after:absolute after:left-1/2 after:top-[100%] after:-translate-x-1/2">Maintained by Remix</span>
                                            </div>
                                        </div>
                                        <h5 className="font-latoBold text-black text-xl pb-4">Sourcify</h5>
                                        <p className="font-sfProRegular text-gray text-sm">
                                            Verifies and fetches verified contracts.
                                        </p>
                                    </div>
                                </a>
                                <a href="https://remix-etherscan-plugin.readthedocs.io/en/latest/" target="_blank"
                                   rel="noreferrer">
                                    <div
                                        className="bg-white border border-borderColor border-solid rounded-lg p-4 min-h-[13.75rem] hover:border-black relative">
                                        <div className="flex justify-between items-start">
                                            <img src={etherScanIcon} alt="etherscan" className="mb-3"/>
                                            <p className="bg-green
                                text-white
                                text-xxs
                                font-sfProSemiBold
                                border
                                py-0.5 px-3
                                rounded-[18.5px]
                                border-solid
                                border-green">Verified</p>
                                        </div>
                                        <h5 className="font-latoBold text-black text-xl pb-4">Etherscan</h5>
                                        <p className="font-sfProRegular text-gray text-sm">
                                            Verifies contracts on Etherscan.
                                        </p>
                                    </div>
                                </a>
                                <a href="https://docs.tenderly.co/monitoring/integrations#remix" target="_blank"
                                   rel="noreferrer">
                                    <div
                                        className="bg-white border border-borderColor border-solid rounded-lg p-4 min-h-[13.75rem] hover:border-black relative">
                                        <div className="flex justify-between items-start">
                                            <img src={twoDocumentsIcon} alt="arrows" className="mb-3"/>
                                            <p className="bg-lightGray
                                text-white
                                text-xxs
                                font-sfProSemiBold
                                border
                                py-0.5 px-3
                                rounded-[18.5px]
                                border-solid
                                border-lightGray">Beta</p>
                                        </div>
                                        <h5 className="font-latoBold text-black text-xl pb-4">Tenderly</h5>
                                        <p className="font-sfProRegular text-gray text-sm">
                                            Verifies contracts on Tenderly. Imports Tenderly projects into Remix.
                                        </p>
                                    </div>
                                </a>
                                <a href="https://github.com/bunsenstraat/flattener/issues" target="_blank"
                                   rel="noreferrer">
                                    <div
                                        className="bg-white border border-borderColor border-solid rounded-lg p-4 min-h-[13.75rem] hover:border-black relative group">
                                        <img src={bugIcon} alt="bug" className="mb-3"/>
                                        <h5 className="font-latoBold text-black text-xl pb-4">Flattener</h5>
                                        <p className="font-sfProRegular text-gray text-sm">
                                            Flattens compiled contracts.
                                        </p>
                                    </div>
                                </a>
                                <a href="https://github.com/EdsonAlcala/remix-gas-profiler" target="_blank"
                                   rel="noreferrer">
                                    <div
                                        className="bg-white border border-borderColor border-solid rounded-lg p-4 min-h-[13.75rem] hover:border-black relative group">
                                        <img src={chartIcon} alt="chart" className="mb-3"/>
                                        <h5 className="font-latoBold text-black text-xl pb-4">Gas Profiler,</h5>
                                        <p className="font-sfProRegular text-gray text-sm">
                                            Displays the gas costs for every transaction executed.
                                            Displays total execution costs and per line costs.
                                        </p>
                                    </div>
                                </a>
                                <a href="https://remix-learneth-plugin.readthedocs.io/en/latest/index.html"
                                   target="_blank" rel="noreferrer">
                                    <div
                                        className="bg-white border border-borderColor border-solid rounded-lg p-4 min-h-[13.75rem] hover:border-black relative group">
                                        <img src={tickIcon} alt="arrows" className="mb-3"/>
                                        <h5 className="font-latoBold text-black text-xl pb-4">LearnEth</h5>
                                        <p className="font-sfProRegular text-gray text-sm">
                                            Tutorials about Solidity and Remix features, with quizzes to check progress.
                                        </p>
                                    </div>
                                </a>
                                <a href="https://zokrates.github.io/" target="_blank" rel="noreferrer">
                                    <div
                                        className="bg-white border border-borderColor border-solid rounded-lg p-4 min-h-[13.75rem] hover:border-black relative group">
                                        <img src={faceIcon} alt="arrows" className="mb-3"/>
                                        <h5 className="font-latoBold text-black text-xl pb-4">ZoKrates</h5>
                                        <p className="font-sfProRegular text-gray text-sm">
                                            A toolbox for zkSNARKs on Ethereum.
                                        </p>
                                    </div>
                                </a>
                                <a href="https://github.com/groksmith/starkware-remix-plugin" target="_blank"
                                   rel="noreferrer">
                                    <div
                                        className="bg-white border border-borderColor border-solid rounded-lg p-4 min-h-[13.75rem] hover:border-black relative group">
                                        <img src={skyIcon} alt="arrows" className="mb-3"/>
                                        <h5 className="font-latoBold text-black text-xl pb-4">Starknet</h5>
                                        <p className="font-sfProRegular text-gray text-sm">
                                            Compiles contracts written in Cairo, and deploys to Starknet chains.
                                        </p>
                                    </div>
                                </a>
                                <a href="https://github.com/hexdivision/remix-contract-deployer-plugin" target="_blank"
                                   rel="noreferrer">
                                    <div
                                        className="bg-white border border-borderColor border-solid rounded-lg p-4 min-h-[13.75rem] hover:border-black relative group">
                                        <img src={contractIcon} alt="arrows" className="mb-3"/>
                                        <h5 className="font-latoBold text-black text-xl pb-4">Contract Deployer</h5>
                                        <p className="font-sfProRegular text-gray text-sm">
                                            Gives contracts the same address when deploying to different chains.
                                        </p>
                                    </div>
                                </a>

                                <div className="p-4">
                                    <a href="https://remix-ide.readthedocs.io/en/latest/plugin_list.html#additional-plugins"
                                       rel="noreferrer"
                                       target="_blank"
                                       className="text-xl text-black font-latoBold mt-4 md:mt-24 block hover:underline"
                                    >View All</a>
                                    <p className="font-sfProRegular text-gray text-sm">
                                        Explore documentation for all our additional plugins.
                                    </p>
                                </div>
                            </div>

                        </div>

                    }
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 my-8">
                        <div>
                            <h3 className="pb-4 text-middle text-black font-latoBold">Remix Plugin Engine</h3>
                            <p className="text-base text-gray font-sfProRegular pb-4">The Remix Plugin Engine
                                manages the communication between plugins. Plugin developers should start
                                <a href="https://github.com/ethereum/remix-plugin/" target="_blank" rel="noreferrer"
                                   className="text-blue hover:underline"
                                > here</a>.
                                Remix plugins use bootstrap and should abide by our UI Standards.
                            </p>
                            <p className="text-base text-gray font-sfProRegular pb-9">
                                Any project that wants to use our plugins can implement the Remix Plugin Engine. See
                                our example project
                                <a href="https://github.com/ethereum/remix-plugin/tree/master/examples/example"
                                   target="_blank" rel="noreferrer"
                                   className="text-blue hover:underline"
                                > here</a>.
                                Currently the Remix Plugin Engine is used in the
                                <a href="https://remix.ethereum.org" target="_blank" rel="noreferrer"
                                   className="text-blue hover:underline"
                                > Remix IDE</a> and the
                                <a href="https://marketplace.visualstudio.com/items?itemName=RemixProject.ethereum-remix"
                                   target="_blank" rel="noreferrer"
                                   className="text-blue hover:underline"
                                > Remix VSCode</a> extension.
                            </p>

                            <div className="grid grid-cols-3 justify-items-start items-end">
                                <div className="flex flex-col items-center">
                                    <a href="https://remix-plugin-docs.readthedocs.io/en/latest/" rel="noreferrer"
                                       target="_blank">
                                        <img className="m-auto" src={documentIcon} alt="documentation"/>
                                        <p className="text-blue text-sm font-sfProSemiBold pt-2 hover:underline">Documentation</p>
                                    </a>
                                </div>
                                <div className="flex flex-col items-center">
                                    <a href="https://github.com/ethereum/remix-plugin"
                                       rel="noreferrer" target="_blank">
                                        <img className="m-auto" src={githubIconBlue} alt="plugin"/>
                                        <p className="text-blue text-sm font-sfProSemiBold pt-2 hover:underline">Remix-plugin</p>
                                    </a>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </Section>
    )
};

export default Plugins;
