(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [931], {
        7674: function (e, t, r) {
            Promise.resolve().then(r.bind(r, 3461))
        },
        3461: function (e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function () {
                    return e0
                }
            });
            var l, s, i, n, a, o, c, h, p, d, f, u, _, x, v, g, y = r(3827),
                m = r(4090);
            let j = (0, m.createContext)({}),
                w = e => {
                    let {
                        children: t
                    } = e, [r, l] = (0, m.useState)("loader"), [s, i] = (0, m.useState)(!1);
                    return (0, m.useEffect)(() => { }, []), (0, y.jsx)(j.Provider, {
                        value: {
                            currentState: r,
                            setCurrentState: l,
                            isMuted: s,
                            setIsMuted: i
                        },
                        children: t
                    })
                },
                z = () => (0, m.useContext)(j);
            var M = r(3696),
                E = JSON.parse('{"yh":{"M0":"THE RCADE AWAITS,\\nPOWERED BY <span>NODES</span>","OT":"THE RCADE AWAITS,\\nPOWERED BY NODES","ar":"Initiate power-up"},"DH":[["Power status low. More juice required."],["Prepare to plug-in."],["Power the Network, Upheld by *Nodes*."]],"O5":"/assets/video/node_v5_optimised.mp4","S8":"/assets/video/node_v5_optimised.webm","iF":"\xa9 2024 Revolving Games","lu":{"iR":"Purchase Node Pre-Sale","p4":"https://sale.rcade.network"},"dk":[{"text":"Contact us","link":"mailto:hello@revolvinggames.com"},{"text":"Terms of use","link":"https://docs.google.com/document/d/e/2PACX-1vQn144C61Y7dY5Mj2-lDN4bRBvTWXYD4b47JU-6UZi9NDxp2u11Eq75rgr4ckiftvaOJOVI3msfnnNH/pub"},{"text":"Privacy Policy","link":"https://docs.google.com/document/d/e/2PACX-1vQ3pNr1TyyGodbfedV3mMhZT6rbnChwJpj7V7h1GPc_im0nJKdkfXY3G8ByX55V9-z-c8eP17IZZDnL/pub"}],"KT":[{"type":"x-twitter","link":"https://twitter.com/revolving_games","aria":"Follow us on X"},{"type":"discord","link":"https://discord.com/invite/revolvinggames","aria":"Follow us on Discord"},{"type":"medium","link":"https://medium.com/@RevolvingGames","aria":"Follow us on Medium"},{"type":"linkedin","link":"https://www.linkedin.com/company/revolvinggames/","aria":"Follow us on Linkedin"}]}'),
                b = r(779),
                O = r(1376),
                L = r.n(O);
            let B = (0, b.z)("div", {
                css: L().VideoWrapper
            }),
                S = (0, b.z)("div", {
                    css: L().VideoFlash
                });
            var k = () => {
                let {
                    currentState: e
                } = z(), t = (0, m.useRef)(null), r = (0, m.useRef)(null);
                return (0, m.useEffect)(() => {
                    if (t.current) {
                        let l = t.current,
                            s = r.current;
                        "loader" == e && (M.ZP.set(l, {
                            scale: .6
                        }), M.ZP.set(s, {
                            opacity: .6
                        })), "loader" !== e && (M.ZP.to(l, {
                            scale: 1,
                            duration: 1.2,
                            ease: "power1.inOut",
                            delay: 2
                        }), M.ZP.to(s, {
                            opacity: 0,
                            duration: 1.2,
                            ease: "power1.Out",
                            delay: 2
                        }), t.current.play())
                    }
                }, [e]), (0, y.jsxs)(y.Fragment, {
                    children: [(0, y.jsxs)(B, {
                        children: [(0, y.jsxs)("video", {
                            ref: t,
                            loop: !0,
                            playsInline: !0,
                            muted: !0,
                            children: [(0, y.jsx)("source", {
                                src: E.O5,
                                type: "video/mp4"
                            }), (0, y.jsx)("source", {
                                src: E.S8,
                                type: "video/webm"
                            }), "Your browser does not support the video tag."]
                        }), (0, y.jsx)(S, {
                            ref: r
                        })]
                    }), (0, y.jsx)("div", {
                        style: {
                            position: "absolute",
                            zIndex: "6",
                            top: "0",
                            width: "100%",
                            height: "100%",
                            pointerEvents: "none",
                            backgroundImage: "url(/assets/svg/grid.svg)"
                        }
                    })]
                })
            },
                W = r(2846);

            function P() {
                return (P = Object.assign ? Object.assign.bind() : function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var l in r) Object.prototype.hasOwnProperty.call(r, l) && (e[l] = r[l])
                    }
                    return e
                }).apply(this, arguments)
            }
            var F = function (e) {
                return W.createElement("svg", P({
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 354 71"
                }, e), l || (l = W.createElement("g", {
                    shapeRendering: "crispEdges"
                }, W.createElement("path", {
                    fill: "#000",
                    fillOpacity: .7,
                    d: "M0 0h354v71H0z"
                }), W.createElement("path", {
                    stroke: "#fff",
                    strokeOpacity: .2,
                    d: "M.5.5h353v70H.5z"
                }), W.createElement("path", {
                    stroke: "url(#start_btn_new_svg__a)",
                    d: "M.5.5h353v70H.5z"
                }))), s || (s = W.createElement("path", {
                    fill: "#fff",
                    fillOpacity: .2,
                    d: "M8 8h3v3H8zM343 8h3v3h-3zM8 60h3v3H8zM343 60h3v3h-3z"
                })), i || (i = W.createElement("defs", null, W.createElement("linearGradient", {
                    id: "start_btn_new_svg__a",
                    x1: 267.5,
                    x2: 0,
                    y1: 71,
                    y2: 8,
                    gradientUnits: "userSpaceOnUse"
                }, W.createElement("stop", {
                    stopColor: "#fff",
                    stopOpacity: 0
                }), W.createElement("stop", {
                    offset: .666,
                    stopColor: "#fff"
                }), W.createElement("stop", {
                    offset: 1,
                    stopColor: "#fff",
                    stopOpacity: 0
                })))))
            };

            function H() {
                return (H = Object.assign ? Object.assign.bind() : function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var l in r) Object.prototype.hasOwnProperty.call(r, l) && (e[l] = r[l])
                    }
                    return e
                }).apply(this, arguments)
            }
            var R = function (e) {
                return W.createElement("svg", H({
                    xmlns: "http://www.w3.org/2000/svg",
                    width: 22,
                    height: 22,
                    fill: "none"
                }, e), n || (n = W.createElement("g", {
                    fill: "#fff",
                    clipPath: "url(#BT_X_svg__a)"
                }, W.createElement("path", {
                    d: "m10.125 13.608-5.65 6.451h-3.13l7.318-8.36zM11.832 7.54l5.173-5.917h3.128L13.28 9.46z"
                }), W.createElement("path", {
                    d: "M21.337 20.059h-6.293L.942 1.623h6.454zm-5.43-1.872h1.733L6.454 3.397h-1.86z"
                }))), a || (a = W.createElement("defs", null, W.createElement("clipPath", {
                    id: "BT_X_svg__a"
                }, W.createElement("path", {
                    fill: "#fff",
                    d: "M.604.307h21.07v21.069H.603z"
                })))))
            };

            function C() {
                return (C = Object.assign ? Object.assign.bind() : function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var l in r) Object.prototype.hasOwnProperty.call(r, l) && (e[l] = r[l])
                    }
                    return e
                }).apply(this, arguments)
            }
            var V = function (e) {
                return W.createElement("svg", C({
                    xmlns: "http://www.w3.org/2000/svg",
                    width: 38,
                    height: 22,
                    fill: "none"
                }, e), o || (o = W.createElement("g", {
                    fill: "#fff",
                    clipPath: "url(#BT_Medium_svg__a)"
                }, W.createElement("path", {
                    d: "M21.25 10.841c0 5.818-4.684 10.535-10.462 10.535S.325 16.658.325 10.84 5.01.306 10.788.306c5.779 0 10.463 4.717 10.463 10.535M32.729 10.84c0 5.477-2.343 9.919-5.232 9.919s-5.231-4.442-5.231-9.918c0-5.477 2.342-9.918 5.23-9.918 2.89 0 5.232 4.44 5.232 9.918M37.423 10.84c0 4.906-.824 8.886-1.84 8.886s-1.84-3.979-1.84-8.885c0-4.907.824-8.885 1.84-8.885s1.84 3.978 1.84 8.885"
                }))), c || (c = W.createElement("defs", null, W.createElement("clipPath", {
                    id: "BT_Medium_svg__a"
                }, W.createElement("path", {
                    fill: "#fff",
                    d: "M.325.306h37.098v21.07H.325z"
                })))))
            };

            function T() {
                return (T = Object.assign ? Object.assign.bind() : function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var l in r) Object.prototype.hasOwnProperty.call(r, l) && (e[l] = r[l])
                    }
                    return e
                }).apply(this, arguments)
            }
            var A = function (e) {
                return W.createElement("svg", T({
                    xmlns: "http://www.w3.org/2000/svg",
                    width: 33,
                    height: 32,
                    fill: "none"
                }, e), h || (h = W.createElement("path", {
                    fill: "#fff",
                    d: "M10.122 27.035H5.513V11.89h4.74v15.144zm-2.37-17.25c-1.449 0-2.766-1.186-2.766-2.766 0-1.448 1.185-2.765 2.766-2.765 1.448 0 2.765 1.185 2.765 2.765S9.332 9.784 7.752 9.784m20.015 17.25h-4.74V19.66c0-1.712 0-3.95-2.37-3.95-2.502 0-2.766 1.843-2.766 3.818v7.506h-4.74V11.89h4.477v2.107c.658-1.185 2.107-2.37 4.477-2.37 4.74 0 5.662 3.16 5.662 7.243z"
                })))
            };

            function I() {
                return (I = Object.assign ? Object.assign.bind() : function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var l in r) Object.prototype.hasOwnProperty.call(r, l) && (e[l] = r[l])
                    }
                    return e
                }).apply(this, arguments)
            }
            var U = function (e) {
                return W.createElement("svg", I({
                    xmlns: "http://www.w3.org/2000/svg",
                    width: 29,
                    height: 22,
                    fill: "none"
                }, e), p || (p = W.createElement("g", {
                    clipPath: "url(#BT_Discord_svg__a)"
                }, W.createElement("path", {
                    fill: "#fff",
                    d: "M24.017 2.07A23 23 0 0 0 18.28.307q-.406.728-.734 1.494a21.4 21.4 0 0 0-6.365 0 16 16 0 0 0-.735-1.494 23.2 23.2 0 0 0-5.74 1.77C1.077 7.445.094 12.681.586 17.844a23.1 23.1 0 0 0 7.034 3.53 17 17 0 0 0 1.506-2.428 15 15 0 0 1-2.372-1.133 27 27 0 0 0 .582-.437 16.52 16.52 0 0 0 14.063 0q.286.234.582.437c-.758.447-1.553.827-2.377 1.135.433.85.937 1.662 1.507 2.427a23 23 0 0 0 7.038-3.53c.577-5.986-.986-11.175-4.132-15.775M9.75 14.67c-1.371 0-2.504-1.245-2.504-2.775s1.093-2.786 2.5-2.786c1.405 0 2.529 1.255 2.505 2.786-.024 1.53-1.104 2.775-2.501 2.775m9.235 0c-1.373 0-2.501-1.245-2.501-2.775s1.093-2.786 2.501-2.786c1.409 0 2.524 1.255 2.5 2.786-.024 1.53-1.102 2.775-2.5 2.775"
                }))), d || (d = W.createElement("defs", null, W.createElement("clipPath", {
                    id: "BT_Discord_svg__a"
                }, W.createElement("path", {
                    fill: "#fff",
                    d: "M.465.307h27.799v21.07H.464z"
                })))))
            },
                G = r(4537),
                D = r.n(G);
            let Z = (0, b.z)("div", {
                css: D().SocialButtonsWrapper
            }),
                q = (0, b.z)("div", {
                    css: D().ButtonContainer,
                    variants: {
                        active: {
                            true: D().ButtonContainer_Active
                        }
                    }
                }),
                X = (0, b.z)("div", {
                    css: D().SocialIcon
                }),
                N = [
                    [72.4258],
                    [71.9209, 74.5537],
                    [70.415, 73.0479, 75.6807],
                    [68.9106, 71.5449, 74.1782, 76.8115]
                ],
                Q = (0, m.forwardRef)((e, t) => (0, y.jsx)(Z, {
                    ref: t,
                    children: E.KT.map((e, t) => (0, y.jsx)("a", {
                        href: e.link,
                        target: "_blank",
                        "aria-label": e.aria,
                        children: (0, y.jsxs)(q, {
                            children: [(0, y.jsxs)("svg", {
                                width: "100%",
                                height: "100%",
                                viewBox: "0 0 85 106",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: [(0, y.jsx)("rect", {
                                    name: "background",
                                    x: "0.436035",
                                    y: "0.167969",
                                    width: "84.277",
                                    height: "105.347"
                                }), (0, y.jsx)("rect", {
                                    name: "border",
                                    x: "1.09445",
                                    y: "0.826384",
                                    width: "82.9602",
                                    height: "104.03",
                                    stroke: "white",
                                    strokeOpacity: "0.2",
                                    strokeWidth: "1.31683"
                                }), (0, y.jsxs)("g", {
                                    opacity: "0.2",
                                    name: "corners",
                                    children: [(0, y.jsx)("rect", {
                                        x: "4.38623",
                                        y: "4.11865",
                                        width: "3.95048",
                                        height: "3.95049",
                                        fill: "white"
                                    }), (0, y.jsx)("rect", {
                                        x: "4.38574",
                                        y: "97.6138",
                                        width: "3.95048",
                                        height: "3.95049",
                                        fill: "white"
                                    }), (0, y.jsx)("rect", {
                                        x: "63.6426",
                                        y: "1.48535",
                                        width: "19.7524",
                                        height: "13.1683",
                                        fill: "white",
                                        mask: "url(#mask".concat(t, ")")
                                    }), (0, y.jsx)("rect", {
                                        x: "76.811",
                                        y: "97.6138",
                                        width: "3.95048",
                                        height: "3.95049",
                                        fill: "white"
                                    })]
                                }), (0, y.jsx)("g", {
                                    name: "numBar",
                                    children: N[t].map((e, t) => (0, y.jsx)("rect", {
                                        x: e,
                                        y: "5.43555",
                                        width: "1.31683",
                                        height: "5.26733",
                                        fill: "white"
                                    }, "num".concat(t)))
                                }), (0, y.jsx)("defs", {
                                    children: (0, y.jsxs)("mask", {
                                        id: "mask".concat(t),
                                        x: "0",
                                        y: "0",
                                        width: "600",
                                        height: "250",
                                        "mask-type": "luminance",
                                        children: [(0, y.jsx)("rect", {
                                            x: "0",
                                            y: "0",
                                            width: "600",
                                            height: "250",
                                            fill: "#FFFFFF"
                                        }), N[t].map((e, t) => (0, y.jsx)("rect", {
                                            x: e,
                                            y: "5.43555",
                                            width: "1.31683",
                                            height: "5.26733",
                                            fill: "#000000"
                                        }, "num".concat(t)))]
                                    })
                                })]
                            }), (0, y.jsxs)(X, {
                                children: ["x-twitter" === e.type && (0, y.jsx)(R, {
                                    style: {
                                        position: "absolute "
                                    }
                                }), "discord" === e.type && (0, y.jsx)(U, {
                                    style: {
                                        position: "absolute"
                                    }
                                }), "medium" === e.type && (0, y.jsx)(V, {
                                    style: {
                                        position: "absolute"
                                    }
                                }), "linkedin" === e.type && (0, y.jsx)(A, {
                                    style: {
                                        position: "absolute"
                                    }
                                })]
                            })]
                        })
                    }, "button".concat(t)))
                }));
            Q.displayName = "SocialButtons";
            var Y = r(3053),
                J = r.n(Y);
            let K = (0, b.z)("div", {
                css: J().LoadAnimationWrapper
            });
            var $ = () => (0, y.jsx)(K, {
                "aria-hidden": !0,
                children: (0, y.jsxs)("ul", {
                    children: [(0, y.jsx)("li", {}), (0, y.jsx)("li", {}), (0, y.jsx)("li", {}), (0, y.jsx)("li", {}), (0, y.jsx)("li", {}), (0, y.jsx)("li", {}), (0, y.jsx)("li", {}), (0, y.jsx)("li", {}), (0, y.jsx)("li", {}), (0, y.jsx)("li", {}), (0, y.jsx)("li", {}), (0, y.jsx)("li", {}), (0, y.jsx)("li", {}), (0, y.jsx)("li", {}), (0, y.jsx)("li", {}), (0, y.jsx)("li", {}), (0, y.jsx)("li", {}), (0, y.jsx)("li", {}), (0, y.jsx)("li", {}), (0, y.jsx)("li", {}), (0, y.jsx)("li", {})]
                })
            });

            function ee() {
                return (ee = Object.assign ? Object.assign.bind() : function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var l in r) Object.prototype.hasOwnProperty.call(r, l) && (e[l] = r[l])
                    }
                    return e
                }).apply(this, arguments)
            }
            var et = r(9596),
                er = r.n(et);
            let el = (0, b.z)("div", {
                css: [er().PowerOnWrapper, "type-ui-poweron"],
                variants: {
                    isLeft: {
                        true: er().PowerOnWrapper_left,
                        false: er().PowerOnWrapper_right
                    }
                }
            }),
                es = (0, b.z)("div", {
                    css: er().SVGContainer
                }),
                ei = (0, b.z)("div", {
                    css: er().BarWrapper
                }),
                en = (0, b.z)(function (e) {
                    return W.createElement("svg", ee({
                        xmlns: "http://www.w3.org/2000/svg",
                        fill: "none",
                        viewBox: "0 0 328 6"
                    }, e), f || (f = W.createElement("g", {
                        fill: "#fff",
                        clipPath: "url(#loader_bar_mobile_long_svg__a)"
                    }, W.createElement("path", {
                        d: "m5.326-1.521 2.829 2.828-21.214 21.214-2.828-2.829zM17.368-1.521l2.829 2.828-21.214 21.214-2.828-2.829zM29.41-1.521l2.829 2.828-21.214 21.214-2.828-2.829zM41.451-1.521l2.829 2.828-21.214 21.214-2.828-2.829zM53.493-1.521l2.829 2.828-21.214 21.214-2.828-2.829zM65.534-1.521l2.829 2.828-21.214 21.214-2.828-2.829zM77.576-1.521l2.829 2.828L59.19 22.521l-2.828-2.829zM89.618-1.521l2.829 2.828-21.214 21.214-2.828-2.829zM101.66-1.52l2.828 2.828L83.274 22.52l-2.828-2.829zM113.701-1.52l2.829 2.828L95.316 22.52l-2.828-2.829zM125.743-1.52l2.829 2.828-21.214 21.213-2.828-2.829zM137.784-1.52l2.829 2.828-21.214 21.213-2.828-2.829zM149.826-1.52l2.829 2.828L131.44 22.52l-2.828-2.829zM161.867-1.52l2.829 2.828-21.214 21.213-2.828-2.829zM173.91-1.52l2.828 2.828-21.214 21.213-2.828-2.829zM185.951-1.52l2.829 2.828-21.214 21.213-2.828-2.829zM197.992-1.52l2.829 2.828-21.214 21.213-2.828-2.829zM210.034-1.52l2.829 2.828-21.214 21.213-2.828-2.829zM222.076-1.52l2.829 2.828L203.69 22.52l-2.828-2.829zM234.117-1.52l2.829 2.828-21.214 21.213-2.828-2.829zM246.16-1.52l2.828 2.828-21.214 21.213-2.828-2.829zM258.2-1.52l2.829 2.828-21.214 21.213-2.828-2.829zM270.242-1.52l2.829 2.828-21.214 21.213-2.828-2.829zM282.284-1.52l2.829 2.828-21.214 21.213-2.828-2.829zM294.325-1.52l2.829 2.828L275.94 22.52l-2.828-2.829zM306.367-1.52l2.829 2.828-21.214 21.213-2.828-2.829zM318.41-1.52l2.828 2.828-21.214 21.213-2.828-2.829zM330.45-1.52l2.829 2.828-21.214 21.213-2.828-2.829zM342.492-1.52l2.829 2.828-21.214 21.213-2.828-2.829z"
                    }))), u || (u = W.createElement("defs", null, W.createElement("clipPath", {
                        id: "loader_bar_mobile_long_svg__a"
                    }, W.createElement("path", {
                        fill: "#fff",
                        d: "M0 0h328v6H0z"
                    })))))
                }, {
                    css: er().LoaderBarMobileSVG
                });
            var ea = e => {
                let {
                    children: t,
                    isLeft: r
                } = e, l = (0, m.useRef)(null), s = (0, m.useRef)(null), i = (0, m.useRef)(null), n = (0, m.useRef)(null), {
                    currentState: a
                } = z();
                return (0, m.useEffect)(() => { }, [a]), (0, y.jsxs)(el, {
                    isLeft: r,
                    children: [(0, y.jsx)(en, {}), (0, y.jsx)(ei, {
                        children: (0, y.jsx)($, {})
                    }), t, (0, y.jsx)(es, {
                        ref: i,
                        children: (0, y.jsxs)("svg", {
                            ref: n,
                            width: "138",
                            height: "32",
                            viewBox: "0 0 138 32",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: [(0, y.jsxs)("g", {
                                name: "mobile",
                                children: [(0, y.jsx)("rect", {
                                    x: "12",
                                    y: "12",
                                    width: "8",
                                    height: "8",
                                    fill: "#FF5D25",
                                    fillOpacity: "1"
                                }), (0, y.jsx)("rect", {
                                    x: "24",
                                    y: "12",
                                    width: "8",
                                    height: "8",
                                    fill: "#FF5D25",
                                    fillOpacity: "1"
                                }), (0, y.jsx)("rect", {
                                    x: "36",
                                    y: "12",
                                    width: "8",
                                    height: "8",
                                    fill: "#FF5D25",
                                    fillOpacity: "1"
                                }), (0, y.jsx)("g", {
                                    children: (0, y.jsx)("rect", {
                                        name: "flicker",
                                        ref: l,
                                        x: "48",
                                        y: "12",
                                        width: "8",
                                        height: "8"
                                    })
                                }), (0, y.jsx)("g", {
                                    children: (0, y.jsx)("rect", {
                                        x: "48",
                                        y: "12",
                                        width: "8",
                                        height: "8",
                                        fill: "white",
                                        fillOpacity: "0.1"
                                    })
                                }), (0, y.jsx)("rect", {
                                    x: "60",
                                    y: "12",
                                    width: "8",
                                    height: "8",
                                    fill: "white",
                                    fillOpacity: "0.2"
                                })]
                            }), (0, y.jsxs)("g", {
                                name: "desktop",
                                children: [(0, y.jsx)("rect", {
                                    x: "12",
                                    y: "12",
                                    width: "8",
                                    height: "8",
                                    fill: "#FF5D25",
                                    fillOpacity: "1"
                                }), (0, y.jsx)("rect", {
                                    x: "24",
                                    y: "12",
                                    width: "8",
                                    height: "8",
                                    fill: "#FF5D25",
                                    fillOpacity: "1"
                                }), (0, y.jsx)("rect", {
                                    x: "36",
                                    y: "12",
                                    width: "8",
                                    height: "8",
                                    fill: "#FF5D25",
                                    fillOpacity: "1"
                                }), (0, y.jsx)("rect", {
                                    x: "48",
                                    y: "12",
                                    width: "8",
                                    height: "8",
                                    fill: "#FF5D25",
                                    fillOpacity: "1"
                                }), (0, y.jsx)("rect", {
                                    x: "60",
                                    y: "12",
                                    width: "8",
                                    height: "8",
                                    fill: "#FF5D25",
                                    fillOpacity: "1"
                                }), (0, y.jsx)("rect", {
                                    x: "72",
                                    y: "12",
                                    width: "8",
                                    height: "8",
                                    fill: "#FF5D25",
                                    fillOpacity: "1"
                                }), (0, y.jsx)("rect", {
                                    x: "84",
                                    y: "12",
                                    width: "8",
                                    height: "8",
                                    fill: "#FF5D25",
                                    fillOpacity: "1"
                                }), (0, y.jsx)("g", {
                                    children: (0, y.jsx)("rect", {
                                        name: "flicker",
                                        ref: l,
                                        x: "96",
                                        y: "12",
                                        width: "8",
                                        height: "8"
                                    })
                                }), (0, y.jsx)("g", {
                                    children: (0, y.jsx)("rect", {
                                        x: "96",
                                        y: "12",
                                        width: "8",
                                        height: "8",
                                        fill: "white",
                                        fillOpacity: "0.1"
                                    })
                                }), (0, y.jsx)("rect", {
                                    x: "108",
                                    y: "12",
                                    width: "8",
                                    height: "8",
                                    fill: "white",
                                    fillOpacity: "0.2"
                                }), (0, y.jsx)("rect", {
                                    x: "120",
                                    y: "12",
                                    width: "8",
                                    height: "8",
                                    fill: "white",
                                    fillOpacity: "0.2"
                                })]
                            }), (0, y.jsx)("path", {
                                fillRule: "evenodd",
                                clipRule: "evenodd",
                                d: "M2 8H6V10H4V22H6V24H2V22V10V8Z",
                                fill: "white"
                            }), (0, y.jsx)("path", {
                                ref: s,
                                name: "close",
                                fillRule: "evenodd",
                                clipRule: "evenodd",
                                d: "M0 8H134V10H136V22H134V24H138V22V10V8Z",
                                fill: "white"
                            }), (0, y.jsx)("defs", {
                                children: (0, y.jsxs)("filter", {
                                    id: "filter0_d_596_7565",
                                    x: "-3.57628e-07",
                                    y: "-3.57628e-07",
                                    width: "32",
                                    height: "32",
                                    filterUnits: "userSpaceOnUse",
                                    colorInterpolationFilters: "sRGB",
                                    children: [(0, y.jsx)("feFlood", {
                                        floodOpacity: "0",
                                        result: "BackgroundImageFix"
                                    }), (0, y.jsx)("feColorMatrix", {
                                        in: "SourceAlpha",
                                        type: "matrix",
                                        values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                                        result: "hardAlpha"
                                    }), (0, y.jsx)("feMorphology", {
                                        radius: "1.33333",
                                        operator: "dilate",
                                        in: "SourceAlpha",
                                        result: "effect1_dropShadow_596_7565"
                                    }), (0, y.jsx)("feOffset", {}), (0, y.jsx)("feGaussianBlur", {
                                        stdDeviation: "5.33333"
                                    }), (0, y.jsx)("feComposite", {
                                        in2: "hardAlpha",
                                        operator: "out"
                                    }), (0, y.jsx)("feColorMatrix", {
                                        type: "matrix",
                                        values: "0 0 0 0 1 0 0 0 0 0.364706 0 0 0 0 0.145098 0 0 0 1 0"
                                    }), (0, y.jsx)("feBlend", {
                                        mode: "normal",
                                        in2: "BackgroundImageFix",
                                        result: "effect1_dropShadow_596_7565"
                                    }), (0, y.jsx)("feBlend", {
                                        mode: "normal",
                                        in: "SourceGraphic",
                                        in2: "effect1_dropShadow_596_7565",
                                        result: "shape"
                                    })]
                                })
                            })]
                        })
                    })]
                })
            };

            function eo() {
                return (eo = Object.assign ? Object.assign.bind() : function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var l in r) Object.prototype.hasOwnProperty.call(r, l) && (e[l] = r[l])
                    }
                    return e
                }).apply(this, arguments)
            }
            var ec = r(7307),
                eh = r.n(ec);
            let ep = (0, b.z)("div", {
                css: eh().UIWrapper
            }),
                ed = (0, b.z)("div", {
                    css: eh().Footer
                }),
                ef = (0, b.z)("div", {
                    css: eh().Header
                }),
                eu = (0, b.z)(function (e) {
                    return W.createElement("svg", eo({
                        xmlns: "http://www.w3.org/2000/svg",
                        fill: "none",
                        viewBox: "0 0 42 44"
                    }, e), _ || (_ = W.createElement("path", {
                        fill: "#fff",
                        d: "M24.486 7.979H18.74l4.414 4.453-14.253.009-8.44 30.735h5.265L12.738 17.7h10.416l-5.05 4.72h5.75l7.533-7.586z"
                    })), x || (x = W.createElement("path", {
                        fill: "#fff",
                        d: "M27.476.018S27.463.004 27.463 0l-15.14.018-1.42 5.157h16.264v.022c5.261.344 9.265 4.775 9.062 10.19-.198 5.3-4.356 9.655-9.485 10.164v.062l3.135 13.212-4.678-.013-3.176-13.199h-6.742L10.445 43.18h5.297l2.95-10.609 2.412 10.587 14.733.022-3.409-14.045c5.071-2.528 8.683-7.734 8.912-13.748C41.658 7.15 35.506.423 27.476.017"
                    })))
                }, {
                    css: eh().HeaderLogo
                });
            (0, b.z)("div", {
                css: eh().CenterHeader
            });
            let e_ = (0, b.z)("div", {
                css: [eh().QuestBoard, "type-ui-cta"]
            }),
                ex = (0, b.z)("div", {
                    css: eh().QuestBoardWrapper
                }),
                ev = (0, b.z)("div", {
                    css: [eh().FooterLinks, "type-ui-aside"]
                }),
                eg = (0, b.z)("div", {
                    css: [eh().Copyright, "type-ui-aside"]
                });
            var ey = () => {
                let e = (0, m.useRef)(null),
                    {
                        currentState: t
                    } = z();
                return (0, m.useEffect)(() => {
                    let r = e.current;
                    "loader" === t && M.ZP.set(r, {
                        y: "20%",
                        opacity: 0
                    }), "explore" === t && M.ZP.to(r, {
                        duration: .6,
                        y: 0,
                        opacity: 1,
                        ease: "power2.out",
                        delay: .8
                    })
                }, [t]), (0, y.jsxs)(ep, {
                    children: [(0, y.jsxs)(ef, {
                        children: [(0, y.jsx)("a", {
                            "aria-label": "revolvinggames.com",
                            href: "/",
                            children: (0, y.jsx)(eu, {})
                        }), (0, y.jsx)(Q, {})]
                    }), (0, y.jsx)(ea, {
                        isLeft: !0,
                        children: (0, y.jsxs)("p", {
                            children: ["Power.status: ", (0, y.jsx)("span", {
                                children: "80%"
                            })]
                        })
                    }), (0, y.jsx)(ea, {
                        isLeft: !1,
                        children: (0, y.jsxs)("p", {
                            children: ["Powered.by: ", (0, y.jsx)("span", {
                                children: "$RCADE"
                            })]
                        })
                    }), (0, y.jsx)(ex, {
                        ref: e,
                        children: (0, y.jsx)(e_, {
                            children: (0, y.jsxs)("a", {
                                target: "_blank",
                                href: E.lu.p4,
                                children: [(0, y.jsx)(F, {}), (0, y.jsx)("p", {
                                    children: E.lu.iR
                                })]
                            })
                        })
                    }), (0, y.jsxs)(ed, {
                        children: [(0, y.jsx)(eg, {
                            children: E.iF
                        }), (0, y.jsx)(ev, {
                            children: E.dk.map(e => (0, y.jsx)("a", {
                                href: e.link,
                                target: "_blank",
                                children: e.text
                            }, e.text))
                        })]
                    })]
                })
            },
                em = r(1695),
                ej = r.n(em);
            let ew = (0, b.z)("div", {
                css: [ej().MainTextWrapper, "type-ui-main"]
            }),
                ez = (0, b.z)("span", {
                    css: ej().WhiteText
                }),
                eM = (0, b.z)("div", {
                    css: ej().PulsorEffect,
                    variants: {
                        active: {
                            true: ej().PulsorEffect_Active
                        }
                    }
                }),
                eE = e => {
                    let t = e.split(/([*][^*]+[*])/);
                    return (0, y.jsx)(y.Fragment, {
                        children: t.map((e, t) => e.startsWith("*") ? (0, y.jsx)(ez, {
                            children: e.slice(1, -1)
                        }, t) : (0, y.jsx)(m.Fragment, {
                            children: e
                        }, t))
                    })
                };
            var eb = () => {
                let [e, t] = (0, m.useState)(E.DH[0]), {
                    currentState: r
                } = z(), l = (0, m.useRef)(null), s = (0, m.useRef)(null), i = M.ZP.timeline();
                return (0, m.useEffect)(() => {
                    let e = l.current,
                        n = s.current;
                    "opening" === r && (i.to([e, n], {
                        opacity: 0,
                        ease: "power2.inOut",
                        duration: .3,
                        onComplete: () => {
                            t(E.DH[1])
                        }
                    }, 0), i.to([e, n], {
                        opacity: 1,
                        ease: "power2.inOut",
                        duration: .6
                    }, .3), i.to([e, n], {
                        opacity: 0,
                        ease: "power2.inOut",
                        duration: .6,
                        onComplete: () => {
                            t(E.DH[2])
                        }
                    }, 2), i.to([e, n], {
                        opacity: 1,
                        ease: "power2.inOut",
                        duration: .6
                    }, 3))
                }, [r]), (0, y.jsxs)(y.Fragment, {
                    children: [(0, y.jsx)(ew, {
                        ref: l,
                        children: (0, y.jsx)("p", {
                            ref: l,
                            children: e.map((e, t) => (0, y.jsxs)(m.Fragment, {
                                children: [eE(e), (0, y.jsx)("br", {})]
                            }, "line".concat(t)))
                        })
                    }), (0, y.jsx)(eM, {
                        active: !0,
                        ref: s
                    })]
                })
            };
            let eO = e => e.replace(/\n/g, "<br/>"),
                eL = e => e.replace(/\n/g, "");
            var eB = r(9782),
                eS = r.n(eB);
            let ek = (0, b.z)("button", {
                css: [eS().StartButtonWrapper, "type-ui-startButton"]
            }),
                eW = (0, b.z)(F, {
                    css: eS().StartButtonSVG
                });
            var eP = e => {
                let {
                    children: t,
                    handleStart: r
                } = e;
                return (0, y.jsxs)(ek, {
                    onClick: r,
                    children: [(0, y.jsx)(eW, {}), (0, y.jsx)("p", {
                        children: t
                    })]
                })
            },
                eF = r(1550),
                eH = r.n(eF);
            let eR = (0, b.z)("div", {
                css: eH().LoaderScreenWrapper,
                variants: {
                    hide: {
                        true: eH().LoaderScreenWrapper_hide
                    }
                }
            }),
                eC = (0, b.z)("div", {
                    css: eH().LoaderUI,
                    variants: {
                        hide: {
                            true: eH().LoaderUI_hide
                        }
                    }
                });
            (0, b.z)("div", {
                css: "type-ui-loaderglitch"
            });
            let eV = (0, b.z)("div", {
                css: eH().StartButtons
            }),
                eT = (0, b.z)("div", {
                    css: eH().LoaderBar
                });

            function eA() {
                return (eA = Object.assign ? Object.assign.bind() : function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var l in r) Object.prototype.hasOwnProperty.call(r, l) && (e[l] = r[l])
                    }
                    return e
                }).apply(this, arguments)
            }
            var eI = function (e) {
                return W.createElement("svg", eA({
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 173 56"
                }, e), v || (v = W.createElement("g", {
                    clipPath: "url(#RLogo_svg__a)"
                }, W.createElement("path", {
                    fill: "#BFBFBF",
                    d: "M61.13 48.008c.065-.402.03-.696-.124-.865q-.285-.313-1.204-.312h-3.793q-.958-.001-1.393.325c-.291.219-.516.642-.684 1.27l-.194.745q-.245.943.018 1.27t1.221.326h4.168l-.406 1.542-6.077-.009c-.084.45-.057.772.089.95q.271.326 1.225.325h4.128q.96.001 1.398-.325.443-.328.688-1.27l.242-.928c.164-.628.16-1.052-.022-1.27q-.27-.327-1.23-.326h-4.176l.38-1.453h5.74zM40.588 53.58l1.773-6.75h6.835l-.304 1.15h-5.279l-.397 1.508h3.078l-.304 1.15h-3.078l-.44 1.676h5.344l-.335 1.27h-6.897zM26.217 53.58l1.773-6.75h1.257l2.072 4.084 4.154-4.083h1.244l-1.773 6.749h-1.438l1.099-4.173a8 8 0 0 1 .242-.717 7 7 0 0 1-.573.704l-3.396 3.374h-.308l-1.623-3.387a2.4 2.4 0 0 1-.22-.691 8 8 0 0 1-.15.717l-1.099 4.173h-1.261M13.23 53.58l5.552-6.75h1.5l2.059 6.75h-1.747l-.414-1.48h-4.234l-1.164 1.48zm3.695-2.693h2.924l-.714-2.746zM5.014 50.807H7.55l-.397 1.507h-4.85l1.124-4.28h6.35c.07-.414.035-.713-.11-.882-.185-.214-.591-.321-1.208-.321H3.846q-.959-.001-1.394.325-.434.328-.683 1.27l-.935 3.558q-.246.942.018 1.27.263.327 1.221.326h4.608q.959.001 1.394-.326.434-.328.683-1.27l.613-2.327H5.32zM172.715 21.953h-5.305l-.41 1.422c-1.018-1.274-2.769-1.778-4.202-1.778-4.71 0-8.269 3.878-10.368 10.845s-.851 10.645 4.198 10.645c1.98 0 3.81-.67 5.151-1.498l.229-.138s-.785 2.028-1.08 2.612c-1.945 3.891-5.34 3.534-8.74 3.534H69.111l-.124 5.497h85.683c4.573 0 9.737-1.084 11.748-8.416s6.293-22.725 6.293-22.725zm-12.921 16.819c-2.015 0-2.663-.794-1.292-5.345l.754-2.318c1.182-3.918 2.386-4.631 4.093-4.631 1.124 0 1.79.316 2.487.833L162.97 37.72c-.803.575-1.985 1.047-3.18 1.047z"
                }), W.createElement("path", {
                    fill: "#BFBFBF",
                    d: "M70.765 56h4.714l-3.462-3.798h38.224l2.607-3.9H72.246l4.14-3.874h-4.713l-6.178 5.786zM136.952 21.958h5.336l-.468 1.703s.6-.607 1.486-1.177 2.126-.999 3.726-.999c3.876 0 4.984 2.702 3.471 8.189l-3.7 13.435h-5.353l4.004-14.434c.502-1.827-.084-2.184-1.42-2.184s-2.122.357-3.211.954L136.48 43.11h-5.354l5.821-21.142zM130.16 12.437h5.451l-1.447 5.268h-5.498zM127.559 21.958h5.419l-5.82 21.142h-5.42zM107.706 21.958h5.234l-.159 12.713 6.28-12.713h5.834L114.082 43.1h-6.2l-.172-21.142zM102.956 12.437h5.389L99.918 43.1h-5.389zM76.396 32.571c1.936-7.034 6.663-11.09 12.32-11.09 5.659 0 7.926 4.052 6.02 10.97-1.935 7.034-6.535 11.206-12.127 11.206-5.591 0-8.118-4.172-6.213-11.09zm12.41.116.194-.655c1.472-4.716.841-5.661-1.249-5.661s-3.254.945-4.696 5.572l-.186.655c-1.591 5.104-.899 6.174 1.09 6.174s3.28-1.075 4.846-6.09zM61.204 21.958h5.235l-.16 12.713 6.28-12.713h5.835L67.58 43.1h-6.2l-.172-21.142zM40.796 32.567c1.817-7.088 6.509-11.09 11.703-11.09 6.068 0 6.96 3.775 5.248 10.613l-.679 2.58H46.37c-.68 3.26.167 4.035 2.738 4.035 2.161 0 4.79-.919 6.61-1.449l-1.362 4.921c-1.508.678-3.815 1.476-6.76 1.476-6.341 0-8.643-3.905-6.8-11.09zm12.572-1.988.141-.517c.816-2.947.252-3.794-1.825-3.794s-3.18.74-4.172 4.31z"
                }), W.createElement("path", {
                    fill: "url(#RLogo_svg__b)",
                    d: "M27.2 7.979h-5.746l4.414 4.453-14.252.009-8.44 30.735H8.44L15.453 17.7h10.415l-5.049 4.72h5.75l7.533-7.586z"
                }), W.createElement("path", {
                    fill: "url(#RLogo_svg__c)",
                    d: "M30.19.018S30.177.004 30.177 0l-15.14.018-1.42 5.157h16.264v.022c5.261.344 9.265 4.775 9.062 10.19-.198 5.3-4.357 9.655-9.485 10.164v.062l3.135 13.212-4.679-.013-3.175-13.199h-6.742L13.159 43.18h5.296l2.95-10.609 2.413 10.587 14.733.022-3.409-14.045c5.071-2.528 8.683-7.734 8.912-13.748C44.372 7.15 38.22.423 30.19.017"
                }))), g || (g = W.createElement("defs", null, W.createElement("linearGradient", {
                    id: "RLogo_svg__b",
                    x1: 3.176,
                    x2: 34.107,
                    y1: 25.576,
                    y2: 25.576,
                    gradientUnits: "userSpaceOnUse"
                }, W.createElement("stop", {
                    stopColor: "#F00000"
                }), W.createElement("stop", {
                    offset: 1,
                    stopColor: "#FF7B00"
                })), W.createElement("linearGradient", {
                    id: "RLogo_svg__c",
                    x1: 13.159,
                    x2: 44.072,
                    y1: 21.588,
                    y2: 21.588,
                    gradientUnits: "userSpaceOnUse"
                }, W.createElement("stop", {
                    stopColor: "#F00000"
                }), W.createElement("stop", {
                    offset: 1,
                    stopColor: "#FF7B00"
                })), W.createElement("clipPath", {
                    id: "RLogo_svg__a"
                }, W.createElement("path", {
                    fill: "#fff",
                    d: "M.715 0h172v56h-172z"
                })))))
            },
                eU = r(8297),
                eG = r.n(eU);
            let eD = (0, b.z)("div", {
                css: eG().RLogoWrapper
            });
            var eZ = () => {
                let {
                    currentState: e
                } = z(), t = (0, m.useRef)(null);
                return (0, m.useEffect)(() => {
                    let r = t.current;
                    "loader" !== e && M.ZP.to(r, {
                        opacity: 0,
                        duration: .3
                    })
                }, [e]), (0, y.jsx)(eD, {
                    ref: t,
                    children: (0, y.jsx)(eI, {})
                })
            },
                eq = r(9769),
                eX = r.n(eq);
            (0, b.z)("div", {
                css: eX().LoaderRevealWrapper
            });
            let eN = (0, b.z)("div", {
                css: eX().LoaderRevealSplit,
                variants: {
                    bottom: {
                        true: eX().LoaderRevealSplit_bottom
                    }
                }
            }),
                eQ = (0, b.z)("div", {
                    css: eX().LoaderLine
                });
            var eY = () => {
                let e = (0, m.useRef)(null),
                    t = (0, m.useRef)(null),
                    r = (0, m.useRef)(null),
                    {
                        currentState: l,
                        setCurrentState: s
                    } = z();
                return (0, m.useEffect)(() => {
                    let i = e.current,
                        n = t.current,
                        a = r.current;
                    if (i && n) {
                        let e = M.ZP.timeline();
                        "opening" === l && (e.to(a, {
                            duration: 1,
                            width: "100%",
                            ease: "power1.inOut"
                        }, 1), e.to(a, {
                            opacity: 0,
                            duration: .3,
                            ease: "power2.in"
                        }, 1.8), e.to(i, {
                            duration: 1,
                            y: "-200%",
                            rotateZ: -30,
                            ease: "power2.in"
                        }, 2), e.to(n, {
                            duration: 1,
                            y: "200%",
                            rotateZ: -30,
                            ease: "power2.in"
                        }, 2), e.eventCallback("onComplete", () => s("explore")))
                    }
                }, [l]), (0, y.jsxs)(y.Fragment, {
                    children: [(0, y.jsx)(eQ, {
                        ref: r
                    }), (0, y.jsx)(eN, {
                        ref: e,
                        children: (0, y.jsx)(eZ, {})
                    }), (0, y.jsx)(eN, {
                        ref: t,
                        bottom: !0
                    })]
                })
            },
                eJ = r(185),
                eK = r.n(eJ);
            let e$ = (0, b.z)("div", {
                css: [eK().GlitchTextWrapper, "type-ui-loaderglitch", eK().hero, eK().glitch, eK().layers]
            });
            (0, b.z)("span", {
                css: eK().OrangeText
            });
            var e2 = e => {
                let {
                    text: t,
                    glitchText: r
                } = e;
                return (0, y.jsx)(e$, {
                    "data-text": r,
                    dangerouslySetInnerHTML: {
                        __html: t
                    }
                })
            },
                e1 = () => {
                    let {
                        currentState: e,
                        setCurrentState: t,
                        setIsMuted: r
                    } = z();
                    return (0, y.jsxs)(eR, {
                        hide: "explore" === e,
                        children: [(0, y.jsx)(eY, {}), (0, y.jsxs)(eC, {
                            hide: "loader" !== e,
                            children: [(0, y.jsx)("h1", {
                                children: (0, y.jsx)(e2, {
                                    text: eO(E.yh.M0),
                                    glitchText: eL(E.yh.OT)
                                })
                            }), (0, y.jsx)(eV, {
                                children: (0, y.jsx)(eP, {
                                    handleStart: () => {
                                        r(!0), t("opening")
                                    },
                                    children: E.yh.ar
                                })
                            }), (0, y.jsx)(eT, {
                                children: (0, y.jsx)($, {})
                            })]
                        })]
                    })
                };

            function e0() {
                return (0, y.jsx)("main", {
                    children: (0, y.jsxs)(w, {
                        children: [(0, y.jsx)(e1, {}), (0, y.jsx)(k, {}), (0, y.jsx)(ey, {}), (0, y.jsx)(eb, {})]
                    })
                })
            }
        },
        185: function (e) {
            e.exports = {
                GlitchTextWrapper: "styles_GlitchTextWrapper__gWMuw",
                hero: "styles_hero__SMHV1",
                layers: "styles_layers__a0hiz",
                "single-path": "styles_single-path__jFMzU",
                paths: "styles_paths__od__b",
                movement: "styles_movement__UbwH1",
                opacity: "styles_opacity__s1rW5",
                font: "styles_font__emyhl",
                glitch: "styles_glitch__LiVhv"
            }
        },
        3053: function (e) {
            e.exports = {
                LoadAnimationWrapper: "styles_LoadAnimationWrapper__w2uzB",
                loading: "styles_loading__VBKgl"
            }
        },
        9769: function (e) {
            e.exports = {
                LoaderRevealSplit: "styles_LoaderRevealSplit__M_IHo",
                LoaderRevealSplit_bottom: "styles_LoaderRevealSplit_bottom__Jkam9",
                LoaderLine: "styles_LoaderLine__VVEfk"
            }
        },
        1550: function (e) {
            e.exports = {
                LoaderScreenWrapper: "styles_LoaderScreenWrapper__z0FpG",
                LoaderScreenWrapper_hide: "styles_LoaderScreenWrapper_hide__4sqFm",
                LoaderUI: "styles_LoaderUI__s474n",
                LoaderUI_hide: "styles_LoaderUI_hide__d3xFA",
                StartButtons: "styles_StartButtons__kAuXE",
                LoaderBar: "styles_LoaderBar__bNeYD"
            }
        },
        1695: function (e) {
            e.exports = {
                MainTextWrapper: "styles_MainTextWrapper__VB0xV",
                WhiteText: "styles_WhiteText__XokSz",
                PulsorEffect: "styles_PulsorEffect__Ttwlm",
                PulsorEffect_Active: "styles_PulsorEffect_Active__tHDO6",
                glowAnimation: "styles_glowAnimation__pVwlF"
            }
        },
        9596: function (e) {
            e.exports = {
                PowerOnWrapper: "styles_PowerOnWrapper__kMhyF",
                PowerOnWrapper_left: "styles_PowerOnWrapper_left__c8hZA",
                PowerOnWrapper_right: "styles_PowerOnWrapper_right__JWBFb",
                SVGContainer: "styles_SVGContainer__a3nFt",
                BarWrapper: "styles_BarWrapper__66S4l",
                LoaderBarMobileSVG: "styles_LoaderBarMobileSVG__0v_Mc",
                flicker: "styles_flicker__q_XXH"
            }
        },
        8297: function (e) {
            e.exports = {
                RLogoWrapper: "styles_RLogoWrapper__ZhmrE"
            }
        },
        4537: function (e) {
            e.exports = {
                SocialButtonsWrapper: "styles_SocialButtonsWrapper___ghle",
                ButtonContainer: "styles_ButtonContainer__Z2yyt",
                SocialIcon: "styles_SocialIcon__tnqS2"
            }
        },
        9782: function (e) {
            e.exports = {
                StartButtonWrapper: "styles_StartButtonWrapper__IR8hN",
                pulse: "styles_pulse__QvxDQ",
                flicker: "styles_flicker__g6L6T",
                pulseMore: "styles_pulseMore__1_vwe"
            }
        },
        7307: function (e) {
            e.exports = {
                UIWrapper: "styles_UIWrapper__pLV9s",
                Header: "styles_Header__gNBVo",
                HeaderLogo: "styles_HeaderLogo__BFg9a",
                CenterHeader: "styles_CenterHeader__2krsa",
                QuestBoardWrapper: "styles_QuestBoardWrapper__8vlpr",
                QuestBoard: "styles_QuestBoard__4doo8",
                flicker: "styles_flicker__kX611",
                Footer: "styles_Footer___5WKn",
                FooterLinks: "styles_FooterLinks__u1cYO",
                Copyright: "styles_Copyright__nX_Yb"
            }
        },
        1376: function (e) {
            e.exports = {
                VideoWrapper: "styles_VideoWrapper__yPwzB",
                VideoFlash: "styles_VideoFlash__gMn22"
            }
        }
    },
    function (e) {
        e.O(0, [922, 301, 971, 69, 744], function () {
            return e(e.s = 7674)
        }), _N_E = e.O()
    }
]);