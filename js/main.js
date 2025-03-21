const jo = {};
!(function JetThemeScript() {
	var Q = window,
		aR = document,
		a = setTimeout,
		cm = clearTimeout,
		co = Date,
		ce = Math,
		s = parseInt,
		b2 = encodeURIComponent,
		ag = RegExp,
		cc = XMLHttpRequest,
		br = alert,
		bJ = localStorage,
		az = JSON,
		a6 = Image,
		a8 = setInterval,
		cW = clearInterval,
		bj = 'innerHTML',
		a3 = 'outerHTML',
		bZ = 'tagName',
		z = 'getElementById',
		p = 'getElementsByClassName',
		bB = 'querySelector',
		cL = 'querySelectorAll',
		by = 'documentElement',
		cw = 'childNodes',
		bw = 'parentNode',
		bz = 'cloneNode',
		bW = 'createElement',
		E = 'className',
		I = 'replace',
		cb = 'indexOf',
		l = 'lastIndexOf',
		a7 = 'EventListener',
		cp = 'add',
		aN = 'remove',
		cx = 'id',
		bx = 'key',
		aM = 'type',
		ai = 'parse',
		cN = 'length',
		aa = 'call',
		bQ = 'slice',
		F = 'reset',
		aB = 'scroller',
		au = 'push',
		ci = 'Time',
		ad = 'Date',
		bd = 'Month',
		bb = 'FullYear',
		at = 'clientX',
		ar = 'clientY',
		g = 'pageX',
		f = 'pageY',
		aO = 'scrollLeft',
		b0 = 'scrollTop',
		af = 'onreadystatechange',
		cu = 'readyState',
		a5 = 'Attribute',
		bp = 'set',
		bH = 'get',
		a4 = 'has',
		K = 'checked',
		av = 'focus',
		cg = 'height',
		cq = 'offsetWidth',
		cz = 'offsetHeight',
		aA = 'toFixed',
		aG = 'pageYOffset',
		cO = 'appendChild',
		bG = 'firstChild',
		cy = 'insert',
		b1 = 'Before',
		aE = 'value',
		V = 'safe',
		aJ = 'match',
		ab = 'href',
		bn = 'src',
		Y = 'onload',
		ao = 'onerror',
		P = 'target',
		b8 = 'closest',
		bk = 'location',
		bo = 'reload',
		bf = 'split',
		bc = 'trim',
		cd = 'open',
		bm = 'send',
		bq = 'random',
		cV = 'status',
		bu = 'toString',
		aY = 'parentElement',
		aq = 'activeElement',
		cn = 'preventDefault',
		bg = 'substr',
		cG = 'setRequestHeader',
		aF = 'responseText',
		cA = 'response',
		be = 'body',
		aU = 'title',
		al = 'test',
		aD = 'container',
		aV = 'ceil',
		am = 'floor',
		bA = 'round',
		aj = 'min',
		cJ = 'map',
		cB = 'cookie',
		Z = 'contains',
		bl = 'toUTCString',
		b4 = 'textContent',
		ay = 'elementFromPoint',
		aT = 'Item',
		bS = 'nextSibling',
		cT = 'load',
		bt = 'true',
		A = 'false',
		aZ = 'valid',
		b9 = 'scroll',
		L = 'click',
		bL = 'blur',
		bY = 'mousemove',
		q = 'mouseup',
		ac = 'touchstart',
		aX = 'mousedown',
		a2 = 'change',
		k = 'complete',
		cU = 'undefined',
		bv = 'function',
		bD = 'Content-Type',
		T = 'text/html',
		a0 = 'overlays',
		d = 'pagination',
		cI = 'loadCustomPosts',
		j = 'custom_posts',
		S = 'config',
		cS = 'adsbygoogle',
		ca = 'enable_page_level_ads',
		bO = 'analytics',
		aW = 'firebase',
		r = '8.4.2',
		cQ = typeof isPreview !== cU ? isPreview : false,
		aH = typeof siteUrl !== cU ? siteUrl : '',
		aP = typeof currentUrl !== cU ? currentUrl : '',
		u = typeof blogId !== cU ? blogId : '',
		cC = typeof blogTitle !== cU ? blogTitle : '',
		ck = typeof pageTitle !== cU ? pageTitle : 'Page',
		b = typeof firebaseUrl !== cU ? firebaseUrl : '',
		y = typeof analyticId !== cU ? analyticId : false,
		aS = typeof caPubAdsense !== cU ? caPubAdsense : false,
		bX = typeof innerAdsDelimiter !== cU ? innerAdsDelimiter : 'p,br,div',
		bV =
			typeof ignoreAdsDelimiter !== cU
				? ignoreAdsDelimiter
				: 'pre,ul,ol,table,blockquote',
		bs = typeof autoTOC !== cU ? autoTOC : false,
		an = typeof toc_temp === bv ? toc_temp : false,
		ba = typeof generate_url_temp === bv ? generate_url_temp : false,
		m = typeof positionTOC !== cU ? positionTOC : false,
		bh = typeof jtCallback === bv ? jtCallback : false,
		v = 'jet',
		cs = 'https://',
		ax = '-rw';
	function O(i, h) {
		return -1 < (' ' + i[E] + ' ')[cb](' ' + h + ' ');
	}
	function N(i, h) {
		if (!O(i, h)) {
			var n = i[E];
			'' != n && (h = ' ' + h), (i[E] = n + h);
		}
	}
	function bF(i, h) {
		i[E] = i[E][I](new ag('(?:^|\\s)' + h + '(?!\\S)'), '')[bc]();
	}
	function bC(i, h) {
		O(i, h) ? bF(i, h) : N(i, h);
	}
	function aL(i, h) {
		N(i, 'd-block'),
			a(function () {
				N(i, h);
			}, 100);
	}
	function cl(i, h, n) {
		bF(i, h),
			a(
				function () {
					bF(i, 'd-block');
				},
				n ? n : 300
			);
	}
	function D(i, h) {
		for (var n = 0; n < i[cN]; n++) {
			if (i[n] === h) {
				return !0;
			}
		}
		return !1;
	}
	function aI() {
		return (ce[bq]() + 1)[bu](36)[bg](7);
	}
	function cD(i, h) {
		return (i = new ag('[?&]' + i + '=([^&#=]*)')), !!i[al](h) && h[aJ](i)[1];
	}
	function W(c3, c2, c1, c0) {
		(c3 = s(c3)), (c2 = s(c2)), (c1 = s(c1)), (c0 = s(c0));
		var cY,
			x,
			t = ce[aV](c3 / c1);
		(1 > c2 ? (c2 = 1) : c2 > t && (c2 = t), t <= c0)
			? ((cY = 1), (x = t))
			: ((c3 = ce[am](c0 / 2)),
				(c1 = ce[aV](c0 / 2) - 1),
				c2 <= c3
					? ((cY = 1), (x = c0))
					: c2 + c1 >= t
						? ((cY = t - c0 + 1), (x = t))
						: ((cY = c2 - c3), (x = c2 + c1)));
		for (
			var o = (c2 - 1) * c1, cX = ce[aj](o + c1 - 1, c3 - 1), cZ = [], n = 0;
			n < x + 1 - cY;
			n++
		) {
			cZ[au](n);
		}
		return (
			(cZ = cZ[cJ](function (h) {
				return cY + h;
			})),
			{
				totalItems: c3,
				currentPage: c2,
				pageSize: c1,
				totalPages: t,
				startPage: cY,
				endPage: x,
				startIndex: o,
				endIndex: cX,
				pages: cZ,
			}
		);
	}
	!(function (i) {
		var h = new a6();
		(h[Y] = h[ao] =
			function () {
				i(2 == h[cg]);
			}),
			(h[bn] =
				'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA');
	})(function (h) {
		h || (ax = '');
	});
	function cH(i) {
		for (var h = i.slice(), t = h[cN] - 1; 0 < t; t--) {
			var o = ce[am](ce[bq]() * (t + 1)),
				n = h[t];
			(h[t] = h[o]), (h[o] = n);
		}
		return h;
	}
	var cK = aR[z]('header'),
		b7 = aR[z]('search-toggle'),
		X = aR[z]('search-header'),
		e = aR[z]('navbar-toggle'),
		a9 = aR[z]('navbar'),
		aw = aR[z]('back-to-top'),
		cP = aR[z]('dark-toggler'),
		a1 = aR[bB]('html'),
		b6 = aR[z]('comment-button'),
		ae = aR[z]('threaded-comment-form'),
		cF = aR[z]('comment-editor'),
		cE = aR[z]('comment-editor-src'),
		R = aR[z]('comment-script'),
		bE = aR[cL]('.comment-reply'),
		M = aR[cL]('.entry-text noscript'),
		aC = aR[z]('ads-post'),
		cv = aR[z]('post-body'),
		aK = aR[bB]('.related-posts'),
		aQ = aR[bB]('.related-inline'),
		ah = cD('page', aP),
		J = function (n) {
			if ('IMG' == n[bZ]) {
				var i = n[bH + a5]('data-src');
				if (0 < i[cb]('bp.blogspot')) {
					var cZ = n[cq][aA](0),
						cY = n[aY][cq][aA](0),
						cX = n[aY][aY][cq][aA](0),
						x = n[cz][aA](0),
						t = i[bf]('/'),
						o = '';
					O(n[aY], 'ratio')
						? (o = 'w' + cZ + ax + '-h' + x + '-c')
						: ((o = 10 > cZ ? (10 > cY ? cX : cY) : cZ), (o = 's' + o + ax)),
						(i = i[I](t[t[cN] - 2], o)),
						n[bp + a5]('data-src', i);
				} else {
					i[aJ](/(img.youtube|i.ytimg)/) &&
						((i = i[bg](0, i[l]('/')) + '/mqdefault.jpg'),
						n[bp + a5]('data-src', i));
				}
			}
		},
		cR = function (c1) {
			var c0 = c1[bH + a5]('data-pagination');
			if (c0 != A) {
				function c0(c3, c2, c6) {
					var c5 = aR[bW]('li'),
						c4 = aR[bW]('span');
					return (
						N(c4, 'btn btn-sm rounded-pill jt-icon-center'),
						(c4[bj] = c6 ? c6 : c3),
						c4[bp + a5]('data-page', c3),
						c3 == c2
							? N(c4, 'jt-btn-primary')
							: (N(c4, 'jt-btn-light hover-btn-primary'),
								c4[cp + a7](L, function (c7) {
									if ((c7[cn](), (i = c4[bH + a5]('data-page')), 1 == i)) {
										var h = cY
											? aH + 'search' + x + '?max-results=' + cZ + '&page=' + i
											: aH;
										Q[bk][ab] = h;
									} else {
										var c8 = (i - 1) * cZ;
										Defer.js(
											aH +
												'feeds/posts/summary/' +
												cX +
												'?start-index=' +
												c8 +
												'&alt=json&callback=jo.' +
												d +
												'_date&max-results=1'
										);
									}
								})),
						c5[cO](c4),
						c5
					);
				}
				var cZ = c1[bH + a5]('data-posts'),
					cY = c1[bH + a5]('data-label');
				cY = b2(cY);
				var cX = cY ? '-/' + cY + '/' : '',
					x = cY ? '/label/' + cY : '';
				Defer.js(
					aH +
						'feeds/posts/summary/' +
						cX +
						'?alt=json&callback=jo.' +
						d +
						'_' +
						bx +
						'&max-results=1'
				);
				var t = cD('max-results', aP),
					o = cD('page', aP),
					n = t ? t : cZ,
					i = o ? o : 1;
				(jo[d + '_' + bx] = function (db) {
					var da = db.feed,
						c9 = s(da.openSearch$totalResults.$t);
					if (c9 > cZ) {
						var db = W(c9, i, n, 5),
							c8 = aR[bW]('ul'),
							c7 = 1,
							c6 = db.totalPages;
						if (db.currentPage != c7) {
							var c5 = c0(
								db.currentPage - 1,
								'',
								'<svg aria-hidden="true" class="jt-icon"><use xlink:href="#i-arrow-l"/></svg>'
							);
							c8[cO](c5);
						}
						if (!D(db.pages, c7)) {
							var c4 = c0(c7, db.currentPage, c7 + ' . .');
							c8[cO](c4);
						}
						for (var c4, c3 = 0; c3 < db.pages[cN]; c3++) {
							(c4 = c0(db.pages[c3], db.currentPage)), c8[cO](c4);
						}
						if (!D(db.pages, c6)) {
							var c4 = c0(c6, db.currentPage, '. . ' + c6);
							c8[cO](c4);
						}
						if (db.currentPage != c6) {
							var c2 = c0(
								db.currentPage + 1,
								'',
								'<svg aria-hidden="true" class="jt-icon"><use xlink:href="#i-arrow-r"/></svg>'
							);
							c8[cO](c2);
						}
						(c1[bj] = ''),
							N(c8, 'pagination mb-0'),
							c1[cO](c8),
							bF(c1, 'visually-hidden');
					}
				}),
					(jo[d + '_date'] = function (c2) {
						var h = c2.feed.entry[0],
							c4 = h.published.$t[bg](0, 19) + h.published.$t[bg](23, 29);
						c4 = c4[I]('+', '%2B');
						var c3 =
							aH +
							'search' +
							x +
							'?updated-max=' +
							c4 +
							'&max-results=' +
							n +
							'&page=' +
							i;
						Q[bk][ab] = c3;
					});
			} else {
				bF(c1, 'visually-hidden');
			}
		};
	jo[cI] = function (c7) {
		var c6 = aI(),
			c5 = c7[bH + a5]('data-label'),
			c4 = c7[bH + a5]('data-title'),
			c3 = c7[bH + a5]('data-items'),
			c2 = c7[bH + a5]('data-shuffle'),
			c1 = c7[bH + a5]('data-no-item'),
			c0 = c7[bH + a5]('data-func'),
			cZ = c7[bH + a5]('data-callback'),
			cY = c1 ? s(c3) + 1 : c3,
			cX = [
				'Jan',
				'Feb',
				'Mar',
				'Apr',
				'May',
				'Jun',
				'Jul',
				'Aug',
				'Sep',
				'Oct',
				'Nov',
				'Dec',
			],
			x = c5 ? c5 : c7[bj],
			t = x[bf](','),
			i = '';
		(i =
			1 < t[cN]
				? x
					? '-/' + b2(t[ce[am](ce[bq]() * t[cN])]) + '/?'
					: '?'
				: x && x != A
					? '-/' + b2(x[bc]()) + '/?'
					: '?'),
			Defer.js(
				aH +
					'feeds/posts/summary/' +
					i +
					'alt=json&callback=jo.' +
					j +
					'_' +
					bx +
					'_' +
					c6 +
					'&max-results=' +
					cY
			),
			(jo[j + '_' + bx + '_' + c6] = function (df) {
				var de = s(df.feed.openSearch$totalResults.$t),
					dd = df.feed.category;
				if (0 < de) {
					for (
						var dc = { title: c4, posts: [], categories: dd },
							da = df.feed.entry,
							c8 = 0,
							h = 0;
						h < da[cN];
						++h
					) {
						var dn = da[h],
							dm = dn.link[dn.link[cN] - 1][ab];
						if (c8 == c3) {
							break;
						}
						if (dm != c1) {
							c8++;
							var dl = {
									grup_id: c6,
									url: dm,
									title: dn[aU].$t,
									summary: dn.summary.$t[bc](),
									img: dn.media$thumbnail && dn.media$thumbnail.url,
									author: dn.author[0].name.$t,
									comment: dn.thr$total && dn.thr$total.$t,
									label: dn.category,
								},
								dk = dn.updated.$t,
								dj = new co(dk),
								di = dj[bH + ad](),
								dh = cX[dj[bH + bd]()],
								dg = dj[bH + bb]();
							(dl.date = di + ' ' + dh + ', ' + dg), dc.posts[au](dl);
						}
					}
					var db = Q[c0];
					if (
						typeof db === bv &&
						0 < dc.posts[cN] &&
						(c2 && (dc.posts = cH(dc.posts)[bQ](0, c2)),
						(c7[bj] = db(dc)[bc]()),
						bF(c7, 'visually-hidden'),
						Defer.dom('.lazy-' + c6, 1, 'loaded', J),
						cZ)
					) {
						var c9 = Q[cZ];
						typeof c9 === bv && c9();
					}
				}
			});
	};
	function ch(i, h) {
		var n = new cc();
		n[cd](bH, i),
			n[cG](bD, T),
			n[bm](null),
			n[cp + a7](cT, function () {
				var o = n[aF][aJ](/<title>(.*?)<\/title>/);
				h[bj] = o[1][I](' &#8211; ' + cC, '');
			});
	}
	var B = function (i) {
		for (var h = i[cL]('a'), x = 0; x < h[cN]; ++x) {
			var t = h[x],
				o = t[ab],
				n = aR[bW]('span');
			N(n, 'd-block fw-bold pt-2 jt-text-primary'), t[cO](n), ch(o, n);
		}
	};
	function ak() {
		(b7 && b7[K]) || (e && e[K])
			? bF(cK, 'header-animate')
			: N(cK, 'header-animate');
	}
	function C(i, h) {
		function o(t) {
			i[Z](t[P]) || (h(), n());
		}
		var n = function () {
			aR[aN + a7](L, o);
		};
		aR[cp + a7](L, o);
	}
	b7 &&
		b7[cp + a7](a2, function () {
			ak(),
				this[K] &&
					a(function () {
						aR[z]('search-input')[av]();
					}, 100),
				C(X, function () {
					(b7[K] = !1), ak();
				});
		}),
		e &&
			e[cp + a7](a2, function () {
				ak(),
					this[K]
						? (aL(a9, 'show'),
							C(a9, function () {
								(e[K] = !1), ak(), cl(a9, 'show');
							}))
						: cl(a9, 'show');
			}),
		cP &&
			cP[cp + a7](L, function (h) {
				h[cn](),
					bC(a1, 'dark-mode'),
					bJ[bp + aT]('theme', O(a1, 'dark-mode') ? 'dark' : 'light');
			}),
		Q[cp + a7](
			b9,
			function () {
				1 <= this[aG] ? N(cK, 'shadow-sm') : bF(cK, 'shadow-sm'),
					1000 <= this[aG] ? bF(aw, 'd-none') : N(aw, 'd-none');
			},
			!1
		),
		cF &&
			cF[cp + a7](cT, function () {
				bF(ae, 'loader');
			});
	function U(i) {
		if (
			(i != cE[ab] && (N(ae, 'loader'), (cE[ab] = i), (cF[bn] = i)),
			O(ae, 'd-none'))
		) {
			bF(ae, 'd-none');
			var h = R[aE][aJ](/<script.*?src='(.*?)'/)[1];
			Defer.js(h, 'comment-js', 500, function () {
				BLOG_CMT_createIframe(cs + 'www.blogger.com/rpc_relay.html');
			});
		}
	}
	b6 &&
		b6[cp + a7](L, function (h) {
			h[cn](),
				U(this[ab]),
				'add-comment' != ae[aY][cx] && aR[z]('add-comment')[cO](ae);
		});
	for (var bT = 0; bT < bE[cN]; ++bT) {
		bE[bT][cp + a7](L, function (i) {
			i[cn]();
			var h = this[bH + a5]('data-comment-id');
			U(this[ab]), ae[aY][cx] != 'c' + h && aR[z]('c' + h)[cO](ae);
		});
	}
	if (
		(!(function (i, h) {
			Q[cp + a7](
				b9,
				function () {
					var o,
						n = this[aG];
					n < h && O(cK, 'header-hidden')
						? (o = a(function () {
								bF(cK, 'header-hidden');
							}, 500))
						: h < n &&
							O(cK, 'header-animate') &&
							(cm(o), N(cK, 'header-hidden')),
						(h = n);
				},
				!1
			);
		})(this, 0),
		0 < M[cN])
	) {
		for (var bT = 0; bT < M[cN]; ++bT) {
			var cj = M[bT],
				cr = cj[bj],
				b5 =
					'src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" loading="lazy" lazyload="true" data-src="$1"',
				ct = aR[bW]('textarea');
			ct[bj] = cr[I](/src="(.*?)"/g, b5);
			var bi = aR[bW]('div');
			(bi[bj] = ct.value),
				0 == bT && N(bi, 'feature-image mb-3'),
				cj[aY][cy + b1](bi, cj);
		}
		Defer.dom('[lazyload="true"]', 1, 'loaded', J, null, {
			rootMargin: '200%',
		});
	}
	if (null !== cv) {
		if (
			(null !== aK &&
				null !== aQ &&
				((aQ[bj] = aK[bj]),
				aQ[bp + a5]('data-no-item', aK[bH + a5]('data-no-item'))),
			null !== aC)
		) {
			for (
				var cM,
					cf = cv[cL](bX + ',' + bV),
					b3 = aC[cw],
					ap = b3[cN],
					G = [],
					bT = 0;
				bT < cf[cN];
				bT++
			) {
				(cM = cf[bT][b8](bV)), (cM && cf[bT] != cM) || G[au](cf[bT]);
			}
			for (var bT = 0; bT < ap; bT++) {
				var bI, bK;
				0 == bT
					? (bI = G[0])
					: ((bK = bT == ap - 1 ? G[cN] - 1 : ce[bA](G[cN] / ap) * bT),
						(bI = G[bK][bS])),
					bI && bI[aY][cy + b1](b3[bT][bz](!0), bI);
			}
			aC[a3] = '';
		}
		if (bs && bs != A && an && null !== cv[bG]) {
			for (
				var H = cv[cL]('h2,h3,h4,h5,h6'),
					bN = aR[bW]('div'),
					w = cv[bB](m),
					bP = [],
					bT = 0;
				bT < H[cN];
				bT++
			) {
				var bU = H[bT],
					bM = bU[b4][I](/[^\w!?]/g, '_')[I](/__/g, '_'),
					bR = s(bU[bZ][I]('H', ''));
				(bU[cx] = bM), bP[au]({ level: bR, title: bU[b4], id: bM });
			}
			null === w && (w = cv[bG]),
				0 < bP[cN] && ((bN[bj] = an(bP)[bc]()), w && w[aY][cy + b1](bN, w));
		}
	}
	ah &&
		(aR[aU] = aR[aU][I](' \u2013 ', ' \u2013 ' + ck + ' ' + ah + ' \u2013 ')),
		Defer.dom('.lazyload', 1, 'loaded', J),
		Defer.dom('#post-pager', 1, null, B, null, { rootMargin: '200%' }),
		Defer.dom('#pagination', 1, null, cR, null, { rootMargin: '200%' }),
		Defer.dom('.custom-posts', 1, null, jo[cI], null, { rootMargin: '200%' });
	function c() {
		if ((aR[aN + a7](bY, c), aR[aN + a7](ac, c), aR[aN + a7](b9, c), !cQ)) {
			if (aS) {
				var h = aR[bB]('ins.' + cS);
				null !== h &&
					(adsbygoogle = Q[cS] || [])[au]({
						google_ad_client: 'ca-pub-' + aS,
						enable_page_level_ads: !0,
						overlays: { bottom: !0 },
					}),
					Defer.js(
						cs + 'pagead2.googlesyndication.com/pagead/js/' + cS + '.js',
						cS,
						100
					);
			}
			y &&
				y != A &&
				Defer.js(
					cs + 'www.googletagmanager.com/gtag/js?id=' + y,
					bO,
					100,
					function () {
						function i() {
							dataLayer[au](arguments);
						}
						i('js', new Date()), i(S, y);
					}
				),
				bh && bh();
		}
	}
	aR[cp + a7](bY, c), aR[cp + a7](ac, c), aR[cp + a7](b9, c);
})();

document
	.getElementById('navbar-toggler')
	.addEventListener('click', function () {
		document.getElementById('menu-modal').style.display = 'flex';
	});

document.querySelector('.close').addEventListener('click', function () {
	document.getElementById('menu-modal').style.display = 'none';
});

window.addEventListener('click', function (event) {
	let modal = document.getElementById('menu-modal');
	if (event.target === modal) {
		modal.style.display = 'none';
	}
});
