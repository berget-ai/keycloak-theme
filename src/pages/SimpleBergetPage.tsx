import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/Card";

export default function SimpleBergetPage() {
    return (
        <div className="berget-auth-container px-4">
            <Card className="stat-card w-full max-w-2xl mx-auto">
                <CardHeader className="text-center pb-8">
                    <div className="flex justify-center mb-6">
                        <img
                            src="data:image/svg+xml,%3csvg%20width='463'%20height='419'%20viewBox='0%200%20463%20419'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cdefs%3e%3cfilter%20id='invertFilter'%3e%3cfeColorMatrix%20type='matrix'%20values='-1%200%200%200%201%200%20-1%200%200%201%200%200%20-1%200%201%200%200%200%201%200'/%3e%3c/filter%3e%3c/defs%3e%3cpath%20d='M208.739%2017L255.261%2017L446%20403L398%20403L313.5%20255L261.5%20176L233.163%2096.1677L237.815%2098.6522H226.185L230.837%2096.1677L113%20331L64.5%20403L18%20403L208.739%2017Z'%20fill='black'%20filter='url(%23invertFilter)'/%3e%3c/svg%3e"
                            alt="Berget Logo"
                            className="h-16 w-auto logo-animate"
                        />
                    </div>
                    <CardTitle className="text-4xl text-white font-serif mb-2">
                        myrealm
                    </CardTitle>
                    <p className="text-white/60 text-base">Sign in to continue</p>
                </CardHeader>

                <CardContent className="space-y-5">
                    <div>
                        <label className="block text-white/70 text-sm font-medium mb-2">
                            Username or email
                        </label>
                        <input
                            type="text"
                            className="berget-input w-full"
                            placeholder="Enter your username"
                        />
                    </div>

                    <div>
                        <label className="block text-white/70 text-sm font-medium mb-2">
                            Password
                        </label>
                        <input
                            type="password"
                            className="berget-input w-full"
                            placeholder="Enter your password"
                        />
                    </div>

                    <div className="flex items-center justify-between pt-2">
                        <label className="flex items-center text-white/80 text-sm cursor-pointer">
                            <input
                                type="checkbox"
                                className="mr-2 w-4 h-4 rounded accent-primary"
                            />
                            Remember me
                        </label>
                        <a
                            href="#"
                            className="text-primary hover:text-secondary transition-colors text-sm"
                        >
                            Forgot Password?
                        </a>
                    </div>

                    <button
                        type="button"
                        className="w-full font-medium py-3.5 px-4 rounded-xl mt-6 shadow-lg hover:shadow-xl"
                        style={{
                            backgroundColor: "white",
                            color: "black",
                            transition: "all 0.2s ease"
                        }}
                        onMouseEnter={e => {
                            e.currentTarget.style.backgroundColor =
                                "rgba(255, 255, 255, 0.9)";
                        }}
                        onMouseLeave={e => {
                            e.currentTarget.style.backgroundColor = "white";
                        }}
                    >
                        Sign In
                    </button>

                    <div className="text-center pt-6">
                        <span className="text-white/60 text-sm">
                            New user?{" "}
                            <a
                                href="#"
                                className="text-primary hover:text-secondary transition-colors"
                            >
                                Register
                            </a>
                        </span>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
