(window.webpackJsonp = window.webpackJsonp || []).push([[6], {
    "+Z0x": function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return i
        }
        ));
        var o = n("2Vo4")
          , r = n("fXoL");
        let i = ( () => {
            class e {
                constructor() {
                    this.previousUrl = new o.a(null),
                    this.previousUrl$ = this.previousUrl.asObservable()
                }
                setPreviousUrl(e) {
                    this.previousUrl.next(e)
                }
            }
            return e.\u0275fac = function(t) {
                return new (t || e)
            }
            ,
            e.\u0275prov = r.Sb({
                token: e,
                factory: e.\u0275fac
            }),
            e
        }
        )()
    },
    "+bLX": function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return a
        }
        ));
        var o = n("AytR")
          , r = n("lJxs")
          , i = function(e) {
            return e[e.P = 4] = "P",
            e[e.S = 6] = "S",
            e[e.M = 8] = "M",
            e[e.L = 15] = "L",
            e
        }({})
          , c = n("fXoL")
          , s = n("tk/3");
        let a = ( () => {
            class e {
                constructor(e) {
                    this.http = e
                }
                getSalary(e) {
                    return this.http.get(`${o.a.urls.baseUrl}/api/motivation/salary?prevMonth=${e}`).pipe(Object(r.a)(e => {
                        return {
                            employeeId: (t = e).employee_id,
                            salary: t.salary,
                            parsedShkCount: t.shk_cnt,
                            salaryForParsedShk: t.shk_cnt_salary,
                            hourCount: t.hour_cnt,
                            salaryForHours: t.hour_cnt_salary,
                            sumCountSalary: t.sum_cnt_salary,
                            details: Array.isArray(t.details) ? t.details.map(e => (e => {
                                var t, n, o, r;
                                return {
                                    officeId: e.office_id,
                                    date: e.date,
                                    parsedShkCount: e.shk_cnt,
                                    salaryForParsedShk: e.shk_cnt_salary,
                                    hourCount: e.hour_cnt,
                                    salaryForHours: e.hour_cnt_salary,
                                    sumCountSalary: e.sum_cnt_salary,
                                    needs: e.household_needs,
                                    extraPaymentRating: e.extra_pay_for_rating,
                                    extraPaymentSpeed: e.extra_pay_for_speed,
                                    maxPotentialSalary: e.max_potential_salary,
                                    supplierShkCount: e.supplier_shk_cnt,
                                    supplierShkSum: e.supplier_shk_sum,
                                    suppliersTareCount: e.suppliers_tare_cnt,
                                    suppliersTareCost: e.suppliers_tare_cost,
                                    avgLayoutHoursByRegion: e.avg_layout_hours_by_region,
                                    avgLayoutHoursByEmployee: e.avg_layout_hours_by_employee,
                                    bags: e.bags ? {
                                        totalCount: e.bags.total_cnt,
                                        totalSum: e.bags.total_amount,
                                        details: {
                                            p: null === (t = e.bags.details) || void 0 === t ? void 0 : t.find(e => e.size === i.P),
                                            s: null === (n = e.bags.details) || void 0 === n ? void 0 : n.find(e => e.size === i.S),
                                            m: null === (o = e.bags.details) || void 0 === o ? void 0 : o.find(e => e.size === i.M),
                                            l: null === (r = e.bags.details) || void 0 === r ? void 0 : r.find(e => e.size === i.L)
                                        }
                                    } : null
                                }
                            }
                            )(e)) : []
                        };
                        var t
                    }
                    ))
                }
                getPaycheck(e, t) {
                    return this.http.get(`${o.a.urls.baseUrl}/api/motivation/register?from=${e}&to=${t}`)
                }
                getSaldo() {
                    return this.http.get(o.a.urls.baseUrl + "/api/motivation/saldo")
                }
            }
            return e.\u0275fac = function(t) {
                return new (t || e)(c.gc(s.c))
            }
            ,
            e.\u0275prov = c.Sb({
                token: e,
                factory: e.\u0275fac
            }),
            e
        }
        )()
    },
    "/MIr": function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return a
        }
        ));
        var o = n("XNiG")
          , r = n("tk/3")
          , i = n("AytR")
          , c = n("fXoL")
          , s = n("sYmb");
        let a = ( () => {
            class e {
                constructor(e) {
                    this.translateService = e,
                    this.elSubject = new o.a,
                    this.elState = this.elSubject.asObservable()
                }
                show(e, t, n) {
                    this.elSubject.next({
                        show: !0,
                        message: e,
                        title: t,
                        type: n
                    })
                }
                showInfo(e) {
                    this.show(e, null, "info")
                }
                dismiss(e) {
                    e && e.url && e.url.indexOf(i.a.urls.baseUrl + "/api/auth/signin") > 0 && this.elSubject.next({
                        show: !1
                    })
                }
                showError(e) {
                    if ("string" == typeof e && this.show(e, this.translateService.instant("wavebreaker.error"), "error"),
                    e instanceof r.e)
                        switch (e.status) {
                        case 0:
                            this.show("Timeout: " + e.url, this.translateService.instant("wavebreaker.error"), "error");
                            break;
                        default:
                            this.show(e.error, this.translateService.instant("wavebreaker.error"), "error")
                        }
                }
            }
            return e.\u0275fac = function(t) {
                return new (t || e)(c.gc(s.d))
            }
            ,
            e.\u0275prov = c.Sb({
                token: e,
                factory: e.\u0275fac,
                providedIn: "root"
            }),
            e
        }
        )()
    },
    0: function(e, t, n) {
        e.exports = n("zUnb")
    },
    "14Tl": function(e, t, n) {
        "use strict";
        function o(e) {
            return "getModifierState"in e && e.getModifierState("CapsLock")
        }
        n.d(t, "a", (function() {
            return o
        }
        ))
    },
    "2GVC": function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return i
        }
        ));
        var o = n("ofXK")
          , r = n("fXoL");
        let i = ( () => {
            class e {
            }
            return e.\u0275mod = r.Ub({
                type: e
            }),
            e.\u0275inj = r.Tb({
                factory: function(t) {
                    return new (t || e)
                },
                imports: [[o.c]]
            }),
            e
        }
        )()
    },
    "3Al/": function(e) {
        e.exports = JSON.parse('{"shared.success":"\u0423\u0441\u043f\u0435\u0445!","shared.error":"\u041e\u0448\u0438\u0431\u043a\u0430!","shared.warn":"\u0412\u043d\u0438\u043c\u0430\u043d\u0438\u0435!","shared.info":"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f!","shared.sure":"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?","shared.yes":"\u0414\u0430","shared.no":"\u041d\u0435\u0442","shared.or":"\u0438\u043b\u0438","shared.cancel":"\u041e\u0442\u043c\u0435\u043d\u0430","shared.name":"\u0418\u043c\u044f","shared.del":"\u0423\u0434\u0430\u043b\u0438\u0442\u044c","shared.other-comp":"\u0414\u043b\u044f \u043e\u0442\u043a\u0440\u044b\u0442\u0438\u044f \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0430 \u043d\u0430 \u0434\u0440\u0443\u0433\u043e\u043c \u043a\u043e\u043c\u043f\u044c\u044e\u0442\u0435\u0440\u0435 \u0432\u043e\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435\u0441\u044c \u0441\u0441\u044b\u043b\u043a\u043e\u0439:","shared.playSound":"\u0417\u0432\u0443\u043a\u043e\u0432\u044b\u0435 \u0443\u0432\u0435\u0434\u043e\u043c\u043b\u0435\u043d\u0438\u044f","shared.settings":"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438","shared.on":"\u043d\u0430","shared.error-code":"\u041a\u043e\u0434 \u043e\u0448\u0438\u0431\u043a\u0438","shared.sng":"\u0421\u041d\u0413","shared.europe":"\u0415\u0432\u0440\u043e\u043f\u0430","shared.bill":"\u041d\u043e\u043c\u0438\u043d\u0430\u043b","shared.sum":"\u0421\u0443\u043c\u043c\u0430","shared.important":"\u0412\u0430\u0436\u043d\u043e!","shared.new-version":"\u0414\u043e\u0441\u0442\u0443\u043f\u043d\u0430 \u043d\u043e\u0432\u0430\u044f \u0432\u0435\u0440\u0441\u0438\u044f","shared.update-version":"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435","shared.count":"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e","shared.file-error":"\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0444\u0430\u0439\u043b","shared.total":"\u0418\u0442\u043e\u0433\u043e","shared.rub":"\u0440\u0443\u0431.","shared.bel-rub":"\u0431\u0435\u043b. \u0440\u0443\u0431.","shared.tenge":"\u0442\u0435\u043d\u0433\u0435","shared.som":"\u0441\u043e\u043c.","shared.z\u0142oty":"z\u0142oty","shared.dram":"\u0434\u0440\u0430\u043c.","shared.euro":"\u0435\u0432\u0440\u043e","shared.print":"\u041f\u0435\u0447\u0430\u0442\u044c","office-activation.header":"\u041e\u0444\u0438\u0441 \u043d\u0435 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d. \u041d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u0430 \u0430\u043a\u0442\u0438\u0432\u0430\u0446\u0438\u044f","office-activation.officeShk":"\u0428\u041a \u043e\u0444\u0438\u0441\u0430","office-activation.activate":"\u0410\u043a\u0442\u0438\u0432\u0438\u0440\u043e\u0432\u0430\u0442\u044c","category.pvz":"\u041f\u0412\u0417","category.couriers":"\u041a\u0443\u0440\u044c\u0435\u0440\u044b","category.cash-box":"\u041a\u0430\u0441\u0441\u0430","wavebreaker-state.header":"\u0412\u043e\u043b\u043d\u043e\u0440\u0435\u0437","wavebreaker-state.create-act":"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u0430\u043a\u0442","wavebreaker-state.print":"\u041f\u0435\u0447\u0430\u0442\u044c \u043d\u0430 \u043b\u0435\u043d\u0442\u0435","wavebreaker-state.print-selected":"\u041f\u0435\u0447\u0430\u0442\u044c \u0432\u044b\u0431\u0440\u0430\u043d\u043d\u044b\u0445 \u043d\u0430 \u043b\u0435\u043d\u0442\u0435","wavebreaker-state.print-form":"\u041f\u0435\u0447\u0430\u0442\u044c \u0432\u044b\u0431\u0440\u0430\u043d\u043d\u044b\u0445 \u043d\u0430 \u043f\u0440\u0438\u043d\u0442\u0435\u0440\u0435","wavebreaker-state.shk":"\u0448\u043a","wavebreaker.empty-data":"\u041d\u0435\u0442 \u0434\u0430\u043d\u043d\u044b\u0445 \u0434\u043b\u044f \u043f\u0435\u0447\u0430\u0442\u0438","wavebreaker.not-ready":"\u041d\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u043e","wavebreaker-state.courier":"\u041a\u0443\u0440\u044c\u0435\u0440\u0441\u043a\u0430\u044f","wavebreaker-state.recipient":"\u041f\u043e\u043b\u0443\u0447\u0430\u0442\u0435\u043b\u044c","wavebreaker-state.lk":"\u041b\u041a","wavebreaker-state.cellFrom":"\u0421 \u044f\u0447\u0435\u0439\u043a\u0438","wavebreaker-state.cellTo":"\u041f\u043e \u044f\u0447\u0435\u0439\u043a\u0443","wavebreaker-state.readyCells":"\u0412\u0441\u0435 \u0441\u043e\u0431\u0440\u0430\u043d\u043d\u044b\u0435","wavebreaker-state.cellAndPlace":"\u0412\u0441\u0435 \u044f\u0447\u0435\u0439\u043a\u0430+\u043f\u043e\u043b\u043a\u0430","wavebreaker-state.printRangeNotSelected":"\u041d\u0443\u0436\u043d\u043e \u0432\u044b\u0431\u0440\u0430\u0442\u044c \u0447\u0442\u043e-\u043d\u0438\u0431\u0443\u0434\u044c \u0434\u043b\u044f \u043f\u0435\u0447\u0430\u0442\u0438","wavebreaker-state.printRangeInvalid":"\u041d\u0435\u0432\u0435\u0440\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435 \u0434\u043b\u044f \u043f\u0435\u0447\u0430\u0442\u0438","wavebreaker.wavebreaker-state":"\u0421\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u0435 \u0432\u043e\u043b\u043d\u043e\u0440\u0435\u0437\u0430","wavebreaker.scan":"\u0421\u043a\u0430\u043d\u0438\u0440\u043e\u0432\u0430\u0442\u044c","wavebreaker.cell":"\u042f\u0447\u0435\u0439\u043a\u0430","wavebreaker.error":"\u041e\u0448\u0438\u0431\u043a\u0430","wavebreaker.unauthorized":"\u0412\u0430\u0448\u0430 \u0441\u0435\u0441\u0441\u0438\u044f \u0438\u0441\u0442\u0435\u043a\u043b\u0430, \u043f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u0435 \u043f\u043e\u043f\u044b\u0442\u043a\u0443 \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u0438","wavebreaker.error-login":"\u041d\u0435\u0432\u0435\u0440\u043d\u044b\u0439 \u043b\u043e\u0433\u0438\u043d \u0438\u043b\u0438 \u043f\u0430\u0440\u043e\u043b\u044c","wavebreaker.currentCell":"\u0422\u0435\u043a\u0443\u0449\u0430\u044f \u044f\u0447\u0435\u0439\u043a\u0430","wavebreaker.reject":"\u041e\u0442\u043a\u0430\u0437","wavebreaker.barcode-repeat":"\u041f\u043e\u0432\u0442\u043e\u0440\u043d\u044b\u0439 \u0441\u043a\u0430\u043d \u043f\u0440\u0435\u0434\u044b\u0434\u0443\u0449\u0435\u0433\u043e \u0431\u0430\u0440\u043a\u043e\u0434\u0430","wavebreaker.barcode":"\u041e\u0442\u0441\u043a\u0430\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0439 \u0431\u0430\u0440\u043a\u043e\u0434: ","wavebreaker.force-accept-barcode":"\u0414\u043b\u044f \u043f\u0440\u0438\u043d\u044f\u0442\u0438\u044f \u043e\u0442\u0441\u043a\u0430\u043d\u0438\u0440\u0443\u0439\u0442\u0435 \u0435\u0449\u0435 \u0440\u0430\u0437","wavebreaker.last-barcode-not-accepted":"\u041f\u043e\u0441\u043b\u0435\u0434\u043d\u0438\u0439 \u0442\u043e\u0432\u0430\u0440 \u0435\u0449\u0435 \u043d\u0435 \u043f\u0440\u0438\u043d\u044f\u0442","wavebreaker.no-shk":"\u041e\u0442\u0441\u043a\u0430\u043d\u0438\u0440\u0443\u0439\u0442\u0435 \u0428\u041a \u0442\u043e\u0432\u0430\u0440\u0430","wavebreaker.too-fast":"\u041f\u043e\u043c\u0435\u0434\u043b\u0435\u043d\u043d\u0435\u0435, \u044f \u0432\u0441\u0435 \u0437\u0430\u043f\u0438\u0441\u044b\u0432\u0430\u044e","wavebreaker.hasItemsOnPlace":"\u0415\u0441\u0442\u044c \u0432\u0435\u0449\u0438 \u043d\u0430 \u043f\u043e\u043b\u043a\u0435","wavebreaker.surplusPut":"\u041f\u0440\u0438\u043d\u044f\u0442\u043e \u0438\u0437\u043b\u0438\u0448\u043a\u043e\u043c","wavebreaker.instruction-head":"\u041f\u0435\u0440\u0435\u0434 \u043d\u0430\u0447\u0430\u043b\u043e\u043c \u043f\u0440\u0438\u0435\u043c\u0430 \u0432\u0435\u0449\u0435\u0439:","wavebreaker.instruction1":"\u0412\u044b\u043a\u043b\u044e\u0447\u0438\u0442\u0435 CapsLock","wavebreaker.instruction2":"\u041f\u0435\u0440\u0435\u043a\u043b\u044e\u0447\u0438\u0442\u0435\u0441\u044c \u043d\u0430 \u0430\u043d\u0433\u043b\u0438\u0439\u0441\u043a\u0443\u044e \u0440\u0430\u0441\u043a\u043b\u0430\u0434\u043a\u0443 \u043a\u043b\u0430\u0432\u0438\u0430\u0442\u0443\u0440\u044b","wavebreaker.instruction3":"\u041f\u043e\u0432\u0442\u043e\u0440\u043d\u043e\u0435 \u0441\u043a\u0430\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0431\u0430\u0440\u043a\u043e\u0434\u043d\u043e\u0439 \u0432\u0435\u0449\u0438 \u0440\u0430\u0441\u0446\u0435\u043d\u0438\u0432\u0430\u0435\u0442\u0441\u044f \u043a\u0430\u043a \u043f\u0440\u0438\u0435\u043c \u0415\u0429\u0415 \u041e\u0414\u041d\u041e\u0419 \u0432\u0435\u0449\u0438. \u0411\u0443\u0434\u044c\u0442\u0435 \u0430\u043a\u043a\u0443\u0440\u0430\u0442\u043d\u044b.","wavebreaker.instruction4":"\u0421\u043a\u0430\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0430\u0431\u0440\u0430\u0431\u043a\u0430\u0434\u0430\u0431\u0440\u044b, \u0441\u0441\u044b\u043b\u043e\u043a \u043d\u0430 youtube, \u0442\u0430\u043f\u043a\u043e\u0432 \u0438 \u0442.\u043f. \u0440\u0430\u0441\u0446\u0435\u043d\u0438\u0432\u0430\u0435\u0442\u0441\u044f \u043a\u0430\u043a \u043f\u0440\u0438\u0435\u043c \u0415\u0429\u0415 \u041e\u0414\u041d\u041e\u0419 \u0432\u0435\u0449\u0438. \u0411\u0443\u0434\u044c\u0442\u0435 \u0432\u043d\u0438\u043c\u0430\u0442\u0435\u043b\u044c\u043d\u044b!","wavebreaker.instruction5":"\u0414\u043b\u044f \u043f\u043e\u0438\u0441\u043a\u0430 \u0432\u0435\u0449\u0435\u0439 \u0432\u043e\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435\u0441\u044c \u043c\u0435\u043d\u044e","wavebreaker.playCellDone":"\u041f\u0440\u043e\u0438\u0433\u0440\u044b\u0432\u0430\u0442\u044c \xab\u200e\u044f\u0447\u0435\u0439\u043a\u0430 \u0441\u043e\u0431\u0440\u0430\u043d\u0430\xbb","wavebreaker.playHasItemsOnPlace":"\u041f\u0440\u043e\u0438\u0433\u0440\u044b\u0432\u0430\u0442\u044c \xab\u200e\u0435\u0441\u0442\u044c \u0432\u0435\u0449\u0438 \u043d\u0430 \u043f\u043e\u043b\u043a\u0435\xbb","wavebreaker.howToMove":"\u0414\u043b\u044f \u043f\u0435\u0440\u0435\u043c\u0435\u0449\u0435\u043d\u0438\u044f \u0432\u0435\u0449\u0435\u0439 \u0432\u043e \u0432\u0440\u0435\u043c\u044f \u043f\u0440\u0438\u0435\u043c\u043a\u0438 \u043d\u0430 \u043f\u043e\u043b\u043a\u0443 (\u0438\u043b\u0438 \u0434\u0440\u0443\u0433\u0443\u044e \u044f\u0447\u0435\u0439\u043a\u0443)","wavebreaker.moveHint1":"\u0421\u043a\u0430\u043d\u0438\u0440\u0443\u0435\u043c \u0432\u0435\u0449\u044c (\u043f\u0440\u0438 \u044d\u0442\u043e\u043c \u0443\u0441\u0442\u0430\u043d\u0430\u0432\u043b\u0438\u0432\u0430\u0435\u0442\u0441\u044f \u0442\u0435\u043a\u0443\u0449\u0430\u044f \u044f\u0447\u0435\u0439\u043a\u0430) \u0438\u043b\u0438 \u0441\u043a\u0430\u043d\u0438\u0440\u0443\u0435\u043c \u0428\u041a \u044f\u0447\u0435\u0439\u043a\u0438 (\u043c\u043e\u0436\u043d\u043e \u0432\u0432\u0435\u0441\u0442\u0438 \u0432\u0440\u0443\u0447\u043d\u0443\u044e WVBR123, \u0433\u0434\u0435 123 - \u043d\u043e\u043c\u0435\u0440 \u044f\u0447\u0435\u0439\u043a\u0438)","wavebreaker.moveHint2":"\u0421\u043a\u0430\u043d\u0438\u0440\u0443\u0435\u043c \u0428\u041a \u043f\u043e\u043b\u043a\u0438, \u043d\u0430 \u043a\u043e\u0442\u043e\u0440\u0443\u044e \u043f\u0435\u0440\u0435\u043c\u0435\u0449\u0430\u0435\u043c \u0432\u0435\u0449\u0438, \u043b\u0438\u0431\u043e \u0441\u043a\u0430\u043d\u0438\u0440\u0443\u0435\u043c \u0428\u041a \u0434\u0440\u0443\u0433\u043e\u0439 \u044f\u0447\u0435\u0439\u043a\u0438, \u0438 \u043f\u0435\u0440\u0435\u043a\u043b\u0430\u0434\u044b\u0432\u0430\u0435\u043c \u0432\u0435\u0449\u0438 \u0432 \u043d\u0435\u0435","schedule.header":"\u0420\u0430\u0441\u043f\u043e\u0440\u044f\u0434\u043e\u043a \u0434\u043d\u044f","schedule.wb-state":"\u0417\u0430\u043d\u044f\u0442\u043e {{wavebreakerCellCount}} \u044f\u0447\u0435\u0435\u043a.","schedule.wb-state-message":"\u0417\u0430\u043d\u044f\u0442\u043e {{wavebreakerCellCount}} \u044f\u0447\u0435\u0435\u043a. \u041d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043f\u0435\u0440\u0435\u043c\u0435\u0441\u0442\u0438\u0442\u044c {{ onPlaceAndWavebreakerCount }} \u043f\u043e\u043b\u0443\u0447\u0430\u0442\u0435\u043b\u0435\u0439","schedule.clock-in":"\u041e\u0442\u043c\u0435\u0442\u0438\u0442\u044c\u0441\u044f","schedule.clock-in-message":"\u041e\u0442\u043c\u0435\u0442\u044c\u0442\u0435\u0441\u044c \u043e \u043f\u0440\u0438\u0445\u043e\u0434\u0435 \u043d\u0430 \u0440\u0430\u0431\u043e\u0442\u0443","schedule.open-shift":"\u041e\u0442\u043a\u0440\u044b\u0442\u044c \u0441\u043c\u0435\u043d\u0443","schedule.open-shift-message":"\u041e\u0442\u043a\u0440\u043e\u0439\u0442\u0435 \u043a\u0430\u0441\u0441\u043e\u0432\u0443\u044e \u0441\u043c\u0435\u043d\u0443","schedule.accept-boxes":"\u041f\u0440\u0438\u043d\u044f\u0442\u044c \u043a\u043e\u0440\u043e\u0431\u043a\u0438","schedule.accept-items":"\u041f\u0440\u0438\u043d\u044f\u0442\u044c \u0432\u0435\u0449\u0438 \u043d\u0430 \u0432\u043e\u043b\u043d\u043e\u0440\u0435\u0437","schedule.accept-items-message":"\u041d\u0435 \u043f\u0440\u0438\u043d\u044f\u0442\u043e \u0435\u0449\u0435 {{count}} \u0432\u0435\u0449\u0435\u0439","schedule.accept-items-rejects":". \u0418\u0437 \u043d\u0438\u0445 \u043e\u0442\u043a\u0430\u0437\u043e\u0432: {{rejectCount}}","schedule.accept-docs":"\u041f\u0440\u0438\u043d\u044f\u0442\u044c \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u044b","schedule.scan-refunds":"\u041e\u0442\u0441\u043a\u0430\u043d\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0432\u043e\u0437\u0432\u0440\u0430\u0442\u044b/\u043e\u0442\u043a\u0430\u0437\u044b","schedule.scan-refunds-message":"\u041d\u0435 \u043e\u0442\u0441\u043a\u0430\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u043e \u0435\u0449\u0435 {{count}} \u043e\u0442\u043a\u0430\u0437\u043e\u0432","schedule.sort-count-message":"\u041d\u0435 \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043e \u043d\u0430 \u0441\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0443: {{sortCount}} \u0432\u0435\u0449\u0435\u0439","schedule.clear-wavebreaker":"\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u044c \u0432\u043e\u043b\u043d\u043e\u0440\u0435\u0437","schedule.close-shift":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c \u0441\u043c\u0435\u043d\u0443","schedule.close-shift-message":"\u0417\u0430\u043a\u0440\u043e\u0439\u0442\u0435 \u043a\u0430\u0441\u0441\u043e\u0432\u0443\u044e \u0441\u043c\u0435\u043d\u0443","schedule.load-docs":"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u043e\u0442\u0441\u043a\u0430\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0435 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u044b","schedule.load-docs-message":"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u0435 \u043e\u0442\u0441\u043a\u0430\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0435 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u044b","schedule.clock-out":"\u0423\u0439\u0442\u0438 \u0441 \u0440\u0430\u0431\u043e\u0442\u044b","schedule.clock-out-message":"\u041e\u0442\u043c\u0435\u0442\u044c\u0442\u0435\u0441\u044c \u043d\u0430 \u0443\u0445\u043e\u0434 \u0441 \u0440\u0430\u0431\u043e\u0442\u044b","schedule.boxes-not-accepted":"\u0415\u0441\u0442\u044c \u043d\u0435\u043f\u0440\u0438\u043d\u044f\u0442\u044b\u0435 \u043a\u043e\u0440\u043e\u0431\u043a\u0438","work-time.header":"\u0423\u0447\u0435\u0442 \u0440\u0430\u0431\u043e\u0447\u0435\u0433\u043e \u0432\u0440\u0435\u043c\u0435\u043d\u0438","work-time.name":"\u0418\u043c\u044f","work-time.begin-date":"\u0412\u0440\u0435\u043c\u044f \u0432\u0445\u043e\u0434\u0430","work-time.end-date":"\u0412\u0440\u0435\u043c\u044f \u0432\u044b\u0445\u043e\u0434\u0430","work-time.enter":"\u0412\u0445\u043e\u0434","work-time.exit":"\u0412\u044b\u0445\u043e\u0434","session-open.header":"\u041e\u0442\u043a\u0440\u044b\u0442\u0438\u0435 \u0441\u043c\u0435\u043d\u044b","session-open.in-cash":"\u0421\u0443\u043c\u043c\u0430 \u0432 \u043a\u0430\u0441\u0441\u0435","session-open.amount":"\u041d\u043e\u043c\u0438\u043d\u0430\u043b","session-open.count":"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e","session-open.summ":"\u0421\u0443\u043c\u043c\u0430","session-open.total":"\u0418\u0442\u043e\u0433\u043e","session-open.open-session":"\u041e\u0442\u043a\u0440\u044b\u0442\u044c \u0441\u043c\u0435\u043d\u0443","session-open.print-act":"\u041d\u0430\u043f\u0435\u0447\u0430\u0442\u0430\u0442\u044c \u0430\u043a\u0442","session-open.accept":"\u0414\u0430","session-open.decline":"\u041d\u0435\u0442","session-open.session-info":"\u0412 \u0434\u0430\u043d\u043d\u043e\u043c \u0444\u0438\u043b\u0438\u0430\u043b\u0435 \u0441\u043c\u0435\u043d\u0430 \u0431\u044b\u043b\u0430 \u0443\u0436\u0435 \u043e\u0442\u043a\u0440\u044b\u0442\u0430 \u0441\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u043a\u043e\u043c {{employeeName}} {{openDate}} c \u0441\u0443\u043c\u043c\u043e\u0439 \u0432 \u043a\u0430\u0441\u0441\u0435 {{openAmount}}","session-open.show-print-service-error":"\u041e\u0448\u0438\u0431\u043a\u0430 \u043e\u0431\u043c\u0435\u043d\u0430 \u0434\u0430\u043d\u043d\u044b\u043c\u0438 \u0441 \u0441\u0435\u0440\u0432\u0438\u0441\u043e\u043c \u043f\u0435\u0447\u0430\u0442\u0438 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u043e\u0432","session-open.proceed":"\u0421\u043c\u0435\u043d\u0430 \u043e\u0442\u043a\u0440\u044b\u0442\u0430.","session-open.print-doc":"\u0421\u043c\u0435\u043d\u0430 \u043e\u0442\u043a\u0440\u044b\u0442\u0430. \u041f\u043e\u0434\u043f\u0438\u0448\u0438\u0442\u0435 \u0430\u043a\u0442 \u0438 \u0440\u0430\u0441\u043f\u0435\u0447\u0430\u0442\u0430\u0439\u0442\u0435 \u0435\u0433\u043e.","session-open.diff-message":"\u0418\u043c\u0435\u0435\u0442\u0441\u044f \u0440\u0430\u0441\u0445\u043e\u0436\u0434\u0435\u043d\u0438\u0435 \u0432 \u0440\u0430\u0437\u043c\u0435\u0440\u0435 {{diff}}. \u0412\u044b \u0442\u043e\u0447\u043d\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u043e\u0442\u043a\u0440\u044b\u0442\u044c \u0441\u043c\u0435\u043d\u0443 \u0441 \u0441\u0443\u043c\u043c\u043e\u0439 {{totalSumm}}?","session-open.session-open-message":"\u0421\u043c\u0435\u043d\u0430 \u043e\u0442\u043a\u0440\u044b\u0442\u0430 \u0441 \u0440\u0430\u0441\u0445\u043e\u0436\u0434\u0435\u043d\u0438\u0435\u043c {{diff}}. \u0411\u0430\u043b\u0430\u043d\u0441 \u043f\u0440\u0438 \u0437\u0430\u043a\u0440\u044b\u0442\u0438\u0438: {{closedSessionAmount}}, \u0431\u0430\u043b\u0430\u043d\u0441 \u043f\u0440\u0438 \u043e\u0442\u043a\u0440\u044b\u0442\u0438\u0438: {{openAmount}}","session-open.session-open-confirm":"\u0412\u044b \u0442\u043e\u0447\u043d\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u043e\u0442\u043a\u0440\u044b\u0442\u044c \u0441\u043c\u0435\u043d\u0443 \u0441 \u0441\u0443\u043c\u043c\u043e\u0439 {{totalSumm}}?","session-open.session-open-error":"\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f \u0434\u0430\u043d\u043d\u044b\u0445 \u043f\u043e \u043f\u0440\u0435\u0434\u044b\u0434\u0443\u0449\u0435\u0439 \u0441\u043c\u0435\u043d\u0435.","session-open.diff-msg":"\u0418\u043c\u0435\u0435\u0442\u0441\u044f \u0440\u0430\u0441\u0445\u043e\u0436\u0434\u0435\u043d\u0438\u0435 \u0432 \u0440\u0430\u0437\u043c\u0435\u0440\u0435 {{diff}}. \u0414\u043b\u044f \u043e\u0442\u043a\u0440\u044b\u0442\u0438\u044f \u0441\u043c\u0435\u043d\u044b \u043e\u0431\u0440\u0430\u0442\u0438\u0442\u0435\u0441\u044c \u043a \u0440\u0443\u043a\u043e\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044e \u0444\u0438\u043b\u0438\u0430\u043b\u0430.","session-close.header":"\u0417\u0430\u043a\u0440\u044b\u0442\u0438\u0435 \u0441\u043c\u0435\u043d\u044b","session-close.close-session":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c \u0441\u043c\u0435\u043d\u0443","session-close.session-close-confirm":"\u0412\u044b \u0442\u043e\u0447\u043d\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u0437\u0430\u043a\u0440\u044b\u0442\u044c \u0441\u043c\u0435\u043d\u0443 \u0441 \u0441\u0443\u043c\u043c\u043e\u0439 {{totalSum}}?","session-close.diff-message":"\u0418\u043c\u0435\u0435\u0442\u0441\u044f \u0440\u0430\u0441\u0445\u043e\u0436\u0434\u0435\u043d\u0438\u0435 \u0432 \u0440\u0430\u0437\u043c\u0435\u0440\u0435 {{diff}}. \u0414\u043b\u044f \u0437\u0430\u043a\u0440\u044b\u0442\u0438\u044f \u0441\u043c\u0435\u043d\u044b \u043f\u043e \u0444\u0430\u043a\u0442\u0443 \u043e\u0431\u0440\u0430\u0442\u0438\u0442\u0435\u0441\u044c \u043a \u0440\u0435\u0433\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u043e\u043c\u0443 \u0440\u0443\u043a\u043e\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044e.","session-close.success":"\u0421\u043c\u0435\u043d\u0430 \u0437\u0430\u043a\u0440\u044b\u0442\u0430.","session-close.print-doc":"\u0421\u043c\u0435\u043d\u0430 \u0437\u0430\u043a\u0440\u044b\u0442\u0430. \u0420\u0430\u0441\u043f\u0435\u0447\u0430\u0442\u0430\u0439\u0442\u0435 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u044b","session-close.overflow-limit":"\u041f\u0440\u0435\u0432\u044b\u0448\u0435\u043d\u0438\u0435 \u043b\u0438\u043c\u0438\u0442\u0430 \u043a\u0430\u0441\u0441\u044b ({{limit}}). \u0412 \u043a\u0430\u0441\u0441\u0435: {{closeAmount}}","session-close.diff-msg":"\u0418\u043c\u0435\u0435\u0442\u0441\u044f \u0440\u0430\u0441\u0445\u043e\u0436\u0434\u0435\u043d\u0438\u0435 \u0432 \u0440\u0430\u0437\u043c\u0435\u0440\u0435 {{diff}}","session-close.print-docs":"\u041f\u0435\u0447\u0430\u0442\u044c \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u043e\u0432","session-close.attention":"\u0412\u041d\u0418\u041c\u0410\u041d\u0418\u0415! \u0421\u043e\u0433\u043b\u0430\u0441\u043d\u043e \u0438\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u0438, \u041f\u0415\u0420\u0415\u0414 \u0437\u0430\u043a\u0440\u044b\u0442\u0438\u0435\u043c \u0441\u043c\u0435\u043d\u044b \u0441\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u043a \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043d\u044f\u0442\u044c \u0421\u0412\u0415\u0420\u041a\u0423 \u0418\u0422\u041e\u0413\u041e\u0412 \u043d\u0430 \u0442\u0435\u0440\u043c\u0438\u043d\u0430\u043b\u0435 \u0431\u0435\u0437\u043d\u0430\u043b\u0438\u0447\u043d\u043e\u0439 \u043e\u043f\u043b\u0430\u0442\u044b","session-close.session-info":"\u0412 \u0434\u0430\u043d\u043d\u043e\u043c \u0444\u0438\u043b\u0438\u0430\u043b\u0435 \u0441\u043c\u0435\u043d\u0430 \u0431\u044b\u043b\u0430 \u0443\u0436\u0435 \u043e\u0442\u043a\u0440\u044b\u0442\u0430 \u0441\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u043a\u043e\u043c {{employeeName}} {{openDate}} c \u0441\u0443\u043c\u043c\u043e\u0439 \u0432 \u043a\u0430\u0441\u0441\u0435 {{openAmount}}","session-close.last-session":"\u041f\u043e\u0441\u043b\u0435\u0434\u043d\u044f\u044f \u0437\u0430\u043a\u0440\u044b\u0442\u0430\u044f \u0441\u043c\u0435\u043d\u0430","session-close.closed-date":"\u0414\u0430\u0442\u0430 \u0437\u0430\u043a\u0440\u044b\u0442\u0438\u044f","session-close.closed-employee":"\u0417\u0430\u043a\u0440\u044b\u043b","session-close.kkm-sum":"\u0421\u0443\u043c\u043c\u0430 \u0432 \u043a\u0430\u0441\u0441\u0435, \u043f\u043e \u043d\u043e\u043c\u0438\u043d\u0430\u043b\u0430\u043c, \u043d\u0430 \u043c\u043e\u043c\u0435\u043d\u0442 \u0437\u0430\u043a\u0440\u044b\u0442\u0438\u044f \u0441\u043c\u0435\u043d\u044b","prompt-window.text1":"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u0434, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d","prompt-window.text2":"\u043f\u043e\u043a\u0443\u043f\u0430\u0442\u0435\u043b\u044e","prompt-window.text3":"\u0432 \u0421\u041c\u0421","prompt-window.error":"\u041d\u0435\u0432\u0435\u0440\u043d\u044b\u0439 \u0441\u043c\u0441 \u043a\u043e\u0434. \u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u0435 \u043f\u043e\u043f\u044b\u0442\u043a\u0443","prompt-window.accept":"\u041e\u043a","prompt-window.cancel":"\u041e\u0442\u043c\u0435\u043d\u0430","digital-signature-section.1":"\u041d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u0430 \u043f\u0440\u0435\u0434\u044b\u0434\u0443\u0449\u0430\u044f \u043f\u043e\u0434\u043f\u0438\u0441\u044c","digital-signature-section.2":"\u0413\u043e\u0442\u043e\u0432 \u0434\u043b\u044f \u043f\u043e\u0434\u043f\u0438\u0441\u0430\u043d\u0438\u044f","digital-signature-section.3":"\u0414\u043e\u043a\u0443\u043c\u0435\u043d\u0442 \u043f\u043e\u0434\u043f\u0438\u0441\u0430\u043d","digital-signature-section.watermark":"\u0411\u0435\u0437 \u044d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u043e\u0439 \u043f\u043e\u0434\u043f\u0438\u0441\u0438 \u043d\u0435\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043b\u0435\u043d","digital-signature-section.header":"\u0426\u0438\u0444\u0440\u043e\u0432\u0430\u044f \u043f\u043e\u0434\u043f\u0438\u0441\u044c","digital-signature-section.document":"\u0414\u043e\u043a\u0443\u043c\u0435\u043d\u0442","digital-signature-section.status":"\u0421\u0442\u0430\u0442\u0443\u0441","digital-signature-section.fio":"\u0418\u043c\u044f","digital-signature-section.enter-fio":"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f","digital-signature-section.position":"\u0414\u043e\u043b\u0436\u043d\u043e\u0441\u0442\u044c \u043f\u043e\u0434\u043f\u0438\u0441\u0430\u043d\u0442\u0430","digital-signature-section.show":"\u041f\u0440\u043e\u0441\u043c\u043e\u0442\u0440","digital-signature-section.send-sms-code":"\u041f\u043e\u0434\u043f\u0438\u0441\u0430\u0442\u044c \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u044b","digital-signature-section.user-agreement-header":"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u0441\u043a\u043e\u0435 \u0441\u043e\u0433\u043b\u0430\u0448\u0435\u043d\u0438\u0435 \u0434\u043b\u044f \u0446\u0438\u0444\u0440\u043e\u0432\u043e\u0439 \u043f\u043e\u0434\u043f\u0438\u0441\u0438","digital-signature-section.user-agreement-description1":"\u0414\u043b\u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f \u044d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u043e\u0439 \u0446\u0438\u0444\u0440\u043e\u0432\u043e\u0439 \u043f\u043e\u0434\u043f\u0438\u0441\u0438 \u0412\u0430\u043c \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043e\u0437\u043d\u0430\u043a\u043e\u043c\u0438\u0442\u044c\u0441\u044f \u0441 \u043d\u0438\u0436\u0435\u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u043c \u0441\u043e\u0433\u043b\u0430\u0448\u0435\u043d\u0438\u0435\u043c,\\n        \u0432\u0432\u0435\u0441\u0442\u0438 \u0441\u0432\u043e\u0438 \u043f\u0435\u0440\u0441\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435 \u0438 \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u043a\u043b\u044e\u0447.","digital-signature-section.user-agreement-description2":"\u042d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u0430\u044f \u0446\u0438\u0444\u0440\u043e\u0432\u0430\u044f \u043f\u043e\u0434\u043f\u0438\u0441\u044c (\u042d\u0426\u041f) \u2013 \u0440\u0435\u043a\u0432\u0438\u0437\u0438\u0442 \u044d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u043e\u0433\u043e \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430, \u043f\u0440\u0435\u0434\u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u043d\u044b\u0439 \u0434\u043b\u044f \u043f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043d\u0438\u044f\\n        \u043d\u0435\u0438\u0437\u043c\u0435\u043d\u043d\u043e\u0441\u0442\u0438 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438, \u0430 \u0442\u0430\u043a\u0436\u0435 \u0437\u0430\u0449\u0438\u0442\u044b \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430 \u043e\u0442 \u043f\u043e\u0434\u0434\u0435\u043b\u043a\u0438. \u041a\u043b\u044e\u0447 \u044d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u043e\u0439 \u043f\u043e\u0434\u043f\u0438\u0441\u0438 (\u0437\u0430\u043a\u0440\u044b\u0442\u044b\u0439 \u043a\u043b\u044e\u0447)\\n        \u2013 \u0443\u043d\u0438\u043a\u0430\u043b\u044c\u043d\u0430\u044f \u043f\u043e\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432, \u043f\u0440\u0435\u0434\u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u043d\u0430\u044f \u0434\u043b\u044f \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u044d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u043e\u0439 \u043f\u043e\u0434\u043f\u0438\u0441\u0438, \u0437\u0430\u043f\u0438\u0441\u0430\u043d\u043d\u0430\u044f \u0432\\n        \u0432\u0438\u0434\u0435 \u043e\u0434\u043d\u043e\u0433\u043e \u0438\u043b\u0438 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u0438\u0445 \u044d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u044b\u0445 \u0444\u0430\u0439\u043b\u043e\u0432 \u043d\u0430 \u044d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u043e\u043c \u043d\u043e\u0441\u0438\u0442\u0435\u043b\u0435, \u0434\u043e\u0441\u0442\u0443\u043f \u043a \u043a\u043e\u0442\u043e\u0440\u043e\u043c\u0443 \u0438\u043c\u0435\u0435\u0442 \u0442\u043e\u043b\u044c\u043a\u043e\\n        \u0432\u043b\u0430\u0434\u0435\u043b\u0435\u0446 \u044d\u0442\u043e\u0433\u043e \u043a\u043b\u044e\u0447\u0430.","digital-signature-section.user-agreement-description3":"\u0421\u0442\u043e\u0440\u043e\u043d\u044b \u0441\u043e\u0433\u043b\u0430\u0448\u0435\u043d\u0438\u044f \u043f\u0440\u0438\u0437\u043d\u0430\u044e\u0442, \u0447\u0442\u043e \u044d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u044b\u0439 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442 \u0438 \u042d\u0426\u041f \u044d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u043e\u0433\u043e \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u044e\u0440\u0438\u0434\u0438\u0447\u0435\u0441\u043a\u0438\\n        \u0437\u043d\u0430\u0447\u0438\u043c\u044b\u043c\u0438, \u042d\u0426\u041f \u0440\u0430\u0432\u043d\u043e\u0437\u043d\u0430\u0447\u043d\u0430 \u0441\u043e\u0431\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0440\u0443\u0447\u043d\u043e\u0439 \u043f\u043e\u0434\u043f\u0438\u0441\u0438. \u0412 \u0441\u043b\u0443\u0447\u0430\u0435 \u0432\u043e\u0437\u043d\u0438\u043a\u043d\u043e\u0432\u0435\u043d\u0438\u044f \u0441\u043f\u043e\u0440\u043e\u0432 \u043e \u043d\u0430\u043b\u0438\u0447\u0438\u0438 \u042d\u0426\u041f \u043f\u043e\u0434\\n        \u044d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u044b\u043c \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u043e\u043c \u0438\u043b\u0438 \u043e\u0431 \u0438\u0441\u043a\u0430\u0436\u0435\u043d\u0438\u0438 \u044d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u043e\u0433\u043e \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430, \u0431\u0440\u0435\u043c\u044f \u0434\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u043d\u0438\u044f \u043b\u0435\u0436\u0438\u0442 \u043d\u0430 \u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435,\\n        \u043d\u0435 \u0441\u043e\u0433\u043b\u0430\u0448\u0430\u044e\u0449\u0435\u043c\u0441\u044f \u0441 \u043d\u0430\u043b\u0438\u0447\u0438\u0435\u043c \u042d\u0426\u041f \u0438\u043b\u0438 \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u043c\u044b\u043c \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430.","digital-signature-section.passport":"\u0421\u0435\u0440\u0438\u044f \u0438 \u043d\u043e\u043c\u0435\u0440 \u043f\u0430\u0441\u043f\u043e\u0440\u0442\u0430","digital-signature-section.passport-placeholder":"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0435\u0440\u0438\u044e \u0438 \u043d\u043e\u043c\u0435\u0440 \u043f\u0430\u0441\u043f\u043e\u0440\u0442\u0430 (\u0431\u0435\u0437 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432)","digital-signature-section.phone":"\u041d\u043e\u043c\u0435\u0440 \u043c\u043e\u0431\u0438\u043b\u044c\u043d\u043e\u0433\u043e \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430","digital-signature-section.phone-placeholder":"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u043e\u043c\u0435\u0440 \u043c\u043e\u0431\u0438\u043b\u044c\u043d\u043e\u0433\u043e \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 (\u0432 \u0444\u043e\u0440\u043c\u0430\u0442\u0435 79001111111)","digital-signature-section.accept-terms":"\u042f \u0441\u043e\u0433\u043b\u0430\u0441\u0435\u043d/\u0441\u043e\u0433\u043b\u0430\u0441\u043d\u0430 \u0441 \u0443\u0441\u043b\u043e\u0432\u0438\u044f\u043c\u0438 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u0441\u043a\u043e\u0433\u043e \u0441\u043e\u0433\u043b\u0430\u0448\u0435\u043d\u0438\u044f","digital-signature-section.send-sms-key":"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c \u0421\u041c\u0421 \u043a\u043e\u0434 \u0434\u043b\u044f \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u043a\u043b\u044e\u0447\u0430","digital-signature-section.key-complete":"\u0412\u0430\u0448 \u043a\u043b\u044e\u0447 \u0431\u044b\u043b \u0441\u043e\u0437\u0434\u0430\u043d. \u0422\u0435\u043f\u0435\u0440\u044c \u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u0440\u0438\u0441\u0442\u0443\u043f\u0438\u0441\u0442\u044c \u043a \u043f\u043e\u0434\u043f\u0438\u0441\u0430\u043d\u0438\u044e \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u043e\u0432.","digital-signature-section.continue":"\u041f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u044c","session-close.close-warning":"\u0421\u043c\u0435\u043d\u0430 \u0443\u0436\u0435 \u0437\u0430\u043a\u0440\u044b\u0442\u0430","session-close.packet-warning":"\u0417\u0410\u041a\u041e\u041d\u0427\u0418\u0422\u0415 \'\u041f\u0440\u0438\u0435\u043c \u043a\u043e\u0440\u043e\u0431\u043e\u043a\'","session-close.packet-button":"\u041f\u0440\u0438\u0435\u043c \u043a\u043e\u0440\u043e\u0431\u043e\u043a","session-close.doc-warning":"\u0417\u0410\u041a\u041e\u041d\u0427\u0418\u0422\u0415 \'\u041f\u0440\u0438\u0435\u043c \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u043e\u0432\'.","session-close.doc-button":"\u041f\u0440\u0438\u0435\u043c \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u043e\u0432","session-close.client-warning":"\u041d\u0430 \u043f\u0440\u0438\u043c\u0435\u0440\u043a\u0435 \u0435\u0441\u0442\u044c \u043a\u043b\u0438\u0435\u043d\u0442\u044b","session-close.client-button":"\u0417\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u044c \u043f\u0440\u0438\u043c\u0435\u0440\u043a\u0443","session-close.rejected-warning":"\u041d\u0435 \u0432\u0441\u0435 \u043e\u0442\u043a\u0430\u0437\u044b/\u0432\u043e\u0437\u0432\u0440\u0430\u0442\u044b \u043e\u0442\u0441\u043a\u0430\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u044b \u0432 \u043a\u043e\u0440\u043e\u0431\u043a\u0438","session-close.rejected-button":"\u0412\u0441\u0435 \u0447\u0442\u043e \u0431\u044b\u043b\u043e, \u043e\u0442\u0441\u043a\u0430\u043d\u0438\u0440\u043e\u0432\u0430\u043b. \u041e\u0441\u0442\u0430\u043b\u044c\u043d\u043e\u0435 \u043d\u0435 \u043d\u0430\u0448\u0435\u043b","session-close.fiscal-warning":"\u0412\u0430\u043c \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0444\u0438\u0441\u043a\u0430\u043b\u0438\u0437\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0432\u0441\u0435 \u0447\u0435\u043a\u0438 \u0437\u0430 \u0441\u043c\u0435\u043d\u0443. \u042d\u0442\u043e \u043c\u043e\u0436\u043d\u043e \u0441\u0434\u0435\u043b\u0430\u0442\u044c, \u043a\u043b\u0438\u043a\u043d\u0443\u0432 \u043f\u043e \u043a\u043d\u043e\u043f\u043a\u0435 \u0414\u043e\u0431\u0438\u0442\u0438\u0435 \u0447\u0435\u043a\u043e\u0432. \u0415\u0441\u043b\u0438 \u043f\u0435\u0440\u0435\u0434 \u0434\u043e\u0431\u0438\u0442\u0438\u0435\u043c \u0447\u0435\u043a\u043e\u0432 \u0432\u044b \u0445\u043e\u0442\u0438\u0442\u0435 \u0440\u0430\u0441\u043f\u0435\u0447\u0430\u0442\u0430\u0442\u044c Z-\u043e\u0442\u0447\u0451\u0442, \u0432\u043e\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435\u0441\u044c \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u043e\u043c \u041f\u043b\u0430\u0442\u0451\u0436\u043d\u044b\u0435 \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0430..","session-close.fiscal-button":"\u0414\u043e\u0431\u0438\u0442\u0438\u0435 \u0447\u0435\u043a\u043e\u0432","session-close.package-warning":"\u041f\u0440\u043e\u0438\u043d\u0432\u0435\u043d\u0442\u0430\u0440\u0438\u0437\u0438\u0440\u0443\u0439\u0442\u0435 \u043f\u0430\u043a\u0435\u0442\u044b. \u041e\u0442\u0440\u0430\u0437\u0438\u0442\u0435 \u0442\u0435\u043a\u0443\u0449\u0435\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e - \u043f\u0435\u0440\u0435\u0440\u0430\u0441\u0445\u043e\u0434 \u0431\u0443\u0434\u0435\u0442 \u0441\u043f\u0438\u0441\u0430\u043d \u0432 \u043f\u043e\u0434\u043e\u0442\u0447\u0435\u0442!","session-close.package-button":"\u0418\u043d\u0432\u0435\u043d\u0442\u0430\u0440\u0438\u0437\u0430\u0446\u0438\u044f \u043f\u0430\u043a\u0435\u0442\u043e\u0432","session-close.number":"\u041d\u043e\u043c\u0435\u0440","session-close.date":"\u0414\u0430\u0442\u0430","session-close.creator":"\u0421\u043e\u0437\u0434\u0430\u0442\u0435\u043b\u044c","session-close.cash":"\u041d\u0430\u043b","session-close.cashless":"\u0411\u0435\u0437\u043d\u0430\u043b","session-close.return":"\u0421\u0443\u043c\u043c\u0430 \u0432\u043e\u0437\u0432\u0440\u0430\u0442\u043e\u0432","session-close.incremental-cash":"\u041d\u0435\u043e\u0431\u043d\u0443\u043b\u044f\u0435\u043c\u0430\u044f \u0441\u0443\u043c\u043c\u0430","session-close.send-complain":"\u0412\u0430\u0448\u0435 \u043e\u0431\u0440\u0430\u0449\u0435\u043d\u0438\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u043e","session-close.send-complain-error":"\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u043f\u043e\u043b\u044f","session-close.km3-dialog-save":"\u0421\u0443\u043c\u043c\u0430 \u0447\u0435\u043a\u043e\u0432 \u043d\u0435 \u0440\u0430\u0432\u043d\u0430","session-close.close-session-z":"\u041d\u0435 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d Z-\u043e\u0442\u0447\u0435\u0442","session-close.close-session-closeAmount":"\u0421\u0443\u043c\u043c\u0430 \u043f\u0440\u0438 \u0437\u0430\u043a\u0440\u044b\u0442\u0438\u0438 \u0441\u043c\u0435\u043d\u044b \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043e\u0442\u0440\u0438\u0446\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0439!","session-close.close-session-confirm":"\u0412\u044b \u0442\u043e\u0447\u043d\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u0437\u0430\u043a\u0440\u044b\u0442\u044c \u0441\u043c\u0435\u043d\u0443 \u0441 \u0441\u0443\u043c\u043c\u043e\u0439","session-close.limit-overflow":"\u041f\u0440\u0435\u0432\u044b\u0448\u0435\u043d\u0438\u0435 \u043b\u0438\u043c\u0438\u0442\u0430 \u043a\u0430\u0441\u0441\u044b","session-close.limit-overflow-cass":"\u0412 \u043a\u0430\u0441\u0441\u0435","session-close.limit-overflow-in-safe":"\u0432 \u0441\u0435\u0439\u0444\u0435","session-close.limit-overflow-shtraff":"\u0411\u0443\u0434\u0435\u0442 \u0441\u043e\u0437\u0434\u0430\u043d \u0448\u0442\u0440\u0430\u0444","session-close.has-diff":"\u0418\u043c\u0435\u0435\u0442\u0441\u044f \u0440\u0430\u0441\u0445\u043e\u0436\u0434\u0435\u043d\u0438\u0435 \u0432 \u0440\u0430\u0437\u043c\u0435\u0440\u0435","session-close.has-diff-plus":"\u0438\u0437\u043b\u0438\u0448\u0435\u043a","session-close.has-diff-minus":"\u043d\u0435\u0434\u043e\u0441\u0442\u0430\u0447\u0430","session-close.has-diff-return":"\u0411\u0443\u0434\u0435\u0442 \u0441\u043e\u0437\u0434\u0430\u043d \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442 \\"\u0412\u044b\u0434\u0430\u0447\u0430/\u0412\u043e\u0437\u0432\u0440\u0430\u0442\\". ","session-close.chief-confirm":"\u0412\u044b \u0442\u043e\u0447\u043d\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u0437\u0430\u043a\u0440\u044b\u0442\u044c \u0441\u043c\u0435\u043d\u0443 \u0441 \u0441\u0443\u043c\u043c\u043e\u0439","session-close.confirm":"\u0414\u043b\u044f \u0437\u0430\u043a\u0440\u044b\u0442\u0438\u044f \u0441\u043c\u0435\u043d\u044b \u043e\u0431\u0440\u0430\u0442\u0438\u0442\u0435\u0441\u044c \u043a","session-close.error":"\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f \u0434\u0430\u043d\u043d\u044b\u0445 \u043f\u043e \u0441\u043c\u0435\u043d\u0435.","session-close.proceed1":"\u0417\u0430\u043a\u0440\u044b\u0442\u0430 \u0441\u043c\u0435\u043d\u0430 \u2116","session-close.chiefs1":"\u0420\u0424, \u0417\u0420\u0420 \u0438\u043b\u0438 \u0420\u0420","session-close.chiefs2":"\u0417\u0420\u0420 \u0438\u043b\u0438 \u0420\u0420","session-close.chiefs3":"\u0420\u0420","session-close.proceed2":". \u0412\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u043f\u0435\u0447\u0430\u0442\u044c \u043e\u0442\u0447\u0435\u0442\u043e\u0432.","box-acceptance.header":"\u041f\u0440\u0438\u0435\u043c \u043a\u043e\u0440\u043e\u0431\u043e\u043a","box-acceptance.button":"\u041f\u0440\u0438\u043d\u044f\u0442\u044c \u043a\u043e\u0440\u043e\u0431\u043a\u0443","box-acceptance.box":"\u041a\u043e\u0440\u043e\u0431\u043a\u0430","box-acceptance.accepted":"\u041f\u0440\u0438\u043d\u044f\u0442\u0430","box-acceptance.accept-date":"\u0414\u0430\u0442\u0430 \u043f\u0440\u0438\u0435\u043c\u0430","box-acceptance.employee":"\u041f\u0440\u0438\u043d\u044f\u043b","box-acceptance.acceptedCount":"\u041a\u043e\u0440\u043e\u0431\u043e\u043a \u043f\u0440\u0438\u043d\u044f\u0442\u043e","box-acceptance.notAcceptedCount":"\u041a\u043e\u0440\u043e\u0431\u043e\u043a \u043d\u0435 \u043f\u0440\u0438\u043d\u044f\u0442\u043e","box-acceptance.finish-acceptance":"\u0417\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u044c \u043f\u0440\u0438\u0435\u043c","box-acceptance.instruction1":"\u0414\u043b\u044f \u043f\u0440\u0438\u0435\u043c\u0430 \u043a\u043e\u0440\u043e\u0431\u043a\u0438 \u0432\u0440\u0443\u0447\u043d\u0443\u044e \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0428\u041a \u043a\u043e\u0440\u043e\u0431\u043a\u0438 \u0432 \u0432\u0438\u0434\u0435","box-acceptance.instruction2":"TRBX123456789 (TRBX + 9 \u0446\u0438\u0444\u0440)","box-acceptance.hasNotAccepted":"\u0415\u0441\u0442\u044c \u043d\u0435\u043f\u0440\u0438\u043d\u044f\u0442\u044b\u0435 \u043a\u043e\u0440\u043e\u0431\u043a\u0438","box-acceptance.willCreateAct":"\u0411\u0443\u0434\u0435\u0442 \u0441\u043e\u0437\u0434\u0430\u043d \u0430\u043a\u0442 \u0440\u0430\u0441\u0445\u043e\u0436\u0434\u0435\u043d\u0438\u044f","box-acceptance.finishWithAct":"\u0417\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u044c \u043f\u0440\u0438\u0435\u043c \u0438 \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u0430\u043a\u0442","scanned-doct.header":"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u0441\u043a\u0430\u043d\u043d\u043e\u0432 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u043e\u0432","scanned-doct.placeholder":"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0442\u0438\u043f \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430","scanned-doct.submit-type":"\u041d\u0435 \u0432\u044b\u0431\u0440\u0430\u043d \u0442\u0438\u043f \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430","scanned-doct.submit-docs":"\u041d\u0435 \u0432\u044b\u0431\u0440\u0430\u043d\u044b \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u044b \u0434\u043b\u044f \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438","scanned-doct.submit-complete":"\u0421\u043a\u0430\u043d\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043d\u044b","scanned-doct.download":"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c","scanned-doct.multiple":"\u041c\u043e\u0436\u043d\u043e \u0432\u044b\u0431\u0440\u0430\u0442\u044c \u0441\u0440\u0430\u0437\u0443 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0444\u0430\u0439\u043b\u043e\u0432","payment.client-not-found":"\u041a\u043b\u0438\u0435\u043d\u0442 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d","payment.something-wrong":"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a","payment.delete-confirm1":"\u0423\u0432\u0435\u0440\u0435\u043d\u044b?","payment.delete-confirm2":"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b \u0447\u0442\u043e \u043e\u043f\u043b\u0430\u0442\u0430 \u043d\u0435 \u043f\u0440\u043e\u0448\u043b\u0430?","payment.delete-confirm3":"\u0414\u043b\u044f \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0438 \u043c\u043e\u0436\u043d\u043e \u0440\u0430\u0441\u043f\u0435\u0447\u0430\u0442\u0430\u0442\u044c \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0438\u0439 \u0441\u043b\u0438\u043f.","payment.transaction-not-found":"\u0422\u0440\u0430\u043d\u0437\u0430\u043a\u0446\u0438\u044f \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u0430","payment.payed":"\u041e\u043f\u043b\u0430\u0447\u0435\u043d\u043e","payment.payed-error-status":"\u041e\u0448\u0438\u0431\u043a\u0430 \u043e\u043f\u043b\u0430\u0442\u044b. \u0421\u0442\u0430\u0442\u0443\u0441","payment.payed-error":"\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0435\u0440\u0435\u0434\u0430\u0447\u0438 \u0434\u0430\u043d\u043d\u044b\u0445 \u0438\u043b\u0438 \u0441\u0435\u0440\u0432\u0438\u0441\u0430","payment.validate-message1":"\u0421\u0443\u043c\u043c\u0430 \u043e\u043f\u043b\u0430\u0442\u044b \u0434\u043e\u043b\u0436\u043d\u0430 \u0431\u044b\u0442\u044c \u0431\u043e\u043b\u044c\u0448\u0435 \u043d\u0443\u043b\u044f","payment.validate-message2":"\u0421\u0443\u043c\u043c\u0430 \u043e\u043f\u043b\u0430\u0442\u044b \u043f\u0440\u0435\u0432\u044b\u0448\u0430\u0435\u0442 \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u044b\u0439 \u043e\u0441\u0442\u0430\u0442\u043e\u043a","payment.validate-message3":"\u0421\u0443\u043c\u043c\u0430 \u043e\u043f\u043b\u0430\u0442\u044b \u043f\u0440\u0435\u0432\u044b\u0448\u0430\u0435\u0442 \u0441\u0443\u043c\u043c\u0443 \u0437\u0430\u043a\u0430\u0437\u0430","payment.validate-message4":"\u0423\u043a\u0430\u0437\u0430\u043d\u0430 \u043d\u0435\u0432\u0435\u0440\u043d\u0430\u044f \u0441\u0443\u043c\u043c\u0430 \u043a \u043e\u043f\u043b\u0430\u0442\u0435","payment.need-payment":"\u041d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043e\u043f\u043b\u0430\u0442\u0438\u0442\u044c \u0435\u0449\u0435","payment.success-sale":"\u0423\u0441\u043f\u0435\u0448\u043d\u0430\u044f \u043f\u0440\u043e\u0434\u0430\u0436\u0430!","payment.unsuccess-sale":"\u0423\u0441\u043f\u0435\u0448\u043d\u0430\u044f \u043f\u0440\u043e\u0434\u0430\u0436\u0430! \u0424\u0438\u0441\u043a\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044f \u0437\u0430\u0432\u0435\u0440\u0448\u0438\u043b\u0430\u0441\u044c \u043e\u0448\u0438\u0431\u043a\u043e\u0439","payment.back":"\u041d\u0430\u0437\u0430\u0434","payment.payment":"\u043e\u043f\u043b\u0430\u0442\u0430","payment.returnPrepayToWallet":"\u0412\u043e\u0437\u0432\u0440\u0430\u0442 \u043f\u0440\u0435\u0434\u043e\u043f\u043b\u0430\u0442\u044b \u0437\u0430 \u043e\u0442\u043a\u0430\u0437\u044b \u043d\u0430 \u0441\u0447\u0435\u0442 \u041b\u041a \u043a\u043b\u0438\u0435\u043d\u0442\u0430","payment.totalSum":"\u0421\u0443\u043c\u043c\u0430 \u043f\u043e\u043a\u0443\u043f\u043a\u0438","payment.prepayedSum":"\u041f\u0440\u0435\u0434\u043e\u043f\u043b\u0430\u0447\u0435\u043d\u043e","payment.shkForSale":"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0432\u0435\u0449\u0435\u0439","payment.serviceSum":"\u0423\u0441\u043b\u0443\u0433\u0438 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0438","payment.toPaySum":"\u0418\u0442\u043e\u0433\u043e \u043e\u043f\u043b\u0430\u0442\u0435","payment.payments":"\u0422\u0435\u043a\u0443\u0449\u0438\u0435 \u043e\u043f\u043b\u0430\u0442\u044b","payment.hangingPayments":"\u0422\u0435\u043a\u0443\u0449\u0438\u0435 \u043e\u043f\u043b\u0430\u0442\u044b \u043f\u043e \u043a\u0430\u0440\u0442\u0435","payment.hanging-payment-alert":"\u0415\u0441\u043b\u0438 \u043e\u043f\u043b\u0430\u0442\u044b \u043d\u0435 \u0431\u044b\u043b\u043e - \u0435\u0435 \u043d\u0443\u0436\u043d\u043e \u0443\u0434\u0430\u043b\u0438\u0442\u044c!","payment.delete":"\u0423\u0434\u0430\u043b\u0438\u0442\u044c","payment.remainSum":"\u041e\u0441\u0442\u0430\u0442\u043e\u043a \u043a \u043e\u043f\u043b\u0430\u0442\u0435","payment.cashChange":"\u0421\u0434\u0430\u0447\u0430","payment.no-walletBalance":"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u043f\u043e \u0431\u0430\u043b\u0430\u043d\u0441\u0443 \u041b\u041a \u043d\u0435\u0434\u043e\u0441\u0442\u0443\u043f\u043d\u0430","payment.walletBalance":"\u0414\u043e\u0441\u0442\u0443\u043f\u043d\u043e \u0434\u043b\u044f \u043e\u043f\u043b\u0430\u0442\u044b","payment.cancel":"\u041e\u0442\u043c\u0435\u043d\u0438\u0442\u044c","payment.pay":"\u041e\u043f\u043b\u0430\u0442\u0438\u0442\u044c","payment.use-terminal":"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0438\u043d\u0442\u0435\u0433\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0439 \u0442\u0435\u0440\u043c\u0438\u043d\u0430\u043b","payment.createSale":"\u0412\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u044c \u043f\u0440\u043e\u0434\u0430\u0436\u0443","payment.printLastSlip":"\u041f\u043e\u0441\u043b\u0435\u0434\u043d\u0438\u0439 \u0441\u043b\u0438\u043f","payment.pendingTerminalTransaction":"\u0414\u043e\u0436\u0434\u0438\u0442\u0435\u0441\u044c \u043e\u0442\u0432\u0435\u0442\u0430 \u043e\u0442 \u0442\u0435\u0440\u043c\u0438\u043d\u0430\u043b\u0430","payment.no-term-found":"\u0418\u043d\u0442\u0435\u0433\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0439 \u0442\u0435\u0440\u043c\u0438\u043d\u0430\u043b \u043d\u0435 \u043e\u0431\u043d\u0430\u0440\u0443\u0436\u0435\u043d. \u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 \u0422\u0411\u041e","payment.availeble-balance":"\u0434\u043e\u0441\u0442\u0443\u043f\u043d\u043e","payment.check-transaction-status":"\u041f\u0440\u043e\u0432\u0435\u0440\u0438\u0442\u044c \u0441\u0442\u0430\u0442\u0443\u0441","payment.payment-error":"\u041e\u043f\u043b\u0430\u0442\u0430 \u043d\u0435 \u043f\u0440\u043e\u0438\u0437\u0432\u0435\u0434\u0435\u043d\u0430","payment.retry-payment":"\u0417\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u044c \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0443 \u043f\u043e\u0432\u0442\u043e\u0440\u043d\u043e","payment.success-payment":"\u041e\u043f\u043b\u0430\u0442\u0430 \u043f\u0440\u043e\u0448\u043b\u0430","payment.check-payment-status":"\u041f\u0440\u043e\u0432\u0435\u0440\u0438\u0442\u044c \u0441\u0442\u0430\u0442\u0443\u0441 \u043e\u043f\u043b\u0430\u0442\u044b","payment.tell-customer":"\u0421\u043e\u043e\u0431\u0449\u0438\u0442\u0435 \u043a\u043b\u0438\u0435\u043d\u0442\u0443","payment.online-card-text":"\u0412\u0430\u043c \u0441\u0435\u0439\u0447\u0430\u0441 \u043f\u0440\u0438\u0434\u0435\u0442 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435 \u0432 \u043b\u0438\u0447\u043d\u044b\u0439 \u043a\u0430\u0431\u0438\u043d\u0435\u0442. \u0414\u043b\u044f \u043e\u043f\u043b\u0430\u0442\u044b \u043f\u0435\u0440\u0435\u0439\u0434\u0438\u0442\u0435 \u043f\u043e \u0441\u0441\u044b\u043b\u043a\u0435.","payment.give-qr-code":"\u041a\u043b\u0438\u0435\u043d\u0442 \u043f\u043e\u043b\u0443\u0447\u0438\u0442 \u0443\u0432\u0435\u0434\u043e\u043c\u043b\u0435\u043d\u0438\u0435 \u0441\u043e \u0441\u0441\u044b\u043b\u043a\u043e\u0439 \u0434\u043b\u044f \u043e\u043f\u043b\u0430\u0442\u044b \u0437\u0430\u043a\u0430\u0437\u0430.","payment.abort-payment":"\u041f\u0440\u0435\u0440\u0432\u0430\u0442\u044c \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u044e \u043e\u043f\u043b\u0430\u0442\u044b","payment.question-to-manager":"\u041a\u043b\u0438\u0435\u043d\u0442 \u043e\u043f\u043b\u0430\u0442\u0438\u043b?","payment.not-link":"\u0415\u0441\u043b\u0438 \u043a\u043b\u0438\u0435\u043d\u0442\u0443 \u043d\u0435 \u043f\u0440\u0438\u0448\u043b\u0430 \u0441\u0441\u044b\u043b\u043a\u0430","payment.status-checking":"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0441\u0442\u0430\u0442\u0443\u0441\u0430 \u043e\u043f\u043b\u0430\u0442\u044b","payment.no-more-than-min":"\u042d\u0442\u043e \u0437\u0430\u0439\u043c\u0435\u0442 \u043d\u0435 \u0431\u043e\u043b\u0435\u0435 \u043c\u0438\u043d\u0443\u0442\u044b","payment.scan-qr":"\u041e\u0442\u0441\u043a\u0430\u043d\u0438\u0440\u0443\u0439\u0442\u0435 QR \u043a\u043e\u0434 \u043d\u0430 \u0441\u0432\u043e\u0435\u043c \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0435 \u0438 \u043f\u0440\u043e\u0432\u0435\u0440\u044c\u0442\u0435 \u0441\u0442\u0430\u0442\u0443\u0441 \u043e\u043f\u043b\u0430\u0442\u044b.","payment.approve-payment":"\u0415\u0441\u043b\u0438 \u0441\u0442\u0430\u0442\u0443\u0441 \u043e\u043f\u043b\u0430\u0442\u044b \u043f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043d, \u0442\u043e \u043d\u0430\u0436\u043c\u0438\u0442\u0435 \u043a\u043d\u043e\u043f\u043a\u0443.","payment.check-by-phone":"\u041f\u0440\u0438 \u043e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0438\u0438 \u0438\u043d\u0442\u0435\u0440\u043d\u0435\u0442\u0430 \u043f\u0440\u043e\u0432\u0435\u0440\u044c\u0442\u0435 \u043e\u043f\u043b\u0430\u0442\u0443 \u0447\u0435\u0440\u0435\u0437 \u043b\u0438\u0447\u043d\u044b\u0439 \u0442\u0435\u043b\u0435\u0444\u043e\u043d","payment.recheck":"\u041f\u043e\u0432\u0442\u043e\u0440\u043d\u0430\u044f \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u043e\u043f\u043b\u0430\u0442\u044b \u0437\u0430\u043a\u0430\u0437\u0430","payment.available-banks":"\u0421\u043f\u0438\u0441\u043e\u043a \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u044b\u0445 \u0431\u0430\u043d\u043a\u043e\u0432","payment.transaction-num-th":"\u0422\u0440\u0430\u043d\u0437\u0430\u043a\u0446\u0438\u044f","payment.transaction-status-th":"\u0421\u0442\u0430\u0442\u0443\u0441 \u0442\u0440\u0430\u043d\u0437\u0430\u043a\u0446\u0438\u0438","clients-on-fitting.header":"\u041a\u043b\u0438\u0435\u043d\u0442\u044b \u043d\u0430 \u043f\u0440\u0438\u043c\u0435\u0440\u043a\u0435","clients-on-fitting.placeholder":"\u041f\u043e\u0438\u0441\u043a \u043a\u043b\u0438\u0435\u043d\u0442\u0430","clients-search.header":"\u041f\u043e\u0438\u0441\u043a \u043a\u043b\u0438\u0435\u043d\u0442\u043e\u0432","clients-search.search":"\u041d\u0430\u0439\u0442\u0438","clients-search.search-hint":"\u0418\u0449\u0435\u043c \u043f\u043e \u043f\u0435\u0440\u0432\u044b\u043c \u0431\u0443\u043a\u0432\u0430\u043c \u0438\u043c\u0435\u043d\u0438, \u0428\u041a, \u0441\u0442\u0438\u043a\u0435\u0440\u0443, \u0431\u0430\u0440\u043a\u043e\u0434\u0443, \u043d\u043e\u043c\u0435\u0440\u0443 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430/\u043f\u043e \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0438\u043c 4 \u0446\u0438\u0444\u0440\u0430\u043c \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430","clients-search.no-results":"\u041d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e","clients-search.no-results2":"\u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0434\u0440\u0443\u0433\u0438\u0435 \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u044b","clients-search.cheater":"\u0411\u0443\u0434\u044c\u0442\u0435 \u043e\u0441\u0442\u043e\u0440\u043e\u0436\u043d\u044b","clients-search.new":"\u041d\u043e\u0432\u044b\u0439 \u043f\u043e\u043a\u0443\u043f\u0430\u0442\u0435\u043b\u044c","clients-search.phone":"\u0422\u0435\u043b\u0435\u0444\u043e\u043d","clients-items.header":"\u0414\u0435\u0442\u0430\u043b\u0438 \u0437\u0430\u043a\u0430\u0437\u0430","clients-items.print":"\u041f\u0435\u0447\u0430\u0442\u044c \u043d\u0430 \u043b\u0435\u043d\u0442\u0435","client-action.payment-error":"\u041d\u0435\u0447\u0435\u0433\u043e \u043f\u0440\u043e\u0434\u0430\u0432\u0430\u0442\u044c","client-action.create-sovest":"\u041e\u0444\u043e\u0440\u043c\u0438\u0442\u044c \u043a\u0430\u0440\u0442\u0443 \\"\u0421\u043e\u0432\u0435\u0441\u0442\u044c\\"","client-action.code-error":"\u041d\u0435\u0432\u0435\u0440\u043d\u044b\u0439 \u043a\u043e\u0434 \u043f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043d\u0438\u044f","client-action.understaffing-error":"\u0412 \u043f\u0440\u0438\u0447\u0438\u043d\u0435 \'\u041d\u0435\u0434\u043e\u043a\u043e\u043c\u043f\u043b\u0435\u043a\u0442\' \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u0434\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u0434\u043b\u0438\u043d\u043d\u0435\u0435 10 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432","client-action.header-error":"\u041a\u043b\u0438\u0435\u043d\u0442 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d","client-action.segment1":"\u0412\u043e\u0437\u0432\u0440\u0430\u0442","client-action.segment2":"\u0412\u043e\u0437\u0432\u0440\u0430\u0442 \u0431\u0440\u0430\u043a\u0430","client-action.segment3":"\u0417\u0430\u044f\u0432\u043a\u0438","client-action.segment4":"\u0421\u043e\u0432\u0435\u0441\u0442\u044c","client-action.segment5":"\u0414\u043e\u043f. \u0442\u0440\u0430\u043d\u0437\u0430\u043a\u0446\u0438\u0438","client-action.segment6":"\u0412\u043d\u0435\u0441\u0435\u043d\u0438\u0435 \u0414\u0421 \u043d\u0430 \u041b\u041a","client-action.segment6-tooltip":"\u0417\u0430\u0441\u0443\u043d\u0443\u0442\u044c \u0432 \u043f\u0440\u043e\u0434\u0430\u0436\u0443","client-action.shkForReturn1":"\u0412\u043e\u0437\u0432\u0440\u0430\u0442","client-action.sumForReturn":"\u0421\u0443\u043c\u043c\u0430 \u043a \u0432\u043e\u0437\u0432\u0440\u0430\u0442\u0443","client-action.shkForReturn2":"\u0442\u043e\u0432\u0430\u0440\u043e\u0432","client-action.shkForSale":"\u041f\u0440\u043e\u0434\u0430\u0436\u0430","client-action.shkLost":"\u0423\u0442\u0435\u0440\u044f\u043d\u043e","client-action.totalSum":"\u0418\u0442\u043e\u0433\u043e","client-action.serviceSum":"\u0423\u0441\u043b\u0443\u0433\u0438 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0438","client-action.returnServiceSum":"\u041f\u043b\u0430\u0442\u043d\u044b\u0439 \u0432\u043e\u0437\u0432\u0440\u0430\u0442","client-action.prepayedSum":"\u041f\u0440\u0435\u0434\u043e\u043f\u043b\u0430\u0442\u0430","client-action.bonusSum":"\u041e\u043f\u043b\u0430\u0447\u0435\u043d\u043e \u0431\u043e\u043d\u0443\u0441\u0430\u043c\u0438","client-action.toPaySum":"\u041a \u043e\u043f\u043b\u0430\u0442\u0435","client-action.goToPayment":"\u041f\u0435\u0440\u0435\u0439\u0442\u0438 \u043a \u043e\u043f\u043b\u0430\u0442\u0435","client-action.scan-return":"\u0421\u043a\u0430\u043d\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0432\u043e\u0437\u0432\u0440\u0430\u0442","client-action.noReturn":"\u0412\u0435\u0449\u044c \u043d\u0435 \u043f\u043e\u0434\u043b\u0435\u0436\u0438\u0442 \u0432\u043e\u0437\u0432\u0440\u0430\u0442\u0443","client-action.sovest-card":"\u041a\u0430\u0440\u0442\u0430 \\"\u0421\u043e\u0432\u0435\u0441\u0442\u044c\\"","client-action.needAttention":"\u0412\u0435\u0449\u044c \u0434\u043e\u0440\u043e\u0433\u0430\u044f","client-action.confirmation-code":"\u041a\u043e\u0434 \u043f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043d\u0438\u044f","client-action.confirmation-code-text":"\u041a\u043b\u0438\u0435\u043d\u0442 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0437\u0432\u0430\u0442\u044c \u043a\u043e\u0434 \u043f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043d\u0438\u044f, \u0447\u0442\u043e\u0431\u044b \u043d\u0435 \u043f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0442\u044c \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u044b \u043e \u043f\u0440\u0435\u0434\u043e\u043f\u043b\u0430\u0442\u0435","client-action.enter-code":"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u0434 \u043f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043d\u0438\u044f","client-action.page-already-open":"\u041d\u0435\u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e \u043e\u0442\u043a\u0440\u044b\u0442\u044c \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443 {{pageType}}, \u0442.\u043a. \u043e\u043d\u0430 \u0443\u0436\u0435 \u043e\u0442\u043a\u0440\u044b\u0442\u0430 \u0432 \u0432\u0430\u0448\u0435\u043c \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0435. \u0417\u0430\u043a\u0440\u043e\u0439\u0442\u0435 \u0432\u043a\u043b\u0430\u0434\u043a\u0443 \u0441 \u044d\u0442\u043e\u0439 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0435\u0439, \u0447\u0442\u043e\u0431\u044b \u043f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u044c","isOpenedClientCard":"\u0441 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0435\u0439 \u043e \u043a\u043b\u0438\u0435\u043d\u0442\u0435","isOpenedPayments":"\u0441 \u043f\u043b\u0430\u0442\u0435\u0436\u0430\u043c\u0438 \u043a\u043b\u0438\u0435\u043d\u0442\u0430","local-print.recipientName":"\u0420\u043e\u0437\u043d\u0438\u0447\u043d\u044b\u0439 \u043f\u043e\u043a\u0443\u043f\u0430\u0442\u0435\u043b\u044c","local-print.reportName1":"\u041e\u0442\u0447\u0451\u0442 \u043a\u0430\u0441\u0441\u0438\u0440\u0430","local-print.reportName2":"\u0412\u043a\u043b\u0430\u0434\u043d\u043e\u0439 \u043b\u0438\u0441\u0442","product-description.descr1":"\u0422\u043e\u0432\u0430\u0440 \u043d\u0430 \u0441\u0430\u0439\u0442\u0435","product-description.descr2":"\u041d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435","product-description.descr3":"\u0411\u0440\u0435\u043d\u0434","product-description.descr4":"\u0410\u0440\u0442\u0438\u043a\u0443\u043b","product-description.descr5":"\u0420\u0430\u0437\u043c\u0435\u0440","product-description.descr6":"\u041a\u043e\u043c\u043f\u043b\u0435\u043a\u0442\u0430\u0446\u0438\u044f","product-description.descr7":"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435","login.login":"\u041b\u043e\u0433\u0438\u043d","login.phone":"\u0422\u0435\u043b\u0435\u0444\u043e\u043d","login.login.required":"\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0448 \u043b\u043e\u0433\u0438\u043d","login.login.space":"\u041b\u043e\u0433\u0438\u043d \u043d\u0435 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432!","login.password.required":"\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0448 \u043f\u0430\u0440\u043e\u043b\u044c","login.password":"\u041f\u0430\u0440\u043e\u043b\u044c","login.sign":"\u0412\u043e\u0439\u0442\u0438","login.fail":"\u041d\u0435\u0432\u0435\u0440\u043d\u044b\u0439 \u043b\u043e\u0433\u0438\u043d \u0438\u043b\u0438 \u043f\u0430\u0440\u043e\u043b\u044c!","login.forget-password":"\u0417\u0430\u0431\u044b\u043b\u0438 \u043f\u0430\u0440\u043e\u043b\u044c?","login.change-password":"\u0421\u043c\u0435\u043d\u0438\u0442\u044c \u043f\u0430\u0440\u043e\u043b\u044c","login.get-phone-password":"\u041f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u043f\u0430\u0440\u043e\u043b\u044c \u043f\u043e SMS","header.notofficeSet":"\u041e\u0444\u0438\u0441 \u043d\u0435\u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d. \u0420\u0430\u0431\u043e\u0442\u0430 \u043d\u0435\u0432\u043e\u0437\u043c\u043e\u0436\u043d\u0430. \u041e\u0431\u043d\u043e\u0432\u0438\u0442\u0435 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443","header.exit":"\u0412\u044b\u0439\u0442\u0438","header.non-active-office":"\u041e\u0444\u0438\u0441 \u043d\u0435 \u0430\u043a\u0442\u0438\u0432\u0435\u043d","header.need-deactivate":"\u0421\u0438\u043d\u0445\u0440\u043e\u043d\u0438\u0437\u0430\u0446\u0438\u044f \u043d\u0435\u0432\u043e\u0437\u043c\u043e\u0436\u043d\u0430. \u041d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u044c \u0434\u0435\u0430\u043a\u0442\u0438\u0432\u0430\u0446\u0438\u044e. \\n\u0414\u043b\u044f \u044d\u0442\u043e\u0433\u043e \u043f\u0435\u0440\u0435\u0439\u0434\u0438\u0442\u0435 \u0432 \\"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438\\"","header.not-my-office":"\u042d\u0442\u043e \u043d\u0435 \u043c\u043e\u0439 \u043e\u0444\u0438\u0441","header.office-deactivation":"\u041b\u043e\u043a\u0430\u043b\u044c\u043d\u0430\u044f \u0431\u0430\u0437\u0430 \u0434\u0430\u043d\u043d\u044b\u0445 \u0431\u0443\u0434\u0435\u0442 \u0443\u043d\u0438\u0447\u0442\u043e\u0436\u0435\u043d\u0430, \u0434\u043b\u044f \u043f\u0440\u043e\u0434\u043e\u043b\u0436\u0435\u043d\u0438\u044f \u0440\u0430\u0431\u043e\u0442\u044b \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0431\u0443\u0434\u0435\u0442 \u043f\u043e\u0432\u0442\u043e\u0440\u043d\u043e \u0430\u043a\u0442\u0438\u0432\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043e\u0444\u0438\u0441.","footer.online":"\u041e\u043d\u043b\u0430\u0439\u043d","footer.offline":"\u041e\u0444\u0444\u043b\u0430\u0439\u043d","footer.version":"\u0412\u0435\u0440\u0441\u0438\u044f","footer.update":"\u041e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0435 \u0447\u0435\u0440\u0435\u0437","footer.minute":"\u043c\u0438\u043d","grouped-goods-table.reason1":"\u041d\u0435 \u043f\u043e\u0434\u043e\u0448\u0435\u043b \u0442\u043e\u0432\u0430\u0440","grouped-goods-table.reason2":"\u041e\u0442\u043a\u0430\u0437","grouped-goods-table.reason3":"\u041d\u0435\u0434\u043e\u043a\u043e\u043c\u043f\u043b\u0435\u043a\u0442","grouped-goods-table.reason4":"\u041f\u043e\u0434\u043e\u0437\u0440\u0435\u043d\u0438\u0435 \u043d\u0430 \u041d\u0412","grouped-goods-table.reason5":"\u041f\u043e\u0434\u043e\u0437\u0440\u0435\u043d\u0438\u0435 \u043d\u0430 \u0431\u0440\u0430\u043a/\u043f\u043e\u0434\u043c\u0435\u043d\u0443","grouped-goods-table.isCourier":"\u041a\u0443\u0440\u044c\u0435\u0440\u0441\u043a\u0430\u044f \u043f\u0440\u043e\u0434\u0430\u0436\u0430","grouped-goods-table.sale":"\u041f\u0440\u043e\u0434\u0430\u0436\u0430","grouped-goods-table.refuseServicePayment":"\u041e\u0442\u043a\u0430\u0437 \u043e\u0442 \u0443\u0441\u043b\u0443\u0433 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0438","grouped-goods-table.refuseReturnServicePayment":"\u041e\u0442\u043a\u0430\u0437 \u043e\u0442 \u0443\u0441\u043b\u0443\u0433 \u043f\u043b\u0430\u0442\u043d\u043e\u0433\u043e \u0432\u043e\u0437\u0432\u0440\u0430\u0442\u0430","grouped-goods-table.goods":"\u0412\u0435\u0449\u0435\u0439","grouped-goods-table.shksOnPlace1":"\u041d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435","grouped-goods-table.shksOnPlace2":"\u0420\u0430\u0437\u043c\u0435\u0440","grouped-goods-table.shksOnPlace3":"\u0426\u0435\u043d\u0430","grouped-goods-table.shksOnPlace4":"\u0428\u041a/\u0421\u0442\u0438\u043a\u0435\u0440","grouped-goods-table.shksOnPlace5":"\u0411\u0430\u0440\u043a\u043e\u0434","grouped-goods-table.shksOnPlace6":"\u0412\u043e\u0437\u0432\u0440\u0430\u0442","grouped-goods-table.shksOnPlace7":"\u041f\u043e\u0442\u0435\u0440\u044f\u043b","grouped-goods-table.description":"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435","grouped-goods.items1":"\u0428\u041a/\u0421\u0442\u0438\u043a\u0435\u0440","grouped-goods.items2":"\u0411\u0430\u0440\u043a\u043e\u0434","grouped-goods.items3":"\u041d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435","grouped-goods.items4":"\u0420\u0430\u0437\u043c\u0435\u0440","grouped-goods.items5":"\u0410\u0440\u0442\u0438\u043a\u0443\u043b","grouped-goods.items6":"\u041c\u0425","grouped-goods.items7":"\u041a\u043b\u0438\u0435\u043d\u0442","grouped-goods.items8":"\u0421\u0442\u0430\u0442\u0443\u0441","fp-mark.NEWB_TXT":"\u041f\u0412\u0417 \u043e\u0431\u043e\u0440\u0443\u0434\u043e\u0432\u0430\u043d \u0441\u043a\u0430\u043d\u0435\u0440\u043e\u043c \u043e\u0442\u043f\u0435\u0447\u0430\u0442\u043a\u043e\u0432 \u043f\u0430\u043b\u044c\u0446\u0430. \\\\n\u0412\u041d\u0418\u041c\u0410\u041d\u0418\u0415! \u041f\u0440\u0438\u0448\u0435\u043b-\u043e\u0442\u043c\u0435\u0442\u0438\u043b\u0441\u044f, \u0443\u0448\u0435\u043b-\u043e\u0442\u043c\u0435\u0442\u0438\u043b\u0441\u044f","fp-mark.ADEV_TXT":"\u0414\u043e\u0436\u0434\u0438\u0442\u0435\u0441\u044c \u043c\u0438\u0433\u0430\u043d\u0438\u0435 \u0437\u0435\u043b\u0435\u043d\u044b\u043c\\\\n\u0438 \u043f\u0440\u0438\u043b\u043e\u0436\u0438\u0442\u0435 \u043f\u0430\u043b\u0435\u0446 \u043a \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0443","fp-mark.DLOST_TXT":"\u0423\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u043e \u043d\u0430\u0445\u043e\u0434\u0438\u0442\u0441\u044f \u0432\u043d\u0435 \u0441\u0435\u0442\u0438\\n\u041f\u043e\u0434\u043a\u043b\u044e\u0447\u0438\u0442\u0435 \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u043e \u0437\u0430\u043d\u043e\u0432\u043e","fp-mark.TOUT_TXT":"\u0423\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u043e \u043d\u0435 \u0434\u043e\u0436\u0434\u0430\u043b\u043e\u0441\u044c \u043f\u0430\u043b\u044c\u0446\u0430\\n\u041f\u043e\u0432\u043e\u0442\u0440\u0438\u0442\u0435 \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u044e \u0437\u0430\u043d\u043e\u0432\u043e","fp-mark.FNF_TXT":"\u0412\u0430\u0448 \u043e\u0442\u043f\u0435\u0447\u0430\u0442\u043e\u043a \u043d\u0435 \u0440\u0430\u0441\u043f\u043e\u0437\u043d\u0430\u043d\\n\u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u0435 \u043f\u043e\u043f\u044b\u0442\u043a\u0443","fp-mark.ABS_TXT":"\u0423\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u043e \u043d\u0435 \u0447\u0438\u0441\u043b\u0438\u0442\u0441\u044f \u0437\u0430 \u0412\u0430\u0448\u0438\u043c \u041f\u0412\u0417\\n \u0441\u043e\u043e\u0431\u0449\u0438\u0442\u0435 \u043e\u0431 \u044d\u0442\u043e\u043c \u0440\u0443\u043a\u043e\u0432\u043e\u0434\u0441\u0442\u0432\u0443","fp-mark.btnHelper1":"\u041e\u0448\u0438\u0431\u043a\u0430 \u0434\u0430\u043d\u043d\u044b\u0445","fp-mark.btnHelper2":"\u0421\u043e\u043e\u0431\u0449\u0438\u0442\u0435 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a\u0430\u043c \u043e \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u0435","payment-names.fact":"\u041f\u043e \u0444\u0430\u043a\u0442\u0443","payment-names.cash":"\u041d\u0430\u043b","payment-names.card":"\u041a\u0430\u0440\u0442\u043e\u0439","payment-names.avans":"\u0410\u0432\u0430\u043d\u0441","payment-names.credit":"\u041a\u0440\u0435\u0434\u0438\u0442","payment-names.podotchet":"\u041f\u043e\u0434\u043e\u0442\u0447\u0435\u0442","payment-names.personal":"\u041b\u0438\u0447\u043d\u044b\u0439 \u0441\u0447\u0435\u0442","payment-names.installment":"\u0420\u0430\u0441\u0441\u0440\u043e\u0447\u043a\u0430","payment-names.microCredit":"\u041c\u0438\u043a\u0440\u043e\u043a\u0440\u0435\u0434\u0438\u0442","payment-names.propertyNeeds":"\u0425\u043e\u0437. \u043d\u0443\u0436\u0434\u044b","payment-names.blago":"\u0411\u043b\u0430\u0433\u043e\u0442\u0432\u043e\u0440\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c","payment-names.qwpay":"\u0421\u0411\u041f","payment-names.qwpay-hint":"\u0421\u0438\u0441\u0442\u0435\u043c\u0430 \u0431\u044b\u0441\u0442\u0440\u044b\u0445 \u043f\u043b\u0430\u0442\u0435\u0436\u0435\u0439","payment-names.kombo":"\u041a\u043e\u043c\u0431\u043e-\u043e\u043f\u043b\u0430\u0442\u0430 \u043d\u0430 \u0441\u0430\u0439\u0442\u0435","payment-names.online-card":"\u041e\u043d\u043b\u0430\u0439\u043d \u043e\u043f\u043b\u0430\u0442\u0430 \u043a\u0430\u0440\u0442\u043e\u0439","payment-names.payment-account":"\u041d\u0430 \u0441\u0447\u0435\u0442 \u0432 \u0431\u0430\u043d\u043a\u0435","payment-names.empinst":"\u0420\u0430\u0441\u0441\u0440\u043e\u0447\u043a\u0430 \u0441\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u043a\u0443","payment-names.wbpay":"\u041e\u043f\u043b\u0430\u0442\u0430 \u043f\u0440\u0438\u0432\u044f\u0437\u0430\u043d\u043d\u043e\u0439 \u043a\u0430\u0440\u0442\u043e\u0439","storage.header":"\u041f\u0435\u0440\u0435\u043c\u0435\u0449\u0435\u043d\u0438\u0435 \u0432\u0435\u0449\u0435\u0439","storage.scan":"\u0421\u043a\u0430\u043d\u0438\u0440\u043e\u0432\u0430\u0442\u044c","storage.scan-place":"\u041f\u0440\u043e\u0441\u043a\u0430\u043d\u0438\u0440\u0443\u0439\u0442\u0435 \u0428\u041a \u043f\u043e\u043b\u043a\u0438","storage.place-hint":"\u041e\u0442\u0441\u043a\u0430\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0435 \u044f\u0447\u0435\u0439\u043a\u0438 \u0431\u0443\u0434\u0443\u0442 \u043f\u0435\u0440\u0435\u043c\u0435\u0449\u0435\u043d\u044b \u043d\u0430 \u043f\u043e\u043b\u043a\u0443","storage.move-items":"\u0412\u0435\u0449\u0438 \u043a\u043b\u0438\u0435\u043d\u0442\u0430 {{clientName}} \u043f\u0435\u0440\u0435\u043c\u0435\u0449\u0435\u043d\u044b \u043d\u0430 \u043f\u043e\u043b\u043a\u0443 {{placeName}}","storage.currentPlace":"\u0422\u0435\u043a\u0443\u0449\u0430\u044f \u043f\u043e\u043b\u043a\u0430","storage.currentCell":"\u0422\u0435\u043a\u0443\u0449\u0430\u044f \u044f\u0447\u0435\u0439\u043a\u0430","storage.hint":"\u0414\u043b\u044f \u043f\u0435\u0440\u0435\u043c\u0435\u0449\u0435\u043d\u0438\u044f \u0432\u0435\u0449\u0435\u0439 \u0441 \u0432\u043e\u043b\u043d\u043e\u0440\u0435\u0437\u0430/\u043f\u043e\u043b\u043a\u0438 \u043d\u0430 \u043f\u043e\u043b\u043a\u0443:","storage.hint1":"\u0421\u043a\u0430\u043d\u0438\u0440\u0443\u0435\u043c \u0428\u041a \u043f\u043e\u043b\u043a\u0438","storage.hint2":"\u0421\u043a\u0430\u043d\u0438\u0440\u0443\u0435\u043c \u0428\u041a \u043d\u0430\u043a\u043b\u0430\u0434\u043d\u043e\u0439 (\u0440\u0430\u0441\u043f\u0435\u0447\u0430\u0442\u0430\u043d\u043d\u043e\u0439 \u0432 \u043e\u0444\u0444\u043b\u0430\u0439\u043d\u0435)","storage.hint3":"\u041a\u043b\u0430\u0434\u0435\u043c \u0432\u0435\u0449\u0438 \u043d\u0430 \u043f\u043e\u043b\u043a\u0443","storage.wb-hint":"\u0414\u043b\u044f \u0448\u0442\u0443\u0447\u043d\u043e\u0433\u043e \u043f\u0435\u0440\u0435\u043c\u0435\u0449\u0435\u043d\u0438\u044f \u0432\u0435\u0449\u0435\u0439 \u0441 \u044f\u0447\u0435\u0439\u043a\u0438 \u043d\u0430 \u044f\u0447\u0435\u0439\u043a\u0443 (\u043f\u0435\u0440\u0435\u043f\u0443\u0442\u0430\u043d\u043d\u044b\u0439 \u0432\u043e\u043b\u043d\u043e\u0440\u0435\u0437):","storage.wb-hint1":"\u0421\u043a\u0430\u043d\u0438\u0440\u0443\u0435\u043c \u0428\u041a \u044f\u0447\u0435\u0439\u043a\u0438 \u0432\u043e\u043b\u043d\u043e\u0440\u0435\u0437\u0430 (\u0438\u043b\u0438 \u0432\u0432\u043e\u0434\u0438\u043c \u0440\u0443\u043a\u0430\u043c\u0438 \u0432 \u0444\u043e\u0440\u043c\u0430\u0442\u0435 WVBR123 \u0433\u0434\u0435 123 - \u043d\u043e\u043c\u0435\u0440 \u044f\u0447\u0435\u0439\u043a\u0438)","storage.wb-hint2":"\u0421\u043a\u0430\u043d\u0438\u0440\u0443\u0435\u043c \u0428\u041a (\u043f\u0440\u0435\u0434\u043f\u043e\u0447\u0442\u0438\u0442\u0435\u043b\u044c\u043d\u043e) \u0438\u043b\u0438 \u0431\u0430\u0440\u043a\u043e\u0434 \u0432\u0435\u0449\u0438, \u043a\u043e\u0442\u043e\u0440\u0443\u044e \u043d\u0443\u0436\u043d\u043e \u043f\u043e\u043b\u043e\u0436\u0438\u0442\u044c \u0432 \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u0443\u044e \u044f\u0447\u0435\u0439\u043a\u0443","storage.successMove":"\u0412\u0435\u0449\u0438 \u043f\u0435\u0440\u0435\u043c\u0435\u0449\u0435\u043d\u044b \u043d\u0430 \u043f\u043e\u043b\u043a\u0443","storage.movedToWbCell":"\u0412\u0435\u0449\u044c \u043f\u0435\u0440\u0435\u043c\u0435\u0449\u0435\u043d\u0430 \u0432 \u044f\u0447\u0435\u0439\u043a\u0443","doc-shk.header":"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0428\u041a \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430","doc-shk.recipient":"\u041f\u043e\u043b\u0443\u0447\u0430\u0442\u0435\u043b\u044c","doc-shk.employee-notice":"\u0423\u0432\u0435\u0434\u043e\u043c\u0438\u0442\u044c \u0441\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u043a\u0430","doc-shk.not-found":"\u041d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e","doc-shk.comment":"\u041a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439","doc-shk.comment-length":"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432","doc-shk.create":"\u0421\u043e\u0437\u0434\u0430\u0442\u044c","warehouse.header":"\u0412\u0435\u0449\u0438 \u0432 \u043e\u0444\u0438\u0441\u0435","warehouse.tab-return":"\u0412\u043e\u0437\u0432\u0440\u0430\u0442 \u043d\u0430 \u0441\u043a\u043b\u0430\u0434","warehouse.tab-search":"\u041f\u043e\u0438\u0441\u043a \u0432\u0435\u0449\u0435\u0439","warehouse.tab-in-boxes":"\u041f\u0440\u0438\u0445\u043e\u0434\u043d\u044b\u0435 \u043a\u043e\u0440\u043e\u0431\u043a\u0438","warehouse.tab-storage-locations":"\u041c\u0435\u0441\u0442\u0430 \u0445\u0440\u0430\u043d\u0435\u043d\u0438\u044f","warehouse.search":"\u041f\u043e\u0438\u0441\u043a","warehouse.tab-global-search":"\u0413\u043b\u043e\u0431\u0430\u043b\u044c\u043d\u044b\u0439 \u043f\u043e\u0438\u0441\u043a","warehouse.global-search-hint":"\u0418\u0449\u0435\u043c \u043f\u043e \u0448\u043a/\u0441\u0442\u0438\u043a\u0435\u0440\u0443/\u0441\u0435\u0439\u0444\u043f\u0430\u043a\u0435\u0442\u0443","warehouse.search-hint":"\u0418\u0449\u0435\u043c \u043f\u043e \u0448\u043a/\u0431\u0430\u0440\u043a\u043e\u0434\u0443/\u0438\u043c\u0435\u043d\u0438/\u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0443","warehouse.no-search":"\u0423\u043a\u0430\u0436\u0438\u0442\u0435 \u0441\u0442\u0440\u043e\u043a\u0443 \u043f\u043e\u0438\u0441\u043a\u0430","warehouse.create-box-act":"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u0430\u043a\u0442 \u0440\u0430\u0441\u0445\u043e\u0436\u0434\u0435\u043d\u0438\u0439","warehouse.act-created":"\u0410\u043a\u0442 \u0440\u0430\u0441\u0445\u043e\u0436\u0434\u0435\u043d\u0438\u044f \u0441\u043e\u0437\u0434\u0430\u043d","warehouse.tb-column1":"\u041a\u043e\u0440\u043e\u0431\u043a\u0430","warehouse.tb-column2":"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0428\u041a","warehouse.tb-column3":"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043d\u0435\u043f\u0440\u0438\u043d\u044f\u0442\u044b\u0445 \u0428\u041a","warehouse.tb-detail-header":"\u0421\u043e\u0434\u0435\u0440\u0436\u0430\u043d\u0438\u0435 \u043a\u043e\u0440\u043e\u0431\u043a\u0438","warehouse.tb-detail-shk":"\u0428\u041a","warehouse.tb-detail-sticker":"\u0421\u0442\u0438\u043a\u0435\u0440","warehouse.tb-detail-barcode":"\u0411\u0430\u0440\u043a\u043e\u0434","warehouse.tb-detail-art":"\u0410\u0440\u0442\u0438\u043a\u0443\u043b","warehouse.tb-detail-name":"\u041d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435","warehouse.tb-detail-content":"\u0421\u043e\u0441\u0442\u0430\u0432","warehouse.tb-detail-size":"\u0420\u0430\u0437\u043c\u0435\u0440","warehouse.tb-detail-price":"\u0426\u0435\u043d\u0430","warehouse.instruction1":"\u0412\u0441\u0435 \u043e\u0442\u043a\u0430\u0437\u043d\u044b\u0435/\u0432\u043e\u0437\u0432\u0440\u0430\u0442\u043d\u044b\u0435 \u0432\u0435\u0449\u0438 \u0434\u043e\u043b\u0436\u043d\u044b \u0443\u0435\u0445\u0430\u0442\u044c \u043d\u0430 \u0441\u043a\u043b\u0430\u0434","warehouse.instruction2":"\u0412\u0435\u0449\u0438 \u0441 \u043e\u0442\u0440\u0438\u0446\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u043c \u0428\u041a - \u044d\u0442\u043e \u0438\u0437\u043b\u0438\u0448\u0435\u043a \u0438\u043b\u0438 \u043e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u043f\u0440\u0438\u0435\u043c\u0435 \u043d\u0430 \u0432\u043e\u043b\u043d\u043e\u0440\u0435\u0437. \u0412\u0430\u0440\u0438\u0430\u043d\u0442\u044b \u0440\u0435\u0448\u0435\u043d\u0438\u044f:","warehouse.instruction3":"\u0415\u0441\u043b\u0438 \u044d\u0442\u043e \u0438\u0437\u043b\u0438\u0448\u0435\u043a: \u043a\u043e\u043f\u0438\u0440\u0443\u0435\u043c \u0428\u041a \u0438 \u0437\u0430\u043f\u0438\u043a\u0438\u0432\u0430\u0435\u043c \u0432 \u0432\u043e\u0437\u0432\u0440\u0430\u0442\u043d\u0443\u044e \u043a\u043e\u0440\u043e\u0431\u043a\u0443 \u0438\u043b\u0438 \u0437\u0430\u043f\u0438\u043a\u0438\u0432\u0430\u0435\u043c \u0432 \u043a\u043e\u0440\u043e\u0431\u043a\u0443 \u043f\u043e \u0431\u0430\u0440\u043a\u043e\u0434\u0443","warehouse.instruction4":"\u0415\u0441\u043b\u0438 \u044d\u0442\u043e \u043e\u0448\u0438\u0431\u043a\u0430: \u043f\u0440\u043e\u0432\u043e\u0434\u0438\u043c \u0438\u043d\u0432\u0435\u043d\u0442\u0430\u0440\u0438\u0437\u0430\u0446\u0438\u044e \u043c\u0435\u0441\u0442\u0430 \u0445\u0440\u0430\u043d\u0435\u043d\u0438\u044f \u0432 RM","warehouse.sort-instruction":"\u0412\u0435\u0449\u0438 \u0432 \u0441\u043f\u0438\u0441\u043a\u0435 \u0434\u043e\u043b\u0436\u043d\u044b \u043f\u0440\u0438\u0435\u0445\u0430\u0442\u044c \u0432 \u0434\u0440\u0443\u0433\u043e\u0439 \u0441\u0430\u043c\u043e\u0432\u044b\u0432\u043e\u0437","warehouse.sort-instruction2":"\u041a\u043e\u0440\u043e\u0431\u043a\u0438 \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432 \u043f\u0435\u0440\u0435\u0441\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043e\u0447\u043d\u0443\u044e \u043e\u0442\u0433\u0440\u0443\u0437\u043a\u0443","warehouse.createDt":"\u0414\u0430\u0442\u0430 \u0437\u0430\u043a\u0430\u0437\u0430","warehouse.firstOnPlaceDt":"\u0414\u0430\u0442\u0430 \u043f\u0440\u0438\u0435\u043c\u0430","warehouse.deliveryWay":"\u0421\u043f\u043e\u0441\u043e\u0431 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0438","warehouse.deliveryDate":"\u0414\u0430\u0442\u0430 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0438","warehouse.srcOffice":"\u041e\u0444\u0438\u0441 \u043e\u0442\u0433\u0440\u0443\u0437\u043a\u0438","warehouse.dstOffice":"\u041e\u0444\u0438\u0441 \u043f\u0440\u0438\u0435\u043c\u043a\u0438","warehouse.currency":"\u0412\u0430\u043b\u044e\u0442\u0430","warehouse.bonusSize":"\u0411\u043e\u043d\u0443\u0441\u043e\u0432 \u043f\u043e\u0442\u0440\u0430\u0447\u0435\u043d\u043e","warehouse.placesPlaceholder":"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u043b-\u0432\u043e \u043f\u043e\u043b\u043e\u043a \u0434\u043b\u044f \u0433\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u0438","warehouse.getPlacesShk":"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u0428\u041a \u043f\u043e\u043b\u043e\u043a","warehouse.printPlacesShk":"\u041f\u0435\u0447\u0430\u0442\u044c \u0428\u041a \u043f\u043e\u043b\u043e\u043a","warehouse.wavebreakerPlaceholder":"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0435 \u043a\u043e\u043b-\u0432\u043e \u044f\u0447\u0435\u0435\u043a \u0434\u043b\u044f \u0432\u043e\u043b\u043d\u043e\u0440\u0435\u0437\u0430","warehouse.wavebreakerShk":"\u041f\u0435\u0447\u0430\u0442\u044c \u0428\u041a \u0432\u043e\u043b\u043d\u043e\u0440\u0435\u0437\u0430","history-shk.header":"\u0418\u0441\u0442\u043e\u0440\u0438\u044f \u0428\u041a","history-shk.about":"\u041e\u0431\u0449\u0430\u044f \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f","history-shk.history-shipments":"\u0418\u0441\u0442\u043e\u0440\u0438\u044f \u043e\u0442\u0433\u0440\u0443\u0437\u043e\u043a","history-shk.history-purchase":"\u0418\u0441\u0442\u043e\u0440\u0438\u044f \u043f\u043e\u043a\u0443\u043f\u043e\u043a/\u0432\u043e\u0437\u0432\u0440\u0430\u0442\u043e\u0432/\u043e\u0442\u043c\u0435\u043d","history-shk.status-history":"\u0418\u0441\u0442\u043e\u0440\u0438\u044f \u0441\u0442\u0430\u0442\u0443\u0441\u043e\u0432 \u0438 \u043c\u0435\u0441\u0442 \u0445\u0440\u0430\u043d\u0435\u043d\u0438\u044f","history-shk.search-hint":"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0428\u041a","history-shk.not-info":"\u041d\u0435\u0442 \u0434\u0430\u043d\u043d\u044b\u0445","history-shk.emptySHK":"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0428\u041a","history-shk.later-query":"\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0432\u044b\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u043e\u0442\u0447\u0435\u0442. \u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u0435 \u0437\u0430\u043f\u0440\u043e\u0441 \u043f\u043e\u0437\u0434\u043d\u0435\u0435","history-shk.info.shk":"\u0428\u041a","history-shk.info.numSup":"\u041d\u043e\u043c\u0435\u0440 \u043f\u043e\u0441\u0442\u0443\u043f\u043b\u0435\u043d\u0438\u044f","history-shk.info.date-create":"\u0414\u0430\u0442\u0430 \u043f\u043e\u0441\u0442\u0443\u043f\u043b\u0435\u043d\u0438\u044f","history-shk.info.brand":"\u041c\u0430\u0440\u043a\u0430 \u0442\u043e\u0432\u0430\u0440\u0430","history-shk.info.name":"\u041d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435","history-shk.info.art":"\u0410\u0440\u0442\u0438\u043a\u0443\u043b","history-shk.info.barcode":"\u0411\u0430\u0440\u043a\u043e\u0434","history-shk.info.vat":"\u0421\u0442\u0430\u0432\u043a\u0430 \u041d\u0414\u0421","history-shk.info.price":"\u0426\u0435\u043d\u0430 \u0442\u043e\u0432\u0430\u0440\u0430","history-shk.info.supplier":"\u041f\u043e\u0441\u0442\u0430\u0432\u0449\u0438\u043a","history-shk.info.lastClient":"\u041a\u043b\u0438\u0435\u043d\u0442 \u0438\u0437 \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0435\u0439 \u043f\u0440\u043e\u0434\u0430\u0436\u0438","history-shk.ship.supl":"\u041e\u0442\u0433\u0440\u0443\u0437\u043a\u0430","history-shk.ship.supl-date":"\u0414\u0430\u0442\u0430 \u043e\u0442\u0433\u0440\u0443\u0437\u043a\u0438","history-shk.ship.ttn":"\u0422\u0422\u041d","history-shk.ship.box":"\u041a\u043e\u0440\u043e\u0431\u043a\u0430","history-shk.ship.type-box":"\u0422\u0438\u043f \u043a\u043e\u0440\u043e\u0431\u043a\u0438","history-shk.ship.office-a":"\u041e\u0444\u0438\u0441 \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f","history-shk.ship.office-a-name":"\u041e\u0444\u0438\u0441 \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u043f\u043e \u043e\u0442\u0433\u0440\u0443\u0437\u043a\u0435","history-shk.ship.office-b-name":"\u041e\u0444\u0438\u0441 \u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u043f\u043e \u043e\u0442\u0433\u0440\u0443\u0437\u043a\u0435","history-shk.ship.office-b":"\u041e\u0444\u0438\u0441 \u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f","history-shk.ship.order":"\u0417\u0430\u043a\u0430\u0437","history-shk.ship.employee":"\u0421\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u043a","history-shk.sale.type":"\u0422\u0438\u043f","history-shk.sale.doc":"ID \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430","history-shk.sale.ttn":"\u0422\u0422\u041d","history-shk.sale.1c":"1C","history-shk.sale.date":"\u0414\u0430\u0442\u0430 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430","history-shk.sale.payment":"\u041e\u043f\u043b\u0430\u0442\u0430","history-shk.sale.pre-pay":"\u041f\u0440\u0435\u0434\u043e\u043f\u043b\u0430\u0442\u0430 \u0437\u0430\u043a\u0430\u0437\u0430","history-shk.sale.comment":"\u041a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439  ","history-shk.sale.buy":"\u041f\u043e\u043a\u0443\u043f\u0430\u0442\u0435\u043b\u044c","history-shk.sale.reason":"\u041f\u0440\u0438\u0447\u0438\u043d\u0430","history-shk.sale.order":"\u0417\u0430\u043a\u0430\u0437","history-shk.status.date":"\u0414\u0430\u0442\u0430","history-shk.status.name":"\u0421\u0442\u0430\u0442\u0443\u0441","history-shk.status.code":"\u041a\u043e\u0434 \u0441\u0442\u0430\u0442\u0443\u0441\u0430","history-shk.status.cell":"\u041f\u043e\u043b\u043a\u0430 | \u044f\u0447\u0435\u0439\u043a\u0430","history-shk.status.employee":"\u0421\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u043a","invent.header":"\u0418\u043d\u0432\u0435\u043d\u0442\u0430\u0440\u0438\u0437\u0430\u0446\u0438\u044f","invent.storagePlace":"\u0422\u0435\u043a\u0443\u0449\u0435\u0435 \u043c\u0435\u0441\u0442\u043e \u0445\u0440\u0430\u043d\u0435\u043d\u0438\u044f","invent.storagePlaceNotSelected":"\u043d\u0435 \u0432\u044b\u0431\u0440\u0430\u043d\u043e","invent.itemNotFound":"\u0422\u043e\u0432\u0430\u0440 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d","invent.placeNotFound":"\u041f\u043e\u043b\u043a\u0430 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u0430","invent.spNotSelected":"\u041c\u0435\u0441\u0442\u043e \u0445\u0440\u0430\u043d\u0435\u043d\u0438\u044f \u043d\u0435 \u0432\u044b\u0431\u0440\u0430\u043d\u043e","invent.inventResults":"\u041f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u044b","invent.finishInvent":"\u0417\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u044c \u0438\u043d\u0432\u0435\u043d\u0442\u0430\u0440\u0438\u0437\u0430\u0446\u0438\u044e","invent.results":"\u043f\u043e \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0430\u043c \u0438\u043d\u0432\u0435\u043d\u0442\u0430\u0440\u0438\u0437\u0430\u0446\u0438\u0438","invent.results-found":"\u043d\u0430\u0439\u0434\u0435\u043d\u043e","invent.results-move":"\u0431\u0443\u0434\u0443\u0442 \u043f\u0435\u0440\u0435\u043c\u0435\u0449\u0435\u043d\u044b","invent.results-lost":"\u0431\u0443\u0434\u0443\u0442 \u0441\u043f\u0438\u0441\u0430\u043d\u044b","invent.instruction1":"\u0421\u043a\u0430\u043d\u0438\u0440\u0443\u0435\u043c \u0428\u041a \u043f\u043e\u043b\u043a\u0438/\u0432\u043e\u043b\u043d\u043e\u0440\u0435\u0437\u0430/\u0432\u043e\u0437\u0432\u0440\u0430\u0442\u043d\u043e\u0439 \u043a\u043e\u0440\u043e\u0431\u043a\u0438. \u0415\u0441\u043b\u0438 \u043d\u0435 \u0441\u043a\u0430\u043d\u0438\u0440\u0443\u0435\u0442\u0441\u044f, \u043c\u043e\u0436\u043d\u043e \u0432\u0432\u0435\u0441\u0442\u0438 \u0440\u0443\u043a\u0430\u043c\u0438:","invent.instruction1-1":"\u0424\u043e\u0440\u043c\u0430\u0442 \u0428\u041a \u0432\u043e\u043b\u043d\u043e\u0440\u0435\u0437\u0430: WVBR123 \u0433\u0434\u0435 123 - \u043d\u043e\u043c\u0435\u0440 \u044f\u0447\u0435\u0439\u043a\u0438","invent.instruction1-2":"\u0424\u043e\u0440\u043c\u0430\u0442 \u0428\u041a \u043f\u043e\u043b\u043a\u0438: PLCE123 \u0433\u0434\u0435 123 - \u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440 \u043f\u043e\u043b\u043a\u0438","invent.instruction1-3":"\u0424\u043e\u0440\u043c\u0430\u0442 \u0428\u041a \u043a\u043e\u0440\u043e\u0431\u043a\u0438:  TRBX123456789 (TRBX + 9 \u0446\u0438\u0444\u0440)","invent.instruction2":"\u0421\u043a\u0430\u043d\u0438\u0440\u0443\u0435\u043c \u0412\u0421\u0415 \u0432\u0435\u0449\u0438, \u0444\u0438\u0437\u0438\u0447\u0435\u0441\u043a\u0438 \u043d\u0430\u0445\u043e\u0434\u044f\u0449\u0438\u0435\u0441\u044f \u043d\u0430 \u041c\u0425","invent.instruction3":"\u0417\u0430\u0432\u0435\u0440\u0448\u0430\u0435\u043c \u0438\u043d\u0432\u0435\u043d\u0442\u0430\u0440\u0438\u0437\u0430\u0446\u0438\u044e","invent.instruction4":"\u0412\u0435\u0449\u0438, \u043d\u0430\u0439\u0434\u0435\u043d\u043d\u044b\u0435 \u043d\u0430 \u0434\u0440\u0443\u0433\u0438\u0445 \u041c\u0425 \u0431\u0443\u0434\u0443\u0442 \u043f\u0435\u0440\u0435\u043d\u0435\u0441\u0435\u043d\u044b \u043d\u0430 \u0442\u0435\u043a\u0443\u0449\u0435\u0435 \u043c\u0435\u0441\u0442\u043e \u0445\u0440\u0430\u043d\u0435\u043d\u0438\u044f.","invent.instruction5":"\u041f\u043e\u0442\u0435\u0440\u044f\u043d\u043d\u044b\u0435 \u0432\u0435\u0449\u0438 \u0431\u0443\u0434\u0443\u0442 \u0441\u043f\u0438\u0441\u0430\u043d\u044b","boxes.header":"\u041a\u043e\u0440\u043e\u0431\u043a\u0438 \u0432 \u043e\u0444\u0438\u0441\u0435","boxes.create-box-tip":"\u0414\u043b\u044f \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u043a\u043e\u0440\u043e\u0431\u043a\u0438 - \u043e\u0442\u0441\u043a\u0430\u043d\u0438\u0440\u0443\u0439\u0442\u0435 \u0428\u041a","boxes.contents":"\u0421\u043e\u0434\u0435\u0440\u0436\u0438\u043c\u043e\u0435","boxes.number":"\u041d\u043e\u043c\u0435\u0440","boxes.date":"\u0414\u0430\u0442\u0430","boxes.employee":"\u0421\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u043a","boxes.isClosed":"\u0417\u0430\u043a\u0440\u044b\u0442\u0430","boxes.type":"\u0422\u0438\u043f","boxes.return":"\u0412\u043e\u0437\u0432\u0440\u0430\u0442\u043d\u0430\u044f","boxes.sort":"\u0421\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043e\u0447\u043d\u0430\u044f","boxes.not-found":"\u041a\u043e\u0440\u043e\u0431\u043a\u0430 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u0430","boxes.box-header":"\u043a\u043e\u0440\u043e\u0431\u043a\u0430","boxes.scan":"\u0421\u043a\u0430\u043d\u0438\u0440\u043e\u0432\u0430\u0442\u044c","boxes.scan-item":"\u041e\u0442\u0441\u043a\u0430\u043d\u0438\u0440\u0443\u0439\u0442\u0435 \u0428\u041a \u0432\u0435\u0449\u0438/\u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430","boxes.close-box":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c \u043a\u043e\u0440\u043e\u0431\u043a\u0443","boxes.create-dt":"\u0414\u0430\u0442\u0430 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f","boxes.close-dt":"\u0414\u0430\u0442\u0430 \u0437\u0430\u043a\u0440\u044b\u0442\u0438\u044f","boxes.items-count":"\u0412\u0435\u0449\u0435\u0439 \u0432 \u043a\u043e\u0440\u043e\u0431\u043a\u0435","boxes.docs-count":"\u0414\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u043e\u0432 \u0432 \u043a\u043e\u0440\u043e\u0431\u043a\u0435","boxes.create-return":"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u0432\u043e\u0437\u0432\u0440\u0430\u0442\u043d\u0443\u044e","boxes.create-sort":"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u0441\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043e\u0447\u043d\u0443\u044e","boxes.instruction1":"\u0414\u043b\u044f \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u0432\u043e\u0437\u0432\u0440\u0430\u0442\u043d\u043e\u0439 \u043a\u043e\u0440\u043e\u0431\u043a\u0438 - \u043e\u0442\u0441\u043a\u0430\u043d\u0438\u0440\u0443\u0439\u0442\u0435 \u0428\u041a \u0432 \u0444\u043e\u0440\u043c\u0430\u0442\u0435 TRBX123456789 (TRBX + 9 \u0446\u0438\u0444\u0440)","boxes.instruction2":"\u0414\u043b\u044f \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u0441\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043e\u0447\u043d\u043e\u0439 \u043a\u043e\u0440\u043e\u0431\u043a\u0438 - \u043a\u043b\u0438\u043a\u043d\u0438\u0442\u0435 \u043f\u043e \u0433\u0430\u043b\u043a\u0435 \\"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u0441\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043e\u0447\u043d\u0443\u044e\\" \u0438 \u043e\u0442\u0441\u043a\u0430\u043d\u0438\u0440\u0443\u0439\u0442\u0435 \u0428\u041a","boxes.instruction11":"\u0414\u043b\u044f \u043f\u0435\u0440\u0435\u043c\u0435\u0449\u0435\u043d\u0438\u044f \u0432 \u043a\u043e\u0440\u043e\u0431\u043a\u0443 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430 - \u043e\u0442\u0441\u043a\u0430\u043d\u0438\u0440\u0443\u0439\u0442\u0435 \u0431\u0430\u0440\u043a\u043e\u0434 \u0432 \u0444\u043e\u0440\u043c\u0430\u0442\u0435 DOCT1234567","boxes.instruction12":"\u0414\u043b\u044f \u043f\u0435\u0440\u0435\u043c\u0435\u0449\u0435\u043d\u0438\u044f \u0432 \u043a\u043e\u0440\u043e\u0431\u043a\u0443 \u0437\u0430\u044f\u0432\u043a\u0438 \u043d\u0430 \u0432\u043e\u0437\u0432\u0440\u0430\u0442 - \u043e\u0442\u0441\u043a\u0430\u043d\u0438\u0440\u0443\u0439\u0442\u0435 \u0431\u0430\u0440\u043a\u043e\u0434 \u0432 \u0444\u043e\u0440\u043c\u0430\u0442\u0435 RRID1234567","boxes.instruction13":"\u0411\u0440\u0430\u043a\u043e\u0432\u0430\u043d\u043d\u0443\u044e \u0432\u0435\u0449\u044c \u0442\u0430\u043a\u0436\u0435 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043f\u0435\u0440\u0435\u043c\u0435\u0441\u0442\u0438\u0442\u044c(\u0437\u0430\u043f\u0438\u043a\u0430\u0442\u044c) \u0432 \u043a\u043e\u0440\u043e\u0431\u043a\u0443","money-movements.header":"\u0414\u0432\u0438\u0436\u0435\u043d\u0438\u044f \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u043e\u0432","boxes.seal":"\u041f\u043b\u043e\u043c\u0431\u0430","boxes.seal1":"\u041f\u043b\u043e\u043c\u0431\u0430 1","boxes.seal2":"\u041f\u043b\u043e\u043c\u0431\u0430 2","payment-devices.settings":"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438","shipment.header":"\u041e\u0442\u0433\u0440\u0443\u0437\u043a\u0438","shipment.create-header":"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u043e\u0442\u0433\u0440\u0443\u0437\u043a\u0438","shipment.create":"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u043e\u0442\u0433\u0440\u0443\u0437\u043a\u0443","shipment.add-box":"\u041e\u0442\u0441\u043a\u0430\u043d\u0438\u0440\u0443\u0439\u0442\u0435 \u0428\u041a \u043a\u043e\u0440\u043e\u0431\u043a\u0438","shipment.boxes-in-shipment":"\u041a\u043e\u0440\u043e\u0431\u043a\u0438 \u0432 \u043e\u0442\u0433\u0440\u0443\u0437\u043a\u0435","shipment.no-boxes-in-shipment":"\u0414\u043b\u044f \u043d\u0430\u0447\u0430\u043b\u0430 \u0434\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u043a\u043e\u0440\u043e\u0431\u043a\u0438 \u0432 \u043e\u0442\u0433\u0440\u0443\u0437\u043a\u0443","shipment.hint":"\u041e\u0442\u0441\u043a\u0430\u043d\u0438\u0440\u0443\u0439\u0442\u0435 \u0432\u043e\u0437\u0432\u0440\u0430\u0442\u043d\u044b\u0435 \u043a\u043e\u0440\u043e\u0431\u043a\u0438","shipment.hint1":"\u0412\u0440\u0443\u0447\u043d\u0443\u044e \u043d\u043e\u043c\u0435\u0440\u0430 \u043a\u043e\u0440\u043e\u0431\u043e\u043a \u0432\u0432\u043e\u0434\u044f\u0442\u0441\u044f \u0432 \u0444\u043e\u0440\u043c\u0430\u0442\u0435 TRBX1234 \u0433\u0434\u0435 1234 - \u043d\u043e\u043c\u0435\u0440 \u043a\u043e\u0440\u043e\u0431\u043a\u0438","shipment.hint3":"\u0412 \u043e\u0431\u044b\u0447\u043d\u0443\u044e (\u0432\u043e\u0437\u0432\u0440\u0430\u0442\u043d\u0443\u044e) \u043e\u0442\u0433\u0440\u0443\u0437\u043a\u0443 \u0441\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043e\u0447\u043d\u044b\u0435 \u043a\u043e\u0440\u043e\u0431\u043a\u0438 \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0442\u044c \u043d\u0435 \u0441\u043b\u0435\u0434\u0443\u0435\u0442","shipment.return-invalid-box":"\u041d\u0430 \u0432\u043e\u0437\u0432\u0440\u0430\u0442 \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0435\u043c \u0442\u043e\u043b\u044c\u043a\u043e \u0432\u043e\u0437\u0432\u0440\u0430\u0442\u043d\u044b\u0435 \u043a\u043e\u0440\u043e\u0431\u043a\u0438","shipment.created":"\u041e\u0442\u0433\u0440\u0443\u0437\u043a\u0430 \u0441\u043e\u0437\u0434\u0430\u043d\u0430","shipment.ttn":"\u0422\u0422\u041d","shipment.consignmentNote":"\u041d\u0430\u043a\u043b\u0430\u0434\u043d\u0430\u044f","shipment.torg":"\u0422\u043e\u0440\u0433-12","shipment.cmr":"CMR","shipment.ttnSeries":"\u0421\u0435\u0440\u0438\u044f \u0422\u0422\u041d","shipment.ttnNumber":"\u041d\u043e\u043c\u0435\u0440 \u0422\u0422\u041d","shipment.totalWight":"\u041e\u0431\u0449\u0438\u0439 \u0432\u0435\u0441","purchase-returns.header":"\u0412\u043e\u0437\u0432\u0440\u0430\u0442 \u0442\u043e\u0432\u0430\u0440\u0430","purchase-returns.scan-barcode":"\u041e\u0442\u0441\u043a\u0430\u043d\u0438\u0440\u0443\u0439\u0442\u0435 \u0431\u0430\u0440\u043a\u043e\u0434 \u0442\u043e\u0432\u0430\u0440\u0430","purchase-returns.no-good":"\u0412\u0435\u0449\u044c \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u0430","purchase-returns.no-barcode":"\u041e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u0431\u0430\u0440\u043a\u043e\u0434","purchase-returns.no-code":"\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044c \u043e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0438\u0435 \u0431\u0430\u0440\u043a\u043e\u0434\u0430","purchase-returns.err-code":"\u041d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0439 \u0431\u0430\u0440\u043a\u043e\u0434","purchase-returns.refund-confirmed":"\u0412\u043e\u0437\u0432\u0440\u0430\u0442 \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d","purchase-returns.print-rko":"\u041f\u0435\u0447\u0430\u0442\u044c \u0420\u041a\u041e","purchase-returns.product-selection":"\u0412\u044b\u0431\u043e\u0440 \u0442\u043e\u0432\u0430\u0440\u043e\u0432","purchase-returns.return-reason":"\u041f\u0440\u0438\u0447\u0438\u043d\u0430 \u0432\u043e\u0437\u0432\u0440\u0430\u0442\u0430","purchase-returns.refund":"\u0412\u043e\u0437\u0432\u0440\u0430\u0442 \u0414\u0421","purchase-returns.customer-products":"\u0422\u043e\u0432\u0430\u0440\u044b \u043a\u043b\u0438\u0435\u043d\u0442\u0430","purchase-returns.enter-name-phone-email":"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0418\u043c\u044f/\u0422\u0435\u043b\u0435\u0444\u043e\u043d/Email/\u0428\u041a","purchase-returns.defect-return":"\u0414\u043b\u044f \u0432\u043e\u0437\u0432\u0440\u0430\u0442\u0430 \u0432\u0435\u0449\u0435\u0439 \u043d\u0430 \u044d\u043a\u0441\u043f\u0435\u0440\u0442\u0438\u0437\u0443 \u0432\u043e\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435\u0441\u044c \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u043e\u043c \\"\u0412\u043e\u0437\u0432\u0440\u0430\u0442 \u0431\u0440\u0430\u043a\u0430\\" \u0432 RM","purchase-returns.on":"\u043d\u0430","purchase-returns.sale-date":"\u0414\u0430\u0442\u0430 \u043f\u0440\u043e\u0434\u0430\u0436\u0438","purchase-returns.color":"\u0426\u0432\u0435\u0442","purchase-returns.price":"\u0426\u0435\u043d\u0430","purchase-returns.photo":"\u0424\u043e\u0442\u043e","purchase-returns.further":"\u0414\u0430\u043b\u0435\u0435","purchase-returns.return-goods-for-customer":"\u0422\u043e\u0432\u0430\u0440\u044b \u043d\u0430 \u0432\u043e\u0437\u0432\u0440\u0430\u0442 \u0434\u043b\u044f \u043a\u043b\u0438\u0435\u043d\u0442\u0430","purchase-returns.non-refundable goods":"\u041d\u0435\u0432\u043e\u0437\u0432\u0440\u0430\u0442\u043d\u044b\u0435 \u0442\u043e\u0432\u0430\u0440\u044b","purchase-returns.irrevocability-causes":"\u041f\u0440\u0438\u0447\u0438\u043d\u044b \u043d\u0435\u0432\u043e\u0437\u0432\u0440\u0430\u0442\u043d\u043e\u0441\u0442\u0438","purchase-returns.choose-return-reason":"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043f\u0440\u0438\u0447\u0438\u043d\u0443 \u0432\u043e\u0437\u0432\u0440\u0430\u0442\u0430","purchase-returns.comment":"\u041a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439","purchase-returns.required-comment":"\u041a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u0435\u043d \u0438 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043d\u0435 \u043c\u0435\u043d\u0435\u0435 10 \u0438 \u043d\u0435 \u0431\u043e\u043b\u0435\u0435 255 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432","purchase-returns.choose-data":"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0434\u0430\u0442\u0443","purchase-returns.products-from":"\u0442\u043e\u0432\u0430\u0440\u043e\u0432 \u043e\u0442","purchase-returns.enter-code":"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u0434","purchase-returns.total-to-return":"\u0412\u0441\u0435\u0433\u043e \u043a \u0432\u043e\u0437\u0432\u0440\u0430\u0442\u0443","purchase-returns.bonus-to-return":"\u0411\u043e\u043d\u0443\u0441\u043e\u0432 \u043a \u0432\u043e\u0437\u0432\u0440\u0430\u0442\u0443","purchase-returns.ruble":"\u0440\u0443\u0431\u043b\u0435\u0439","purchase-returns.found":"\u041d\u0430\u0439\u0434\u0435\u043d\u043e","purchase-returns.clients":"\u043a\u043b\u0438\u0435\u043d\u0442\u043e\u0432","purchase-returns.no-clients-found":"\u041a\u043b\u0438\u0435\u043d\u0442\u044b \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u044b","purchase-returns.vendor-code":"\u0410\u0440\u0442\u0438\u043a\u0443\u043b","purchase-returns.size":"\u0420\u0430\u0437\u043c\u0435\u0440","purchase-returns.brand":"\u0411\u0440\u0435\u043d\u0434","purchase-returns.search":"\u041f\u043e\u0438\u0441\u043a","purchase-returns.enterShk":"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0428\u041a \u0438\u043b\u0438 \u0431\u0430\u0440\u043a\u043e\u0434","purchase-returns.bank-name":"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0431\u0430\u043d\u043a\u0430","purchase-returns.bank-account":"\u041d\u043e\u043c\u0435\u0440 \u0441\u0447\u0435\u0442\u0430","purchase-returns.bank-data":"\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u0431\u0430\u043d\u043a\u043e\u0432\u0441\u043a\u0438\u0435 \u0434\u0430\u043d\u043d\u044b\u0435","purchase-returns.paid-return-tooltip":"\u041f\u043b\u0430\u0442\u043d\u044b\u0439 \u0432\u043e\u0437\u0432\u0440\u0430\u0442","purchase-returns.paid-return":"\u041f\u043b\u0430\u0442\u043d\u0430\u044f \u0443\u0441\u043b\u0443\u0433\u0430 \u0432\u043e\u0437\u0432\u0440\u0430\u0442\u0430","purchase-returns.total-return-price":"\u041e\u0431\u0449\u0430\u044f \u0441\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u044c \u0443\u0441\u043b\u0443\u0433\u0438 \u0432\u043e\u0437\u0432\u0440\u0430\u0442\u0430","purchase-returns.to-return":"K \u0432\u043e\u0437\u0432\u0440\u0430\u0442\u0443","purchase-returns.approved-claim":"\u0415\u0441\u0442\u044c \u043e\u0434\u043e\u0431\u0440\u0435\u043d\u043d\u0430\u044f \u0437\u0430\u044f\u0432\u043a\u0430 \u043d\u0430 \u0432\u043e\u0437\u0432\u0440\u0430\u0442","purchase-returns.rejected-claim":"\u0417\u0430\u044f\u0432\u043a\u0430 \u043d\u0430 \u0432\u043e\u0437\u0432\u0440\u0430\u0442 \u0431\u0440\u0430\u043a\u0430 \u043e\u0442\u043a\u043b\u043e\u043d\u0435\u043d\u0430!","purchase-returns.consideration-claim":"\u0417\u0430\u044f\u0432\u043a\u0430 \u043d\u0430 \u0432\u043e\u0437\u0432\u0440\u0430\u0442 \u0431\u0440\u0430\u043a\u0430 \u043d\u0430\u0445\u043e\u0434\u0438\u0442\u0441\u044f \u043d\u0430 \u0440\u0430\u0441\u0441\u043c\u043e\u0442\u0440\u0435\u043d\u0438\u0438","purchase-returns.no-approved-claim":"\u041e\u0434\u043e\u0431\u0440\u0435\u043d\u043d\u0430\u044f \u0437\u0430\u044f\u0432\u043a\u0430 \u043d\u0430 \u0432\u043e\u0437\u0432\u0440\u0430\u0442 \u0431\u0440\u0430\u043a\u0430 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u0430","returns-refund.return-max":"\u0412\u0435\u0440\u043d\u0443\u0442\u044c \u043c\u0430\u043a\u0441\u0438\u043c\u0443\u043c","returns-refund.no-payments":"\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u0441\u0443\u043c\u043c\u0443 \u0432\u043e\u0437\u0432\u0440\u0430\u0442\u0430","returns-refund.invalid-sum":"\u041d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u043e \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0430 \u0441\u0443\u043c\u043c\u0430 \u0432\u043e\u0437\u0432\u0440\u0430\u0442\u0430","encashment.header":"\u0418\u043d\u043a\u0430\u0441\u0441\u0430\u0446\u0438\u044f","encashment.select-action":"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435","encashment.confirm-action":"\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043d\u0438\u0435 \u0444\u0430\u043a\u0442\u0430 \u0438\u043d\u043a\u0430\u0441\u0441\u0430\u0446\u0438\u0438","encashment.history":"\u0418\u0441\u0442\u043e\u0440\u0438\u044f \u0438\u043d\u043a\u0430\u0441\u0441\u0430\u0446\u0438\u0439","encashment.enter-bag-number":"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u043e\u043c\u0435\u0440 \u0441\u0443\u043c\u043a\u0438","encashment.min-sum":"\u041c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u0441\u0443\u043c\u043c\u0430 \u0438\u043d\u043a\u0430\u0441\u0441\u0430\u0446\u0438\u0438 {{minAmount}}","encashment.scan-error":"\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0441\u043a\u0430\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0438 \u0428\u041a","encashment.scan-success":"\u0418\u043d\u043a\u0430\u0441\u0441\u0430\u0446\u0438\u044f \u043f\u0440\u043e\u0432\u0435\u0434\u0435\u043d\u0430","encashment.bag-number":"\u041d\u043e\u043c\u0435\u0440 \u0441\u0443\u043c\u043a\u0438","encashment.encashAmount":"\u0423\u043a\u0430\u0436\u0438\u0442\u0435 \u0441\u0443\u043c\u043c\u0443 \u0438\u043d\u043a\u0430\u0441\u0441\u0430\u0446\u0438\u0438","encashment.printDocs":"\u041f\u0435\u0447\u0430\u0442\u044c \u0441\u043e\u043f\u0440\u043e\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0445 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u043e\u0432","encashment.cashBalance":"\u0411\u0430\u043b\u0430\u043d\u0441 \u043a\u0430\u0441\u0441\u044b","encashment.minEncashAmount":"\u041c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u0441\u0443\u043c\u043c\u0430 \u0438\u043d\u043a\u0430\u0441\u0441\u0430\u0446\u0438\u0438","encashment.amounExceedsCash":"\u0421\u0443\u043c\u043c\u0430 \u0438\u043d\u043a\u0430\u0441\u0441\u0430\u0446\u0438\u0438 \u043f\u0440\u0435\u0432\u044b\u0448\u0430\u0435\u0442 \u043e\u0441\u0442\u0430\u0442\u043e\u043a \u0432 \u043a\u0430\u0441\u0441\u0435","encashment.select-encash-type":"\u0422\u0438\u043f \u0438\u043d\u043a\u0430\u0441\u0441\u0430\u0446\u0438\u0438","encashment.default-type":"\u041e\u0431\u044b\u0447\u043d\u0430\u044f","encashment.self-type":"\u0421\u0430\u043c\u043e\u0438\u043d\u043a\u0430\u0441\u0441\u0430\u0446\u0438\u044f","encashment.smart-safe":"\u0412 \u0441\u043c\u0430\u0440\u0442\u0441\u0435\u0439\u0444","encashment.bill":"\u041d\u043e\u043c\u0438\u043d\u0430\u043b","encashment.count":"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e","encashment.sum":"\u0421\u0443\u043c\u043c\u0430","encashment.total":"\u0418\u0442\u043e\u0433\u043e","encashment.scan-shk":"\u0421\u043a\u0430\u043d\u0438\u0440\u0443\u0439\u0442\u0435 \u0428\u041a \u043a\u0432\u0438\u0442\u0430\u043d\u0446\u0438\u0438 \u043a \u0441\u0443\u043c\u043a\u0435","encashment.enter-shk":"\u0423\u043a\u0430\u0436\u0438\u0442\u0435 \u0428\u041a \u043a\u0432\u0438\u0442\u0430\u043d\u0446\u0438\u0438","encashment.history-confirmed-encash":"\u0418\u0441\u0442\u043e\u0440\u0438\u044f \u043f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043d\u043d\u044b\u0445 \u0438\u043d\u043a\u0430\u0441\u0441\u0430\u0446\u0438\u0439","encashment.get-doc":"\u041f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u044b","encashment.print":"\u041f\u0435\u0447\u0430\u0442\u044c","encashment.download-pdf":"\u0421\u043a\u0430\u0447\u0430\u0442\u044c PDF","encashment.operation-number":"\u041d\u043e\u043c\u0435\u0440 \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438","encashment.doc-name":"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430 \u0434\u043b\u044f \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438","encashment.operation-name":"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438","encashment.docs-count":"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u043e\u0432","encashment.download":"\u0421\u043a\u0430\u0447\u0430\u0442\u044c","idle.warning":"\u0412\u044b \u0440\u0430\u0437\u043b\u043e\u0433\u0438\u043d\u0438\u0442\u0435\u0441\u044c \u0447\u0435\u0440\u0435\u0437 5 \u043c\u0438\u043d\u0443\u0442","idle.continue":"\u0425\u043e\u0440\u043e\u0448\u043e","offlineStatusBar.dbState":"\u0421\u0442\u0430\u0442\u0443\u0441 \u0411\u0414","offlineStatusBar.startTime":"\u0421\u0442\u0430\u0440\u0442 \u0441\u0435\u0440\u0432\u0438\u0441\u0430","offlineStatusBar.queueOut":"\u0418\u0441\u0445\u043e\u0434\u044f\u0449\u0430\u044f \u043e\u0447\u0435\u0440\u0435\u0434\u044c","offlineStatusBar.lastSyncIn":"\u041f\u043e\u0441\u043b\u0435\u0434\u043d\u044f\u044f \u0438\u0441\u0445\u043e\u0434\u044f\u0449\u0430\u044f \u0441\u0438\u043d\u0445\u0440\u043e\u043d\u0438\u0437\u0430\u0446\u0438\u044f","offlineStatusBar.lastSyncOut":"\u041f\u043e\u0441\u043b\u0435\u0434\u043d\u044f\u044f \u0432\u0445\u043e\u0434\u044f\u0449\u0430\u044f \u0441\u0438\u043d\u0445\u0440\u043e\u043d\u0438\u0437\u0430\u0446\u0438\u044f","money-movements.balance":"\u0411\u0430\u043b\u0430\u043d\u0441 \u043a\u0430\u0441\u0441\u044b","money-movements.limit":"\u041b\u0438\u043c\u0438\u0442","money-movements.z-report-sum":"\u0421\u0443\u043c\u043c\u0430 \u0434\u043b\u044f \u0441\u0432\u0435\u0440\u043a\u0438 Z-\u043e\u0442\u0447\u0435\u0442\u0430","money-movements.number-of-payments":"\u041a\u043e\u043b-\u0432\u043e \u043e\u043f\u043b\u0430\u0442","money-movements.number-of-returns":"\u041a\u043e\u043b-\u0432\u043e \u0432\u043e\u0437\u0432\u0440\u0430\u0442\u043e\u0432","money-movements.start-date":"\u0414\u0430\u0442\u0430 \u0441","money-movements.end-date":"\u0414\u0430\u0442\u0430 \u043e\u0442","money-movements.type":"\u0422\u0438\u043f","money-movements.currency":"\u0412\u0430\u043b\u044e\u0442\u0430","money-movements.rub":"\u0420\u043e\u0441\u0441\u0438\u0439\u0441\u043a\u0438\u0439 \u0440\u0443\u0431\u043b\u044c","money-movements.byn":"\u0411\u0435\u043b\u043e\u0440\u0443\u0441\u0441\u043a\u0438\u0439 \u0440\u0443\u0431\u043b\u044c","money-movements.tg":"\u041a\u0430\u0437\u0430\u0445\u0441\u0442\u0430\u043d\u0441\u043a\u0438\u0439 \u0442\u0435\u043d\u0433\u0435","money-movements.som":"\u041a\u0438\u0440\u0433\u0438\u0437\u0441\u043a\u0438\u0439 \u0441\u043e\u043c","money-movements.dram":"\u0410\u0440\u043c\u044f\u043d\u0441\u043a\u0438\u0439 \u0434\u0440\u0430\u043c","money-movements.work-shift-payments":"\u0414\u0435\u0442\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044f \u043f\u043e \u043e\u043f\u043b\u0430\u0442\u0430\u043c \u0438 \u0432\u043e\u0437\u0432\u0440\u0430\u0442\u0430\u043c","money-movements.work-shift-type-payments":"\u0414\u0435\u0442\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044f \u043f\u043e \u0442\u0438\u043f\u0430\u043c \u043e\u043f\u043b\u0430\u0442","money-movements.zloty":"\u041f\u043e\u043b\u044c\u0441\u043a\u0438\u0439 \u0437\u043b\u043e\u0442\u044b\u0439","money-movements.refresh-data":"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435","money-movements.payment-type":"\u0422\u0438\u043f \u043e\u043f\u043b\u0430\u0442\u044b","money-movements.sum":"\u0421\u0443\u043c\u043c\u0430","money-movements.payment-time":"\u0412\u0440\u0435\u043c\u044f \u043e\u043f\u043b\u0430\u0442\u044b","money-movements.employee":"\u0421\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u043a","courier-shippings.header":"\u041a\u0443\u0440\u044c\u0435\u0440\u0441\u043a\u0438\u0435 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0438","courier-shippings.printForm":"\u041f\u0435\u0447\u0430\u0442\u044c \u0434\u043e\u0441\u0442\u0430\u0432\u043e\u043a","courier-shippings.date":"\u0414\u0430\u0442\u0430 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0438","courier-shippings.address":"\u0410\u0434\u0440\u0435\u0441","courier-shippings.phone":"\u0422\u0435\u043b\u0435\u0444\u043e\u043d","courier-shippings.user":"\u041a\u043b\u0438\u0435\u043d\u0442","courier-shippings.shk":"\u0428\u041a","courier-shippings.barcode":"\u0411\u0430\u0440\u043a\u043e\u0434","courier-shippings.location":"\u041c\u0425","shk-movements.header":"\u0414\u0432\u0438\u0436\u0435\u043d\u0438\u044f \u0432\u0435\u0449\u0435\u0439","shk-movements.time":"\u0412\u0440\u0435\u043c\u044f","shk-movements.context":"\u041e\u043f\u0435\u0440\u0430\u0446\u0438\u044f","shk-movements.shkId":"\u0428\u041a","shk-movements.stickerId":"\u0421\u0442\u0438\u043a\u0435\u0440","shk-movements.barcode":"\u0411\u0430\u0440\u043a\u043e\u0434","shk-movements.safePack":"\u0421\u0435\u0439\u0444\u043f\u0430\u043a\u0435\u0442","shk-movements.place":"\u041c\u0425","shk-movements.employee":"\u0421\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u043a","shk-movements.isSurplus":"\u0418\u0437\u043b\u0438\u0448\u0435\u043a","shk-movements.byBarcode":"\u041f\u0440\u0438\u043d\u044f\u0442 \u043f\u043e \u0431\u0430\u0440\u043a\u043e\u0434\u0443","shk-movements.status":"\u0421\u0442\u0430\u0442\u0443\u0441","shk-movements.delSurplus":"\u0422\u043e\u0432\u0430\u0440\u0430 \u043d\u0435\u0442","shk-movements.item-deleted":"\u0422\u043e\u0432\u0430\u0440 \u0443\u0434\u0430\u043b\u0435\u043d","shk-movements.reason-hint":"\u0423\u043a\u0430\u0436\u0438\u0442\u0435 \u043f\u0440\u0438\u0447\u0438\u043d\u0443 \u043d\u0435\u0432\u0435\u0440\u043d\u043e\u0439 \u043f\u0440\u0438\u0435\u043c\u043a\u0438","shk-movements.reason-err":"\u0423\u043a\u0430\u0436\u0438\u0442\u0435 \u043f\u0440\u0438\u0447\u0438\u043d\u0443!","shk-movements.reason1":"\u041d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u043d\u0430\u043a\u043b\u0435\u0435\u043a \u043d\u0430 \u043e\u0434\u043d\u043e\u043c \u0442\u043e\u0432\u0430\u0440\u0435","shk-movements.reason2":"\u041d\u0435\u0432\u0435\u0440\u043d\u044b\u0439 \u0440\u0443\u0447\u043d\u043e\u0439 \u0432\u0432\u043e\u0434 \u0431\u0430\u0440\u043a\u043e\u0434\u0430","shk-movements.reason3":"\u0421\u043b\u0443\u0447\u0430\u0439\u043d\u043e \u043e\u0442\u0441\u043a\u0430\u043d\u0438\u0440\u043e\u0432\u0430\u043b \u043d\u0435\u0432\u0435\u0440\u043d\u044b\u0439 \u0431\u0430\u0440\u043a\u043e\u0434","shk-movements.reason4":"\u0417\u0430\u0434\u0432\u043e\u0438\u043b \u043f\u0440\u0438\u0435\u043c \u0431\u0430\u0440\u043a\u043e\u0434\u0430","shk-movements.enter-shk":"\u041f\u043e\u0438\u0441\u043a \u043f\u043e \u0428\u041a","pickup.header":"\u0421\u0430\u043c\u043e\u0432\u044b\u0432\u043e\u0437","pickup.received-goods":"\u041f\u043e\u043b\u0443\u0447\u0435\u043d\u043d\u044b\u0435 \u0442\u043e\u0432\u0430\u0440\u044b","pickup.client-search":"\u041f\u043e\u0438\u0441\u043a \u043a\u043b\u0438\u0435\u043d\u0442\u0430","pickup.view-order":"\u041f\u0440\u043e\u0441\u043c\u043e\u0442\u0440 \u0437\u0430\u043a\u0430\u0437\u0430","pickup.payment":"\u041e\u043f\u043b\u0430\u0442\u0430","pickup.found":"\u041d\u0430\u0439\u0434\u0435\u043d\u043e","pickup.clients":"\u043a\u043b\u0438\u0435\u043d\u0442\u043e\u0432","pickup.no-clients-found":"\u041a\u043b\u0438\u0435\u043d\u0442\u044b \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u044b","pickup.phone":"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430","pickup.enter-phone":"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043b\u044f \u043f\u043e\u0438\u0441\u043a\u0430 \u0437\u0430\u043a\u0430\u0437\u0430","pickup.search":"\u041f\u043e\u0438\u0441\u043a","pickup.recipient":"\u041f\u043e\u043b\u0443\u0447\u0430\u0442\u0435\u043b\u044c","pickup.cell":"\u042f\u0447\u0435\u0439\u043a\u0430","pickup.product-name":"\u041d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435 \u0442\u043e\u0432\u0430\u0440\u0430","pickup.price":"\u0426\u0435\u043d\u0430","pickup.sum":"\u0421\u0443\u043c\u043c\u0430","pickup.back":"\u041d\u0430\u0437\u0430\u0434","pickup.scan-msg":"\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u043e\u0442\u0441\u043a\u0430\u043d\u0438\u0440\u0443\u0439\u0442\u0435 \u0432\u0435\u0449\u0438, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0432\u044b \u0445\u043e\u0442\u0438\u0442\u0435 \u043a\u0443\u043f\u0438\u0442\u044c","pickup.scan":"\u0421\u043a\u0430\u043d\u0438\u0440\u043e\u0432\u0430\u0442\u044c","pickup.items-to-pay":"\u0412\u0435\u0449\u0438 \u043a \u043e\u043f\u043b\u0430\u0442\u0435","pickup.pay":"\u041e\u043f\u043b\u0430\u0442\u0438\u0442\u044c","pickup.item-shk":"\u0428\u041a \u0442\u043e\u0432\u0430\u0440\u0430","pickup.can-return":"\u041f\u043e\u0434\u043b\u0435\u0436\u0438\u0442 \u0432\u043e\u0437\u0432\u0440\u0430\u0442\u0443","pickup.yes":"\u0414\u0430","pickup.no":"\u041d\u0435\u0442","pickup.total-sum":"\u0418\u0442\u043e\u0433\u043e \u043a \u043e\u043f\u043b\u0430\u0442\u0435","pickup.total-count":"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0442\u043e\u0432\u0430\u0440\u043e\u0432","pickup.pendingTerminalTransaction":"\u0414\u043e\u0436\u0434\u0438\u0442\u0435\u0441\u044c \u043e\u0442\u0432\u0435\u0442\u0430 \u043e\u0442 \u0442\u0435\u0440\u043c\u0438\u043d\u0430\u043b\u0430...","pickup.thanks":"\u0421\u043f\u0430\u0441\u0438\u0431\u043e!","pickup.unsuccess-sale":"\u0423\u0441\u043f\u0435\u0448\u043d\u0430\u044f \u043f\u0440\u043e\u0434\u0430\u0436\u0430! \u0424\u0438\u0441\u043a\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044f \u0437\u0430\u0432\u0435\u0440\u0448\u0438\u043b\u0430\u0441\u044c \u043e\u0448\u0438\u0431\u043a\u043e\u0439","pickup.empty-sale":"\u041d\u0435 \u0432\u044b\u0431\u0440\u0430\u043d\u044b \u0442\u043e\u0432\u0430\u0440\u044b","pickup.success-payment":"\u041e\u043f\u043b\u0430\u0442\u0430 \u043f\u0440\u043e\u0448\u043b\u0430","cash-box.header":"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u0432\u0440\u0435\u043c\u0435\u043d\u0438 \u043d\u0430 \u043a\u0430\u0441\u0441\u0435","cash-box.date-and-time":"\u0414\u0430\u0442\u0430 \u0438 \u0432\u0440\u0435\u043c\u044f","cash-box.save-settings":"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438","cash-box.select-date-time":"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0434\u0430\u0442\u0443 \u0438 \u0432\u0440\u0435\u043c\u044f","cash-box.kkm-dt":"\u0412\u0440\u0435\u043c\u044f \u043d\u0430 \u043a\u0430\u0441\u0441\u0435","cash-box.kkm-settings":"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u0432\u0440\u0435\u043c\u0435\u043d\u0438 \u043d\u0430 \u043a\u0430\u0441\u0441\u0435","cash-box.success-settings":"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u044b","cash-box.warning-msg":"\u0418\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0435 \u0432\u0440\u0435\u043c\u0435\u043d\u0438 \u043d\u0430 \u043a\u0430\u0441\u0441\u0435 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e \u0442\u043e\u043b\u044c\u043a\u043e \u043f\u0440\u0438 \u0437\u0430\u043a\u0440\u044b\u0442\u043e\u0439 \u0441\u043c\u0435\u043d\u0435","cash-box.incorrect-date":"\u041d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0435 \u0434\u0430\u0442\u0430 \u0438 \u0432\u0440\u0435\u043c\u044f","settings.deactivate-warning":"\u041a\u043d\u043e\u043f\u043a\u0443 \u0436\u0430\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0435\u0441\u043b\u0438 \u043e\u0444\u0438\u0441 \u043e\u0444\u0444\u043b\u0430\u0439\u043d\u0430 \u043d\u0435 \u0441\u043e\u0432\u043f\u0430\u0434\u0430\u0435\u0442 \u0441 \u0432\u0430\u0448\u0438\u043c \u043e\u0444\u0438\u0441\u043e\u043c.(\u0410\u043a\u0442\u0438\u0432\u0438\u0440\u043e\u0432\u0430\u043d \u043f\u043e \u043e\u0448\u0438\u0431\u043a\u0435, \u0438\u043b\u0438 \u043f\u0440\u0438\u0432\u0435\u0437\u043b\u0438 \u043a\u043e\u043c\u043f\u044c\u044e\u0442\u0435\u0440 \u0434\u0440\u0443\u0433\u043e\u0433\u043e \u043e\u0444\u0438\u0441\u0430)","notice.header":"\u0423\u0432\u0435\u0434\u043e\u043c\u043b\u0435\u043d\u0438\u044f","notice.number":"\u041d\u043e\u043c\u0435\u0440","notice.title":"\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a","notice.msg-type":"\u0422\u0438\u043f \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f","notice.empty-notice":"\u0423\u0432\u0435\u0434\u043e\u043c\u043b\u0435\u043d\u0438\u0435 \u2116 {{id}} \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e","notice.creation-date":"\u0414\u0430\u0442\u0430 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f","courier-delivery.header":"\u0412\u044b\u0434\u0430\u0447\u0430 \u043a\u0443\u0440\u044c\u0435\u0440\u0443","courier-delivery.select-courier":"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043a\u0443\u0440\u044c\u0435\u0440\u0430","courier-delivery.select-goods":"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0442\u043e\u0432\u0430\u0440\u044b","courier-delivery.save":"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c","courier-delivery.error":"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043a\u0443\u0440\u044c\u0435\u0440\u0430 \u0438 \u0442\u043e\u0432\u0430\u0440\u044b","courier-delivery.success":"\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435 \u043f\u0440\u043e\u0448\u043b\u043e \u0443\u0441\u043f\u0435\u0448\u043d\u043e","guides.header":"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u0438","guides.empty-guides":"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u0430","video.header":"\u0412\u0438\u0434\u0435\u043e\u043d\u0430\u0431\u043b\u044e\u0434\u0435\u043d\u0438\u0435","video.camera1":"\u041a\u0430\u043c\u0435\u0440\u0430 1","video.camera2":"\u041a\u0430\u043c\u0435\u0440\u0430 2","video.archive":"\u0410\u0440\u0445\u0438\u0432","video.choose":"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043e\u0434\u0438\u043d \u0438\u0437 \u043f\u0440\u0435\u0434\u043b\u043e\u0436\u0435\u043d\u043d\u044b\u0445 \u0432\u044b\u0448\u0435 \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u043e\u0432","video.notice":"\u0421\u043a\u0430\u0447\u0438\u0432\u0430\u043d\u0438\u0435 \u0444\u0430\u0439\u043b\u0430 \u043d\u0430\u0447\u0438\u043d\u0430\u0435\u0442\u0441\u044f \u043d\u0435 \u0441\u0440\u0430\u0437\u0443. \u0414\u043e\u0436\u0434\u0438\u0442\u0435\u0441\u044c \u043f\u043e\u043a\u0430 \u043f\u043e\u044f\u0432\u0438\u0442\u0441\u044f \u043e\u043a\u043d\u043e \u0434\u043b\u044f \u0432\u044b\u0431\u043e\u0440\u0430 \u043f\u0430\u043f\u043a\u0438 \u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f.","video.archive-new-tab":"\u041e\u0442\u043a\u0440\u044b\u0442\u044c \u0430\u0440\u0445\u0438\u0432 \u0437\u0430\u043f\u0438\u0441\u0435\u0439 \u0432 \u043d\u043e\u0432\u043e\u0439 \u0432\u043a\u043b\u0430\u0434\u043a\u0435","accept-docs.header":"\u041f\u0440\u0438\u0435\u043c \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u043e\u0432","accept-docs.shk":"\u0428\u0442\u0440\u0438\u0445\u043a\u043e\u0434 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430","accept-docs.name":"\u041d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435","accept-docs.status":"\u041f\u0440\u0438\u043d\u044f\u0442","accept-docs.error":"\u041e\u0448\u0438\u0431\u043a\u0430","accept-docs.success-accept":"\u0414\u043e\u043a\u0443\u043c\u0435\u043d\u0442 \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u043f\u0440\u0438\u043d\u044f\u0442","accept-docs.warning":"\u041f\u0440\u0435\u0434\u0443\u043f\u0440\u0435\u0436\u0434\u0435\u043d\u0438\u0435","accept-docs.accept-text":"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b, \u0447\u0442\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u043f\u0440\u0438\u043d\u044f\u0442\u044c \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442: ","accept-docs.notification":"\u0423\u0432\u0435\u0434\u043e\u043c\u043b\u0435\u043d\u0438\u0435","accept-docs.duplicate":"\u0414\u0430\u043d\u043d\u044b\u0439 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442 \u0431\u044b\u043b \u043f\u0440\u0438\u043d\u044f\u0442 \u0440\u0430\u043d\u0435\u0435","accept-docs.success":"\u0423\u0441\u043f\u0435\u0445","accept-docs.error-text":"\u0412\u043e\u0437\u043d\u0438\u043a\u043b\u0430 \u043d\u0435\u043f\u0440\u0435\u0434\u0432\u0438\u0434\u0435\u043d\u043d\u0430\u044f \u043e\u0448\u0438\u0431\u043a\u0430. \u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435\u0441\u044c \u043a \u0430\u0434\u043c\u0438\u043d\u0438\u0441\u0442\u0440\u0430\u0442\u043e\u0440\u0443 \u0441\u0438\u0441\u0442\u0435\u043c\u044b.","accept-docs.not-accepted-count":"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043d\u0435\u043f\u0440\u0438\u043d\u044f\u0442\u044b\u0445 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u043e\u0432"}')
    },
    "3Cwb": function(e, t, n) {
        "use strict";
        n.r(t),
        n.d(t, "SupportModule", (function() {
            return me
        }
        ));
        var o = n("ofXK")
          , r = n("tyNb")
          , i = n("mrSG")
          , c = n("2Vo4")
          , s = n("XNiG")
          , a = n("VRyK")
          , l = n("l5mm")
          , u = n("itXk")
          , d = n("LRne")
          , h = n("AytR")
          , p = n("lJxs");
        const C = e => {
            const t = new Map
              , n = []
              , o = [];
            return e.forEach(e => {
                var n;
                t.set(e.parentThemeName, {
                    id: e.themeId,
                    name: e.themeName
                }),
                o.push({
                    id: (n = e).themeId,
                    name: n.themeName,
                    parentThemeName: n.parentThemeName
                })
            }
            ),
            t.forEach( (e, t) => {
                n.push({
                    id: t,
                    name: t
                })
            }
            ),
            {
                parentThemes: n,
                themes: o
            }
        }
        ;
        var g = n("fXoL")
          , f = n("tk/3");
        let b = ( () => {
            class e {
                constructor(e) {
                    this._http = e
                }
                getCommunications() {
                    return this._http.get(h.a.urls.baseUrl + "/api/communications/get").pipe(Object(p.a)(e => {
                        return {
                            communicationsCount: (t = e).length,
                            communications: null == t ? void 0 : t.map(e => (e => {
                                var t, n;
                                return {
                                    id: e.id,
                                    parentThemeName: e.pthemeName,
                                    themeName: e.themeName,
                                    description: e.text,
                                    createDate: e.createDt,
                                    answer: e.answer,
                                    answerDt: e.answerDt,
                                    shk: null === (n = null === (t = e.attr) || void 0 === t ? void 0 : t.find(e => "\u0428\u041a \u0442\u043e\u0432\u0430\u0440\u0430" === e.name)) || void 0 === n ? void 0 : n.value
                                }
                            }
                            )(e))
                        };
                        var t
                    }
                    ))
                }
                getCommunicationsThemes() {
                    return this._http.get(h.a.urls.baseUrl + "/api/communications/themes").pipe(Object(p.a)(C))
                }
                saveCommunications(e) {
                    const t = (e => {
                        const t = e && {
                            ThemeId: e.themeId,
                            Text: e.text
                        };
                        return (null == e ? void 0 : e.shk) && (t.Attr = [{
                            Name: "\u0428\u041a \u0442\u043e\u0432\u0430\u0440\u0430",
                            Value: e.shk
                        }]),
                        t
                    }
                    )(e);
                    return this._http.post(h.a.urls.baseUrl + "/api/communications/create", t)
                }
            }
            return e.\u0275fac = function(t) {
                return new (t || e)(g.gc(f.c))
            }
            ,
            e.\u0275prov = g.Sb({
                token: e,
                factory: e.\u0275fac
            }),
            e
        }
        )();
        var m = n("JX91")
          , v = n("eIep")
          , k = n("JIr8")
          , w = n("VfN6")
          , _ = n("lI3o")
          , x = n("3Pt+")
          , M = n("TaO5")
          , y = n("FwiY")
          , S = n("nJia")
          , O = n("C2AL");
        let L = ( () => {
            let e = class {
                constructor(e) {
                    this.fb = e,
                    this.onFilterChange = new g.n,
                    this.form = this.initForm(e)
                }
                ngOnInit() {
                    this.form.valueChanges.pipe(Object(w.b)(this)).subscribe(e => this.onFilterChange.emit(e))
                }
                initForm(e) {
                    const t = e.group({
                        isCancel: [!1, [x.w.required]],
                        isReview: [!1, [x.w.required]]
                    });
                    return t.valueChanges.pipe(Object(w.b)(this)).subscribe(e => this.onFilterChange.emit(e)),
                    t
                }
            }
            ;
            return e.\u0275fac = function(t) {
                return new (t || e)(g.Wb(x.f))
            }
            ,
            e.\u0275cmp = g.Qb({
                type: e,
                selectors: [["support-request-filter"]],
                inputs: {
                    communicationsCount: "communicationsCount"
                },
                outputs: {
                    onFilterChange: "onFilterChange"
                },
                decls: 9,
                vars: 2,
                consts: [[1, "container", 3, "formGroup"], [1, "text"], ["nz-checkbox", "", "formControlName", "isCancel", 1, "checkbox"], ["nz-icon", "", "nzType", "wb-chat", "nz-tooltip", "\u0417\u0430\u043a\u0440\u044b\u0442\u043e"], ["nz-checkbox", "", "formControlName", "isReview", 1, "checkbox"], ["nz-icon", "", "nzType", "wb-time-circle", "nz-tooltip", "\u041d\u0430 \u0440\u0430\u0441\u0441\u043c\u043e\u0442\u0440\u0435\u043d\u0438\u0438"]],
                template: function(e, t) {
                    1 & e && (g.cc(0, "div", 0),
                    g.cc(1, "div", 1),
                    g.Sc(2, "\u041e\u0431\u0440\u0430\u0449\u0435\u043d\u0438\u0439: "),
                    g.cc(3, "span"),
                    g.Sc(4),
                    g.bc(),
                    g.bc(),
                    g.cc(5, "label", 2),
                    g.Xb(6, "i", 3),
                    g.bc(),
                    g.cc(7, "label", 4),
                    g.Xb(8, "i", 5),
                    g.bc(),
                    g.bc()),
                    2 & e && (g.wc("formGroup", t.form),
                    g.Gb(4),
                    g.Tc(t.communicationsCount || 0))
                },
                directives: [x.q, x.i, M.a, x.p, x.h, y.b, O.a, S.d],
                styles: [".container[_ngcontent-%COMP%]{display:flex;align-items:center}.container[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{margin-right:22px;font-size:16px;font-weight:700;letter-spacing:.3px;line-height:24px;color:#262626}.container[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{color:#a3a3a3}.container[_ngcontent-%COMP%]   .checkbox[_ngcontent-%COMP%]{display:flex;align-items:center}.container[_ngcontent-%COMP%]   .checkbox[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:24px}"],
                changeDetection: 0
            }),
            e = Object(i.c)([Object(w.a)()], e),
            e
        }
        )();
        const P = [{
            screenWidth: 2560,
            maxLength: 90
        }, {
            screenWidth: 2e3,
            maxLength: 90
        }, {
            screenWidth: 1760,
            maxLength: 85
        }, {
            screenWidth: 1500,
            maxLength: 70
        }, {
            screenWidth: 1335,
            maxLength: 55
        }, {
            screenWidth: 1260,
            maxLength: 40
        }, {
            screenWidth: 0,
            maxLength: 30
        }];
        var z = n("rMZv")
          , I = n("cQp2")
          , V = n("ta3W")
          , j = n("P0IB");
        function T(e, t) {
            if (1 & e && (g.cc(0, "div", 24),
            g.Sc(1),
            g.bc()),
            2 & e) {
                const e = g.oc().$implicit;
                g.Gb(1),
                g.Uc("\u0428\u041a: ", e.shk, "")
            }
        }
        function H(e, t) {
            1 & e && g.Xb(0, "i", 25)
        }
        function B(e, t) {
            1 & e && g.Xb(0, "i", 26)
        }
        const Z = function(e) {
            return ["/pvz/support-requests", e]
        };
        function F(e, t) {
            if (1 & e && (g.cc(0, "tr", 18),
            g.cc(1, "td"),
            g.Sc(2),
            g.bc(),
            g.cc(3, "td", 19),
            g.Sc(4),
            g.bc(),
            g.cc(5, "td", 19),
            g.Sc(6),
            g.bc(),
            g.cc(7, "td", 19),
            g.Qc(8, T, 2, 1, "div", 20),
            g.Sc(9),
            g.pc(10, "trimLines"),
            g.bc(),
            g.cc(11, "td"),
            g.Sc(12),
            g.bc(),
            g.cc(13, "td", 21),
            g.Qc(14, H, 1, 0, "i", 22),
            g.Qc(15, B, 1, 0, "i", 23),
            g.bc(),
            g.bc()),
            2 & e) {
                const e = t.$implicit
                  , n = g.oc();
                g.wc("routerLink", g.Bc(15, Z, e.id)),
                g.Gb(2),
                g.Tc(e.id),
                g.Gb(1),
                g.wc("nz-tooltip", e.parentThemeName),
                g.Gb(1),
                g.Tc(e.parentThemeName),
                g.Gb(1),
                g.wc("nz-tooltip", e.themeName),
                g.Gb(1),
                g.Tc(e.themeName),
                g.Gb(1),
                g.wc("nz-tooltip", e.description),
                g.Gb(1),
                g.wc("ngIf", e.shk),
                g.Gb(1),
                g.Uc(" ", g.rc(10, 12, e.description, n.breakpoints), " "),
                g.Gb(3),
                g.Tc(e.createDate),
                g.Gb(2),
                g.wc("ngIf", e.answer),
                g.Gb(1),
                g.wc("ngIf", !e.answer)
            }
        }
        function G(e, t) {
            1 & e && (g.cc(0, "tr"),
            g.cc(1, "td", 27),
            g.Xb(2, "app-none-data"),
            g.bc(),
            g.bc())
        }
        function D(e, t) {}
        let R = ( () => {
            class e {
                constructor() {
                    this.breakpoints = P
                }
            }
            return e.\u0275fac = function(t) {
                return new (t || e)
            }
            ,
            e.\u0275cmp = g.Qb({
                type: e,
                selectors: [["support-request-table"]],
                inputs: {
                    communicationsInfo: "communicationsInfo"
                },
                decls: 22,
                vars: 6,
                consts: [[1, "support-request-table", 3, "nzData", "nzHideOnSinglePage", "nzNoResult", "nzPageSize"], ["table", ""], ["nzSort", "ID", "nzSortLabel", "ID", "nzWidth", "10%", 1, "th"], ["nzSort", "parentThemeName", "nzSortLabel", "\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f", "nzWidth", "18%", 1, "th"], ["nzSort", "themeName", "nzSortLabel", "\u0422\u0435\u043c\u0430", "nzWidth", "18%", 1, "th"], ["nzSort", "description", "nzSortLabel", "\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435", "nzWidth", "30%", 1, "th"], ["nzSort", "createDate", "nzSortLabel", "\u0414\u0430\u0442\u0430 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f", "nzWidth", "14%", 1, "th"], ["nzSort", "ID", "nzSortLabel", "\u0421\u0442\u0430\u0442\u0443\u0441", "nzWidth", "10%", 1, "th"], [1, "filters"], ["nzFilter", "ID", "nzPlaceHolder", "\u041d\u0430\u0439\u0442\u0438", "nzWidth", "10%", 1, "filters__th"], ["nzFilter", "parentThemeName", "nzPlaceHolder", "\u041d\u0430\u0439\u0442\u0438", "nzWidth", "18%", 1, "filters__th"], ["nzFilter", "themeName", "nzPlaceHolder", "\u041d\u0430\u0439\u0442\u0438", "nzWidth", "18%", 1, "filters__th"], ["nzFilter", "description", "nzPlaceHolder", "\u041d\u0430\u0439\u0442\u0438", "nzWidth", "30%", 1, "filters__th"], ["nzFilter", "createDate", "nzPlaceHolder", "\u041d\u0430\u0439\u0442\u0438", "nzWidth", "14%", 1, "filters__th"], ["nzWidth", "10%", 1, "filters__th"], [3, "routerLink", 4, "ngFor", "ngForOf"], [4, "ngIf"], ["noneData", ""], [3, "routerLink"], [3, "nz-tooltip"], ["class", "shk", 4, "ngIf"], ["align", "center"], ["class", "icon", "nz-icon", "", "nz-tooltip", "\u0417\u0430\u043a\u0440\u044b\u0442\u043e", "nzType", "wb-chat", 4, "ngIf"], ["class", "icon", "nz-icon", "", "nz-tooltip", "\u041d\u0430 \u0440\u0430\u0441\u0441\u043c\u043e\u0442\u0440\u0435\u043d\u0438\u0438", "nzType", "wb-time-circle", 4, "ngIf"], [1, "shk"], ["nz-icon", "", "nz-tooltip", "\u0417\u0430\u043a\u0440\u044b\u0442\u043e", "nzType", "wb-chat", 1, "icon"], ["nz-icon", "", "nz-tooltip", "\u041d\u0430 \u0440\u0430\u0441\u0441\u043c\u043e\u0442\u0440\u0435\u043d\u0438\u0438", "nzType", "wb-time-circle", 1, "icon"], ["colspan", "5", 1, "border"]],
                template: function(e, t) {
                    if (1 & e && (g.cc(0, "nz-table", 0, 1),
                    g.cc(2, "thead"),
                    g.cc(3, "tr"),
                    g.Xb(4, "th", 2),
                    g.Xb(5, "th", 3),
                    g.Xb(6, "th", 4),
                    g.Xb(7, "th", 5),
                    g.Xb(8, "th", 6),
                    g.Xb(9, "th", 7),
                    g.bc(),
                    g.cc(10, "tr", 8),
                    g.Xb(11, "th", 9),
                    g.Xb(12, "th", 10),
                    g.Xb(13, "th", 11),
                    g.Xb(14, "th", 12),
                    g.Xb(15, "th", 13),
                    g.Xb(16, "th", 14),
                    g.bc(),
                    g.bc(),
                    g.cc(17, "tbody"),
                    g.Qc(18, F, 16, 17, "tr", 15),
                    g.Qc(19, G, 3, 0, "tr", 16),
                    g.bc(),
                    g.bc(),
                    g.Qc(20, D, 0, 0, "ng-template", null, 17, g.Rc)),
                    2 & e) {
                        const e = g.Gc(1)
                          , n = g.Gc(21);
                        g.wc("nzData", null == t.communicationsInfo ? null : t.communicationsInfo.communications)("nzHideOnSinglePage", !0)("nzNoResult", n)("nzPageSize", 20),
                        g.Gb(18),
                        g.wc("ngForOf", e.data),
                        g.Gb(1),
                        g.wc("ngIf", !e.data.length)
                    }
                },
                directives: [z.c, z.j, z.k, z.b, z.h, z.g, I.a, z.e, o.n, o.o, r.d, S.d, y.b, O.a, V.a],
                pipes: [j.a],
                styles: [".support-request-table[_ngcontent-%COMP%]{max-width:1040px;width:100%}.support-request-table[_ngcontent-%COMP%]   .filters__th[_ngcontent-%COMP%]{background:#fff}.support-request-table[_ngcontent-%COMP%]   .th[_ngcontent-%COMP%]{height:56px;font-size:12px;font-weight:700;color:rgba(0,0,0,.85);white-space:nowrap;text-overflow:ellipsis;background:#fafafa}.support-request-table[_ngcontent-%COMP%]   .th[_ngcontent-%COMP%]:hover{background:#f2f2f2}.support-request-table[_ngcontent-%COMP%]   .th[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{padding-left:8px}.support-request-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{cursor:pointer}.support-request-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] > td[_ngcontent-%COMP%]{font-size:14px;color:rgba(0,0,0,.85)}.support-request-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] > td[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{font-size:28px}.shk[_ngcontent-%COMP%]{color:rgba(0,0,0,.55)}"],
                changeDetection: 0
            }),
            e
        }
        )();
        var U = function(e) {
            return e.KOByPollution = "285",
            e
        }({})
          , A = n("OzZK")
          , N = n("zAKX")
          , $ = n("PTRe")
          , E = n("RwU8");
        function X(e, t) {
            if (1 & e) {
                const e = g.dc();
                g.cc(0, "button", 3),
                g.kc("click", (function() {
                    return g.Ic(e),
                    g.oc().openForm()
                }
                )),
                g.Sc(1, "\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u043e\u0431\u0440\u0430\u0449\u0435\u043d\u0438\u0435"),
                g.bc()
            }
        }
        function Q(e, t) {
            if (1 & e && g.Xb(0, "nz-option", 15),
            2 & e) {
                const e = t.$implicit;
                g.wc("nzLabel", e.name)("nzValue", e.id)
            }
        }
        function W(e, t) {
            if (1 & e && g.Xb(0, "nz-option", 15),
            2 & e) {
                const e = t.$implicit;
                g.wc("nzLabel", e.name)("nzValue", e.id)
            }
        }
        function q(e, t) {
            1 & e && g.Xb(0, "input", 16)
        }
        const K = function(e) {
            return {
                color: e
            }
        };
        function Y(e, t) {
            if (1 & e) {
                const e = g.dc();
                g.ac(0),
                g.cc(1, "form", 4),
                g.cc(2, "nz-select", 5),
                g.kc("ngModelChange", (function(t) {
                    return g.Ic(e),
                    g.oc().changeParentTheme(t)
                }
                )),
                g.Qc(3, Q, 1, 2, "nz-option", 6),
                g.bc(),
                g.cc(4, "nz-select", 7),
                g.Qc(5, W, 1, 2, "nz-option", 6),
                g.bc(),
                g.Qc(6, q, 1, 0, "input", 8),
                g.cc(7, "div"),
                g.Xb(8, "textarea", 9, 10),
                g.cc(10, "span", 11),
                g.Sc(11),
                g.bc(),
                g.bc(),
                g.cc(12, "div", 12),
                g.cc(13, "button", 13),
                g.kc("click", (function() {
                    return g.Ic(e),
                    g.oc().cancel()
                }
                )),
                g.Sc(14, "\u041e\u0442\u043c\u0435\u043d\u0438\u0442\u044c"),
                g.bc(),
                g.cc(15, "button", 14),
                g.kc("click", (function() {
                    return g.Ic(e),
                    g.oc().saveRequest()
                }
                )),
                g.Sc(16, "\u0421\u043e\u0437\u0434\u0430\u0442\u044c "),
                g.bc(),
                g.bc(),
                g.bc(),
                g.Zb()
            }
            if (2 & e) {
                const e = g.Gc(9)
                  , t = g.oc();
                g.Gb(1),
                g.wc("formGroup", t.form),
                g.Gb(2),
                g.wc("ngForOf", t.themes.parentThemes),
                g.Gb(2),
                g.wc("ngForOf", t.themes.themes),
                g.Gb(1),
                g.wc("ngIf", t.isNeedShk),
                g.Gb(4),
                g.wc("ngStyle", g.Bc(8, K, e.value.length >= 1e3 ? "red" : "black")),
                g.Gb(1),
                g.Uc(" ", e.value.length, " /1000 "),
                g.Gb(4),
                g.wc("disabled", t.form.invalid)("nzLoading", t.isLoading)
            }
        }
        let J = ( () => {
            let e = class {
                constructor(e) {
                    this.fb = e,
                    this.isLoading = !1,
                    this.isOpenForm = !1,
                    this.onFilterThemes = new g.n,
                    this.onSaveRequest = new g.n,
                    this.onOpenFormChange = new g.n,
                    this.form = this.initForm(e)
                }
                get isNeedShk() {
                    return this.form.get("themeId").value === U.KOByPollution
                }
                changeParentTheme(e) {
                    this.onFilterThemes.emit(e),
                    this.form.controls.themeId.reset()
                }
                openForm() {
                    this.onOpenFormChange.emit(!0)
                }
                cancel() {
                    this.onOpenFormChange.emit(!1),
                    this.form.reset()
                }
                saveRequest() {
                    this.onSaveRequest.emit(this.form.value),
                    this.form.reset()
                }
                initForm(e) {
                    const t = e.group({
                        parentThemeId: ["", [x.w.required]],
                        themeId: ["", [x.w.required]],
                        shk: ["", []],
                        text: ["", [x.w.required, x.w.maxLength(999), x.w.minLength(1)]]
                    });
                    return t.get("themeId").valueChanges.pipe(Object(w.b)(this)).subscribe( () => {
                        const e = t.get("shk");
                        this.isNeedShk ? e.setValidators(x.w.required) : e.clearValidators(),
                        e.updateValueAndValidity()
                    }
                    ),
                    t.get("shk").valueChanges.pipe(Object(w.b)(this)).subscribe(e => {
                        const n = /\D/gi;
                        e && n.test(e) && t.get("shk").setValue(e.replace(n, ""))
                    }
                    ),
                    t
                }
            }
            ;
            return e.\u0275fac = function(t) {
                return new (t || e)(g.Wb(x.f))
            }
            ,
            e.\u0275cmp = g.Qb({
                type: e,
                selectors: [["support-requests-create"]],
                inputs: {
                    parentThemes: "parentThemes",
                    themes: "themes",
                    isLoading: "isLoading",
                    isOpenForm: "isOpenForm"
                },
                outputs: {
                    onFilterThemes: "onFilterThemes",
                    onSaveRequest: "onSaveRequest",
                    onOpenFormChange: "onOpenFormChange"
                },
                decls: 3,
                vars: 2,
                consts: [[1, "container"], ["class", "button", "nz-button", "", 3, "click", 4, "ngIf"], [4, "ngIf"], ["nz-button", "", 1, "button", 3, "click"], [1, "form", 3, "formGroup"], ["formControlName", "parentThemeId", "nzDropdownClassName", "dropdown-communications-theme", "nzPlaceHolder", "\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f", 1, "select", 3, "ngModelChange"], [3, "nzLabel", "nzValue", 4, "ngFor", "ngForOf"], ["formControlName", "themeId", "nzDropdownClassName", "dropdown-communications-theme", "nzPlaceHolder", "\u0422\u0435\u043c\u0430 \u043e\u0431\u0440\u0430\u0449\u0435\u043d\u0438\u044f", 1, "select"], ["nz-input", "", "type", "text", "formControlName", "shk", "nzSize", "large", "placeholder", "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0428\u041a \u0442\u043e\u0432\u0430\u0440\u0430", 4, "ngIf"], ["formControlName", "text", "nz-input", "", 1, "textarea"], ["textAreaElement", ""], [3, "ngStyle"], [1, "block-buttons"], ["nz-button", "", "nzType", "default", 3, "click"], ["nz-button", "", "nzType", "primary", 3, "disabled", "nzLoading", "click"], [3, "nzLabel", "nzValue"], ["nz-input", "", "type", "text", "formControlName", "shk", "nzSize", "large", "placeholder", "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0428\u041a \u0442\u043e\u0432\u0430\u0440\u0430"]],
                template: function(e, t) {
                    1 & e && (g.cc(0, "div", 0),
                    g.Qc(1, X, 2, 0, "button", 1),
                    g.Qc(2, Y, 17, 10, "ng-container", 2),
                    g.bc()),
                    2 & e && (g.Gb(1),
                    g.wc("ngIf", !t.isOpenForm),
                    g.Gb(1),
                    g.wc("ngIf", t.isOpenForm))
                },
                directives: [o.o, A.a, E.a, O.a, x.x, x.q, x.i, N.b, x.p, x.h, o.n, x.d, $.a, o.p, N.a],
                styles: [".container[_ngcontent-%COMP%]{width:395px}.container[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:16px}.container[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]{width:100%;height:56px;border:none;font-size:16px;font-weight:700;letter-spacing:.3px;color:#965eeb;background-color:#f7f7f7}.container[_ngcontent-%COMP%]   .select[_ngcontent-%COMP%]{width:395px}.container[_ngcontent-%COMP%]   .select[_ngcontent-%COMP%]     .ant-select-selector{display:flex;align-items:center;height:40px}.container[_ngcontent-%COMP%]   .select[_ngcontent-%COMP%]     .ant-select-item-option-active:not(.ant-select-item-option-disabled){background-color:rgba(150,94,235,.08)}.container[_ngcontent-%COMP%]   .textarea[_ngcontent-%COMP%]{min-height:100px;border-radius:2px}.container[_ngcontent-%COMP%]   .block-buttons[_ngcontent-%COMP%]{display:flex}.container[_ngcontent-%COMP%]   .block-buttons[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]{width:120px;height:40px}.container[_ngcontent-%COMP%]   .block-buttons[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]:last-of-type{margin-left:8px}"],
                changeDetection: 0
            }),
            e = Object(i.c)([Object(w.a)()], e),
            e
        }
        )();
        function ee(e, t) {
            if (1 & e) {
                const e = g.dc();
                g.cc(0, "section"),
                g.cc(1, "section", 4),
                g.cc(2, "support-request-filter", 5),
                g.kc("onFilterChange", (function(t) {
                    return g.Ic(e),
                    g.oc(2).changeFilter(t)
                }
                )),
                g.bc(),
                g.bc(),
                g.cc(3, "section", 6),
                g.Xb(4, "support-request-table", 7),
                g.cc(5, "support-requests-create", 8),
                g.kc("onFilterThemes", (function(t) {
                    return g.Ic(e),
                    g.oc(2).filterThemesByParentThemeName(t)
                }
                ))("onOpenFormChange", (function(t) {
                    return g.Ic(e),
                    g.oc(2).isOpenFormChange(t)
                }
                ))("onSaveRequest", (function(t) {
                    return g.Ic(e),
                    g.oc(2).saveRequest(t)
                }
                )),
                g.pc(6, "async"),
                g.bc(),
                g.bc(),
                g.bc()
            }
            if (2 & e) {
                const e = g.oc().ngIf
                  , t = g.oc();
                g.Gb(2),
                g.wc("communicationsCount", e.communicationsCount),
                g.Gb(2),
                g.wc("communicationsInfo", e),
                g.Gb(1),
                g.wc("isLoading", t.isLoading)("isOpenForm", t.isOpenForm)("themes", g.qc(6, 5, t.communicationsFilteredThemes$))
            }
        }
        function te(e, t) {
            if (1 & e && (g.cc(0, "div", 9),
            g.cc(1, "div"),
            g.Sc(2),
            g.bc(),
            g.cc(3, "div"),
            g.cc(4, "a", 10),
            g.Sc(5, "WILDBERRIES.RU"),
            g.bc(),
            g.bc(),
            g.bc()),
            2 & e) {
                const e = g.oc(2);
                g.Gb(2),
                g.Uc("\u041e\u0448\u0438\u0431\u043a\u0430: ", e.error, "")
            }
        }
        function ne(e, t) {
            if (1 & e && (g.ac(0),
            g.Qc(1, ee, 7, 7, "section", 2),
            g.Qc(2, te, 6, 1, "ng-template", null, 3, g.Rc),
            g.Zb()),
            2 & e) {
                const e = g.Gc(3)
                  , t = g.oc();
                g.Gb(1),
                g.wc("ngIf", !t.error)("ngIfElse", e)
            }
        }
        let oe = ( () => {
            let e = class {
                constructor(e, t, n, o) {
                    this.supportService = e,
                    this.notificationService = t,
                    this.changeDetectorRef = n,
                    this.datePipe = o,
                    this.filter$ = new c.a({
                        isCancel: !1,
                        isReview: !1
                    }),
                    this.refreshCommunicationsInfo$ = new s.a,
                    this.isLoading = !1,
                    this.isOpenForm = !1,
                    this.error = "",
                    this.communicationsFilteredThemes$ = new c.a({
                        themes: [],
                        parentThemes: []
                    })
                }
                ngOnInit() {
                    this.communicationsThemes$ = this.supportService.getCommunicationsThemes(),
                    this.filterThemesByParentThemeName(""),
                    this.communicationsInfo$ = Object(a.a)(Object(l.a)(3e4), this.refreshCommunicationsInfo$).pipe(Object(m.a)(!0), Object(v.a)( () => Object(u.a)([this.supportService.getCommunications().pipe(Object(k.a)(e => (this.error = e.error.text ? this._cutErrorText(e.error.text) : e.message,
                    Object(d.a)({
                        communicationsCount: 0,
                        communications: []
                    }))), Object(p.a)( ({communicationsCount: e, communications: t}) => (null == t || t.map(e => (e.createDate = this.datePipe.transform(e.createDate, "dd.MM.yyyy"),
                    e)),
                    {
                        communicationsCount: e,
                        communications: t
                    }))), this.filter$]).pipe(Object(p.a)( ([{communications: e},t]) => {
                        const n = (null == e ? void 0 : e.filter(e => this.checkFilters(t, e))) || [];
                        return {
                            communicationsCount: n.length,
                            communications: n
                        }
                    }
                    ))))
                }
                saveRequest(e) {
                    this.isLoading = !0,
                    this.isOpenForm = !0,
                    this.supportService.saveCommunications(e).pipe(Object(k.a)(e => Object(d.a)(e)), Object(w.b)(this)).subscribe(e => {
                        (null == e ? void 0 : e.status) || (this.notificationService.success("\u041e\u0431\u0440\u0430\u0449\u0435\u043d\u0438\u0435 \u0441\u043e\u0437\u0434\u0430\u043d\u043e"),
                        this.refreshCommunicationsInfo$.next(),
                        this.isOpenForm = !1),
                        this.isLoading = !1,
                        this.changeDetectorRef.markForCheck()
                    }
                    )
                }
                filterThemesByParentThemeName(e) {
                    this.communicationsThemes$.pipe(Object(p.a)( ({themes: t, parentThemes: n}) => ({
                        themes: t.filter(t => t.parentThemeName === e),
                        parentThemes: n
                    }))).subscribe(e => {
                        this.communicationsFilteredThemes$.next(e)
                    }
                    )
                }
                changeFilter(e) {
                    this.filter$.next(e)
                }
                isOpenFormChange(e) {
                    this.isOpenForm = e
                }
                checkFilters(e, t) {
                    return e.isReview && !t.answer || e.isCancel && t.answer || !e.isCancel && !e.isReview
                }
                _cutErrorText(e) {
                    if (!e)
                        return "";
                    const t = e.split("");
                    let n = e.search("message");
                    return t.splice(0, n),
                    n = t.findIndex(e => e.includes(":")),
                    t.splice(0, n),
                    n = t.findIndex(e => e.includes('"')),
                    t.splice(0, n + 1),
                    n = t.findIndex(e => e.includes('"')),
                    t.splice(n, t.length),
                    t.join("")
                }
            }
            ;
            return e.\u0275fac = function(t) {
                return new (t || e)(g.Wb(b),g.Wb(_.a),g.Wb(g.h),g.Wb(o.e))
            }
            ,
            e.\u0275cmp = g.Qb({
                type: e,
                selectors: [["app-support-requests"]],
                decls: 4,
                vars: 3,
                consts: [[1, "title"], [4, "ngIf"], [4, "ngIf", "ngIfElse"], ["errorTemplate", ""], [1, "block-filter"], [3, "communicationsCount", "onFilterChange"], [1, "block-requests"], [3, "communicationsInfo"], [1, "block-requests__create-request", 3, "isLoading", "isOpenForm", "themes", "onFilterThemes", "onOpenFormChange", "onSaveRequest"], [1, "error"], ["href", "https://www.wildberries.ru", "target", "_blank"]],
                template: function(e, t) {
                    1 & e && (g.cc(0, "h1", 0),
                    g.Sc(1, "\u041e\u0431\u0440\u0430\u0449\u0435\u043d\u0438\u044f"),
                    g.bc(),
                    g.Qc(2, ne, 4, 2, "ng-container", 1),
                    g.pc(3, "async")),
                    2 & e && (g.Gb(2),
                    g.wc("ngIf", g.qc(3, 1, t.communicationsInfo$)))
                },
                directives: [o.o, L, R, J],
                pipes: [o.b],
                styles: [".title[_ngcontent-%COMP%]{font-family:Lato,Helvetica Neue,Arial,Helvetica,sans-serif;margin-bottom:35px;font-size:28px;font-weight:700;line-height:34px;letter-spacing:.5px;color:#000}.block-filter[_ngcontent-%COMP%]{margin-bottom:16px}.block-requests[_ngcontent-%COMP%]{display:flex}.block-requests__create-request[_ngcontent-%COMP%]{margin-left:24px}.error[_ngcontent-%COMP%]{font-size:18px}"],
                changeDetection: 0
            }),
            e = Object(i.c)([Object(w.a)()], e),
            e
        }
        )();
        function re(e, t) {
            1 & e && (g.ac(0),
            g.cc(1, "div", 4),
            g.Xb(2, "i", 5),
            g.Sc(3, "\u0417\u0430\u043a\u0440\u044b\u0442\u043e"),
            g.bc(),
            g.Zb())
        }
        function ie(e, t) {
            1 & e && (g.cc(0, "div", 6),
            g.Xb(1, "i", 7),
            g.Sc(2, "\u041d\u0430 \u0440\u0430\u0441\u0441\u043c\u043e\u0442\u0440\u0435\u043d\u0438\u0438"),
            g.bc())
        }
        let ce = ( () => {
            class e {
                constructor() {}
                ngOnInit() {}
            }
            return e.\u0275fac = function(t) {
                return new (t || e)
            }
            ,
            e.\u0275cmp = g.Qb({
                type: e,
                selectors: [["support-info-header"]],
                inputs: {
                    communicationsInfo: "communicationsInfo"
                },
                decls: 20,
                vars: 6,
                consts: [[1, "container"], [1, "text"], [4, "ngIf", "ngIfElse"], ["onReview", ""], [1, "status-close"], ["nz-icon", "", "nzType", "wb-chat"], [1, "status-on-review"], ["nz-icon", "", "nzType", "wb-time-circle"]],
                template: function(e, t) {
                    if (1 & e && (g.cc(0, "div", 0),
                    g.cc(1, "div", 1),
                    g.Sc(2, "ID: "),
                    g.cc(3, "span"),
                    g.Sc(4),
                    g.bc(),
                    g.bc(),
                    g.cc(5, "div", 1),
                    g.Sc(6, "\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f: "),
                    g.cc(7, "span"),
                    g.Sc(8),
                    g.bc(),
                    g.bc(),
                    g.cc(9, "div", 1),
                    g.Sc(10, "\u0422\u0435\u043c\u0430: "),
                    g.cc(11, "span"),
                    g.Sc(12),
                    g.bc(),
                    g.bc(),
                    g.cc(13, "div", 1),
                    g.Sc(14, "\u0414\u0430\u0442\u0430 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f: "),
                    g.cc(15, "span"),
                    g.Sc(16),
                    g.bc(),
                    g.bc(),
                    g.Qc(17, re, 4, 0, "ng-container", 2),
                    g.Qc(18, ie, 3, 0, "ng-template", null, 3, g.Rc),
                    g.bc()),
                    2 & e) {
                        const e = g.Gc(19);
                        g.Gb(4),
                        g.Tc(t.communicationsInfo.id),
                        g.Gb(4),
                        g.Tc(t.communicationsInfo.parentThemeName),
                        g.Gb(4),
                        g.Tc(t.communicationsInfo.themeName),
                        g.Gb(4),
                        g.Tc(t.communicationsInfo.createDate),
                        g.Gb(1),
                        g.wc("ngIf", null == t.communicationsInfo ? null : t.communicationsInfo.answer)("ngIfElse", e)
                    }
                },
                directives: [o.o, y.b],
                styles: [".container[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{display:flex;align-items:center}.container[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{margin-right:28px;font-family:Roboto,sans-serif;font-size:14px;color:rgba(0,0,0,.55)}.container[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{margin-left:4px;font-weight:500;color:rgba(0,0,0,.85)}.container[_ngcontent-%COMP%]   .status-close[_ngcontent-%COMP%]{display:flex;align-items:center;font-weight:700;color:#1890ff}.container[_ngcontent-%COMP%]   .status-close[_ngcontent-%COMP%] > i[_ngcontent-%COMP%]{margin-right:4px;font-size:20px}.container[_ngcontent-%COMP%]   .status-on-review[_ngcontent-%COMP%]{display:flex;align-items:center;font-weight:700;color:#f90}.container[_ngcontent-%COMP%]   .status-on-review[_ngcontent-%COMP%] > i[_ngcontent-%COMP%]{margin-right:4px;font-size:20px}"],
                changeDetection: 0
            }),
            e
        }
        )();
        function se(e, t) {
            if (1 & e && (g.cc(0, "div", 4),
            g.Sc(1),
            g.bc()),
            2 & e) {
                const e = g.oc();
                g.Gb(1),
                g.Uc("\u0428\u041a: ", e.communicationsInfo.shk, "")
            }
        }
        function ae(e, t) {
            if (1 & e && (g.ac(0),
            g.Xb(1, "div", 5),
            g.cc(2, "div", 6),
            g.cc(3, "div", 7),
            g.Sc(4),
            g.pc(5, "date"),
            g.bc(),
            g.cc(6, "div", 8),
            g.Sc(7),
            g.bc(),
            g.bc(),
            g.Zb()),
            2 & e) {
                const e = g.oc();
                g.Gb(4),
                g.Tc(g.rc(5, 2, e.communicationsInfo.answerDt, "dd.MM.yyyy HH:mm:ss")),
                g.Gb(3),
                g.Tc(e.communicationsInfo.answer)
            }
        }
        let le = ( () => {
            class e {
                constructor() {}
                ngOnInit() {}
            }
            return e.\u0275fac = function(t) {
                return new (t || e)
            }
            ,
            e.\u0275cmp = g.Qb({
                type: e,
                selectors: [["support-info-card"]],
                inputs: {
                    communicationsInfo: "communicationsInfo"
                },
                decls: 5,
                vars: 3,
                consts: [[1, "container"], ["class", "shk", 4, "ngIf"], [1, "request"], [4, "ngIf"], [1, "shk"], [1, "separator"], [1, "answer"], [1, "date"], [1, "text"]],
                template: function(e, t) {
                    1 & e && (g.cc(0, "div", 0),
                    g.Qc(1, se, 2, 1, "div", 1),
                    g.cc(2, "div", 2),
                    g.Sc(3),
                    g.bc(),
                    g.Qc(4, ae, 8, 5, "ng-container", 3),
                    g.bc()),
                    2 & e && (g.Gb(1),
                    g.wc("ngIf", t.communicationsInfo.shk),
                    g.Gb(2),
                    g.Tc(t.communicationsInfo.description),
                    g.Gb(1),
                    g.wc("ngIf", null == t.communicationsInfo ? null : t.communicationsInfo.answer))
                },
                directives: [o.o],
                pipes: [o.e],
                styles: [".container[_ngcontent-%COMP%]{max-width:800px;width:100%}.container[_ngcontent-%COMP%]   .shk[_ngcontent-%COMP%]{margin-bottom:10px;font-family:Roboto,sans-serif;font-size:14px;font-weight:500;line-height:20px;color:rgba(0,0,0,.85)}.container[_ngcontent-%COMP%]   .request[_ngcontent-%COMP%]{font-size:16px;color:rgba(0,0,0,.85);letter-spacing:.5px;line-height:24px}.container[_ngcontent-%COMP%]   .separator[_ngcontent-%COMP%]{margin:20px 0;border-bottom:1px solid rgba(0,0,0,.08)}.container[_ngcontent-%COMP%]   .answer[_ngcontent-%COMP%]{padding:12px 16px;border-radius:2px;background-color:rgba(230,247,255,.52)}.container[_ngcontent-%COMP%]   .answer[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%]{padding-bottom:8px;font-size:14px;line-height:20px;color:rgba(24,144,255,.85)}.container[_ngcontent-%COMP%]   .answer[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{font-size:16px;color:#000;letter-spacing:.5px;line-height:24px}"],
                changeDetection: 0
            }),
            e
        }
        )();
        function ue(e, t) {
            if (1 & e && (g.ac(0),
            g.cc(1, "section", 3),
            g.Xb(2, "support-info-header", 4),
            g.bc(),
            g.cc(3, "section"),
            g.Xb(4, "support-info-card", 4),
            g.bc(),
            g.Zb()),
            2 & e) {
                const e = t.ngIf;
                g.Gb(2),
                g.wc("communicationsInfo", e),
                g.Gb(2),
                g.wc("communicationsInfo", e)
            }
        }
        const de = [{
            path: "",
            component: oe
        }, {
            path: ":id",
            component: ( () => {
                class e {
                    constructor(e, t) {
                        this.activatedRoute = e,
                        this.supportService = t
                    }
                    ngOnInit() {
                        const {id: e} = this.activatedRoute.snapshot.params;
                        this.communicationsInfo$ = this.supportService.getCommunications().pipe(Object(p.a)(t => t.communications.find(t => t.id === +e)))
                    }
                }
                return e.\u0275fac = function(t) {
                    return new (t || e)(g.Wb(r.a),g.Wb(b))
                }
                ,
                e.\u0275cmp = g.Qb({
                    type: e,
                    selectors: [["app-support-info"]],
                    decls: 5,
                    vars: 3,
                    consts: [["routerLink", "/pvz/support-requests", 1, "link"], ["nz-icon", "", "nzType", "arrow-left"], [4, "ngIf"], [1, "block-header"], [3, "communicationsInfo"]],
                    template: function(e, t) {
                        1 & e && (g.cc(0, "div", 0),
                        g.Xb(1, "i", 1),
                        g.Sc(2, " \u041d\u0430\u0437\u0430\u0434\n"),
                        g.bc(),
                        g.Qc(3, ue, 5, 2, "ng-container", 2),
                        g.pc(4, "async")),
                        2 & e && (g.Gb(3),
                        g.wc("ngIf", g.qc(4, 1, t.communicationsInfo$)))
                    },
                    directives: [r.d, y.b, o.o, ce, le],
                    pipes: [o.b],
                    styles: [".link[_ngcontent-%COMP%]{display:flex;align-items:center;margin-bottom:24px;font-size:14px;color:#965eeb;cursor:pointer}.link[_ngcontent-%COMP%] > i[_ngcontent-%COMP%]{margin-right:8px;font-size:16px}.block-header[_ngcontent-%COMP%]{margin-bottom:24px}"],
                    changeDetection: 0
                }),
                e
            }
            )()
        }];
        let he = ( () => {
            class e {
            }
            return e.\u0275mod = g.Ub({
                type: e
            }),
            e.\u0275inj = g.Tb({
                factory: function(t) {
                    return new (t || e)
                },
                imports: [[r.g.forChild(de)], r.g]
            }),
            e
        }
        )();
        var pe = n("rDF6")
          , Ce = n("PCNd")
          , ge = n("WXh7");
        let fe = ( () => {
            class e {
            }
            return e.\u0275mod = g.Ub({
                type: e
            }),
            e.\u0275inj = g.Tb({
                factory: function(t) {
                    return new (t || e)
                },
                providers: [b],
                imports: [[o.c, z.d, pe.a, y.c, Ce.a, S.b, ge.a, o.c, A.c, N.c, $.d, x.u, M.b, r.g]]
            }),
            e
        }
        )()
          , be = ( () => {
            class e {
            }
            return e.\u0275mod = g.Ub({
                type: e
            }),
            e.\u0275inj = g.Tb({
                factory: function(t) {
                    return new (t || e)
                },
                imports: [[o.c, y.c, r.g]]
            }),
            e
        }
        )()
          , me = ( () => {
            class e {
            }
            return e.\u0275mod = g.Ub({
                type: e
            }),
            e.\u0275inj = g.Tb({
                factory: function(t) {
                    return new (t || e)
                },
                imports: [[o.c, he, fe, be]]
            }),
            e
        }
        )()
    },
    "3G0t": function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return r
        }
        ));
        var o = n("fXoL");
        let r = ( () => {
            class e {
                constructor() {}
                set(e, t) {
                    localStorage.setItem(e, JSON.stringify(t))
                }
                get(e) {
                    return JSON.parse(localStorage.getItem(e))
                }
                remove(e) {
                    localStorage.removeItem(e)
                }
                handleStorageEventForMultiTabs(e, t) {
                    e.key !== t || this.get(t) || this.set(t, !0)
                }
            }
            return e.\u0275fac = function(t) {
                return new (t || e)
            }
            ,
            e.\u0275prov = o.Sb({
                token: e,
                factory: e.\u0275fac,
                providedIn: "root"
            }),
            e
        }
        )()
    },
    "8ou0": function(e, t, n) {
        "use strict";
        function o(e) {
            return (t, n) => {
                let o;
                window.addEventListener("resize", t => {
                    o = window.innerWidth < e.width
                }
                ),
                Object.defineProperty(t, n, {
                    get: () => o,
                    set(t) {
                        o = window.innerWidth < e.width
                    }
                })
            }
        }
        n.d(t, "a", (function() {
            return o
        }
        ))
    },
    "9D+I": function(e, t, n) {
        "use strict";
        n.d(t, "b", (function() {
            return o
        }
        )),
        n.d(t, "a", (function() {
            return r
        }
        ));
        var o = function(e) {
            return e[e.shelf = 0] = "shelf",
            e[e.cell = 1] = "cell",
            e[e.returnBox = 2] = "returnBox",
            e[e.incomingBox = 3] = "incomingBox",
            e[e.courier = 4] = "courier",
            e
        }({})
          , r = function(e) {
            return e[e.TransferToOffice = 1] = "TransferToOffice",
            e[e.TransferFromOffice = 2] = "TransferFromOffice",
            e[e.Place = 3] = "Place",
            e[e.Courier = 4] = "Courier",
            e[e.Wavebreaker = 6] = "Wavebreaker",
            e[e.ReturnBox = 7] = "ReturnBox",
            e[e.Stock = 10] = "Stock",
            e[e.StockOrdered = 11] = "StockOrdered",
            e
        }({})
    },
    AY4b: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return s
        }
        ));
        var o = n("AytR")
          , r = n("QYs/")
          , i = n("fXoL")
          , c = n("tk/3");
        let s = ( () => {
            class e {
                constructor(e) {
                    this.http = e
                }
                getLostReports() {
                    return this.http.post(o.a.urls.baseUrl + "/api/storage/report-lost", null)
                }
                getBoxItems(e) {
                    return this.http.get(`${o.a.urls.baseUrl}/api/storage/in-box/${e}`)
                }
                moveToBox(e, t) {
                    return this.http.post(o.a.urls.baseUrl + "/api/storage/v2/move-to-box", {
                        boxId: e,
                        itemShk: Object(r.a)(t)
                    })
                }
                move(e, t, n) {
                    return this.http.post(`${o.a.urls.baseUrl}/api/storage/move?shk=${encodeURIComponent(e)}&currentPlaceId=${t}&currentWbCellId=${n}`, null)
                }
                deleteDoc(e, t, n) {
                    return this.http.post(o.a.urls.baseUrl + "/api/storage/delete-doc", {
                        docId: e,
                        docType: t,
                        boxId: n
                    })
                }
                getProductInfo(e) {
                    return console.log(e),
                    this.http.get(`${o.a.urls.baseUrl}/api/storage/find?input=${encodeURIComponent(e)}`)
                }
                sendDefectProducts(e) {
                    return this.http.post(o.a.urls.baseUrl + "/api/storage/v2/put-defect-shks", e)
                }
            }
            return e.\u0275fac = function(t) {
                return new (t || e)(i.gc(c.c))
            }
            ,
            e.\u0275prov = i.Sb({
                token: e,
                factory: e.\u0275fac,
                providedIn: "root"
            }),
            e
        }
        )()
    },
    AytR: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return o
        }
        ));
        const o = {
            production: !0,
            npos: !1,
            lang: "ru",
            urls: {
                baseUrl: "",
                authServer: "",
                redmineApi: "",
                pvzLogs: "https://pvz-logs.wildberries.ru",
                webAnalytics: "https://web-analytics.wildberries.ru"
            }
        }
    },
    BWwi: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return s
        }
        ));
        var o = n("ofXK")
          , r = n("FwiY")
          , i = n("fXoL");
        let c = ( () => {
            class e {
            }
            return e.\u0275mod = i.Ub({
                type: e
            }),
            e.\u0275inj = i.Tb({
                factory: function(t) {
                    return new (t || e)
                },
                imports: [[o.c, r.c]]
            }),
            e
        }
        )()
          , s = ( () => {
            class e {
            }
            return e.\u0275mod = i.Ub({
                type: e
            }),
            e.\u0275inj = i.Tb({
                factory: function(t) {
                    return new (t || e)
                },
                imports: [[o.c, c]]
            }),
            e
        }
        )()
    },
    "BX+W": function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return x
        }
        ));
        var o = n("fXoL")
          , r = n("SyKt")
          , i = n("POlk")
          , c = n("lI3o")
          , s = n("LW3/")
          , a = n("ofXK")
          , l = n("3Pt+")
          , u = n("OzZK")
          , d = n("PTRe")
          , h = n("TaO5")
          , p = n("RwU8")
          , C = n("C2AL");
        let g = ( () => {
            class e {
                constructor(e) {
                    this.el = e
                }
                ngAfterContentInit() {
                    setTimeout( () => {
                        this.el.nativeElement.focus()
                    }
                    , 500)
                }
            }
            return e.\u0275fac = function(t) {
                return new (t || e)(o.Wb(o.l))
            }
            ,
            e.\u0275dir = o.Rb({
                type: e,
                selectors: [["", "appAutoFocus", ""]],
                inputs: {
                    appAutoFocus: "appAutoFocus"
                }
            }),
            e
        }
        )();
        const f = ["inputExise"];
        function b(e, t) {
            if (1 & e && (o.cc(0, "div", 8),
            o.Sc(1),
            o.bc()),
            2 & e) {
                const e = o.oc(2);
                o.Gb(1),
                o.Tc(e.title)
            }
        }
        function m(e, t) {
            if (1 & e && (o.cc(0, "div"),
            o.Sc(1),
            o.bc()),
            2 & e) {
                const e = o.oc(2);
                o.Gb(1),
                o.Tc(e.description)
            }
        }
        function v(e, t) {
            if (1 & e) {
                const e = o.dc();
                o.cc(0, "div"),
                o.cc(1, "div", 9),
                o.Sc(2),
                o.bc(),
                o.cc(3, "input", 10, 11),
                o.kc("ngModelChange", (function(t) {
                    return o.Ic(e),
                    o.oc(2).excise = t
                }
                ))("keyup.enter", (function() {
                    return o.Ic(e),
                    o.oc(2).set()
                }
                ))("keydown", (function(t) {
                    return o.Ic(e),
                    o.oc(2).collectShkString(t)
                }
                )),
                o.bc(),
                o.cc(5, "div", 12),
                o.cc(6, "label", 13),
                o.kc("ngModelChange", (function() {
                    return o.Ic(e),
                    o.oc(2).changeExciseState()
                }
                )),
                o.Sc(7, " \u0410\u043a\u0446\u0438\u0437 \u043e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442 "),
                o.bc(),
                o.bc(),
                o.bc()
            }
            if (2 & e) {
                const e = o.oc(2);
                o.Gb(2),
                o.Tc(e.placeholderText),
                o.Gb(1),
                o.wc("placeholder", e.placeholderText)("ngModel", e.excise)
            }
        }
        const k = function(e, t, n) {
            return {
                height: e,
                width: t,
                top: n
            }
        };
        function w(e, t) {
            if (1 & e) {
                const e = o.dc();
                o.cc(0, "div", 2),
                o.Qc(1, b, 2, 1, "div", 3),
                o.cc(2, "div", 4),
                o.Qc(3, m, 2, 1, "div", 5),
                o.Qc(4, v, 8, 3, "div", 5),
                o.bc(),
                o.cc(5, "dib", 6),
                o.cc(6, "button", 7),
                o.kc("click", (function() {
                    return o.Ic(e),
                    o.oc().set()
                }
                )),
                o.Sc(7, "Ok"),
                o.bc(),
                o.bc(),
                o.bc()
            }
            if (2 & e) {
                const e = o.oc();
                o.wc("formGroup", e.form)("ngStyle", o.Dc(6, k, e.height + "px", e.width + "px", "calc(50vh - " + e.height / 2 + "px)")),
                o.Gb(1),
                o.wc("ngIf", e.title),
                o.Gb(2),
                o.wc("ngIf", e.description),
                o.Gb(1),
                o.wc("ngIf", e.haveInputField),
                o.Gb(2),
                o.wc("disabled", !e.disabledBtn())
            }
        }
        function _(e, t) {
            1 & e && o.Xb(0, "div", 14)
        }
        let x = ( () => {
            class e {
                constructor(e, t, n, r) {
                    this.audioPlayerService = e,
                    this.wavebreakerService = t,
                    this.notificationsService = n,
                    this.dataMatrixCollectionService = r,
                    this.isOpen = !1,
                    this.title = "",
                    this.haveInputField = !1,
                    this.inputValue = "",
                    this.description = "",
                    this.type = null,
                    this.placeholderText = "",
                    this.height = 200,
                    this.width = 400,
                    this.isClosed = new o.n
                }
                ngOnInit() {
                    this.excise = ""
                }
                set() {
                    this.wavebreakerService.checkExcise(this.form.get("shk").value, this.excise, this.form.get("checkBoxValue").value).subscribe(e => {
                        if (this.excise = "",
                        e && e.error)
                            return this.notificationsService.error(e.error.message),
                            this.form.get("saleMode").value || this.audioPlayerService.audioPlayer$.next(["error.mp3"]),
                            void this.inputText.nativeElement.focus();
                        this.notificationsService.success("\u0410\u043a\u0446\u0438\u0437 \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d"),
                        this.form.get("result").setValue(1),
                        this.closeModal()
                    }
                    , () => {
                        this.notificationsService.error("\u0412\u043e\u0437\u043d\u0438\u043a\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430"),
                        this.form.get("saleMode").value || this.audioPlayerService.audioPlayer$.next(["error.mp3"]),
                        this.excise = "",
                        this.inputText.nativeElement.focus()
                    }
                    )
                }
                closeModal() {
                    this.isClosed.emit(!0)
                }
                changeExciseState() {
                    this.form.get("checkBoxValue").value ? (this.form.get("inputValue").disable(),
                    this.excise = "") : (this.form.get("inputValue").enable(),
                    this.excise = "",
                    this.inputText.nativeElement.focus())
                }
                disabledBtn() {
                    return this.form.get("checkBoxValue").value || this.excise
                }
                collectShkString(e) {
                    this.excise += this.dataMatrixCollectionService.collectShkString(e)
                }
            }
            return e.\u0275fac = function(t) {
                return new (t || e)(o.Wb(r.a),o.Wb(i.a),o.Wb(c.a),o.Wb(s.a))
            }
            ,
            e.\u0275cmp = o.Qb({
                type: e,
                selectors: [["app-custom-modal"]],
                viewQuery: function(e, t) {
                    var n;
                    1 & e && o.Yc(f, !0),
                    2 & e && o.Fc(n = o.lc()) && (t.inputText = n.first)
                },
                inputs: {
                    isOpen: "isOpen",
                    title: "title",
                    haveInputField: "haveInputField",
                    inputValue: "inputValue",
                    description: "description",
                    type: "type",
                    placeholderText: "placeholderText",
                    height: "height",
                    width: "width",
                    form: "form"
                },
                outputs: {
                    isClosed: "isClosed"
                },
                features: [o.Fb([s.a])],
                decls: 2,
                vars: 2,
                consts: [["class", "modal-container", 3, "formGroup", "ngStyle", 4, "ngIf"], ["class", "block-screen", 4, "ngIf"], [1, "modal-container", 3, "formGroup", "ngStyle"], ["class", "title", 4, "ngIf"], [1, "main-container"], [4, "ngIf"], [1, "buttons-container"], ["nz-button", "", "nzType", "primary", 3, "disabled", "click"], [1, "title"], [1, "input-title"], ["nz-input", "", "appAutoFocus", "", "formControlName", "inputValue", 1, "shk-input", 3, "placeholder", "ngModel", "ngModelChange", "keyup.enter", "keydown"], ["inputExise", ""], [1, "checkbox-container"], ["nz-checkbox", "", "formControlName", "checkBoxValue", 3, "ngModelChange"], [1, "block-screen"]],
                template: function(e, t) {
                    1 & e && (o.Qc(0, w, 8, 10, "div", 0),
                    o.Qc(1, _, 1, 0, "div", 1)),
                    2 & e && (o.wc("ngIf", t.isOpen),
                    o.Gb(1),
                    o.wc("ngIf", t.isOpen))
                },
                directives: [a.o, l.q, l.i, a.p, u.a, p.a, C.a, d.a, l.d, g, l.p, l.h, h.a],
                styles: [".block-screen[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.4);height:100vh;left:0;position:fixed;top:0;width:100vw;z-index:10}.modal-container[_ngcontent-%COMP%]{background-color:#fff;border-radius:5px;box-shadow:0 0 10px rgba(0,0,0,.5);left:0;margin:0 auto;position:fixed;right:0;z-index:15}.modal-container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{border-bottom:1px solid #e8e8e8;font-size:16px;font-weight:700;padding:16px 24px}.modal-container[_ngcontent-%COMP%]   .main-container[_ngcontent-%COMP%]{padding:24px}.modal-container[_ngcontent-%COMP%]   .main-container[_ngcontent-%COMP%]   .checkbox-container[_ngcontent-%COMP%]{display:flex;margin-top:16px}.modal-container[_ngcontent-%COMP%]   .buttons-container[_ngcontent-%COMP%]{border-top:1px solid #e8e8e8;display:block;padding:11px 24px;text-align:right;width:100%}.input-title[_ngcontent-%COMP%]{display:none;color:#965eeb;margin-bottom:8px}@media screen and (max-width:1023px){.input-title[_ngcontent-%COMP%]{display:unset}.shk-input[_ngcontent-%COMP%]{margin-top:8px}.buttons-container[_ngcontent-%COMP%]{border-top:none!important}.shk-input[_ngcontent-%COMP%]::-webkit-input-placeholder{color:transparent!important}.shk-input[_ngcontent-%COMP%]:-moz-placeholder, .shk-input[_ngcontent-%COMP%]::-moz-placeholder{color:transparent!important}.modal-container[_ngcontent-%COMP%]{height:max-content!important}.modal-container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{color:#000;font-size:20px;border-bottom:none;padding:24px 0 0 32px}.modal-container[_ngcontent-%COMP%]   .main-container[_ngcontent-%COMP%]{padding:24px 32px}}"]
            }),
            e
        }
        )()
    },
    C1qE: function(e, t, n) {
        "use strict";
        n.d(t, "c", (function() {
            return o
        }
        )),
        n.d(t, "a", (function() {
            return r
        }
        )),
        n.d(t, "b", (function() {
            return i
        }
        ));
        const o = 3e4
          , r = 3e4
          , i = 6e5
    },
    DrIY: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return o
        }
        ));
        const o = [{
            name: "barcode-back",
            theme: "outline",
            icon: '<svg viewBox="0 0 24 24"><path d="M20 9.478V6C20 4.895 19.105 4 18 4H14.522" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M8.478 4H5C3.895 4 3 4.895 3 6V9.478" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M3 14.5225V18.0005C3 19.1055 3.895 20.0005 5 20.0005H8.478" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M10.035 15.9655C10.055 15.9855 10.055 16.0165 10.035 16.0365C10.015 16.0565 9.98401 16.0565 9.96401 16.0365C9.94401 16.0165 9.94401 15.9855 9.96401 15.9655C9.98401 15.9455 10.016 15.9455 10.035 15.9655" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M7 8V16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M13 8V11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M10 8V13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M16 8V10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M16 20H17.5C18.881 20 20 18.881 20 17.5V17.5C20 16.119 18.881 15 17.5 15H13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M15 17L13 15L15 13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>'
        }, {
            name: "cell",
            theme: "outline",
            icon: '<svg viewBox="0 0 24 24"><path d="M6.66699 4.66699V19.3337" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/><path d="M17.3336 19.334L17.3336 4.66732" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/><path d="M19.3336 17.334H4.66695" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/><path d="M19.3336 6.66699L4.66695 6.66699" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/><mask id="cell" fill="white"><rect x="8.66699" y="8.66699" width="6.66667" height="6.66667" rx="1"/></mask><rect x="8.66699" y="8.66699" width="6.66667" height="6.66667" rx="1" stroke="currentColor" stroke-width="2.6" mask="url(#cell)" fill="none"/></svg>'
        }, {
            name: "scan",
            theme: "outline",
            icon: '<svg width="1em" height="1em" viewBox="0 0 26 26"><path d="M7.99791 22.0037H6.9975C5.33995 22.0037 3.99625 20.66 3.99625 19.0025V18.0021" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\' +\n<path d="M18.0021 3.99625H19.0025C20.66 3.99625 22.0037 5.33995 22.0037 6.9975V7.99791" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\' +\n<path d="M3.99625 7.99791V6.9975C3.99625 5.33995 5.33995 3.99625 6.9975 3.99625H7.99791" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\' +\n<path d="M22.0037 18.0021V19.0025C22.0037 20.66 20.66 22.0037 19.0025 22.0037H18.0021" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\' +\n<path d="M4.99666 13H21.0033" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\' +\n</svg>'
        }, {
            name: "add-card",
            theme: "outline",
            icon: '<svg viewBox="0 0 24 24"><path d="M21.5001 14.6904V8.69043C21.5001 5.92943 19.2611 3.69043 16.5001 3.69043H8.50012C5.73912 3.69043 3.50012 5.92943 3.50012 8.69043V16.6904C3.50012 19.4514 5.73912 21.6904 8.50012 21.6904H14.5001" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M21.5001 14.6904V16.6904C21.5001 19.4514 19.2611 21.6904 16.5001 21.6904H14.5001" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M15.5001 21.6904V20.6904C15.5001 17.9294 17.7391 15.6904 20.5001 15.6904H21.5001" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M10.5001 12.6904H14.5001" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M12.5001 14.6904V10.6904" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>'
        }, {
            name: "scan-shk",
            theme: "outline",
            icon: '<svg viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M18.6296 19.4401C18.4646 19.4535 18.2865 19.4634 18.0918 19.4707C17.7639 19.4829 17.5001 19.7485 17.5001 20.0767C17.5001 20.4113 17.774 20.6828 18.1084 20.6708C19.1056 20.6351 19.7656 20.5351 20.3161 20.2546C21.0687 19.8711 21.6807 19.2592 22.0642 18.5065C22.4297 17.789 22.4888 16.8856 22.4983 15.2917C22.5003 14.9601 22.2311 14.6906 21.8995 14.6906C21.5683 14.6906 21.3002 14.959 21.2982 15.2902C21.2944 15.9182 21.2832 16.4094 21.2496 16.82C21.2012 17.4128 21.1124 17.7313 20.9949 17.9617C20.7265 18.4886 20.2982 18.9169 19.7713 19.1854C19.5408 19.3028 19.2224 19.3916 18.6296 19.4401ZM3.10074 9.69057C3.43193 9.69057 3.70004 9.42208 3.70203 9.0909C3.70582 8.46295 3.71709 7.97173 3.75064 7.56109C3.79907 6.96829 3.88788 6.64985 4.00531 6.41939C4.27376 5.89254 4.7021 5.46419 5.22896 5.19575C5.45942 5.07832 5.77786 4.98951 6.37066 4.94108C6.53568 4.92759 6.71371 4.91771 6.90841 4.91046C7.23637 4.89825 7.50013 4.63261 7.50013 4.30442C7.50013 3.96983 7.22627 3.69838 6.89189 3.71034C5.89462 3.74602 5.23466 3.84605 4.68417 4.12654C3.93152 4.51003 3.3196 5.12196 2.9361 5.8746C2.57052 6.5921 2.51149 7.49554 2.50196 9.08944C2.49998 9.42102 2.76916 9.69057 3.10074 9.69057ZM3.10074 14.6906C2.76916 14.6906 2.49998 14.9601 2.50196 15.2917C2.51149 16.8856 2.57052 17.789 2.9361 18.5065C3.3196 19.2592 3.93152 19.8711 4.68417 20.2546C5.23466 20.5351 5.89462 20.6351 6.89189 20.6708C7.22627 20.6828 7.50013 20.4113 7.50013 20.0767C7.50013 19.7485 7.23637 19.4829 6.90841 19.4707C6.71372 19.4634 6.53568 19.4535 6.37066 19.4401C5.77786 19.3916 5.45942 19.3028 5.22896 19.1854C4.7021 18.9169 4.27376 18.4886 4.00531 17.9617C3.88788 17.7313 3.79907 17.4128 3.75064 16.82C3.71709 16.4094 3.70582 15.9182 3.70203 15.2902C3.70004 14.959 3.43193 14.6906 3.10074 14.6906ZM21.8995 9.69057C21.5683 9.69057 21.3002 9.42208 21.2982 9.0909C21.2944 8.46295 21.2832 7.97173 21.2496 7.56109C21.2012 6.96829 21.1124 6.64985 20.9949 6.41939C20.7265 5.89254 20.2982 5.46419 19.7713 5.19575C19.5408 5.07832 19.2224 4.98951 18.6296 4.94108C18.4646 4.92759 18.2865 4.91771 18.0918 4.91046C17.7639 4.89825 17.5001 4.63261 17.5001 4.30442C17.5001 3.96983 17.774 3.69838 18.1084 3.71034C19.1056 3.74602 19.7656 3.84605 20.3161 4.12654C21.0687 4.51003 21.6807 5.12196 22.0642 5.8746C22.4297 6.5921 22.4888 7.49554 22.4983 9.08944C22.5003 9.42102 22.2311 9.69057 21.8995 9.69057Z" fill="currentColor"/><path d="M6.5658 9.69043C6.73149 9.69043 6.8658 9.82474 6.8658 9.99043V14.3146C6.8658 14.4803 7.00012 14.6146 7.1658 14.6146H8.46539C8.63108 14.6146 8.76539 14.4803 8.76539 14.3146V9.99043C8.76539 9.82474 8.8997 9.69043 9.06539 9.69043H9.83107C9.99676 9.69043 10.1311 9.82474 10.1311 9.99043V14.3146C10.1311 14.4803 10.2654 14.6146 10.4311 14.6146H11.7363C11.902 14.6146 12.0363 14.4803 12.0363 14.3146V9.99043C12.0363 9.82474 12.1706 9.69043 12.3363 9.69043H13.0963C13.262 9.69043 13.3963 9.82474 13.3963 9.99043V15.3904C13.3963 15.5561 13.262 15.6904 13.0963 15.6904H5.80012C5.63444 15.6904 5.50012 15.5561 5.50012 15.3904V9.99043C5.50012 9.82474 5.63444 9.69043 5.80012 9.69043H6.5658Z" fill="currentColor"/><path d="M17.1278 13.4433C17.0716 13.3641 16.9804 13.317 16.8833 13.317H16.6469C16.4812 13.317 16.3469 13.4514 16.3469 13.617V15.3904C16.3469 15.5561 16.2126 15.6904 16.0469 15.6904H15.2812C15.1155 15.6904 14.9812 15.5561 14.9812 15.3904V9.99043C14.9812 9.82474 15.1155 9.69043 15.2812 9.69043H16.0469C16.2126 9.69043 16.3469 9.82474 16.3469 9.99043V11.786C16.3469 11.9517 16.4812 12.086 16.6469 12.086H16.7922C16.89 12.086 16.9817 12.0383 17.0378 11.9583L18.539 9.81815C18.5952 9.73809 18.6869 9.69043 18.7846 9.69043H19.7074C19.956 9.69043 20.0967 9.97531 19.9457 10.1727L18.2564 12.381C18.1742 12.4884 18.1741 12.6375 18.256 12.7451L20.133 15.2086C20.2835 15.4061 20.1427 15.6904 19.8944 15.6904H18.8791C18.7819 15.6904 18.6908 15.6434 18.6345 15.5642L17.1278 13.4433Z" fill="currentColor"/></svg>'
        }, {
            name: "scan-strk",
            theme: "outline",
            icon: '<svg viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M18.6296 19.4401C18.4646 19.4535 18.2865 19.4634 18.0918 19.4707C17.7639 19.4829 17.5001 19.7485 17.5001 20.0767C17.5001 20.4113 17.774 20.6828 18.1084 20.6708C19.1056 20.6351 19.7656 20.5351 20.3161 20.2546C21.0687 19.8711 21.6807 19.2592 22.0642 18.5065C22.4297 17.789 22.4888 16.8856 22.4983 15.2917C22.5003 14.9601 22.2311 14.6906 21.8995 14.6906C21.5683 14.6906 21.3002 14.959 21.2982 15.2902C21.2944 15.9182 21.2832 16.4094 21.2496 16.82C21.2012 17.4128 21.1124 17.7313 20.9949 17.9617C20.7265 18.4886 20.2982 18.9169 19.7713 19.1854C19.5408 19.3028 19.2224 19.3916 18.6296 19.4401ZM3.10074 9.69057C3.43193 9.69057 3.70004 9.42208 3.70203 9.0909C3.70582 8.46295 3.71709 7.97173 3.75064 7.56109C3.79907 6.96829 3.88788 6.64985 4.00531 6.41939C4.27376 5.89254 4.7021 5.46419 5.22896 5.19575C5.45942 5.07832 5.77786 4.98951 6.37066 4.94108C6.53568 4.92759 6.71371 4.91771 6.90841 4.91046C7.23637 4.89825 7.50013 4.63261 7.50013 4.30442C7.50013 3.96983 7.22627 3.69838 6.89189 3.71034C5.89462 3.74602 5.23466 3.84605 4.68417 4.12654C3.93152 4.51003 3.3196 5.12196 2.9361 5.8746C2.57052 6.5921 2.51149 7.49554 2.50196 9.08944C2.49998 9.42102 2.76916 9.69057 3.10074 9.69057ZM3.10074 14.6906C2.76916 14.6906 2.49998 14.9601 2.50196 15.2917C2.51149 16.8856 2.57052 17.789 2.9361 18.5065C3.3196 19.2592 3.93152 19.8711 4.68417 20.2546C5.23466 20.5351 5.89462 20.6351 6.89189 20.6708C7.22627 20.6828 7.50013 20.4113 7.50013 20.0767C7.50013 19.7485 7.23637 19.4829 6.90841 19.4707C6.71372 19.4634 6.53568 19.4535 6.37066 19.4401C5.77786 19.3916 5.45942 19.3028 5.22896 19.1854C4.7021 18.9169 4.27376 18.4886 4.00531 17.9617C3.88788 17.7313 3.79907 17.4128 3.75064 16.82C3.71709 16.4094 3.70582 15.9182 3.70203 15.2902C3.70004 14.959 3.43193 14.6906 3.10074 14.6906ZM21.8995 9.69057C21.5683 9.69057 21.3002 9.42208 21.2982 9.0909C21.2944 8.46295 21.2832 7.97173 21.2496 7.56109C21.2012 6.96829 21.1124 6.64985 20.9949 6.41939C20.7265 5.89254 20.2982 5.46419 19.7713 5.19575C19.5408 5.07832 19.2224 4.98951 18.6296 4.94108C18.4646 4.92759 18.2865 4.91771 18.0918 4.91046C17.7639 4.89825 17.5001 4.63261 17.5001 4.30442C17.5001 3.96983 17.774 3.69838 18.1084 3.71034C19.1056 3.74602 19.7656 3.84605 20.3161 4.12654C21.0687 4.51003 21.6807 5.12196 22.0642 5.8746C22.4297 6.5921 22.4888 7.49554 22.4983 9.08944C22.5003 9.42102 22.2311 9.69057 21.8995 9.69057Z" fill="currentColor"/><path d="M7.35624 15.7775C7.3003 15.6959 7.20773 15.6472 7.1088 15.6472H6.92068C6.75499 15.6472 6.62068 15.7815 6.62068 15.9472V17.3904C6.62068 17.5561 6.48636 17.6904 6.32068 17.6904H5.80012C5.63444 17.6904 5.50012 17.5561 5.50012 17.3904V12.9904C5.50012 12.8247 5.63444 12.6904 5.80012 12.6904H6.32068C6.48636 12.6904 6.62068 12.8247 6.62068 12.9904V14.3925C6.62068 14.5582 6.75499 14.6925 6.92068 14.6925H6.97151C7.072 14.6925 7.16581 14.6422 7.22141 14.5585L8.37311 12.8245C8.42871 12.7407 8.52252 12.6904 8.62301 12.6904H9.24884C9.49235 12.6904 9.63441 12.9652 9.49359 13.1639L8.2746 14.8837C8.20116 14.9873 8.20091 15.1259 8.27397 15.2298L9.67234 17.2178C9.81215 17.4166 9.66998 17.6904 9.42696 17.6904H8.82562C8.72669 17.6904 8.63412 17.6417 8.57818 17.5601L7.35624 15.7775Z" fill="currentColor"/><path d="M14.2362 15.2235C14.2362 15.3892 14.1019 15.5235 13.9362 15.5235H12.3847C12.219 15.5235 12.0847 15.6578 12.0847 15.8235V16.5628C12.0847 16.7285 12.219 16.8628 12.3847 16.8628H14.3097C14.4754 16.8628 14.6097 16.9971 14.6097 17.1628V17.3904C14.6097 17.5561 14.4754 17.6904 14.3097 17.6904H11.2642C11.0985 17.6904 10.9642 17.5561 10.9642 17.3904V12.9904C10.9642 12.8247 11.0985 12.6904 11.2642 12.6904H14.3022C14.4679 12.6904 14.6022 12.8247 14.6022 12.9904V13.2249C14.6022 13.3906 14.4679 13.5249 14.3022 13.5249H12.3847C12.219 13.5249 12.0847 13.6592 12.0847 13.8249V14.4165C12.0847 14.5822 12.219 14.7165 12.3847 14.7165H13.9362C14.1019 14.7165 14.2362 14.8508 14.2362 15.0165V15.2235Z" fill="currentColor"/><path d="M16.7559 15.9288C16.5903 15.9288 16.4559 16.0631 16.4559 16.2288V17.3904C16.4559 17.5561 16.3216 17.6904 16.1559 17.6904H15.6354C15.4697 17.6904 15.3354 17.5561 15.3354 17.3904V12.9904C15.3354 12.8247 15.4697 12.6904 15.6354 12.6904H17.457C17.8654 12.6904 18.2239 12.7591 18.5327 12.8965C18.844 13.0338 19.083 13.2296 19.2499 13.4837C19.4167 13.7355 19.5001 14.0228 19.5001 14.3456C19.5001 14.8356 19.3171 15.2225 18.9511 15.5064C18.5875 15.788 18.0832 15.9288 17.4383 15.9288H16.7559ZM16.4559 14.7943C16.4559 14.96 16.5903 15.0943 16.7559 15.0943H17.457C17.7533 15.0943 17.9787 15.0302 18.133 14.902C18.2899 14.7738 18.3684 14.5906 18.3684 14.3525C18.3684 14.1076 18.2899 13.9095 18.133 13.7584C17.9762 13.6073 17.7595 13.5295 17.4831 13.5249H16.7559C16.5903 13.5249 16.4559 13.6592 16.4559 13.8249V14.7943Z" fill="currentColor"/><path d="M9.55299 10.0026C9.72808 10.0026 9.86872 10.1531 9.82746 10.3233C9.73673 10.6974 9.53963 11.0028 9.23616 11.2392C8.8526 11.54 8.3461 11.6904 7.71667 11.6904C7.02822 11.6904 6.48607 11.481 6.09022 11.0621C5.69682 10.641 5.50012 10.0639 5.50012 9.3308V9.03334C5.50012 8.56543 5.5911 8.15322 5.77304 7.79671C5.95499 7.44021 6.21438 7.16726 6.55123 6.97786C6.89053 6.78624 7.28393 6.69043 7.73142 6.69043C8.35102 6.69043 8.85014 6.84083 9.22878 7.14163C9.5273 7.37878 9.72648 7.6914 9.82633 8.0795C9.8708 8.25237 9.72944 8.40834 9.55094 8.40834H9.05412C8.89841 8.40834 8.77363 8.28753 8.73243 8.13737C8.68367 7.95964 8.60201 7.82269 8.48748 7.72653C8.32274 7.58392 8.07072 7.51262 7.73142 7.51262C7.36261 7.51262 7.086 7.63294 6.9016 7.87358C6.71965 8.112 6.62622 8.48299 6.6213 8.98655V9.3542C6.6213 9.88005 6.70859 10.2644 6.88316 10.5073C7.06019 10.7501 7.33802 10.8716 7.71667 10.8716C8.05843 10.8716 8.31291 10.8014 8.4801 10.661C8.59307 10.5661 8.67387 10.437 8.72252 10.2739C8.76712 10.1243 8.89153 10.0026 9.0476 10.0026H9.55299Z" fill="currentColor"/><path d="M14.5359 7.26944C14.5359 7.43513 14.4016 7.56944 14.2359 7.56944H13.1911C13.0254 7.56944 12.8911 7.70375 12.8911 7.86944V11.3236C12.8911 11.4893 12.7567 11.6236 12.5911 11.6236H12.0846C11.9189 11.6236 11.7846 11.4893 11.7846 11.3236V7.86944C11.7846 7.70375 11.6503 7.56944 11.4846 7.56944H10.4619C10.2962 7.56944 10.1619 7.43513 10.1619 7.26944V7.05727C10.1619 6.89159 10.2962 6.75727 10.4619 6.75727H14.2359C14.4016 6.75727 14.5359 6.89159 14.5359 7.05727V7.26944Z" fill="currentColor"/><path d="M18.301 6.89134C18.3566 6.80761 18.4504 6.75727 18.5509 6.75727H19.2001C19.3658 6.75727 19.5001 6.89159 19.5001 7.05727V11.3236C19.5001 11.4893 19.3658 11.6236 19.2001 11.6236H18.69C18.5243 11.6236 18.39 11.4893 18.39 11.3236V9.38418C18.39 9.08721 18.0047 8.97076 17.8402 9.21801L16.3289 11.4898C16.2733 11.5734 16.1795 11.6236 16.0791 11.6236H15.4334C15.2677 11.6236 15.1334 11.4893 15.1334 11.3236V7.05728C15.1334 6.89159 15.2677 6.75727 15.4334 6.75727H15.9398C16.1055 6.75727 16.2398 6.89159 16.2398 7.05727V9.00165C16.2398 9.29877 16.6254 9.41512 16.7898 9.16758L18.301 6.89134Z" fill="currentColor"/></svg>'
        }, {
            name: "scan-code",
            theme: "outline",
            icon: '<svg viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M18.6296 19.4401C18.4646 19.4535 18.2865 19.4634 18.0918 19.4707C17.7639 19.4829 17.5001 19.7485 17.5001 20.0767C17.5001 20.4113 17.774 20.6828 18.1084 20.6708C19.1056 20.6351 19.7656 20.5351 20.3161 20.2546C21.0687 19.8711 21.6807 19.2592 22.0642 18.5065C22.4297 17.789 22.4888 16.8856 22.4983 15.2917C22.5003 14.9601 22.2311 14.6906 21.8995 14.6906C21.5683 14.6906 21.3002 14.959 21.2982 15.2902C21.2944 15.9182 21.2832 16.4094 21.2496 16.82C21.2012 17.4128 21.1124 17.7313 20.9949 17.9617C20.7265 18.4886 20.2982 18.9169 19.7713 19.1854C19.5408 19.3028 19.2224 19.3916 18.6296 19.4401ZM3.10074 9.69057C3.43193 9.69057 3.70004 9.42208 3.70203 9.0909C3.70582 8.46295 3.71709 7.97173 3.75064 7.56109C3.79907 6.96829 3.88788 6.64985 4.00531 6.41939C4.27376 5.89254 4.7021 5.46419 5.22896 5.19575C5.45942 5.07832 5.77786 4.98951 6.37066 4.94108C6.53568 4.92759 6.71371 4.91771 6.90841 4.91046C7.23637 4.89825 7.50013 4.63261 7.50013 4.30442C7.50013 3.96983 7.22627 3.69838 6.89189 3.71034C5.89462 3.74602 5.23466 3.84605 4.68417 4.12654C3.93152 4.51003 3.3196 5.12196 2.9361 5.8746C2.57052 6.5921 2.51149 7.49554 2.50196 9.08944C2.49998 9.42102 2.76916 9.69057 3.10074 9.69057ZM3.10074 14.6906C2.76916 14.6906 2.49998 14.9601 2.50196 15.2917C2.51149 16.8856 2.57052 17.789 2.9361 18.5065C3.3196 19.2592 3.93152 19.8711 4.68417 20.2546C5.23466 20.5351 5.89462 20.6351 6.89189 20.6708C7.22627 20.6828 7.50013 20.4113 7.50013 20.0767C7.50013 19.7485 7.23637 19.4829 6.90841 19.4707C6.71372 19.4634 6.53568 19.4535 6.37066 19.4401C5.77786 19.3916 5.45942 19.3028 5.22896 19.1854C4.7021 18.9169 4.27376 18.4886 4.00531 17.9617C3.88788 17.7313 3.79907 17.4128 3.75064 16.82C3.71709 16.4094 3.70582 15.9182 3.70203 15.2902C3.70004 14.959 3.43193 14.6906 3.10074 14.6906ZM21.8995 9.69057C21.5683 9.69057 21.3002 9.42208 21.2982 9.0909C21.2944 8.46295 21.2832 7.97173 21.2496 7.56109C21.2012 6.96829 21.1124 6.64985 20.9949 6.41939C20.7265 5.89254 20.2982 5.46419 19.7713 5.19575C19.5408 5.07832 19.2224 4.98951 18.6296 4.94108C18.4646 4.92759 18.2865 4.91771 18.0918 4.91046C17.7639 4.89825 17.5001 4.63261 17.5001 4.30442C17.5001 3.96983 17.774 3.69838 18.1084 3.71034C19.1056 3.74602 19.7656 3.84605 20.3161 4.12654C21.0687 4.51003 21.6807 5.12196 22.0642 5.8746C22.4297 6.5921 22.4888 7.49554 22.4983 9.08944C22.5003 9.42102 22.2311 9.69057 21.8995 9.69057Z" fill="currentColor"/><path d="M9.02975 7.1253C9.02975 7.29098 8.89544 7.4253 8.72975 7.4253H6.92234C6.75666 7.4253 6.62234 7.55961 6.62234 7.7253V8.0937C6.62234 8.25939 6.75666 8.39371 6.92234 8.39371H7.48901C8.12358 8.39371 8.62605 8.53679 8.99642 8.82296C9.36926 9.10685 9.55568 9.49032 9.55568 9.97338C9.55568 10.4587 9.37049 10.8491 9.00012 11.1444C8.63222 11.4374 8.1421 11.5862 7.52975 11.5908H5.80012C5.63444 11.5908 5.50012 11.4565 5.50012 11.2908V6.89082C5.50012 6.72514 5.63444 6.59082 5.80012 6.59082H8.72975C8.89544 6.59082 9.02975 6.72513 9.02975 6.89082V7.1253ZM6.92234 9.22475C6.75666 9.22475 6.62234 9.35906 6.62234 9.52475V10.4632C6.62234 10.6289 6.75666 10.7632 6.92234 10.7632H7.50753C7.79148 10.7632 8.01741 10.6911 8.18531 10.5469C8.35568 10.4026 8.44086 10.2092 8.44086 9.96651C8.44086 9.73986 8.35938 9.56129 8.19642 9.43079C8.03592 9.29801 7.81494 9.22933 7.53346 9.22475H6.92234Z" fill="currentColor"/><path d="M13.383 10.7582C13.3399 10.6396 13.2272 10.5606 13.101 10.5606H11.574C11.4475 10.5606 11.3345 10.64 11.2917 10.7591L11.0641 11.3923C11.0213 11.5114 10.9083 11.5908 10.7818 11.5908H10.255C10.0425 11.5908 9.89742 11.3762 9.97655 11.179L11.7431 6.77905C11.7887 6.66534 11.8989 6.59082 12.0215 6.59082H12.6459C12.7682 6.59082 12.8783 6.66509 12.924 6.77852L14.7003 11.1785C14.7799 11.3757 14.6348 11.5908 14.4222 11.5908H13.8955C13.7693 11.5908 13.6566 11.5118 13.6136 11.3932L13.383 10.7582ZM11.8068 9.32496C11.7368 9.52038 11.8816 9.72612 12.0892 9.72612H12.5835C12.7915 9.72612 12.9364 9.51956 12.8656 9.32397L12.6171 8.63773C12.5214 8.37344 12.1474 8.3741 12.0526 8.63872L11.8068 9.32496Z" fill="currentColor"/><path d="M16.7816 9.82914C16.6159 9.82914 16.4816 9.96346 16.4816 10.1291V11.2908C16.4816 11.4565 16.3473 11.5908 16.1816 11.5908H15.6705C15.5048 11.5908 15.3705 11.4565 15.3705 11.2908V6.89082C15.3705 6.72514 15.5048 6.59082 15.6705 6.59082H17.4742C17.8791 6.59082 18.2347 6.6595 18.5409 6.79686C18.8495 6.93423 19.0865 7.12997 19.252 7.38409C19.4174 7.63592 19.5001 7.92324 19.5001 8.24604C19.5001 8.73597 19.3186 9.12287 18.9557 9.40675C18.5952 9.68835 18.0952 9.82914 17.4557 9.82914H16.7816ZM16.4816 8.69467C16.4816 8.86035 16.6159 8.99467 16.7816 8.99467H17.4742C17.768 8.99467 17.9915 8.93056 18.1446 8.80236C18.3001 8.67415 18.3779 8.491 18.3779 8.25291C18.3779 8.00794 18.3001 7.80991 18.1446 7.65881C17.989 7.50772 17.7742 7.42988 17.5001 7.4253H16.7816C16.6159 7.4253 16.4816 7.55961 16.4816 7.7253V8.69467Z" fill="currentColor"/><path d="M7.22667 15.6066C7.17103 15.5232 7.07738 15.473 6.97709 15.473H6.8387C6.67301 15.473 6.5387 15.6074 6.5387 15.773V17.1196C6.5387 17.2853 6.40438 17.4196 6.2387 17.4196H5.80012C5.63444 17.4196 5.50012 17.2853 5.50012 17.1196V12.9563C5.50012 12.7906 5.63444 12.6563 5.80012 12.6563H6.2387C6.40438 12.6563 6.5387 12.7906 6.5387 12.9563V14.2636C6.5387 14.4292 6.67301 14.5636 6.8387 14.5636H6.84965C6.95148 14.5636 7.04636 14.5119 7.10162 14.4264L8.15678 12.7934C8.21205 12.7079 8.30692 12.6563 8.40875 12.6563H8.94119C9.18294 12.6563 9.3254 12.9275 9.18816 13.1266L8.07508 14.7407C8.0046 14.8429 8.00435 14.978 8.07447 15.0804L9.35397 16.9502C9.49022 17.1493 9.34764 17.4196 9.10639 17.4196H8.59635C8.49606 17.4196 8.40241 17.3695 8.34676 17.2861L7.22667 15.6066Z" fill="currentColor"/><path d="M14.1065 15.1459C14.1065 15.6148 14.0188 16.0259 13.8433 16.3793C13.6679 16.7326 13.4164 17.0052 13.0886 17.1971C12.7632 17.3891 12.3893 17.485 11.967 17.485C11.5492 17.485 11.1765 17.3902 10.8488 17.2004C10.5211 17.0107 10.2672 16.7402 10.0872 16.3891C9.90715 16.0357 9.81598 15.6301 9.81367 15.1721V14.9365C9.81367 14.4676 9.90253 14.0554 10.0802 13.6999C10.2603 13.3422 10.513 13.0685 10.8384 12.8787C11.1661 12.6868 11.54 12.5908 11.9601 12.5908C12.3801 12.5908 12.7528 12.6868 13.0783 12.8787C13.406 13.0685 13.6587 13.3422 13.8364 13.6999C14.0164 14.0554 14.1065 14.4665 14.1065 14.9332V15.1459ZM13.054 14.93C13.054 14.4305 12.9594 14.051 12.7702 13.7915C12.5809 13.5319 12.3109 13.4022 11.9601 13.4022C11.6116 13.4022 11.3427 13.5308 11.1534 13.7882C10.9642 14.0434 10.8684 14.4185 10.8661 14.9136V15.1459C10.8661 15.6323 10.9607 16.0096 11.15 16.2778C11.3392 16.5461 11.6116 16.6802 11.967 16.6802C12.3155 16.6802 12.5832 16.5516 12.7702 16.2942C12.9571 16.0347 13.0517 15.6573 13.054 15.1622V14.93Z" fill="currentColor"/><path d="M19.4292 18.3035C19.4224 18.4641 19.2902 18.5908 19.1295 18.5908H18.7581C18.5924 18.5908 18.4581 18.4565 18.4581 18.2908V17.7196C18.4581 17.5539 18.3238 17.4196 18.1581 17.4196H15.7185C15.5528 17.4196 15.4185 17.5539 15.4185 17.7196V18.2875C15.4185 18.4532 15.2842 18.5875 15.1185 18.5875H14.727C14.5646 18.5875 14.4317 18.4584 14.4271 18.296L14.388 16.916C14.3836 16.76 14.5089 16.6312 14.6649 16.6312C14.727 16.6312 14.7881 16.6111 14.8336 16.569C15.0039 16.4111 15.1377 16.1952 15.235 15.9212C15.3481 15.6072 15.4243 15.219 15.4635 14.7566L15.5896 12.9355C15.6005 12.7783 15.7312 12.6563 15.8889 12.6563H18.6116C18.7773 12.6563 18.9116 12.7906 18.9116 12.9563V16.3431C18.9116 16.5022 19.0406 16.6312 19.1996 16.6312C19.3635 16.6312 19.4943 16.7677 19.4874 16.9314L19.4292 18.3035ZM16.2117 16.1292C16.1236 16.3533 16.2774 16.6312 16.5182 16.6312H17.573C17.7387 16.6312 17.873 16.4969 17.873 16.3312V13.7512C17.873 13.5855 17.7387 13.4512 17.573 13.4512H16.8756C16.7179 13.4512 16.5871 13.5733 16.5763 13.7306L16.509 14.7042C16.4625 15.2683 16.3634 15.7433 16.2117 16.1292Z" fill="currentColor"/></svg>'
        }, {
            name: "back-not-allowed",
            theme: "outline",
            icon: '<svg viewBox="0 0 24 24"><path d="M10.9995 13.1906L8.49841 10.6895L10.9995 8.18848" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/><path d="M8.49841 10.6895L13.5005 10.6895C15.158 10.6895 16.5017 12.0332 16.5017 13.6907C16.5017 15.3482 15.158 16.692 13.5005 16.692" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/><path d="M7.55873 19.754L5.43652 17.6318" stroke="#FF0000" stroke-linecap="round" stroke-linejoin="round"/><path d="M5.43652 19.754L7.55873 17.6318" stroke="#FF0000" stroke-linecap="round" stroke-linejoin="round"/><path d="M9.60896 21.2145C13.5773 22.5642 17.9523 21.001 20.1668 17.4422C22.3813 13.8834 21.851 9.26778 18.8872 6.30391C15.9233 3.34003 11.3077 2.80975 7.7489 5.02425C4.19009 7.23875 2.6269 11.6138 3.97662 15.5821" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/><path d="M10.4993 18.6931C10.4993 20.9031 8.7077 22.6947 6.49764 22.6947C4.28758 22.6947 2.49597 20.9031 2.49597 18.6931C2.49597 16.483 4.28758 14.6914 6.49764 14.6914C8.7077 14.6914 10.4993 16.483 10.4993 18.6931" stroke="#FF0000" stroke-linecap="round" stroke-linejoin="round"/></svg>'
        }, {
            name: "credit-card",
            theme: "outline",
            icon: '<svg viewBox="0 0 16 16"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.87863 2H14.121C14.7905 2 15.3332 2.59695 15.3332 3.33333V11.3333C15.3332 12.0697 14.7905 12.6667 14.121 12.6667H7.33317V11.3334H13.9998V6.66671H1.99984V8H0.666504V3.33333C0.666504 2.59695 1.20919 2 1.87863 2ZM13.9998 3.33338V5.33338H1.99984V3.33338H13.9998ZM0.666504 11.3333H3.72369L2.86177 12.1952L3.80457 13.138L6.27598 10.6666L3.80457 8.19524L2.86177 9.13805L3.72369 9.99998H0.666504V11.3333Z" fill="currentColor"/></svg>'
        }, {
            name: "wb-close-fill",
            icon: '<svg viewBox="0 0 20 20"><path fill-rule="evenodd" clip-rule="evenodd" d="M20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10ZM7.70725 6.29304C7.31681 5.90244 6.68365 5.9023 6.29304 6.29275C5.90244 6.68319 5.9023 7.31635 6.29275 7.70696L8.58515 10.0003L6.29284 12.2929C5.90235 12.6835 5.90239 13.3167 6.29294 13.7072C6.68349 14.0977 7.31666 14.0976 7.70716 13.7071L9.99936 11.4145L12.293 13.7073C12.6836 14.0977 13.3168 14.0976 13.7073 13.707C14.0977 13.3164 14.0976 12.6832 13.707 12.2927L11.4136 10.0003L13.7071 7.70716C14.0976 7.31666 14.0977 6.68349 13.7072 6.29294C13.3167 5.90239 12.6835 5.90235 12.2929 6.29284L9.99936 8.58611L7.70725 6.29304Z" fill="#E0E0E0"/></svg>'
        }, {
            name: "payment",
            theme: "outline",
            icon: '<svg viewBox="0 0 20 20"><path fill-rule="evenodd" clip-rule="evenodd" d="M14.1686 15.0015V9.99939C14.1687 9.55714 13.9931 9.13297 13.6804 8.82026C13.3677 8.50754 12.9435 8.33191 12.5012 8.33203H4.16443C3.72218 8.33191 3.29801 8.50754 2.98529 8.82026C2.67258 9.13297 2.49695 9.55714 2.49707 9.99939V15.0015C2.49695 15.4437 2.67258 15.8679 2.98529 16.1806C3.29801 16.4933 3.72218 16.669 4.16443 16.6688H12.5012C13.4221 16.6688 14.1686 15.9223 14.1686 15.0015Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M2.49707 11.7332H14.1686" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M5.16504 8.33169L6.17379 4.56345C6.28824 4.13639 6.56794 3.77243 6.95114 3.55189C7.33434 3.33135 7.78956 3.27237 8.21631 3.38796L16.2697 5.5472C16.6967 5.66165 17.0607 5.94134 17.2812 6.32454C17.5018 6.70775 17.5607 7.16296 17.4452 7.58971L16.153 12.4167C15.923 13.2855 15.0438 13.8137 14.1688 13.6089" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>'
        }, {
            name: "scan-settings",
            theme: "outline",
            icon: '<svg  viewBox="0 0 24 24"><path d="M6.99951 21H5.99951C4.34266 21 2.99951 19.6569 2.99951 18V17" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M16.9995 3.00195H17.9995C19.6564 3.00195 20.9995 4.3451 20.9995 6.00195V7.00195" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M2.99951 7.00195V6.00195C2.99951 4.3451 4.34266 3.00195 5.99951 3.00195H6.99951" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M20.9995 17V18C20.9995 19.6569 19.6564 21 17.9995 21H16.9995" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path fill-rule="evenodd" clip-rule="evenodd" d="M9.00049 6H15.0005C16.6573 6 18.0005 7.34315 18.0005 9V11H6.00049V9C6.00049 7.34315 7.34363 6 9.00049 6Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M18.0005 14V15C18.0005 16.6569 16.6573 18 15.0005 18H9.00049C7.34363 18 6.00049 16.6569 6.00049 15V14" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M4.00049 11.0002H20.0005" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>'
        }, {
            name: "defect",
            theme: "outline",
            icon: '<svg viewBox="0 0 20 20"><path d="M10.8333 17.4503C10.5569 17.4846 10.2786 17.502 10 17.502C5.85786 17.502 2.5 14.1441 2.5 10.002C2.5 5.85982 5.85786 2.50195 10 2.50195C14.1421 2.50195 17.5 5.85982 17.5 10.002C17.5 10.2805 17.4826 10.5588 17.4483 10.8353" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><rect x="6.6665" y="7.70898" width="6.66667" height="5.83333" rx="0.979" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M11.313 7.70833V6.9375C11.313 6.21263 10.7254 5.625 10.0005 5.625V5.625C9.27561 5.625 8.68799 6.21263 8.68799 6.9375V7.70833" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M16.6668 14.584L14.5835 16.6673" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M14.5835 14.584L16.6668 16.6673" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>'
        }, {
            name: "finance",
            theme: "outline",
            icon: '<svg viewBox="0 0 20 20"><path d="M2.5 2.91667H17.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M4.1665 2.91602V15.9485C4.1665 16.5752 4.674 17.0827 5.30067 17.0827H14.6998C15.3257 17.0827 15.834 16.5752 15.834 15.9485V2.91602" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M10.8335 12.0827H7.0835" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M8.49933 6.25H11.1468C12.1235 6.25 12.9168 7.04333 12.9168 8.02C12.9168 8.99667 12.1235 9.79 11.1468 9.79H7.0835" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M8.50016 6.25V13.75" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>'
        }, {
            name: "box",
            theme: "outline",
            icon: '<svg viewBox="0 0 20 20"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.8333 2.5H8.05583C7.515 2.5 6.98833 2.67583 6.55583 3L3.5 5.29167C2.87083 5.76417 2.5 6.505 2.5 7.29167V15.8333C2.5 16.7542 3.24583 17.5 4.16667 17.5H12.9167C13.7033 17.5 14.4442 17.1292 14.9167 16.5L17.1667 13.5C17.3833 13.2117 17.5 12.8608 17.5 12.5V4.16667C17.5 3.24583 16.7542 2.5 15.8333 2.5V2.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M14.1665 6.09128L17.1998 3.22461" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M14.1667 17.1585V6.0918" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M14.1669 6.09245H2.81689" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M8.6333 6.09167L12.7416 2.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M6.6665 9.16667H9.99984" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>'
        }, {
            name: "courier",
            theme: "outline",
            icon: '<svg viewBox="0 0 20 20"><path d="M3.33057 16.6695V16.6695C3.33057 14.5976 5.0102 12.918 7.08213 12.918H9.23553" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M14.5848 12.502V15.003" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M17.5028 15.6513C17.5028 15.2931 17.2124 15.0027 16.8542 15.0027H12.3156C11.9574 15.0027 11.667 15.2931 11.667 15.6513" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path fill-rule="evenodd" clip-rule="evenodd" d="M12.5007 18.3377H16.6691C17.1295 18.3377 17.5028 17.9645 17.5028 17.504V14.532C17.5027 14.1941 17.4344 13.8598 17.3018 13.5491L17.0701 13.008C16.939 12.7012 16.6376 12.5021 16.3039 12.502H12.8658C12.5319 12.5018 12.2301 12.7009 12.0988 13.008L11.8679 13.5482C11.7354 13.859 11.6671 14.1933 11.667 14.5311V17.504C11.667 17.9645 12.0402 18.3377 12.5007 18.3377Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M12.505 4.36802C13.5184 5.38131 13.8217 6.90532 13.2733 8.22936C12.7249 9.5534 11.4329 10.4167 9.99979 10.4167C8.56668 10.4167 7.27469 9.5534 6.72631 8.22936C6.17792 6.90532 6.48115 5.38131 7.49458 4.36802C8.15892 3.70345 9.0601 3.33008 9.99979 3.33008C10.9395 3.33008 11.8407 3.70345 12.505 4.36802" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>'
        }, {
            name: "info",
            theme: "outline",
            icon: '<svg viewBox="0 0 20 20"><ellipse cx="10.0002" cy="9.99922" rx="7.50312" ry="7.50313" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M9.1665 12.9168H11.0918" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M10.1326 12.9181V9.375H9.17383" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M10.0833 6.86997C10.0833 6.98507 9.98996 7.07839 9.87485 7.07839C9.75974 7.07839 9.66643 6.98507 9.66643 6.86997C9.66643 6.75486 9.75974 6.66155 9.87485 6.66155" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M9.87513 6.66224C9.99024 6.66224 10.0836 6.75555 10.0836 6.87066" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>'
        }, {
            name: "info-alt",
            theme: "outline",
            icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 22C6.47667 22 2 17.5233 2 12C2 6.47667 6.47667 2 12 2C17.5233 2 22 6.47667 22 12C22 17.5233 17.5233 22 12 22Z" fill="#F4F4F4"/><path d="M11.999 8C11.861 8 11.749 8.112 11.75 8.25C11.75 8.388 11.862 8.5 12 8.5C12.138 8.5 12.25 8.388 12.25 8.25C12.25 8.112 12.138 8 11.999 8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 12V17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>'
        }, {
            name: "power-switcher",
            theme: "outline",
            icon: '<svg viewBox="0 0 24 24"><path fill="currentColor" d="M13 3h-2v10h2V3zm4.83 2.17l-1.42 1.42C17.99 7.86 19 9.81 19 12c0 3.87-3.13 7-7 7s-7-3.13-7-7c0-2.19 1.01-4.14 2.58-5.42L6.17 5.17C4.23 6.82 3 9.26 3 12c0 4.97 4.03 9 9 9s9-4.03 9-9c0-2.74-1.23-5.18-3.17-6.83z"/></svg>'
        }, {
            name: "return-ass",
            theme: "outline",
            icon: '<svg viewBox="0 0 24 24"><path fill="currentColor" d="M12 14h4v-4h-4V7l-5 5 5 5zm7-11h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-.14 0-.27.01-.4.04-.39.08-.74.28-1.01.55-.18.18-.33.4-.43.64-.1.23-.16.49-.16.77v14c0 .27.06.54.16.78s.25.45.43.64c.27.27.62.47 1.01.55.13.02.26.03.4.03h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7-.25c.41 0 .75.34.75.75s-.34.75-.75.75-.75-.34-.75-.75.34-.75.75-.75zM19 19H5V5h14v14z"/></svg>'
        }, {
            name: "clean-hands",
            theme: "outline",
            icon: '<svg viewBox="0 0 24 24" ><rect fill="none" height="24" width="24"/><path fill="currentColor" d="M16.99,5l0.63,1.37L18.99,7l-1.37,0.63L16.99,9l-0.63-1.37L14.99,7l1.37-0.63L16.99,5 M20,14c1.1,0,2-0.9,2-2c0-1.1-2-4-2-4 s-2,2.9-2,4C18,13.1,18.9,14,20,14z M11,6.1V4h2c0.57,0,1.1,0.17,1.55,0.45l1.43-1.43C15.15,2.39,14.13,2,13,2c-1.47,0-5.44,0-5.5,0 v2H9v2.11C7.22,6.48,5.8,7.79,5.25,9.5h2.16C7.94,8.61,8.89,8,10,8c1.62,0,2.94,1.29,2.99,2.9L15,11.65V11 C15,8.58,13.28,6.56,11,6.1z M22,19v1l-8,2.5l-7-1.94V22H1V11h7.97l6.16,2.3C16.25,13.72,17,14.8,17,16h2C20.66,16,22,17.34,22,19z M5,20v-7H3v7H5z M19.9,18.57c-0.16-0.33-0.51-0.56-0.9-0.56h-5.35c-0.54,0-1.07-0.09-1.58-0.26l-2.38-0.79l0.63-1.9l2.38,0.79 C13.01,15.95,15,16,15,16c0-0.37-0.23-0.7-0.57-0.83L8.61,13H7v5.48l6.97,1.93L19.9,18.57z"/></svg>'
        }, {
            name: "voice",
            theme: "outline",
            icon: '<svg viewBox="0 0 25 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.0043 2C9.07027 2 6.69177 4.38864 6.69177 7.33517C6.69177 10.2817 9.07027 12.6703 12.0043 12.6703C14.9383 12.6703 17.3168 10.2817 17.3168 7.33517C17.3168 4.38864 14.9383 2 12.0043 2ZM12.0043 3.44767C14.1422 3.44767 15.8753 5.18816 15.8753 7.33517C15.8753 9.48218 14.1422 11.2227 12.0043 11.2227C9.8664 11.2227 8.1333 9.48218 8.1333 7.33517C8.1333 5.18816 9.8664 3.44767 12.0043 3.44767ZM9.83005 14.8209C9.05233 14.8749 8.26621 14.9859 7.4908 15.1521C5.99418 15.4604 4.79685 16.0763 4.28724 17.0999C4.09503 17.5002 3.99839 17.9288 4.00002 18.3627C3.99944 18.7935 4.0953 19.2227 4.28062 19.6153C4.76994 20.6271 5.8278 21.1997 7.25624 21.5171L7.51213 21.5705C8.26648 21.7407 9.05284 21.8553 9.84446 21.909C9.91189 21.9288 10.0726 21.9472 10.248 21.9561L10.3922 21.9615C10.4664 21.9633 10.5506 21.9637 10.676 21.9637C11.8138 22.0263 12.9934 22.0081 14.1675 21.9081C14.7932 21.8653 15.4231 21.7835 16.0477 21.6636L16.5151 21.5666C18.0576 21.2623 19.2126 20.6836 19.7186 19.6164C20.0937 18.8241 20.0937 17.9047 19.7188 17.1127C19.214 16.0483 18.0737 15.4744 16.5034 15.1509C15.8873 15.0194 15.2612 14.922 14.6307 14.8599L14.1697 14.8209C12.7259 14.6935 11.2738 14.6935 9.83005 14.8209ZM14.0436 16.263L14.0562 16.264C14.7799 16.3149 15.4991 16.4165 16.2087 16.568C17.3751 16.8083 18.1667 17.2067 18.4171 17.7348C18.6057 18.133 18.6057 18.5958 18.4169 18.9944C18.1829 19.4879 17.472 19.8691 16.4445 20.1021L16.2195 20.1498C15.496 20.3112 14.7791 20.4152 14.0576 20.4647C12.9379 20.5599 11.8249 20.5771 10.7148 20.5171L10.3212 20.5103C10.2119 20.5048 10.1198 20.4942 10.0345 20.4771C9.35872 20.4261 8.75066 20.3454 8.16027 20.2283L7.80775 20.1537C6.63771 19.9244 5.83915 19.5243 5.58024 18.989C5.48964 18.797 5.44125 18.5803 5.44154 18.3609C5.44073 18.1428 5.48848 17.931 5.58118 17.7379C5.83293 17.2324 6.67919 16.7971 7.78606 16.569C8.50073 16.4159 9.21962 16.3144 9.94294 16.264C11.316 16.143 12.6837 16.143 14.0436 16.263Z" fill="currentColor"/><path d="M19.8238 10.2986C19.6638 10.4971 19.3732 10.5285 19.1745 10.3688C18.9755 10.2089 18.9438 9.91803 19.1037 9.71909C19.1037 9.71909 19.1037 9.71906 19.1037 9.71903C19.5816 9.06604 19.5816 8.17875 19.1037 7.52577C18.9426 7.32783 18.9725 7.03674 19.1704 6.87562C19.3684 6.71451 19.6594 6.74437 19.8206 6.94232C19.8216 6.94361 19.8227 6.94491 19.8237 6.94624C20.5798 7.93581 20.5798 9.30902 19.8238 10.2986Z" fill="currentColor"/><path d="M21.6719 11.6853C21.5119 11.8838 21.2213 11.9152 21.0226 11.7555C20.8236 11.5956 20.7919 11.3047 20.9518 11.1058C20.9518 11.1058 20.9519 11.1058 20.9519 11.1057C22.0527 9.63341 22.0527 7.61203 20.9519 6.13969C20.7908 5.94175 20.8206 5.65067 21.0186 5.48955C21.2165 5.32844 21.5076 5.3583 21.6687 5.55624C21.6698 5.55754 21.6708 5.55884 21.6719 5.56017C23.0296 7.37616 23.0296 9.86931 21.6719 11.6853Z" fill="currentColor"/><path d="M23.5203 13.0718C23.3591 13.2697 23.0681 13.2996 22.8701 13.1385C22.6737 12.9786 22.6425 12.6904 22.8003 12.4922C24.5157 10.1978 24.5157 7.0478 22.8003 4.7534C22.6391 4.55546 22.669 4.26437 22.867 4.10326C23.0649 3.94214 23.356 3.97201 23.5171 4.16995C23.5182 4.17125 23.5192 4.17255 23.5203 4.17387C25.4927 6.81195 25.4927 10.4337 23.5203 13.0718Z" fill="currentColor"/></svg>'
        }, {
            name: "text-file",
            theme: "outline",
            icon: '<svg viewBox="0 0 36 36"><path fill-rule="evenodd" clip-rule="evenodd" d="M27.621 9.621L23.379 5.379C22.8165 4.8165 22.053 4.5 21.258 4.5H10.5C8.8425 4.5 7.5 5.8425 7.5 7.5V28.5C7.5 30.1575 8.8425 31.5 10.5 31.5H25.5C27.1575 31.5 28.5 30.1575 28.5 28.5V11.742C28.5 10.947 28.1835 10.1835 27.621 9.621V9.621Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M28.5 12H22.5C21.672 12 21 11.328 21 10.5V4.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 16.5H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 21H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 25.5H18.495" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>'
        }, {
            name: "border-barcode",
            theme: "outline",
            icon: '<svg viewBox="0 0 20 20"><path d="M17.0833 7.89703V4.9987C17.0833 4.07786 16.3375 3.33203 15.4166 3.33203H12.5183" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M7.4815 3.33203H4.58317C3.66234 3.33203 2.9165 4.07786 2.9165 4.9987V7.89703" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M2.91675 12.1014V14.9998C2.91675 15.9206 3.66258 16.6664 4.58341 16.6664H7.48175" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M12.5183 16.6664H15.4166C16.3375 16.6664 17.0833 15.9206 17.0833 14.9998V12.1014" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M8.77963 13.3052C8.7959 13.3214 8.7959 13.3478 8.77963 13.3641C8.76335 13.3804 8.73697 13.3804 8.7207 13.3641C8.70443 13.3478 8.70443 13.3214 8.7207 13.3052C8.73697 13.2889 8.76335 13.2889 8.77963 13.3052" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M11.2796 13.3052C11.2959 13.3214 11.2959 13.3478 11.2796 13.3641C11.2634 13.3804 11.237 13.3804 11.2207 13.3641C11.2044 13.3478 11.2044 13.3214 11.2207 13.3052C11.237 13.2889 11.2634 13.2889 11.2796 13.3052" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M13.7502 6.66797V13.3346" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M6.25016 6.66797V13.3346" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M11.2502 6.66797V10.8346" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M8.75016 6.66797V10.8346" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>'
        }, {
            name: "border-barcode-accept",
            theme: "outline",
            icon: '<svg viewBox="0 0 20 20"><path d="M16.6666 7.89703V4.9987C16.6666 4.07786 15.9207 3.33203 14.9999 3.33203H12.1016" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M7.065 3.33203H4.16667C3.24583 3.33203 2.5 4.07786 2.5 4.9987V7.89703" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M2.5 12.1014V14.9998C2.5 15.9206 3.24583 16.6664 4.16667 16.6664H7.065" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M8.36251 13.3043C8.37918 13.3209 8.37918 13.3468 8.36251 13.3634C8.34584 13.3801 8.32001 13.3801 8.30334 13.3634C8.28668 13.3468 8.28668 13.3209 8.30334 13.3043C8.32001 13.2876 8.34668 13.2876 8.36251 13.3043" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M5.83317 6.66797V13.3346" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M8.33317 6.66797V10.8346" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M10.8166 6.66797V10.8346" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M13.3332 6.66797V8.33463" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M16 13L12.875 17L11 14.6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>'
        }, {
            name: "user-time",
            theme: "outline",
            icon: '<svg viewBox="0 0 20 20"><path d="M10.0442 6.47791V10.1911L12.9629 11.9702" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M3.50562 7.28625C4.65317 4.04158 7.94179 2.06763 11.3449 2.5808C14.7481 3.09397 17.3084 5.94989 17.4481 9.38868C17.5879 12.8275 15.2677 15.8817 11.9175 16.6693" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path fill-rule="evenodd" clip-rule="evenodd" d="M8.33259 17.504H2.91367C2.68345 17.504 2.49683 17.3174 2.49683 17.0872V16.7487C2.49957 15.7857 3.27956 15.0057 4.24255 15.003H7.0037C7.9667 15.0057 8.74668 15.7857 8.74943 16.7487V17.0872C8.74943 17.3174 8.56281 17.504 8.33259 17.504Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path fill-rule="evenodd" clip-rule="evenodd" d="M5.62316 12.9188C4.70317 12.9188 3.95704 12.1737 3.95581 11.2537C3.95459 10.3337 4.69875 9.58657 5.61873 9.58411C6.53872 9.58167 7.28684 10.3248 7.29053 11.2448C7.29229 11.6882 7.11741 12.114 6.80453 12.4281C6.49164 12.7423 6.06653 12.9188 5.62316 12.9188Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>'
        }, {
            name: "discount",
            theme: "outline",
            icon: '<svg viewBox="0 0 20 20"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.3542 2.45827L12.6225 1.7241C13.1592 1.54993 13.7425 1.79243 13.9992 2.2941L15.0833 4.41743C15.1933 4.63243 15.3683 4.80827 15.5842 4.91827L17.6808 5.9891C18.1983 6.25327 18.4475 6.85493 18.2683 7.40827L17.5433 9.64827C17.4692 9.87827 17.4692 10.1258 17.5433 10.3558L18.2775 12.6241C18.4517 13.1608 18.2092 13.7441 17.7075 14.0008L15.5842 15.0849C15.3692 15.1949 15.1933 15.3699 15.0833 15.5858L13.9983 17.7091C13.7417 18.2116 13.1583 18.4533 12.6217 18.2791L10.3533 17.5449C10.1233 17.4708 9.87582 17.4708 9.64582 17.5449L7.37748 18.2791C6.84082 18.4533 6.25748 18.2108 6.00082 17.7091L4.91665 15.5858C4.80665 15.3708 4.63165 15.1949 4.41582 15.0849L2.29248 13.9999C1.78998 13.7433 1.54832 13.1599 1.72248 12.6233L2.45665 10.3549C2.53082 10.1249 2.53082 9.87743 2.45665 9.64743L1.72248 7.37993C1.54915 6.84327 1.79082 6.2591 2.29332 6.00243L4.41582 4.91827C4.63165 4.80827 4.80665 4.63327 4.91665 4.41743L6.00165 2.2941C6.25748 1.79243 6.84165 1.55077 7.37832 1.7241L9.64665 2.45827C9.87582 2.53327 10.1242 2.53327 10.3542 2.45827V2.45827Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M7.5 12.5L12.5 7.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M7.70734 7.5013C7.59234 7.5013 7.49901 7.59464 7.49984 7.70964C7.49984 7.82464 7.59317 7.91797 7.70817 7.91797C7.82317 7.91797 7.91651 7.82464 7.91651 7.70964C7.91651 7.59464 7.82317 7.5013 7.70734 7.5013" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M12.2908 12.0833C12.1758 12.0833 12.0825 12.1767 12.0833 12.2917C12.0833 12.4067 12.1767 12.5 12.2917 12.5C12.4067 12.5 12.5 12.4067 12.5 12.2917C12.5 12.1767 12.4067 12.0833 12.2908 12.0833" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>'
        }, {
            name: "question-mark",
            theme: "outline",
            icon: '<svg viewBox="0 0 5 8"><path d="M2.55584 4.41995V4.24745C2.55584 3.68245 2.90501 3.37661 3.25501 3.14161C3.59667 2.91161 3.93917 2.61161 3.93917 2.05828C3.93917 1.29411 3.32001 0.675781 2.55667 0.675781C1.79334 0.675781 1.17334 1.29328 1.17334 2.05745" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/><path d="M2.555 6.3693C2.48583 6.3693 2.43 6.42514 2.43083 6.4943C2.43083 6.56347 2.48666 6.6193 2.55583 6.6193C2.625 6.6193 2.68083 6.56347 2.68083 6.4943C2.68083 6.42514 2.625 6.3693 2.555 6.3693" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/></svg>'
        }, {
            name: "wallet-close",
            theme: "outline",
            icon: '<svg width="1em" height="1em" viewBox="0 0 24 24"><path d="M16.5949 13.125C16.3879 13.126 16.2209 13.294 16.2209 13.501C16.2209 13.708 16.3889 13.876 16.5959 13.875C16.8029 13.875 16.9709 13.707 16.9709 13.5C16.9709 13.293 16.8029 13.125 16.5949 13.125" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/><path d="M3 5V18.5C3 19.605 3.895 20.5 5 20.5H19C20.105 20.5 21 19.605 21 18.5V8.5C21 7.395 20.105 6.5 19 6.5H4.5C3.672 6.5 3 5.828 3 5V5C3 4.172 3.672 3.5 4.5 3.5H17" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/></svg>'
        }, {
            name: "wallet-open",
            theme: "outline",
            icon: '<svg width="1em" height="1em" viewBox="0 0 24 24"><path d="M3.039 7.91501H19C20.105 7.91501 21 8.81001 21 9.91501V19C21 20.1 20.1 21 19 21H5C3.895 21 3 20.105 3 19V8.29101C3 7.45901 3.515 6.71401 4.294 6.42001L14.647 2.51101C15.301 2.26401 16 2.74701 16 3.44601V7.91401" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/><path d="M15.999 14.125C15.792 14.126 15.625 14.294 15.625 14.501C15.625 14.708 15.793 14.876 16 14.875C16.207 14.875 16.375 14.707 16.375 14.5C16.375 14.293 16.207 14.125 15.999 14.125" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/></svg>\n'
        }, {
            name: "wb-check",
            theme: "outline",
            icon: '<svg width="1em" height="1em" viewBox="0 0 10 8"><path d="M7.83967 1.09662C8.13256 0.80373 8.60744 0.80373 8.90033 1.09662C9.1666 1.36289 9.1908 1.77955 8.97295 2.07316L8.90033 2.15728L4.15433 6.90328C3.8881 7.16951 3.47151 7.19375 3.1779 6.97599L3.09378 6.90339L0.719782 4.5304C0.426827 4.23756 0.426727 3.76269 0.719558 3.46973C0.985769 3.20341 1.40243 3.17912 1.69608 3.39691L1.78022 3.46951L3.6231 5.31175L7.83967 1.09662Z" fill="currentColor"/></svg>'
        }, {
            name: "wb-check-round",
            theme: "outline",
            icon: '<svg viewBox="0 0 88 88" fill="none" ><path d="M44 5.5C22.7391 5.5 5.5 22.7391 5.5 44C5.5 65.2609 22.7391 82.5 44 82.5C65.2609 82.5 82.5 65.2609 82.5 44C82.5 22.7391 65.2609 5.5 44 5.5ZM60.6289 31.4273L42.5305 56.5211C42.2775 56.8742 41.944 57.1618 41.5577 57.3603C41.1714 57.5588 40.7433 57.6623 40.309 57.6623C39.8747 57.6623 39.4466 57.5588 39.0603 57.3603C38.6739 57.1618 38.3405 56.8742 38.0875 56.5211L27.3711 41.6711C27.0445 41.2156 27.3711 40.5797 27.9297 40.5797H31.9602C32.8367 40.5797 33.6703 41.0008 34.1859 41.7227L40.3047 50.2133L53.8141 31.4789C54.3297 30.7656 55.1547 30.3359 56.0398 30.3359H60.0703C60.6289 30.3359 60.9555 30.9719 60.6289 31.4273Z" fill="currentColor"/></svg>'
        }, {
            name: "wb-list",
            theme: "outline",
            icon: '<svg width="1em" height="1em" viewBox="0 0 26 26" fill="currentColor">\n<path d="M7.99988 6.99679H17.0036" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n<path d="M10.0009 10.9985H17.0038" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n<path d="M12.0016 15.0002H17.0037" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n<path d="M13.4022 19.0017H17.0037" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n</svg>'
        }, {
            name: "none-data",
            theme: "outline",
            icon: '<svg width="1em" height="1em" viewBox="0 -23 132 97"><path d="M66 77C91.4051 77 112 72.7467 112 67.5C112 62.2533 91.4051 58 66 58C40.5949 58 20 62.2533 20 67.5C20 72.7467 40.5949 77 66 77Z" fill="#F9F8FA"/>\n<path d="M99 37.98L84.4427 21.7726C83.744 20.6679 82.7238 20 81.6492 20H50.3508C49.2762 20 48.256 20.6679 47.5573 21.7712L33 37.9814V51H99V37.98Z" fill="white" stroke="#E0E0E0"/>\n<path d="M79.7926 42.2633C79.7926 39.9287 81.2187 38.0015 82.9878 38H99V64.3811C99 67.4691 97.1061 70 94.7674 70H37.2326C34.8939 70 33 67.4676 33 64.3811V38H49.0122C50.7813 38 52.2074 39.9244 52.2074 42.2589V42.2909C52.2074 44.6255 53.6494 46.5105 55.417 46.5105H76.583C78.3506 46.5105 79.7926 44.608 79.7926 42.2735V42.2633Z" fill="white" stroke="#E0E0E0"/>\n</svg>'
        }, {
            name: "wb-close-circle",
            theme: "outline",
            icon: '<svg width="1em" height="1em" viewBox="0 0 20 20"><path fill-rule="evenodd" clip-rule="evenodd" d="M20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10ZM7.70725 6.29304C7.31681 5.90244 6.68365 5.9023 6.29304 6.29275C5.90244 6.68319 5.9023 7.31635 6.29275 7.70696L8.58515 10.0003L6.29284 12.2929C5.90235 12.6835 5.90239 13.3167 6.29294 13.7072C6.68349 14.0977 7.31666 14.0976 7.70716 13.7071L9.99936 11.4145L12.293 13.7073C12.6836 14.0977 13.3168 14.0976 13.7073 13.707C14.0977 13.3164 14.0976 12.6832 13.707 12.2927L11.4136 10.0003L13.7071 7.70716C14.0976 7.31666 14.0977 6.68349 13.7072 6.29294C13.3167 5.90239 12.6835 5.90235 12.2929 6.29284L9.99936 8.58611L7.70725 6.29304Z" fill="currentColor"/></svg>'
        }, {
            name: "wb-close-cross",
            theme: "outline",
            icon: '<svg width="1em" height="1em" viewBox="0 0 16 16"><path d="M8.92473 7.99916L13.6122 2.41166C13.6908 2.31881 13.6247 2.17773 13.5033 2.17773H12.0783C11.9944 2.17773 11.914 2.21523 11.8587 2.27952L7.99258 6.88845L4.12651 2.27952C4.07294 2.21523 3.99258 2.17773 3.90687 2.17773H2.48187C2.36044 2.17773 2.29437 2.31881 2.37294 2.41166L7.06044 7.99916L2.37294 13.5867C2.35534 13.6074 2.34405 13.6327 2.3404 13.6596C2.33676 13.6865 2.34092 13.7139 2.35239 13.7386C2.36386 13.7632 2.38216 13.784 2.40511 13.7985C2.42806 13.8131 2.4547 13.8207 2.48187 13.8206H3.90687C3.9908 13.8206 4.07115 13.7831 4.12651 13.7188L7.99258 9.10988L11.8587 13.7188C11.9122 13.7831 11.9926 13.8206 12.0783 13.8206H13.5033C13.6247 13.8206 13.6908 13.6795 13.6122 13.5867L8.92473 7.99916Z" fill="currentColor"/></svg>'
        }, {
            name: "arrow-right",
            theme: "outline",
            icon: '<svg width="1em" height="1em" viewBox="0 0 16 12">\n<path d="M15 6H1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n<path d="M10 11L15 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n<path d="M10 1L15 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n</svg>'
        }, {
            name: "wb-info-circle",
            theme: "outline",
            icon: '<svg width="1em" height="1em" viewBox="0 0 32 32" fill="none"><path d="M16 0.25C7.30234 0.25 0.25 7.30234 0.25 16C0.25 24.6977 7.30234 31.75 16 31.75C24.6977 31.75 31.75 24.6977 31.75 16C31.75 7.30234 24.6977 0.25 16 0.25ZM16 29.0781C8.77891 29.0781 2.92188 23.2211 2.92188 16C2.92188 8.77891 8.77891 2.92188 16 2.92188C23.2211 2.92188 29.0781 8.77891 29.0781 16C29.0781 23.2211 23.2211 29.0781 16 29.0781Z" fill="currentColor"/><path d="M14.312 9.8125C14.312 10.2601 14.4897 10.6893 14.8062 11.0057C15.1227 11.3222 15.5519 11.5 15.9995 11.5C16.447 11.5 16.8762 11.3222 17.1927 11.0057C17.5092 10.6893 17.687 10.2601 17.687 9.8125C17.687 9.36495 17.5092 8.93572 17.1927 8.61926C16.8762 8.30279 16.447 8.125 15.9995 8.125C15.5519 8.125 15.1227 8.30279 14.8062 8.61926C14.4897 8.93572 14.312 9.36495 14.312 9.8125ZM16.8432 13.75H15.1557C15.001 13.75 14.8745 13.8766 14.8745 14.0312V23.5938C14.8745 23.7484 15.001 23.875 15.1557 23.875H16.8432C16.9979 23.875 17.1245 23.7484 17.1245 23.5938V14.0312C17.1245 13.8766 16.9979 13.75 16.8432 13.75Z" fill="currentColor"/></svg>'
        }, {
            name: "wb-barcode-return",
            theme: "outline",
            icon: '<svg width="1em" height="1em" viewBox="0 0 24 24" fill="none"><path d="M20 9.478V6C20 4.895 19.105 4 18 4H14.522" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M8.478 4H5C3.895 4 3 4.895 3 6V9.478" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M3 14.522V18C3 19.105 3.895 20 5 20H8.478" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M10.035 15.965C10.055 15.985 10.055 16.016 10.035 16.036C10.015 16.056 9.98401 16.056 9.96401 16.036C9.94401 16.016 9.94401 15.985 9.96401 15.965C9.98401 15.945 10.016 15.945 10.035 15.965" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M7 8V16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M13 8V11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M10 8V13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M16 8V10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M16 20H17.5C18.881 20 20 18.881 20 17.5V17.5C20 16.119 18.881 15 17.5 15H13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M15 17L13 15L15 13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>'
        }, {
            name: "RU",
            theme: "fill",
            icon: '<svg width="28" height="20" viewBox="0 0 28 20" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.25" y="0.25" width="27.5" height="19.5" rx="1.75" fill="white" stroke="#F5F5F5" stroke-width="0.5"/><mask id="mask72" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="28" height="20"><rect x="0.25" y="0.25" width="27.5" height="19.5" rx="1.75" fill="white" stroke="white" stroke-width="0.5"/></mask><g mask="url(#mask72)"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 13.3327H28V6.66602H0V13.3327Z" fill="#0C47B7"/><path fill-rule="evenodd" clip-rule="evenodd" d="M0 20.0007H28V13.334H0V20.0007Z" fill="#E53B35"/></g></svg>'
        }, {
            name: "BY",
            theme: "fill",
            icon: '<svg width="28" height="20" viewBox="0 0 28 20" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="28" height="20" rx="2" fill="white"/><mask id="mask77" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="28" height="20"><rect width="28" height="20" rx="2" fill="white"/></mask><g mask="url(#mask77)"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 13.3333H28V0H0V13.3333Z" fill="#E54252"/><path fill-rule="evenodd" clip-rule="evenodd" d="M0 20.0007H28V13.334H0V20.0007Z" fill="#5CBE6B"/><path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H4V3L3.33333 4L4 5V7L3.33333 8L4 9V11L3.33333 12L4 13V15L3.33333 16L4 17V20H0V0Z" fill="white"/><path fill-rule="evenodd" clip-rule="evenodd" d="M-0.666667 2L-2 4L-0.666667 6L-2 8L-0.666667 10L-2 12L-0.666667 14L-2 16L-0.666667 18L0.666667 16L-0.666667 14L0.666667 12L-0.666667 10L0.666667 8L-0.666667 6L0.666667 4L-0.666667 2Z" fill="#E54252"/><path fill-rule="evenodd" clip-rule="evenodd" d="M0.666687 2L2.00002 0L3.33335 2L2.00002 4L0.666687 2ZM2.00002 8L0.666687 6L2.00002 4L3.33335 6L2.00002 8ZM2.00002 12L0.666687 10L2.00002 8L3.33335 10L2.00002 12ZM2.00002 16L3.33335 14L2.00002 12L0.666687 14L2.00002 16ZM2.00002 16L3.33335 18L2.00002 20L0.666687 18L2.00002 16Z" fill="#E54252"/></g></svg>'
        }, {
            name: "KZ",
            theme: "fill",
            icon: '<svg width="28" height="20" viewBox="0 0 28 20" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="28" height="20" rx="2" fill="white"/><mask id="mask82" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="28" height="20"><rect width="28" height="20" rx="2" fill="white"/></mask><g mask="url(#mask82)"><rect width="28" height="20" fill="#30C6E0"/><path fill-rule="evenodd" clip-rule="evenodd" d="M14 14C16.2091 14 18 12.2091 18 10C18 7.79086 16.2091 6 14 6C11.7909 6 10 7.79086 10 10C10 12.2091 11.7909 14 14 14Z" fill="#FFCD4B"/><path fill-rule="evenodd" clip-rule="evenodd" d="M12.3682 17.1486L14 14.7127L15.6318 17.1486L16.0452 14.2459L18.5723 15.7325L17.6853 12.938L20.6071 13.1809L18.5955 11.048L21.3334 9.99908L18.5955 8.9502L20.6071 6.81727L17.6853 7.06019L18.5723 4.26565L16.0452 5.75226L15.6318 2.84961L14 5.28547L12.3682 2.84961L11.9549 5.75226L9.42776 4.26565L10.3148 7.06019L7.39292 6.81727L9.40459 8.9502L6.66669 9.99908L9.40459 11.048L7.39292 13.1809L10.3148 12.938L9.42776 15.7325L11.9549 14.2459L12.3682 17.1486ZM18.6667 9.99908C18.6667 12.5764 16.5773 14.6657 14 14.6657C11.4227 14.6657 9.33335 12.5764 9.33335 9.99908C9.33335 7.42175 11.4227 5.33241 14 5.33241C16.5773 5.33241 18.6667 7.42175 18.6667 9.99908Z" fill="#FFCD4B"/><path fill-rule="evenodd" clip-rule="evenodd" d="M1.33331 1.66732C1.33331 1.48322 1.48255 1.33398 1.66665 1.33398H2.33331C2.51741 1.33398 2.66665 1.48322 2.66665 1.66732V2.33398C2.66665 2.51808 2.51741 2.66732 2.33331 2.66732H1.66665C1.48255 2.66732 1.33331 2.51808 1.33331 2.33398V1.66732ZM1.33331 4.33398C1.33331 4.14989 1.48255 4.00065 1.66665 4.00065H2.33331C2.51741 4.00065 2.66665 4.14989 2.66665 4.33398V5.00065C2.66665 5.18475 2.51741 5.33398 2.33331 5.33398H1.66665C1.48255 5.33398 1.33331 5.18475 1.33331 5.00065V4.33398ZM1.66665 6.66732C1.48255 6.66732 1.33331 6.81656 1.33331 7.00065V7.66732C1.33331 7.85141 1.48255 8.00065 1.66665 8.00065H2.33331C2.51741 8.00065 2.66665 7.85141 2.66665 7.66732V7.00065C2.66665 6.81656 2.51741 6.66732 2.33331 6.66732H1.66665ZM1.33331 9.66732C1.33331 9.48322 1.48255 9.33398 1.66665 9.33398H2.33331C2.51741 9.33398 2.66665 9.48322 2.66665 9.66732V10.334C2.66665 10.5181 2.51741 10.6673 2.33331 10.6673H1.66665C1.48255 10.6673 1.33331 10.5181 1.33331 10.334V9.66732ZM1.66665 12.0007C1.48255 12.0007 1.33331 12.1499 1.33331 12.334V13.0007C1.33331 13.1847 1.48255 13.334 1.66665 13.334H2.33331C2.51741 13.334 2.66665 13.1847 2.66665 13.0007V12.334C2.66665 12.1499 2.51741 12.0007 2.33331 12.0007H1.66665ZM1.33331 15.0007C1.33331 14.8166 1.48255 14.6673 1.66665 14.6673H2.33331C2.51741 14.6673 2.66665 14.8166 2.66665 15.0007V15.6673C2.66665 15.8514 2.51741 16.0007 2.33331 16.0007H1.66665C1.48255 16.0007 1.33331 15.8514 1.33331 15.6673V15.0007ZM1.66665 17.334C1.48255 17.334 1.33331 17.4832 1.33331 17.6673V18.334C1.33331 18.5181 1.48255 18.6673 1.66665 18.6673H2.33331C2.51741 18.6673 2.66665 18.5181 2.66665 18.334V17.6673C2.66665 17.4832 2.51741 17.334 2.33331 17.334H1.66665ZM2.66665 16.334C2.66665 16.1499 2.81588 16.0007 2.99998 16.0007H3.66665C3.85074 16.0007 3.99998 16.1499 3.99998 16.334V17.0007C3.99998 17.1847 3.85074 17.334 3.66665 17.334H2.99998C2.81589 17.334 2.66665 17.1847 2.66665 17.0007V16.334ZM2.99998 13.334C2.81588 13.334 2.66665 13.4832 2.66665 13.6673V14.334C2.66665 14.5181 2.81589 14.6673 2.99998 14.6673H3.66665C3.85074 14.6673 3.99998 14.5181 3.99998 14.334V13.6673C3.99998 13.4832 3.85074 13.334 3.66665 13.334H2.99998ZM2.66665 11.0007C2.66665 10.8166 2.81588 10.6673 2.99998 10.6673H3.66665C3.85074 10.6673 3.99998 10.8166 3.99998 11.0007V11.6673C3.99998 11.8514 3.85074 12.0007 3.66665 12.0007H2.99998C2.81589 12.0007 2.66665 11.8514 2.66665 11.6673V11.0007ZM2.99998 8.00065C2.81588 8.00065 2.66665 8.14989 2.66665 8.33398V9.00065C2.66665 9.18475 2.81589 9.33398 2.99998 9.33398H3.66665C3.85074 9.33398 3.99998 9.18475 3.99998 9.00065V8.33398C3.99998 8.14989 3.85074 8.00065 3.66665 8.00065H2.99998ZM2.66665 5.66732C2.66665 5.48322 2.81588 5.33398 2.99998 5.33398H3.66665C3.85074 5.33398 3.99998 5.48322 3.99998 5.66732V6.33398C3.99998 6.51808 3.85074 6.66732 3.66665 6.66732H2.99998C2.81589 6.66732 2.66665 6.51808 2.66665 6.33398V5.66732ZM2.99998 2.66732C2.81588 2.66732 2.66665 2.81656 2.66665 3.00065V3.66732C2.66665 3.85141 2.81589 4.00065 2.99998 4.00065H3.66665C3.85074 4.00065 3.99998 3.85141 3.99998 3.66732V3.00065C3.99998 2.81656 3.85074 2.66732 3.66665 2.66732H2.99998Z" fill="#FFCD4B"/></g></svg>'
        }, {
            name: "KG",
            theme: "fill",
            icon: '<svg width="28" height="20" viewBox="0 0 28 20" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="28" height="20" rx="2" fill="white"/><mask id="mask0_KGZ" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="28" height="20"><rect width="28" height="20" rx="2" fill="white"/></mask><g mask="url(#mask0_KGZ)"><rect width="28" height="20" fill="#F22A46"/><path fill-rule="evenodd" clip-rule="evenodd" d="M14.0001 13.3333C15.841 13.3333 17.3334 11.841 17.3334 10C17.3334 8.15906 15.841 6.66667 14.0001 6.66667C12.1591 6.66667 10.6667 8.15906 10.6667 10C10.6667 11.841 12.1591 13.3333 14.0001 13.3333Z" fill="#FFF04D"/><path fill-rule="evenodd" clip-rule="evenodd" d="M12.3683 17.1495L14.0001 14.7136L15.6319 17.1495L16.0452 14.2468L18.5723 15.7334L17.6853 12.9389L20.6072 13.1818L18.5955 11.0489L21.3334 10L18.5955 8.95112L20.6072 6.81818L17.6853 7.06111L18.5723 4.26657L16.0452 5.75318L15.6319 2.85052L14.0001 5.28638L12.3683 2.85052L11.9549 5.75318L9.42782 4.26657L10.3148 7.06111L7.39298 6.81818L9.40465 8.95112L6.66675 10L9.40465 11.0489L7.39298 13.1818L10.3148 12.9389L9.42782 15.7334L11.9549 14.2468L12.3683 17.1495ZM18.6667 10C18.6667 12.5773 16.5774 14.6667 14.0001 14.6667C11.4228 14.6667 9.33341 12.5773 9.33341 10C9.33341 7.42267 11.4228 5.33333 14.0001 5.33333C16.5774 5.33333 18.6667 7.42267 18.6667 10Z" fill="#FFF04D"/></g></svg>'
        }, {
            name: "AM",
            theme: "fill",
            icon: '<svg width="28" height="20" viewBox="0 0 28 20" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="28" height="20" rx="2" fill="white"/><mask id="mask0_AM" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="28" height="20"><rect width="28" height="20" rx="2" fill="white"/></mask><g mask="url(#mask0_AM)"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 13.3333H28V6.66666H0V13.3333Z" fill="#1047B9"/><path fill-rule="evenodd" clip-rule="evenodd" d="M0 6.66667H28V0H0V6.66667Z" fill="#F01C31"/><path fill-rule="evenodd" clip-rule="evenodd" d="M0 20H28V13.3333H0V20Z" fill="#FECB2F"/></g></svg>'
        }, {
            name: "UZ",
            theme: "fill",
            icon: '<svg width="28" height="20" viewBox="0 0 28 20" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.25" y="0.25" width="27.5" height="19.5" rx="1.75" fill="white" stroke="#F5F5F5" stroke-width="0.5"/><mask id="mask0_10164_67058" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="28" height="20"><rect x="0.25" y="0.25" width="27.5" height="19.5" rx="1.75" fill="white" stroke="white" stroke-width="0.5"/></mask><g mask="url(#mask0_10164_67058)"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 6.66667H28V0H0V6.66667Z" fill="#04AAC8"/><path fill-rule="evenodd" clip-rule="evenodd" d="M0 20H28V14H0V20Z" fill="#23C840"/><path fill-rule="evenodd" clip-rule="evenodd" d="M4.66663 5.33333C5.07791 5.33333 5.46019 5.20919 5.77805 4.99633C5.74122 4.99876 5.70407 4.99999 5.66663 4.99999C4.74615 4.99999 3.99996 4.2538 3.99996 3.33333C3.99996 2.41285 4.74615 1.66666 5.66663 1.66666C5.70407 1.66666 5.74122 1.6679 5.77805 1.67033C5.46019 1.45747 5.07791 1.33333 4.66663 1.33333C3.56206 1.33333 2.66663 2.22876 2.66663 3.33333C2.66663 4.4379 3.56206 5.33333 4.66663 5.33333ZM7.99996 4.66666C7.99996 5.03485 7.70148 5.33333 7.33329 5.33333C6.9651 5.33333 6.66663 5.03485 6.66663 4.66666C6.66663 4.29847 6.9651 3.99999 7.33329 3.99999C7.70148 3.99999 7.99996 4.29847 7.99996 4.66666ZM9.99996 2.66666C10.3681 2.66666 10.6666 2.36818 10.6666 1.99999C10.6666 1.63181 10.3681 1.33333 9.99996 1.33333C9.63177 1.33333 9.33329 1.63181 9.33329 1.99999C9.33329 2.36818 9.63177 2.66666 9.99996 2.66666ZM13.3333 1.99999C13.3333 2.36818 13.0348 2.66666 12.6666 2.66666C12.2984 2.66666 12 2.36818 12 1.99999C12 1.63181 12.2984 1.33333 12.6666 1.33333C13.0348 1.33333 13.3333 1.63181 13.3333 1.99999ZM12.6666 5.33333C13.0348 5.33333 13.3333 5.03485 13.3333 4.66666C13.3333 4.29847 13.0348 3.99999 12.6666 3.99999C12.2984 3.99999 12 4.29847 12 4.66666C12 5.03485 12.2984 5.33333 12.6666 5.33333ZM10.6666 4.66666C10.6666 5.03485 10.3681 5.33333 9.99996 5.33333C9.63177 5.33333 9.33329 5.03485 9.33329 4.66666C9.33329 4.29847 9.63177 3.99999 9.99996 3.99999C10.3681 3.99999 10.6666 4.29847 10.6666 4.66666Z" fill="white"/><line y1="6.65" x2="28" y2="6.65" stroke="#DF1B00" stroke-width="0.7"/><line y1="13.65" x2="28" y2="13.65" stroke="#DF1B00" stroke-width="0.7"/></g></svg>'
        }, {
            name: "AZ",
            theme: "fill",
            icon: '<svg viewBox="0 0 28 20" fill="none"><rect width="28" height="20" rx="2" fill="white"/><mask id="mask0_142_79" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="28" height="20"><rect width="28" height="20" rx="2" fill="white"/></mask><g mask="url(#mask0_142_79)"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 6.66667H28V0H0V6.66667Z" fill="#24AAD5"/><path fill-rule="evenodd" clip-rule="evenodd" d="M0 20H28V13.3333H0V20Z" fill="#21BF75"/><path fill-rule="evenodd" clip-rule="evenodd" d="M0 13.3333H28V6.66667H0V13.3333Z" fill="#ED1845"/><g filter="url(#filter0_d_142_79)"><path fill-rule="evenodd" clip-rule="evenodd" d="M14 12C14.4113 12 14.7936 11.8759 15.1114 11.663C15.0746 11.6654 15.0374 11.6667 15 11.6667C14.0795 11.6667 13.3333 10.9205 13.3333 10C13.3333 9.07953 14.0795 8.33333 15 8.33333C15.0374 8.33333 15.0746 8.33457 15.1114 8.337C14.7936 8.12414 14.4113 8 14 8C12.8954 8 12 8.89543 12 10C12 11.1046 12.8954 12 14 12ZM16 10C16 10.3682 15.7015 10.6667 15.3333 10.6667C14.9651 10.6667 14.6667 10.3682 14.6667 10C14.6667 9.63181 14.9651 9.33333 15.3333 9.33333C15.7015 9.33333 16 9.63181 16 10Z" fill="white"/></g></g><defs><filter id="filter0_d_142_79" x="12" y="8" width="4" height="5" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dy="1"/><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_142_79"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_142_79" result="shape"/></filter></defs></svg>'
        }, {
            name: "GE",
            theme: "fill",
            icon: '<svg width="28" height="20" viewBox="0 0 28 20" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.25" y="0.25" width="27.5" height="19.5" rx="1.75" fill="white" stroke="#F5F5F5" stroke-width="0.5"/><mask id="mask0_142_83" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="28" height="20"><rect x="0.25" y="0.25" width="27.5" height="19.5" rx="1.75" fill="white" stroke="white" stroke-width="0.5"/></mask><g mask="url(#mask0_142_83)"><path fill-rule="evenodd" clip-rule="evenodd" d="M16 21.3333H12V12H-1.33334V7.99999H12V-1.33334H16V7.99999H29.3333V12H16V21.3333Z" fill="#FF2B37"/><path fill-rule="evenodd" clip-rule="evenodd" d="M21.6 4.4L20 4.66667V3.33333L21.6 3.6L21.3333 2H22.6667L22.4 3.6L24 3.33333V4.66667L22.4 4.4L22.6667 6H21.3333L21.6 4.4Z" fill="#FD0D1B"/><path fill-rule="evenodd" clip-rule="evenodd" d="M5.6 4.4L4 4.66667V3.33333L5.6 3.6L5.33333 2H6.66667L6.4 3.6L8 3.33333V4.66667L6.4 4.4L6.66667 6H5.33333L5.6 4.4Z" fill="#FD0D1B"/><path fill-rule="evenodd" clip-rule="evenodd" d="M5.6 16.4L4 16.6667V15.3333L5.6 15.6L5.33333 14H6.66667L6.4 15.6L8 15.3333V16.6667L6.4 16.4L6.66667 18H5.33333L5.6 16.4Z" fill="#FD0D1B"/><path fill-rule="evenodd" clip-rule="evenodd" d="M21.6 16.4L20 16.6667V15.3333L21.6 15.6L21.3333 14H22.6667L22.4 15.6L24 15.3333V16.6667L22.4 16.4L22.6667 18H21.3333L21.6 16.4Z" fill="#FD0D1B"/></g></svg>'
        }, {
            name: "wb-arrow-right",
            theme: "outline",
            icon: '<svg viewBox="0 0 5 8" fill="none"><path d="M0.666667 7.33332L4 3.99906L0.666667 0.666656" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" fill="none"/></svg>'
        }, {
            name: "wb-arrow-back",
            theme: "outline",
            icon: '<svg viewBox="0 0 16 16" ><path d="M5.3335 3.3335L3.3335 5.3335L5.3335 7.3335" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M3.3335 5.3335H9.3335C11.5428 5.3335 13.3335 6.97483 13.3335 9.00016V9.00016C13.3335 11.0255 11.5428 12.6668 9.3335 12.6668H4.00016" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>'
        }, {
            name: "wb-chat",
            theme: "outline",
            icon: '<svg viewBox="0 0 28 28">\n<path opacity="0.4" d="M14.024 2.33331C7.24565 2.33331 2.33398 7.86331 2.33398 14C2.33398 15.96 2.90565 17.9783 3.90898 19.8216C4.09565 20.125 4.11898 20.51 3.99065 20.8716L3.20898 23.485C3.03398 24.115 3.57065 24.5816 4.16565 24.395L6.52232 23.695C7.16398 23.485 7.66565 23.7533 8.26182 24.115C9.96515 25.1183 12.0873 25.6316 14.0007 25.6316C19.7873 25.6316 25.6673 21.1633 25.6673 13.965C25.6673 7.75831 20.6507 2.33331 14.024 2.33331Z" fill="#1890FF"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M13.9776 15.5051C13.1493 15.4934 12.4843 14.8284 12.4843 14.0001C12.4843 13.1834 13.1609 12.5067 13.9776 12.5184C14.8059 12.5184 15.4709 13.1834 15.4709 14.0117C15.4709 14.8284 14.8059 15.5051 13.9776 15.5051ZM8.5988 15.505C7.78214 15.505 7.10547 14.8284 7.10547 14.0117C7.10547 13.1834 7.77047 12.5184 8.5988 12.5184C9.42714 12.5184 10.0921 13.1834 10.0921 14.0117C10.0921 14.8284 9.42714 15.4934 8.5988 15.505ZM17.8624 14.0117C17.8624 14.8284 18.5274 15.5051 19.3557 15.5051C20.184 15.5051 20.849 14.8284 20.849 14.0117C20.849 13.1834 20.184 12.5184 19.3557 12.5184C18.5274 12.5184 17.8624 13.1834 17.8624 14.0117Z" fill="#1890FF"/>\n</svg>'
        }, {
            name: "wb-time-circle",
            theme: "outline",
            icon: '<svg viewBox="0 0 28 28"><path d="M2.33398 14.0001C2.33398 20.4518 7.56065 25.6668 14.0007 25.6668C20.4523 25.6668 25.6673 20.4518 25.6673 14.0001C25.6673 7.5601 20.4523 2.33344 14.0007 2.33344C7.56065 2.33344 2.33398 7.5601 2.33398 14.0001Z" fill="#FF9900" fill-opacity="0.4"/><path d="M18.1787 18.4567C18.0154 18.4567 17.8637 18.41 17.7237 18.3284L13.1504 15.5984C12.8821 15.435 12.7188 15.155 12.7188 14.8517V8.96002C12.7188 8.47002 13.1154 8.08502 13.5937 8.08502C14.0721 8.08502 14.4687 8.47002 14.4687 8.96002V14.35L18.6221 16.8234C19.0421 17.08 19.1704 17.6167 18.9254 18.025C18.7621 18.305 18.4704 18.4567 18.1787 18.4567Z" fill="#FF9900"/></svg>'
        }, {
            name: "wb-icon-play",
            theme: "outline",
            icon: '<svg viewBox="0 0 21 20"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.04099 4.65399L14.9518 8.82713C15.6994 9.35423 15.6994 10.6465 14.9518 11.1736L9.04099 15.3468C8.27968 15.8848 7.31738 15.2286 7.31738 14.1726V5.82814C7.31738 4.77213 8.27968 4.11599 9.04099 4.65399V4.65399Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><circle cx="10.3667" cy="10" r="9.5" stroke="currentColor"/></svg>'
        }, {
            name: "wb-ruler",
            theme: "outline",
            icon: '<svg viewBox="0 0 20 20"><path d="M3.52637 11.9697L5.21457 13.6588" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/><path d="M8.59277 6.90332L10.2818 8.59236" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/><path d="M5.21484 10.2822L6.34115 11.4077" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/><path d="M6.90381 8.59277L8.03011 9.71824" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/><path d="M10.2817 5.21484L11.4072 6.34115" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/><path d="M11.9702 3.52637L13.0965 4.65184" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/><path fill-rule="evenodd" clip-rule="evenodd" d="M3.18749 15.0098C2.44159 14.2639 2.44159 13.0545 3.18749 12.3086L12.3082 3.1879C13.0541 2.442 14.2634 2.442 15.0093 3.1879L16.812 4.99054C17.5579 5.73644 17.5579 6.94579 16.812 7.69169L7.69128 16.8124C6.94537 17.5583 5.73603 17.5583 4.99013 16.8124L3.18749 15.0098Z" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/></svg>'
        }, {
            name: "wb-paint",
            theme: "outline",
            icon: '<svg viewBox="0 0 20 20"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.87333 17.4962C8.35074 17.4956 7.85866 17.25 7.54413 16.8326C7.22961 16.4153 7.12905 15.8746 7.2725 15.3721L7.4875 14.6221C7.53071 14.4728 7.55259 14.3182 7.5525 14.1629C7.5525 13.2424 6.80631 12.4962 5.88583 12.4962H4.16667C3.24619 12.4962 2.5 11.75 2.5 10.8296V9.99622C2.5 9.92455 2.5 9.85205 2.5 9.78038C2.55644 7.79188 3.40057 5.90725 4.84666 4.54117C6.29276 3.1751 8.22233 2.43949 10.2108 2.49622C14.1734 2.64474 17.3515 5.82284 17.5 9.78538C17.5 9.85705 17.5 9.92872 17.5 10.0004C17.4977 14.1409 14.1405 17.4962 10 17.4962H8.87333Z" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/><path d="M14.167 9.76549C14.0506 9.76595 13.9566 9.86059 13.9569 9.97697C13.9572 10.0933 14.0517 10.1875 14.1681 10.1873C14.2845 10.1872 14.3787 10.0928 14.3787 9.97641C14.379 9.92026 14.3567 9.86636 14.3169 9.82673C14.2771 9.7871 14.2231 9.76505 14.167 9.76549" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/><path d="M10.02 5.62123C9.93454 5.62158 9.85773 5.67345 9.8255 5.7526C9.79327 5.83175 9.81198 5.92253 9.87289 5.98248C9.9338 6.04242 10.0249 6.05969 10.1035 6.02621C10.1821 5.99273 10.2328 5.91511 10.2318 5.82965C10.232 5.7735 10.2097 5.71959 10.1699 5.67997C10.1301 5.64034 10.0762 5.61829 10.02 5.61873" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/><path d="M7.08998 6.82898C6.97371 6.8299 6.88011 6.92473 6.88073 7.041C6.88134 7.15727 6.97593 7.25112 7.0922 7.25081C7.20847 7.25051 7.30256 7.15617 7.30257 7.0399C7.30279 6.9836 7.28041 6.92956 7.24045 6.88991C7.20048 6.85026 7.14627 6.82831 7.08998 6.82898" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/><path d="M12.9526 12.6942C12.8362 12.6947 12.7422 12.7893 12.7425 12.9057C12.7428 13.0221 12.8374 13.1162 12.9537 13.116C13.0701 13.1159 13.1644 13.0215 13.1644 12.9051C13.1648 12.8489 13.1426 12.7949 13.1028 12.7552C13.063 12.7155 13.0088 12.6935 12.9526 12.6942" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/><path d="M12.9526 6.82897C12.8362 6.82943 12.7422 6.92407 12.7425 7.04045C12.7428 7.15683 12.8374 7.25097 12.9537 7.25082C13.0701 7.25066 13.1644 7.15628 13.1644 7.0399C13.1648 6.98367 13.1426 6.92963 13.1028 6.88996C13.063 6.85028 13.0088 6.8283 12.9526 6.82897" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/></svg>'
        }, {
            name: "wb-brand",
            theme: "outline",
            icon: '<svg viewBox="0 0 20 20"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.74021 3.33301H5.08604C4.11771 3.33301 3.33354 4.11717 3.33354 5.08467V8.73884C3.33354 9.20384 3.51854 9.64884 3.84688 9.97801L10.8552 16.9863C11.5394 17.6705 12.6485 17.6705 13.3327 16.9863L16.9869 13.3322C17.671 12.648 17.671 11.5388 16.9869 10.8547L9.97854 3.84634C9.65021 3.51801 9.20438 3.33301 8.74021 3.33301Z" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/><path d="M12.5531 14.56C12.2698 14.4683 12.0696 14.3431 11.8043 14.0916C11.5192 13.8214 11.4584 13.6953 11.5404 13.5447C11.6158 13.4061 13.4275 11.7093 13.5629 11.6504C13.6616 11.6075 13.7021 11.6063 13.7912 11.6438C13.9457 11.709 14.3447 12.1564 14.4513 12.3841C14.8174 13.1664 14.4866 14.07 13.6939 14.4533C13.4375 14.5772 13.3843 14.5893 13.0577 14.5982C12.8352 14.6043 12.6457 14.5899 12.5531 14.56ZM13.2832 13.9134C13.4681 13.8592 13.7374 13.6285 13.8419 13.4348C13.9679 13.2012 13.9571 12.8354 13.8167 12.587C13.7576 12.4823 13.6938 12.3966 13.675 12.3966C13.6562 12.3966 13.3342 12.6853 12.9593 13.0382C12.4458 13.5214 12.2872 13.691 12.3165 13.7254C12.3378 13.7506 12.4406 13.8128 12.5449 13.8636C12.7568 13.9669 13.0362 13.9858 13.2832 13.9134ZM10.9375 13.1973C10.8779 13.139 10.8296 13.0614 10.8301 13.025C10.8307 12.9886 10.9375 12.5453 11.0675 12.04C11.3415 10.9753 11.3933 11.017 10.662 11.7132C10.4171 11.9463 10.1728 12.1478 10.1191 12.161C9.90472 12.2136 9.68675 11.9971 9.73551 11.7799C9.75898 11.6754 11.6615 9.863 11.8013 9.81196C11.9746 9.74869 12.2009 9.91052 12.2009 10.0977C12.2009 10.1628 12.0996 10.6021 11.9758 11.0741C11.852 11.546 11.7581 11.9394 11.7672 11.9482C11.7762 11.957 12.0267 11.7351 12.3239 11.4551C12.8295 10.9789 12.8736 10.946 13.0081 10.946C13.2001 10.946 13.313 11.0609 13.3133 11.2566C13.3135 11.4149 13.4522 11.2711 11.909 12.714C11.2023 13.3748 11.1471 13.4022 10.9375 13.1973ZM9.15797 11.384C9.02151 11.2505 9.02203 11.1663 9.16112 10.8787L9.27259 10.6482L9.09002 10.4435C8.98961 10.331 8.83408 10.1691 8.7444 10.0838L8.58134 9.92866L8.36131 10.0239C8.07212 10.149 7.91032 10.1487 7.79962 10.0229C7.69198 9.90045 7.69147 9.74247 7.79835 9.62666C7.90018 9.51632 10.4209 8.44372 10.5784 8.44372C10.7204 8.44372 10.8662 8.58938 10.8662 8.73128C10.8662 8.86758 9.6728 11.3364 9.56336 11.4265C9.44522 11.5238 9.28354 11.5068 9.15797 11.384ZM9.73031 9.71441C9.80451 9.55562 9.86522 9.41752 9.86522 9.40753C9.86522 9.38923 9.27013 9.63025 9.2382 9.66148C9.21891 9.68035 9.53351 10.0031 9.57119 10.0031C9.5845 10.0031 9.6561 9.87321 9.73031 9.71441ZM7.21443 9.41535C7.10599 9.35451 7.05018 9.27177 7.04829 9.16903C7.04737 9.11916 7.14107 8.81233 7.25651 8.48717C7.51898 7.74786 7.50141 7.69675 7.11202 8.06677C6.68858 8.46913 6.57518 8.55252 6.45144 8.55252C6.29032 8.55252 6.1581 8.41086 6.15679 8.23684C6.1558 8.10565 6.1875 8.06896 6.83339 7.4537C7.20609 7.09868 7.66674 6.66703 7.85706 6.49449C8.31869 6.07598 8.3496 6.07498 8.75112 6.46543C9.0822 6.78739 9.22858 7.02007 9.25909 7.27287C9.33116 7.87008 8.7588 8.4058 8.16262 8.29916L8.01609 8.27295L7.83947 8.76632C7.6113 9.40371 7.46482 9.55581 7.21443 9.41535ZM8.51737 7.59619C8.67904 7.46016 8.66047 7.28445 8.46414 7.0924L8.30873 6.94039L8.0861 7.15589L7.86347 7.37139L8.01936 7.52677C8.20501 7.71181 8.3551 7.73273 8.51737 7.59619ZM5.5644 7.57574C5.36617 7.51676 5.23798 7.42334 4.92512 7.10988C4.63087 6.81507 4.60066 6.77179 4.60011 6.6442C4.59953 6.50997 4.62626 6.47814 5.18402 5.94895C5.50551 5.64392 5.96394 5.21554 6.20276 4.99698C6.59584 4.63725 6.65017 4.59961 6.77622 4.59961C6.90295 4.59961 6.94333 4.62814 7.22534 4.91693C7.39577 5.09146 7.56742 5.30213 7.60679 5.38509C7.86273 5.92451 7.58685 6.52592 7.00682 6.69301C6.79855 6.75301 6.7693 6.77285 6.749 6.86783C6.64001 7.37782 6.06137 7.72361 5.5644 7.57574ZM6.03733 6.87383C6.17443 6.75109 6.15114 6.56407 5.97487 6.3722L5.82899 6.21341L5.59623 6.43909L5.36348 6.66477L5.47333 6.77896C5.68213 6.99602 5.86627 7.02699 6.03733 6.87383ZM6.96418 6.00346C7.10369 5.87857 7.07907 5.68125 6.90086 5.49577L6.75412 5.34305L6.52222 5.56872L6.29033 5.7944L6.40018 5.90859C6.60898 6.12565 6.79312 6.15662 6.96418 6.00346Z" fill="currentColor"/></svg>'
        }, {
            name: "wb-back-bot-allowed",
            theme: "outline",
            icon: '<svg viewBox="0 0 27 20"><path d="M11.4402 10.5932L8.22461 7.63742L11.4402 4.68164" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/><path d="M8.22461 7.63672L14.6559 7.63672C16.787 7.63672 18.5146 9.22473 18.5146 11.1837C18.5146 13.1426 16.787 14.7306 14.6559 14.7306" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/><path fill-rule="evenodd" clip-rule="evenodd" d="M11.5957 15.4622L8.86719 12.9541L11.5957 15.4622Z" fill="white"/><path d="M11.5957 15.4622L8.86719 12.9541" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path fill-rule="evenodd" clip-rule="evenodd" d="M8.86719 15.4622L11.5957 12.9541L8.86719 15.4622Z" fill="currentColor"/><path d="M8.86719 15.4622L11.5957 12.9541" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>'
        }, {
            name: "wb-upload-photo",
            theme: "outline",
            icon: '<svg viewBox="0 0 36 36"><path d="M28.5037 8.99631V4.49443" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="transparent"/><path d="M26.2529 6.74542H30.7548" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="transparent"/><path d="M30.9729 27.9731L25.0589 22.0591C23.646 20.6462 21.3552 20.6462 19.9423 22.0591L10.4956 31.5058" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="transparent"/><path d="M17.9998 24.0025L11.5543 17.5571C10.1414 16.1442 7.85062 16.1442 6.43771 17.5571L4.49414 19.5006" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="transparent"/><path d="M31.5054 14.9988V25.5032C31.5054 28.8183 28.818 31.5057 25.5029 31.5057H10.4966C7.18155 31.5057 4.49414 28.8183 4.49414 25.5032V10.4969C4.49414 7.18185 7.18155 4.49443 10.4966 4.49443H19.5004" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="transparent"/><ellipse cx="21.8872" cy="12.8873" rx="2.25094" ry="2.25094" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="transparent"/></svg>'
        }, {
            name: "wb-video-camera",
            theme: "outline",
            icon: '<svg viewBox="0 0 32 32"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.5455 25H5.45455C3.5461 25 2 23.4238 2 21.4783V10.5217C2 8.57617 3.5461 7 5.45455 7H17.5455C19.4539 7 21 8.57617 21 10.5217V21.4783C21 23.4238 19.4539 25 17.5455 25Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="transparent"/><path d="M21 17.7444L27.072 22.6007C28.2496 23.5437 30 22.7105 30 21.2078V10.7922C30 9.28953 28.2496 8.45629 27.072 9.39925L21 14.2556" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="transparent"/></svg>'
        }, {
            name: "wb-add-file-photo-camera",
            theme: "outline",
            icon: '<svg viewBox="0 0 24 24"><path d="M14.8792 10.1678C16.4363 11.7248 16.4363 14.2492 14.8792 15.8062C13.3222 17.3633 10.7978 17.3633 9.24076 15.8062C7.68374 14.2492 7.68374 11.7248 9.24076 10.1678C10.7978 8.61075 13.3222 8.61075 14.8792 10.1678" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="transparent"/><path fill-rule="evenodd" clip-rule="evenodd" d="M21 9V18C21 19.105 20.105 20 19 20H5C3.895 20 3 19.105 3 18V9C3 7.895 3.895 7 5 7H7L8.462 4.496C8.641 4.189 8.97 4 9.326 4H14.63C14.981 4 15.306 4.184 15.487 4.484L17 7H19C20.105 7 21 7.895 21 9Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="transparent"/><path d="M20 2.5H23" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="transparent"/><path d="M21.5 4V1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="transparent"/></svg>'
        }, {
            name: "wb-add-file-video-camera",
            theme: "outline",
            icon: '<svg viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.1591 18.75H4.09091C2.65958 18.75 1.5 17.5679 1.5 16.1087V7.8913C1.5 6.43213 2.65958 5.25 4.09091 5.25H13.1591C14.5904 5.25 15.75 6.43213 15.75 7.8913V16.1087C15.75 17.5679 14.5904 18.75 13.1591 18.75Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="transparent"/><path d="M15.75 13.3083L20.304 16.9506C21.1872 17.6578 22.5 17.0329 22.5 15.9058V8.09417C22.5 6.96715 21.1872 6.34222 20.304 7.04944L15.75 10.6917" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="transparent"/><path d="M19 2.5H22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="transparent"/><path d="M20.5 4V1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="transparent"/></svg>'
        }, {
            name: "wb-clock",
            theme: "outline",
            icon: '<svg viewBox="0 0 25 24"><path d="M4.01953 8.99905C5.35962 5.22421 9.03418 2.79021 13.0327 3.02879C17.0313 3.26737 20.3903 6.12104 21.272 10.0284C22.1538 13.9359 20.3457 17.9555 16.837 19.8881C13.3284 21.8207 8.96469 21.2005 6.13341 18.367" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="transparent"/><path d="M9.49902 15.0014L12.5003 12.0001V6.99805" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="transparent"/><path d="M7.49825 8.99874H3.49658V4.99707" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="transparent"/></svg>'
        }, {
            name: "wb-clock-alt",
            theme: "outline",
            icon: '<svg viewBox="0 0 16 16" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M8 14.6666C11.3137 14.6666 14 11.9803 14 8.66658C14 5.35288 11.3137 2.66659 8 2.66659C4.68629 2.66659 2 5.35288 2 8.66658C2 11.9803 4.68629 14.6666 8 14.6666ZM8 5.49992C8.27614 5.49992 8.5 5.72378 8.5 5.99992V8.66658C8.5 8.94273 8.27614 9.16658 8 9.16658C7.72386 9.16658 7.5 8.94273 7.5 8.66658V5.99992C7.5 5.72378 7.72386 5.49992 8 5.49992Z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M6.16667 1.33325C6.16667 1.05711 6.39052 0.833252 6.66667 0.833252H9.33333C9.60948 0.833252 9.83333 1.05711 9.83333 1.33325C9.83333 1.60939 9.60948 1.83325 9.33333 1.83325H6.66667C6.39052 1.83325 6.16667 1.60939 6.16667 1.33325Z" fill="currentColor"/></svg>'
        }, {
            name: "wb-change-office",
            theme: "outline",
            icon: '<svg viewBox="0 0 24 24">\n<path d="M12 20.91H3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="transparent"/>\n<path d="M4.21997 10.78V20.91" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="transparent"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M19.6991 10.778C21.3971 10.766 22.5041 9.085 21.7681 7.636L20.0521 4.259C19.6621 3.489 18.8401 3 17.9381 3H6.0621C5.1601 3 4.3381 3.489 3.9471 4.259L2.2311 7.636C1.4951 9.085 2.6021 10.766 4.3001 10.778C5.7171 10.778 6.8661 9.81 6.8661 8.615V8.567C6.8661 9.788 8.0151 10.778 9.4321 10.778C10.8511 10.778 12.0001 9.788 12.0001 8.567C12.0001 9.788 13.1491 10.778 14.5661 10.778C15.9831 10.778 17.1321 9.788 17.1321 8.567V8.615C17.1331 9.81 18.2821 10.778 19.6991 10.778V10.778Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="transparent"/>\n<path d="M20 13L20.02 10.78" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="transparent"/>\n<path d="M16 21H17.5C18.881 21 20 19.881 20 18.5V18.5C20 17.119 18.881 16 17.5 16H13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="transparent"/>\n<path d="M15 18L13 16L15 14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="transparent"/>\n</svg>\n'
        }, {
            name: "wb-people-warning",
            theme: "outline",
            icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M10.1408 21.8213C5.85301 20.9445 2.76753 17.7305 2.08239 13.4271C1.94839 12.5854 1.98208 11.0076 2.15268 10.1349C3.07294 5.42773 7.1912 2.00687 11.946 2.00001C15.7617 1.99451 19.2194 4.10814 20.9314 7.49259C22.0351 9.67433 22.2946 12.2216 21.6597 14.6402C21.365 15.763 20.6936 17.106 19.9142 18.132C19.4927 18.6869 18.5065 19.6339 17.8883 20.0774C15.6383 21.6917 12.7196 22.3486 10.1408 21.8213ZM13.8959 20.6534C14.9499 20.4042 15.9586 19.9768 16.8459 19.4037C17.1033 19.2374 17.3139 19.0669 17.3139 19.0247C17.3139 18.9826 17.2129 18.8318 17.0895 18.6897C15.7624 17.1618 14.1685 15.3337 14.1395 15.3063C14.0767 15.2468 13.1593 14.2023 12.4439 13.3756C12.0665 12.9395 11.6755 12.4896 11.5751 12.3758C11.4747 12.2621 11.0276 11.7501 10.5816 11.2382C10.1355 10.7262 9.68895 10.2142 9.58917 10.1005C9.20767 9.66551 8.31027 8.64348 8.13614 8.44564C8.03601 8.33188 7.63173 7.86646 7.23774 7.41138C6.03357 6.0205 5.82111 5.79104 5.73744 5.79104C5.69312 5.79104 5.52203 5.95023 5.35724 6.1448C5.19245 6.33937 5.0255 6.53329 4.98623 6.57574C4.81889 6.75664 4.26034 7.65653 4.02949 8.11716C3.36309 9.44691 3.00288 11.3175 3.15548 12.656C3.32569 14.149 3.55375 14.943 4.13476 16.0655C5.37168 18.4552 7.8126 20.2695 10.3463 20.6824C10.6276 20.7283 10.9044 20.777 10.9613 20.7906C11.2548 20.8609 13.4533 20.7581 13.8959 20.6534ZM10.6245 19.8182C8.29942 19.3945 6.36816 17.994 5.16325 15.8579C4.78661 15.1901 4.2713 13.6667 4.38401 13.5541C4.40336 13.5348 4.52138 13.5616 4.64627 13.6137C5.02525 13.7719 5.84596 13.8687 6.61124 13.8457L7.33625 13.8238L7.3814 13.2328C7.40623 12.9077 7.46043 12.5199 7.50185 12.3709C7.54327 12.2219 7.57733 12.0655 7.57754 12.0233C7.57775 11.9809 7.33888 11.9083 7.0428 11.861C6.18699 11.724 5.27043 11.4712 4.77662 11.2359L4.31896 11.0178L4.36713 10.697C4.39362 10.5206 4.44422 10.3223 4.47957 10.2563C4.60834 10.016 5.33909 9.73529 6.38726 9.52341C7.61791 9.27465 7.54496 9.27434 7.77158 9.52922C8.13637 9.93951 9.00035 10.9246 9.14946 11.1003C9.22994 11.1951 9.35205 11.337 9.42081 11.4158C9.48957 11.4945 10.043 12.1291 10.6506 12.826C11.2583 13.5228 12.0195 14.3908 12.3423 14.7547C12.6651 15.1186 13.0846 15.5987 13.2745 15.8216C13.4644 16.0445 13.827 16.4618 14.0803 16.7491C15.3876 18.2317 15.8627 18.7955 15.8632 18.8649C15.864 18.9549 14.9868 19.3659 14.3448 19.5765C13.3006 19.919 11.7354 20.0206 10.6245 19.8182ZM18.5339 17.9781C18.9536 17.5329 19.496 16.7509 19.8453 16.087C20.4366 14.9633 20.7034 14.0165 20.8326 12.5827C20.998 10.7482 20.4764 8.77112 19.3957 7.13558C18.97 6.49131 18.9002 6.40842 18.1757 5.68761C16.976 4.49402 15.5256 3.70849 13.8269 3.33228C13.0959 3.17039 11.4186 3.13572 10.5717 3.265C9.75716 3.38935 8.80913 3.69477 8.02675 4.0849C7.44366 4.37565 6.68029 4.8771 6.68029 4.96937C6.68029 4.99946 7.77558 6.27714 9.11427 7.80867C11.5644 10.6117 12.1056 11.232 12.5495 11.7457C12.6824 11.8995 13.0242 12.2902 13.309 12.6138C13.5939 12.9375 13.9046 13.2945 13.9995 13.4071C14.0945 13.5198 14.3139 13.7682 14.4871 13.9592C14.7962 14.2999 16.0204 15.6997 16.3516 16.0911C16.4441 16.2005 16.5509 16.3247 16.5889 16.3673C16.6268 16.4098 16.891 16.7078 17.1758 17.0294C17.4606 17.3511 17.7513 17.6767 17.8217 17.7531C17.8921 17.8294 17.9967 17.9617 18.0541 18.0471C18.1944 18.2558 18.2842 18.2429 18.5339 17.9781ZM16.8996 15.1307C16.159 14.2801 15.3978 13.4025 15.2079 13.1805C14.8746 12.7909 14.0709 11.8741 13.6259 11.3761C13.5073 11.2433 12.8981 10.5459 12.2721 9.82631C11.6461 9.10668 10.6601 7.97563 10.081 7.31285C9.50181 6.65008 9.02796 6.08882 9.02796 6.06562C9.02796 6.00828 9.46447 5.80238 9.92338 5.64325C10.5096 5.43998 11.835 5.34705 12.8546 5.43774C15.0243 5.63071 15.8373 6.42455 15.9175 8.42841C15.9353 8.874 15.9618 9.23858 15.9764 9.23858C15.9909 9.23858 16.3211 9.28617 16.7102 9.34434C17.6146 9.47959 18.5184 9.69121 19.0231 9.88593C19.4761 10.0607 19.5824 10.2137 19.6094 10.7297L19.627 11.0658L19.2364 11.2609C18.8017 11.478 17.898 11.7301 17.0851 11.8611C16.791 11.9085 16.5384 11.9666 16.5238 11.9902C16.5091 12.0139 16.5411 12.2024 16.5948 12.4092C16.6485 12.616 16.6924 13.0078 16.6924 13.2799C16.6924 13.6674 16.7161 13.7837 16.8017 13.8164C16.8617 13.8395 17.2424 13.8577 17.6475 13.8571C18.2872 13.856 18.8733 13.7757 19.4371 13.6116C19.6399 13.5526 19.6422 13.7094 19.4481 14.368C19.2227 15.1328 18.443 16.6941 18.2928 16.6813C18.2671 16.6791 17.6401 15.9813 16.8996 15.1307Z" fill="currentColor"/></svg>'
        }, {
            name: "wb-sell-cart",
            theme: "outline",
            icon: '<svg viewBox="0 0 20 20"><path d="M13.3332 2.5V4.375" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/><path d="M6.66667 2.5V4.375" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/><path d="M2.5 7.49967H17.5" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/><path fill-rule="evenodd" clip-rule="evenodd" d="M15 17.4997H5C3.61917 17.4997 2.5 16.3805 2.5 14.9997V5.83301C2.5 4.45217 3.61917 3.33301 5 3.33301H15C16.3808 3.33301 17.5 4.45217 17.5 5.83301V14.9997C17.5 16.3805 16.3808 17.4997 15 17.4997Z" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/><path d="M8.08158 10.5467H12.5474L12.059 12.989H8.57003L7.87224 9.5H7" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M11.7345 14.7089C11.7485 14.7228 11.7485 14.7445 11.7345 14.7584C11.7206 14.7724 11.6989 14.7724 11.685 14.7584C11.671 14.7445 11.671 14.7228 11.685 14.7089C11.6989 14.6949 11.7212 14.6949 11.7345 14.7089" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M8.94349 14.7089C8.95745 14.7228 8.95745 14.7445 8.94349 14.7584C8.92954 14.7724 8.9079 14.7724 8.89395 14.7584C8.87999 14.7445 8.87999 14.7228 8.89395 14.7089C8.9079 14.6949 8.93023 14.6949 8.94349 14.7089" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>'
        }, {
            name: "exclamation-mark",
            theme: "outline",
            icon: '<svg viewBox="0 0 20 20" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M14.9497 5.05025C17.6834 7.78392 17.6834 12.2161 14.9497 14.9497C12.2161 17.6834 7.78392 17.6834 5.05025 14.9497C2.31658 12.2161 2.31658 7.78392 5.05025 5.05025C7.78392 2.31658 12.2161 2.31658 14.9497 5.05025Z" fill="currentColor"/><path d="M10 10.5V6.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M9.999 13.25C9.861 13.25 9.749 13.138 9.75 13C9.75 12.862 9.862 12.75 10 12.75C10.138 12.75 10.25 12.862 10.25 13C10.25 13.138 10.138 13.25 9.999 13.25" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>'
        }, {
            name: "wb-warning-triangle",
            theme: "outline",
            icon: '<svg width="28" height="28" viewBox="0 0 28 28" fill="none" ><path fill-rule="evenodd" clip-rule="evenodd" d="M7.75762 12.8441C10.4814 8.01469 11.8433 5.60001 14 5.60001C16.1567 5.60001 17.5186 8.01469 20.2424 12.8441L20.5818 13.4459C22.8453 17.459 23.977 19.4656 22.9542 20.9328C21.9313 22.4 19.4007 22.4 14.3394 22.4H13.6606C8.59934 22.4 6.06871 22.4 5.04586 20.9328C4.02301 19.4656 5.15474 17.459 7.4182 13.4459L7.75762 12.8441ZM14 9.56667C14.3866 9.56667 14.7 9.88007 14.7 10.2667V14.9333C14.7 15.3199 14.3866 15.6333 14 15.6333C13.6134 15.6333 13.3 15.3199 13.3 14.9333V10.2667C13.3 9.88007 13.6134 9.56667 14 9.56667ZM14 18.6667C14.5155 18.6667 14.9334 18.2488 14.9334 17.7333C14.9334 17.2179 14.5155 16.8 14 16.8C13.4846 16.8 13.0667 17.2179 13.0667 17.7333C13.0667 18.2488 13.4846 18.6667 14 18.6667Z" fill="currentColor"/></svg>'
        }, {
            name: "point",
            theme: "outline",
            icon: '<svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="2" cy="2" r="2" fill="black" fill-opacity="0.24"/></svg>'
        }, {
            name: "wb-employer-search",
            theme: "outline",
            icon: '<svg viewBox="0 0 24 24"><path d="M3.25 20C3.25 20.4142 3.58579 20.75 4 20.75C4.41421 20.75 4.75 20.4142 4.75 20H3.25ZM11.1 16.25C11.5142 16.25 11.85 15.9142 11.85 15.5C11.85 15.0858 11.5142 14.75 11.1 14.75V16.25ZM4.75 20C4.75 17.9142 6.41421 16.25 8.5 16.25V14.75C5.58579 14.75 3.25 17.0858 3.25 20H4.75ZM8.5 16.25H11.1V14.75H8.5V16.25Z" fill="currentColor"/><path d="M15 5.2C16.7 6.9 16.7 9.6 15 11.2C13.3 12.8 10.6 12.9 8.99999 11.2C7.39999 9.5 7.29999 6.8 8.99999 5.2C10.7 3.6 13.3 3.6 15 5.2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M18.3998 15.8C19.3998 16.8 19.3998 18.4 18.3998 19.4C17.3998 20.4 15.7998 20.4 14.7998 19.4C13.7998 18.4 13.7998 16.8 14.7998 15.8C15.7998 14.8 17.3998 14.8 18.3998 15.8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M19.9999 21L18.3999 19.4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>'
        }, {
            name: "wb-menu",
            theme: "outline",
            icon: '<svg viewBox="0 0 24 24"><path d="M5.49756 12H18.5026" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M5.49756 18.0017H18.5026" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M5.49756 5.99826H18.5026" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>'
        }, {
            name: "wb-calendar",
            theme: "outline",
            icon: '<svg viewBox="0 0 24 24" >\n<path fill-rule="evenodd" clip-rule="evenodd" d="M16.4109 2.76862L16.4119 3.51824C19.1665 3.73413 20.9862 5.61119 20.9891 8.48975L21 16.9155C21.0039 20.054 19.0322 21.985 15.8718 21.99L8.15188 22C5.01119 22.004 3.01482 20.027 3.01087 16.8795L3.00001 8.55272C2.99606 5.65517 4.75153 3.78311 7.50617 3.53024L7.50518 2.78061C7.5042 2.34083 7.83001 2.01 8.26444 2.01C8.69886 2.009 9.02468 2.33883 9.02567 2.77861L9.02666 3.47826L14.8914 3.47027L14.8904 2.77062C14.8894 2.33084 15.2152 2.001 15.6497 2C16.0742 1.999 16.4099 2.32884 16.4109 2.76862ZM4.52148 8.86157L19.4696 8.84158V8.49175C19.4272 6.34283 18.349 5.21539 16.4138 5.04748L16.4148 5.81709C16.4148 6.24688 16.0801 6.5877 15.6556 6.5877C15.2212 6.5887 14.8943 6.24887 14.8943 5.81909L14.8934 5.0095L9.02863 5.01749L9.02962 5.82609C9.02962 6.25687 8.70479 6.5967 8.27036 6.5967C7.83594 6.5977 7.50913 6.25887 7.50913 5.82809L7.50815 5.05847C5.58286 5.25137 4.51753 6.38281 4.52049 8.55072L4.52148 8.86157ZM15.2399 13.4043V13.4153C15.2498 13.8751 15.625 14.2239 16.0801 14.2139C16.5244 14.2029 16.8789 13.8221 16.869 13.3623C16.8483 12.9225 16.4918 12.5637 16.0485 12.5647C15.5944 12.5747 15.2389 12.9445 15.2399 13.4043ZM16.0554 17.892C15.6013 17.882 15.235 17.5032 15.234 17.0435C15.2241 16.5837 15.5884 16.2029 16.0426 16.1919H16.0525C16.5165 16.1919 16.8927 16.5707 16.8927 17.0405C16.8937 17.5102 16.5185 17.891 16.0554 17.892ZM11.1721 13.4203C11.1919 13.8801 11.568 14.2389 12.0222 14.2189C12.4665 14.1979 12.821 13.8181 12.8012 13.3583C12.7903 12.9085 12.425 12.5587 11.9807 12.5597C11.5266 12.5797 11.1711 12.9605 11.1721 13.4203ZM12.0262 17.8471C11.572 17.8671 11.1968 17.5082 11.1761 17.0485C11.1761 16.5887 11.5305 16.2089 11.9847 16.1879C12.429 16.1869 12.7953 16.5367 12.8052 16.9855C12.8259 17.4463 12.4705 17.8261 12.0262 17.8471ZM7.10433 13.4553C7.12408 13.915 7.50025 14.2749 7.95442 14.2539C8.39872 14.2339 8.75317 13.8531 8.73243 13.3933C8.72256 12.9435 8.35725 12.5937 7.91196 12.5947C7.45779 12.6147 7.10334 12.9955 7.10433 13.4553ZM7.95837 17.8521C7.5042 17.8731 7.12901 17.5132 7.10828 17.0535C7.10729 16.5937 7.46273 16.2129 7.9169 16.1929C8.3612 16.1919 8.7275 16.5417 8.73737 16.9915C8.7581 17.4513 8.40365 17.8321 7.95837 17.8521Z" fill="currentColor"/>\n</svg>'
        }, {
            name: "wb-transfer-arr",
            theme: "fill",
            icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M16 10L12 14L8 10" stroke="#BDBDBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n</svg>'
        }, {
            name: "wb-copy-buffer",
            theme: "fill",
            icon: '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">\n<g opacity="0.32">\n<rect width="12" height="12" rx="1" transform="matrix(-1 0 0 1 14.5 5.5)" fill="black" fill-opacity="0.32"/>\n<path d="M17.5 12.5V4.16667C17.5 3.24619 16.7538 2.5 15.8333 2.5H7.5" stroke="black" stroke-opacity="0.32" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>\n</g>\n</svg>'
        }, {
            name: "wb-star",
            theme: "outline",
            icon: '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.7365 6.89625L12.7775 6.17554L10.5607 1.6814C10.5001 1.55836 10.4005 1.45875 10.2775 1.3982C9.96888 1.24586 9.59388 1.37281 9.43958 1.6814L7.22278 6.17554L2.2638 6.89625C2.12708 6.91578 2.00208 6.98023 1.90638 7.07789C1.79068 7.19681 1.72692 7.35679 1.72912 7.5227C1.73132 7.6886 1.79929 7.84684 1.9181 7.96265L5.50599 11.4607L4.65833 16.4002C4.63845 16.5151 4.65117 16.6332 4.69503 16.7413C4.7389 16.8493 4.81216 16.9429 4.90651 17.0114C5.00086 17.08 5.11252 17.1207 5.22884 17.129C5.34515 17.1373 5.46146 17.1128 5.56458 17.0584L10.0001 14.7263L14.4357 17.0584C14.5568 17.1228 14.6974 17.1443 14.8322 17.1209C15.172 17.0623 15.4005 16.74 15.3419 16.4002L14.4943 11.4607L18.0822 7.96265C18.1798 7.86695 18.2443 7.74195 18.2638 7.60523C18.3165 7.26343 18.0783 6.94703 17.7365 6.89625Z" fill="currentColor"/></svg>'
        }, {
            name: "notice-mark",
            theme: "fill",
            icon: '<svg viewBox="0 0 32 32"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.66699 16.001C2.66699 23.3596 8.64033 29.3343 16.0003 29.3343C23.3737 29.3343 29.3337 23.3596 29.3337 16.001C29.3337 8.63962 23.3737 2.66763 16.0003 2.66763C8.64033 2.66763 2.66699 8.63962 2.66699 16.001ZM14.827 21.0543C14.827 21.693 15.3603 22.2276 16.0003 22.2276C16.6403 22.2276 17.1603 21.693 17.1603 21.0543V15.161C17.1603 14.5196 16.6403 14.001 16.0003 14.001C15.3603 14.001 14.827 14.5196 14.827 15.161V21.0543ZM16.0137 9.75962C15.3603 9.75962 14.8403 10.293 14.8403 10.933C14.8403 11.573 15.3603 12.093 16.0003 12.093C16.6537 12.093 17.1737 11.573 17.1737 10.933C17.1737 10.293 16.6537 9.75962 16.0137 9.75962Z" fill="currentColor"/></svg>'
        }, {
            name: "smooth-cross",
            theme: "outline",
            icon: '<svg viewBox="0 0 24 24"><path d="M8 8L16 16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M16 8L8 16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>'
        }, {
            name: "wb-down",
            theme: "outline",
            icon: '<svg viewBox="0 0 24 24"">\n<path d="M8 10L12 14L16 10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="transparent"/>\n</svg>\n'
        }, {
            name: "wb-question-hint",
            theme: "outline",
            icon: '<svg width="1em" height="1em" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M14.9497 5.05025C17.6834 7.78392 17.6834 12.2161 14.9497 14.9497C12.2161 17.6834 7.78392 17.6834 5.05025 14.9497C2.31658 12.2161 2.31658 7.78392 5.05025 5.05025C7.78392 2.31658 12.2161 2.31658 14.9497 5.05025Z" fill="currentColor" fill-opacity="1"/>\n<path d="M10.0006 13.1403C9.96831 13.1403 9.94139 13.1672 9.94139 13.1995C9.94139 13.2318 9.96831 13.2588 10.0006 13.2588C10.0329 13.2588 10.0599 13.2318 10.0599 13.1995C10.0599 13.1672 10.0329 13.1403 10.0006 13.1403V13.1403" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n<path d="M10.0002 10.7411C11.0222 10.7411 11.8514 9.9119 11.8514 8.8899C11.8514 7.8679 11.0233 7.03867 10.0002 7.03867C9.00296 7.03867 8.19634 7.82805 8.15649 8.81559" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n</svg>'
        }, {
            name: "wb-question-hint-thin",
            theme: "outline",
            icon: '<svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="11.9999" cy="12.0009" r="10" fill="currentColor"/><path d="M12.1002 15.9018C12.1001 15.957 12.0553 16.0017 12.0001 16.0017C11.9449 16.0017 11.9001 15.9569 11.9001 15.9017C11.9001 15.8465 11.9448 15.8017 12 15.8016C12.0266 15.8016 12.0521 15.8121 12.0709 15.8309C12.0897 15.8497 12.1002 15.8752 12.1002 15.9018" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 12.7114L13.3276 11.9738C13.9901 11.6058 14.401 10.9075 14.401 10.1496C14.3225 8.88929 13.2417 7.92852 11.9808 7.99833C10.8543 7.95156 9.85385 8.71311 9.599 9.81149" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>'
        }, {
            name: "orr-fill-calendar",
            theme: "outline",
            icon: '<svg viewBox="0 0 20 20"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.6757 2.30714L13.6766 2.93183C15.9721 3.11174 17.4885 4.67595 17.4909 7.07475L17.5 14.0962C17.5033 16.7116 15.8602 18.3208 13.2265 18.325L6.79324 18.3333C4.17599 18.3366 2.51235 16.6891 2.50906 14.0663L2.50001 7.12723C2.49671 4.7126 3.95961 3.15255 6.25514 2.94182L6.25432 2.31714C6.2535 1.95065 6.52501 1.67496 6.88703 1.67496C7.24905 1.67412 7.52057 1.94899 7.52139 2.31547L7.52221 2.89851L12.4095 2.89185L12.4087 2.30881C12.4078 1.94232 12.6794 1.66746 13.0414 1.66663C13.3952 1.66579 13.6749 1.94066 13.6757 2.30714ZM3.7679 7.3846L16.2247 7.36794V7.07642C16.1893 5.28565 15.2908 4.34612 13.6782 4.20619L13.679 4.84753C13.679 5.20569 13.4001 5.48971 13.0463 5.48971C12.6843 5.49055 12.412 5.20735 12.412 4.8492L12.4111 4.17454L7.52386 4.1812L7.52468 4.85503C7.52468 5.21402 7.25399 5.49721 6.89197 5.49721C6.52995 5.49804 6.25761 5.21568 6.25761 4.8567L6.25679 4.21535C4.65238 4.3761 3.76461 5.31897 3.76708 7.12556L3.7679 7.3846Z" fill="currentColor"/></svg>'
        }, {
            name: "wb-external-link",
            theme: "outline",
            icon: '<svg width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">\n<path d="M12 8.66667V12.6667C12 13.0203 11.8595 13.3594 11.6095 13.6095C11.3594 13.8595 11.0203 14 10.6667 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V5.33333C2 4.97971 2.14048 4.64057 2.39052 4.39052C2.64057 4.14048 2.97971 4 3.33333 4H7.33333" stroke="#C1C1C1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n<path d="M10 2H14V6" stroke="#C1C1C1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n<path d="M6.66666 9.33333L14 2" stroke="#C1C1C1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n</svg>'
        }, {
            name: "wb-map-point",
            theme: "outline",
            icon: '<svg width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">\n<rect x="2" y="2" width="12" height="12" rx="6" fill="white"/>\n<rect x="2" y="2" width="12" height="12" rx="6" stroke="currentColor" stroke-width="4"/>\n</svg>'
        }, {
            name: "wb-map-mark",
            theme: "outline",
            icon: '<svg width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M1.19995 6.65421C1.19995 2.97431 4.27506 0 7.99471 0C11.7248 0 14.8 2.97431 14.8 6.65421C14.8 8.50855 14.1256 10.2301 13.0156 11.6893C11.791 13.2988 10.2817 14.7012 8.58278 15.8019C8.19396 16.0563 7.84305 16.0755 7.41631 15.8019C5.70774 14.7012 4.19842 13.2988 2.98435 11.6893C1.87354 10.2301 1.19995 8.50855 1.19995 6.65421ZM5.75533 6.8614C5.75533 8.09416 6.76128 9.06374 7.99471 9.06374C9.22894 9.06374 10.2446 8.09416 10.2446 6.8614C10.2446 5.63824 9.22894 4.62147 7.99471 4.62147C6.76128 4.62147 5.75533 5.63824 5.75533 6.8614Z" fill="currentColor"/>\n</svg>'
        }, {
            name: "wb-reload",
            theme: "outline",
            icon: '<svg viewBox="0 0 24 24"><path d="M22.6368 3.89196L21.1261 5.07321C19.0663 2.44018 15.8627 0.75 12.2654 0.75C6.05379 0.75 1.02611 5.77232 1.01808 11.9866C1.01004 18.2063 6.04843 23.25 12.2654 23.25C17.1216 23.25 21.26 20.1696 22.835 15.8545C22.8752 15.742 22.8163 15.6161 22.7038 15.5786L21.185 15.0563C21.1321 15.0381 21.0741 15.0414 21.0236 15.0654C20.973 15.0894 20.9339 15.1323 20.9145 15.1848C20.8663 15.3188 20.8127 15.4527 20.7565 15.5839C20.2931 16.6821 19.6288 17.6679 18.7824 18.5143C17.9428 19.3555 16.9487 20.0267 15.8547 20.4911C14.7216 20.9705 13.5136 21.2143 12.2708 21.2143C11.0252 21.2143 9.81986 20.9705 8.68683 20.4911C7.59176 20.0286 6.59733 19.3572 5.75915 18.5143C4.91727 17.6748 4.24678 16.6795 3.78504 15.5839C3.30558 14.4482 3.06183 13.2429 3.06183 11.9973C3.06183 10.7518 3.30558 9.54643 3.78504 8.41072C4.24843 7.3125 4.91272 6.32679 5.75915 5.48036C6.60558 4.63393 7.59129 3.96964 8.68683 3.50357C9.81986 3.02411 11.0279 2.78036 12.2708 2.78036C13.5163 2.78036 14.7216 3.02411 15.8547 3.50357C16.9497 3.96601 17.9442 4.63746 18.7824 5.48036C19.0475 5.74554 19.2966 6.02679 19.527 6.32143L17.9145 7.58036C17.8826 7.60504 17.8583 7.63822 17.8444 7.6761C17.8305 7.71397 17.8276 7.75499 17.836 7.79444C17.8444 7.8339 17.8638 7.87018 17.8919 7.89912C17.92 7.92806 17.9557 7.94848 17.9949 7.95804L22.6984 9.10982C22.8324 9.14196 22.9636 9.04018 22.9636 8.90357L22.985 4.05804C22.9824 3.88125 22.7761 3.78214 22.6368 3.89196Z" fill="currentColor"/></svg>'
        }, {
            name: "wb-telegram",
            theme: "outline",
            icon: '<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M13.3085 10.9361L14.6817 6.81664C15.8813 3.21793 16.4811 1.41858 15.5312 0.468763C14.5814 -0.481052 12.7821 0.118732 9.18336 1.3183L5.06389 2.69146C2.15939 3.65963 0.707135 4.14371 0.294447 4.85359C-0.0981488 5.5289 -0.0981489 6.36295 0.294446 7.03827C0.707135 7.74814 2.15939 8.23223 5.06389 9.2004C5.42385 9.32038 5.82881 9.23471 6.09835 8.96766L10.5029 4.60396C10.7506 4.35847 11.1505 4.36033 11.396 4.60812C11.6415 4.85591 11.6397 5.2558 11.3919 5.5013L7.05849 9.79453C6.7614 10.0889 6.66736 10.5394 6.79961 10.9361C7.76777 13.8406 8.25186 15.2929 8.96173 15.7056C9.63704 16.0982 10.4711 16.0982 11.1464 15.7056C11.8563 15.2929 12.3404 13.8406 13.3085 10.9361Z" fill="currentColor" fill-opacity="0.24"/></svg>'
        }, {
            name: "wb-telegram",
            theme: "fill",
            icon: '<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M13.3085 10.9361L14.6817 6.81664C15.8813 3.21793 16.4811 1.41858 15.5312 0.468763C14.5814 -0.481052 12.7821 0.118732 9.18336 1.3183L5.06389 2.69146C2.15939 3.65963 0.707135 4.14371 0.294447 4.85359C-0.0981488 5.5289 -0.0981489 6.36295 0.294446 7.03827C0.707135 7.74814 2.15939 8.23223 5.06389 9.2004C5.42385 9.32038 5.82881 9.23471 6.09835 8.96766L10.5029 4.60396C10.7506 4.35847 11.1505 4.36033 11.396 4.60812C11.6415 4.85591 11.6397 5.2558 11.3919 5.5013L7.05849 9.79453C6.7614 10.0889 6.66736 10.5394 6.79961 10.9361C7.76777 13.8406 8.25186 15.2929 8.96173 15.7056C9.63704 16.0982 10.4711 16.0982 11.1464 15.7056C11.8563 15.2929 12.3404 13.8406 13.3085 10.9361Z" fill="currentColor"/></svg>'
        }, {
            name: "wb-phone",
            theme: "outline",
            icon: '<svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M5.42968 1.65255L5.94889 2.58289C6.41745 3.42247 6.22936 4.52387 5.49138 5.26185C5.49138 5.26185 5.49138 5.26185 5.49137 5.26185C5.49126 5.26197 4.59633 6.15711 6.21922 7.78C7.84145 9.40223 8.73656 8.50865 8.73737 8.50784C8.73739 8.50782 8.73738 8.50783 8.7374 8.50781C9.47538 7.76986 10.5768 7.58177 11.4163 8.05032L12.3467 8.56954C13.6145 9.27707 13.7642 11.055 12.6498 12.1694C11.9802 12.839 11.1599 13.36 10.2531 13.3944C8.72663 13.4522 6.13423 13.0659 3.53377 10.4654C0.933311 7.86499 0.546981 5.27259 0.604851 3.74608C0.639227 2.83929 1.16025 2.019 1.82985 1.34939C2.94421 0.235035 4.72215 0.384759 5.42968 1.65255Z" fill="currentColor" fill-opacity="0.24"/></svg>'
        }, {
            name: "wb-mail",
            theme: "outline",
            icon: '<svg width="16" height="14" viewBox="0 0 16 14" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.937258 1.53687C0 2.47413 0 3.98262 0 6.99961C0 10.0166 0 11.5251 0.937258 12.4624C1.87452 13.3996 3.38301 13.3996 6.4 13.3996H9.6C12.617 13.3996 14.1255 13.3996 15.0627 12.4624C16 11.5251 16 10.0166 16 6.99961C16 3.98262 16 2.47413 15.0627 1.53687C14.1255 0.599609 12.617 0.599609 9.6 0.599609H6.4C3.38301 0.599609 1.87452 0.599609 0.937258 1.53687ZM13.2609 3.4155C13.4731 3.67006 13.4387 4.0484 13.1841 4.26054L11.4269 5.72486C10.7178 6.31579 10.1431 6.79474 9.63586 7.12099C9.10746 7.46083 8.59286 7.67551 8 7.67551C7.40714 7.67551 6.89254 7.46083 6.36414 7.12099C5.85689 6.79475 5.28217 6.31579 4.57308 5.72487L2.81589 4.26054C2.56132 4.0484 2.52693 3.67006 2.73907 3.4155C2.95121 3.16093 3.32954 3.12654 3.58411 3.33868L5.31123 4.77794C6.05759 5.39991 6.57578 5.83034 7.01327 6.11171C7.43675 6.38408 7.72394 6.47551 8 6.47551C8.27606 6.47551 8.56325 6.38408 8.98673 6.11171C9.42422 5.83034 9.9424 5.39991 10.6888 4.77794L12.4159 3.33868C12.6705 3.12654 13.0488 3.16093 13.2609 3.4155Z" fill="currentColor" fill-opacity="0.24"/></svg>'
        }, {
            name: "wb-empty-user",
            theme: "outline",
            icon: '<svg width="72" height="73" viewBox="0 0 72 73" fill="none" xmlns="http://www.w3.org/2000/svg"><ellipse cx="36" cy="36.5" rx="36" ry="36.5" fill="#ECECEC"/><path fill-rule="evenodd" clip-rule="evenodd" d="M36 36.5C42.2132 36.5 47.25 31.3932 47.25 25.0938C47.25 18.7943 42.2132 13.6875 36 13.6875C29.7868 13.6875 24.75 18.7943 24.75 25.0938C24.75 31.3932 29.7868 36.5 36 36.5ZM36.0003 41.0625C26.9213 41.0625 19.0983 46.5146 15.5424 54.3656C20.4937 60.1887 27.8224 63.875 36.0003 63.875C44.1782 63.875 51.507 60.1887 56.4583 54.3656C52.9024 46.5146 45.0793 41.0625 36.0003 41.0625Z" fill="white"/></svg>'
        }, {
            name: "wb-trash",
            theme: "outline",
            icon: '<svg width="15" height="16" viewBox="0 0 15 16" fill="none"><path d="M7.47646 16H8.12349C10.3497 16 11.4628 16 12.1865 15.2749C12.9102 14.5498 12.9842 13.3604 13.1323 10.9816L13.3457 7.55397C13.426 6.26326 13.4662 5.61791 13.1031 5.20895C12.7401 4.8 12.127 4.8 10.9007 4.8H4.69921C3.47299 4.8 2.85988 4.8 2.49682 5.20895C2.13375 5.61791 2.17393 6.26326 2.25428 7.55397L2.46765 10.9816C2.61573 13.3604 2.68977 14.5498 3.41349 15.2749C4.1372 16 5.25029 16 7.47646 16Z" fill="currentColor"/><path d="M0.599976 3.33334C0.599976 2.96515 0.87628 2.66668 1.21712 2.66668L3.34851 2.66632C3.772 2.65473 4.14559 2.36385 4.28969 1.93353C4.29348 1.92222 4.29783 1.90826 4.31346 1.85762L4.4053 1.55995C4.4615 1.37743 4.51046 1.21842 4.57897 1.07629C4.84965 0.514793 5.35044 0.124882 5.92915 0.0250557C6.07564 -0.000212723 6.23076 -0.000105862 6.40882 1.68429e-05H9.19127C9.36933 -0.000105862 9.52446 -0.000212723 9.67094 0.0250557C10.2497 0.124882 10.7504 0.514793 11.0211 1.07629C11.0896 1.21842 11.1386 1.37743 11.1948 1.55995L11.2866 1.85762C11.3023 1.90826 11.3066 1.92222 11.3104 1.93353C11.4545 2.36385 11.9022 2.65509 12.3257 2.66668H14.3828C14.7237 2.66668 15 2.96515 15 3.33334C15 3.70153 14.7237 4 14.3828 4H1.21712C0.87628 4 0.599976 3.70153 0.599976 3.33334Z" fill="currentColor"/></svg>'
        }, {
            name: "wb-scanner",
            theme: "outline",
            icon: '<svg viewBox="0 0 48 48" fill="none"><rect width="48" height="48" rx="24" fill="white"/><path d="M30.4733 23.4863L10.9292 34.7702C10.4798 35.0296 9.91797 34.7053 9.91797 34.1864V19.9558C9.91797 19.1662 10.3392 18.4366 11.023 18.0419L30.5672 6.75802C31.0166 6.49852 31.5783 6.82289 31.5783 7.34183V21.5725C31.5783 22.362 31.1572 23.0916 30.4733 23.4863Z" fill="currentColor" fill-opacity="0.12"/><path opacity="0.1" d="M12.9572 29.7172L11.5188 30.5476V19.5203L12.9572 18.6898V29.7172Z" fill="currentColor"/><path opacity="0.17" d="M21.4669 22.6862L20.0286 23.5167V14.6069L21.4669 13.7764V22.6862Z" fill="currentColor"/><path opacity="0.17" d="M14.5153 26.7L13.7961 27.1152V18.2054L14.5153 17.7902V26.7Z" fill="currentColor"/><path opacity="0.17" d="M23.026 21.7866L22.3069 22.2018V13.292L23.026 12.8768V21.7866Z" fill="currentColor"/><path opacity="0.17" d="M16.0739 25.8004L15.3547 26.2156V17.3058L16.0739 16.8906V25.8004Z" fill="currentColor"/><path opacity="0.17" d="M17.6315 24.9007L16.9124 25.316V16.4062L17.6315 15.9909V24.9007Z" fill="currentColor"/><path opacity="0.17" d="M19.1901 24.0011L18.4709 24.4163V15.5066L19.1901 15.0913V24.0011Z" fill="currentColor"/><path opacity="0.1" d="M29.9777 19.8904L28.5393 20.7208V9.69347L29.9777 8.86304V19.8904Z" fill="currentColor"/><path opacity="0.17" d="M24.5839 20.887L23.8647 21.3022V12.3924L24.5839 11.9772V20.887Z" fill="currentColor"/><path opacity="0.17" d="M26.142 19.9873L25.4229 20.4025V11.4927L26.142 11.0775V19.9873Z" fill="currentColor"/><path opacity="0.17" d="M27.6999 19.0877L26.9807 19.5029V10.5931L27.6999 10.1779V19.0877Z" fill="currentColor"/><path opacity="0.5" d="M9.91797 25.3159L31.5783 12.8103V14.049L9.91797 26.5546V25.3159Z" fill="currentColor"/><path opacity="0.1" d="M9.91797 26.5546L22.666 27.415L28.5392 24.024L31.5783 14.049V12.8103L9.91797 25.3159V26.5546Z" fill="currentColor"/><path d="M26.9876 34.239L25.5928 33.4336V37.2306C25.5928 37.5221 25.7483 37.7916 26.0008 37.9373L26.9876 38.5071C27.3597 38.722 27.8187 38.7198 28.1888 38.5015L31.9676 36.2725C32.2165 36.1257 32.3691 35.8584 32.3691 35.5695V31.7675L28.1888 34.2333C27.8187 34.4516 27.3598 34.4538 26.9876 34.239Z" fill="currentColor" fill-opacity="0.93"/><path d="M31.0094 24.4952L27.4299 22.4286L22.6514 25.1877L27.9714 34.8278L32.7499 32.0687V27.8208C32.7499 26.5392 31.9707 25.0502 31.0094 24.4952Z" fill="currentColor" fill-opacity="0.35"/><path d="M22.6514 25.1876V28.8369L25.2344 30.3282V33.2475L27.9714 34.8277V30.5798C27.9714 29.2981 27.1921 27.8091 26.2309 27.2541L22.6514 25.1876Z" fill="url(#paint1_linear_11275_154676)"/><path d="M24.7139 25.1876L27.7004 23.4634L29.7829 24.6658L26.7964 26.39L24.7139 25.1876Z" fill="currentColor" fill-opacity="0.54"/><defs><linearGradient id="paint0_linear_11275_154676" x1="28.9414" y1="28.336" x2="27.339" y2="25.5605" gradientUnits="userSpaceOnUse"><stop stop-color="#418FF7" stop-opacity="0.59"/><stop offset="1" stop-color="#E6F7FF"/></linearGradient><linearGradient id="paint1_linear_11275_154676" x1="22.6514" y1="30.0077" x2="27.9714" y2="30.0077" gradientUnits="userSpaceOnUse"><stop stop-color="currentColor"/><stop offset="1" stop-color="#E6F7FF"/></linearGradient></defs></svg>'
        }, {
            name: "wb-user",
            theme: "outline",
            icon: '<svg width="30" height="30" viewBox="0 0 30 30" fill="none"><circle cx="15" cy="9" r="4" fill="currentColor"/><ellipse cx="15" cy="20" rx="7" ry="4" fill="currentColor"/></svg>'
        }, {
            name: "wb-shk-icon",
            theme: "outline",
            icon: '<svg width="1em" height="1em" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M6.9963 8.99854V13.0002" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n<path d="M10.6643 8.99854V13.0002" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n<path d="M14.3342 8.99854V13.0002" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n<path d="M7.49776 22.0039H6.49734C4.8398 22.0039 3.49609 20.6602 3.49609 19.0026V18.0022" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n<path d="M17.502 3.99634H18.5024C20.1599 3.99634 21.5036 5.34004 21.5036 6.99759V7.998" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n<path d="M3.49609 7.998V6.99759C3.49609 5.34004 4.8398 3.99634 6.49734 3.99634H7.49776" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n<path d="M21.5036 18.0022V19.0026C21.5036 20.6602 20.1599 22.0039 18.5024 22.0039H17.502" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n<path d="M6.9963 16.0015V18.0023" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n<path d="M10.6643 16.0015V18.0023" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n<path d="M14.3342 16.1265V18.0023" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n<path d="M18.0022 16.1265V18.0023" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n<path d="M18.0022 8.99854V13.0002" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n<path d="M4.49609 13.0002H20.5028" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n</svg>'
        }, {
            name: "wb-shk-logo",
            theme: "outline",
            icon: '<svg viewBox="0 0 40 40" fill="none"><g clip-path="url(#clip0_15801_214215)"><rect width="40" height="40" rx="8" fill="url(#paint0_radial_15801_214215)"/><g clip-path="url(#clip1_15801_214215)"><path d="M-22.1016 30H-24V-2H-22.1016V30ZM-20.2031 29.9773H-21.1674V-2H-20.2031V29.9773ZM-17.3705 29.9773H-18.3047V-2H-17.3705V29.9773ZM-12.6395 29.9773H-13.5737V-2H-12.6395V29.9773ZM-7.90848 29.9773H-9.77679V-2H-7.90848V29.9773ZM-4.11161 29.9773H-5.04576V-2H-4.11161V29.9773ZM-0.314732 29.9773H-1.24888V-2H-0.314732V29.9773ZM4.41629 29.9773H2.51786V-2H4.41629V29.9773ZM9.14732 29.9773H7.24888V-2H9.14732V29.9773ZM12.9442 26H11.0458V-2H12.9442V26ZM16.7411 26H14.8426V-2H16.7411V26ZM19.5737 26H17.6752V-2H19.5737V26ZM25.269 26H22.4364V-2H25.269V26ZM27.1674 29.9773H26.2031V-2H27.1674V29.9773ZM30 30H28.1016V-2H30V30Z" fill="white"/></g><path d="M0 24C0 31.5425 0 35.3137 2.34315 37.6569C4.68629 40 8.45753 40 16 40H24C31.5425 40 35.3137 40 37.6569 37.6569C40 35.3137 40 31.5425 40 24V18H0V24Z" fill="url(#paint1_linear_15801_214215)"/><g filter="url(#filter0_d_15801_214215)"><rect y="18" width="40" height="2" fill="url(#paint2_linear_15801_214215)" shape-rendering="crispEdges"/></g></g><defs><filter id="filter0_d_15801_214215" x="-4" y="14" width="48" height="10" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset/><feGaussianBlur stdDeviation="2"/><feComposite in2="hardAlpha" operator="out"/><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_15801_214215"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_15801_214215" result="shape"/></filter><radialGradient id="paint0_radial_15801_214215" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(-1.56249 44.375) rotate(-47.7367) scale(57.8499)"><stop stop-color="#4A0AAC"/><stop offset="0.751736" stop-color="#7B4BC5"/><stop offset="1" stop-color="#965EEB"/></radialGradient><linearGradient id="paint1_linear_15801_214215" x1="20" y1="42.75" x2="20" y2="7" gradientUnits="userSpaceOnUse"><stop stop-color="white" stop-opacity="0.1"/><stop offset="1" stop-color="#925CE6"/></linearGradient><linearGradient id="paint2_linear_15801_214215" x1="20" y1="12" x2="20" y2="21" gradientUnits="userSpaceOnUse"><stop stop-color="white"/><stop offset="1" stop-color="white" stop-opacity="0"/></linearGradient><clipPath id="clip0_15801_214215"><rect width="40" height="40" rx="8" fill="white"/></clipPath><clipPath id="clip1_15801_214215"><path d="M-13 -2H30V30H-13V-2Z" fill="white"/></clipPath></defs></svg>'
        }, {
            name: "wb-create",
            theme: "outline",
            icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M11.4925 2.78906H7.75349C4.67849 2.78906 2.75049 4.96606 2.75049 8.04806V16.3621C2.75049 19.4441 4.66949 21.6211 7.75349 21.6211H16.5775C19.6625 21.6211 21.5815 19.4441 21.5815 16.3621V12.3341" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/><path fill-rule="evenodd" clip-rule="evenodd" d="M19.8101 7.50441L21.1721 6.14234C21.3976 5.91689 21.5103 5.80417 21.5921 5.69676C22.1368 4.98107 22.1368 3.98977 21.5921 3.27407C21.5103 3.16666 21.3976 3.05395 21.1722 2.82852L21.1721 2.82851L21.1721 2.82849C20.9467 2.60305 20.834 2.49033 20.7266 2.40857C20.0109 1.86381 19.0196 1.86381 18.3039 2.40857C18.1965 2.49033 18.0837 2.60305 17.8583 2.82849L16.4764 4.21036C17.2687 5.58253 18.4189 6.72345 19.8101 7.50441ZM15.0219 5.6649L9.6016 11.0852C9.17654 11.5102 8.96401 11.7228 8.82428 11.9839C8.68454 12.245 8.6256 12.5397 8.50771 13.1291L8.06385 15.3484C7.99733 15.681 7.96407 15.8473 8.05868 15.942C8.15328 16.0366 8.31959 16.0033 8.6522 15.9368L10.8715 15.4929L10.8715 15.4929C11.4609 15.375 11.7557 15.3161 12.0168 15.1764C12.2779 15.0366 12.4904 14.8241 12.9154 14.3991L12.9154 14.399L12.9154 14.399L18.3516 8.96285C17.0117 8.11711 15.876 6.98952 15.0219 5.6649Z" fill="currentColor"/></svg>'
        }, {
            name: "wb-send",
            theme: "outline",
            icon: '<svg width="36" height="36" viewBox="0 0 36 36" fill="none"><path d="M6.90088 20.215L15.6131 18.3084C16.391 18.1384 16.391 17.8616 15.6131 17.6916L6.90088 15.785C6.38194 15.6717 5.87654 15.1182 5.77294 14.5509L4.03041 5.01867C3.87454 4.167 4.33327 3.77129 5.05428 4.13534L31.6399 17.5604C32.1201 17.8029 32.1201 18.1971 31.6399 18.4396L5.05428 31.8647C4.33327 32.2287 3.87454 31.833 4.03041 30.9813L5.77294 21.4491C5.87654 20.8818 6.38194 20.3283 6.90088 20.215Z" fill="currentColor"/></svg>'
        }, {
            name: "wb-document",
            theme: "outline",
            icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" ><g clip-path="url(#clip0_11619_170762)"><path d="M21 1.77621e-06L2.937 1.97097e-07C2.53918 1.62318e-07 2.15765 0.158035 1.87634 0.439341C1.59504 0.720644 1.437 1.10217 1.437 1.5L1.437 22.5C1.437 22.8978 1.59503 23.2794 1.87634 23.5607C2.15764 23.842 2.53917 24 2.937 24L21 24C21.3978 24 21.7794 23.842 22.0607 23.5607C22.342 23.2794 22.5 22.8978 22.5 22.5L22.5 1.5C22.5 1.10218 22.342 0.720646 22.0607 0.439342C21.7794 0.158037 21.3978 1.81099e-06 21 1.77621e-06ZM12.75 19.5L6.687 19.5C6.48809 19.5 6.29732 19.421 6.15667 19.2803C6.01602 19.1397 5.937 18.9489 5.937 18.75C5.937 18.5511 6.01602 18.3603 6.15667 18.2197C6.29732 18.079 6.48809 18 6.687 18L12.75 18C12.9489 18 13.1397 18.079 13.2803 18.2197C13.421 18.3603 13.5 18.5511 13.5 18.75C13.5 18.9489 13.421 19.1397 13.2803 19.2803C13.1397 19.421 12.9489 19.5 12.75 19.5ZM17.25 15L6.687 15C6.48809 15 6.29732 14.921 6.15667 14.7803C6.01602 14.6397 5.937 14.4489 5.937 14.25C5.937 14.0511 6.01602 13.8603 6.15667 13.7197C6.29732 13.579 6.48809 13.5 6.687 13.5L17.25 13.5C17.4489 13.5 17.6397 13.579 17.7803 13.7197C17.921 13.8603 18 14.0511 18 14.25C18 14.4489 17.921 14.6397 17.7803 14.7803C17.6397 14.921 17.4489 15 17.25 15ZM17.25 10.5L6.687 10.5C6.48809 10.5 6.29732 10.421 6.15667 10.2803C6.01602 10.1397 5.937 9.94891 5.937 9.75C5.937 9.55109 6.01602 9.36032 6.15667 9.21967C6.29732 9.07902 6.48809 9 6.687 9L17.25 9C17.4489 9 17.6397 9.07902 17.7803 9.21967C17.921 9.36032 18 9.55109 18 9.75C18 9.94891 17.921 10.1397 17.7803 10.2803C17.6397 10.421 17.4489 10.5 17.25 10.5ZM17.25 6L6.687 6C6.48809 6 6.29732 5.92098 6.15667 5.78033C6.01602 5.63968 5.937 5.44891 5.937 5.25C5.937 5.05109 6.01602 4.86032 6.15667 4.71967C6.29732 4.57902 6.48809 4.5 6.687 4.5L17.25 4.5C17.4489 4.5 17.6397 4.57902 17.7803 4.71967C17.921 4.86032 18 5.05109 18 5.25C18 5.44891 17.921 5.63968 17.7803 5.78033C17.6397 5.92098 17.4489 6 17.25 6Z" fill="currentColor"/></g><defs><clipPath id="clip0_11619_170762"><rect width="24" height="24" fill="white" transform="translate(24 24) rotate(-180)"/></clipPath></defs></svg>'
        }, {
            name: "wb-not-expand",
            theme: "outline",
            icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M20.3708 2.42162C20.3305 2.38175 20.2762 2.35938 20.2195 2.35938C20.1628 2.35938 20.1084 2.38175 20.0681 2.42162L15.9565 6.53591L14.4914 5.07073C14.4631 5.04248 14.4274 5.02276 14.3885 5.01384C14.3495 5.00492 14.3088 5.00716 14.2711 5.0203C14.2333 5.03344 14.2001 5.05695 14.1751 5.08814C14.1501 5.11932 14.1344 5.15692 14.1297 5.19662L13.5003 10.2618C13.4842 10.4011 13.5994 10.5163 13.7387 10.5002L18.8065 9.87075C18.9833 9.84933 19.0556 9.63504 18.9324 9.50915L17.4672 8.04397L21.5815 3.92966C21.6646 3.84662 21.6646 3.71002 21.5815 3.62698L20.3708 2.42162Z" fill="currentColor"/><path d="M5.33457 13.5511L10.4024 12.9217C10.4348 12.9172 10.4677 12.9203 10.4987 12.9308C10.5296 12.9412 10.5577 12.9586 10.5808 12.9817C10.6039 13.0048 10.6213 13.0329 10.6317 13.0638C10.6421 13.0948 10.6453 13.1277 10.6408 13.1601L10.014 18.2252C10.0094 18.2649 9.99372 18.3025 9.96873 18.3337C9.94373 18.3649 9.91045 18.3884 9.8727 18.4016C9.83496 18.4147 9.79427 18.4169 9.75531 18.408C9.71635 18.3991 9.6807 18.3794 9.65243 18.3511L8.18725 16.886L4.07296 21.0002C3.98993 21.0833 3.85332 21.0833 3.77029 21.0002L2.56225 19.7922C2.52237 19.7519 2.5 19.6975 2.5 19.6409C2.5 19.5842 2.52237 19.5298 2.56225 19.4895L6.67386 15.3779L5.20868 13.9127C5.08546 13.7869 5.15779 13.5726 5.33457 13.5511Z" fill="currentColor"/></svg><path d="M6.9963 8.99854V13.0002" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n<path d="M10.6643 8.99854V13.0002" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n<path d="M14.3342 8.99854V13.0002" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n<path d="M7.49776 22.0039H6.49734C4.8398 22.0039 3.49609 20.6602 3.49609 19.0026V18.0022" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n<path d="M17.502 3.99634H18.5024C20.1599 3.99634 21.5036 5.34004 21.5036 6.99759V7.998" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n<path d="M3.49609 7.998V6.99759C3.49609 5.34004 4.8398 3.99634 6.49734 3.99634H7.49776" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n<path d="M21.5036 18.0022V19.0026C21.5036 20.6602 20.1599 22.0039 18.5024 22.0039H17.502" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n<path d="M6.9963 16.0015V18.0023" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n<path d="M10.6643 16.0015V18.0023" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n<path d="M14.3342 16.1265V18.0023" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n<path d="M18.0022 16.1265V18.0023" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n<path d="M18.0022 8.99854V13.0002" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n<path d="M4.49609 13.0002H20.5028" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n</svg>'
        }, {
            name: "wb-check-slim",
            theme: "outline",
            icon: '<svg viewBox="0 0 24 24"><path d="M20 6.5L9 17.5L4 12.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/></svg>'
        }, {
            name: "wb-dots-menu",
            theme: "outline",
            icon: '<svg width="1em" height="1em" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M12.9972 18.4989C12.7221 18.4989 12.497 18.724 12.5 18.9991C12.5 19.2742 12.7251 19.4993 13.0002 19.4993C13.2754 19.4993 13.5004 19.2742 13.5004 18.9991C13.5004 18.724 13.2754 18.4989 12.9972 18.4989" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n<path d="M12.9972 12.4964C12.7221 12.4964 12.497 12.7215 12.5 12.9966C12.5 13.2717 12.7251 13.4968 13.0002 13.4968C13.2754 13.4968 13.5004 13.2717 13.5004 12.9966C13.5004 12.7215 13.2754 12.4964 12.9972 12.4964" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n<path d="M12.9972 6.4939C12.7221 6.4939 12.497 6.71899 12.5 6.9941C12.5 7.26922 12.7251 7.49431 13.0002 7.49431C13.2754 7.49431 13.5004 7.26922 13.5004 6.9941C13.5004 6.71899 13.2754 6.4939 12.9972 6.4939" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n</svg>'
        }, {
            name: "wb-dots-drag",
            theme: "outline",
            icon: '<svg viewBox="0 0 9 20" fill="none" ><circle cx="1.5" cy="1.5" r="1.5" fill="currentColor"/><circle cx="1.5" cy="10" r="1.5" fill="currentColor"/><circle cx="1.5" cy="18.5" r="1.5" fill="currentColor"/><circle cx="7.5" cy="1.5" r="1.5" fill="currentColor"/><circle cx="7.5" cy="10" r="1.5" fill="currentColor"/><circle cx="7.5" cy="18.5" r="1.5" fill="currentColor"/></svg>'
        }, {
            name: "wb-pvz",
            theme: "outline",
            icon: '<svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M14.0718 10.493C14.0718 11.478 13.1448 12.277 12.0008 12.277C10.8568 12.277 9.92984 11.479 9.92984 10.493V10.532C9.92784 11.496 8.99984 12.278 7.85684 12.278C6.48684 12.268 5.59284 10.912 6.18684 9.742L7.57084 7.016C7.88684 6.395 8.54984 6 9.27784 6H14.7208C15.4488 6 16.1118 6.395 16.4278 7.016L17.8128 9.742C18.4068 10.911 17.5138 12.268 16.1428 12.278C14.9988 12.278 14.0718 11.497 14.0718 10.532V10.493" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M18 21H6C4.343 21 3 19.657 3 18V6C3 4.343 4.343 3 6 3H18C19.657 3 21 4.343 21 6V18C21 19.657 19.657 21 18 21Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n<path d="M13.5185 18V15.874C13.5185 15.035 12.8385 14.355 11.9995 14.355C11.1605 14.355 10.4805 15.035 10.4805 15.874V18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n<path d="M6.5332 18H17.4682" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n<path d="M7.24805 12.178V18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n<path d="M16.752 18V12.178" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n</svg>'
        }, {
            name: "wb-fill-box",
            theme: "fill",
            icon: '<svg width="1em" height="1em" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M12.1838 25.1926C14.0565 26.1753 14.9928 26.6667 16 26.6667V16L6.01389 10.7441C5.99919 10.7678 5.98475 10.7916 5.97057 10.8157C5.33334 11.8979 5.33334 13.2444 5.33334 15.9376V16.0624C5.33334 18.7556 5.33334 20.1021 5.97057 21.1843C6.60779 22.2664 7.75535 22.8686 10.0505 24.073L12.1838 25.1926Z" fill="currentColor"/>\n<path opacity="0.7" d="M21.9492 7.92695L19.8159 6.80743C17.9432 5.8247 17.0069 5.33333 15.9997 5.33333C14.9924 5.33333 14.0561 5.8247 12.1834 6.80743L10.0501 7.92695C7.8061 9.10456 6.65911 9.70647 6.01355 10.7441L15.9997 16L25.9858 10.7441C25.3402 9.70647 24.1932 9.10456 21.9492 7.92695Z" fill="currentColor"/>\n<path opacity="0.5" d="M26.0294 10.8158C26.0153 10.7918 26.0008 10.7679 25.9861 10.7443L16 16.0001V26.6668C17.0072 26.6668 17.9436 26.1754 19.8162 25.1927L21.9496 24.0732C24.2447 22.8687 25.3922 22.2665 26.0294 21.1844C26.6667 20.1023 26.6667 18.7557 26.6667 16.0625V15.9377C26.6667 13.2446 26.6667 11.898 26.0294 10.8158Z" fill="currentColor"/>\n</svg>'
        }, {
            name: "wb-circle-check",
            theme: "fill",
            icon: '<svg width="1em" height="1em" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">\n<rect width="20" height="20" rx="10" fill="currentColor"/>\n<path d="M14 7.5L9.00372 12.5L6 9.50125" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n</svg>'
        }, {
            name: "wb-loupe",
            theme: "outline",
            icon: '<svg width="1em" height="1em" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">\n<circle cx="9.21552" cy="9.21549" r="5.88495" fill="transparent" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n<path d="M16.6695 16.6694L13.3765 13.3764" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n</svg>'
        }, {
            name: "wb-fill-voice",
            theme: "fill",
            icon: '<svg width="1em" height="1em" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">\n<circle cx="12.25" cy="9.40625" r="3.5" fill="#000C17"/>\n<ellipse cx="12.25" cy="19.0312" rx="6.125" ry="3.5" fill="currentColor"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M19.5624 5.56871C19.7489 5.25792 20.152 5.15715 20.4628 5.34362L20.1251 5.90635C20.4628 5.34362 20.4625 5.34344 20.4628 5.34362L20.464 5.34435L20.4654 5.34518L20.4686 5.34715L20.477 5.35233C20.4834 5.35634 20.4915 5.36144 20.5012 5.36767C20.5204 5.38013 20.5459 5.39708 20.5767 5.41863C20.6382 5.4617 20.7213 5.52339 20.8187 5.60455C21.013 5.7665 21.2672 6.00843 21.5203 6.33748C22.0303 7.0005 22.5314 8.01278 22.5314 9.40635C22.5314 10.7999 22.0303 11.8122 21.5203 12.4752C21.2672 12.8043 21.013 13.0462 20.8187 13.2082C20.7213 13.2893 20.6382 13.351 20.5767 13.3941C20.5459 13.4156 20.5204 13.4326 20.5012 13.445C20.4915 13.4513 20.4834 13.4564 20.477 13.4604L20.4686 13.4655L20.4654 13.4675L20.464 13.4683C20.4637 13.4685 20.4628 13.4691 20.1251 12.9063L20.4628 13.4691C20.152 13.6556 19.7489 13.5548 19.5624 13.244C19.3767 12.9345 19.4759 12.5335 19.7836 12.346L19.7884 12.3429C19.7948 12.3388 19.8069 12.3308 19.824 12.3188C19.8582 12.2949 19.9118 12.2554 19.9785 12.1999C20.1122 12.0884 20.2956 11.9147 20.48 11.675C20.845 11.2005 21.2189 10.4628 21.2189 9.40635C21.2189 8.34992 20.845 7.6122 20.48 7.13772C20.2956 6.89801 20.1122 6.72432 19.9785 6.61284C19.9118 6.55728 19.8582 6.5178 19.824 6.49387C19.8069 6.48193 19.7948 6.47393 19.7884 6.46981L19.7836 6.46672C19.4759 6.27922 19.3767 5.87819 19.5624 5.56871Z" fill="currentColor"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M17.7882 7.36287C17.9503 7.03869 18.3445 6.90729 18.6686 7.06938L18.3751 7.65635C18.6686 7.06938 18.6683 7.06921 18.6686 7.06938L18.67 7.07009L18.6716 7.07085L18.6748 7.07251L18.6823 7.07641L18.7012 7.08657C18.7155 7.0944 18.733 7.10442 18.7533 7.11676C18.7939 7.14139 18.846 7.1755 18.9056 7.22022C19.0246 7.30942 19.1759 7.44266 19.3251 7.62921C19.6302 8.01062 19.9064 8.59068 19.9064 9.40635C19.9064 10.222 19.6302 10.8021 19.3251 11.1835C19.1759 11.37 19.0246 11.5033 18.9056 11.5925C18.846 11.6372 18.7939 11.6713 18.7533 11.6959C18.733 11.7083 18.7155 11.7183 18.7012 11.7261L18.6823 11.7363L18.6748 11.7402L18.6716 11.7418L18.67 11.7426C18.6697 11.7428 18.6686 11.7433 18.3806 11.1673L18.6686 11.7433C18.3445 11.9054 17.9503 11.774 17.7882 11.4498C17.6281 11.1297 17.7543 10.7413 18.0696 10.5755C18.0703 10.5752 18.0711 10.5747 18.0722 10.574C18.0794 10.5696 18.0957 10.5593 18.1181 10.5425C18.1632 10.5086 18.2307 10.4505 18.3002 10.3636C18.4326 10.1981 18.5939 9.90318 18.5939 9.40635C18.5939 8.90951 18.4326 8.61458 18.3002 8.44912C18.2307 8.36222 18.1632 8.30406 18.1181 8.27022C18.0957 8.2534 18.0794 8.24308 18.0722 8.23867C18.0711 8.23804 18.0703 8.23753 18.0696 8.23716C17.7543 8.07142 17.6281 7.683 17.7882 7.36287Z" fill="currentColor"/>\n</svg>'
        }, {
            name: "wb-shopping-bags",
            theme: "outline",
            icon: '<svg viewBox="0 0 40 44" fill="none"><path d="M33.404 43.9999H0.166626L3.53776 11.8857H30.0329L30.5694 17.244L33.404 43.9999Z" fill="currentColor"/><path d="M17.2368 22.2662H35.6484L37.9912 43.9999H14.894L17.2368 22.2662Z" fill="currentColor"/><path d="M19.0789 22.2662H37.4904L39.8332 43.9999H16.7361L19.0789 22.2662Z" fill="currentColor"/><path d="M19.0789 22.2662H37.4904L39.8332 43.9999H16.7361L19.0789 22.2662Z" fill="white" fill-opacity="0.7"/><path d="M23.9345 15.679C23.759 15.679 23.5907 15.61 23.4666 15.4873C23.3425 15.3646 23.2728 15.1982 23.2728 15.0247V8.55232C23.3052 7.68987 23.1613 6.82982 22.8499 6.02358C22.5385 5.21735 22.0658 4.48149 21.4602 3.86001C20.8546 3.23852 20.1285 2.74417 19.3252 2.40651C18.522 2.06886 17.6582 1.89483 16.7854 1.89483C15.9126 1.89483 15.0487 2.06886 14.2455 2.40651C13.4422 2.74417 12.7161 3.23852 12.1105 3.86001C11.5049 4.48149 11.0323 5.21735 10.7208 6.02358C10.4094 6.82982 10.2656 7.68987 10.2979 8.55232V15.0335C10.3088 15.1252 10.2999 15.2182 10.2718 15.3062C10.2437 15.3943 10.1971 15.4755 10.135 15.5444C10.0729 15.6134 9.9968 15.6686 9.9116 15.7064C9.82641 15.7442 9.73409 15.7638 9.64071 15.7638C9.54733 15.7638 9.45501 15.7442 9.36982 15.7064C9.28463 15.6686 9.20849 15.6134 9.14641 15.5444C9.08433 15.4755 9.03772 15.3943 9.00964 15.3062C8.98155 15.2182 8.97264 15.1252 8.98347 15.0335V8.55232C8.98347 6.5051 9.80593 4.54172 11.2699 3.09412C12.7339 1.64651 14.7195 0.833252 16.7898 0.833252C18.8602 0.833252 20.8458 1.64651 22.3098 3.09412C23.7737 4.54172 24.5962 6.5051 24.5962 8.55232V15.0335C24.5938 15.2055 24.5231 15.3697 24.3992 15.4905C24.2754 15.6113 24.1084 15.679 23.9345 15.679ZM28.2892 35.3171C27.6422 35.3171 27.0015 35.1911 26.4037 34.9462C25.806 34.7014 25.2628 34.3425 24.8053 33.8901C24.3478 33.4377 23.9848 32.9006 23.7372 32.3095C23.4896 31.7184 23.3622 31.0849 23.3622 30.4451V26.2363C23.3514 26.1446 23.3603 26.0517 23.3884 25.9636C23.4164 25.8756 23.463 25.7944 23.5251 25.7254C23.5872 25.6564 23.6633 25.6012 23.7485 25.5634C23.8337 25.5256 23.9261 25.5061 24.0194 25.5061C24.1128 25.5061 24.2051 25.5256 24.2903 25.5634C24.3755 25.6012 24.4517 25.6564 24.5137 25.7254C24.5758 25.7944 24.6224 25.8756 24.6505 25.9636C24.6786 26.0517 24.6875 26.1446 24.6767 26.2363V30.454C24.6767 31.4002 25.0568 32.3077 25.7335 32.9767C26.4101 33.6458 27.3278 34.0217 28.2848 34.0217C29.2417 34.0217 30.1594 33.6458 30.8361 32.9767C31.5127 32.3077 31.8929 31.4002 31.8929 30.454V26.2363C31.9117 26.077 31.989 25.9301 32.1102 25.8235C32.2313 25.7169 32.3879 25.658 32.5501 25.658C32.7123 25.658 32.8688 25.7169 32.99 25.8235C33.1112 25.9301 33.1885 26.077 33.2073 26.2363V30.454C33.205 31.743 32.686 32.9786 31.7642 33.8901C30.8424 34.8016 29.5929 35.3147 28.2892 35.3171Z" fill="currentColor"/></svg>'
        }, {
            name: "wb-shopping-bag-p",
            theme: "outline",
            icon: '<svg viewBox="0 0 38 44" fill="none"><path d="M6.0354 39.2488C5.2212 38.6963 4.81458 38.358 4.77266 38.1982C4.7046 37.9388 4.76766 36.8067 5.27246 29.223C5.46022 26.4025 5.7477 22.0784 5.91132 19.6139C6.07493 17.1493 6.27588 14.1247 6.35787 12.8924C6.43986 11.6602 6.57168 9.66615 6.65081 8.46127C6.72994 7.25639 6.82398 5.82647 6.85979 5.28369C6.95639 3.81929 6.66399 3.93052 10.4168 3.93052C13.5121 3.93052 13.5507 3.93315 13.7482 4.14845C13.9445 4.36269 13.9479 4.46641 13.9479 10.2724V16.1785H20.0694H26.191L26.2177 10.2081C26.2438 4.37064 26.2488 4.2344 26.4404 4.0873C26.6054 3.96059 27.1272 3.93636 29.7472 3.93369C32.7297 3.93068 32.8662 3.93873 33.054 4.12967C33.2485 4.32734 33.25 4.4616 33.25 22.0381C33.25 39.068 33.2431 39.7536 33.0708 39.9121C32.9059 40.0637 31.8683 40.0764 20.064 40.0703L7.23629 40.0636L6.0354 39.2488ZM32.0742 22.0037V5.12545H29.7227H27.3712L27.3705 11.4735C27.3701 15.5393 27.3335 17.9548 27.2686 18.1924C27.1172 18.7464 26.605 19.356 25.9993 19.7033L25.4604 20.0122H20.0716H14.6827L14.1438 19.7033C13.5381 19.356 13.026 18.7464 12.8746 18.1924C12.8097 17.9548 12.7731 15.5393 12.7727 11.4735L12.7723 5.12545H10.4208H8.0693V22.0037V38.882H20.0719H32.0744L32.0742 22.0037ZM6.88563 30.9407C6.88137 26.9016 6.861 23.6417 6.84038 23.6965C6.81975 23.7513 6.73503 24.8715 6.65211 26.1859C6.49409 28.691 6.1774 33.473 6.01245 35.8449C5.87407 37.8347 5.8538 37.6968 6.33069 38.0091C6.55933 38.1588 6.77947 38.2821 6.81988 38.2829C6.8603 38.2837 6.88988 34.9798 6.88563 30.9407ZM25.5845 18.5854C25.9328 18.3329 26.1954 17.8996 26.1954 17.5775C26.1954 17.3739 26.1796 17.3734 20.0717 17.3734H13.9479L13.9483 17.5974C13.949 17.9773 14.3188 18.4686 14.7583 18.6733C15.1535 18.8574 15.4058 18.8652 20.2187 18.8418L25.2646 18.8173L25.5845 18.5854Z" fill="currentColor"/></svg>'
        }, {
            name: "wb-enter",
            theme: "outline",
            icon: '<svg viewBox="0 0 16 16" fill="none"><path d="M2.66667 10.6667L10 10.6667C11.8333 10.6667 13.3333 9.20133 13.3333 7.41V7.41L13.3333 7.43L13.3333 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/><path d="M5.36533 7.96799L2.66667 10.6667L5.36533 13.3653" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>'
        }, {
            name: "wb-enter-alt",
            theme: "outline",
            icon: '<svg viewBox="0 0 28 24" fill="none"><path d="M10.7371 19.7086C11.2726 19.7086 11.627 19.3461 11.627 18.8352C11.627 18.5716 11.5198 18.3738 11.3633 18.2089L9.23743 16.1408L7.78724 14.9213L9.69885 15.0037H19.9902C22.0503 15.0037 22.9236 14.0726 22.9236 12.0539V7.16772C22.9236 5.10779 22.0503 4.23438 19.9902 4.23438H15.4172C14.8816 4.23438 14.5026 4.63813 14.5026 5.13251C14.5026 5.6269 14.8734 6.03065 15.4172 6.03065H19.9491C20.7895 6.03065 21.1439 6.38495 21.1439 7.21716V11.9962C21.1439 12.8449 20.7812 13.1992 19.9491 13.1992H9.69885L7.78724 13.2899L9.23743 12.0621L11.3633 9.99396C11.5198 9.83741 11.627 9.63965 11.627 9.36774C11.627 8.85687 11.2726 8.49432 10.7371 8.49432C10.5146 8.49432 10.2674 8.5932 10.0861 8.77447L5.35651 13.4299C5.16699 13.6112 5.06812 13.8584 5.06812 14.1056C5.06812 14.3446 5.16699 14.5917 5.35651 14.7731L10.0861 19.4367C10.2674 19.6097 10.5146 19.7086 10.7371 19.7086Z" fill="currentColor"/></svg>'
        }, {
            name: "wb-flash-off",
            theme: "outline",
            icon: '<svg viewBox="0 0 25 26" fill="none"><g filter="url(#filter0_d_15364_228206)"><path d="M15.4 16.0541L9.8 22L11.4 14.4324H5L8.46301 10.7631L9.25762 9.92113M18.2 13.0811L21 10.1081H17.8H14.6L15.6667 6.05405L16.7333 2L12 7.01536" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><line x1="3.41421" y1="4" x2="21.0919" y2="21.6777" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></g><defs><filter id="filter0_d_15364_228206" x="-1" y="-1" width="28" height="28" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dy="1"/><feGaussianBlur stdDeviation="1"/><feColorMatrix type="matrix" values="0 0 0 0 0.164706 0 0 0 0 0.180392 0 0 0 0 0.262745 0 0 0 0.25 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_15364_228206"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_15364_228206" result="shape"/></filter></defs></svg>'
        }, {
            name: "wb-cart",
            theme: "outline",
            icon: '<svg viewBox="0 0 31 30" fill="none"><path d="M5.73737 5.28845C5.34442 5.15746 4.91968 5.36983 4.78869 5.76279C4.65771 6.15575 4.87008 6.58049 5.26303 6.71147L5.52794 6.79978C6.20435 7.02524 6.65155 7.17551 6.981 7.32877C7.29296 7.47389 7.42784 7.59069 7.51426 7.71059C7.60068 7.83049 7.66883 7.99538 7.70785 8.33722C7.74907 8.69823 7.7502 9.17 7.7502 9.883L7.7502 12.5548C7.75018 13.9224 7.75017 15.0247 7.86673 15.8917C7.98774 16.7918 8.24664 17.5497 8.84855 18.1516C9.45047 18.7535 10.2083 19.0124 11.1085 19.1334C11.9754 19.25 13.0777 19.25 14.4453 19.25H21.5002C21.9144 19.25 22.2502 18.9142 22.2502 18.5C22.2502 18.0857 21.9144 17.75 21.5002 17.75H14.5002C13.0648 17.75 12.0637 17.7484 11.3083 17.6468C10.5745 17.5482 10.186 17.3677 9.90921 17.091C9.67403 16.8558 9.50839 16.5398 9.4034 16H19.5222C20.4817 16 20.9614 16 21.3371 15.7522C21.7128 15.5045 21.9017 15.0636 22.2797 14.1817L22.7082 13.1817C23.5177 11.2929 23.9225 10.3485 23.4779 9.67422C23.0333 8.99996 22.0058 8.99996 19.9508 8.99996H9.24526C9.23936 8.69227 9.22644 8.41467 9.19817 8.16708C9.14282 7.68226 9.02222 7.2374 8.73112 6.83352C8.44002 6.42965 8.05613 6.17456 7.6137 5.96873C7.19746 5.7751 6.66814 5.59868 6.04176 5.38991L5.73737 5.28845Z" fill="currentColor"/><path d="M11 21C11.8284 21 12.5 21.6716 12.5 22.5C12.5 23.3284 11.8284 24 11 24C10.1716 24 9.5 23.3284 9.5 22.5C9.5 21.6716 10.1716 21 11 21Z" fill="currentColor"/><path d="M20 21.0001C20.8284 21.0001 21.5 21.6716 21.5 22.5001C21.5 23.3285 20.8284 24.0001 20 24.0001C19.1716 24.0001 18.5 23.3285 18.5 22.5001C18.5 21.6716 19.1716 21.0001 20 21.0001Z" fill="currentColor"/></svg>'
        }, {
            name: "wb-archive",
            theme: "outline",
            icon: '<svg viewBox="0 0 28 28" fill="none"><path d="M14.5203 19.135C14.3875 19.2825 14.1984 19.3667 14 19.3667C13.8015 19.3667 13.6124 19.2825 13.4797 19.135L10.6797 16.0239C10.4211 15.7365 10.4444 15.2939 10.7317 15.0353C11.0191 14.7767 11.4617 14.8 11.7203 15.0873L13.3 16.8425L13.3 10.2667H6.53332C6.39243 10.2668 6.20217 10.2668 6.06665 10.2649V14.9334C6.06665 18.4532 6.06665 20.2131 7.16012 21.3066C8.25359 22.4001 10.0135 22.4001 13.5333 22.4001H14.4666C17.9865 22.4001 19.7464 22.4001 20.8398 21.3066C21.9333 20.2131 21.9333 18.4532 21.9333 14.9334V10.2649C21.7978 10.2668 21.6075 10.2668 21.4666 10.2667H14.7L14.7 16.8425L16.2797 15.0873C16.5383 14.8 16.9809 14.7767 17.2683 15.0353C17.5556 15.2939 17.5789 15.7365 17.3203 16.0239L14.5203 19.135Z" fill="currentColor" fill-opacity="0.36"/><path d="M4.66675 7.46664C4.66675 6.58669 4.66675 6.14671 4.94012 5.87334C5.21348 5.59998 5.65346 5.59998 6.53341 5.59998H21.4667C22.3467 5.59998 22.7867 5.59998 23.06 5.87334C23.3334 6.14671 23.3334 6.58669 23.3334 7.46664C23.3334 8.3466 23.3334 8.78657 23.06 9.05994C22.7867 9.33331 22.3467 9.33331 21.4667 9.33331H6.53342C5.65346 9.33331 5.21348 9.33331 4.94012 9.05994C4.66675 8.78657 4.66675 8.3466 4.66675 7.46664Z" fill="currentColor" fill-opacity="0.36"/></svg>'
        }, {
            name: "sort-arrow",
            theme: "outline",
            icon: '<svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.88863 4.35123H8.75726C8.69301 4.35123 8.63155 4.37901 8.58825 4.42762L5.53077 7.93165V0.111107C5.53077 0.0499982 5.48048 0 5.41902 0H4.58098C4.51952 0 4.46923 0.0499982 4.46923 0.111107V7.93165L1.41175 4.42762C1.36985 4.37901 1.30839 4.35123 1.24274 4.35123H0.111375C0.016396 4.35123 -0.0352837 4.46373 0.02757 4.53456L4.66338 9.84686C4.70529 9.89493 4.75709 9.93348 4.81529 9.9599C4.87349 9.98633 4.93672 10 5.0007 10C5.06468 10 5.12791 9.98633 5.1861 9.9599C5.2443 9.93348 5.29611 9.89493 5.33801 9.84686L9.97243 4.53456C10.0353 4.46234 9.9836 4.35123 9.88863 4.35123Z" fill="currentColor"/></svg>'
        }, {
            name: "wb-unpaid",
            theme: "outline",
            icon: '<svg viewBox="0 0 28 28" fill="none"><path d="M16.3333 6.53333H12.6C9.08015 6.53333 7.32024 6.53333 6.22677 7.62679C5.43946 8.4141 5.21902 9.54689 5.1573 11.4333H23.776C23.7142 9.54689 23.4938 8.4141 22.7065 7.62679C21.613 6.53333 19.8531 6.53333 16.3333 6.53333Z" fill="currentColor"/><path d="M12.6 21.4667H16.3333C19.8531 21.4667 21.613 21.4667 22.7065 20.3732C23.8 19.2797 23.8 17.5198 23.8 14C23.8 13.5875 23.8 13.1992 23.7982 12.8333H5.13506C5.1333 13.1992 5.1333 13.5875 5.1333 14C5.1333 17.5198 5.1333 19.2797 6.22677 20.3732C7.32024 21.4667 9.08015 21.4667 12.6 21.4667Z" fill="currentColor"/><rect x="22.6792" y="3.02623" width="2.86667" height="27.1333" rx="1.43333" transform="rotate(45 22.6792 3.02623)" fill="currentColor" stroke="white"/></svg>'
        }, {
            name: "wb-delivery-trolley",
            theme: "outline",
            icon: '<svg viewBox="0 0 28 28" fill="none"><path d="M11.7268 10.9485L12.207 12.6864C12.6596 14.3249 12.886 15.1442 13.5514 15.5168C14.2169 15.8895 15.0616 15.6699 16.751 15.2309L18.5429 14.7652C20.2323 14.3262 21.077 14.1066 21.4612 13.4612C21.8454 12.8158 21.619 11.9965 21.1663 10.358L20.6862 8.62008C20.2335 6.98155 20.0072 6.16228 19.3417 5.78965C18.6763 5.41701 17.8316 5.63653 16.1422 6.07558L14.3503 6.54125C12.6609 6.9803 11.8162 7.19982 11.432 7.84524C11.0478 8.49066 11.2742 9.30993 11.7268 10.9485Z" fill="currentColor"/><path d="M4.92568 7.69715C5.02904 7.32462 5.41482 7.10641 5.78735 7.20977L7.37746 7.65095C8.23323 7.88837 8.91047 8.54808 9.14672 9.40323L11.1543 16.6702L11.3021 17.1803C11.893 17.4009 12.4006 17.8142 12.7227 18.3631L13.012 18.2738L21.2908 16.1223C21.665 16.025 22.0471 16.2495 22.1444 16.6237C22.2416 16.9979 22.0171 17.38 21.6429 17.4773L13.3948 19.6208L13.088 19.7155C13.0817 20.9018 12.2633 21.9851 11.0249 22.3069C9.54046 22.6927 8.01464 21.8383 7.61688 20.3986C7.21913 18.9588 8.10006 17.4789 9.5845 17.0932C9.65806 17.074 9.73173 17.058 9.80535 17.0449L7.79727 9.77604C7.69621 9.41026 7.4004 9.11019 7.00318 8.99998L5.41306 8.55881C5.04053 8.45545 4.82233 8.06967 4.92568 7.69715Z" fill="currentColor"/></svg>'
        }, {
            name: "wb-wallet",
            theme: "outline",
            icon: '<svg viewBox="0 0 24 24" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M18.7284 10.2885C18.6847 10.2857 18.6371 10.2857 18.5878 10.2857L18.5755 10.2857H16.6412C15.0469 10.2857 13.6827 11.5506 13.6827 13.2C13.6827 14.8494 15.0469 16.1143 16.6412 16.1143H18.5755L18.5878 16.1143C18.6371 16.1143 18.6847 16.1143 18.7284 16.1116C19.376 16.0703 19.9487 15.5596 19.9969 14.8462C20.0001 14.7994 20 14.749 20 14.7022L20 14.6895V11.7105L20 11.6978C20 11.6511 20.0001 11.6006 19.9969 11.5539C19.9487 10.8404 19.376 10.3297 18.7284 10.2885ZM16.4697 13.9771C16.8802 13.9771 17.2129 13.6292 17.2129 13.2C17.2129 12.7708 16.8802 12.4229 16.4697 12.4229C16.0593 12.4229 15.7265 12.7708 15.7265 13.2C15.7265 13.6292 16.0593 13.9771 16.4697 13.9771Z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M18.5873 17.28C18.7023 17.277 18.7893 17.3843 18.7581 17.4959C18.6033 18.0496 18.3576 18.5215 17.9634 18.9188C17.3863 19.5004 16.6546 19.7585 15.7506 19.881C14.8721 20 13.7497 20 12.3327 20H10.7035C9.28642 20 8.164 20 7.28557 19.881C6.38154 19.7585 5.64982 19.5004 5.07277 18.9188C4.49572 18.3372 4.23962 17.5998 4.11808 16.6886C3.99998 15.8033 3.99999 14.672 4 13.2438V13.1562C3.99999 11.728 3.99998 10.5967 4.11808 9.71139C4.23962 8.80025 4.49571 8.06278 5.07277 7.4812C5.64982 6.89961 6.38154 6.64151 7.28557 6.51901C8.164 6.39998 9.28642 6.39999 10.7035 6.4H12.3327C13.7497 6.39999 14.8721 6.39998 15.7506 6.51901C16.6546 6.64151 17.3863 6.89961 17.9634 7.48119C18.3576 7.87853 18.6033 8.35043 18.7581 8.9041C18.7893 9.01567 18.7023 9.12301 18.5873 9.12L16.6412 9.12001C14.4539 9.12001 12.526 10.8615 12.526 13.2C12.526 15.5385 14.4539 17.28 16.6412 17.28L18.5873 17.28ZM6.89157 9.50857C6.57217 9.50857 6.31325 9.76953 6.31325 10.0914C6.31325 10.4133 6.57217 10.6743 6.89157 10.6743H9.9759C10.2953 10.6743 10.5542 10.4133 10.5542 10.0914C10.5542 9.76953 10.2953 9.50857 9.9759 9.50857H6.89157Z" fill="currentColor"/><path d="M8.62134 5.61951L10.1884 4.46501C11.0299 3.845 12.1701 3.845 13.0116 4.46501L14.5869 5.62558C13.9282 5.59996 13.1927 5.59998 12.3863 5.6H10.6499C9.91298 5.59998 9.23528 5.59997 8.62134 5.61951Z" fill="currentColor"/></svg>'
        }, {
            name: "wb-wallet",
            theme: "outline",
            icon: '<svg viewBox="0 0 24 24" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M18.7284 10.2885C18.6847 10.2857 18.6371 10.2857 18.5878 10.2857L18.5755 10.2857H16.6412C15.0469 10.2857 13.6827 11.5506 13.6827 13.2C13.6827 14.8494 15.0469 16.1143 16.6412 16.1143H18.5755L18.5878 16.1143C18.6371 16.1143 18.6847 16.1143 18.7284 16.1116C19.376 16.0703 19.9487 15.5596 19.9969 14.8462C20.0001 14.7994 20 14.749 20 14.7022L20 14.6895V11.7105L20 11.6978C20 11.6511 20.0001 11.6006 19.9969 11.5539C19.9487 10.8404 19.376 10.3297 18.7284 10.2885ZM16.4697 13.9771C16.8802 13.9771 17.2129 13.6292 17.2129 13.2C17.2129 12.7708 16.8802 12.4229 16.4697 12.4229C16.0593 12.4229 15.7265 12.7708 15.7265 13.2C15.7265 13.6292 16.0593 13.9771 16.4697 13.9771Z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M18.5873 17.28C18.7023 17.277 18.7893 17.3843 18.7581 17.4959C18.6033 18.0496 18.3576 18.5215 17.9634 18.9188C17.3863 19.5004 16.6546 19.7585 15.7506 19.881C14.8721 20 13.7497 20 12.3327 20H10.7035C9.28642 20 8.164 20 7.28557 19.881C6.38154 19.7585 5.64982 19.5004 5.07277 18.9188C4.49572 18.3372 4.23962 17.5998 4.11808 16.6886C3.99998 15.8033 3.99999 14.672 4 13.2438V13.1562C3.99999 11.728 3.99998 10.5967 4.11808 9.71139C4.23962 8.80025 4.49571 8.06278 5.07277 7.4812C5.64982 6.89961 6.38154 6.64151 7.28557 6.51901C8.164 6.39998 9.28642 6.39999 10.7035 6.4H12.3327C13.7497 6.39999 14.8721 6.39998 15.7506 6.51901C16.6546 6.64151 17.3863 6.89961 17.9634 7.48119C18.3576 7.87853 18.6033 8.35043 18.7581 8.9041C18.7893 9.01567 18.7023 9.12301 18.5873 9.12L16.6412 9.12001C14.4539 9.12001 12.526 10.8615 12.526 13.2C12.526 15.5385 14.4539 17.28 16.6412 17.28L18.5873 17.28ZM6.89157 9.50857C6.57217 9.50857 6.31325 9.76953 6.31325 10.0914C6.31325 10.4133 6.57217 10.6743 6.89157 10.6743H9.9759C10.2953 10.6743 10.5542 10.4133 10.5542 10.0914C10.5542 9.76953 10.2953 9.50857 9.9759 9.50857H6.89157Z" fill="currentColor"/><path d="M8.62134 5.61951L10.1884 4.46501C11.0299 3.845 12.1701 3.845 13.0116 4.46501L14.5869 5.62558C13.9282 5.59996 13.1927 5.59998 12.3863 5.6H10.6499C9.91298 5.59998 9.23528 5.59997 8.62134 5.61951Z" fill="currentColor"/></svg>'
        }, {
            name: "wb-wallet",
            theme: "outline",
            icon: '<svg viewBox="0 0 24 24" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M18.7284 10.2885C18.6847 10.2857 18.6371 10.2857 18.5878 10.2857L18.5755 10.2857H16.6412C15.0469 10.2857 13.6827 11.5506 13.6827 13.2C13.6827 14.8494 15.0469 16.1143 16.6412 16.1143H18.5755L18.5878 16.1143C18.6371 16.1143 18.6847 16.1143 18.7284 16.1116C19.376 16.0703 19.9487 15.5596 19.9969 14.8462C20.0001 14.7994 20 14.749 20 14.7022L20 14.6895V11.7105L20 11.6978C20 11.6511 20.0001 11.6006 19.9969 11.5539C19.9487 10.8404 19.376 10.3297 18.7284 10.2885ZM16.4697 13.9771C16.8802 13.9771 17.2129 13.6292 17.2129 13.2C17.2129 12.7708 16.8802 12.4229 16.4697 12.4229C16.0593 12.4229 15.7265 12.7708 15.7265 13.2C15.7265 13.6292 16.0593 13.9771 16.4697 13.9771Z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M18.5873 17.28C18.7023 17.277 18.7893 17.3843 18.7581 17.4959C18.6033 18.0496 18.3576 18.5215 17.9634 18.9188C17.3863 19.5004 16.6546 19.7585 15.7506 19.881C14.8721 20 13.7497 20 12.3327 20H10.7035C9.28642 20 8.164 20 7.28557 19.881C6.38154 19.7585 5.64982 19.5004 5.07277 18.9188C4.49572 18.3372 4.23962 17.5998 4.11808 16.6886C3.99998 15.8033 3.99999 14.672 4 13.2438V13.1562C3.99999 11.728 3.99998 10.5967 4.11808 9.71139C4.23962 8.80025 4.49571 8.06278 5.07277 7.4812C5.64982 6.89961 6.38154 6.64151 7.28557 6.51901C8.164 6.39998 9.28642 6.39999 10.7035 6.4H12.3327C13.7497 6.39999 14.8721 6.39998 15.7506 6.51901C16.6546 6.64151 17.3863 6.89961 17.9634 7.48119C18.3576 7.87853 18.6033 8.35043 18.7581 8.9041C18.7893 9.01567 18.7023 9.12301 18.5873 9.12L16.6412 9.12001C14.4539 9.12001 12.526 10.8615 12.526 13.2C12.526 15.5385 14.4539 17.28 16.6412 17.28L18.5873 17.28ZM6.89157 9.50857C6.57217 9.50857 6.31325 9.76953 6.31325 10.0914C6.31325 10.4133 6.57217 10.6743 6.89157 10.6743H9.9759C10.2953 10.6743 10.5542 10.4133 10.5542 10.0914C10.5542 9.76953 10.2953 9.50857 9.9759 9.50857H6.89157Z" fill="currentColor"/><path d="M8.62134 5.61951L10.1884 4.46501C11.0299 3.845 12.1701 3.845 13.0116 4.46501L14.5869 5.62558C13.9282 5.59996 13.1927 5.59998 12.3863 5.6H10.6499C9.91298 5.59998 9.23528 5.59997 8.62134 5.61951Z" fill="currentColor"/></svg>'
        }, {
            name: "wb-shopping-bag",
            theme: "outline",
            icon: '<svg viewBox="0 0 24 24" fill="none"><path d="M6 2L3 6V20C3 20.5304 3.21071 21.0391 3.58579 21.4142C3.96086 21.7893 4.46957 22 5 22H19C19.5304 22 20.0391 21.7893 20.4142 21.4142C20.7893 21.0391 21 20.5304 21 20V6L18 2H6Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/><path d="M3 6H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M16 10C16 11.0609 15.5786 12.0783 14.8284 12.8284C14.0783 13.5786 13.0609 14 12 14C10.9391 14 9.92172 13.5786 9.17157 12.8284C8.42143 12.0783 8 11.0609 8 10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/></svg>'
        }, {
            name: "wb-back-round",
            theme: "outline",
            icon: '<svg viewBox="0 0 36 36" fill="none"><rect width="36" height="36" rx="18" fill="#FAFAFA"/><path d="M20 10L14 18L20 26" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/></svg>'
        }, {
            name: "wb-qr",
            theme: "outline",
            icon: '<svg viewBox="0 0 24 24" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M6 6H10V10H6V6Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/><path fill-rule="evenodd" clip-rule="evenodd" d="M6 14H10V18H6V14Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/><path fill-rule="evenodd" clip-rule="evenodd" d="M18 10H14V6L18 6V10Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/><path d="M16.0354 15.9646C16.0549 15.9842 16.0549 16.0158 16.0354 16.0354C16.0158 16.0549 15.9842 16.0549 15.9646 16.0354C15.9451 16.0158 15.9451 15.9842 15.9646 15.9646C15.9842 15.9451 16.0158 15.9451 16.0354 15.9646" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M14.0354 13.9646C14.0549 13.9842 14.0549 14.0158 14.0354 14.0354C14.0158 14.0549 13.9842 14.0549 13.9646 14.0354C13.9451 14.0158 13.9451 13.9842 13.9646 13.9646C13.9842 13.9451 14.0158 13.9451 14.0354 13.9646" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M14.0354 17.9646C14.0549 17.9842 14.0549 18.0158 14.0354 18.0354C14.0158 18.0549 13.9842 18.0549 13.9646 18.0354C13.9451 18.0158 13.9451 17.9842 13.9646 17.9646C13.9842 17.9451 14.0158 17.9451 14.0354 17.9646" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M18.0354 17.9646C18.0549 17.9842 18.0549 18.0158 18.0354 18.0354C18.0158 18.0549 17.9842 18.0549 17.9646 18.0354C17.9451 18.0158 17.9451 17.9842 17.9646 17.9646C17.9842 17.9451 18.0158 17.9451 18.0354 17.9646" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M21.5 7.978V4.5C21.5 3.395 20.605 2.5 19.5 2.5H16.022" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/><path d="M7.978 2.5H4.5C3.395 2.5 2.5 3.395 2.5 4.5V7.978" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/><path d="M2.5 16.022V19.5C2.5 20.605 3.395 21.5 4.5 21.5H7.978" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/><path d="M16.022 21.5H19.5C20.605 21.5 21.5 20.605 21.5 19.5V16.022" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/><path d="M18.0354 13.9646C18.0549 13.9842 18.0549 14.0158 18.0354 14.0354C18.0158 14.0549 17.9842 14.0549 17.9646 14.0354C17.9451 14.0158 17.9451 13.9842 17.9646 13.9646C17.9842 13.9451 18.0158 13.9451 18.0354 13.9646" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>'
        }, {
            name: "wb-computer",
            theme: "outline",
            icon: '<svg viewBox="0 0 24 25" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M19.5129 15.5397C19.5485 15.5764 19.5663 15.5949 19.583 15.6131C19.8398 15.8952 19.9874 16.2597 19.9992 16.641C20 16.6657 20 16.6913 20 16.7425C20 16.8618 20 16.9215 19.9968 16.9719C19.946 17.7761 19.3051 18.417 18.5009 18.4678C18.4505 18.471 18.3908 18.471 18.2715 18.471H5.72855C5.60918 18.471 5.5495 18.471 5.49911 18.4678C4.69492 18.417 4.054 17.7761 4.00318 16.9719C4 16.9215 4 16.8618 4 16.7425C4 16.6913 4 16.6657 4.00076 16.641C4.01256 16.2597 4.16018 15.8952 4.41701 15.6131C4.43366 15.5949 4.45147 15.5765 4.48706 15.5397L5.52249 14.471H18.4775L19.5129 15.5397ZM9.4 16.871C9.4 16.5397 9.66863 16.271 10 16.271H14C14.3314 16.271 14.6 16.5397 14.6 16.871C14.6 17.2024 14.3314 17.471 14 17.471H10C9.66863 17.471 9.4 17.2024 9.4 16.871Z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M5.88235 8.07103C5.88235 6.56254 5.88235 5.80829 6.35098 5.33966C6.81961 4.87103 7.57386 4.87103 9.08235 4.87103H14.9177C16.4261 4.87103 17.1804 4.87103 17.649 5.33966C18.1176 5.80829 18.1176 6.56254 18.1176 8.07103V13.671H5.88235V8.07103ZM12 7.67103C12.3314 7.67103 12.6 7.4024 12.6 7.07103C12.6 6.73966 12.3314 6.47103 12 6.47103C11.6686 6.47103 11.4 6.73966 11.4 7.07103C11.4 7.4024 11.6686 7.67103 12 7.67103Z" fill="currentColor"/></svg>'
        }, {
            name: "wb-phone-device",
            theme: "outline",
            icon: '<svg viewBox="0 0 24 25" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.53726 5.0083C5.6 5.94556 5.6 7.45406 5.6 10.471V13.671C5.6 16.688 5.6 18.1965 6.53726 19.1338C7.47452 20.071 8.98301 20.071 12 20.071C15.017 20.071 16.5255 20.071 17.4627 19.1338C18.4 18.1965 18.4 16.688 18.4 13.671V10.471C18.4 7.45406 18.4 5.94556 17.4627 5.0083C16.5255 4.07104 15.017 4.07104 12 4.07104C8.98301 4.07104 7.47452 4.07104 6.53726 5.0083ZM9.6 5.87104C9.26863 5.87104 9 6.13967 9 6.47105C9 6.80242 9.26863 7.07104 9.6 7.07104H14.4C14.7314 7.07104 15 6.80242 15 6.47105C15 6.13967 14.7314 5.87104 14.4 5.87104H9.6ZM12 17.671C12.8837 17.671 13.6 16.9547 13.6 16.071C13.6 15.1874 12.8837 14.471 12 14.471C11.1163 14.471 10.4 15.1874 10.4 16.071C10.4 16.9547 11.1163 17.671 12 17.671Z" fill="currentColor"/></svg>'
        }, {
            name: "wb-info-circle-filled",
            theme: "fill",
            icon: '<svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M16.5 8.5C16.5 12.9152 12.916 16.5 8.5 16.5C4.076 16.5 0.5 12.9152 0.500001 8.5C0.500001 4.0832 4.076 0.5 8.5 0.5C12.916 0.500001 16.5 4.0832 16.5 8.5ZM9.20384 11.5318C9.20384 11.915 8.88384 12.2358 8.49984 12.2358C8.11583 12.2358 7.80384 11.915 7.80384 11.5318L7.80384 7.9958C7.80384 7.611 8.11584 7.2998 8.49984 7.2998C8.88384 7.2998 9.20384 7.611 9.20384 7.9958L9.20384 11.5318ZM8.49202 4.75483C8.88402 4.75483 9.19602 5.07483 9.19602 5.45883C9.19602 5.84283 8.88402 6.15483 8.50002 6.15483C8.10802 6.15483 7.79602 5.84283 7.79602 5.45883C7.79602 5.07483 8.10802 4.75483 8.49202 4.75483Z" fill="currentColor"/></svg>'
        }, {
            name: "wb-double-check-circle-filled",
            theme: "fill",
            icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="8" fill="currentColor"/><path d="M8.75 13.25L9.48309 13.7998C9.91178 14.1213 10.5177 14.0478 10.857 13.6331L13.625 10.25" stroke="white" stroke-width="1.3" stroke-linecap="round"/><path fill-rule="evenodd" clip-rule="evenodd" d="M12.2996 14.5699C12.9073 14.7327 13.5809 14.5385 14.0045 14.0207L16.7532 10.6612C16.9805 10.3834 16.9396 9.97388 16.6617 9.74656C16.3839 9.51923 15.9744 9.56019 15.747 9.83802L15.2395 10.4584C15.2004 10.8337 15.0549 11.2022 14.7981 11.5161L12.2996 14.5699Z" fill="white"/></svg>'
        }, {
            name: "wb-audit",
            theme: "fill",
            icon: '<svg viewBox="0 0 20 20" fill="none"><path d="M7.91667 1.66669C7.22631 1.66669 6.66667 2.22633 6.66667 2.91669V3.75002C6.66667 4.44038 7.22631 5.00002 7.91667 5.00002H12.0833C12.7737 5.00002 13.3333 4.44038 13.3333 3.75002V2.91669C13.3333 2.22633 12.7737 1.66669 12.0833 1.66669H7.91667Z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M5.41667 3.36387C4.36841 3.42268 3.70665 3.58972 3.23223 4.06414C2.5 4.79637 2.5 5.97488 2.5 8.3319V13.3319C2.5 15.6889 2.5 16.8674 3.23223 17.5997C3.96447 18.3319 5.14298 18.3319 7.5 18.3319H12.5C14.857 18.3319 16.0355 18.3319 16.7678 17.5997C17.5 16.8674 17.5 15.6889 17.5 13.3319V8.33191C17.5 5.97488 17.5 4.79637 16.7678 4.06414C16.2933 3.58972 15.6316 3.42268 14.5833 3.36387V3.75002C14.5833 5.13073 13.464 6.25002 12.0833 6.25002H7.91667C6.53595 6.25002 5.41667 5.13073 5.41667 3.75002V3.36387ZM12.9265 10.4569C13.1788 10.2214 13.1924 9.82592 12.9569 9.57357C12.7214 9.32123 12.3259 9.30759 12.0736 9.54311L8.92857 12.4784L7.92645 11.5431C7.67411 11.3076 7.27861 11.3212 7.04309 11.5736C6.80757 11.8259 6.82121 12.2214 7.07355 12.4569L8.50212 13.7903C8.74225 14.0144 9.11489 14.0144 9.35502 13.7903L12.9265 10.4569Z" fill="currentColor"/></svg>'
        }, {
            name: "wb-bell",
            theme: "fill",
            icon: '<svg viewBox="0 0 24 22" fill="none"><path d="M3.60042 17.809H20.3996C21.3959 17.809 22 17.3074 22 16.5444C22 15.4993 20.9189 14.5587 20.0074 13.6285C19.3079 12.9074 19.1171 11.4233 19.0323 10.2214C18.9581 6.20808 17.8771 3.44893 15.0578 2.44561C14.655 1.07648 13.5633 0 11.9947 0C10.4367 0 9.33439 1.07648 8.94224 2.44561C6.12295 3.44893 5.04187 6.20808 4.96767 10.2214C4.88288 11.4233 4.6921 12.9074 3.99258 13.6285C3.07048 14.5587 2 15.4993 2 16.5444C2 17.3074 2.59353 17.809 3.60042 17.809ZM11.9947 22C13.7965 22 15.1108 20.704 15.2485 19.2409H8.75146C8.88924 20.704 10.2035 22 11.9947 22Z" fill="currentColor"/></svg>'
        }, {
            name: "wb-day",
            theme: "outline",
            icon: '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.3337 2.5L1.66699 2.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M1.66699 17.5L18.3337 17.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><rect x="2" y="6" width="16" height="8" rx="1" stroke="currentColor" stroke-width="1.5"/></svg>'
        }, {
            name: "wb-week",
            theme: "outline",
            icon: '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.16667 2.5H15.8333C16.7542 2.5 17.5 3.24583 17.5 4.16667V15.8333C17.5 16.7542 16.7542 17.5 15.8333 17.5H4.16667C3.24583 17.5 2.5 16.7542 2.5 15.8333V4.16667C2.5 3.24583 3.24583 2.5 4.16667 2.5Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M7.49967 2.5V17.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M12.4997 2.5V17.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>'
        }, {
            name: "wb-month",
            theme: "outline",
            icon: '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.16667 2.5H15.8333C16.7542 2.5 17.5 3.24583 17.5 4.16667V15.8333C17.5 16.7542 16.7542 17.5 15.8333 17.5H4.16667C3.24583 17.5 2.5 16.7542 2.5 15.8333V4.16667C2.5 3.24583 3.24583 2.5 4.16667 2.5Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M9.99967 2.5V17.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M17.5 10H2.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>'
        }, {
            name: "wb-calendar-filled",
            theme: "fill",
            icon: '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.00004 1.66667C6.00004 1.29848 5.70156 1 5.33337 1C4.96519 1 4.66671 1.29848 4.66671 1.66667V2.66667H4.00004C2.52728 2.66667 1.33337 3.86057 1.33337 5.33333H14.6667C14.6667 3.86057 13.4728 2.66667 12 2.66667H11.3334V1.66667C11.3334 1.29848 11.0349 1 10.6667 1C10.2985 1 10 1.29848 10 1.66667V2.66667H6.00004V1.66667Z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M14.6667 6.33337H1.33337V12C1.33337 13.4728 2.52728 14.6667 4.00004 14.6667H12C13.4728 14.6667 14.6667 13.4728 14.6667 12V6.33337ZM4.00004 9.66671C4.36823 9.66671 4.66671 9.36824 4.66671 9.00004C4.66671 8.63184 4.36823 8.33337 4.00004 8.33337C3.63185 8.33337 3.33337 8.63184 3.33337 9.00004C3.33337 9.36824 3.63185 9.66671 4.00004 9.66671ZM4.66671 11.6667C4.66671 12.0349 4.36823 12.3334 4.00004 12.3334C3.63185 12.3334 3.33337 12.0349 3.33337 11.6667C3.33337 11.2985 3.63185 11 4.00004 11C4.36823 11 4.66671 11.2985 4.66671 11.6667ZM6.66671 9.66671C7.03491 9.66671 7.33337 9.36824 7.33337 9.00004C7.33337 8.63184 7.03491 8.33337 6.66671 8.33337C6.29852 8.33337 6.00004 8.63184 6.00004 9.00004C6.00004 9.36824 6.29852 9.66671 6.66671 9.66671ZM7.33337 11.6667C7.33337 12.0349 7.03491 12.3334 6.66671 12.3334C6.29852 12.3334 6.00004 12.0349 6.00004 11.6667C6.00004 11.2985 6.29852 11 6.66671 11C7.03491 11 7.33337 11.2985 7.33337 11.6667ZM9.33337 9.66671C9.70157 9.66671 10 9.36824 10 9.00004C10 8.63184 9.70157 8.33337 9.33337 8.33337C8.96517 8.33337 8.66671 8.63184 8.66671 9.00004C8.66671 9.36824 8.96517 9.66671 9.33337 9.66671ZM10 11.6667C10 12.0349 9.70157 12.3334 9.33337 12.3334C8.96517 12.3334 8.66671 12.0349 8.66671 11.6667C8.66671 11.2985 8.96517 11 9.33337 11C9.70157 11 10 11.2985 10 11.6667ZM12 9.66671C12.3682 9.66671 12.6667 9.36824 12.6667 9.00004C12.6667 8.63184 12.3682 8.33337 12 8.33337C11.6318 8.33337 11.3334 8.63184 11.3334 9.00004C11.3334 9.36824 11.6318 9.66671 12 9.66671ZM12.6667 11.6667C12.6667 12.0349 12.3682 12.3334 12 12.3334C11.6318 12.3334 11.3334 12.0349 11.3334 11.6667C11.3334 11.2985 11.6318 11 12 11C12.3682 11 12.6667 11.2985 12.6667 11.6667Z" fill="currentColor"/></svg>'
        }, {
            name: "wb-clock-filled",
            theme: "fill",
            icon: '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.00004 14.6667C11.6819 14.6667 14.6667 11.6819 14.6667 8.00004C14.6667 4.31814 11.6819 1.33337 8.00004 1.33337C4.31814 1.33337 1.33337 4.31814 1.33337 8.00004C1.33337 11.6819 4.31814 14.6667 8.00004 14.6667ZM8.66671 4.66671C8.66671 4.29852 8.36824 4.00004 8.00004 4.00004C7.63184 4.00004 7.33337 4.29852 7.33337 4.66671V7.51464C7.33337 8.13931 7.68264 8.71151 8.23824 8.99697L10.6953 10.2596C11.0228 10.428 11.4247 10.2989 11.593 9.97144C11.7613 9.64391 11.6322 9.24204 11.3048 9.07377L8.84771 7.81111C8.73657 7.75397 8.66671 7.63957 8.66671 7.51464V4.66671Z" fill="currentColor"/></svg>'
        }, {
            name: "wb-arrow-new",
            theme: "outline",
            icon: '<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.46399 12.8138L11.001 8.27681L15.5381 12.8138" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>'
        }, {
            name: "wb-client-elk",
            theme: "fill",
            icon: '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_1878_10736)"><path fill-rule="evenodd" clip-rule="evenodd" d="M18.8281 0.585938C18.8281 0.262344 19.0905 0 19.4141 0C19.7377 0 20 0.262344 20 0.585938V1.05469C20 2.02395 19.2114 2.8125 18.2421 2.8125H16.2109C15.8878 2.8125 15.625 3.07535 15.625 3.39844V3.71004C15.8347 3.77527 16.0351 3.86719 16.2214 3.98352L18.8652 5.63594C18.9495 5.68861 19.019 5.76185 19.0672 5.84877C19.1153 5.93569 19.1406 6.03343 19.1406 6.13281C19.1406 7.10363 18.3536 7.89062 17.3828 7.89062H15.625V11.1328C15.625 12.2843 15.0394 13.3371 14.0586 13.949C14.0454 13.9572 14.0317 13.9645 14.018 13.9716L13.4061 19.4788C13.3903 19.6221 13.3221 19.7546 13.2146 19.8508C13.1072 19.947 12.9679 20.0001 12.8237 20H11.4258C11.1022 20 10.8398 19.7377 10.8398 19.4141V14.4531H6.73812C6.73512 15.5673 6.15227 16.575 5.20164 17.1328L5.5157 19.3312C5.5477 19.5551 5.44836 19.7824 5.24801 19.9102C5.15172 19.9716 5.03805 20 4.92387 20H3.58254C3.43829 20.0001 3.29906 19.947 3.19158 19.8508C3.0841 19.7546 3.01593 19.6221 3.00016 19.4787L2.63848 16.2237C2.63087 16.1552 2.64766 16.0862 2.6859 16.0288C3.16582 15.3096 3.43153 14.4688 3.45207 13.6044C3.45207 13.6044 3.3743 13.5361 3.34047 13.5029C2.6541 12.83 2.29355 11.895 2.34949 10.9349C2.35266 10.1035 2.67738 9.32223 3.2652 8.73312C3.85758 8.13941 4.64566 7.81246 5.48438 7.81246H10.5745C11.1473 7.81246 11.6636 7.45078 11.8594 6.9125L12.1866 6.01266C12.1439 6.01449 12.1007 6.01559 12.057 6.01559C11.703 6.01562 11.3173 5.95133 10.9719 5.75195C10.2911 5.35895 9.98633 4.5659 9.8652 4.12816C9.84431 4.05345 9.83862 3.97531 9.84846 3.89835C9.8583 3.8214 9.88348 3.74721 9.9225 3.68016C9.96105 3.61285 10.0127 3.55396 10.0744 3.50697C10.1361 3.45999 10.2067 3.42586 10.2818 3.4066C10.7214 3.29258 11.5607 3.16008 12.2414 3.55309C12.5924 3.75574 12.8432 4.06441 13.0207 4.37609C13.4018 3.98348 13.9036 3.71652 14.4531 3.62703V3.39844C14.4531 3.07535 14.1903 2.8125 13.8672 2.8125H11.8359C10.8667 2.8125 10.0781 2.02395 10.0781 1.05469V0.585938C10.0781 0.262344 10.3405 0 10.6641 0C10.9877 0 11.25 0.262344 11.25 0.585938V1.05469C11.25 1.37777 11.5129 1.64062 11.8359 1.64062H12.4219V1.05469C12.4219 0.731094 12.6842 0.46875 13.0078 0.46875C13.3314 0.46875 13.5938 0.731094 13.5938 1.05469V1.64062H13.8672C14.3171 1.64062 14.7278 1.81066 15.0391 2.08965C15.3503 1.81066 15.7611 1.64062 16.2109 1.64062H16.4844V1.05469C16.4844 0.731094 16.7467 0.46875 17.0703 0.46875C17.3939 0.46875 17.6562 0.731094 17.6562 1.05469V1.64062H18.2422C18.5653 1.64062 18.8281 1.37777 18.8281 1.05469V0.585938ZM2.43566 7.90547C1.63629 8.7066 1.19035 9.76844 1.17785 10.8986C1.13771 11.6807 1.30246 12.4598 1.65582 13.1588C1.32137 13.2896 0.959961 13.3594 0.585938 13.3594C0.262344 13.3594 0 13.097 0 12.7734V10.7422C0 9.27344 1.08652 8.05395 2.49793 7.84457C2.47703 7.86469 2.45621 7.88488 2.43566 7.90547ZM14.3359 5.54688C14.0077 5.54688 13.75 5.28898 13.75 4.96094C13.75 4.63273 14.0077 4.375 14.3359 4.375C14.6641 4.375 14.9219 4.63273 14.9219 4.96094C14.9219 5.28898 14.6641 5.54688 14.3359 5.54688Z" fill="currentColor"/></g><defs><clipPath id="clip0_1878_10736"><rect width="20" height="20" fill="currentColor"/></clipPath></defs></svg>'
        }, {
            name: "wb-client-walrus",
            theme: "fill",
            icon: '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_1878_10739)"><path d="M17.0978 15.0438C16.4371 15.8187 15.6251 16.4418 14.706 16.8785C14.6795 17.1188 14.6273 17.3555 14.5504 17.5847C14.9088 17.8269 15.3392 17.9688 15.8001 17.9688H17.7532C18.3456 17.9688 18.8274 17.4869 18.8274 16.8946C18.8274 15.9138 18.0624 15.1088 17.0978 15.0438ZM19.9552 2.52398C19.7897 1.84289 19.1734 1.36719 18.4565 1.36719H17.1874C16.6451 0.521211 15.6998 0 14.6943 0C14.0189 0 13.3575 0.233867 12.8322 0.658516C12.3069 1.0832 11.9396 1.68082 11.7981 2.34133C11.796 2.35104 11.7942 2.36081 11.7926 2.37063L11.5919 3.61313C11.291 5.47563 9.84311 6.96172 7.98916 7.31113L5.47451 7.78504C2.80037 8.28902 0.859435 10.6299 0.859435 13.3511V16.789C0.859435 17.6142 0.601467 18.4021 0.113498 19.0676C0.04944 19.1549 0.0108343 19.2582 0.0019675 19.3662C-0.00689931 19.4741 0.0143198 19.5824 0.0632686 19.679C0.112217 19.7756 0.18698 19.8567 0.279256 19.9134C0.371532 19.97 0.477709 20 0.585998 20H0.976623C2.91514 20 4.49225 18.4229 4.49225 16.4844V14.2969C4.49225 13.9733 4.75459 13.7109 5.07819 13.7109C5.40178 13.7109 5.66412 13.9733 5.66412 14.2969V16.4062H7.38815C7.53036 16.0998 7.72278 15.8193 7.95744 15.5762C8.36932 15.1488 8.88729 14.8567 9.45322 14.7261V13.1836C9.45322 12.86 9.71557 12.5977 10.0392 12.5977C10.3628 12.5977 10.6251 12.86 10.6251 13.1836V15.8203H10.1368C9.11373 15.8203 8.28135 16.6527 8.28135 17.6758C8.28135 18.2681 8.76322 18.75 9.35557 18.75H11.3087C12.5472 18.75 13.5548 17.7424 13.5548 16.5039V16.0536C13.5548 16.0536 13.7252 16.023 13.7641 16.0081C14.8969 15.5748 15.8648 14.8189 16.5633 13.8221C17.2783 12.8018 17.6563 11.6016 17.6563 10.3516V4.77363L18.4427 4.51148V5.78125C18.4427 6.10484 18.7051 6.36719 19.0287 6.36719C19.3522 6.36719 19.6146 6.10484 19.6146 5.78125V3.90918C19.9389 3.54605 20.0795 3.03539 19.9552 2.52398ZM14.7266 3.51562C14.403 3.51562 14.1407 3.25328 14.1407 2.92969C14.1407 2.60609 14.403 2.34375 14.7266 2.34375C15.0502 2.34375 15.3126 2.60609 15.3126 2.92969C15.3126 3.25328 15.0503 3.51562 14.7266 3.51562Z" fill="currentColor"/></g><defs><clipPath id="clip0_1878_10739"><rect width="20" height="20" fill="currentColor"/></clipPath></defs></svg>'
        }, {
            name: "wb-client-elephant",
            theme: "fill",
            icon: '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.4357 1.08019H13.7006L13.6846 1.06937C13.0842 0.654796 11.9159 -0.150556 10.316 0.0796787C10.3186 0.0833505 10.3198 0.0876083 10.3222 0.0912802C9.13557 0.287804 7.8067 1.21312 7.36326 2.46112C6.93553 3.66351 7.2665 5.10976 8.34803 6.76089L10.0019 9.28804C12.5029 8.03761 12.4135 6.13269 12.3602 4.99452C12.3523 4.82683 12.3471 4.70554 12.3471 4.5978C12.3471 4.2737 12.6094 4.01155 12.9333 4.01155C13.2574 4.01155 13.5196 4.2737 13.5196 4.5978C13.5196 4.6889 13.5247 4.7919 13.5299 4.90358C13.5895 6.17468 13.7097 8.74515 10.5264 10.3368C10.3278 10.4363 9.99814 10.6323 9.79764 10.6323C9.60525 10.6323 9.41803 10.5379 9.30646 10.3673L7.36678 7.40327C6.07451 5.42909 5.70127 3.63421 6.25818 2.06835C6.38228 1.71968 6.55318 1.41972 6.73963 1.14093C2.96904 1.59655 0.00408082 4.81663 0.00255738 8.78636C-0.0113098 9.37733 -0.0235364 11.1756 1.54357 13.4851C2.09088 14.2925 2.38068 15.3012 2.38068 16.4028V18.082C2.38068 18.4061 2.64279 18.6682 2.96689 18.6682H5.31185C5.63596 18.6682 5.89033 18.4061 5.89033 18.082V15.1506H8.24322V18.082C8.24322 18.4061 8.50553 18.6682 8.82963 18.6682H11.1746C11.4987 18.6682 11.7531 18.4061 11.7531 18.082C11.7531 15.8084 12.2264 13.772 13.1848 11.8558L13.8507 10.524L14.982 10.7125C15.8333 10.8544 16.4511 11.5837 16.4511 12.4472V13.3919C16.4511 13.8723 15.7921 14.1471 15.4503 13.8064C15.2214 13.5773 14.8503 13.5773 14.6213 13.8064L12.9643 15.4633C12.7354 15.6923 12.7354 16.0633 12.9643 16.2923C13.9566 17.2857 15.3712 17.6909 16.7453 17.3761C18.4927 16.9759 20 15.035 20 13.1382V6.61304C20 3.56202 17.4869 1.08019 14.4357 1.08019ZM15.8649 6.94292C15.5412 6.94292 15.2786 6.68034 15.2786 6.35655C15.2786 6.03273 15.5412 5.7703 15.8649 5.7703C16.1887 5.7703 16.4512 6.03276 16.4512 6.35655C16.4512 6.68034 16.1887 6.94292 15.8649 6.94292Z" fill="currentColor"/></svg>'
        }, {
            name: "wb-client-kangaroo",
            theme: "fill",
            icon: '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_1878_10733)"><path d="M17.9213 1.17188H14.4057C13.8549 0.445234 12.9877 0 12.0619 0H9.71818C9.38998 0 9.13225 0.257734 9.13225 0.585938C9.13225 1.88672 9.97592 2.98828 11.1478 3.37492C11.1362 3.4218 11.1244 3.46879 11.1127 3.52738L10.5033 6.65238C10.4447 6.92184 10.2103 7.10938 9.95256 7.10938H9.7299C6.68303 7.10938 4.1049 9.18367 3.43693 12.1602L2.64006 15.7695C2.34709 17.0938 1.49158 18.2422 0.296308 18.8984C0.0737295 19.0274 -0.0436143 19.3086 0.0149795 19.5663C0.085292 19.8242 0.319667 20 0.589315 20C2.53451 20 4.35092 19.168 5.61666 17.7266V19.4141C5.61666 19.7423 5.87435 20 6.2026 20H13.2338C13.5619 20 13.8198 19.7423 13.8198 19.4141C13.8198 17.797 12.5072 16.4844 10.8901 16.4844H9.13228V15.3125H9.71822C11.9681 15.3125 13.9603 13.8829 14.6869 11.7969H16.7494C17.0775 11.7969 17.3354 11.5391 17.3354 11.2109C17.3354 9.79297 16.3276 8.60945 14.9916 8.33984V6.44531C14.9916 6.12883 15.2377 5.87109 15.5658 5.85938C17.2182 5.8125 18.5072 4.52344 18.5072 2.92969V1.75781C18.5072 1.42961 18.2494 1.17188 17.9213 1.17188ZM14.4057 3.51562C14.0775 3.51562 13.8197 3.25789 13.8197 2.92969C13.8197 2.60148 14.0775 2.34375 14.4057 2.34375C14.7338 2.34375 14.9916 2.60148 14.9916 2.92969C14.9916 3.25789 14.7338 3.51562 14.4057 3.51562Z" fill="currentColor"/><path d="M13.9838 14.8672C13.5972 15.207 13.1753 15.5 12.7183 15.7461C13.5269 16.1445 14.1947 16.8125 14.5697 17.6327C14.8159 17.5625 14.9917 17.3397 14.9917 17.0702C14.9917 16.1913 14.6048 15.3945 13.9838 14.8672Z" fill="currentColor"/></g><defs><clipPath id="clip0_1878_10733"><rect width="20" height="20" fill="currentColor"/></clipPath></defs></svg>'
        }, {
            name: "wb-client-cat",
            theme: "fill",
            icon: '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.4872 4.55823L17.4914 3.94778C17.0989 3.17549 16.3442 2.62751 15.4814 2.50031L15.2473 2.46578L15.2421 1.11383C15.2416 0.986458 15.197 0.863198 15.1158 0.765054C15.0346 0.66691 14.9219 0.599956 14.7969 0.575604C14.6719 0.551226 14.5423 0.570969 14.4302 0.631467C14.3181 0.691965 14.2304 0.789471 14.1822 0.907361L13.5009 2.57114C13.4915 2.59426 13.4842 2.61797 13.478 2.64189C12.289 3.12551 11.4483 4.29345 11.4483 5.65417V6.61274C11.4483 7.32213 10.8733 7.8972 10.1639 7.8972H9.79624C6.86206 7.8972 4.47491 10.2843 4.47491 13.2185V15.6862C4.47425 16.2112 4.63525 16.7237 4.93603 17.154H2.1783C1.58425 17.154 1.10096 16.6707 1.10096 16.0767C1.10096 15.4826 1.58425 14.9993 2.1783 14.9993H2.4524C2.75641 14.9993 3.00288 14.7529 3.00288 14.4489C3.00288 14.1448 2.75641 13.8984 2.4524 13.8984H2.1783C0.977179 13.8984 0 14.8756 0 16.0767C0 17.2778 0.977179 18.2549 2.1783 18.2549L12.3435 18.2553C12.3843 18.2551 12.425 18.253 12.4656 18.2491V17.3155C12.4656 16.7975 12.0442 16.376 11.5261 16.376H10.7018C10.3978 16.376 10.1513 16.1295 10.1513 15.8255V13.5691C10.1513 12.3077 9.12509 11.2814 7.86364 11.2814C7.55963 11.2814 7.31316 11.0349 7.31316 10.7309C7.31316 10.4269 7.55963 10.1805 7.86364 10.1805C9.73216 10.1805 11.2523 11.7006 11.2523 13.5691V15.275H11.5261C12.6512 15.275 13.5666 16.1903 13.5666 17.3155V17.4088L13.5668 17.4082C13.8008 17.9082 14.3081 18.2547 14.8966 18.2549L15.6308 18.255C16.2388 18.255 16.7318 17.7621 16.7318 17.154C16.7318 16.5459 16.2389 16.053 15.6308 16.053V13.494C16.6083 12.2467 17.1451 10.6956 17.1451 9.1087V7.63165L18.2491 6.82864C18.3605 6.74758 18.4375 6.62769 18.4648 6.49263L18.7391 5.13664C18.7614 5.02604 18.7493 4.91123 18.7042 4.80778C18.6592 4.70432 18.5834 4.6172 18.4872 4.55823ZM16.7542 5.1205C16.6514 5.22289 16.5098 5.28164 16.3648 5.28164C16.2199 5.28164 16.0782 5.22289 15.9755 5.1205C15.8731 5.01774 15.8143 4.87612 15.8143 4.73116C15.8143 4.5862 15.8731 4.4445 15.9755 4.34178C16.0782 4.23939 16.2199 4.18068 16.3648 4.18068C16.5098 4.18068 16.6515 4.23939 16.7542 4.34178C16.857 4.44536 16.9148 4.58524 16.9153 4.73116C16.9148 4.87706 16.857 5.01692 16.7542 5.1205Z" fill="currentColor"/></svg>'
        }, {
            name: "wb-client-swan",
            theme: "fill",
            icon: '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_1878_10744)"><path d="M0.907248 9.43367C1.51675 8.28972 2.29811 7.46875 3.1075 7.12195C3.2084 7.07869 3.31938 7.06448 3.42792 7.08092C3.53647 7.09736 3.63826 7.1438 3.72183 7.215C3.8054 7.28617 3.86742 7.37926 3.90092 7.4838C3.93442 7.58833 3.93805 7.70013 3.91141 7.80662L3.63888 8.89647C3.63393 8.91631 3.6293 8.93619 3.62493 8.95647C3.53704 9.36452 3.6843 9.76192 4.01892 10.0195C4.36826 10.2886 4.81046 10.3302 5.20161 10.1311C6.47464 9.48326 7.77282 9.03258 9.00121 8.80865C7.91352 6.20067 7.87812 4.09928 8.89823 2.55521C10.6508 -0.0977587 14.832 -0.00785803 15.1386 0.00275087C16.7584 0.00884117 18.0742 1.32827 18.0742 2.94924C18.0742 4.57401 16.7522 5.8958 15.1273 5.8958C14.8224 5.8958 14.5184 5.84739 14.2229 5.75175C14.1997 5.74621 14.1769 5.73927 14.1545 5.73097C13.4538 5.47034 12.474 5.34563 12.2609 5.57518C12.1752 5.66743 12.1334 6.04814 12.5196 6.88993C12.8994 7.71762 13.218 8.43985 13.469 9.04169C14.6389 9.42636 15.5226 10.0965 16.0985 11.0366C16.6273 11.8999 16.8955 12.9993 16.8955 14.3043C16.8955 16.0282 16.4606 17.3918 15.6031 18.3575C14.5659 19.5254 12.9139 20.1176 10.6912 20.1176L5.32876 20.1024C4.87124 20.1024 4.49801 20.0648 4.15412 19.9841C2.52837 19.603 1.31003 18.4411 0.630945 16.6239C0.0817966 15.1545 -0.000205994 13.5792 -0.000205994 12.7709C-0.000205994 11.7324 0.330557 10.516 0.907248 9.43367ZM15.3238 3.5374C15.6493 3.5374 15.9131 3.27351 15.9131 2.94802C15.9131 2.62252 15.6493 2.35863 15.3238 2.35863C14.9983 2.35863 14.7344 2.62252 14.7344 2.94802C14.7344 3.27351 14.9983 3.5374 15.3238 3.5374ZM3.90316 16.0469C4.1441 16.954 4.93667 17.5636 5.87532 17.5636H10.0212C11.7534 17.5636 13.1627 16.1544 13.1627 14.4221C13.1627 13.2893 12.5777 12.2736 11.598 11.705C10.6182 11.1365 9.44608 11.1326 8.46259 11.6946L4.86295 13.7515C4.04795 14.2172 3.66226 15.1397 3.90316 16.0469Z" fill="currentColor"/><path d="M19.0239 4.30518L19.9518 5.81549C20.0166 5.92088 20.0466 6.044 20.0375 6.16738C20.0284 6.29076 19.9807 6.40816 19.9012 6.50293C19.8217 6.5977 19.7143 6.66504 19.5944 6.6954C19.4745 6.72576 19.348 6.71761 19.233 6.6721L17.7867 6.10048C18.3458 5.62803 18.7779 5.00992 19.0239 4.30518ZM5.44796 14.7748L9.0476 12.7179C9.3529 12.5435 9.68724 12.4563 10.0215 12.4563C10.36 12.4563 10.6985 12.5457 11.0065 12.7244C11.6186 13.0796 11.9841 13.7142 11.9841 14.422C11.9841 15.5043 11.1036 16.3847 10.0214 16.3847H5.8755C5.38682 16.3847 5.12486 16.0539 5.04262 15.7442C4.96038 15.4345 5.02372 15.0173 5.44796 14.7748Z" fill="currentColor"/></g><defs><clipPath id="clip0_1878_10744"><rect width="20" height="20" fill="currentColor"/></clipPath></defs></svg>'
        }, {
            name: "wb-client-fish",
            theme: "fill",
            icon: '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_1878_10734)"><path d="M19.8593 9.625L15.7657 4.84383C15.5429 4.57437 15.297 4.3282 15.0391 4.11719C13.7617 5.16031 12.9297 7.44547 12.9297 10.0001C12.9297 12.5782 13.8086 14.8634 15.0273 15.8828C15.2852 15.6837 15.5312 15.4259 15.7655 15.1563L19.8593 10.3752C20.0468 10.1641 20.0468 9.83605 19.8593 9.625ZM14.6875 9.41414C14.3593 9.41414 14.1016 9.15625 14.1016 8.8282C14.1016 8.5 14.3593 8.24227 14.6875 8.24227C15.0157 8.24227 15.2734 8.5 15.2734 8.8282C15.2734 9.15625 15.0157 9.41414 14.6875 9.41414Z" fill="currentColor"/><path d="M11.7578 10C11.7578 7.21102 12.6484 4.73828 14.078 3.40242C13.0235 2.73438 11.8164 2.38281 10.5859 2.38281C7.90234 2.38281 5.5 3.99992 4.29289 6.58984C4.19922 6.81242 4.01168 6.88281 3.91801 6.90625C3.74223 6.94141 3.51562 6.90625 3.37492 6.78906L1.59379 5.37109C1.45309 5.25391 1.2657 5.21883 1.10152 5.25391C0.925742 5.28898 0.773477 5.40617 0.703125 5.57039C0.257734 6.46086 0 8.11324 0 10C0 11.8868 0.257734 13.539 0.703125 14.4296C0.773438 14.5938 0.925781 14.7109 1.10156 14.7461C1.2657 14.7812 1.45312 14.7461 1.59375 14.6289L3.37492 13.2109C3.51562 13.0938 3.74223 13.0586 3.91801 13.0938C4.01168 13.1172 4.19922 13.1876 4.29289 13.4102C5.50004 16.0001 7.90238 17.6172 10.5859 17.6172C11.8281 17.6172 13.0352 17.2656 14.0898 16.5976C12.6836 15.3085 11.7578 12.8593 11.7578 10ZM7.59766 12.3906C7.79695 12.6484 7.76172 13.0118 7.5157 13.2109C7.41012 13.3046 7.26961 13.3516 7.14066 13.3516C6.9766 13.3516 6.82418 13.2812 6.70699 13.1523C6.48438 12.8944 5.89844 11.8164 5.89844 10C5.89844 8.18359 6.48438 7.10539 6.70703 6.84766C6.91805 6.60156 7.29297 6.57805 7.53906 6.78906C7.78516 7 7.80852 7.36328 7.59766 7.60938C7.49219 7.76172 7.07031 8.59375 7.07031 10C7.07031 11.4062 7.49219 12.2501 7.59766 12.3906ZM10.5156 13.9258C10.7266 14.1719 10.7031 14.5352 10.457 14.7461C10.3516 14.8516 10.2109 14.8984 10.0703 14.8984C9.90617 14.8984 9.75391 14.828 9.63672 14.6875C8.95703 13.9258 8.24219 12.2852 8.24219 10C8.24219 7.71484 8.95703 6.07422 9.63672 5.3125C9.84773 5.06641 10.2109 5.04289 10.457 5.25391C10.7031 5.46477 10.7265 5.82812 10.5156 6.07422C10.1055 6.54297 9.41406 7.90234 9.41406 10C9.41406 12.0977 10.1055 13.457 10.5156 13.9258ZM3.37891 1.18742L4.11711 1.39848C4.89062 1.62109 5.57039 2.06633 6.07422 2.65227C7.3868 1.72656 8.94531 1.21094 10.5859 1.21094C11.1836 1.21094 11.7813 1.28125 12.3555 1.4218C11.3359 0.542891 10.0236 0 8.64062 0H3.54297C3.25 0 2.99227 0.249922 2.95703 0.542891C2.92188 0.835859 3.09766 1.10551 3.37891 1.18742ZM6.07422 17.3476C5.57023 17.9335 4.89062 18.3789 4.11711 18.6015L3.37891 18.8124C3.09766 18.8945 2.92188 19.1641 2.95703 19.4571C2.99227 19.7501 3.25 20 3.54297 20H8.64062C10.0235 20 11.3359 19.4571 12.3555 18.5782C11.7813 18.7187 11.1836 18.7891 10.5859 18.7891C8.94531 18.7891 7.3868 18.2734 6.07422 17.3476Z" fill="currentColor"/></g><defs><clipPath id="clip0_1878_10734"><rect width="20" height="20" fill="currentColor"/></clipPath></defs></svg>'
        }, {
            name: "wb-client-dog",
            theme: "fill",
            icon: '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_1878_10741)"><path d="M2.59367 16.3208C2.55205 16.3188 2.51038 16.3178 2.46871 16.3177H0.585938C0.262305 16.3177 0 16.58 0 16.9037V17.5313C0 18.8969 1.10547 20 2.46875 20H2.69453C2.62775 19.8119 2.59364 19.6137 2.59367 19.4141V16.3208ZM10.983 5.42281C11.8482 5.42281 12.552 4.71891 12.552 3.85375L12.5519 0H12.1249C10.6253 0 9.41406 1.21352 9.41406 2.71086V3.85375C9.41406 4.71895 10.118 5.42281 10.983 5.42281Z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M17.1464 1.88281H19.4142C19.7378 1.88281 20.0002 2.14508 20 2.46871V3.72391C20 5.08516 18.8927 6.19266 17.5313 6.19266H16.2345V10.8751C16.2345 12.3808 15.5362 13.7857 14.3516 14.6941V16.4133C15.0806 16.6586 15.6068 17.3483 15.6068 18.1589V19.4141C15.6068 19.7377 15.3445 20 15.0209 20H12.4689V19.4141C12.4689 18.7133 12.2345 18.0662 11.8405 17.5466C11.8406 17.5444 11.8407 17.5422 11.8409 17.5401C11.8411 17.5371 11.8413 17.5342 11.8413 17.5312V14.3934C11.8413 14.0697 11.579 13.8074 11.2554 13.8074C10.9317 13.8074 10.6694 14.0697 10.6694 14.3934V16.6034C10.4427 16.498 10.204 16.4208 9.95852 16.3733V16.2753C9.95852 14.5839 8.5925 13.1796 6.86203 13.1796C6.53855 13.1796 6.27656 13.4421 6.27656 13.7655C6.27656 14.0892 6.53914 14.3515 6.86281 14.3515C7.90773 14.3515 8.78664 15.1962 8.78664 16.2753V16.9037C8.78664 17.2272 9.04891 17.4896 9.37258 17.4896C10.4337 17.4896 11.297 18.353 11.297 19.4141V20H4.35156C4.02813 20 3.76562 19.7377 3.76562 19.4141V13.8505C3.76562 10.6973 5.70594 8.83195 6.53586 8.18637C6.91246 7.8934 7.2959 7.5952 7.65906 7.31293C8.22227 6.87484 8.66402 6.3243 8.96352 5.70465C9.46496 6.25121 10.1847 6.59469 10.983 6.59469C12.4944 6.59469 13.724 5.36516 13.724 3.85359L13.7238 8.98324e-08H15.0208C15.0978 -4.25506e-05 15.174 0.0150952 15.2452 0.0445474C15.3163 0.0739996 15.3809 0.117188 15.4353 0.171641L17.1464 1.88281ZM15.5861 2.42188C15.2579 2.42188 15.0001 2.16398 15.0001 1.83594C15.0001 1.50773 15.2579 1.25 15.5861 1.25C15.9143 1.25 16.172 1.50773 16.172 1.83594C16.172 2.16398 15.9143 2.42188 15.5861 2.42188Z" fill="currentColor"/></g><defs><clipPath id="clip0_1878_10741"><rect width="20" height="20" fill="currentColor"/></clipPath></defs></svg>'
        }, {
            name: "wb-client-parrot",
            theme: "fill",
            icon: '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.91219 20H14.2252C14.5488 20 14.8112 19.7377 14.8112 19.4141C14.8112 19.0905 14.5488 18.8281 14.2252 18.8281H11.2454C10.8529 19.2741 10.4049 19.668 9.91219 20ZM14.3677 0H12.9647V4.12109H16.9601C17.2832 4.12109 17.5461 3.85824 17.5461 3.53516V3.17844C17.5461 1.42586 16.1202 0 14.3677 0ZM12.9647 6.80129C13.8662 6.59707 14.6621 6.0548 15.1821 5.29297H12.9647V6.80129ZM11.7929 0H7.24535C4.60344 0 2.4541 2.14934 2.4541 4.79125V9.83504C3.23566 9.00832 4.34191 8.49164 5.56672 8.49164C7.76129 8.49164 9.54668 10.277 9.54668 12.4716V13.4934C9.54668 15.2795 8.91981 17.0191 7.78152 18.3918C7.25849 19.022 6.63835 19.5649 5.94445 20H6.07137C9.22621 20 11.7929 17.4334 11.7929 14.2785V0ZM9.28242 3.09672C8.95395 3.09672 8.7107 2.82824 8.69649 2.51078C8.68231 2.19434 8.97594 1.92484 9.28242 1.92484C9.6109 1.92484 9.85414 2.19332 9.86836 2.51078C9.8825 2.82723 9.58891 3.09672 9.28242 3.09672Z" fill="currentColor"/><path d="M8.3748 12.4717C8.3748 10.9233 7.11512 9.66357 5.56672 9.66357C3.85039 9.66357 2.4541 11.0599 2.4541 12.7762V19.2982C2.4541 19.4751 2.5327 19.6411 2.66973 19.7535C2.74891 19.8185 2.91641 19.9204 3.14891 19.8742C6.17703 19.2701 8.3748 16.5866 8.3748 13.4935V12.4717Z" fill="currentColor"/></svg>'
        }, {
            name: "wb-client-bear",
            theme: "fill",
            icon: '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_1878_10735)"><path d="M15.5069 16.5911L15.4862 11.8662L15.0299 12.4287L13.7744 16.8544L13.7961 16.8903C14.2762 17.685 14.2905 18.6422 13.8343 19.4509C13.8113 19.4914 13.7873 19.5312 13.7622 19.5705H14.8924C15.3944 19.5705 15.8405 19.3089 16.0856 18.8708C16.3306 18.4326 16.3201 17.9157 16.0575 17.4879L15.5069 16.5911Z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M18.4964 3.61387L19.5905 3.95937C19.7095 3.99658 19.8134 4.07088 19.8871 4.17141C19.9607 4.27194 20.0003 4.39341 20 4.51805V5.58281C20 6.12871 19.613 6.61004 19.0799 6.72734L17.9445 6.97711L17.9431 6.97801L13.9682 11.8777L12.5084 17.0232L12.5087 17.0252L12.7932 17.4961C13.0517 17.924 13.0594 18.4395 12.8138 18.8749C12.5681 19.3103 12.123 19.5703 11.623 19.5703H9.99375L9.99125 19.5683L9.12082 16.0872L9.98285 12.6016C10.0605 12.2875 9.86887 11.9698 9.55473 11.8921C9.24066 11.8146 8.92293 12.0061 8.84524 12.3202L8.05692 15.5078H7.30469V15C7.30469 13.3846 5.99043 12.0703 4.375 12.0703C4.05141 12.0703 3.78906 12.3327 3.78906 12.6562C3.78906 12.9798 4.05141 13.2422 4.375 13.2422C5.34426 13.2422 6.13281 14.0307 6.13281 15V16.0938C6.13281 16.4173 6.39516 16.6797 6.71875 16.6797H8.06703L8.78442 19.5671L8.78191 19.5703H3.32289C1.4877 19.5703 3.11052e-07 18.0826 3.11052e-07 16.2474V14.7131C-0.000427254 13.1426 0.439944 11.6035 1.27102 10.2708C2.10141 8.93774 3.28928 7.86447 4.69949 7.17313L6.42035 6.32871L7.3777 5.1216C7.66859 4.75482 8.03861 4.45851 8.46012 4.25483C8.88162 4.05115 9.3437 3.94535 9.81184 3.94535H11.0573L11.0588 3.94484L12.216 3.09625C12.0023 2.8168 11.875 2.46801 11.875 2.08984C11.875 1.17441 12.6197 0.429688 13.5352 0.429688C14.3511 0.429688 15.0308 1.02145 15.1691 1.7982C15.1722 1.79806 15.1752 1.79785 15.1783 1.79765C15.1841 1.79726 15.1899 1.79688 15.1958 1.79688H16.4062C17.4694 1.79688 18.3509 2.58766 18.4946 3.61184L18.4952 3.6131L18.4964 3.61387ZM16.8359 3.67188C16.5077 3.67188 16.25 3.41398 16.25 3.08594C16.25 2.75773 16.5077 2.5 16.8359 2.5C17.1641 2.5 17.4219 2.75773 17.4219 3.08594C17.4219 3.41398 17.1641 3.67188 16.8359 3.67188Z" fill="currentColor"/></g><defs><clipPath id="clip0_1878_10735"><rect width="20" height="20" fill="currentColor"/></clipPath></defs></svg>'
        }, {
            name: "wb-client-whale",
            theme: "fill",
            icon: '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_1878_10738)"><path d="M8.4961 15.6656C8.49644 15.9625 8.39733 16.251 8.21458 16.4851C8.03184 16.7191 7.77598 16.8852 7.48782 16.9569C6.36712 17.2371 5.54563 18.1576 5.39508 19.302C5.38436 19.384 5.39126 19.4673 5.41533 19.5464C5.4394 19.6255 5.48008 19.6985 5.53465 19.7606C5.58981 19.8236 5.65777 19.874 5.73398 19.9085C5.81019 19.9431 5.8929 19.9609 5.97657 19.961H8.39844C10.0677 19.961 11.4258 18.6029 11.4258 16.9336V15.2735H8.4961V15.6656ZM17.0703 8.63283H7.75157C6.97282 8.63283 6.29712 8.13236 6.07012 7.38744L5.63446 5.95795C6.23368 5.53771 6.69774 5.04724 7.01559 4.49674C7.86688 3.02228 7.60755 1.21306 7.45657 0.503729C7.43941 0.423222 7.40555 0.347214 7.35716 0.280625C7.30877 0.214035 7.24694 0.158348 7.17567 0.117166C7.10453 0.0762375 7.02559 0.0507011 6.94395 0.0422093C6.86232 0.0337174 6.77981 0.0424592 6.70176 0.0678691C6.10712 0.26201 4.7143 0.814158 3.80758 1.95107C2.9009 0.814236 1.50801 0.262049 0.913405 0.0679082C0.835372 0.042486 0.752871 0.0337343 0.671241 0.0422196C0.589612 0.0507048 0.510674 0.076238 0.439538 0.117166C0.368256 0.15834 0.306416 0.214024 0.25802 0.280615C0.209625 0.347205 0.175754 0.423217 0.1586 0.503729C0.00758479 1.2131 -0.251751 3.02228 0.599577 4.49674C0.906374 5.02814 1.34735 5.5017 1.91407 5.91041V10.7813C1.91407 11.9708 2.18837 13.0975 2.67673 14.1016H19.5107C19.8261 13.3162 20 12.4593 20 11.5625C20 9.94709 18.6858 8.63283 17.0703 8.63283ZM16.6797 12.1485C16.3561 12.1485 16.0938 11.8861 16.0938 11.5625C16.0938 11.2389 16.3561 10.9766 16.6797 10.9766C17.0033 10.9766 17.2656 11.2389 17.2656 11.5625C17.2656 11.8861 17.0033 12.1485 16.6797 12.1485ZM7.20356 15.82C7.27579 15.802 7.32423 15.7399 7.32423 15.6656V15.2735H3.38376C3.88492 15.9569 4.49571 16.5527 5.19137 17.0368C5.70962 16.4512 6.40266 16.0203 7.20356 15.82ZM12.5977 16.9336C12.5977 17.4486 12.5043 17.9421 12.3339 18.3985H13.1641C15.5663 18.3985 17.6829 17.1527 18.9024 15.2735H12.5977V16.9336Z" fill="currentColor"/></g><defs><clipPath id="clip0_1878_10738"><rect width="20" height="20" fill="currentColor"/></clipPath></defs></svg>'
        }, {
            name: "wb-client-snail",
            theme: "fill",
            icon: '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_1878_10746)"><path d="M17.0862 3.07152C16.7203 2.74914 16.4844 2.28273 16.4844 1.75781C16.4844 0.788516 17.2729 0 18.2422 0C19.2115 0 20 0.788516 20 1.75781C20 2.72711 19.2115 3.51562 18.2422 3.51562C18.2184 3.51562 18.1964 3.50953 18.173 3.50863L17.5523 5.05965C17.2434 4.91824 16.9218 4.80203 16.5782 4.74609C16.5253 4.7373 16.4725 4.74395 16.4195 4.73723L17.0862 3.07152ZM0.118359 18.4755L0.117579 18.4786C0.166601 18.2755 0.12793 18.436 0.118359 18.4755ZM0.117579 18.4786L0.118086 18.4767C0.116173 18.4845 0.115625 18.4868 0.117579 18.4786Z" fill="currentColor"/><path d="M0.118359 18.4755C0.119247 18.4718 0.120211 18.4681 0.12125 18.4645C0.120235 18.4686 0.119062 18.4726 0.118086 18.4767C0.118164 18.4763 0.118254 18.4759 0.118359 18.4755ZM0.12125 18.4645C0.325508 17.6294 0.751915 16.8899 1.40004 16.32C2.4891 17.1379 3.84606 17.6172 5.27344 17.6172C7.08988 17.6172 8.74602 16.6914 9.69531 15.2734C9.70703 15.2617 9.70703 15.25 9.71879 15.2382C9.78918 15.2617 9.85941 15.2734 9.94137 15.2734H11.1719C12.1446 15.2734 12.9297 14.4882 12.9297 13.5156V8.82813C12.9297 8.34126 13.063 7.87239 13.2888 7.45157C14.7488 4.72223 18.7891 5.97337 18.7891 8.95704V14.6875C18.7891 17.5937 16.4218 20 13.5156 20H0.585938C0.26207 20 0 19.7379 0 19.4141C0 19.23 0.145977 18.3793 0.12125 18.4645ZM15.8594 9.41407C16.183 9.41407 16.4453 9.15173 16.4453 8.82813C16.4453 8.50446 16.183 8.24219 15.8594 8.24219C15.5358 8.24219 15.2734 8.50446 15.2734 8.82813C15.2734 9.15173 15.5358 9.41407 15.8594 9.41407Z" fill="currentColor"/><path d="M2.30244 5.38172C3.78561 4.03359 5.74385 3.39617 7.75912 3.58785C9.71479 3.77418 11.4249 4.83488 12.5787 6.36547C12.0518 7.07023 11.7577 7.92918 11.7577 8.82812V13.5156C11.7577 13.8216 11.5272 14.1016 11.1718 14.1016H10.2812C10.2929 14.0781 10.3046 14.043 10.3163 14.0195C10.492 13.4921 10.5858 12.9297 10.5858 12.3438V11.3711C10.5858 9.10934 8.83975 7.18746 6.70686 7.07031C5.5467 7.0234 4.44135 7.41012 3.62107 8.19527C2.80068 8.98047 2.34365 10.0351 2.34365 11.1719V11.7578C2.34365 13.0468 3.39838 14.1016 4.6874 14.1016C5.97643 14.1016 7.07022 13.0468 7.07022 11.7578V11.1719C7.07022 10.8437 6.81244 10.5859 6.48428 10.5859C6.15611 10.5859 5.89834 10.8437 5.89834 11.1719V11.7578C5.89834 12.4023 5.33197 12.9297 4.6874 12.9297C4.04283 12.9297 3.51553 12.4023 3.51553 11.7578V11.1719C3.51553 10.3633 3.84369 9.60152 4.42963 9.05078C5.01557 8.48824 5.82795 8.20699 6.63662 8.24219C8.1717 8.32422 9.41397 9.73043 9.41397 11.3711V12.3438C9.41397 13.4059 8.99369 14.3836 8.34768 15.0859C7.59752 15.918 6.48041 16.4453 5.27334 16.4453C4.25381 16.4453 3.29295 16.1523 2.4608 15.6132H2.4492C0.993691 14.7182 -9.72748e-05 13.0882 -9.72748e-05 11.1719V10.5859C-9.72748e-05 8.60898 0.83877 6.71211 2.30244 5.38172ZM13.5155 0C14.4848 0 15.2733 0.788516 15.2733 1.75781C15.2733 2.28273 15.0373 2.74922 14.6714 3.0716L15.3413 4.74516C14.9496 4.79519 14.5672 4.90115 14.2056 5.0598L13.5847 3.50863C13.5613 3.50953 13.5393 3.51562 13.5155 3.51562C12.5462 3.51562 11.7577 2.72711 11.7577 1.75781C11.7577 0.788516 12.5462 0 13.5155 0Z" fill="currentColor"/></g><defs><clipPath id="clip0_1878_10746"><rect width="20" height="20" fill="currentColor"/></clipPath></defs></svg>'
        }, {
            name: "wb-client-bunny",
            theme: "fill",
            icon: '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_1878_10743)"><path d="M12.8154 1.97315C13.0287 2.18619 13.2336 2.40755 13.4295 2.63672H13.4398C13.8323 2.63672 14.2181 2.68012 14.5918 2.76449C13.9232 1.10724 12.8609 -0.306663 11.8597 0.0577897C11.5742 0.161684 11.3779 0.379543 11.2559 0.677272C11.9299 1.12804 12.49 1.6478 12.8061 1.96392L12.8154 1.97315ZM2.47955 10.8063C1.60376 10.3007 0.565878 10.4587 0.161399 11.1594C-0.243118 11.86 0.13895 12.8379 1.01471 13.3435C1.13332 13.412 1.26677 13.4748 1.40948 13.5308C1.62843 12.5753 1.99833 11.6607 2.50526 10.8216C2.49672 10.8166 2.48812 10.8112 2.47955 10.8063ZM18.75 7.58057C18.75 7.50843 18.7358 7.437 18.7082 7.37035C18.6806 7.3037 18.6401 7.24314 18.5891 7.19213L16.329 4.93202C15.5573 4.16034 14.5313 3.73535 13.4399 3.73535C13.2801 3.73539 13.1157 3.74986 12.9385 3.77886C12.6727 3.42638 12.3659 3.07735 12.0387 2.75014L12.0293 2.74072C10.6759 1.38732 8.94994 0.382033 8.14498 1.187C7.34001 1.99197 8.34529 3.71788 9.6987 5.07129L9.70811 5.0807C9.96504 5.33764 10.2354 5.58197 10.5103 5.80379C10.3893 6.1422 10.3272 6.49299 10.3272 6.84815C10.3272 7.03407 10.3436 7.21784 10.3764 7.39852C8.22543 7.43247 6.2086 8.28611 4.68385 9.81083C3.1276 11.3671 2.27052 13.4363 2.27052 15.6372C2.27052 16.4687 2.59428 17.2504 3.1822 17.8383C3.77015 18.4262 4.55186 18.75 5.38331 18.75L10.6934 18.75V18.0175C10.6934 17.2087 10.0377 16.5529 9.22889 16.5527H9.04541C8.74205 16.5527 8.4961 16.3068 8.4961 16.0034C8.4961 15.3702 8.3431 13.2737 6.3742 12.8799C6.07673 12.8204 5.88377 12.531 5.94328 12.2336C6.00279 11.936 6.29217 11.7432 6.58964 11.8026C7.58482 12.0017 8.38982 12.5588 8.91772 13.4138C9.27983 14.0004 9.50215 14.706 9.57129 15.4777C10.8233 15.646 11.792 16.7206 11.792 18.0176V18.75H17.1021C17.4054 18.75 17.6514 18.5041 17.6514 18.2007V18.0176C17.6514 17.2087 16.9957 16.553 16.1869 16.5527H14.3555C14.0521 16.5527 13.8062 16.3068 13.8062 16.0034C13.8062 15.7001 14.0521 15.4541 14.3555 15.4541H15.7335C16.4074 13.6996 16.6289 11.8228 16.3824 9.9609C17.6891 9.95405 18.75 8.88882 18.75 7.58057ZM14.7217 7.21436C14.4183 7.21436 14.1724 6.96841 14.1724 6.66504C14.1724 6.36167 14.4183 6.11572 14.7217 6.11572C15.0251 6.11572 15.271 6.36167 15.271 6.66504C15.271 6.96841 15.0251 7.21436 14.7217 7.21436Z" fill="currentColor"/></g><defs><clipPath id="clip0_1878_10743"><rect width="20" height="20" fill="currentColor"/></clipPath></defs></svg>'
        }, {
            name: "wb-client-chicken",
            theme: "fill",
            icon: '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.94929 8.73893C2.20128 8.28631 2.59585 7.94538 3.06718 7.76214C3.25062 7.29089 3.59171 6.89651 4.04448 6.64464C5.10237 6.05632 6.44178 6.43831 7.03014 7.49624C7.14565 7.70385 7.23069 7.98874 7.28994 8.3721H10.1876V4.84698C10.1876 3.88425 10.5842 3.01265 11.2221 2.38605C11.5589 2.05493 11.96 1.79628 12.4006 1.62605C12.1742 1.3527 12.0239 1.13566 11.9902 1.01953C11.8693 0.595314 12.1161 0.151799 12.5404 0.0308619C12.7777 -0.0367551 13.029 0.00789321 13.2297 0.15344L13.6392 0.450197L14.0486 0.15344C14.2494 0.00785415 14.5008 -0.036638 14.7381 0.0308619C15.1623 0.151799 15.4091 0.595275 15.2882 1.01957C15.2545 1.13586 15.1043 1.35289 14.878 1.62609C15.3185 1.79635 15.7195 2.05498 16.0563 2.38605C16.6943 3.01265 17.0909 3.88425 17.0909 4.84698V4.98976L18.3271 5.8139L17.0909 6.63804V9.06971C17.0909 12.3808 14.7265 15.1499 11.5975 15.7779C12.1745 15.1323 12.5715 14.3226 12.7085 13.4284C12.7669 13.0475 12.4489 12.7333 12.0636 12.7333C11.6783 12.7333 11.3738 13.0495 11.29 13.4256C10.9731 14.8463 9.70244 15.9116 8.18764 15.9116H7.86205V15.9073C5.68596 15.8186 3.91518 14.13 3.69827 11.9888C3.30335 11.9292 3.01124 11.8429 2.79945 11.7249C1.74179 11.1361 1.36039 9.79655 1.94929 8.73893ZM13.676 6.04644C14.0613 6.04644 14.3737 5.73405 14.3737 5.34878C14.3737 4.96351 14.0613 4.65109 13.676 4.65109C13.2907 4.65109 12.9783 4.96347 12.9783 5.34878C12.9783 5.73409 13.2907 6.04644 13.676 6.04644ZM7.86201 18.6047V17.307H8.1876C8.54793 17.307 8.90701 17.2645 9.25736 17.1803V18.6046H10.1876V16.8458C10.7156 16.5877 11.1893 16.2307 11.5829 15.7942V18.6047H13.2108V20H7.16432V18.6047H7.86201Z" fill="currentColor"/></svg>'
        }, {
            name: "wb-client-zebra",
            theme: "fill",
            icon: '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_1878_10747)"><path d="M4.72656 6.91406H4.88832V11.25C4.88832 11.5736 5.15066 11.8359 5.47426 11.8359C5.79785 11.8359 6.06019 11.5736 6.06019 11.25V6.91406H7.15394V11.25C7.15394 11.5736 7.41629 11.8359 7.73988 11.8359C8.06348 11.8359 8.32582 11.5736 8.32582 11.25V6.91406H9.45863V11.25C9.45863 11.5736 9.72098 11.8359 10.0446 11.8359C10.3682 11.8359 10.6305 11.5736 10.6305 11.25V6.91406L10.9091 6.51664L11.9446 8.42215C12.0509 8.61762 12.2522 8.72844 12.46 8.72844C12.8992 8.72844 13.1878 8.25539 12.9743 7.86262L11.6604 5.44488L12.4589 4.30582L13.5071 6.23465C13.6134 6.43012 13.8147 6.54094 14.0225 6.54094C14.4555 6.54094 14.7522 6.07867 14.5371 5.65723L13.2159 3.22602L13.4846 1.46617C13.5074 1.32936 13.5779 1.20507 13.6838 1.11541C13.7896 1.02576 13.9238 0.976555 14.0625 0.976563C14.5588 0.976563 16.2259 1.16664 16.5425 3.16527L18.0461 4.24164L17.0323 5.58445C16.7389 5.9732 17.0225 6.52348 17.4995 6.52348C17.5903 6.52361 17.6798 6.50263 17.761 6.46221C17.8423 6.42178 17.913 6.36301 17.9676 6.29055L18.9993 4.92402L19.8033 5.49957C19.8652 5.55454 19.9147 5.62199 19.9486 5.69747C19.9825 5.77295 20 5.85476 20 5.9375V6.27992C20 7.29438 19.1809 8.12414 18.1664 8.125C17.6417 8.12547 17.1552 7.97352 16.8693 7.86219C16.6225 7.95156 16.2202 8.06711 15.707 8.10895C15.4628 8.74098 14.9609 10.897 14.9609 13.125V18.4375C14.9609 18.7611 14.6986 19.0234 14.375 19.0234H12.4609C12.1373 19.0234 11.875 18.7611 11.875 18.4375V15.1129L11.4693 14.0985C10.8796 14.1947 9.95836 14.3359 8.87813 14.3359C7.75711 14.3359 6.41168 14.1838 5.76121 14.0887L5.35156 15.1129V18.4375C5.35156 18.7611 5.08922 19.0234 4.76562 19.0234H2.8125C2.48891 19.0234 2.22656 18.7611 2.22656 18.4375V9.41406C2.22656 8.03332 3.34586 6.91406 4.72656 6.91406ZM16.0156 5.3127C16.3392 5.3127 16.6016 5.05035 16.6016 4.72676C16.6016 4.40316 16.3392 4.14082 16.0156 4.14082C15.692 4.14082 15.4297 4.40316 15.4297 4.72676C15.4297 5.05035 15.692 5.3127 16.0156 5.3127ZM1.80383 7.19414C1.33406 7.81113 1.05469 8.58051 1.05469 9.41406V13.2641C0.876915 13.3524 0.716602 13.3984 0.585938 13.3984C0.262344 13.3984 0 13.1361 0 12.8125V10C0 8.75574 0.740625 7.68187 1.80383 7.19414Z" fill="currentColor"/></g><defs><clipPath id="clip0_1878_10747"><rect width="20" height="20" fill="currentColor"/></clipPath></defs></svg>'
        }, {
            name: "wb-phone-v2",
            theme: "outline",
            icon: '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.04671 10.9533C8.07171 9.97831 7.33671 8.88664 6.84837 7.77914C6.74504 7.54497 6.80587 7.27081 6.98671 7.08997L7.66921 6.40831C8.22837 5.84914 8.22837 5.05831 7.74004 4.56997L6.76171 3.59164C6.11087 2.94081 5.05587 2.94081 4.40504 3.59164L3.86171 4.13497C3.24421 4.75247 2.98671 5.64331 3.15337 6.52664C3.56504 8.70414 4.83004 11.0883 6.87087 13.1291C8.91171 15.17 11.2959 16.435 13.4734 16.8466C14.3567 17.0133 15.2475 16.7558 15.865 16.1383L16.4075 15.5958C17.0584 14.945 17.0584 13.89 16.4075 13.2391L15.43 12.2616C14.9417 11.7733 14.15 11.7733 13.6625 12.2616L12.91 13.015C12.7292 13.1958 12.455 13.2566 12.2209 13.1533C11.1134 12.6641 10.0217 11.9283 9.04671 10.9533Z" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/></svg>'
        }, {
            name: "wb-hangers-close",
            theme: "outline",
            icon: '<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="32" height="32" fill="transparent"/><path fill-rule="evenodd" clip-rule="evenodd" d="M12.25 11C12.25 9.48079 13.4808 8.25 15 8.25C16.5192 8.25 17.75 9.48079 17.75 11C17.75 12.1942 16.9717 12.8239 16.4302 13.1889L16.4293 13.1895C15.9717 13.497 15.75 13.7443 15.75 14.167V14.958C15.75 15.3722 15.4142 15.708 15 15.708C14.5858 15.708 14.25 15.3722 14.25 14.958V14.167C14.25 12.956 15.0379 12.3174 15.5922 11.9448C16.0384 11.6439 16.25 11.4057 16.25 11C16.25 10.3092 15.6908 9.75 15 9.75C14.3092 9.75 13.75 10.3092 13.75 11C13.75 11.4142 13.4142 11.75 13 11.75C12.5858 11.75 12.25 11.4142 12.25 11Z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M11.5999 14.7604C13.8068 14.0252 16.1922 14.0252 18.3991 14.7604L22.6467 16.1763C22.6469 16.1764 22.6466 16.1763 22.6467 16.1763C23.9032 16.5945 24.75 17.7694 24.75 19.093C24.75 20.7908 23.3746 22.168 21.676 22.168L8.269 22.171C6.60179 22.171 5.25 20.8192 5.25 19.152V19.103C5.25 17.7713 6.09453 16.5952 7.35183 16.1765C7.3519 16.1764 7.35175 16.1765 7.35183 16.1765L11.5999 14.7604ZM12.0741 16.1835C12.074 16.1835 12.0741 16.1835 12.0741 16.1835L7.82617 17.5995C7.18559 17.8128 6.75 18.4127 6.75 19.103V19.152C6.75 19.9908 7.43021 20.671 8.269 20.671L21.676 20.668C22.5454 20.668 23.25 19.9632 23.25 19.093C23.25 18.4148 22.8166 17.8136 22.1733 17.5996L17.9249 16.1835C17.9249 16.1835 17.925 16.1835 17.9249 16.1835C16.0259 15.5508 13.9731 15.5508 12.0741 16.1835Z" fill="currentColor"/><rect x="17.5" y="13.5" width="11" height="11" rx="5.5" fill="currentColor"/><rect x="17.5" y="13.5" width="11" height="11" rx="5.5" stroke="white"/><path d="M21.5 17.5L24.5 20.5" stroke="white" stroke-linecap="round" stroke-linejoin="round"/><path d="M24.5 17.5L21.5 20.5" stroke="white" stroke-linecap="round" stroke-linejoin="round"/></svg>'
        }, {
            name: "wb-delivery",
            theme: "fill",
            icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">\n  <path d="M7.7067 22.3415C9.81343 23.4471 10.8668 23.9999 11.9999 23.9999V11.9999L0.765613 6.08712C0.749076 6.1137 0.732831 6.14054 0.716871 6.16764C0 7.38504 0 8.89994 0 11.9297V12.0701C0 15.0999 0 16.6148 0.716871 17.8322C1.43374 19.0496 2.72473 19.7271 5.30671 21.082L7.7067 22.3415Z" fill="#965EEB"/>\n  <path opacity="0.7" d="M18.6931 2.91781L16.2931 1.65835C14.1864 0.552784 13.133 0 11.9999 0C10.8668 0 9.81344 0.552783 7.70671 1.65835L5.30673 2.9178C2.78223 4.2426 1.49188 4.91975 0.765625 6.08713L11.9999 11.9999L23.2342 6.08713C22.508 4.91975 21.2176 4.2426 18.6931 2.91781Z" fill="#965EEB"/>\n  <path opacity="0.5" d="M23.283 6.16779C23.2671 6.14068 23.2508 6.11385 23.2343 6.08727L12 12.0001V24C13.1331 24 14.1865 23.4472 16.2932 22.3416L18.6932 21.0822C21.2752 19.7272 22.5662 19.0497 23.283 17.8323C23.9999 16.6149 23.9999 15.1 23.9999 12.0703V11.9299C23.9999 8.90008 23.9999 7.38519 23.283 6.16779Z" fill="#965EEB"/>\n</svg>'
        }, {
            name: "wb-courier",
            theme: "fill",
            icon: '<svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">\n<g clip-path="url(#clip0_638_39431)">\n<path d="M52 26C52 11.6406 40.3594 0 26 0C11.6406 0 0 11.6406 0 26C0 40.3594 11.6406 52 26 52C40.3594 52 52 40.3594 52 26Z" fill="#965EEB"/>\n<mask id="mask0_638_39431" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="6" y="9" width="40" height="34">\n<path d="M46 9.5H6V42.5H46V9.5Z" fill="white"/>\n</mask>\n<g mask="url(#mask0_638_39431)">\n<path d="M45.9999 9.5H-0.315918V42.5H45.9999V9.5Z" fill="white"/>\n<path d="M-0.315918 26V9.5H22.842H45.9999V26V42.5H22.842H-0.315918V26ZM31.1872 41.1212C31.5806 41.0243 32.2512 40.8608 32.6774 40.758C34.7423 40.26 34.6947 40.2784 34.7857 39.9459C34.9946 39.1831 34.2016 38.5778 32.588 38.2685L31.9025 38.1371L31.8913 37.0877C31.8746 35.5149 31.5971 34.2988 30.9526 32.9727C30.0707 31.1584 28.5757 29.5387 26.8506 28.5287C26.5616 28.3595 26.5073 28.2379 26.6269 28.0279C26.8473 27.6407 28.1173 24.9126 28.1173 24.8265C28.1173 24.7678 28.0206 24.575 27.9024 24.3981C27.6341 23.9967 27.4281 23.5898 27.2455 23.1005C27.1677 22.8919 27.104 22.7092 27.104 22.6945C27.104 22.5898 27.3437 22.8233 27.8256 23.3973C29.4162 25.2919 30.9064 26.0902 32.8529 26.0902C34.1505 26.0902 35.6543 25.7232 37.0447 25.0672C37.5654 24.8215 38.3391 24.3674 38.9394 23.9551C39.1925 23.7812 39.4148 23.6845 39.6845 23.6308C40.6066 23.4474 41.1089 23.1102 41.2647 22.5698C41.3164 22.3905 41.3419 22.1906 41.3214 22.1256C41.2772 21.9849 41.3819 21.7623 41.4924 21.7623C41.6161 21.7623 41.9987 21.3555 42.0962 21.1203C42.1977 20.8752 42.2101 20.404 42.129 19.8738C42.0983 19.6727 42.0293 19.1566 41.9757 18.7268C41.9221 18.297 41.8512 17.7695 41.818 17.5546C41.7849 17.3398 41.735 16.9611 41.7071 16.7131C41.4761 14.6557 41.3971 14.3432 41.0327 14.0461C40.6334 13.7206 40.4731 13.6929 39.5886 13.7961C39.1643 13.8456 38.6293 13.9129 38.3998 13.9456C38.1703 13.9784 37.6606 14.0472 37.2672 14.0985C36.8738 14.1498 36.3776 14.2178 36.1645 14.2497C35.9514 14.2816 35.5624 14.3343 35.3001 14.3669C35.0379 14.3994 34.4343 14.4789 33.959 14.5434C33.4836 14.6079 32.9552 14.6795 32.7848 14.7024C32.3694 14.7584 31.9527 15.0401 31.7666 15.3907C31.6339 15.6407 31.6258 15.7045 31.6604 16.2322C31.681 16.5463 31.7362 17.0738 31.7831 17.4044C31.83 17.735 31.9081 18.303 31.9567 18.6667C32.4214 22.1487 32.3982 22.0102 32.5578 22.2533C32.7936 22.6128 33.0865 22.8011 33.4577 22.8322C33.6362 22.8471 33.7972 22.8836 33.8154 22.9133C33.8667 22.997 33.3788 23.1852 32.9092 23.263C32.3136 23.3616 31.6286 23.2612 31.072 22.9937C30.6253 22.7789 29.8166 22.0907 29.7247 21.8471C29.6892 21.753 29.7093 21.607 29.7894 21.3773C29.9628 20.8797 29.9501 20.1639 29.7612 19.7879C29.6098 19.4867 29.2544 19.1233 28.9703 18.9793C28.6188 18.8011 27.9823 18.6977 26.6867 18.6082C24.1619 18.4338 22.8593 18.3955 21.5995 18.4587C20.0395 18.5369 19.3096 18.6496 17.949 19.0225C17.0608 19.2659 15.9986 19.812 15.2572 20.4063C13.4251 21.875 12.3954 24.7751 13.015 26.7213C13.4423 28.0636 15.1058 29.1267 16.3591 28.8585C17.0455 28.7116 17.3874 28.2638 17.4357 27.4484C17.459 27.0539 17.4942 26.9238 17.6431 26.6823C17.8998 26.266 17.9255 25.8863 17.7252 25.4734C17.5834 25.1811 17.0561 24.5942 16.6576 24.2851C16.4467 24.1215 16.4511 23.9935 16.6829 23.555C17.0238 22.91 17.7726 22.2732 18.6992 21.8403C19.3478 21.5373 20.0676 21.3344 21.2962 21.1084C21.8623 21.0043 21.9178 20.9806 22.2767 20.6889C22.8588 20.2159 22.8936 20.2742 22.4639 21.0026C22.3052 21.2717 21.9517 21.884 21.6785 22.3634C21.4052 22.8428 21.0155 23.519 20.8125 23.8661C20.6095 24.2133 20.3698 24.6325 20.28 24.7978C20.1901 24.9631 19.9558 25.3762 19.7593 25.7158C19.4738 26.2092 19.4161 26.3503 19.4722 26.4185C19.5108 26.4654 19.7282 26.5754 19.9553 26.6629C20.2202 26.765 20.3682 26.8553 20.3682 26.915C20.3682 27.0458 19.6158 28.4947 19.2669 29.0355C18.3447 30.4655 17.5371 31.3183 16.7266 31.7183C15.9655 32.0938 15.4657 32.224 14.7759 32.2265C13.8587 32.2297 13.2691 31.9361 12.8937 31.2889C12.5847 30.7563 12.497 30.6883 12.2185 30.7656C11.6268 30.9299 10.4285 31.4298 9.93674 31.7173C9.02911 32.2481 8.5282 33.058 8.93951 33.3298C9.12641 33.4533 10.2185 33.6109 10.8309 33.6027C11.1095 33.5989 11.3822 33.5977 11.4368 33.5999C11.4914 33.602 11.6382 33.7458 11.763 33.9194C12.6985 35.2197 13.8441 35.8804 15.4942 36.0716C16.422 36.179 17.6125 36.046 18.9674 35.6835C19.3448 35.5825 19.3804 35.5703 20.0404 35.3148C21.4547 34.7674 22.63 33.9776 23.6692 32.8762C24.0091 32.516 24.304 32.2213 24.3246 32.2213C24.4179 32.2213 24.338 32.454 24.0335 33.0695C23.8528 33.4346 23.7221 33.7613 23.7431 33.7955C23.764 33.8297 23.932 33.924 24.1163 34.0051C26.2345 34.937 27.9432 36.3802 29.0521 38.174C29.5531 38.9843 29.9446 39.9419 30.144 40.8446C30.2135 41.1591 30.2934 41.2979 30.4046 41.2976C30.4416 41.2975 30.7937 41.2181 31.1872 41.1212ZM27.7938 17.9633C28.1852 17.772 28.641 17.3661 28.9153 16.9647C29.1149 16.6727 29.3691 15.9352 29.3691 15.6483C29.3691 15.4728 29.3509 15.4509 29.2052 15.4515C29.115 15.4519 28.8937 15.4922 28.7134 15.541C28.3508 15.6391 27.7011 15.6645 27.7925 15.5769C27.8236 15.5471 28.2612 15.3835 28.7648 15.2135C29.8544 14.8458 30.72 14.4492 31.0768 14.1544C31.3344 13.9415 31.4045 13.7573 31.2617 13.6683C31.096 13.5651 30.4644 13.5415 29.9196 13.6182C29.6084 13.6621 29.3232 13.6861 29.286 13.6717C29.2488 13.6573 29.1541 13.4634 29.0757 13.2408C28.6157 11.9353 27.9196 11.5644 26.6867 11.968C25.5959 12.3251 24.6624 12.8006 24.2474 13.2105C23.6116 13.8385 23.6048 14.4024 24.2185 15.6092C24.3958 15.9579 24.5408 16.2812 24.5408 16.3277C24.5408 16.3742 24.6262 16.5949 24.7305 16.8181C25.0553 17.5132 25.7241 18.0545 26.3887 18.1602C26.8501 18.2336 27.3979 18.1568 27.7938 17.9633Z" fill="#965EEB"/>\n</g>\n</g>\n<defs>\n<clipPath id="clip0_638_39431">\n<rect width="52" height="52" fill="white"/>\n</clipPath>\n</defs>\n</svg>\n'
        }, {
            name: "wb-rectangle-arrow",
            theme: "outline",
            icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">\n  <path d="M6.73682 17.7086C7.27241 17.7086 7.62671 17.3461 7.62671 16.8352C7.62671 16.5716 7.51959 16.3738 7.36303 16.2089L5.23718 14.1408L3.78699 12.9213L5.69861 13.0037H15.99C18.05 13.0037 18.9234 12.0726 18.9234 10.0539V5.16772C18.9234 3.10779 18.05 2.23438 15.99 2.23438H11.417C10.8814 2.23438 10.5024 2.63813 10.5024 3.13251C10.5024 3.6269 10.8732 4.03065 11.417 4.03065H15.9489C16.7893 4.03065 17.1436 4.38495 17.1436 5.21716V9.99622C17.1436 10.8449 16.781 11.1992 15.9489 11.1992H5.69861L3.78699 11.2899L5.23718 10.0621L7.36303 7.99396C7.51959 7.83741 7.62671 7.63965 7.62671 7.36774C7.62671 6.85687 7.27241 6.49432 6.73682 6.49432C6.51434 6.49432 6.26716 6.5932 6.08588 6.77447L1.35627 11.4299C1.16675 11.6112 1.06787 11.8584 1.06787 12.1056C1.06787 12.3446 1.16675 12.5917 1.35627 12.7731L6.08588 17.4367C6.26716 17.6097 6.51434 17.7086 6.73682 17.7086Z" fill-opacity="0.253"/>\n</svg>'
        }, {
            name: "wb-arrow-link",
            theme: "outline",
            icon: '<svg width="1em" height="1em" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.125 5.875L5.875 14.125" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M8.33333 5.83337L14.125 5.87421L14.1667 11.6667" fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round"/></svg>'
        }]
    },
    "Ek/g": function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return u
        }
        ));
        var o = n("2Vo4")
          , r = n("LRne")
          , i = n("vkgz")
          , c = function(e) {
            return e.RU = "shared.rub",
            e.BY = "shared.bel-rub",
            e.KZ = "shared.tenge",
            e.KG = "shared.som",
            e.PL = "shared.z\u0142oty",
            e.AM = "shared.dram",
            e.SK = "shared.euro",
            e
        }({})
          , s = n("AytR")
          , a = n("fXoL")
          , l = n("tk/3");
        let u = ( () => {
            class e {
                constructor(e) {
                    this.http = e,
                    this.officeSubject$ = new o.a(void 0),
                    this.needsDisableCashBoxSubject$ = new o.a(!1),
                    this.getOffice()
                }
                get nominal() {
                    return this.officeNominal
                }
                get office() {
                    return this.officeSubject$.getValue()
                }
                get office$() {
                    return this.officeSubject$
                }
                get needsDisableCashBox$() {
                    return this.needsDisableCashBoxSubject$
                }
                getOfficeInfo() {
                    return this._officeInfo && this._officeInfo.office_id > 0 ? Object(r.a)(this._officeInfo) : this.http.get(s.a.urls.baseUrl + "/api/office/info").pipe(Object(i.a)(e => {
                        this.setOffice(e),
                        this._officeInfo = e
                    }
                    ))
                }
                getOffices(e) {
                    return this.http.get(`${s.a.urls.baseUrl}/api/office?search=${e}`)
                }
                activate(e) {
                    return this.http.post(`${s.a.urls.baseUrl}/api/activate/${e}`, null).pipe(Object(i.a)(e => {
                        e.error || (this.setOffice(e),
                        this._officeInfo = e)
                    }
                    ))
                }
                getOfficeByShk(e) {
                    return this.http.get(`${s.a.urls.baseUrl}/api/office/by-shk?shk=${e}`).pipe(Object(i.a)(e => {
                        e.error || (s.a.npos && localStorage.setItem("cur_office", JSON.stringify(e)),
                        this.setOffice(e),
                        this._officeInfo = e)
                    }
                    ))
                }
                deactivate() {
                    return this.http.post(s.a.urls.baseUrl + "/api/deactivate", null)
                }
                checkCountriesCompliance(e) {
                    return !!(e && e.length && this.office && this.office.country) && e.includes(this.office.country)
                }
                setOffice(e) {
                    this.officeSubject$.next(e),
                    this.officeNominal = c[null == e ? void 0 : e.country] || c.RU,
                    this.checkDisabledCashBox(e)
                }
                checkDisabledCashBox(e) {
                    this.needsDisableCashBoxSubject$.next("RU" === e.country)
                }
                getDetailsBox(e) {
                    return this.http.get(`${s.a.urls.baseUrl}/api/items/inTransferBox?boxId=${e}`).pipe(e => e)
                }
                getOffice() {
                    if (s.a.npos) {
                        const e = JSON.parse(localStorage.getItem("cur_office") || "{}");
                        e.office_id > 0 && this.setOffice(e)
                    }
                }
                removeOffice() {
                    this.officeSubject$.next(null),
                    this._officeInfo = null
                }
            }
            return e.\u0275fac = function(t) {
                return new (t || e)(a.gc(l.c))
            }
            ,
            e.\u0275prov = a.Sb({
                token: e,
                factory: e.\u0275fac,
                providedIn: "root"
            }),
            e
        }
        )()
    },
    Erp3: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return a
        }
        ));
        var o = n("AytR")
          , r = n("lJxs");
        const i = (e, t, n) => ({
            sum: e.sum,
            householdNeeds: e.household_needs,
            hourCnt: e.hour_cnt,
            bagsCnt: e.bags_cnt,
            bagsSum: e.bags_sum,
            from: e.date_from,
            to: e.date_to,
            period: t,
            currency: n
        });
        var c = n("fXoL")
          , s = n("tk/3");
        let a = ( () => {
            class e {
                constructor(e) {
                    this._http = e
                }
                getSalaryV2(e) {
                    return this._http.get(o.a.urls.baseUrl + "/api/motivation/v2/salary", {
                        params: e
                    }).pipe(Object(r.a)(e => (e => {
                        if (!e)
                            return null;
                        const t = e.details.sort( (e, t) => Date.parse(t.date) - Date.parse(e.date)).map(e => (e => {
                            var t, n, o, r, i;
                            return {
                                date: e.date,
                                hourCnt: e.hour_cnt,
                                sum: e.sum,
                                householdNeeds: e.household_needs,
                                office: {
                                    id: e.office_id,
                                    name: e.office_name
                                },
                                acceptance: {
                                    base: e.shk_put_on_place_cost_sum ? {
                                        count: e.shk_put_on_place_cnt,
                                        rate: e.shk_put_on_place_rate,
                                        sum: e.shk_put_on_place_cost_sum
                                    } : null,
                                    returnToSupplier: e.supplier_on_place_shk_sum ? {
                                        count: e.supplier_on_place_shk_cnt,
                                        rate: e.supplier_on_place_shk_rate,
                                        sum: e.supplier_on_place_shk_sum
                                    } : null,
                                    marketplaceTare: e.suppliers_tare_cost ? {
                                        count: e.suppliers_tare_cnt,
                                        rate: e.suppliers_tare_rate,
                                        sum: e.suppliers_tare_cost
                                    } : null,
                                    marketplace: e.suppliers_shk_acceptance_cost_sum ? {
                                        count: e.suppliers_shk_acceptance_cnt,
                                        rate: e.suppliers_shk_acceptance_rate,
                                        sum: e.suppliers_shk_acceptance_cost_sum
                                    } : null,
                                    costByPriceSum: null !== (t = e.shk_put_on_place_cost_by_price_sum) && void 0 !== t ? t : null
                                },
                                sales: {
                                    base: e.shk_sales_cost_sum ? {
                                        count: e.shk_sales_cnt,
                                        rate: e.shk_sales_rate,
                                        sum: e.shk_sales_cost_sum
                                    } : null,
                                    costByPriceSum: null !== (n = e.shk_sales_cost_by_price_sum) && void 0 !== n ? n : null
                                },
                                returns: {
                                    base: e.shk_put_in_box_cost_sum ? {
                                        count: e.shk_put_in_box_cnt,
                                        rate: e.shk_put_in_box_rate,
                                        sum: e.shk_put_in_box_cost_sum
                                    } : null,
                                    issueToSupplier: e.supplier_sale_shk_sum ? {
                                        count: e.supplier_sale_shk_cnt,
                                        rate: e.supplier_sale_shk_rate,
                                        sum: e.supplier_sale_shk_sum
                                    } : null,
                                    costByPriceSum: null !== (o = e.shk_put_in_box_cost_by_price_sum) && void 0 !== o ? o : null
                                },
                                couriers: {
                                    assembling: e.courier_fast_assembling_cost_sum ? {
                                        count: e.courier_fast_assembling_cnt,
                                        rate: e.courier_fast_assembling_rate,
                                        sum: e.courier_fast_assembling_cost_sum
                                    } : null,
                                    giving: e.courier_fast_assembling_giving_cost_sum ? {
                                        count: e.courier_fast_assembling_giving_cnt,
                                        rate: e.courier_fast_assembling_giving_rate,
                                        sum: e.courier_fast_assembling_giving_cost_sum
                                    } : null
                                },
                                extraPay: {
                                    rating: null !== (r = e.extra_pay_for_rating) && void 0 !== r ? r : null,
                                    speed: null !== (i = e.extra_pay_for_speed) && void 0 !== i ? i : null
                                },
                                avgLayoutHours: {
                                    employee: e.avg_layout_hours_by_employee ? 60 * e.avg_layout_hours_by_employee * 1e3 : null,
                                    region: e.avg_layout_hours_by_region ? 60 * e.avg_layout_hours_by_region * 1e3 : null
                                },
                                bags: e.bags ? {
                                    totalCnt: e.bags.total_cnt,
                                    totalAmount: e.bags.total_amount,
                                    details: e.bags.details
                                } : null
                            }
                        }
                        )(e));
                        return {
                            values: {
                                currentDay: e.curr_day ? i(e.curr_day, "currentDay", e.currency_name) : null,
                                currentWeek: e.curr_week ? i(e.curr_week, "currentWeek", e.currency_name) : null,
                                currentMonth: e.curr_month ? i(e.curr_month, "currentMonth", e.currency_name) : null,
                                previousMonth: e.prev_month ? i(e.prev_month, "previousMonth", e.currency_name) : null
                            },
                            details: t,
                            currency: e.currency_name
                        }
                    }
                    )(e)))
                }
            }
            return e.\u0275fac = function(t) {
                return new (t || e)(c.gc(s.c))
            }
            ,
            e.\u0275prov = c.Sb({
                token: e,
                factory: e.\u0275fac
            }),
            e
        }
        )()
    },
    F6HI: function(e, t) {
        Date.prototype.addSeconds = function(e) {
            const t = new Date(this.valueOf());
            return t.setTime(t.getTime() + 1e3 * e),
            t
        }
        ,
        Date.prototype.addHours = function(e) {
            const t = new Date(this.valueOf());
            return t.setTime(t.getTime() + 60 * e * 60 * 1e3),
            t
        }
        ,
        Date.prototype.addDays = function(e) {
            const t = new Date(this.valueOf());
            return t.setDate(t.getDate() + e),
            t
        }
    },
    GHcM: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return a
        }
        ));
        var o = n("ofXK")
          , r = n("PTRe")
          , i = n("FwiY")
          , c = n("3Pt+")
          , s = n("fXoL");
        let a = ( () => {
            class e {
            }
            return e.\u0275mod = s.Ub({
                type: e
            }),
            e.\u0275inj = s.Tb({
                factory: function(t) {
                    return new (t || e)
                },
                imports: [[o.c, r.d, c.k, c.u, i.c]]
            }),
            e
        }
        )()
    },
    JAMu: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return f
        }
        ));
        var o = n("AytR")
          , r = n("z6cu")
          , i = n("LRne")
          , c = n("lJxs")
          , s = n("eIep")
          , a = n("MtjB")
          , l = n("vkgz")
          , u = n("GJmQ")
          , d = n("JIr8")
          , h = n("nYR2")
          , p = n("OsF4")
          , C = n("fXoL")
          , g = n("tk/3");
        let f = ( () => {
            class e {
                constructor(e, t) {
                    this._http = e,
                    this._logger = t
                }
                getSaleData(e, t) {
                    return this._http.get(`${o.a.urls.baseUrl}/api/sale/v2/get?userId=${e}&userName=${encodeURIComponent(t)}`).pipe(Object(c.a)(e => e.error ? e : e.map(e => Object.assign(Object.assign({}, e), {
                        shksOnPlace: e.shksOnPlace.map(e => Object.assign(Object.assign({}, e), {
                            items: e.items.map(e => Object.assign(Object.assign({}, e), {
                                isReturn: !1
                            }))
                        }))
                    }))))
                }
                getDressingsByUser(e) {
                    return this._http.get(`${o.a.urls.baseUrl}/api/shk/get-dressings-by-user?userId=${e}`)
                }
                deleteGoodsFromFitting(e, t, n) {
                    return this._http.post(`${o.a.urls.baseUrl}/api/wavebreaker/put?shk=${e}${3 === t ? "&currentCell=PLCE" + n : ""}`, null)
                }
                createSale(e) {
                    return this._http.post(o.a.urls.baseUrl + "/api/sale/v3/create", e)
                }
                createSaleV4(e) {
                    let t = 0;
                    return this._http.post(o.a.urls.baseUrl + "/api/sale/v4/create", e).pipe(Object(s.a)(e => {
                        var t;
                        return (null === (t = e.errorMsg) || void 0 === t ? void 0 : t.includes("pending")) ? Object(r.a)(e) : Object(i.a)(e)
                    }
                    ), Object(a.a)(e => e.pipe(Object(l.a)( () => {
                        t++
                    }
                    ), Object(u.a)( () => {
                        if (t > 10)
                            throw new Error("something went wrong");
                        return t <= 10
                    }
                    ))), Object(d.a)(e => Object(i.a)(e)), Object(h.a)( () => {
                        t > 1 && this._logger.addLog({
                            type: "many-attempts-for-sale",
                            msg: "\u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043f\u043e\u043f\u044b\u0442\u043e\u043a - " + t,
                            title: e.userId
                        })
                    }
                    ))
                }
                checkIsValidConfirmationCode(e) {
                    return this._http.get(`${o.a.urls.baseUrl}/api/sale/validate-code?userId=${e.userId}&code=${e.code}`)
                }
            }
            return e.\u0275fac = function(t) {
                return new (t || e)(C.gc(g.c),C.gc(p.a))
            }
            ,
            e.\u0275prov = C.Sb({
                token: e,
                factory: e.\u0275fac,
                providedIn: "root"
            }),
            e
        }
        )()
    },
    JN1X: function(e, t) {},
    "LV/p": function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return o
        }
        ));
        var o = function(e) {
            return e[e.notification = 0] = "notification",
            e[e.instruction = 1] = "instruction",
            e
        }({})
    },
    "LW3/": function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return r
        }
        ));
        var o = n("fXoL");
        let r = ( () => {
            class e {
                constructor() {
                    this.altNumpadBuffer = "",
                    this.numpadCodeRe = /^Numpad\d{1}$/
                }
                collectShkString(e) {
                    if ("string" != typeof e) {
                        if ("Alt" === e.key)
                            return this.preventAndReturn(e);
                        if (e.altKey && this.numpadCodeRe.test(e.code))
                            return this.altNumpadBuffer += e.key,
                            this.preventAndReturn(e)
                    } else
                        this.altNumpadBuffer = e;
                    if ("" !== this.altNumpadBuffer) {
                        const e = parseInt(this.altNumpadBuffer, 10);
                        return this.altNumpadBuffer = "",
                        e ? String.fromCharCode(e) : ""
                    }
                    return ""
                }
                preventAndReturn(e) {
                    return e.stopPropagation(),
                    e.preventDefault(),
                    ""
                }
            }
            return e.\u0275fac = function(t) {
                return new (t || e)
            }
            ,
            e.\u0275prov = o.Sb({
                token: e,
                factory: e.\u0275fac
            }),
            e
        }
        )()
    },
    "NT/Q": function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return o
        }
        ));
        var o = function(e) {
            return e[e.new = 0] = "new",
            e[e.acceptance = 1] = "acceptance",
            e[e.booked = 3] = "booked",
            e[e.inWork = 4] = "inWork",
            e[e.closed = 5] = "closed",
            e[e.inProcess = 10] = "inProcess",
            e[e.done = 20] = "done",
            e[e.transmitted = 30] = "transmitted",
            e[e.delivered = 35] = "delivered",
            e[e.needToReturn = 36] = "needToReturn",
            e
        }({})
    },
    OsF4: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return d
        }
        ));
        var o = n("AytR")
          , r = n("sWYD")
          , i = n("kiQV")
          , c = n("Vurf")
          , s = n("3G0t")
          , a = n("Ek/g")
          , l = n("fXoL")
          , u = n("tk/3");
        let d = ( () => {
            class e {
                constructor(e, t, n, o) {
                    this.http = e,
                    this.officeService = t,
                    this.localStorageService = n,
                    this.authService = o,
                    this._sendLogs(),
                    this.startTimer()
                }
                startTimer() {
                    setInterval( () => {
                        this._sendLogs()
                    }
                    , 6e5)
                }
                addLog(e) {
                    var t, n, c, s, a;
                    const l = (new Date).getTime()
                      , u = null !== (n = null === (t = this.officeService.office) || void 0 === t ? void 0 : t.office_id) && void 0 !== n ? n : null
                      , d = null !== (s = null === (c = this.authService.user) || void 0 === c ? void 0 : c.id) && void 0 !== s ? s : null
                      , h = {
                        action: e.type,
                        title: e.title,
                        msg: e.msg,
                        stack: null !== (a = e.stack) && void 0 !== a ? a : null,
                        officeId: u,
                        employeeId: d,
                        browser: window.navigator.userAgent,
                        pathname: window.location.pathname,
                        applicationName: o.a.npos ? "npos-client" : "offline-client",
                        dt: Object(r.a)(new Date(l), "yyyy-MM-dd'T'HH:mm:ss.SSSxxx"),
                        timestamp: Object(r.a)(new Date(l), "yyyy-MM-dd'T'HH:mm:ss.SSSxxx"),
                        env: o.a.production ? "production" : "development",
                        version: i.version
                    }
                      , p = this.localStorageService.get("logs")
                      , C = p ? [...p, h] : [h];
                    this.localStorageService.set("logs", C)
                }
                _sendLogs() {
                    if (!o.a.production)
                        return;
                    const e = this.localStorageService.get("logs");
                    (null == e ? void 0 : e.length) && this.http.post(o.a.urls.pvzLogs + "/api/pvz-log", e).subscribe({
                        next: () => this.localStorageService.set("logs", [])
                    })
                }
            }
            return e.\u0275fac = function(t) {
                return new (t || e)(l.gc(u.c),l.gc(a.a),l.gc(s.a),l.gc(c.a))
            }
            ,
            e.\u0275prov = l.Sb({
                token: e,
                factory: e.\u0275fac,
                providedIn: "root"
            }),
            e
        }
        )()
    },
    P0IB: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return i
        }
        ));
        var o = n("fXoL");
        const r = [{
            screenWidth: 2560,
            maxLength: 150
        }, {
            screenWidth: 2e3,
            maxLength: 145
        }, {
            screenWidth: 1760,
            maxLength: 135
        }, {
            screenWidth: 1500,
            maxLength: 85
        }, {
            screenWidth: 1335,
            maxLength: 70
        }, {
            screenWidth: 1260,
            maxLength: 60
        }, {
            screenWidth: 0,
            maxLength: 45
        }];
        let i = ( () => {
            class e {
                transform(e, t=r) {
                    const n = window.screen.width
                      , o = t.find(e => e.screenWidth <= n);
                    return e.length < o.maxLength + 3 ? e : e.substring(0, o.maxLength) + "..."
                }
            }
            return e.\u0275fac = function(t) {
                return new (t || e)
            }
            ,
            e.\u0275pipe = o.Vb({
                name: "trimLines",
                type: e,
                pure: !0
            }),
            e
        }
        )()
    },
    PCNd: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return O
        }
        ));
        var o = n("ofXK")
          , r = n("3Pt+")
          , i = n("sYmb")
          , c = n("8UY1")
          , s = n("IvDN")
          , a = n("PTRe")
          , l = n("OzZK")
          , u = n("TaO5")
          , d = n("zAKX")
          , h = n("rMZv")
          , p = n("dEAy")
          , C = n("bE2y")
          , g = n("FwiY")
          , f = n("nJia")
          , b = n("Ff2k")
          , m = n("pKmL")
          , v = n("2GVC")
          , k = n("Zodz")
          , w = n("RwU8")
          , _ = n("fXoL");
        let x = ( () => {
            class e {
            }
            return e.\u0275mod = _.Ub({
                type: e
            }),
            e.\u0275inj = _.Tb({
                factory: function(t) {
                    return new (t || e)
                },
                imports: [[l.c, g.c, w.b, o.c]]
            }),
            e
        }
        )();
        var M = n("PFgF")
          , y = n("hmWi")
          , S = n("rDF6");
        let O = ( () => {
            class e {
            }
            return e.\u0275mod = _.Ub({
                type: e
            }),
            e.\u0275inj = _.Tb({
                factory: function(t) {
                    return new (t || e)
                },
                imports: [[o.c, i.b, s.b, r.u, a.d, l.c, r.k, i.b, u.b, d.c, M.a, h.d, m.a, p.b, C.d, g.c, f.b, b.a, c.c, S.a, y.a, v.a, k.a, x], o.c, M.a, i.b]
            }),
            e
        }
        )()
    },
    PFgF: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return i
        }
        ));
        var o = n("ofXK")
          , r = n("fXoL");
        let i = ( () => {
            class e {
            }
            return e.\u0275mod = r.Ub({
                type: e
            }),
            e.\u0275inj = r.Tb({
                factory: function(t) {
                    return new (t || e)
                },
                imports: [[o.c]]
            }),
            e
        }
        )()
    },
    POlk: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return s
        }
        ));
        var o = n("AytR")
          , r = n("QYs/")
          , i = n("fXoL")
          , c = n("tk/3");
        let s = ( () => {
            class e {
                constructor(e) {
                    this.http = e
                }
                putItem(e, t, n, i) {
                    return this.http.post(`${o.a.urls.baseUrl}/api/wavebreaker/put?shk=${encodeURIComponent(Object(r.a)(e))}&currentCell=${t}&forcePut=${n}&lastBarcode=${encodeURIComponent(i)}`, null)
                }
                getState() {
                    return this.http.get(o.a.urls.baseUrl + "/api/v2/wavebreaker/state")
                }
                getPrintData() {
                    return this.http.get(o.a.urls.baseUrl + "/api/wavebreaker/print-data")
                }
                getFilteredPrintData(e) {
                    return this.http.post(o.a.urls.baseUrl + "/api/wavebreaker/print-data", e)
                }
                getCourierForm() {
                    return this.http.get(o.a.urls.baseUrl + "/api/wavebreaker/print-data-courier").pipe(e => e)
                }
                checkExcise(e, t, n) {
                    const r = `shkId=${e}&excise=${encodeURIComponent(t)}&noExcise=${n}`;
                    return this.http.post(`${o.a.urls.baseUrl}/api/excise/set?${r}`, {}).pipe(e => e)
                }
            }
            return e.\u0275fac = function(t) {
                return new (t || e)(i.gc(c.c))
            }
            ,
            e.\u0275prov = i.Sb({
                token: e,
                factory: e.\u0275fac,
                providedIn: "root"
            }),
            e
        }
        )()
    },
    Q7je: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return c
        }
        ));
        var o = n("AytR")
          , r = n("fXoL")
          , i = n("tk/3");
        let c = ( () => {
            class e {
                constructor(e) {
                    this.http = e
                }
                decode(e) {
                    return this.http.get(`${o.a.urls.baseUrl}/api/shk/decode?shk=${encodeURIComponent(e)}`)
                }
            }
            return e.\u0275fac = function(t) {
                return new (t || e)(r.gc(i.c))
            }
            ,
            e.\u0275prov = r.Sb({
                token: e,
                factory: e.\u0275fac,
                providedIn: "root"
            }),
            e
        }
        )()
    },
    "QYs/": function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return o
        }
        ));
        const o = e => {
            var t, n;
            return 3 == (null === (n = null === (t = null == e ? void 0 : e.split("$")) || void 0 === t ? void 0 : t.filter(e => "" !== e)) || void 0 === n ? void 0 : n.length) - 1 && (e = e.replace(/\$/g, ";")),
            e.replace("\xa3", "#")
        }
    },
    SyKt: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return s
        }
        ));
        var o = n("3G0t")
          , r = n("XNiG")
          , i = n("vkgz")
          , c = n("fXoL");
        let s = ( () => {
            class e {
                constructor(e) {
                    this._ls = e,
                    this.isAudioPlaying = !1,
                    this.queue = [],
                    this.audioPlayer$ = new r.a,
                    this.audioPlayer$.pipe(Object(i.a)(e => {
                        this.queue.push(...e),
                        this.isAudioPlaying || this.playSound()
                    }
                    )).subscribe()
                }
                playSound() {
                    if (0 === this.queue.length)
                        return void (this.isAudioPlaying = !1);
                    const e = this._ls.get("speaker")
                      , t = this.queue.shift()
                      , n = new Audio(`/speech/${e}/${t}`);
                    n.onplay = () => this.isAudioPlaying = !0,
                    n.onended = () => this.playSound(),
                    n.play()
                }
            }
            return e.\u0275fac = function(t) {
                return new (t || e)(c.gc(o.a))
            }
            ,
            e.\u0275prov = c.Sb({
                token: e,
                factory: e.\u0275fac,
                providedIn: "root"
            }),
            e
        }
        )()
    },
    TFtw: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return r
        }
        ));
        var o = n("fXoL");
        let r = ( () => {
            class e {
                constructor() {
                    this.scan = new o.n,
                    this.value = ""
                }
                onWindowKeydown(e) {
                    (null == e ? void 0 : e.key) && !["Escape", "Tab", "CapsLock", "Shift", "Control", "Alt", "Meta"].includes(e.key) && ("Enter" === e.key ? this.emitValue() : this.value += e.key)
                }
                emitValue() {
                    this.scan.emit(this.value),
                    this.value = ""
                }
            }
            return e.\u0275fac = function(t) {
                return new (t || e)
            }
            ,
            e.\u0275cmp = o.Qb({
                type: e,
                selectors: [["app-barcode-scan-listener"]],
                hostBindings: function(e, t) {
                    1 & e && o.kc("keydown", (function(e) {
                        return t.onWindowKeydown(e)
                    }
                    ), !1, o.Hc)
                },
                outputs: {
                    scan: "scan"
                },
                decls: 0,
                vars: 0,
                template: function(e, t) {},
                styles: [""],
                changeDetection: 0
            }),
            e
        }
        )()
    },
    "UD+q": function(e, t, n) {
        "use strict";
        n.d(t, "b", (function() {
            return i
        }
        )),
        n.d(t, "a", (function() {
            return c
        }
        ));
        var o = n("pLZG")
          , r = n("lJxs");
        function i(e) {
            return t => t.pipe(Object(o.a)(e => !!e), Object(r.a)(t => t.map(t => e(t))))
        }
        function c(e) {
            return t => t.pipe(Object(r.a)(t => e(t)))
        }
    },
    Vurf: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return L
        }
        ));
        var o = n("mrSG")
          , r = n("tk/3")
          , i = n("2Vo4")
          , c = n("z6cu")
          , s = n("LRne")
          , a = n("l5mm")
          , l = n("PqYM")
          , u = n("vkgz")
          , d = n("5+tZ")
          , h = n("lJxs")
          , p = n("GJmQ")
          , C = n("tS1D")
          , g = n("MtjB")
          , f = n("coGc")
          , b = n("sL4t")
          , m = n("lI3o")
          , v = n("VfN6")
          , k = n("AytR")
          , w = n("BOF4")
          , _ = n("Ek/g")
          , x = n("fXoL")
          , M = n("tyNb")
          , y = n("sYmb");
        const S = w
          , O = "ssRefreshToken";
        let L = ( () => {
            let e = class {
                constructor(e, t, n, o, r, c, s) {
                    this.activatedRoute = e,
                    this.http = t,
                    this.router = n,
                    this.stateService = o,
                    this.translateService = r,
                    this.injector = c,
                    this.officeService = s,
                    this.userSubject$ = new i.a(void 0),
                    this.singoutAfter = this.minToSec(960),
                    this.warningAfter = this.singoutAfter - this.minToSec(5),
                    this.counter = 0,
                    k.a.production || (window.setAccess = e => {
                        this.userSubject$.next(Object.assign(Object.assign({}, this.user), {
                            accessToken: e
                        }))
                    }
                    )
                }
                get user() {
                    return this.userSubject$.getValue(),
                    this.userSubject$.getValue()
                }
                get user$() {
                    return this.userSubject$.asObservable()
                }
                get hasToken() {
                    const e = localStorage.getItem(O);
                    return e && e.length > 0
                }
                login(e, t) {
                    return k.a.npos ? this.jwtLogin(e, t) : this.cookieLogin(e, t)
                }
                cookieLogin(e, t) {
                    return this.http.post(k.a.urls.baseUrl + "/api/auth/signin", {
                        login: e,
                        password: t
                    }).pipe(Object(u.a)(e => {
                        if (e.error)
                            throw e.error;
                        this.setUser(e)
                    }
                    ), Object(d.a)( () => this.officeService.getOfficeInfo()), Object(d.a)( () => this.redirectIfNeed()))
                }
                jwtLogin(e, t) {
                    return this.getAuthToken(`grant_type=password&username=${encodeURIComponent(e)}&password=${encodeURIComponent(t)}`).pipe(Object(u.a)(e => this.updateTokenInfo(e)), Object(d.a)( () => this.redirectIfNeed()))
                }
                refreshLogin() {
                    const e = localStorage.getItem(O);
                    return e ? this.getAuthToken("grant_type=refresh_token&refresh_token=" + e).pipe(Object(u.a)(e => this.updateTokenInfo(e))) : Object(c.a)("no refresh token present")
                }
                updateTokenInfo(e) {
                    var t;
                    const n = this.getDecodedAccessToken(e.access_token);
                    this.refreshTimer(e.expires_in - 60);
                    const o = {
                        id: n.id,
                        name: n.family_name,
                        accessToken: e.access_token,
                        sub: null !== (t = n.sub) && void 0 !== t ? t : ""
                    };
                    return this.setUser(o),
                    localStorage.setItem(O, e.refresh_token),
                    Object(s.a)({})
                }
                getDecodedAccessToken(e) {
                    try {
                        return S(e)
                    } catch (t) {
                        return null
                    }
                }
                logout(e) {
                    const t = k.a.npos ? this.jwtLogout() : this.cookieLogout();
                    return e || (e = this.router.url),
                    "/login" === e.slice(0, 6) ? t : t.pipe(e && "/" !== e ? Object(d.a)( () => this.router.navigate(["/login"])) : Object(d.a)( () => this.router.navigate(["/", "login"])))
                }
                cookieLogout() {
                    return this.http.post(k.a.urls.baseUrl + "/api/auth/signout", {}).pipe(Object(u.a)( () => {
                        this.officeService.removeOffice(),
                        this.setUser(void 0),
                        this.stateService.destroySubject$.next(!1)
                    }
                    ))
                }
                jwtLogout() {
                    return this.officeService.removeOffice(),
                    this.setUser(void 0),
                    this.stateService.destroySubject$.next(!1),
                    localStorage.removeItem(O),
                    localStorage.removeItem("cur_office"),
                    Object(s.a)({})
                }
                getPassword(e) {
                    return k.a.npos ? this.getPasswordNpos(e) : this.http.get(`${k.a.urls.baseUrl}/api/auth/password?phone=${e}`)
                }
                updateAuth() {
                    return k.a.npos ? this.user$ : this.getEmployeeInfo().pipe(Object(u.a)(e => this.setUser(e)))
                }
                getEmployeeInfo() {
                    return this.http.get(k.a.urls.baseUrl + "/api/employee/info")
                }
                get isAuthorized$() {
                    return this.userSubject$.asObservable().pipe(Object(h.a)(e => void 0 !== e))
                }
                setUser(e) {
                    k.a.npos || this.timer$.pipe(Object(v.b)(this)).subscribe(),
                    this.userSubject$.next(e),
                    this.initStateAfterToken()
                }
                redirectIfNeed() {
                    const e = this.activatedRoute.snapshot.queryParamMap.get("redirectUrl");
                    if (e) {
                        const t = e.split("?")[0];
                        if (!e.split("?")[1])
                            return this.router.navigate([t]);
                        const n = {};
                        return e.split("?")[1].split("&").map(e => {
                            n[e.split("=")[0]] = e.split("=")[1]
                        }
                        ),
                        this.router.navigate([t], {
                            queryParams: n
                        })
                    }
                    return this.router.navigate(["/pvz/schedule"])
                }
                refreshTimer(e) {
                    setTimeout( () => {
                        this.refreshLogin().subscribe()
                    }
                    , 1e3 * e)
                }
                get timer$() {
                    return Object(a.a)(1e3).pipe(Object(p.a)( () => void 0 !== this.user || (this.counter = 0,
                    !1)), Object(h.a)( () => (this.counter > this.warningAfter && this.counter - this.warningAfter == 1 && this.notificationService.warning(this.translateService.instant("idle.warning"), this.translateService.instant("idle.continue")),
                    this.counter > this.singoutAfter && this.counter - this.singoutAfter == 1 ? (this.notificationService.deleteLastWarning(),
                    this.logout()) : (this.counter++,
                    Object(s.a)(this.counter)))), Object(d.a)(e => e))
                }
                get notificationService() {
                    return this.injector.get(m.a)
                }
                minToSec(e) {
                    return 60 * e
                }
                getAuthToken(e) {
                    const t = new r.g({
                        "Content-Type": "application/x-www-form-urlencoded",
                        Authorization: "Basic bnBvczphVjA3c0xlOXVZRDBkWDUz"
                    });
                    return this.http.post(k.a.urls.authServer + "/connect/token", `${e}&scope=${encodeURIComponent("api1 offline_access")}`, {
                        withCredentials: !0,
                        headers: t
                    }).pipe(Object(C.a)(2e3))
                }
                getPasswordNpos(e) {
                    const t = new r.g({
                        Authorization: "Basic bnBvczphVjA3c0xlOXVZRDBkWDUz"
                    });
                    return this.http.get(`${k.a.urls.authServer}/request_code?phone=${e}`, {
                        headers: t
                    })
                }
                initStateAfterToken() {
                    this.userSubject$.pipe(Object(v.b)(this), Object(h.a)(e => {
                        var t;
                        if ((null == e ? void 0 : e.id) && (null === (t = this.officeService.office) || void 0 === t ? void 0 : t.office_id))
                            return e.id;
                        throw void 0
                    }
                    ), Object(g.a)(e => e.pipe(Object(f.a)( () => Object(l.a)(1e4))))).subscribe( () => {
                        this.stateService.destroySubject$.next(!0),
                        this.stateService.initState()
                    }
                    )
                }
            }
            ;
            return e.\u0275fac = function(t) {
                return new (t || e)(x.gc(M.a),x.gc(r.c),x.gc(M.c),x.gc(b.a),x.gc(y.d),x.gc(x.r),x.gc(_.a))
            }
            ,
            e.\u0275prov = x.Sb({
                token: e,
                factory: e.\u0275fac
            }),
            e = Object(o.c)([Object(v.a)()], e),
            e
        }
        )()
    },
    WLoL: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return l
        }
        ));
        var o = n("fXoL")
          , r = n("ofXK")
          , i = n("imib")
          , c = n("FwiY");
        function s(e, t) {
            if (1 & e && (o.cc(0, "article", 12),
            o.cc(1, "span", 13),
            o.Sc(2, "\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435:\xa0"),
            o.bc(),
            o.cc(3, "span", 9),
            o.Sc(4),
            o.bc(),
            o.bc()),
            2 & e) {
                const e = o.oc(2);
                o.Gb(4),
                o.Tc(e.product.description)
            }
        }
        function a(e, t) {
            if (1 & e && (o.cc(0, "section", 1),
            o.cc(1, "div", 2),
            o.Xb(2, "app-img-carousel", 3),
            o.bc(),
            o.cc(3, "section", 1),
            o.cc(4, "article", 4),
            o.Sc(5),
            o.bc(),
            o.cc(6, "a", 5),
            o.Sc(7, "\u041f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u043d\u0430 \u0441\u0430\u0439\u0442\u0435"),
            o.bc(),
            o.cc(8, "div", 6),
            o.cc(9, "article", 7),
            o.Xb(10, "i", 8),
            o.cc(11, "span", 9),
            o.Sc(12),
            o.bc(),
            o.bc(),
            o.cc(13, "article", 7),
            o.Xb(14, "i", 10),
            o.cc(15, "span", 9),
            o.Sc(16),
            o.bc(),
            o.bc(),
            o.cc(17, "article", 7),
            o.Xb(18, "i", 11),
            o.cc(19, "span", 9),
            o.Sc(20),
            o.bc(),
            o.bc(),
            o.bc(),
            o.cc(21, "article", 12),
            o.cc(22, "span", 13),
            o.Sc(23, "\u0410\u0440\u0442\u0438\u043a\u0443\u043b:\xa0"),
            o.bc(),
            o.cc(24, "span", 9),
            o.Sc(25),
            o.bc(),
            o.bc(),
            o.cc(26, "article", 12),
            o.cc(27, "span", 13),
            o.Sc(28, "\u0411\u0440\u0435\u043d\u0434:\xa0"),
            o.bc(),
            o.cc(29, "span", 9),
            o.Sc(30),
            o.bc(),
            o.bc(),
            o.cc(31, "article", 12),
            o.cc(32, "span", 13),
            o.Sc(33, "\u041a\u043e\u043c\u043f\u043b\u0435\u043a\u0442:\xa0"),
            o.bc(),
            o.cc(34, "span", 9),
            o.Sc(35),
            o.bc(),
            o.bc(),
            o.cc(36, "article", 12),
            o.cc(37, "span", 13),
            o.Sc(38, "\u0426\u0432\u0435\u0442:\xa0"),
            o.bc(),
            o.cc(39, "span", 9),
            o.Sc(40),
            o.bc(),
            o.bc(),
            o.cc(41, "article", 12),
            o.cc(42, "span", 13),
            o.Sc(43, "\u0426\u0435\u043d\u0430:\xa0"),
            o.bc(),
            o.cc(44, "span", 9),
            o.Sc(45),
            o.bc(),
            o.bc(),
            o.cc(46, "article", 12),
            o.cc(47, "span", 13),
            o.Sc(48, "\u0420\u0430\u0437\u043c\u0435\u0440:\xa0"),
            o.bc(),
            o.cc(49, "span", 9),
            o.Sc(50),
            o.bc(),
            o.bc(),
            o.Qc(51, s, 5, 1, "article", 14),
            o.bc(),
            o.bc()),
            2 & e) {
                const e = o.oc();
                o.Gb(2),
                o.wc("images", e.product.imgUrls),
                o.Gb(3),
                o.Tc(e.product.name),
                o.Gb(1),
                o.wc("href", e.product.siteUrl, o.Lc),
                o.Gb(6),
                o.Tc(e.product.shkId || "-"),
                o.Gb(4),
                o.Tc(e.stickerId ? e.stickerId : "-"),
                o.Gb(4),
                o.Tc(e.product.barcode || "-"),
                o.Gb(5),
                o.Tc(e.product.article || "-"),
                o.Gb(5),
                o.Tc(e.product.brandName || "-"),
                o.Gb(5),
                o.Tc(e.product.contents || "-"),
                o.Gb(5),
                o.Tc(e.product.colors || "-"),
                o.Gb(5),
                o.Tc(e.product.price || "-"),
                o.Gb(5),
                o.Tc("0" !== e.product.size ? e.product.size : "-"),
                o.Gb(1),
                o.wc("ngIf", e.product.description)
            }
        }
        let l = ( () => {
            class e {
                constructor() {}
                ngOnInit() {}
                ngOnChanges(e) {
                    const t = e.product;
                    t && t.currentValue && (this.product = t.currentValue)
                }
                get stickerId() {
                    return "wbStickerId"in this.product ? this.product.wbStickerId : this.product.stickerId
                }
            }
            return e.\u0275fac = function(t) {
                return new (t || e)
            }
            ,
            e.\u0275cmp = o.Qb({
                type: e,
                selectors: [["app-product-description"]],
                inputs: {
                    product: "product"
                },
                features: [o.Eb],
                decls: 1,
                vars: 1,
                consts: [["class", "flex", 4, "ngIf"], [1, "flex"], [1, "images"], [3, "images"], [1, "info-title", "fs16-lh24"], ["target", "_blank", 1, "info-button", "fs16-lh24", 3, "href"], [1, "fl-wr", "info_cods"], [1, "info_item", "m8", "flex-al-c"], ["nz-icon", "", "nzType", "scan-shk", "nzTheme", "outline", 1, "transparent-icon"], [1, "description", "fs14-lh20"], ["nz-icon", "", "nzType", "scan-strk", "nzTheme", "outline", 1, "transparent-icon"], ["nz-icon", "", "nzType", "scan-code", "nzTheme", "outline", 1, "transparent-icon"], [1, "info_item"], [1, "title", "fs14-lh20"], ["class", "info_item", 4, "ngIf"]],
                template: function(e, t) {
                    1 & e && o.Qc(0, a, 52, 13, "section", 0),
                    2 & e && o.wc("ngIf", t.product)
                },
                directives: [r.o, i.a, c.b],
                styles: ["[_nghost-%COMP%]{text-align:left}.images[_ngcontent-%COMP%]{margin-bottom:24px}.info-title[_ngcontent-%COMP%]{font-weight:600;color:#000;margin-bottom:12px}.info-button[_ngcontent-%COMP%]{display:block;background:#fff;border:1px solid #d9d9d9;box-sizing:border-box;border-radius:4px;outline:none;text-align:center;padding:8px;height:100%;width:100%;font-weight:600;color:#418ff7}.info_cods[_ngcontent-%COMP%]{margin:12px -8px}.info_item[_ngcontent-%COMP%]{min-width:100px;margin-bottom:12px}.info_item[_ngcontent-%COMP%] > i[_ngcontent-%COMP%]{font-size:24px;color:#999;margin-right:8px}.info_item[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{color:#333;font-weight:600}.info_item[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]{color:#333}"]
            }),
            e
        }
        )()
    },
    WMuC: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return s
        }
        ));
        var o = n("lJxs")
          , r = n("AytR")
          , i = n("fXoL")
          , c = n("tk/3");
        let s = ( () => {
            class e {
                constructor(e) {
                    this._http = e
                }
                getPaycheck(e, t, n) {
                    return this._http.get(`${r.a.urls.baseUrl}/api/motivation/v2/register?from=${e}&to=${t}`).pipe(Object(o.a)(e => e ? e.map(e => {
                        return {
                            date: (t = e).date,
                            docTypeName: t.oper_type_name,
                            operAmount: t.oper_amount,
                            accruedAmount: t.accrued_amount,
                            wbuserId: t.wbuser_id,
                            transferToBalanceAmount: t.transferred_to_site_balance_amount,
                            withheldAmount: t.withheld_amount,
                            comment: t.comment
                        };
                        var t
                    }
                    ) : []))
                }
                getEnforcementOrderInfo() {
                    return this._http.get(r.a.urls.baseUrl + "/api/motivation/enforcement-orders").pipe(Object(o.a)(e => e.has_enforcement_order))
                }
            }
            return e.\u0275fac = function(t) {
                return new (t || e)(i.gc(c.c))
            }
            ,
            e.\u0275prov = i.Sb({
                token: e,
                factory: e.\u0275fac
            }),
            e
        }
        )()
    },
    WXh7: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return c
        }
        ));
        var o = n("ofXK")
          , r = n("FwiY")
          , i = n("fXoL");
        let c = ( () => {
            class e {
            }
            return e.\u0275mod = i.Ub({
                type: e
            }),
            e.\u0275inj = i.Tb({
                factory: function(t) {
                    return new (t || e)
                },
                imports: [[o.c, r.c]]
            }),
            e
        }
        )()
    },
    Xb5J: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return i
        }
        ));
        var o = n("ofXK")
          , r = n("fXoL");
        let i = ( () => {
            class e {
            }
            return e.\u0275mod = r.Ub({
                type: e
            }),
            e.\u0275inj = r.Tb({
                factory: function(t) {
                    return new (t || e)
                },
                imports: [[o.c]]
            }),
            e
        }
        )()
    },
    Zodz: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return i
        }
        ));
        var o = n("ofXK")
          , r = n("fXoL");
        let i = ( () => {
            class e {
            }
            return e.\u0275mod = r.Ub({
                type: e
            }),
            e.\u0275inj = r.Tb({
                factory: function(t) {
                    return new (t || e)
                },
                imports: [[o.c]]
            }),
            e
        }
        )()
    },
    aRhA: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return C
        }
        ));
        var o = function(e) {
            return e[e["\u0421\u043e\u0437\u0434\u0430\u043d\u043e"] = 0] = "\u0421\u043e\u0437\u0434\u0430\u043d\u043e",
            e[e["\u041d\u0430 \u043f\u0440\u0438\u0435\u043c\u043a\u0435 \u043a\u0443\u0440\u044c\u0435\u0440\u043e\u043c"] = 1] = "\u041d\u0430 \u043f\u0440\u0438\u0435\u043c\u043a\u0435 \u043a\u0443\u0440\u044c\u0435\u0440\u043e\u043c",
            e[e["\u0417\u0430\u0431\u0440\u043e\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u043e \u043a\u0443\u0440\u044c\u0435\u0440\u043e\u043c"] = 3] = "\u0417\u0430\u0431\u0440\u043e\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u043e \u043a\u0443\u0440\u044c\u0435\u0440\u043e\u043c",
            e[e["\u0412 \u0440\u0430\u0431\u043e\u0442\u0435"] = 4] = "\u0412 \u0440\u0430\u0431\u043e\u0442\u0435",
            e[e["\u0417\u0430\u043a\u0440\u044b\u0442\u043e"] = 5] = "\u0417\u0430\u043a\u0440\u044b\u0442\u043e",
            e[e["\u041d\u0430 \u0441\u0431\u043e\u0440\u043a\u0435"] = 10] = "\u041d\u0430 \u0441\u0431\u043e\u0440\u043a\u0435",
            e[e["\u0421\u043e\u0431\u0440\u0430\u043d\u043e"] = 20] = "\u0421\u043e\u0431\u0440\u0430\u043d\u043e",
            e[e["\u041f\u0435\u0440\u0435\u0434\u0430\u043d\u043e \u043a\u0443\u0440\u044c\u0435\u0440\u0443"] = 30] = "\u041f\u0435\u0440\u0435\u0434\u0430\u043d\u043e \u043a\u0443\u0440\u044c\u0435\u0440\u0443",
            e[e["\u0414\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u043e"] = 35] = "\u0414\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u043e",
            e[e["\u041f\u0435\u0440\u0435\u043d\u043e\u0441"] = 36] = "\u041f\u0435\u0440\u0435\u043d\u043e\u0441",
            e
        }({})
          , r = n("NT/Q")
          , i = n("fXoL")
          , c = n("ofXK")
          , s = n("FwiY");
        const a = function(e) {
            return {
                "font-size": e
            }
        };
        function l(e, t) {
            if (1 & e && i.Xb(0, "i", 4),
            2 & e) {
                const e = i.oc();
                i.Oc(i.Bc(2, a, e.size + "px"))
            }
        }
        function u(e, t) {
            if (1 & e && i.Xb(0, "i", 5),
            2 & e) {
                const e = i.oc();
                i.Oc(i.Bc(2, a, e.size + "px"))
            }
        }
        function d(e, t) {
            if (1 & e && i.Xb(0, "i", 6),
            2 & e) {
                const e = i.oc();
                i.Oc(i.Bc(2, a, e.size + "px"))
            }
        }
        let h = ( () => {
            class e {
                constructor() {
                    this.size = 16,
                    this.ETaskStatus = r.a
                }
            }
            return e.\u0275fac = function(t) {
                return new (t || e)
            }
            ,
            e.\u0275cmp = i.Qb({
                type: e,
                selectors: [["status-icon"]],
                inputs: {
                    status: "status",
                    size: "size"
                },
                decls: 4,
                vars: 4,
                consts: [[1, "container", 3, "ngSwitch"], ["class", "new", "nz-icon", "", "nzType", "wb-info-circle-filled", "nzTheme", "fill", 3, "style", 4, "ngSwitchCase"], ["class", "inProcess", "nz-icon", "", "nzType", "wb-circle-check", "nzTheme", "fill", 3, "style", 4, "ngSwitchCase"], ["class", "done", "nz-icon", "", "nzType", "wb-double-check-circle-filled", "nzTheme", "fill", 3, "style", 4, "ngSwitchCase"], ["nz-icon", "", "nzType", "wb-info-circle-filled", "nzTheme", "fill", 1, "new"], ["nz-icon", "", "nzType", "wb-circle-check", "nzTheme", "fill", 1, "inProcess"], ["nz-icon", "", "nzType", "wb-double-check-circle-filled", "nzTheme", "fill", 1, "done"]],
                template: function(e, t) {
                    1 & e && (i.cc(0, "div", 0),
                    i.Qc(1, l, 1, 4, "i", 1),
                    i.Qc(2, u, 1, 4, "i", 2),
                    i.Qc(3, d, 1, 4, "i", 3),
                    i.bc()),
                    2 & e && (i.wc("ngSwitch", t.status),
                    i.Gb(1),
                    i.wc("ngSwitchCase", t.ETaskStatus.new),
                    i.Gb(1),
                    i.wc("ngSwitchCase", t.ETaskStatus.inProcess),
                    i.Gb(1),
                    i.wc("ngSwitchCase", t.ETaskStatus.done))
                },
                directives: [c.q, c.r, s.b],
                styles: [".container[_ngcontent-%COMP%]{display:flex;padding:4px;flex-direction:column;justify-content:center;align-items:center;gap:10px}.container[_ngcontent-%COMP%]   .new[_ngcontent-%COMP%]{color:#ffdb4d}.container[_ngcontent-%COMP%]   .inProcess[_ngcontent-%COMP%]{color:#965eeb}.container[_ngcontent-%COMP%]   .done[_ngcontent-%COMP%]{color:#52c41a}"],
                changeDetection: 0
            }),
            e
        }
        )();
        const p = function(e, t) {
            return {
                base: e,
                reverse: t
            }
        };
        let C = ( () => {
            class e {
                constructor() {
                    this.placement = "Base",
                    this.textStyle = {
                        "font-size": "14px"
                    },
                    this.iconSize = 16,
                    this.ETaskStatusRu = o
                }
            }
            return e.\u0275fac = function(t) {
                return new (t || e)
            }
            ,
            e.\u0275cmp = i.Qb({
                type: e,
                selectors: [["delivery-status"]],
                inputs: {
                    status: "status",
                    placement: "placement",
                    textStyle: "textStyle",
                    iconSize: "iconSize"
                },
                decls: 4,
                vars: 9,
                consts: [[1, "container", 3, "ngClass"], [3, "status", "size"]],
                template: function(e, t) {
                    1 & e && (i.cc(0, "div", 0),
                    i.cc(1, "div"),
                    i.Sc(2),
                    i.bc(),
                    i.Xb(3, "status-icon", 1),
                    i.bc()),
                    2 & e && (i.wc("ngClass", i.Cc(6, p, "Base" === t.placement, "Reverse" === t.placement)),
                    i.Gb(1),
                    i.Oc(t.textStyle),
                    i.Gb(1),
                    i.Uc(" ", t.ETaskStatusRu[t.status], " "),
                    i.Gb(1),
                    i.wc("status", t.status)("size", t.iconSize))
                },
                directives: [c.m, h],
                styles: [".container[_ngcontent-%COMP%]{display:flex;align-items:center;gap:2px}.container[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{white-space:nowrap}.base[_ngcontent-%COMP%]{flex-direction:row;justify-content:start}.reverse[_ngcontent-%COMP%]{flex-direction:row-reverse;justify-content:flex-end}"],
                changeDetection: 0
            }),
            e
        }
        )()
    },
    "b/7W": function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return a
        }
        ));
        var o = n("LRne")
          , r = n("xgIS")
          , i = n("lJxs")
          , c = n("/uUt")
          , s = n("fXoL");
        let a = ( () => {
            class e {
                listenScrollLayout(e, t) {
                    const n = document.querySelector(e);
                    return n ? Object(r.a)(window, "scroll").pipe(Object(i.a)( () => Math.round(n.scrollTop)), Object(c.a)(), Object(i.a)(e => e >= t)) : Object(o.a)(!1)
                }
                scrollTopTo(e, t) {
                    const n = document.querySelector(e);
                    !n || n.scrollTop < t || (n.scrollTop = t)
                }
            }
            return e.\u0275fac = function(t) {
                return new (t || e)
            }
            ,
            e.\u0275prov = s.Sb({
                token: e,
                factory: e.\u0275fac
            }),
            e
        }
        )()
    },
    biIK: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return c
        }
        ));
        var o = n("AytR")
          , r = n("fXoL")
          , i = n("tk/3");
        let c = ( () => {
            class e {
                constructor(e) {
                    this.http = e
                }
                getVideoRoutes() {
                    return this.http.get(o.a.urls.baseUrl + "/api/video/urls").pipe(e => e)
                }
            }
            return e.\u0275fac = function(t) {
                return new (t || e)(r.gc(i.c))
            }
            ,
            e.\u0275prov = r.Sb({
                token: e,
                factory: e.\u0275fac,
                providedIn: "root"
            }),
            e
        }
        )()
    },
    cQp2: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return S
        }
        ));
        var o = n("mrSG")
          , r = n("pLZG")
          , i = n("vkgz")
          , c = n("eIep")
          , s = n("/uUt")
          , a = n("Kj3r")
          , l = n("wfDK")
          , u = n("2Vo4")
          , d = n("xgIS")
          , h = n("VfN6")
          , p = n("zKup")
          , C = n("fXoL")
          , g = n("3Pt+")
          , f = n("TaO5");
        let b = ( () => {
            class e {
                constructor(e, t) {
                    this.changeDetectionRef = e,
                    this._elementRef = t,
                    this._value = !1,
                    this.onChange = () => {}
                    ,
                    this.onTouched = () => {}
                }
                ngOnInit() {}
                registerOnChange(e) {
                    this.onChange = e
                }
                registerOnTouched(e) {
                    this.onTouched = e
                }
                writeValue(e) {
                    this._value = e,
                    this.onChange(e)
                }
            }
            return e.\u0275fac = function(t) {
                return new (t || e)(C.Wb(C.h),C.Wb(C.l))
            }
            ,
            e.\u0275cmp = C.Qb({
                type: e,
                selectors: [["orr-checkbox"]],
                inputs: {
                    label: "label"
                },
                features: [C.Fb([{
                    provide: g.n,
                    useExisting: Object(C.U)( () => e),
                    multi: !0
                }])],
                decls: 2,
                vars: 2,
                consts: [["nz-checkbox", "", 3, "ngModel", "ngModelChange"]],
                template: function(e, t) {
                    1 & e && (C.cc(0, "label", 0),
                    C.kc("ngModelChange", (function(e) {
                        return t._value = e
                    }
                    ))("ngModelChange", (function(e) {
                        return t.writeValue(e)
                    }
                    )),
                    C.Sc(1),
                    C.bc()),
                    2 & e && (C.wc("ngModel", t._value),
                    C.Gb(1),
                    C.Tc(t.label))
                },
                directives: [f.a, g.p, g.s],
                styles: [""]
            }),
            e
        }
        )();
        var m = n("zAKX")
          , v = n("ofXK");
        const k = function(e) {
            return {
                option: e
            }
        };
        function w(e, t) {
            if (1 & e && C.Yb(0, 4),
            2 & e) {
                const e = C.oc().$implicit
                  , t = C.oc();
                C.wc("ngTemplateOutlet", t.itemTemplate)("ngTemplateOutletContext", C.Bc(2, k, e))
            }
        }
        function _(e, t) {
            if (1 & e && (C.cc(0, "nz-option", 2),
            C.Qc(1, w, 1, 4, "ng-container", 3),
            C.bc()),
            2 & e) {
                const e = t.$implicit
                  , n = C.oc();
                C.wc("nzCustomContent", !!n.itemTemplate)("nzHide", 1 === n.items.length && n.items[0] === n._value)("nzLabel", n.labelField ? e[n.labelField] : e)("nzValue", n.valueField ? e[n.valueField] : e),
                C.Gb(1),
                C.wc("ngIf", n.itemTemplate)
            }
        }
        let x = ( () => {
            class e {
                constructor(e, t) {
                    this.changeDetectionRef = e,
                    this._elementRef = t,
                    this.isDisabled = !1,
                    this.isSearchable = !1,
                    this.allowClear = !1,
                    this.nzDropdownStyle = "",
                    this._options = [],
                    this._size = "large",
                    this.searchQuery$ = new u.a(void 0),
                    this._value = void 0,
                    this.onChange = () => {}
                    ,
                    this.onTouched = () => {}
                }
                get items() {
                    return this._options
                }
                set items(e) {
                    JSON.stringify(this._options) !== JSON.stringify(e) && (this._options = e || [],
                    this.writeValue(this._value))
                }
                ngOnInit() {}
                registerOnChange(e) {
                    this.onChange = e
                }
                registerOnTouched(e) {
                    this.onTouched = e
                }
                setDisabledState(e) {
                    this.isDisabled = e
                }
                writeValue(e) {
                    if (void 0 !== e || e !== this._value)
                        if (!this._options.length && e)
                            this._value = e,
                            this.items = [e];
                        else {
                            if (this.valueField) {
                                const t = this._options.find(t => JSON.stringify(t[this.valueField]) === JSON.stringify(e));
                                this._value = t ? t[this.valueField] : e
                            } else
                                this._value = this._options.find(t => JSON.stringify(t) === JSON.stringify(e));
                            this.onChange(this._value)
                        }
                }
            }
            return e.\u0275fac = function(t) {
                return new (t || e)(C.Wb(C.h),C.Wb(C.l))
            }
            ,
            e.\u0275cmp = C.Qb({
                type: e,
                selectors: [["orr-select"]],
                inputs: {
                    isDisabled: "isDisabled",
                    isSearchable: "isSearchable",
                    placeholder: "placeholder",
                    labelField: "labelField",
                    valueField: "valueField",
                    itemTemplate: "itemTemplate",
                    allowClear: "allowClear",
                    nzDropdownStyle: "nzDropdownStyle",
                    loading: "loading",
                    items: "items",
                    searchQuery$: "searchQuery$"
                },
                features: [C.Fb([{
                    provide: g.n,
                    useExisting: Object(C.U)( () => e),
                    multi: !0
                }])],
                decls: 2,
                vars: 10,
                consts: [[3, "nzAllowClear", "nzSize", "nzLoading", "nzShowArrow", "ngModel", "nzDisabled", "nzPlaceHolder", "nzShowSearch", "nzDropdownClassName", "nzOnSearch", "ngModelChange"], [3, "nzCustomContent", "nzHide", "nzLabel", "nzValue", 4, "ngFor", "ngForOf"], [3, "nzCustomContent", "nzHide", "nzLabel", "nzValue"], [3, "ngTemplateOutlet", "ngTemplateOutletContext", 4, "ngIf"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"]],
                template: function(e, t) {
                    1 & e && (C.cc(0, "nz-select", 0),
                    C.kc("nzOnSearch", (function(e) {
                        return t.searchQuery$.next(e)
                    }
                    ))("ngModelChange", (function(e) {
                        return t._value = e
                    }
                    ))("ngModelChange", (function(e) {
                        return t.writeValue(e)
                    }
                    )),
                    C.Qc(1, _, 2, 5, "nz-option", 1),
                    C.bc()),
                    2 & e && (C.wc("nzAllowClear", t.allowClear)("nzSize", t._size)("nzLoading", t.loading)("nzShowArrow", t.items.length > 1 || 1 === t.items.length && t.items[0] !== t._value)("ngModel", t._value)("nzDisabled", t.isDisabled)("nzPlaceHolder", t.placeholder)("nzShowSearch", t.isSearchable)("nzDropdownClassName", t.nzDropdownStyle),
                    C.Gb(1),
                    C.wc("ngForOf", t.items))
                },
                directives: [m.b, g.p, g.s, v.n, m.a, v.o, v.t],
                styles: ["[_nghost-%COMP%]{display:block}[_nghost-%COMP%], nz-select[_ngcontent-%COMP%]{width:100%}.source-type-link[_ngcontent-%COMP%]{display:flex;align-items:center;font-weight:500;font-size:20px;line-height:28px;letter-spacing:.5px;color:#1f90ff}.source-type-link[_ngcontent-%COMP%] > i[_ngcontent-%COMP%]{font-size:24px}.source-type-link-disabled[_ngcontent-%COMP%]{color:#c1c1c1}.source-type-menu-item[_ngcontent-%COMP%]{justify-content:space-between;display:flex;align-items:center}.source-type-menu-item[_ngcontent-%COMP%] > i[_ngcontent-%COMP%]{color:#481173;font-size:24px}@media (max-width:600px){.source-type-link[_ngcontent-%COMP%]{line-height:20px}.source-type-link[_ngcontent-%COMP%] > i[_ngcontent-%COMP%]{font-size:20px}}@media (max-width:376px){.source-type-link[_ngcontent-%COMP%], .source-type-link[_ngcontent-%COMP%] > i[_ngcontent-%COMP%]{font-size:18px}}@media (max-width:360px){.source-type-link[_ngcontent-%COMP%], .source-type-link[_ngcontent-%COMP%] > i[_ngcontent-%COMP%]{font-size:16px}}"]
            }),
            e
        }
        )();
        var M = n("g5EH")
          , y = n("rMZv");
        let S = ( () => {
            let e = class {
                constructor(e, t, n, o, r, i, c) {
                    this.resolver = e,
                    this.element = t,
                    this.viewContainerRef = n,
                    this.injector = o,
                    this.service = r,
                    this.table = i,
                    this.renderer = c,
                    this.placeHolder = "",
                    this.debounceTime = 300,
                    this.sortLabel = "",
                    this._selectItems = [],
                    this.filterSubject = new u.a("init"),
                    this.sortSubject = new u.a(null)
                }
                set filterValue(e) {
                    this._filterValue !== e && (this._input && this._input.writeValue(e),
                    this._filterValue = e)
                }
                set selectItems(e) {
                    this._selectItems = e,
                    this._input && (this._input.items = this._selectItems)
                }
                ngOnInit() {
                    if (!this.filterField && !this.nzSort)
                        throw new Error("\u041d\u0435 \u0432\u044b\u0431\u0440\u0430\u043d\u043e \u043f\u043e\u043b\u0435 \u0434\u043b\u044f \u0444\u0438\u043b\u044c\u0442\u0440\u0430\u0446\u0438\u0438 \u0438\u043b\u0438 \u0441\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0438");
                    this.service.initData(this.table).pipe(Object(h.b)(this), Object(r.a)(e => e), Object(i.a)( () => {
                        if (void 0 !== this.nzSort && (this._createSort(),
                        this.sortSubject.pipe(Object(i.a)(e => {
                            var t;
                            return null === (t = this.service) || void 0 === t ? void 0 : t.sort(this.table.genericId, {
                                sortValue: e,
                                sortName: this.nzSort || this.filterField
                            })
                        }
                        )).subscribe()),
                        this.filterField)
                            switch (this.filterType) {
                            case "date-range":
                                this._createInput(M.a);
                                break;
                            case "select-include":
                            case "select":
                                this._createInput(x);
                                break;
                            case "checkbox":
                                this._createInput(b);
                                break;
                            default:
                                this._createInput(p.a)
                            }
                    }
                    ), Object(c.a)( () => this.filterSubject), Object(r.a)(e => "init" !== e), Object(s.a)(), Object(a.a)(this.debounceTime ? this.debounceTime : 500), Object(i.a)(e => {
                        this.nzLocalStorageKey && (e ? localStorage.setItem(this.nzLocalStorageKey, e) : localStorage.removeItem(this.nzLocalStorageKey)),
                        this.service.filter(this.table.genericId, {
                            filterType: this.filterType,
                            filterField: this.filterField || this.nzSort,
                            value: e,
                            filterMatcherFn: this.filterMatcherFn
                        })
                    }
                    )).subscribe()
                }
                ngOnDestroy() {
                    this._destroyInput(),
                    this.service.removeFilter(this.table.genericId, this.filterField)
                }
                _createSort() {
                    const e = document.createElement("a");
                    e.innerText = this.sortLabel ? this.sortLabel : this.viewContainerRef.element.nativeElement.innerText,
                    e.classList.add("sort-link", "sort-table-arrow", "sort-table-arrow-down"),
                    this.viewContainerRef.element.nativeElement.innerText = "",
                    Object(d.a)(e, "click").pipe(Object(h.b)(this), Object(i.a)( () => {
                        switch (this.sortSubject.value) {
                        default:
                            this.sortSubject.next("ascend"),
                            this.toggleSortArrow("ascend", e);
                            break;
                        case "ascend":
                            this.sortSubject.next("descend"),
                            this.toggleSortArrow("descend", e);
                            break;
                        case "descend":
                            this.sortSubject.next(null),
                            this.toggleSortArrow(null, e)
                        }
                    }
                    )).subscribe(),
                    this.nzInitSort && (this.sortSubject.next(this.nzInitSort),
                    this.toggleSortArrow(this.nzInitSort, e)),
                    this.renderer.appendChild(this.viewContainerRef.element.nativeElement, e)
                }
                _createInput(e) {
                    this._inputRef || (this._inputRef = this.viewContainerRef.createComponent(this.resolver.resolveComponentFactory(e)),
                    this._input = this._inputRef.instance,
                    this._input.searchIcon = !0,
                    this._input.nzPlaceHolder = this.placeHolder,
                    "number" === this.filterType && (this._input.type = "number"),
                    "checkbox" === this.filterType && (this._input.label = this.placeHolder),
                    "select" !== this.filterType && "select-include" !== this.filterType || (this._input._size = "default",
                    this._input.labelField = this.selectLabel,
                    this._input.valueField = this.selectValue,
                    this._input.items = this._selectItems,
                    this._input.allowClear = !0),
                    this._input.placeholder = this.placeHolder,
                    this._input.nzSize = "default",
                    this._input.onChange = e => this.filterSubject.next(e),
                    this._filterValue ? this._input.writeValue(this._filterValue) : localStorage.getItem(this.nzLocalStorageKey) && this._input.writeValue(+localStorage.getItem(this.nzLocalStorageKey) || localStorage.getItem(this.nzLocalStorageKey)),
                    setTimeout( () => this.renderer.appendChild(this.viewContainerRef.element.nativeElement, (this._input.inputElement || this._input._elementRef).nativeElement)))
                }
                toggleSortArrow(e, t) {
                    switch (e) {
                    default:
                        t.classList.replace("sort-table-arrow-up", "sort-table-arrow-down"),
                        t.classList.remove("sort-table-arrow-active");
                        break;
                    case "ascend":
                        t.classList.replace("sort-table-arrow-up", "sort-table-arrow-down"),
                        t.classList.add("sort-table-arrow-active");
                        break;
                    case "descend":
                        t.classList.replace("sort-table-arrow-down", "sort-table-arrow-up"),
                        t.classList.add("sort-table-arrow-active")
                    }
                }
                _destroyInput() {
                    this._inputRef && this._inputRef.destroy()
                }
            }
            ;
            return e.\u0275fac = function(t) {
                return new (t || e)(C.Wb(C.j),C.Wb(C.l),C.Wb(C.P),C.Wb(C.r),C.Wb(l.a),C.Wb(y.c),C.Wb(C.E))
            }
            ,
            e.\u0275dir = C.Rb({
                type: e,
                selectors: [["th", "nzFilter", ""], ["th", "nzSort", ""]],
                inputs: {
                    filterField: ["nzFilter", "filterField"],
                    nzSort: "nzSort",
                    filterType: ["nzFilterType", "filterType"],
                    placeHolder: ["nzPlaceHolder", "placeHolder"],
                    debounceTime: ["nzDebounce", "debounceTime"],
                    sortLabel: ["nzSortLabel", "sortLabel"],
                    nzInitSort: "nzInitSort",
                    nzLocalStorageKey: "nzLocalStorageKey",
                    filterValue: ["nzFilterValue", "filterValue"],
                    selectLabel: ["nzSelectLabel", "selectLabel"],
                    selectValue: ["nzSelectValue", "selectValue"],
                    selectItems: ["nzSelectItems", "selectItems"],
                    filterMatcherFn: ["nzFilterMatcherFn", "filterMatcherFn"]
                }
            }),
            e = Object(o.c)([Object(h.a)()], e),
            e
        }
        )()
    },
    ceTk: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return r
        }
        ));
        var o = n("fXoL");
        let r = ( () => {
            class e {
                constructor() {}
                set(e, t) {
                    sessionStorage.setItem(e, JSON.stringify(t))
                }
                get(e) {
                    return JSON.parse(sessionStorage.getItem(e))
                }
                remove(e) {
                    sessionStorage.removeItem(e)
                }
            }
            return e.\u0275fac = function(t) {
                return new (t || e)
            }
            ,
            e.\u0275prov = o.Sb({
                token: e,
                factory: e.\u0275fac,
                providedIn: "root"
            }),
            e
        }
        )()
    },
    citr: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return s
        }
        ));
        var o = n("ofXK")
          , r = n("3Pt+")
          , i = n("zAKX")
          , c = n("fXoL");
        let s = ( () => {
            class e {
            }
            return e.\u0275mod = c.Ub({
                type: e
            }),
            e.\u0275inj = c.Tb({
                factory: function(t) {
                    return new (t || e)
                },
                imports: [[o.c, r.k, i.c]]
            }),
            e
        }
        )()
    },
    crnd: function(e, t) {
        function n(e) {
            return Promise.resolve().then((function() {
                var t = new Error("Cannot find module '" + e + "'");
                throw t.code = "MODULE_NOT_FOUND",
                t
            }
            ))
        }
        n.keys = function() {
            return []
        }
        ,
        n.resolve = n,
        e.exports = n,
        n.id = "crnd"
    },
    emTK: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return c
        }
        ));
        var o = n("tk/3")
          , r = n("AytR")
          , i = n("fXoL");
        let c = ( () => {
            class e {
                constructor(e) {
                    this.http = e
                }
                createReorder(e, t) {
                    const n = new o.h({
                        fromObject: {
                            oldShkId: null == e ? void 0 : e.toString(),
                            newShkId: null == t ? void 0 : t.toString()
                        }
                    });
                    return this.http.get(r.a.urls.baseUrl + "/api/reorder/create", {
                        params: n
                    })
                }
            }
            return e.\u0275fac = function(t) {
                return new (t || e)(i.gc(o.c))
            }
            ,
            e.\u0275prov = i.Sb({
                token: e,
                factory: e.\u0275fac
            }),
            e
        }
        )()
    },
    g5EH: function(e, t, n) {
        "use strict";
        n.d(t, "b", (function() {
            return s
        }
        )),
        n.d(t, "a", (function() {
            return h
        }
        ));
        var o = n("ofXK")
          , r = n("3Pt+")
          , i = n("0lU3")
          , c = n("fXoL");
        let s = ( () => {
            class e {
            }
            return e.\u0275mod = c.Ub({
                type: e
            }),
            e.\u0275inj = c.Tb({
                factory: function(t) {
                    return new (t || e)
                },
                imports: [[o.c, r.k, i.b]]
            }),
            e
        }
        )();
        var a = n("M34a")
          , l = n("piIK");
        const u = ["calendarContainer"]
          , d = function() {
            return ["", ""]
        };
        let h = ( () => {
            class e {
                constructor(e, t, n) {
                    this._elementRef = e,
                    this.chDRef = t,
                    this.renderer = n,
                    this.dateRange = [],
                    this.isOpen = !1,
                    this.unlistenWindowClick = () => {}
                    ,
                    this.onChange = e => {}
                    ,
                    this.onTouched = () => {}
                }
                writeValue(e) {
                    this.dateRange = e
                }
                registerOnChange(e) {
                    this.onChange = e
                }
                registerOnTouched(e) {
                    this.onTouched = e
                }
                handleChangeRange() {
                    this.emitValue()
                }
                handleClickDatepicker() {
                    this.isOpen ? this.closeCalendar() : this.openCalendar()
                }
                get isEmpty() {
                    var e;
                    return !(null === (e = this.dateRange) || void 0 === e ? void 0 : e.length) || this.dateRange.some(e => !e)
                }
                emitValue() {
                    var e, t, n, o;
                    const r = (null === (e = this.dateRange) || void 0 === e ? void 0 : e[0]) && (null === (t = this.dateRange) || void 0 === t ? void 0 : t[1]) ? [Object(a.a)(null === (n = this.dateRange) || void 0 === n ? void 0 : n[0]), Object(l.a)(null === (o = this.dateRange) || void 0 === o ? void 0 : o[1])] : null;
                    this.onChange(r)
                }
                openCalendar() {
                    this.isOpen = !0,
                    this.unlistenWindowClick = this.renderer.listen(window, "click", e => {
                        const t = e.target
                          , n = document.querySelector(".ant-picker-date-range-wrapper");
                        (null == n ? void 0 : n.contains(t)) || this.closeCalendar()
                    }
                    )
                }
                closeCalendar() {
                    this.isOpen = !1,
                    this.unlistenWindowClick(),
                    this.chDRef.detectChanges()
                }
            }
            return e.\u0275fac = function(t) {
                return new (t || e)(c.Wb(c.l),c.Wb(c.h),c.Wb(c.E))
            }
            ,
            e.\u0275cmp = c.Qb({
                type: e,
                selectors: [["app-date-range-picker"]],
                viewQuery: function(e, t) {
                    var n;
                    1 & e && c.Yc(u, !0),
                    2 & e && c.Fc(n = c.lc()) && (t.calendarContainer = n.first)
                },
                features: [c.Fb([{
                    provide: r.n,
                    useExisting: Object(c.U)( () => e),
                    multi: !0
                }])],
                decls: 3,
                vars: 7,
                consts: [[1, "range", 3, "mousedown"], ["calendarContainer", ""], ["nzFormat", "dd.MM", 3, "nzPlaceHolder", "nzShowTime", "nzOpen", "ngModel", "ngModelChange"]],
                template: function(e, t) {
                    1 & e && (c.cc(0, "div", 0, 1),
                    c.kc("mousedown", (function() {
                        return t.handleClickDatepicker()
                    }
                    )),
                    c.cc(2, "nz-range-picker", 2),
                    c.kc("ngModelChange", (function(e) {
                        return t.dateRange = e
                    }
                    ))("ngModelChange", (function() {
                        return t.handleChangeRange()
                    }
                    )),
                    c.bc(),
                    c.bc()),
                    2 & e && (c.Mb("range_empty", t.isEmpty),
                    c.Gb(2),
                    c.wc("nzPlaceHolder", c.Ac(6, d))("nzShowTime", !1)("nzOpen", t.isOpen)("ngModel", t.dateRange))
                },
                directives: [i.a, i.c, r.p, r.s],
                styles: ["[_nghost-%COMP%]     .range{min-width:140px}[_nghost-%COMP%]     .range .ant-picker-input>input{text-align:center;overflow:visible}[_nghost-%COMP%]     .range .ant-picker-suffix{display:none}[_nghost-%COMP%]     .range_empty .ant-picker-input:first-child{order:0}[_nghost-%COMP%]     .range_empty .ant-picker-input:nth-child(3){order:2}[_nghost-%COMP%]     .range_empty .ant-picker-range-separator{display:none}[_nghost-%COMP%]     .range_empty .ant-picker-suffix{display:block;order:1;margin:0}"],
                changeDetection: 0
            }),
            e
        }
        )()
    },
    hD7a: function(e, t, n) {
        "use strict";
        n.r(t),
        n.d(t, "AcceptanceModule", (function() {
            return tt
        }
        ));
        var o = n("ofXK")
          , r = n("3Pt+")
          , i = n("FwiY")
          , c = n("PTRe")
          , s = n("TaO5")
          , a = n("OzZK")
          , l = n("IvDN")
          , u = n("F6ss")
          , d = n("qAZ0")
          , h = n("nJia")
          , p = n("tyNb")
          , C = n("mrSG")
          , g = n("8ou0")
          , f = n("VfN6")
          , b = n("vkgz")
          , m = n("nYR2")
          , v = n("x3ft")
          , k = n("lI3o")
          , w = n("SyKt")
          , _ = n("2Vo4")
          , x = n("fXoL")
          , M = n("C2AL")
          , y = n("xgIS")
          , S = n("14Tl")
          , O = n("RwU8")
          , L = n("z+jU")
          , P = n("ceTk")
          , z = n("AytR")
          , I = n("tk/3");
        let V = ( () => {
            class e {
                constructor(e) {
                    this.http = e
                }
                sendFeedback(e) {
                    return this.http.post(z.a.urls.baseUrl + "/api/boxes/set-score", (t = e) && {
                        comment: t.comment,
                        delivery_id: t.taskId,
                        driver_id: t.driverId,
                        rating: t.rating,
                        reasons: t.reasons
                    });
                    var t
                }
            }
            return e.\u0275fac = function(t) {
                return new (t || e)(x.gc(I.c))
            }
            ,
            e.\u0275prov = x.Sb({
                token: e,
                factory: e.\u0275fac
            }),
            e
        }
        )();
        var j = n("dEAy")
          , T = n("L1u3");
        function H(e, t) {
            if (1 & e) {
                const e = x.dc();
                x.cc(0, "div", 2),
                x.kc("click", (function() {
                    x.Ic(e);
                    const n = t.$implicit;
                    return x.oc().handleToggleReason(n.id)
                }
                )),
                x.cc(1, "span"),
                x.Sc(2),
                x.bc(),
                x.Xb(3, "i", 3),
                x.bc()
            }
            if (2 & e) {
                const e = t.$implicit
                  , n = x.oc();
                x.Mb("reason_selected", n.value.includes(e.id))("reason_hover", !n.isMobile),
                x.Gb(2),
                x.Tc(e.name)
            }
        }
        let B = ( () => {
            class e {
                constructor(e) {
                    this.chDRef = e,
                    this.isMobile = !1,
                    this.value = [],
                    this.reasons = [{
                        id: 20101,
                        name: "\u0424\u0438\u043a\u0442\u0438\u0432\u043d\u0430\u044f \u043e\u0442\u043c\u0435\u0442\u043a\u0430"
                    }, {
                        id: 20102,
                        name: "\u0427\u0443\u0436\u0438\u0435 \u043a\u043e\u0440\u043e\u0431\u043a\u0438"
                    }, {
                        id: 20103,
                        name: "\u041c\u044f\u0442\u044b\u0435/\u0440\u0432\u0430\u043d\u044b\u0435 \u043a\u043e\u0440\u043e\u0431\u043a\u0438"
                    }],
                    this.onChange = () => {}
                    ,
                    this.onTouched = () => {}
                }
                writeValue(e) {
                    this.value = e,
                    this.chDRef.detectChanges()
                }
                registerOnChange(e) {
                    this.onChange = e
                }
                registerOnTouched(e) {
                    this.onTouched = e
                }
                handleToggleReason(e) {
                    this.value.includes(e) ? this.value.splice(this.value.indexOf(e), 1) : this.value.push(e),
                    this.onChange(this.value)
                }
            }
            return e.\u0275fac = function(t) {
                return new (t || e)(x.Wb(x.h))
            }
            ,
            e.\u0275cmp = x.Qb({
                type: e,
                selectors: [["app-driver-feedback-reasons"]],
                features: [x.Fb([{
                    provide: r.n,
                    useExisting: Object(x.U)( () => e),
                    multi: !0
                }])],
                decls: 2,
                vars: 1,
                consts: [[1, "reason__list"], ["class", "reason", 3, "reason_selected", "reason_hover", "click", 4, "ngFor", "ngForOf"], [1, "reason", 3, "click"], ["nz-icon", "", "nzType", "wb-check-slim", "nzTheme", "outline"]],
                template: function(e, t) {
                    1 & e && (x.cc(0, "div", 0),
                    x.Qc(1, H, 4, 5, "div", 1),
                    x.bc()),
                    2 & e && (x.Gb(1),
                    x.wc("ngForOf", t.reasons))
                },
                directives: [o.n, i.b, M.a],
                styles: [".reason[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;padding:16px 20px;border-radius:8px;border:1px solid rgba(0,0,0,.12);background-color:transparent;transition:all .2s ease-in-out;cursor:pointer}.reason[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{font-family:Roboto,sans-serif;font-size:16px;font-weight:400;line-height:24px;color:rgba(0,0,0,.85)}.reason[_ngcontent-%COMP%] > i[_ngcontent-%COMP%]{font-size:24px;line-height:0;color:rgba(0,0,0,.2);transition:color .2s ease-in-out}.reason__list[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:12px}.reason_selected[_ngcontent-%COMP%]{background-color:rgba(150,94,235,.08);border-color:#ba8bf7}.reason_selected[_ngcontent-%COMP%] > i[_ngcontent-%COMP%]{color:#965eeb}.reason_hover[_ngcontent-%COMP%]:not(.reason_selected):hover{background-color:rgba(150,94,235,.08);border-color:transparent}"],
                changeDetection: 0
            }),
            Object(C.c)([Object(g.a)({
                width: 1024
            }), Object(C.f)("design:type", Object)], e.prototype, "isMobile", void 0),
            e
        }
        )()
          , Z = ( () => {
            class e {
                constructor(e, t) {
                    this.modalRef = e,
                    this.fb = t,
                    this.rating = 0,
                    this.onSendFeedback = new x.n,
                    this.form = this.initForm(t)
                }
                handleSend() {
                    const {comment: e, reasons: t} = this.form.value;
                    this.onSendFeedback.emit({
                        comment: e,
                        reasons: t
                    }),
                    this.modalRef.close()
                }
                initForm(e) {
                    return e.group({
                        comment: [""],
                        reasons: [[], [r.w.required]]
                    })
                }
            }
            return e.\u0275fac = function(t) {
                return new (t || e)(x.Wb(j.c),x.Wb(r.f))
            }
            ,
            e.\u0275cmp = x.Qb({
                type: e,
                selectors: [["app-driver-feedback-modal"]],
                inputs: {
                    rating: "rating"
                },
                outputs: {
                    onSendFeedback: "onSendFeedback"
                },
                decls: 7,
                vars: 5,
                consts: [[1, "modal"], [3, "ngModel", "nzDisabled"], [3, "formGroup"], ["formControlName", "reasons"], ["nz-input", "", "formControlName", "comment", "placeholder", "\u041a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439", "rows", "6"], ["nz-button", "", "nzType", "primary", "nzSize", "large", 3, "nzBlock", "disabled", "click"]],
                template: function(e, t) {
                    1 & e && (x.cc(0, "div", 0),
                    x.Xb(1, "nz-rate", 1),
                    x.ac(2, 2),
                    x.Xb(3, "app-driver-feedback-reasons", 3),
                    x.Xb(4, "textarea", 4),
                    x.Zb(),
                    x.cc(5, "button", 5),
                    x.kc("click", (function() {
                        return t.handleSend()
                    }
                    )),
                    x.Sc(6, "\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"),
                    x.bc(),
                    x.bc()),
                    2 & e && (x.Gb(1),
                    x.wc("ngModel", t.rating)("nzDisabled", !0),
                    x.Gb(1),
                    x.wc("formGroup", t.form),
                    x.Gb(3),
                    x.wc("nzBlock", !0)("disabled", t.form.invalid))
                },
                directives: [T.a, r.p, r.s, r.q, r.i, B, r.h, c.a, r.d, a.a, O.a, M.a],
                styles: [".modal[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:36px}.modal[_ngcontent-%COMP%] > nz-rate[_ngcontent-%COMP%]  .ant-rate{display:flex;justify-content:space-around;width:100%;font-size:48px;color:#965eeb}.modal[_ngcontent-%COMP%] > textarea[_ngcontent-%COMP%]{padding:12px 16px;font-family:Roboto,sans-serif;font-size:14px;font-weight:400;line-height:20px;resize:none;border-radius:8px}.modal[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]{height:48px;border-radius:8px}.modal[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]:disabled{border-color:transparent}  .driver-feedback-modal-wrap .ant-modal-header{padding:24px 32px 16px;border-bottom:none}  .driver-feedback-modal-wrap .ant-modal-title{font-family:Roboto,sans-serif;font-size:20px;font-weight:600!important;line-height:28px;color:rgba(0,0,0,.85)}"],
                changeDetection: 0
            }),
            e
        }
        )()
          , F = ( () => {
            class e {
                constructor(e, t) {
                    this.drawerRef = e,
                    this.fb = t,
                    this.rating = 0,
                    this.onSendFeedback = new x.n,
                    this.form = this.initForm(t)
                }
                handleSend() {
                    const {comment: e, reasons: t} = this.form.value;
                    this.onSendFeedback.emit({
                        comment: e,
                        reasons: t
                    }),
                    this.drawerRef.close()
                }
                handleCancel() {
                    this.drawerRef.close()
                }
                initForm(e) {
                    return e.group({
                        comment: [""],
                        reasons: [[], [r.w.required]]
                    })
                }
            }
            return e.\u0275fac = function(t) {
                return new (t || e)(x.Wb(u.c),x.Wb(r.f))
            }
            ,
            e.\u0275cmp = x.Qb({
                type: e,
                selectors: [["app-driver-feedback-drawer"]],
                inputs: {
                    rating: "rating"
                },
                outputs: {
                    onSendFeedback: "onSendFeedback"
                },
                decls: 10,
                vars: 4,
                consts: [[1, "drawer"], [3, "ngModel", "nzDisabled"], [3, "formGroup"], ["formControlName", "reasons"], ["nz-input", "", "formControlName", "comment", "placeholder", "\u041a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439", "rows", "6"], [1, "drawer__buttons"], ["nz-button", "", "nzType", "default", "nzSize", "large", 3, "click"], ["nz-button", "", "nzType", "primary", "nzSize", "large", 3, "disabled", "click"]],
                template: function(e, t) {
                    1 & e && (x.cc(0, "div", 0),
                    x.Xb(1, "nz-rate", 1),
                    x.ac(2, 2),
                    x.Xb(3, "app-driver-feedback-reasons", 3),
                    x.Xb(4, "textarea", 4),
                    x.Zb(),
                    x.cc(5, "div", 5),
                    x.cc(6, "button", 6),
                    x.kc("click", (function() {
                        return t.handleCancel()
                    }
                    )),
                    x.Sc(7, "\u041e\u0442\u043c\u0435\u043d\u0430"),
                    x.bc(),
                    x.cc(8, "button", 7),
                    x.kc("click", (function() {
                        return t.handleSend()
                    }
                    )),
                    x.Sc(9, "\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"),
                    x.bc(),
                    x.bc(),
                    x.bc()),
                    2 & e && (x.Gb(1),
                    x.wc("ngModel", t.rating)("nzDisabled", !0),
                    x.Gb(1),
                    x.wc("formGroup", t.form),
                    x.Gb(6),
                    x.wc("disabled", t.form.invalid))
                },
                directives: [T.a, r.p, r.s, r.q, r.i, B, r.h, c.a, r.d, a.a, O.a, M.a],
                styles: [".drawer[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:32px}.drawer[_ngcontent-%COMP%] > nz-rate[_ngcontent-%COMP%]  .ant-rate{display:flex;justify-content:space-around;width:100%;font-size:40px;color:#965eeb}.drawer[_ngcontent-%COMP%] > textarea[_ngcontent-%COMP%]{padding:12px 16px;font-family:Roboto,sans-serif;font-size:14px;font-weight:400;line-height:20px;resize:none;border-radius:8px}.drawer__buttons[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(2,.5fr);grid-column-gap:10px;margin-top:-12px}.drawer__buttons[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]{height:48px;border-radius:8px}.drawer__buttons[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]:first-child{background-color:rgba(130,74,215,.04);color:#824ad7;border-color:transparent}.drawer__buttons[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]:disabled{border-color:transparent}  .driver-feedback-modal-wrap .ant-modal-header{padding:24px 32px 16px;border-bottom:none}  .driver-feedback-modal-wrap .ant-modal-title{font-family:Roboto,sans-serif;font-size:20px;font-weight:500!important;line-height:28px;color:rgba(0,0,0,.85)}  .driver-feedback-drawer-wrap{height:calc(100svh - 60px)!important}  .driver-feedback-drawer-wrap .ant-modal-title{font-weight:600!important}  .driver-feedback-drawer-wrap .ant-drawer-header{padding:16px 16px 24px;border-bottom:none}  .driver-feedback-drawer-wrap .ant-drawer-title{font-family:Roboto,sans-serif;font-size:20px;font-weight:600!important;line-height:28px;color:rgba(0,0,0,.85)}  .driver-feedback-drawer-wrap .ant-drawer-body{padding:0 16px 16px}"],
                changeDetection: 0
            }),
            e
        }
        )();
        function G(e, t) {
            if (1 & e) {
                const e = x.dc();
                x.cc(0, "button", 4),
                x.kc("click", (function() {
                    return x.Ic(e),
                    x.oc().handleSendRating()
                }
                )),
                x.Sc(1),
                x.bc()
            }
            if (2 & e) {
                const e = x.oc();
                x.Gb(1),
                x.Tc(5 === e.rating ? "\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c" : "\u041e\u0446\u0435\u043d\u0438\u0442\u044c")
            }
        }
        function D(e, t) {
            1 & e && (x.cc(0, "div", 5),
            x.Sc(1, "\u041e\u0446\u0435\u043d\u043a\u0430 \u043f\u043e\u0441\u0442\u0430\u0432\u0449\u0438\u043a\u0430"),
            x.bc())
        }
        let R = ( () => {
            let e = class {
                constructor(e, t, n, o, r) {
                    this.feedbackService = e,
                    this.modalService = t,
                    this.drawerService = n,
                    this.notificationsService = o,
                    this.sessionStorageService = r,
                    this.isMobile = !1,
                    this.rating = 0,
                    this.isRatingSaved$ = new _.a(!1)
                }
                ngOnInit() {
                    this.ratingStorageKey = `${this.taskId}_${this.driverId}`;
                    const e = this.sessionStorageService.get(this.ratingStorageKey);
                    e && (this.rating = e,
                    this.isRatingSaved$.next(!0))
                }
                handleSendRating() {
                    if (5 === this.rating)
                        this.sendFeedback();
                    else if (this.isMobile) {
                        const e = this.drawerService.create({
                            nzTitle: "\u041e\u0446\u0435\u043d\u043a\u0430 \u043f\u0435\u0440\u0435\u0432\u043e\u0437\u0447\u0438\u043a\u0430",
                            nzContent: F,
                            nzContentParams: {
                                rating: this.rating
                            },
                            nzWrapClassName: "driver-feedback-drawer-wrap",
                            nzPlacement: "bottom"
                        });
                        e.afterOpen.pipe(Object(f.b)(this)).subscribe( () => {
                            e.getContentComponent().onSendFeedback.pipe(Object(f.b)(this)).subscribe(e => this.sendFeedback(null == e ? void 0 : e.comment, null == e ? void 0 : e.reasons))
                        }
                        )
                    } else {
                        const e = this.modalService.create({
                            nzTitle: "\u041e\u0446\u0435\u043d\u043a\u0430 \u043f\u0435\u0440\u0435\u0432\u043e\u0437\u0447\u0438\u043a\u0430",
                            nzContent: Z,
                            nzComponentParams: {
                                rating: this.rating
                            },
                            nzWrapClassName: "driver-feedback-modal-wrap",
                            nzFooter: null
                        });
                        e.afterOpen.pipe(Object(f.b)(this)).subscribe( () => {
                            e.getContentComponent().onSendFeedback.pipe(Object(f.b)(this)).subscribe(e => this.sendFeedback(null == e ? void 0 : e.comment, null == e ? void 0 : e.reasons))
                        }
                        )
                    }
                }
                sendFeedback(e="", t=[]) {
                    this.feedbackService.sendFeedback({
                        taskId: this.taskId,
                        driverId: this.driverId,
                        rating: this.rating,
                        comment: e,
                        reasons: t
                    }).pipe(Object(f.b)(this)).subscribe(e => {
                        this.isRatingSaved$.next(!0),
                        this.sessionStorageService.set(this.ratingStorageKey, this.rating),
                        this.notificationsService.success("\u041e\u0446\u0435\u043d\u043a\u0430 \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0430")
                    }
                    )
                }
            }
            ;
            return e.\u0275fac = function(t) {
                return new (t || e)(x.Wb(V),x.Wb(j.d),x.Wb(u.d),x.Wb(k.a),x.Wb(P.a))
            }
            ,
            e.\u0275cmp = x.Qb({
                type: e,
                selectors: [["app-driver-feedback"]],
                inputs: {
                    taskId: "taskId",
                    driverId: "driverId"
                },
                decls: 6,
                vars: 12,
                consts: [[1, "feedback"], ["nzTooltipPlacement", "right", 3, "nz-tooltip", "nzTooltipMouseEnterDelay", "nzDisabled", "ngModel", "ngModelChange"], ["nz-button", "", "nzType", "link", "class", "feedback__button", 3, "click", 4, "ngIf"], ["class", "feedback__label", 4, "ngIf"], ["nz-button", "", "nzType", "link", 1, "feedback__button", 3, "click"], [1, "feedback__label"]],
                template: function(e, t) {
                    1 & e && (x.cc(0, "div", 0),
                    x.cc(1, "nz-rate", 1),
                    x.kc("ngModelChange", (function(e) {
                        return t.rating = e
                    }
                    )),
                    x.pc(2, "async"),
                    x.bc(),
                    x.Qc(3, G, 2, 1, "button", 2),
                    x.pc(4, "async"),
                    x.Qc(5, D, 2, 0, "div", 3),
                    x.bc()),
                    2 & e && (x.Gb(1),
                    x.Ib("rate-" + t.rating),
                    x.wc("nz-tooltip", t.isMobile ? void 0 : "\u041e\u0446\u0435\u043d\u0438\u0442\u044c \u043f\u043e\u0441\u0442\u0430\u0432\u0449\u0438\u043a\u0430")("nzTooltipMouseEnterDelay", 2)("nzDisabled", x.qc(2, 8, t.isRatingSaved$))("ngModel", t.rating),
                    x.Gb(2),
                    x.wc("ngIf", !x.qc(4, 10, t.isRatingSaved$) && t.rating),
                    x.Gb(2),
                    x.wc("ngIf", t.isMobile && !t.rating))
                },
                directives: [T.a, h.d, r.p, r.s, o.o, a.a, M.a],
                pipes: [o.b],
                styles: [".rate-1[_ngcontent-%COMP%]     .ant-rate-star:nth-child(-n+1), .rate-2[_ngcontent-%COMP%]     .ant-rate-star:nth-child(-n+2), .rate-3[_ngcontent-%COMP%]     .ant-rate-star:nth-child(-n+3), .rate-4[_ngcontent-%COMP%]     .ant-rate-star:nth-child(-n+4), .rate-5[_ngcontent-%COMP%]     .ant-rate-star:nth-child(-n+5){color:#965eeb}.feedback[_ngcontent-%COMP%]{display:flex;align-items:center;height:48px;font-family:Open Sans,sans-serif}.feedback[_ngcontent-%COMP%] > nz-rate[_ngcontent-%COMP%]  .ant-rate{color:rgba(150,94,235,.5)}.feedback__button[_ngcontent-%COMP%]{padding:0 16px;font-size:16px;font-weight:600;line-height:24px;color:#965eeb}.feedback__label[_ngcontent-%COMP%]{margin-left:auto;font-size:13px;font-weight:400;line-height:16px;color:rgba(0,0,0,.52)}@media (max-width:1023px){.feedback__button[_ngcontent-%COMP%]{margin-left:auto;padding-right:0;font-size:13px;font-weight:600;line-height:16px;color:#965eeb}}"],
                changeDetection: 0
            }),
            Object(C.c)([Object(g.a)({
                width: 1024
            }), Object(C.f)("design:type", Object)], e.prototype, "isMobile", void 0),
            e = Object(C.c)([Object(f.a)()], e),
            e
        }
        )();
        function U(e, t) {
            1 & e && x.Xb(0, "i", 23)
        }
        function A(e, t) {
            1 & e && (x.cc(0, "span"),
            x.Sc(1, " \u041f\u0440\u0438\u043d\u044f\u0442\u044c \u043a\u043e\u0440\u043e\u0431\u043a\u0443 "),
            x.bc())
        }
        function N(e, t) {
            1 & e && x.Xb(0, "i", 24)
        }
        function $(e, t) {
            if (1 & e && (x.cc(0, "div", 28),
            x.Xb(1, "app-driver-feedback", 29),
            x.bc()),
            2 & e) {
                const e = x.oc().$implicit;
                x.Gb(1),
                x.wc("taskId", e.taskId)("driverId", e.driverId)
            }
        }
        function E(e, t) {
            1 & e && x.Xb(0, "i", 38)
        }
        function X(e, t) {
            1 & e && x.Xb(0, "i", 39)
        }
        function Q(e, t) {
            if (1 & e && (x.cc(0, "sup"),
            x.cc(1, "i"),
            x.Sc(2),
            x.bc(),
            x.bc()),
            2 & e) {
                const e = x.oc(2).$implicit;
                x.Gb(2),
                x.Tc(e.employeeId)
            }
        }
        function W(e, t) {
            if (1 & e) {
                const e = x.dc();
                x.ac(0),
                x.cc(1, "div", 40),
                x.Sc(2),
                x.pc(3, "date"),
                x.bc(),
                x.cc(4, "div", 41),
                x.Xb(5, "span", 36),
                x.Qc(6, Q, 3, 1, "sup", 37),
                x.bc(),
                x.cc(7, "button", 42),
                x.kc("click", (function() {
                    x.Ic(e);
                    const t = x.oc().$implicit;
                    return x.oc(2).handleDropBox(t.boxName)
                }
                )),
                x.Sc(8, " \u0420\u0430\u0437\u0431\u043e\u0440 \u043e\u043a\u043e\u043d\u0447\u0435\u043d "),
                x.bc(),
                x.Zb()
            }
            if (2 & e) {
                const e = x.oc().$implicit
                  , t = x.oc(2);
                x.Gb(2),
                x.Tc(x.rc(3, 3, e.acceptDt, "dd.MM.yyyy HH:mm:ss")),
                x.Gb(3),
                x.wc("innerHTML", t.handleHightLightChar(e.employeeName), x.Jc),
                x.Gb(1),
                x.wc("ngIf", e.employeeId)
            }
        }
        function q(e, t) {
            if (1 & e && (x.cc(0, "div", 30),
            x.cc(1, "div", 31),
            x.cc(2, "div", 32),
            x.Qc(3, E, 1, 0, "i", 33),
            x.Qc(4, X, 1, 0, "ng-template", null, 34, x.Rc),
            x.bc(),
            x.cc(6, "div", 35),
            x.Xb(7, "span", 36),
            x.bc(),
            x.bc(),
            x.Qc(8, W, 9, 6, "ng-container", 37),
            x.bc()),
            2 & e) {
                const e = t.$implicit
                  , n = x.Gc(5)
                  , o = x.oc(2);
                x.Gb(3),
                x.wc("ngIf", e.isAccepted)("ngIfElse", n),
                x.Gb(4),
                x.wc("innerHTML", o.handleHightLightChar(e.boxName), x.Jc),
                x.Gb(1),
                x.wc("ngIf", e.isAccepted)
            }
        }
        function K(e, t) {
            if (1 & e && (x.cc(0, "div", 25),
            x.Qc(1, $, 2, 2, "div", 26),
            x.Qc(2, q, 9, 4, "div", 27),
            x.bc()),
            2 & e) {
                const e = t.$implicit;
                x.Gb(1),
                x.wc("ngIf", e.taskId && e.driverId),
                x.Gb(1),
                x.wc("ngForOf", e.items)
            }
        }
        function Y(e, t) {
            if (1 & e && (x.cc(0, "div", 44),
            x.Xb(1, "i", 45),
            x.cc(2, "span"),
            x.Sc(3, " \u041a\u043e\u0440\u043e\u0431\u043a\u0430 \u043f\u0440\u0438\u043d\u044f\u0442\u0430 "),
            x.bc(),
            x.cc(4, "span"),
            x.Sc(5),
            x.bc(),
            x.bc()),
            2 & e) {
                const e = x.oc(2);
                x.Gb(5),
                x.Tc(e.lastAcceptedBox)
            }
        }
        function J(e, t) {
            if (1 & e && x.Qc(0, Y, 6, 1, "div", 43),
            2 & e) {
                const e = x.oc();
                x.wc("ngIf", e.lastAcceptedBox)
            }
        }
        let ee = ( () => {
            let e = class {
                constructor(e, t) {
                    this._boxService = e,
                    this._cDRef = t,
                    this.isMobile = !1,
                    this.allBoxes = [],
                    this.acceptedCounter = 0,
                    this.onRefreshBoxes = new x.n,
                    this.onShowError = new x.n,
                    this.onPlayVoice = new x.n,
                    this.onDropBox = new x.n,
                    this.filteredBoxGroups = [],
                    this.isScanOpen = !1,
                    this.isScanStart = !1,
                    this.manualScanValue = "",
                    this.scanValue = "",
                    this.searchBox = "",
                    this.lastAcceptedBox = ""
                }
                ngOnInit() {
                    this.getScanerObserver()
                }
                ngOnChanges(e) {
                    e.allBoxes && this.allBoxes && (this.filteredBoxGroups = this.groupAndSortBoxes(this.allBoxes))
                }
                handleScan(e) {
                    var t, n;
                    const o = null === (t = this.getBoxIdByShk(e)) || void 0 === t ? void 0 : t.toString();
                    if (o) {
                        const e = null === (n = this.allBoxes) || void 0 === n ? void 0 : n.find(e => e.isAccepted && e.boxName === o);
                        if (e)
                            return this.handleDropBox(e.boxName),
                            this.manualScanValue = "",
                            void (this.scanValue = "")
                    }
                    this.acceptBox(e)
                }
                acceptBox(e) {
                    e && (this.isScanStart = !1,
                    this._boxService.acceptBox(e).pipe(Object(f.b)(this), Object(b.a)(t => {
                        if (this.manualScanValue = "",
                        this.scanValue = "",
                        t.error)
                            return this.onShowError.emit({
                                msg: t.error.message
                            }),
                            void (this.isScanStart = !0);
                        this.onRefreshBoxes.emit(t),
                        this.lastAcceptedBox = e.replace(/\D/g, "");
                        const n = t.some(e => e.isForSupplier && e.isNew);
                        this.onPlayVoice.emit(n ? "supplier_box.mp3" : "boxAccepted.mp3"),
                        this.isScanStart = !0
                    }
                    )).subscribe())
                }
                handleFilterBox() {
                    this.filteredBoxGroups = this.groupAndSortBoxes(this.allBoxes.filter(e => e.boxName.includes(this.searchBox) || !!e.employeeName && e.employeeName.toLowerCase().includes(this.searchBox.toLowerCase())))
                }
                handleDropBox(e) {
                    this.onDropBox.emit(e);
                    const t = this.filteredBoxGroups.reduce( (e, t) => (e.push(...t.items),
                    e), []).filter(t => t.boxName !== e);
                    this.onRefreshBoxes.emit(t)
                }
                handleCheckCapsLock(e) {
                    if (Object(S.a)(e))
                        return this.manualScanValue = "",
                        this.onShowError.emit({
                            msg: "\u0412\u044b\u043a\u043b\u044e\u0447\u0438\u0442\u0435 CapsLock!",
                            isOnlyErr: !0
                        }),
                        void e.preventDefault()
                }
                handleHightLightChar(e) {
                    if (!this.searchBox)
                        return e;
                    const t = new RegExp(this.searchBox,"ig")
                      , n = e.match(t);
                    return n ? e.split(t).map( (e, t, o) => t < o.length - 1 ? `<span>${e}<span class="hightlight">${n.shift()}</span></span>` : e).join("") : e
                }
                handleOpenMobileScanner() {
                    this.isScanOpen = !0,
                    this.isScanStart = !0
                }
                getScanerObserver() {
                    this.isMobile || Object(y.a)(document.querySelector("body"), "keydown").pipe(Object(f.b)(this)).subscribe( ({key: e}) => {
                        1 === e.length && (this.scanValue = this.scanValue + e),
                        "Enter" === e && this.handleScan(this.manualScanValue ? this.manualScanValue : this.scanValue)
                    }
                    )
                }
                groupAndSortBoxes(e) {
                    const t = [];
                    return null == e || e.forEach(e => {
                        const n = ( (e, n) => {
                            const o = t.findIndex(t => t.taskId === e && t.driverId === n);
                            return -1 !== o ? o : (t.push({
                                taskId: e,
                                driverId: n,
                                items: [],
                                rating: 0
                            }),
                            t.length - 1)
                        }
                        )(e.taskId && e.driverId ? e.taskId : null, e.taskId && e.driverId ? e.driverId : null);
                        t[n].items.push(e)
                    }
                    ),
                    t.sort( (e, t) => !e.driverId && t.driverId ? -1 : e.driverId && !t.driverId ? 1 : 0),
                    t
                }
                getBoxIdByShk(e) {
                    const t = [/^TRBX(\d{9,10})$/i, /^\$\d+:\d+:(\d{9,10}):\d{1,7}$/i]
                      , n = t.findIndex(t => t.test(e));
                    if (-1 !== n) {
                        const o = e.match(t[n]);
                        if (null == o ? void 0 : o[1])
                            return +o[1]
                    }
                    return null
                }
            }
            ;
            return e.\u0275fac = function(t) {
                return new (t || e)(x.Wb(v.a),x.Wb(x.h))
            }
            ,
            e.\u0275cmp = x.Qb({
                type: e,
                selectors: [["app-acceptance-box"]],
                inputs: {
                    isMobile: "isMobile",
                    allBoxes: "allBoxes",
                    acceptedCounter: "acceptedCounter"
                },
                outputs: {
                    onRefreshBoxes: "onRefreshBoxes",
                    onShowError: "onShowError",
                    onPlayVoice: "onPlayVoice",
                    onDropBox: "onDropBox"
                },
                features: [x.Eb],
                decls: 44,
                vars: 16,
                consts: [[1, "acceptance-box"], [1, "acceptance-box__manual"], [1, "acceptance-box__manual_info"], [1, "acceptance-box__manual_input"], ["nz-input", "", "nzSize", "large", "placeholder", "\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u0435 \u043a\u0443\u0440\u0441\u043e\u0440 \u0432 \u043f\u043e\u043b\u0435 \u0432\u0432\u043e\u0434\u0430", 3, "ngModel", "keydown", "ngModelChange"], ["nz-button", "", "nzType", "primary", 3, "disabled", "click"], ["nz-icon", "", "nzType", "arrow-right", 4, "ngIf", "ngIfElse"], ["desktopBtn", ""], [1, "acceptance-box__header"], [1, "acceptance-box__header_counters"], [1, "counter"], [1, "red"], [1, "acceptance-box__header_search"], [3, "nzSuffix"], ["nz-input", "", "placeholder", "\u041f\u043e\u0438\u0441\u043a", 3, "ngModel", "ngModelChange"], ["loupeIcon", ""], [1, "acceptance-box__list"], [1, "acceptance-box__list_item"], ["class", "box__group", 4, "ngFor", "ngForOf"], ["nz-button", "", "nzType", "primary", "nzSize", "large", 1, "acceptance-box__btn", 3, "click"], ["nz-icon", "", "nzType", "scan"], [3, "isScanOpen", "isScanStart", "isCloseAfterScan", "scanBlock", "isNeedManualInput", "isScanOpenChange", "isScanStartChange", "onScanSuccess"], ["lastAcceptedBoxTemp", ""], ["nz-icon", "", "nzType", "arrow-right"], ["nz-icon", "", "nzType", "wb-loupe"], [1, "box__group"], ["style", "margin-top: 40px", "class", "box__feedback", 4, "ngIf"], ["class", "box", 4, "ngFor", "ngForOf"], [1, "box__feedback", 2, "margin-top", "40px"], [3, "taskId", "driverId"], [1, "box"], [1, "box__number"], [1, "box__number_icon"], ["class", "check-icon", "nz-icon", "", "nzType", "wb-circle-check", "nzTheme", "fill", 4, "ngIf", "ngIfElse"], ["boxIcon", ""], [1, "box__number_info"], [3, "innerHTML"], [4, "ngIf"], ["nz-icon", "", "nzType", "wb-circle-check", "nzTheme", "fill", 1, "check-icon"], ["nz-icon", "", "nzType", "wb-fill-box", "nzTheme", "fill", 1, "box-icon"], [1, "box__date"], [1, "box__fio"], ["nz-button", "", "nzType", "primary", "nzGhost", "", 3, "click"], ["class", "last", 4, "ngIf"], [1, "last"], ["nz-icon", "", "nzType", "wb-circle-check", "nzTheme", "fill"]],
                template: function(e, t) {
                    if (1 & e && (x.cc(0, "section", 0),
                    x.cc(1, "div", 1),
                    x.cc(2, "div", 2),
                    x.Sc(3, " \u0414\u043b\u044f \u043f\u0440\u0438\u0435\u043c\u0430 \u043e\u0442\u0441\u043a\u0430\u043d\u0438\u0440\u0443\u0439\u0442\u0435 "),
                    x.cc(4, "b"),
                    x.Sc(5, "\u0431\u0430\u0440\u043a\u043e\u0434"),
                    x.bc(),
                    x.Sc(6, " \u0438\u043b\u0438 "),
                    x.cc(7, "b"),
                    x.Sc(8, "QR-\u043a\u043e\u0434"),
                    x.bc(),
                    x.Sc(9, " \u0442\u0430\u0440\u044b "),
                    x.bc(),
                    x.cc(10, "div", 3),
                    x.cc(11, "input", 4),
                    x.kc("keydown", (function(e) {
                        return t.handleCheckCapsLock(e)
                    }
                    ))("ngModelChange", (function(e) {
                        return t.manualScanValue = e
                    }
                    )),
                    x.bc(),
                    x.cc(12, "button", 5),
                    x.kc("click", (function() {
                        return t.handleScan(t.manualScanValue)
                    }
                    )),
                    x.cc(13, "span"),
                    x.Qc(14, U, 1, 0, "i", 6),
                    x.bc(),
                    x.Qc(15, A, 2, 0, "ng-template", null, 7, x.Rc),
                    x.bc(),
                    x.bc(),
                    x.bc(),
                    x.cc(17, "div", 8),
                    x.cc(18, "div", 9),
                    x.cc(19, "div", 10),
                    x.cc(20, "span"),
                    x.Sc(21, " \u041f\u0440\u0438\u043d\u044f\u0442\u043e "),
                    x.bc(),
                    x.cc(22, "span"),
                    x.Sc(23),
                    x.bc(),
                    x.bc(),
                    x.cc(24, "div", 10),
                    x.cc(25, "span"),
                    x.Sc(26, " \u041d\u0435 \u043f\u0440\u0438\u043d\u044f\u0442\u043e "),
                    x.bc(),
                    x.cc(27, "span", 11),
                    x.Sc(28),
                    x.bc(),
                    x.bc(),
                    x.bc(),
                    x.cc(29, "div", 12),
                    x.cc(30, "nz-input-group", 13),
                    x.cc(31, "input", 14),
                    x.kc("ngModelChange", (function(e) {
                        return t.searchBox = e
                    }
                    ))("ngModelChange", (function() {
                        return t.handleFilterBox()
                    }
                    )),
                    x.bc(),
                    x.bc(),
                    x.Qc(32, N, 1, 0, "ng-template", null, 15, x.Rc),
                    x.bc(),
                    x.bc(),
                    x.cc(34, "div", 16),
                    x.cc(35, "div", 17),
                    x.Qc(36, K, 3, 2, "div", 18),
                    x.bc(),
                    x.bc(),
                    x.cc(37, "button", 19),
                    x.kc("click", (function() {
                        return t.handleOpenMobileScanner()
                    }
                    )),
                    x.cc(38, "span"),
                    x.Sc(39, " \u0421\u043a\u0430\u043d\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043a\u043e\u0440\u043e\u0431\u043a\u0438 "),
                    x.bc(),
                    x.Xb(40, "i", 20),
                    x.bc(),
                    x.cc(41, "app-barcode-scanner", 21),
                    x.kc("isScanOpenChange", (function(e) {
                        return t.isScanOpen = e
                    }
                    ))("isScanStartChange", (function(e) {
                        return t.isScanStart = e
                    }
                    ))("onScanSuccess", (function(e) {
                        return t.handleScan(e)
                    }
                    )),
                    x.bc(),
                    x.bc(),
                    x.Qc(42, J, 1, 1, "ng-template", null, 22, x.Rc)),
                    2 & e) {
                        const e = x.Gc(16)
                          , n = x.Gc(33)
                          , o = x.Gc(43);
                        x.Gb(11),
                        x.wc("ngModel", t.manualScanValue),
                        x.Gb(1),
                        x.wc("disabled", !t.manualScanValue),
                        x.Gb(2),
                        x.wc("ngIf", t.isMobile)("ngIfElse", e),
                        x.Gb(8),
                        x.Mb("primary", t.acceptedCounter),
                        x.Gb(1),
                        x.Tc(t.acceptedCounter),
                        x.Gb(5),
                        x.Tc(t.allBoxes.length - t.acceptedCounter),
                        x.Gb(2),
                        x.wc("nzSuffix", n),
                        x.Gb(1),
                        x.wc("ngModel", t.searchBox),
                        x.Gb(5),
                        x.wc("ngForOf", t.filteredBoxGroups),
                        x.Gb(5),
                        x.wc("isScanOpen", t.isScanOpen)("isScanStart", t.isScanStart)("isCloseAfterScan", !1)("scanBlock", o)("isNeedManualInput", !1)
                    }
                },
                directives: [c.a, r.d, r.p, r.s, a.a, O.a, M.a, o.o, c.b, c.c, o.n, i.b, L.a, R],
                pipes: [o.e],
                styles: [".acceptance-box__manual[_ngcontent-%COMP%]{margin-bottom:36px}.acceptance-box__manual_info[_ngcontent-%COMP%]{font-size:16px;line-height:24px;color:rgba(0,0,0,.8980392156862745);margin-bottom:12px}.acceptance-box__manual_input[_ngcontent-%COMP%]{position:relative}.acceptance-box__manual_input[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{position:absolute;top:4px;right:4px}.acceptance-box__header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;padding:12px 16px 12px 24px;background:#fafafa;border-radius:4px;font-size:20px}.acceptance-box__header_counters[_ngcontent-%COMP%]{display:flex}.acceptance-box__header_counters[_ngcontent-%COMP%]   .counter[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{white-space:nowrap}.acceptance-box__header_counters[_ngcontent-%COMP%]   .counter[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]:last-child{font-weight:600;margin-left:8px}.acceptance-box__header_counters[_ngcontent-%COMP%]   .counter[_ngcontent-%COMP%] > span.primary[_ngcontent-%COMP%]{color:#965eeb}.acceptance-box__header_counters[_ngcontent-%COMP%]   .counter[_ngcontent-%COMP%] > span.red[_ngcontent-%COMP%]{color:#ff4d4f}.acceptance-box__header_counters[_ngcontent-%COMP%]   .counter[_ngcontent-%COMP%]:last-child{margin-left:40px;padding-left:40px;border-left:1px solid rgba(0,0,0,.0784313725490196)}.acceptance-box__header_search[_ngcontent-%COMP%]{width:100%;max-width:380px;margin-left:24px}.acceptance-box__header_search[_ngcontent-%COMP%]   nz-input-group[_ngcontent-%COMP%]{border-radius:4px}.acceptance-box__header_search[_ngcontent-%COMP%]   nz-input-group[_ngcontent-%COMP%]     span{font-size:20px;color:#dedede}.acceptance-box__list[_ngcontent-%COMP%]{margin-top:12px}.acceptance-box__list_item[_ngcontent-%COMP%]{padding:0 16px}.acceptance-box__list_item[_ngcontent-%COMP%]:not(:first-child){margin-top:40px}.acceptance-box__list_item[_ngcontent-%COMP%]   .rating[_ngcontent-%COMP%]{padding:12px 0}.acceptance-box__list_item[_ngcontent-%COMP%]   .rating__stars[_ngcontent-%COMP%]     .ant-rate{color:#965eeb}.acceptance-box__list_item[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]{display:flex;align-items:center;padding:12px 0;column-gap:44px;font-size:16px;border-bottom:1px solid #f2f2f2}.acceptance-box__list_item[_ngcontent-%COMP%]   .box__number[_ngcontent-%COMP%]{display:flex;align-items:center}.acceptance-box__list_item[_ngcontent-%COMP%]   .box__number_icon[_ngcontent-%COMP%]{height:52px;width:52px;border-radius:4px;background:#fafafa;display:flex;justify-content:center;align-items:center;margin-right:20px}.acceptance-box__list_item[_ngcontent-%COMP%]   .box__number_icon[_ngcontent-%COMP%]   .box-icon[_ngcontent-%COMP%]{font-size:32px;color:grey}.acceptance-box__list_item[_ngcontent-%COMP%]   .box__number_icon[_ngcontent-%COMP%]   .check-icon[_ngcontent-%COMP%]{font-size:20px;color:#965eeb}.acceptance-box__list_item[_ngcontent-%COMP%]   .box__number_info[_ngcontent-%COMP%]{min-width:112px}.acceptance-box__list_item[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{white-space:nowrap;margin-left:auto;border-radius:4px;height:36px}.acceptance-box__btn[_ngcontent-%COMP%]{display:none;width:calc(100% - 32px);margin:0 auto;position:fixed;bottom:104px;left:16px}.acceptance-box__btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:24px;line-height:0}.acceptance-box[_ngcontent-%COMP%]     .hightlight{color:#965eeb}.last[_ngcontent-%COMP%]{display:flex;align-items:center;column-gap:8px;padding:14px 12px;margin:0 30px;border-radius:4px;background:rgba(0,0,0,.2784313725490196)}.last[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:20px;color:#965eeb}.last[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#fff;font-size:14px;line-height:20px}.last[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child{font-size:16px;font-weight:600}@media (max-width:1023px){.acceptance-box[_ngcontent-%COMP%]{padding-bottom:61px}.acceptance-box__manual[_ngcontent-%COMP%]{border-bottom:8px solid rgba(0,0,0,.0392156862745098);margin:0;padding:0 16px 24px}.acceptance-box__manual_info[_ngcontent-%COMP%]{font-size:14px}.acceptance-box__manual_input[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{top:0;right:0;height:40px;width:40px;padding:0}.acceptance-box__manual_input[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center}.acceptance-box__manual_input[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:18px}.acceptance-box__header[_ngcontent-%COMP%]{flex-direction:column;align-items:stretch;background:none;padding:16px 16px 24px;border-bottom:8px solid rgba(0,0,0,.0392156862745098);font-size:16px;line-height:24px}.acceptance-box__header_counters[_ngcontent-%COMP%]   .counter[_ngcontent-%COMP%]:last-child{margin-left:32px;padding-left:0;border:none}.acceptance-box__header_search[_ngcontent-%COMP%]{margin:18px 0 0;max-width:none}.acceptance-box__list[_ngcontent-%COMP%]{margin-top:0}.acceptance-box__list_item[_ngcontent-%COMP%]{padding:0}.acceptance-box__list_item[_ngcontent-%COMP%]:not(:first-child){margin-top:0;border-top:28px solid rgba(0,0,0,.0392156862745098)}.acceptance-box__list_item[_ngcontent-%COMP%]   .rating[_ngcontent-%COMP%]{padding:16px;border-bottom:1px solid rgba(0,0,0,.0392156862745098)}.acceptance-box__list_item[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]{flex-wrap:wrap;row-gap:12px;padding:16px;border-bottom:8px solid rgba(0,0,0,.0392156862745098)}.acceptance-box__list_item[_ngcontent-%COMP%]   .box__feedback[_ngcontent-%COMP%]{padding:4px 16px;border-bottom:1px solid #f2f2f2}.acceptance-box__list_item[_ngcontent-%COMP%]   .box__number[_ngcontent-%COMP%]{display:flex;align-items:center}.acceptance-box__list_item[_ngcontent-%COMP%]   .box__number_icon[_ngcontent-%COMP%]{height:36px;width:36px;margin-right:8px}.acceptance-box__list_item[_ngcontent-%COMP%]   .box__number_icon[_ngcontent-%COMP%]   .box-icon[_ngcontent-%COMP%]{font-size:22px}.acceptance-box__list_item[_ngcontent-%COMP%]   .box__number_icon[_ngcontent-%COMP%]   .check-icon[_ngcontent-%COMP%]{font-size:14px}.acceptance-box__list_item[_ngcontent-%COMP%]   .box__date[_ngcontent-%COMP%]{width:100%;order:-1;font-size:14px}.acceptance-box__list_item[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:100%}.acceptance-box__btn[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center}}"],
                changeDetection: 0
            }),
            e = Object(C.c)([Object(f.a)()], e),
            e
        }
        )();
        var te = n("POlk")
          , ne = n("Ek/g")
          , oe = n("3G0t")
          , re = n("rVY3");
        function ie(e, t) {
            if (1 & e) {
                const e = x.dc();
                x.cc(0, "div", 9),
                x.cc(1, "div"),
                x.Sc(2),
                x.bc(),
                x.cc(3, "button", 10),
                x.kc("click", (function() {
                    x.Ic(e);
                    const t = x.oc().$implicit;
                    return x.oc(2).onDropBox.emit(t.boxName)
                }
                )),
                x.Sc(4, " \u0420\u0430\u0437\u0431\u043e\u0440 \u043e\u043a\u043e\u043d\u0447\u0435\u043d "),
                x.bc(),
                x.bc()
            }
            if (2 & e) {
                const e = x.oc().$implicit;
                x.Gb(2),
                x.Uc(" ", e.boxName, "")
            }
        }
        function ce(e, t) {
            if (1 & e && (x.ac(0),
            x.Qc(1, ie, 5, 1, "div", 8),
            x.Zb()),
            2 & e) {
                const e = t.$implicit
                  , n = x.oc(2);
                x.Gb(1),
                x.wc("ngIf", e.boxName !== n.currentBox)
            }
        }
        function se(e, t) {
            1 & e && x.Yb(0)
        }
        const ae = function(e) {
            return {
                $implicit: e
            }
        };
        function le(e, t) {
            if (1 & e) {
                const e = x.dc();
                x.cc(0, "div", 16),
                x.kc("click", (function(t) {
                    return x.Ic(e),
                    t.stopPropagation()
                }
                )),
                x.Qc(1, se, 1, 0, "ng-container", 17),
                x.bc()
            }
            if (2 & e) {
                const e = x.oc(3)
                  , t = x.Gc(4);
                x.Gb(1),
                x.wc("ngTemplateOutlet", t)("ngTemplateOutletContext", x.Bc(2, ae, e.currentBox))
            }
        }
        function ue(e, t) {
            if (1 & e && (x.cc(0, "div", 11),
            x.cc(1, "div", 12),
            x.cc(2, "span"),
            x.Sc(3, " \u041a\u043e\u0440\u043e\u0431\u043e\u043a \u043a \u0440\u0430\u0441\u043a\u043b\u0430\u0434\u043a\u0435 "),
            x.bc(),
            x.cc(4, "span", 13),
            x.Sc(5),
            x.bc(),
            x.bc(),
            x.Qc(6, le, 2, 4, "div", 14),
            x.Xb(7, "i", 15),
            x.bc()),
            2 & e) {
                x.oc();
                const e = x.Gc(2)
                  , t = x.oc();
                x.Gb(4),
                x.Mb("primary-color", t.boxes.length),
                x.Gb(1),
                x.Tc(t.boxes.length),
                x.Gb(1),
                x.wc("ngIf", t.currentBox),
                x.Gb(1),
                x.wc("nzRotate", e.nzActive ? 180 : 0)
            }
        }
        function de(e, t) {
            if (1 & e && (x.cc(0, "nz-collapse", 3),
            x.cc(1, "nz-collapse-panel", 4, 5),
            x.Qc(3, ce, 2, 1, "ng-container", 6),
            x.Qc(4, ue, 8, 5, "ng-template", null, 7, x.Rc),
            x.bc(),
            x.bc()),
            2 & e) {
                const e = x.Gc(5)
                  , t = x.oc();
                x.wc("nzBordered", !1),
                x.Gb(1),
                x.wc("nzHeader", e)("nzShowArrow", !1),
                x.Gb(2),
                x.wc("ngForOf", t.boxes)
            }
        }
        function he(e, t) {
            1 & e && x.Yb(0)
        }
        function pe(e, t) {
            if (1 & e && (x.cc(0, "div", 25),
            x.Qc(1, he, 1, 0, "ng-container", 17),
            x.bc()),
            2 & e) {
                const e = x.oc(2)
                  , t = x.Gc(4);
                x.Gb(1),
                x.wc("ngTemplateOutlet", t)("ngTemplateOutletContext", x.Bc(2, ae, e.currentBox))
            }
        }
        function Ce(e, t) {
            1 & e && x.Yb(0)
        }
        function ge(e, t) {
            if (1 & e && (x.cc(0, "div", 26),
            x.Qc(1, Ce, 1, 0, "ng-container", 17),
            x.bc()),
            2 & e) {
                const e = x.oc(2)
                  , t = x.Gc(4);
                x.Gb(1),
                x.wc("ngTemplateOutlet", t)("ngTemplateOutletContext", x.Bc(2, ae, e.currentBox))
            }
        }
        function fe(e, t) {
            if (1 & e) {
                const e = x.dc();
                x.cc(0, "div", 28),
                x.kc("click", (function() {
                    x.Ic(e);
                    const t = x.oc().$implicit;
                    return x.oc(2).onDropBox.emit(t.boxName)
                }
                )),
                x.cc(1, "span"),
                x.Sc(2),
                x.bc(),
                x.cc(3, "span"),
                x.Sc(4, " \u0420\u0430\u0437\u0431\u043e\u0440 \u043e\u043a\u043e\u043d\u0447\u0435\u043d "),
                x.bc(),
                x.bc()
            }
            if (2 & e) {
                const e = x.oc().$implicit;
                x.Gb(2),
                x.Tc(e.boxName)
            }
        }
        function be(e, t) {
            if (1 & e && (x.ac(0),
            x.Qc(1, fe, 5, 1, "div", 27),
            x.Zb()),
            2 & e) {
                const e = t.$implicit
                  , n = x.oc(2);
                x.Gb(1),
                x.wc("ngIf", e.boxName !== n.currentBox)
            }
        }
        function me(e, t) {
            if (1 & e) {
                const e = x.dc();
                x.cc(0, "div", 18),
                x.Qc(1, pe, 2, 4, "div", 19),
                x.cc(2, "div", 20),
                x.kc("click", (function() {
                    return x.Ic(e),
                    x.oc().handleControlDrawer()
                }
                )),
                x.cc(3, "div", 21),
                x.Sc(4, " \u041a\u043e\u0440\u043e\u0431\u043a\u0438 \u0434\u043b\u044f \u0440\u0430\u0437\u0431\u043e\u0440\u0430 "),
                x.cc(5, "span", 13),
                x.Sc(6),
                x.bc(),
                x.bc(),
                x.Xb(7, "i", 15),
                x.bc(),
                x.cc(8, "nz-drawer", 22),
                x.kc("nzOnClose", (function() {
                    return x.Ic(e),
                    x.oc().handleControlDrawer()
                }
                )),
                x.cc(9, "div", 23),
                x.cc(10, "h3"),
                x.Sc(11, " \u041a\u043e\u0440\u043e\u0431\u043a\u0438 \u0434\u043b\u044f \u0440\u0430\u0437\u0431\u043e\u0440\u0430 "),
                x.bc(),
                x.Qc(12, ge, 2, 4, "div", 24),
                x.Qc(13, be, 2, 1, "ng-container", 6),
                x.bc(),
                x.bc(),
                x.bc()
            }
            if (2 & e) {
                const e = x.oc();
                x.Gb(1),
                x.wc("ngIf", e.currentBox),
                x.Gb(5),
                x.Tc(e.boxes.length),
                x.Gb(1),
                x.wc("nzRotate", e.isOpenListBox ? 180 : 0),
                x.Gb(1),
                x.wc("nzVisible", e.isOpenListBox),
                x.Gb(4),
                x.wc("ngIf", e.currentBox),
                x.Gb(1),
                x.wc("ngForOf", e.boxes)
            }
        }
        function ve(e, t) {
            if (1 & e) {
                const e = x.dc();
                x.cc(0, "div", 29),
                x.cc(1, "div", 30),
                x.cc(2, "div"),
                x.Sc(3, " \u0422\u0435\u043a\u0443\u0449\u0430\u044f \u043a\u043e\u0440\u043e\u0431\u043a\u0430 "),
                x.bc(),
                x.cc(4, "div", 13),
                x.Sc(5),
                x.bc(),
                x.bc(),
                x.cc(6, "button", 31),
                x.kc("click", (function() {
                    x.Ic(e);
                    const n = t.$implicit;
                    return x.oc().onDropBox.emit(n)
                }
                )),
                x.Sc(7, " \u0420\u0430\u0437\u0431\u043e\u0440 \u043e\u043a\u043e\u043d\u0447\u0435\u043d "),
                x.bc(),
                x.bc()
            }
            if (2 & e) {
                const e = t.$implicit;
                x.Gb(5),
                x.Tc(e)
            }
        }
        let ke = ( () => {
            class e {
                constructor() {
                    this.isMobile = !1,
                    this.boxes = [],
                    this.currentBox = "",
                    this.onDropBox = new x.n,
                    this.isOpenListBox = !1
                }
                handleControlDrawer() {
                    this.isOpenListBox = !this.isOpenListBox
                }
            }
            return e.\u0275fac = function(t) {
                return new (t || e)
            }
            ,
            e.\u0275cmp = x.Qb({
                type: e,
                selectors: [["acceptance-wavebreaker-boxes"]],
                inputs: {
                    isMobile: "isMobile",
                    boxes: "boxes",
                    currentBox: "currentBox"
                },
                outputs: {
                    onDropBox: "onDropBox"
                },
                decls: 5,
                vars: 2,
                consts: [["class", "list", 3, "nzBordered", 4, "ngIf", "ngIfElse"], ["mobileTemplate", ""], ["currentBoxTemp", ""], [1, "list", 3, "nzBordered"], [3, "nzHeader", "nzShowArrow"], ["panel", ""], [4, "ngFor", "ngForOf"], ["header", ""], ["class", "box", 4, "ngIf"], [1, "box"], ["nz-button", "", "nzType", "primary", "nzGhost", "", 3, "click"], [1, "list__header"], [1, "list__header_counter"], [1, "bold"], ["class", "box", 3, "click", 4, "ngIf"], ["nz-icon", "", "nzType", "wb-down", 3, "nzRotate"], [1, "box", 3, "click"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "list-mobile"], ["class", "list-mobile__wrap-current-box", 4, "ngIf"], [1, "list-mobile__drawer-btn", 3, "click"], [1, "list-mobile__drawer-btn_counter"], ["nzHeight", "fit-content", "nzPlacement", "bottom", "nzWrapClassName", "list-mobile__drawer", 3, "nzVisible", "nzOnClose"], [1, "drawer-content"], ["class", "drawer-content__current-box", 4, "ngIf"], [1, "list-mobile__wrap-current-box"], [1, "drawer-content__current-box"], ["class", "drawer-content__box", 3, "click", 4, "ngIf"], [1, "drawer-content__box", 3, "click"], [1, "current-box"], [1, "current-box_info"], ["nz-button", "", "nzType", "primary", 3, "click"]],
                template: function(e, t) {
                    if (1 & e && (x.Qc(0, de, 6, 4, "nz-collapse", 0),
                    x.Qc(1, me, 14, 6, "ng-template", null, 1, x.Rc),
                    x.Qc(3, ve, 8, 1, "ng-template", null, 2, x.Rc)),
                    2 & e) {
                        const e = x.Gc(2);
                        x.wc("ngIf", !t.isMobile)("ngIfElse", e)
                    }
                },
                directives: [o.o, l.a, l.c, o.n, a.a, O.a, M.a, i.b, o.t, u.a],
                styles: [".list[_ngcontent-%COMP%]{background:none}.list[_ngcontent-%COMP%]     .ant-collapse-header{padding:0!important}.list[_ngcontent-%COMP%]     .ant-collapse-content-box{padding:0}.list[_ngcontent-%COMP%]   nz-collapse-panel[_ngcontent-%COMP%]{border:none}.list__header_counter[_ngcontent-%COMP%]{padding:12px 16px;background:#fafafa;border-radius:4px}.list__header_counter[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{font-size:20px;line-height:28px}.list__header[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{position:absolute;top:8px;right:8px;font-size:36px}.list[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;padding:18px 16px;border-bottom:1px solid #f2f2f2;font-size:16px}.list[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{border-radius:4px;height:36px}.list-mobile__wrap-current-box[_ngcontent-%COMP%]{padding:28px 16px 24px}.list-mobile__drawer-btn[_ngcontent-%COMP%]{position:fixed;bottom:106px;width:calc(100% - 32px);margin:0 16px;padding:10px 16px;background:#fafafa;border-radius:4px;font-size:14px}.list-mobile__drawer-btn_counter[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#824ad7}.list-mobile__drawer-btn[_ngcontent-%COMP%] > i[_ngcontent-%COMP%]{position:absolute;top:2px;right:2px;font-size:36px}.current-box[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;width:100%}.current-box_info[_ngcontent-%COMP%]{display:flex;align-items:baseline;flex-wrap:wrap;column-gap:7px;row-gap:2px;margin-right:20px}.current-box_info[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{font-size:14px}.current-box_info[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:last-child{font-size:16px;line-height:23px}.current-box[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{border-radius:4px;height:36px}  .list-mobile__drawer .ant-drawer-body{padding:24px 0 0}  .list-mobile__drawer .ant-drawer-body .drawer-content h3{font-size:20px;font-weight:600;margin:0 16px 16px}  .list-mobile__drawer .ant-drawer-body .drawer-content__current-box{padding:0 16px 20px;margin-bottom:4px;border-bottom:1px solid #f2f2f2}  .list-mobile__drawer .ant-drawer-body .drawer-content__box{display:flex;justify-content:space-between;align-items:center;padding:12px 30px 12px 16px;font-size:14px}  .list-mobile__drawer .ant-drawer-body .drawer-content__box:not(:last-child){border-bottom:1px solid #f2f2f2}  .list-mobile__drawer .ant-drawer-body .drawer-content__box span:last-child{color:#824ad7;font-weight:600}.bold[_ngcontent-%COMP%]{font-weight:600}.primary-color[_ngcontent-%COMP%]{color:#965eeb}"],
                changeDetection: 0
            }),
            e
        }
        )();
        var we = n("BX+W");
        let _e = ( () => {
            class e {
                constructor() {
                    this.isMobile = !1
                }
            }
            return e.\u0275fac = function(t) {
                return new (t || e)
            }
            ,
            e.\u0275cmp = x.Qb({
                type: e,
                selectors: [["acceptance-wavebreaker-hint"]],
                inputs: {
                    isMobile: "isMobile"
                },
                decls: 27,
                vars: 2,
                consts: [[1, "wrap"], [1, "hint"], [1, "hint__header"], [1, "hint__list"]],
                template: function(e, t) {
                    1 & e && (x.cc(0, "div", 0),
                    x.cc(1, "div", 1),
                    x.cc(2, "div", 2),
                    x.Sc(3, " \u041f\u0440\u0438\u0435\u043c\u043a\u0430 \u043a\u043e\u0440\u043e\u0431\u043e\u043a \u0438 \u0432\u0435\u0449\u0435\u0439: "),
                    x.bc(),
                    x.cc(4, "ul", 3),
                    x.cc(5, "li"),
                    x.Sc(6, " \u041e\u0442\u0441\u043a\u0430\u043d\u0438\u0440\u0443\u0439\u0442\u0435 \u0428\u041a/QR \u043a\u043e\u0440\u043e\u0431\u043a\u0438 \u0434\u043b\u044f \u043d\u0430\u0447\u0430\u043b\u0430 \u0440\u0430\u0441\u043a\u043b\u0430\u0434\u043a\u0438 "),
                    x.bc(),
                    x.cc(7, "li"),
                    x.Sc(8, " \u0420\u0430\u0437\u043b\u043e\u0436\u0438\u0442\u0435 \u0432\u0435\u0449\u0438 \u043d\u0430 \u044f\u0447\u0435\u0439\u043a\u0438 \u0432\u043e\u043b\u043d\u043e\u0440\u0435\u0437\u0430, \u043e\u0442\u0441\u043a\u0430\u043d\u0438\u0440\u043e\u0432\u0430\u0432 \u0428\u041a \u0432\u0435\u0449\u0435\u0439 "),
                    x.bc(),
                    x.cc(9, "li"),
                    x.Sc(10, " \u041e\u0442\u0441\u043a\u0430\u043d\u0438\u0440\u0443\u0439\u0442\u0435 \u041f\u041e\u0412\u0422\u041e\u0420\u041d\u041e \u0428\u041a/QR \u043a\u043e\u0440\u043e\u0431\u043a\u0438 \u0434\u043b\u044f \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u0438\u044f \u0440\u0430\u0441\u043a\u043b\u0430\u0434\u043a\u0438 \u0438 \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u043e\u0433\u043e \u0444\u043e\u0440\u043c\u0438\u0440\u043e\u0432\u0430\u0438\u044f \u0430\u043a\u0442\u0430 \u0440\u0430\u0441\u0445\u043e\u0436\u0434\u0435\u043d\u0438\u044f \u043f\u043e \u043a\u043e\u0440\u043e\u0431\u043a\u0435 "),
                    x.bc(),
                    x.bc(),
                    x.bc(),
                    x.cc(11, "div", 1),
                    x.cc(12, "div", 2),
                    x.Sc(13, " \u041f\u0435\u0440\u0435\u0434 \u043d\u0430\u0447\u0430\u043b\u043e\u043c \u043f\u0440\u0438\u0435\u043c\u0430 "),
                    x.bc(),
                    x.cc(14, "ul", 3),
                    x.cc(15, "li"),
                    x.Sc(16, " \u0412\u044b\u043a\u043b\u044e\u0447\u0438\u0442\u0435 CapsLock "),
                    x.bc(),
                    x.cc(17, "li"),
                    x.Sc(18, " \u041f\u0435\u0440\u0435\u043a\u043b\u044e\u0447\u0438\u0442\u0435\u0441\u044c \u043d\u0430 \u0430\u043d\u0433\u043b\u0438\u0439\u0441\u043a\u0443\u044e \u0440\u0430\u0441\u043a\u043b\u0430\u0434\u043a\u0443 \u043a\u043b\u0430\u0432\u0438\u0430\u0442\u0443\u0440\u044b "),
                    x.bc(),
                    x.bc(),
                    x.bc(),
                    x.cc(19, "div", 1),
                    x.cc(20, "div", 2),
                    x.Sc(21, " \u0414\u043b\u044f \u043f\u0435\u0440\u0435\u043c\u0435\u0449\u0435\u043d\u0438\u044f \u0432\u0435\u0449\u0435\u0439 \u0432\u043e \u0432\u0440\u0435\u043c\u044f \u043f\u0440\u0438\u0435\u043c\u043a\u0438 \u043d\u0430 \u043f\u043e\u043b\u043a\u0443 (\u0438\u043b\u0438 \u0434\u0440\u0443\u0433\u0443\u044e \u044f\u0447\u0435\u0439\u043a\u0443) "),
                    x.bc(),
                    x.cc(22, "ul", 3),
                    x.cc(23, "li"),
                    x.Sc(24, " \u0421\u043a\u0430\u043d\u0438\u0440\u0443\u0435\u043c \u0432\u0435\u0449\u044c (\u0443\u0441\u0442\u0430\u043d\u0430\u0432\u043b\u0438\u0432\u0430\u0435\u0442\u0441\u044f \u0442\u0435\u043a\u0443\u0449\u0430\u044f \u044f\u0447\u0435\u0439\u043a\u0430) \u0438\u043b\u0438 \u0441\u043a\u0430\u043d\u0438\u0440\u0443\u0435\u043c \u0428\u041a \u044f\u0447\u0435\u0439\u043a\u0438 (\u043c\u043e\u0436\u043d\u043e \u0432\u0432\u0435\u0441\u0442\u0438 \u0432\u0440\u0443\u0447\u043d\u0443\u044e WVBR123, \u0433\u0434\u0435 123 - \u043d\u043e\u043c\u0435\u0440 \u044f\u0447\u0435\u0439\u043a\u0438) "),
                    x.bc(),
                    x.cc(25, "li"),
                    x.Sc(26, " \u0421\u043a\u0430\u043d\u0438\u0440\u0443\u0435\u043c \u0428\u041a \u043f\u043e\u043b\u043a\u0438, \u043d\u0430 \u043a\u043e\u0442\u043e\u0440\u0443\u044e \u043f\u0435\u0440\u0435\u043c\u0435\u0449\u0430\u0435\u043c \u0432\u0435\u0449\u0438, \u043b\u0438\u0431\u043e \u0441\u043a\u0430\u043d\u0438\u0440\u0443\u0435\u043c \u0428\u041a \u0434\u0440\u0443\u0433\u043e\u0439 \u044f\u0447\u0435\u0439\u043a\u0438, \u0438 \u043f\u0435\u0440\u0435\u043a\u043b\u0430\u0434\u044b\u0432\u0430\u0435\u043c \u0432\u0435\u0449\u0438 \u0432 \u043d\u0435\u0435 "),
                    x.bc(),
                    x.bc(),
                    x.bc(),
                    x.bc()),
                    2 & e && (x.Gb(12),
                    x.Mb("black", t.isMobile))
                },
                styles: [".wrap[_ngcontent-%COMP%]   .hint[_ngcontent-%COMP%]:not(:first-child){margin-top:20px}.wrap[_ngcontent-%COMP%]   .hint__header[_ngcontent-%COMP%]{color:#ff4d4f;font-size:18px;font-weight:600;line-height:24px}.wrap[_ngcontent-%COMP%]   .hint__list[_ngcontent-%COMP%]{font-size:16px;line-height:28px;margin:4px 0 0;padding-left:25px}.wrap[_ngcontent-%COMP%]   .hint__list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-weight:600}@media (max-width:1023px){.wrap[_ngcontent-%COMP%]   .hint__header[_ngcontent-%COMP%]{font-size:16px}.wrap[_ngcontent-%COMP%]   .hint__header.black[_ngcontent-%COMP%]{color:#000;font-size:20px;margin-bottom:16px}}"],
                changeDetection: 0
            }),
            e
        }
        )();
        const xe = ["scanInput"];
        function Me(e, t) {
            1 & e && x.Yb(0)
        }
        function ye(e, t) {
            if (1 & e) {
                const e = x.dc();
                x.ac(0),
                x.cc(1, "div", 18),
                x.kc("click", (function() {
                    return x.Ic(e),
                    x.oc().handleControlDrawers(!0)
                }
                )),
                x.cc(2, "span"),
                x.Sc(3, " \u041f\u0435\u0440\u0435\u0434 \u043d\u0430\u0447\u0430\u043b\u043e\u043c \u043f\u0440\u0438\u0435\u043c\u0430 "),
                x.bc(),
                x.Xb(4, "i", 19),
                x.cc(5, "nz-drawer", 20),
                x.kc("nzOnClose", (function() {
                    return x.Ic(e),
                    x.oc().handleControlDrawers(!0)
                }
                )),
                x.Qc(6, Me, 1, 0, "ng-container", 21),
                x.bc(),
                x.bc(),
                x.cc(7, "div"),
                x.cc(8, "i", 22),
                x.kc("click", (function() {
                    return x.Ic(e),
                    x.oc().handleControlDrawers(!1)
                }
                )),
                x.bc(),
                x.cc(9, "nz-drawer", 20),
                x.kc("nzOnClose", (function() {
                    return x.Ic(e),
                    x.oc().handleControlDrawers(!1)
                }
                )),
                x.cc(10, "div", 23),
                x.cc(11, "h3"),
                x.Sc(12, " \u0413\u043e\u043b\u043e\u0441\u043e\u0432\u0430\u044f \u043e\u0437\u0432\u0443\u0447\u043a\u0430 \u043f\u0440\u0438\u0435\u043c\u0430 "),
                x.bc(),
                x.cc(13, "label", 24),
                x.kc("ngModelChange", (function(t) {
                    return x.Ic(e),
                    x.oc().playCellDone = t
                }
                )),
                x.Sc(14, " \u042f\u0447\u0435\u0439\u043a\u0430 \u0441\u043e\u0431\u0440\u0430\u043d\u0430 "),
                x.bc(),
                x.cc(15, "label", 24),
                x.kc("ngModelChange", (function(t) {
                    return x.Ic(e),
                    x.oc().playHasItemsOnPlace = t
                }
                )),
                x.Sc(16, " \u0412\u0435\u0449\u0438 \u043d\u0430 \u043f\u043e\u043b\u043a\u0435 "),
                x.bc(),
                x.bc(),
                x.bc(),
                x.bc(),
                x.Zb()
            }
            if (2 & e) {
                const e = x.oc()
                  , t = x.Gc(20);
                x.Gb(5),
                x.wc("nzVisible", e.isOpenGuide),
                x.Gb(1),
                x.wc("ngTemplateOutlet", t),
                x.Gb(3),
                x.wc("nzVisible", e.isOpenVoiceChanger),
                x.Gb(4),
                x.wc("ngModel", e.playCellDone),
                x.Gb(2),
                x.wc("ngModel", e.playHasItemsOnPlace)
            }
        }
        function Se(e, t) {
            1 & e && x.Yb(0)
        }
        function Oe(e, t) {
            if (1 & e && x.Qc(0, Se, 1, 0, "ng-container", 21),
            2 & e) {
                x.oc();
                const e = x.Gc(20);
                x.wc("ngTemplateOutlet", e)
            }
        }
        function Le(e, t) {
            if (1 & e) {
                const e = x.dc();
                x.cc(0, "div", 25),
                x.cc(1, "label", 24),
                x.kc("ngModelChange", (function(t) {
                    return x.Ic(e),
                    x.oc().playCellDone = t
                }
                ))("ngModelChange", (function() {
                    return x.Ic(e),
                    x.oc().handleStorePlaybackSettings()
                }
                )),
                x.Sc(2, " \u041f\u0440\u043e\u0438\u0433\u0440\u044b\u0432\u0430\u0442\u044c \xab\u041d\u0430 \u043f\u043e\u043b\u043a\u0443\xbb "),
                x.bc(),
                x.cc(3, "label", 24),
                x.kc("ngModelChange", (function(t) {
                    return x.Ic(e),
                    x.oc().playHasItemsOnPlace = t
                }
                ))("ngModelChange", (function() {
                    return x.Ic(e),
                    x.oc().handleStorePlaybackSettings()
                }
                )),
                x.Sc(4, " \u041f\u0440\u043e\u0438\u0433\u0440\u044b\u0432\u0430\u0442\u044c \xab\u0415\u0441\u0442\u044c \u0432\u0435\u0449\u0438 \u043d\u0430 \u043f\u043e\u043b\u043a\u0435\xbb "),
                x.bc(),
                x.bc()
            }
            if (2 & e) {
                const e = x.oc();
                x.Gb(1),
                x.wc("ngModel", e.playCellDone),
                x.Gb(2),
                x.wc("ngModel", e.playHasItemsOnPlace)
            }
        }
        function Pe(e, t) {
            if (1 & e && (x.cc(0, "div", 26),
            x.cc(1, "h3"),
            x.Sc(2, " \u0412\u043d\u0438\u043c\u0430\u043d\u0438\u0435! \u041f\u043e\u0432\u0442\u043e\u0440\u043d\u044b\u0439 \u0441\u043a\u0430\u043d \u043f\u0440\u0435\u0434\u044b\u0434\u0443\u0449\u0435\u0433\u043e \u0431\u0430\u0440\u043a\u043e\u0434\u0430 "),
            x.bc(),
            x.cc(3, "div"),
            x.Sc(4, " \u041e\u0442\u0441\u043a\u0430\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0439 \u0431\u0430\u0440\u043a\u043e\u0434: "),
            x.cc(5, "b"),
            x.Sc(6),
            x.bc(),
            x.bc(),
            x.cc(7, "div"),
            x.Sc(8, " \u0414\u043b\u044f \u043f\u0440\u0438\u043d\u044f\u0442\u0438\u044f \u043e\u0442\u0441\u043a\u0430\u043d\u0438\u0440\u0443\u0439\u0442\u0435 \u0435\u0449\u0435 \u0440\u0430\u0437 "),
            x.bc(),
            x.bc()),
            2 & e) {
                const e = x.oc();
                x.Gb(6),
                x.Tc(e.lastScannedBarcode)
            }
        }
        function ze(e, t) {
            1 & e && (x.cc(0, "span"),
            x.Sc(1, " \u0421\u043a\u0430\u043d\u0438\u0440\u043e\u0432\u0430\u0442\u044c "),
            x.bc())
        }
        function Ie(e, t) {
            1 & e && x.Xb(0, "i", 30)
        }
        function Ve(e, t) {
            if (1 & e) {
                const e = x.dc();
                x.cc(0, "button", 27),
                x.kc("click", (function() {
                    return x.Ic(e),
                    x.oc().handlePutItem()
                }
                )),
                x.Qc(1, ze, 2, 0, "span", 28),
                x.Qc(2, Ie, 1, 0, "i", 29),
                x.bc()
            }
            if (2 & e) {
                const e = x.oc();
                x.wc("disabled", !e.itemShk),
                x.Gb(1),
                x.wc("ngIf", !e.processScanning),
                x.Gb(1),
                x.wc("ngIf", e.processScanning)
            }
        }
        function je(e, t) {
            if (1 & e && x.Xb(0, "i", 34),
            2 & e) {
                const e = x.oc(2);
                x.wc("nzType", e.processScanning ? "loading" : "scan")
            }
        }
        function Te(e, t) {
            if (1 & e && x.Xb(0, "i", 35),
            2 & e) {
                const e = x.oc(2);
                x.Mb("wavebreaker__scan_btn-icon", e.processScanning),
                x.wc("nzType", e.processScanning ? "loading" : "arrow-right")
            }
        }
        function He(e, t) {
            if (1 & e) {
                const e = x.dc();
                x.cc(0, "button", 31),
                x.kc("click", (function() {
                    x.Ic(e);
                    const t = x.oc();
                    return t.itemShk ? t.handlePutItem() : t.handleOpenScaner()
                }
                )),
                x.Qc(1, je, 1, 1, "i", 32),
                x.Qc(2, Te, 1, 3, "i", 33),
                x.bc()
            }
            if (2 & e) {
                const e = x.oc();
                x.Gb(1),
                x.wc("ngIf", !e.itemShk),
                x.Gb(1),
                x.wc("ngIf", e.itemShk)
            }
        }
        function Be(e, t) {
            1 & e && (x.cc(0, "span"),
            x.Sc(1, " \u041f\u0440\u0438\u043d\u044f\u0442\u043e \u0438\u0437\u043b\u0438\u0448\u043a\u043e\u043c "),
            x.bc())
        }
        function Ze(e, t) {
            if (1 & e && (x.ac(0),
            x.cc(1, "span", 40),
            x.Sc(2),
            x.bc(),
            x.cc(3, "span", 41),
            x.Sc(4),
            x.cc(5, "span"),
            x.Sc(6),
            x.bc(),
            x.bc(),
            x.Qc(7, Be, 2, 0, "span", 28),
            x.Zb()),
            2 & e) {
                const e = x.oc(3);
                x.Gb(2),
                x.Tc(e.locationName),
                x.Gb(2),
                x.Uc(" ", e.cellId, " "),
                x.Gb(2),
                x.Uc("(", e.cellState, ")"),
                x.Gb(1),
                x.wc("ngIf", e.surplusPut)
            }
        }
        function Fe(e, t) {
            if (1 & e && (x.cc(0, "div"),
            x.Sc(1),
            x.bc()),
            2 & e) {
                const e = x.oc(3);
                x.Gb(1),
                x.Vc(" \u0415\u0441\u0442\u044c \u0432\u0435\u0449\u0438 \u043d\u0430 \u043f\u043e\u043b\u043a\u0435: ", e.placeName, " ", e.clientName ? "/ " + e.clientName : "", "")
            }
        }
        function Ge(e, t) {
            if (1 & e && (x.cc(0, "div", 39),
            x.Qc(1, Ze, 8, 4, "ng-container", 28),
            x.cc(2, "span"),
            x.Sc(3),
            x.bc(),
            x.Qc(4, Fe, 2, 2, "div", 28),
            x.bc()),
            2 & e) {
                const e = x.oc(2);
                x.Gb(1),
                x.wc("ngIf", e.cellId >= 0),
                x.Gb(2),
                x.Tc(e.msg),
                x.Gb(1),
                x.wc("ngIf", e.placeName)
            }
        }
        function De(e, t) {
            if (1 & e && (x.cc(0, "div", 39),
            x.cc(1, "span"),
            x.Sc(2),
            x.bc(),
            x.cc(3, "span", 41),
            x.Sc(4),
            x.bc(),
            x.bc()),
            2 & e) {
                const e = x.oc(2);
                x.Gb(2),
                x.Uc("\u0422\u0435\u043a\u0443\u0449\u0430\u044f ", e.locationName, ""),
                x.Gb(2),
                x.Tc(e.currentCell)
            }
        }
        function Re(e, t) {
            if (1 & e && (x.cc(0, "div", 42),
            x.Sc(1),
            x.bc()),
            2 & e) {
                const e = x.oc(2);
                x.Gb(1),
                x.Tc("\u041e\u0448\u0438\u0431\u043a\u0430: " + e.msg)
            }
        }
        function Ue(e, t) {
            if (1 & e && (x.cc(0, "div", 36),
            x.Qc(1, Ge, 5, 3, "div", 37),
            x.Qc(2, De, 5, 2, "div", 37),
            x.Qc(3, Re, 2, 1, "div", 38),
            x.bc()),
            2 & e) {
                const e = x.oc();
                x.Gb(1),
                x.wc("ngIf", !e.error),
                x.Gb(1),
                x.wc("ngIf", e.currentCell),
                x.Gb(1),
                x.wc("ngIf", e.error)
            }
        }
        function Ae(e, t) {
            if (1 & e && x.Xb(0, "acceptance-wavebreaker-hint", 43),
            2 & e) {
                const e = x.oc();
                x.wc("isMobile", e.isMobile)
            }
        }
        let Ne = ( () => {
            let e = class {
                constructor(e, t, n, o, r) {
                    this._wavebreakerService = e,
                    this._officeService = t,
                    this._fb = n,
                    this._cDRef = o,
                    this._localStorageService = r,
                    this.isMobile = !1,
                    this.boxes = [],
                    this.onDropBox = new x.n,
                    this.onShowError = new x.n,
                    this.onPlayVoice = new x.n,
                    this.onAccept = new x.n,
                    this.currentBox = "",
                    this.showMsg = !1,
                    this.playCellDone = !1,
                    this.playHasItemsOnPlace = !1,
                    this.isOpenGuide = !1,
                    this.isOpenVoiceChanger = !1,
                    this.isScanOpen = !1,
                    this.isScanStart = !1,
                    this.processScanning = !1,
                    this.showForceAlert = !1,
                    this.error = !1,
                    this.forcePut = !1,
                    this.surplusPut = !1,
                    this.openExciseModal = !1,
                    this.formForExciseModal = this._fb.group({
                        inputValue: "",
                        saleMode: !1,
                        checkBoxValue: !1,
                        shk: !1,
                        result: null
                    }),
                    this.playCellDoneStorageKey = "ACCEPTANCE_SETTINGS_PLAY_CELL_DONE",
                    this.playHasItemsOnPlaceStorageKey = "ACCEPTANCE_SETTINGS_PLAY_ITEMS_ON_PLACE",
                    this.playCellDone = !!this._localStorageService.get(this.playCellDoneStorageKey),
                    this.playHasItemsOnPlace = !!this._localStorageService.get(this.playHasItemsOnPlaceStorageKey)
                }
                ngAfterViewInit() {
                    this.setFocus()
                }
                handlePutItem(e=!0) {
                    if (this.processScanning)
                        return this.onShowError.emit({
                            msg: "\u041f\u043e\u043c\u0435\u0434\u043b\u0435\u043d\u043d\u0435\u0435, \u044f \u0432\u0441\u0435 \u0437\u0430\u043f\u0438\u0441\u044b\u0432\u0430\u044e",
                            isOnlyErr: !0
                        }),
                        void (this.isScanStart = !0);
                    const t = this.itemShk;
                    if (this.flush(e),
                    this.isScanStart = !1,
                    !t || t.length < 4)
                        return this.onShowError.emit({
                            msg: "\u041e\u0442\u0441\u043a\u0430\u043d\u0438\u0440\u0443\u0439\u0442\u0435 \u0428\u041a \u0442\u043e\u0432\u0430\u0440\u0430"
                        }),
                        void (this.isScanStart = !0);
                    this.processScanning = !0,
                    this._wavebreakerService.putItem(t, this.currentCell, this.forcePut, this.lastScannedBarcode).pipe(Object(f.b)(this), Object(b.a)(e => {
                        if (e) {
                            if (e.error)
                                return this.showError(e.error.message),
                                void (this.isScanStart = !0);
                            this.processResponse(e)
                        }
                    }
                    ), Object(m.a)( () => {
                        this.flush(e),
                        this.processScanning = !1,
                        this.isScanStart = !0,
                        this._cDRef.markForCheck()
                    }
                    )).subscribe()
                }
                handleDropBox(e) {
                    this.currentBox === e && (this.currentBox = ""),
                    this.onDropBox.emit(e),
                    this.boxes = this.boxes.filter(t => t.boxName !== e)
                }
                handleControlDrawers(e) {
                    e ? this.isOpenGuide = !this.isOpenGuide : this.isOpenVoiceChanger = !this.isOpenVoiceChanger
                }
                handleCloseCustomModal() {
                    this.openExciseModal = !1,
                    this.setFocus()
                }
                handleScanSuccess(e) {
                    this.itemShk = e,
                    this.handlePutItem(!1)
                }
                handleOpenScaner() {
                    this.isScanOpen = !0,
                    this.isScanStart = !0
                }
                handleStorePlaybackSettings() {
                    this._localStorageService.set(this.playCellDoneStorageKey, this.playCellDone),
                    this._localStorageService.set(this.playHasItemsOnPlaceStorageKey, this.playHasItemsOnPlace)
                }
                processResponse(e) {
                    var t;
                    switch (e.result) {
                    case 0:
                    case 12:
                    case 13:
                        this.successResult(e);
                        break;
                    case 1:
                        this.errorResult(e);
                        break;
                    case 2:
                        this.repeatResult(e);
                        break;
                    case 3:
                        this.surplusResult(e);
                        break;
                    case 4:
                        this.cellSelectedResult(e);
                        break;
                    case 5:
                        this.noCellSelectedResult();
                        break;
                    case 6:
                        this.movedToCellResult(e);
                        break;
                    case 7:
                        e.bagId ? this.movedToBagResult(e) : this.movedToPlaceResult();
                        break;
                    case 8:
                        this.cellOccupiedResult();
                        break;
                    case 9:
                        this.rejectResult();
                        break;
                    case 10:
                        this.acceptResult();
                        break;
                    case 11:
                        this.finishResult()
                    }
                    this.currentBox = 1 === (null === (t = e.prevLocation) || void 0 === t ? void 0 : t.locationTypeId) ? e.prevLocation.locationId.toString() : this.currentBox,
                    3 === e.result ? (this.forcePut = !0,
                    this.showForceAlert = !0) : 1 === e.result && e.lastScannedBarcode ? (this.forcePut = !0,
                    this.lastScannedBarcode = e.lastScannedBarcode) : (this.forcePut = !1,
                    this.showForceAlert = !1)
                }
                successResult(e) {
                    this.cellId = e.cellId,
                    this.cellId = e.cellId,
                    this.locationTypeId = 12 === e.result ? 6 : 3,
                    this.locationName = this.getLocationName(e),
                    this.currentCell = e.cellId,
                    this.msg = e.msg,
                    this.cellState = `${e.acceptedCount}/${e.expectedCount}`,
                    this.error = !1,
                    this.showMsg = !0;
                    const t = this.getPlayFiles(e.cellId);
                    12 === e.result && t.unshift("place.mp3"),
                    13 === e.result && t.unshift("move_to_stock.mp3"),
                    e.acceptedCount === e.expectedCount && this.playCellDone && t.push("on_shelf.mp3"),
                    e.placeName && this.playHasItemsOnPlace && t.push("hasItemsOnPlace.mp3"),
                    e.clientInOffice && t.push("client_in_office.mp3"),
                    this.placeName = e.placeName,
                    this.clientName = e.clientName,
                    this.lastScannedBarcode = e.lastScannedBarcode,
                    this.surplusPut = ["PL", "SK"].includes(this._officeService.office.country),
                    this.onPlayVoice.emit(t),
                    !this.isMobile && e.needExcise && (this.addExciseToItem(e),
                    setTimeout( () => {
                        this.onPlayVoice.emit("scan_excise.mp3")
                    }
                    , 1e3)),
                    this.isScanStart = !0
                }
                errorResult(e) {
                    this.cellId = null,
                    this.currentCell = null,
                    this.placeName = null,
                    this.showError(e.msg),
                    this.isScanStart = !0
                }
                repeatResult(e) {
                    this.cellId = e.cellId,
                    this.currentCell = e.cellId,
                    this.msg = e.msg,
                    this.cellState = `${e.acceptedCount}/${e.expectedCount}`,
                    this.error = !1,
                    this.showMsg = !0;
                    const t = this.getPlayFiles(e.cellId);
                    t.unshift("repeat.mp3"),
                    e.acceptedCount === e.expectedCount && this.playCellDone && t.push("cell_done_move_to_place.mp3"),
                    e.placeName && this.playHasItemsOnPlace && t.push("hasItemsOnPlace.mp3"),
                    e.clientInOffice && t.push("client_in_office.mp3"),
                    this.placeName = e.placeName,
                    this.clientName = e.clientName,
                    this.onPlayVoice.emit(t),
                    !this.isMobile && e.needExcise && (setTimeout( () => {
                        this.onPlayVoice.emit("scan_excise.mp3")
                    }
                    , 1500),
                    this.addExciseToItem(e)),
                    this.isScanStart = !0
                }
                surplusResult(e) {
                    this.cellId = null,
                    this.currentCell = null,
                    this.msg = "",
                    this.error = !1,
                    this.showMsg = !0,
                    this.placeName = null,
                    this.lastScannedBarcode = e.lastScannedBarcode,
                    this.onPlayVoice.emit("scanAgain.mp3"),
                    this.isScanStart = !0
                }
                cellSelectedResult(e) {
                    this.cellId = null,
                    this.currentCell = e.cellId,
                    this.error = !1,
                    this.showMsg = !1,
                    this.placeName = null,
                    this.onPlayVoice.emit("cellSelected.mp3"),
                    this.isScanStart = !0
                }
                noCellSelectedResult() {
                    this.cellId = null,
                    this.currentCell = null,
                    this.error = !0,
                    this.showMsg = !0,
                    this.placeName = null,
                    this.onPlayVoice.emit("scanItem.mp3"),
                    this.isScanStart = !0
                }
                movedToCellResult(e) {
                    if (this.cellId = e.cellId,
                    this.currentCell = e.cellId,
                    this.msg = e.msg,
                    this.cellState = `${e.acceptedCount}/${e.expectedCount}`,
                    this.error = !1,
                    this.showMsg = !0,
                    this.placeName = null,
                    e.cellId) {
                        const t = this.getPlayFiles(e.cellId);
                        t.unshift("itemsMovedToCell.mp3"),
                        this.onPlayVoice.emit(t)
                    } else
                        this.onPlayVoice.emit("itemsMovedToCell.mp3");
                    this.isScanStart = !0
                }
                movedToPlaceResult() {
                    this.cellId = null,
                    this.currentCell = null,
                    this.error = !1,
                    this.showMsg = !1,
                    this.placeName = null,
                    this.onPlayVoice.emit("itemsMovedToPlace.mp3"),
                    this.isScanStart = !0
                }
                movedToBagResult(e) {
                    this.cellId = null,
                    this.currentCell = null,
                    this.error = !1,
                    this.showMsg = !1,
                    this.placeName = null,
                    this.onPlayVoice.emit(["bag.mp3", ...this.getPlayFiles(e.bagId)]),
                    this.isScanStart = !0
                }
                cellOccupiedResult() {
                    this.cellId = null,
                    this.currentCell = null,
                    this.error = !0,
                    this.msg = "",
                    this.showMsg = !0,
                    this.placeName = null,
                    this.onPlayVoice.emit("cellOccupied.mp3"),
                    this.isScanStart = !0
                }
                rejectResult() {
                    this.cellId = null,
                    this.currentCell = null,
                    this.error = !1,
                    this.msg = "\u041e\u0442\u043a\u0430\u0437",
                    this.showMsg = !0,
                    this.placeName = null,
                    this.onPlayVoice.emit("reject.mp3"),
                    this.isScanStart = !0
                }
                acceptResult() {
                    this.onPlayVoice.emit("box_accepted.mp3"),
                    this.onAccept.emit()
                }
                finishResult() {
                    this.onPlayVoice.emit("analysis_done.mp3"),
                    this.onAccept.emit()
                }
                flush(e=!0) {
                    this.itemShk = "",
                    e && this.setFocus()
                }
                addExciseToItem(e) {
                    this.formForExciseModal = this._fb.group({
                        inputValue: "",
                        saleMode: !1,
                        checkBoxValue: !e.needExcise,
                        shk: e.shkId,
                        result: 0
                    }),
                    this.isScanOpen = !1,
                    this.openExciseModal = !0
                }
                getPlayFiles(e) {
                    return Object(re.a)(e)
                }
                showError(e) {
                    this.error = !0,
                    this.msg = e,
                    this.showMsg = !0,
                    this.placeName = null,
                    this.isScanStart = !0,
                    this.onShowError.emit({
                        msg: e
                    })
                }
                setFocus() {
                    setTimeout( () => this.scanInput.nativeElement.focus())
                }
                getLocationName(e) {
                    switch (e.result) {
                    case 12:
                        return "\u043f\u043e\u043b\u043a\u0430";
                    case 13:
                        return "\u0441\u043a\u043b\u0430\u0434\u0441\u043a\u0430\u044f \u043f\u043e\u043b\u043a\u0430";
                    default:
                        return "\u044f\u0447\u0435\u0439\u043a\u0430"
                    }
                }
            }
            ;
            return e.\u0275fac = function(t) {
                return new (t || e)(x.Wb(te.a),x.Wb(ne.a),x.Wb(r.f),x.Wb(x.h),x.Wb(oe.a))
            }
            ,
            e.\u0275cmp = x.Qb({
                type: e,
                selectors: [["app-acceptance-wavebreaker"]],
                viewQuery: function(e, t) {
                    var n;
                    1 & e && x.Yc(xe, !0),
                    2 & e && x.Fc(n = x.lc()) && (t.scanInput = n.first)
                },
                inputs: {
                    isMobile: "isMobile",
                    boxes: "boxes"
                },
                outputs: {
                    onDropBox: "onDropBox",
                    onShowError: "onShowError",
                    onPlayVoice: "onPlayVoice",
                    onAccept: "onAccept"
                },
                decls: 23,
                vars: 22,
                consts: [[1, "wavebreaker"], [1, "wavebreaker__guide"], [4, "ngIf", "ngIfElse"], ["desktopGuide", ""], ["class", "wavebreaker__checkboxes", 4, "ngIf"], ["class", "wavebreaker__alert", 4, "ngIf"], [1, "wavebreaker__scan"], ["nzSearch", "", "nzSize", "large", 3, "nzAddOnAfter"], ["nz-input", "", "type", "text", 3, "ngModel", "disabled", "keydown.enter", "ngModelChange"], ["scanInput", ""], ["btn", ""], ["scan", ""], ["nz-button", "", "nzType", "primary", "nzSize", "large", "routerLink", "/pvz/schedule/wavebreaker/state", 1, "wavebreaker__scan_btn-state", 3, "nzGhost"], ["class", "wavebreaker__info info", 4, "ngIf"], [3, "isMobile", "boxes", "currentBox", "onDropBox"], ["hintTemplate", ""], [3, "isScanOpen", "isScanStart", "isCloseAfterScan", "isNeedManualInput", "isScanOpenChange", "isScanStartChange", "onScanSuccess"], [3, "isOpen", "title", "haveInputField", "height", "placeholderText", "form", "isClosed"], [1, "wavebreaker__guide_info", 3, "click"], ["nz-icon", "", "nzType", "wb-question-hint"], ["nzHeight", "fit-content", "nzPlacement", "bottom", "nzWrapClassName", "wavebreaker__drawer", 3, "nzVisible", "nzOnClose"], [4, "ngTemplateOutlet"], ["nz-icon", "", "nzType", "wb-fill-voice", "nzTheme", "fill", 1, "wavebreaker__guide_voice", 3, "click"], [1, "wavebreaker__drawer_checkboxes"], ["nz-checkbox", "", 3, "ngModel", "ngModelChange"], [1, "wavebreaker__checkboxes"], [1, "wavebreaker__alert"], ["nz-button", "", "nzType", "primary", "nzSize", "large", 3, "disabled", "click"], [4, "ngIf"], ["nz-icon", "", "nzType", "loading", 4, "ngIf"], ["nz-icon", "", "nzType", "loading"], ["nz-button", "", "nzType", "primary", "nzSize", "large", 3, "click"], ["nz-icon", "", "class", "wavebreaker__scan_btn-icon", 3, "nzType", 4, "ngIf"], ["nz-icon", "", 3, "wavebreaker__scan_btn-icon", "nzType", 4, "ngIf"], ["nz-icon", "", 1, "wavebreaker__scan_btn-icon", 3, "nzType"], ["nz-icon", "", 3, "nzType"], [1, "wavebreaker__info", "info"], ["class", "info__cell", 4, "ngIf"], ["class", "info__error", 4, "ngIf"], [1, "info__cell"], [1, "location"], [1, "number"], [1, "info__error"], [3, "isMobile"]],
                template: function(e, t) {
                    if (1 & e && (x.cc(0, "section", 0),
                    x.cc(1, "div", 1),
                    x.Qc(2, ye, 17, 5, "ng-container", 2),
                    x.Qc(3, Oe, 1, 1, "ng-template", null, 3, x.Rc),
                    x.bc(),
                    x.Qc(5, Le, 5, 2, "div", 4),
                    x.Qc(6, Pe, 9, 1, "div", 5),
                    x.cc(7, "div", 6),
                    x.cc(8, "nz-input-group", 7),
                    x.cc(9, "input", 8, 9),
                    x.kc("keydown.enter", (function() {
                        return t.handlePutItem()
                    }
                    ))("ngModelChange", (function(e) {
                        return t.itemShk = e
                    }
                    )),
                    x.bc(),
                    x.Qc(11, Ve, 3, 3, "ng-template", null, 10, x.Rc),
                    x.Qc(13, He, 3, 2, "ng-template", null, 11, x.Rc),
                    x.bc(),
                    x.cc(15, "button", 12),
                    x.Sc(16, " \u0421\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u0435 \u0432\u043e\u043b\u043d\u043e\u0440\u0435\u0437\u0430 "),
                    x.bc(),
                    x.bc(),
                    x.Qc(17, Ue, 4, 3, "div", 13),
                    x.cc(18, "acceptance-wavebreaker-boxes", 14),
                    x.kc("onDropBox", (function(e) {
                        return t.handleDropBox(e)
                    }
                    )),
                    x.bc(),
                    x.bc(),
                    x.Qc(19, Ae, 1, 1, "ng-template", null, 15, x.Rc),
                    x.cc(21, "app-barcode-scanner", 16),
                    x.kc("isScanOpenChange", (function(e) {
                        return t.isScanOpen = e
                    }
                    ))("isScanStartChange", (function(e) {
                        return t.isScanStart = e
                    }
                    ))("onScanSuccess", (function(e) {
                        return t.handleScanSuccess(e)
                    }
                    )),
                    x.bc(),
                    x.cc(22, "app-custom-modal", 17),
                    x.kc("isClosed", (function() {
                        return t.handleCloseCustomModal()
                    }
                    )),
                    x.bc()),
                    2 & e) {
                        const e = x.Gc(4)
                          , n = x.Gc(12)
                          , o = x.Gc(14);
                        x.Gb(2),
                        x.wc("ngIf", t.isMobile)("ngIfElse", e),
                        x.Gb(3),
                        x.wc("ngIf", !t.isMobile),
                        x.Gb(1),
                        x.wc("ngIf", t.showForceAlert),
                        x.Gb(2),
                        x.wc("nzAddOnAfter", t.isMobile ? o : n),
                        x.Gb(1),
                        x.wc("ngModel", t.itemShk)("disabled", t.processScanning),
                        x.Gb(6),
                        x.wc("nzGhost", t.isMobile),
                        x.Gb(2),
                        x.wc("ngIf", t.showMsg),
                        x.Gb(1),
                        x.wc("isMobile", t.isMobile)("boxes", t.boxes)("currentBox", t.currentBox),
                        x.Gb(3),
                        x.wc("isScanOpen", t.isScanOpen)("isScanStart", t.isScanStart)("isCloseAfterScan", !1)("isNeedManualInput", !1),
                        x.Gb(1),
                        x.wc("isOpen", t.openExciseModal)("title", "\u0412\u043d\u0438\u043c\u0430\u043d\u0438\u0435!")("haveInputField", !0)("height", 230)("placeholderText", "\u041e\u0442\u0441\u043a\u0430\u043d\u0438\u0440\u0443\u0439\u0442\u0435 \u0430\u043a\u0446\u0438\u0437")("form", t.formForExciseModal)
                    }
                },
                directives: [o.o, c.b, c.a, r.d, r.p, r.s, a.a, O.a, M.a, p.d, ke, L.a, we.a, i.b, u.a, o.t, s.a, _e],
                styles: [".wavebreaker__guide[_ngcontent-%COMP%]{padding-bottom:20px}.wavebreaker__checkboxes[_ngcontent-%COMP%]{padding:24px 0;border-top:1px solid #f0f0f0;border-bottom:1px solid #f0f0f0}.wavebreaker__checkboxes[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{color:rgba(0,0,0,.8509803921568627)}.wavebreaker__checkboxes[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:last-child{margin-left:24px}.wavebreaker__alert[_ngcontent-%COMP%]{margin-top:20px;font-size:16px}.wavebreaker__alert[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#ff4d4f;font-size:20px}.wavebreaker__alert[_ngcontent-%COMP%]   b[_ngcontent-%COMP%]{color:#965eeb}.wavebreaker__alert[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:last-child{margin-top:4px;font-size:18px}.wavebreaker__scan[_ngcontent-%COMP%]{padding:20px 0 8px}.wavebreaker__scan[_ngcontent-%COMP%]   nz-input-group[_ngcontent-%COMP%]{margin-bottom:16px}.wavebreaker__scan_btn-state[_ngcontent-%COMP%]{border-radius:4px}.wavebreaker__scan_btn-icon[_ngcontent-%COMP%]{font-size:24px}.wavebreaker__info[_ngcontent-%COMP%]{margin-bottom:24px}.wavebreaker[_ngcontent-%COMP%]   .bold[_ngcontent-%COMP%]{font-weight:600}.info__cell[_ngcontent-%COMP%]{display:flex;flex-direction:column;padding:24px 0;font-size:40px;font-weight:400;line-height:56px;color:rgba(0,0,0,.63);border-top:1px solid #f0f0f0}.info__cell[_ngcontent-%COMP%]   .location[_ngcontent-%COMP%]:first-letter{text-transform:capitalize}.info__cell[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%]{display:flex;gap:32px;font-size:152px;font-weight:700;line-height:172px;color:#000}.info__cell[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{font-weight:400}.info__cell[_ngcontent-%COMP%]:first-child{border-top:0}.info__error[_ngcontent-%COMP%]{padding-top:24px;font-size:36px;line-height:49px;color:#ff4d4f}  .wavebreaker__drawer .ant-drawer-body{padding:24px 16px}  .wavebreaker__drawer_checkboxes{display:flex;flex-direction:column}  .wavebreaker__drawer_checkboxes h3{font-size:20px;font-weight:600;line-height:24px;margin-bottom:16px}  .wavebreaker__drawer_checkboxes label{color:rgba(0,0,0,.8509803921568627);padding:14px 0;margin:0!important}@media (max-width:1023px){.wavebreaker__guide[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;padding:0 16px}.wavebreaker__guide_info[_ngcontent-%COMP%]{display:flex;align-items:center;color:#824ad7;font-size:14px;font-weight:600}.wavebreaker__guide_info[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:20px;margin-left:10px}.wavebreaker__guide_voice[_ngcontent-%COMP%]{font-size:28px}.wavebreaker__alert[_ngcontent-%COMP%]{padding:0 16px}.wavebreaker__scan[_ngcontent-%COMP%]{padding:18px 16px}.wavebreaker__scan[_ngcontent-%COMP%]   nz-input-group[_ngcontent-%COMP%]{margin-bottom:12px}.wavebreaker__scan_btn-state[_ngcontent-%COMP%]{width:100%}.wavebreaker__info[_ngcontent-%COMP%]{margin-bottom:32px;padding:0 16px}.info__cell[_ngcontent-%COMP%]{padding-top:24px;font-size:24px;line-height:32px;border-top:1px solid #f0f0f0}.info__cell[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%]{gap:8px;font-size:24px;line-height:32px}.info__cell[_ngcontent-%COMP%]:first-child{border-top:none}}"],
                changeDetection: 0
            }),
            e = Object(C.c)([Object(f.a)()], e),
            e
        }
        )();
        function $e(e, t) {
            if (1 & e) {
                const e = x.dc();
                x.cc(0, "app-acceptance-box", 11),
                x.kc("onRefreshBoxes", (function(t) {
                    return x.Ic(e),
                    x.oc(2).handleSplitBoxes(t)
                }
                ))("onShowError", (function(t) {
                    return x.Ic(e),
                    x.oc(2).handleShowError(t)
                }
                ))("onPlayVoice", (function(t) {
                    return x.Ic(e),
                    x.oc(2).handlePlayVoice(t)
                }
                ))("onDropBox", (function(t) {
                    return x.Ic(e),
                    x.oc(2).handleDropBox(t)
                }
                )),
                x.bc()
            }
            if (2 & e) {
                const e = x.oc(2);
                x.wc("isMobile", e.isMobile)("allBoxes", e.allBoxes)("acceptedCounter", e.acceptedCounter)
            }
        }
        function Ee(e, t) {
            if (1 & e) {
                const e = x.dc();
                x.cc(0, "app-acceptance-wavebreaker", 12),
                x.kc("onShowError", (function(t) {
                    return x.Ic(e),
                    x.oc(2).handleShowError(t)
                }
                ))("onPlayVoice", (function(t) {
                    return x.Ic(e),
                    x.oc(2).handlePlayVoice(t)
                }
                ))("onDropBox", (function(t) {
                    return x.Ic(e),
                    x.oc(2).handleDropBox(t)
                }
                ))("onAccept", (function() {
                    return x.Ic(e),
                    x.oc(2).handleAccept()
                }
                )),
                x.bc()
            }
            if (2 & e) {
                const e = x.oc(2);
                x.wc("isMobile", e.isMobile)("boxes", e.acceptedBoxes)
            }
        }
        function Xe(e, t) {
            if (1 & e && (x.cc(0, "section", 8),
            x.Qc(1, $e, 1, 3, "app-acceptance-box", 9),
            x.Qc(2, Ee, 1, 2, "ng-template", null, 10, x.Rc),
            x.bc()),
            2 & e) {
                const e = x.Gc(3)
                  , t = x.oc();
                x.Gb(1),
                x.wc("ngIf", t.isBoxAcceptancePage)("ngIfElse", e)
            }
        }
        function Qe(e, t) {
            1 & e && (x.cc(0, "div", 13),
            x.Xb(1, "nz-spin", 14),
            x.bc()),
            2 & e && (x.Gb(1),
            x.wc("nzSize", "large"))
        }
        const We = [{
            path: "",
            component: ( () => {
                let e = class {
                    constructor(e, t, n, o) {
                        this._boxService = e,
                        this._notificationsService = t,
                        this._audioPlayerService = n,
                        this._cDRef = o,
                        this.isMobile = !1,
                        this.allBoxes = [],
                        this.acceptedBoxes = [],
                        this.acceptedCounter = 0,
                        this.loading$ = new _.a(!1),
                        this.isBoxAcceptancePage = !0
                    }
                    onResize() {}
                    ngOnInit() {
                        this.getBoxes()
                    }
                    handleDropBox(e) {
                        this._boxService.disassembledBox(e).pipe(Object(f.b)(this), Object(b.a)(t => {
                            t && t.error ? this.handleShowError(t.error.message) : (this.handleSplitBoxes(this.allBoxes.filter(t => t.boxName !== e)),
                            this._notificationsService.success(`\u041a\u043e\u0440\u043e\u0431\u043a\u0430 ${e} \u0440\u0430\u0437\u043e\u0431\u0440\u0430\u043d\u0430`),
                            this.handlePlayVoice("analysis_done.mp3"))
                        }
                        )).subscribe()
                    }
                    handleShowError(e) {
                        this._notificationsService.error(e.msg),
                        (null == e ? void 0 : e.isOnlyErr) || this.handlePlayVoice("error.mp3")
                    }
                    handlePlayVoice(e) {
                        this._audioPlayerService.audioPlayer$.next("string" == typeof e ? [e] : e)
                    }
                    handleAccept() {
                        this.getBoxes()
                    }
                    getBoxes() {
                        this.loading$.next(!0),
                        this._boxService.getAcceptedBoxes().pipe(Object(f.b)(this), Object(b.a)(e => {
                            e.error ? this.handleShowError(e.error.message) : this.handleSplitBoxes(e)
                        }
                        ), Object(m.a)( () => this.loading$.next(!1))).subscribe()
                    }
                    handleSplitBoxes(e) {
                        this.allBoxes = e,
                        this.acceptedBoxes = e.filter(e => e.isAccepted),
                        this.acceptedCounter = e.filter(e => e.isAccepted).length,
                        this._cDRef.markForCheck()
                    }
                }
                ;
                return e.\u0275fac = function(t) {
                    return new (t || e)(x.Wb(v.a),x.Wb(k.a),x.Wb(w.a),x.Wb(x.h))
                }
                ,
                e.\u0275cmp = x.Qb({
                    type: e,
                    selectors: [["app-acceptance"]],
                    hostBindings: function(e, t) {
                        1 & e && x.kc("resize", (function() {
                            return t.onResize()
                        }
                        ), !1, x.Hc)
                    },
                    decls: 17,
                    vars: 9,
                    consts: [[1, "acceptance"], [1, "acceptance__header"], ["routerLink", "/couriers/acceptance", 1, "acceptance__header_courier"], ["nz-icon", "", "nzType", "wb-down", 3, "nzRotate"], [1, "acceptance__switcher"], [3, "click"], ["class", "acceptance__content", 4, "ngIf", "ngIfElse"], ["loadingTemp", ""], [1, "acceptance__content"], [3, "isMobile", "allBoxes", "acceptedCounter", "onRefreshBoxes", "onShowError", "onPlayVoice", "onDropBox", 4, "ngIf", "ngIfElse"], ["wavebreakerTemplate", ""], [3, "isMobile", "allBoxes", "acceptedCounter", "onRefreshBoxes", "onShowError", "onPlayVoice", "onDropBox"], [3, "isMobile", "boxes", "onShowError", "onPlayVoice", "onDropBox", "onAccept"], [1, "spiner"], ["nzSimple", "", 3, "nzSize"]],
                    template: function(e, t) {
                        if (1 & e && (x.cc(0, "div", 0),
                        x.cc(1, "section", 1),
                        x.cc(2, "h1"),
                        x.Sc(3, " \u041f\u0440\u0438\u0435\u043c\u043a\u0430 "),
                        x.bc(),
                        x.cc(4, "div", 2),
                        x.cc(5, "span"),
                        x.Sc(6, " \u041a\u0443\u0440\u044c\u0435\u0440\u0441\u043a\u0430\u044f \u043f\u0440\u0438\u0435\u043c\u043a\u0430 "),
                        x.bc(),
                        x.Xb(7, "i", 3),
                        x.bc(),
                        x.bc(),
                        x.cc(8, "section", 4),
                        x.cc(9, "div", 5),
                        x.kc("click", (function() {
                            return t.isBoxAcceptancePage = !0
                        }
                        )),
                        x.Sc(10, " \u041f\u0440\u0438\u0435\u043c \u043a\u043e\u0440\u043e\u0431\u043e\u043a "),
                        x.bc(),
                        x.cc(11, "div", 5),
                        x.kc("click", (function() {
                            return t.isBoxAcceptancePage = !1
                        }
                        )),
                        x.Sc(12, " \u0420\u0430\u0441\u043a\u043b\u0430\u0434\u043a\u0430 \u0432\u0435\u0449\u0435\u0439 "),
                        x.bc(),
                        x.bc(),
                        x.Qc(13, Xe, 4, 2, "section", 6),
                        x.pc(14, "async"),
                        x.Qc(15, Qe, 2, 1, "ng-template", null, 7, x.Rc),
                        x.bc()),
                        2 & e) {
                            const e = x.Gc(16);
                            x.Gb(7),
                            x.wc("nzRotate", 270),
                            x.Gb(2),
                            x.Mb("active", t.isBoxAcceptancePage),
                            x.Gb(2),
                            x.Mb("active", !t.isBoxAcceptancePage),
                            x.Gb(2),
                            x.wc("ngIf", !x.qc(14, 7, t.loading$))("ngIfElse", e)
                        }
                    },
                    directives: [p.d, i.b, M.a, o.o, ee, Ne, d.a],
                    pipes: [o.b],
                    styles: [".acceptance[_ngcontent-%COMP%]{max-width:1180px}.acceptance__header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center}.acceptance__header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{line-height:32px;margin:0}.acceptance__header_courier[_ngcontent-%COMP%]{display:flex;color:#222;cursor:pointer}.acceptance__header_courier[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{font-size:16px;font-weight:600}.acceptance__header_courier[_ngcontent-%COMP%] > i[_ngcontent-%COMP%]{font-size:24px}.acceptance__switcher[_ngcontent-%COMP%]{display:flex;margin:24px 0 36px;border:3px solid #f0f0f0;border-radius:4px;cursor:pointer;background:#f0f0f0}.acceptance__switcher[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:50%;padding:7px 0;font-size:16px;font-weight:600;line-height:24px;text-align:center;transition:.2s}.acceptance__switcher[_ngcontent-%COMP%] > div.active[_ngcontent-%COMP%]{background:#fff;cursor:auto}.spiner[_ngcontent-%COMP%]{display:flex;justify-content:center;margin-top:50px}@media (max-width:1023px){.acceptance[_ngcontent-%COMP%]{margin:0 -12px}.acceptance__header[_ngcontent-%COMP%]{padding:0 16px}.acceptance__header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:20px;line-height:24px}.acceptance__header_courier[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{font-size:14px}.acceptance__header_courier[_ngcontent-%COMP%] > i[_ngcontent-%COMP%]{font-size:20px}.acceptance__switcher[_ngcontent-%COMP%]{margin:24px 16px;border:2px solid #f0f0f0}.acceptance__switcher[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{font-size:13px;font-weight:400;line-height:18px}.acceptance__switcher[_ngcontent-%COMP%] > div.active[_ngcontent-%COMP%]{font-weight:600}}"],
                    changeDetection: 0
                }),
                Object(C.c)([Object(g.a)({
                    width: 1024
                }), Object(C.f)("design:type", Object)], e.prototype, "isMobile", void 0),
                e = Object(C.c)([Object(f.a)()], e),
                e
            }
            )()
        }];
        let qe = ( () => {
            class e {
            }
            return e.\u0275mod = x.Ub({
                type: e
            }),
            e.\u0275inj = x.Tb({
                factory: function(t) {
                    return new (t || e)
                },
                imports: [[p.g.forChild(We)], p.g]
            }),
            e
        }
        )();
        var Ke = n("x/g9")
          , Ye = n("LW3/")
          , Je = n("pKmL");
        let et = ( () => {
            class e {
            }
            return e.\u0275mod = x.Ub({
                type: e
            }),
            e.\u0275inj = x.Tb({
                factory: function(t) {
                    return new (t || e)
                },
                providers: [V],
                imports: [[r.k, o.c, i.c, T.b, c.d, a.c, h.b, r.u]]
            }),
            e
        }
        )()
          , tt = ( () => {
            class e {
            }
            return e.\u0275mod = x.Ub({
                type: e
            }),
            e.\u0275inj = x.Tb({
                factory: function(t) {
                    return new (t || e)
                },
                providers: [Ye.a],
                imports: [[o.c, r.k, r.u, qe, i.c, c.d, s.b, a.c, l.b, u.b, d.b, Ke.a, Je.a, h.b, et]]
            }),
            e
        }
        )()
    },
    hmWi: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return s
        }
        ));
        var o = n("ofXK")
          , r = n("zXOW")
          , i = n("FwiY")
          , c = n("fXoL");
        let s = ( () => {
            class e {
            }
            return e.\u0275mod = c.Ub({
                type: e
            }),
            e.\u0275inj = c.Tb({
                factory: function(t) {
                    return new (t || e)
                },
                providers: [],
                imports: [[o.c, r.a, i.c]]
            }),
            e
        }
        )()
    },
    hzYp: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return i
        }
        ));
        var o = n("fXoL")
          , r = n("ofXK");
        let i = ( () => {
            class e {
                constructor(e) {
                    this.location = e
                }
                onClick() {
                    this.location.back()
                }
            }
            return e.\u0275fac = function(t) {
                return new (t || e)(o.Wb(r.j))
            }
            ,
            e.\u0275dir = o.Rb({
                type: e,
                selectors: [["", "backButton", ""]],
                hostBindings: function(e, t) {
                    1 & e && o.kc("click", (function() {
                        return t.onClick()
                    }
                    ))
                }
            }),
            e
        }
        )()
    },
    imib: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return u
        }
        ));
        var o = n("fXoL")
          , r = n("ofXK")
          , i = n("FwiY");
        function c(e, t) {
            1 & e && o.Xb(0, "i", 9)
        }
        function s(e, t) {
            1 & e && o.Xb(0, "i", 10)
        }
        function a(e, t) {
            if (1 & e) {
                const e = o.dc();
                o.cc(0, "img", 11, 12),
                o.kc("error", (function() {
                    o.Ic(e);
                    const t = o.Gc(1);
                    return o.oc().hideImage(t)
                }
                ))("loadstart", (function() {
                    o.Ic(e);
                    const t = o.Gc(1);
                    return o.oc().showImage(t)
                }
                )),
                o.bc()
            }
            if (2 & e) {
                const e = o.oc();
                o.wc("src", e.images[e.selectedImg], o.Lc)
            }
        }
        function l(e, t) {
            1 & e && o.Xb(0, "i", 13)
        }
        let u = ( () => {
            class e {
                constructor() {
                    this.selectedImg = 0,
                    this.onChangeSelectedImg = new o.n
                }
                ngOnChanges(e) {
                    var t;
                    e.images && (this.selectedImg = (null === (t = e.images.currentValue) || void 0 === t ? void 0 : t.length) ? 0 : -1)
                }
                goLeft() {
                    this.selectedImg -= 1,
                    this.onChangeSelectedImg.emit(this.selectedImg)
                }
                goRight() {
                    this.selectedImg += 1,
                    this.onChangeSelectedImg.emit(this.selectedImg)
                }
                hideImage(e) {
                    e.style.display = "none"
                }
                showImage(e) {
                    e.style.display = "block"
                }
            }
            return e.\u0275fac = function(t) {
                return new (t || e)
            }
            ,
            e.\u0275cmp = o.Qb({
                type: e,
                selectors: [["app-img-carousel"]],
                inputs: {
                    images: "images",
                    selectedImg: "selectedImg"
                },
                outputs: {
                    onChangeSelectedImg: "onChangeSelectedImg"
                },
                features: [o.Eb],
                decls: 11,
                vars: 8,
                consts: [[1, "container"], [1, "container-button", "left", 3, "disabled", "click"], ["nz-icon", "", "nzType", "left", "nzTheme", "outline", 4, "ngIf"], [1, "container-image"], ["class", "transparent-icon", "nz-icon", "", "nzType", "text-file", "nzTheme", "outline", 4, "ngIf", "ngIfElse"], ["imageTemplate", ""], [1, "container-button", "right", 3, "disabled", "click"], ["nz-icon", "", "nzType", "right", "nzTheme", "outline", 4, "ngIf"], [1, "counter"], ["nz-icon", "", "nzType", "left", "nzTheme", "outline"], ["nz-icon", "", "nzType", "text-file", "nzTheme", "outline", 1, "transparent-icon"], [1, "container-image_img", 3, "src", "error", "loadstart"], ["image", ""], ["nz-icon", "", "nzType", "right", "nzTheme", "outline"]],
                template: function(e, t) {
                    if (1 & e && (o.cc(0, "section", 0),
                    o.cc(1, "button", 1),
                    o.kc("click", (function() {
                        return t.goLeft()
                    }
                    )),
                    o.Qc(2, c, 1, 0, "i", 2),
                    o.bc(),
                    o.cc(3, "div", 3),
                    o.Qc(4, s, 1, 0, "i", 4),
                    o.Qc(5, a, 2, 1, "ng-template", null, 5, o.Rc),
                    o.bc(),
                    o.cc(7, "button", 6),
                    o.kc("click", (function() {
                        return t.goRight()
                    }
                    )),
                    o.Qc(8, l, 1, 0, "i", 7),
                    o.bc(),
                    o.bc(),
                    o.cc(9, "article", 8),
                    o.Sc(10),
                    o.bc()),
                    2 & e) {
                        const e = o.Gc(6);
                        o.Gb(1),
                        o.wc("disabled", !(null != t.images && t.images.length) || t.selectedImg <= 0),
                        o.Gb(1),
                        o.wc("ngIf", t.selectedImg > 0),
                        o.Gb(2),
                        o.wc("ngIf", t.selectedImg < 0)("ngIfElse", e),
                        o.Gb(3),
                        o.wc("disabled", !(null != t.images && t.images.length) || t.selectedImg === t.images.length - 1),
                        o.Gb(1),
                        o.wc("ngIf", (null == t.images ? null : t.images.length) && t.selectedImg !== t.images.length - 1),
                        o.Gb(2),
                        o.Vc("", t.selectedImg + 1, " / ", (null == t.images ? null : t.images.length) || 0, "")
                    }
                },
                directives: [r.o, i.b],
                styles: [".container[_ngcontent-%COMP%]{display:flex;height:270px;margin-bottom:4px}.container-button[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;width:48px;min-width:48px;background:hsla(0,0%,97.6%,.72);border-radius:4px;border:none;outline:none}.container-button.left[_ngcontent-%COMP%]{margin-right:4px}.container-button.right[_ngcontent-%COMP%]{margin-left:4px}.container-button[_ngcontent-%COMP%] > i[_ngcontent-%COMP%]{font-size:18px;color:rgba(0,0,0,.85)}.container-image[_ngcontent-%COMP%]{background:hsla(0,0%,97.6%,.72);width:100%;height:100%;display:flex;align-items:center;justify-content:center}.container-image[_ngcontent-%COMP%] > i[_ngcontent-%COMP%]{font-size:130px;color:#999}.container-image_img[_ngcontent-%COMP%]{object-fit:contain;width:100%;height:100%}.counter[_ngcontent-%COMP%]{text-align:center;font-size:12px;line-height:20px;letter-spacing:.2px;color:#bdbdbd}"]
            }),
            e
        }
        )()
    },
    jAVn: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return c
        }
        ));
        var o = n("AytR")
          , r = n("fXoL")
          , i = n("tk/3");
        let c = ( () => {
            class e {
                constructor(e) {
                    this.http = e
                }
                getDebtDetail(e) {
                    return this.http.get(`${o.a.urls.baseUrl}/api/lost_shk/api/v1/losses/get?employee=${e}`)
                }
                getDebtDocDetail(e) {
                    return this.http.get(`${o.a.urls.baseUrl}/api/lost_shk/api/v1/losses/info/${e}`)
                }
            }
            return e.\u0275fac = function(t) {
                return new (t || e)(r.gc(i.c))
            }
            ,
            e.\u0275prov = r.Sb({
                token: e,
                factory: e.\u0275fac
            }),
            e
        }
        )()
    },
    kMgu: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return o
        }
        ));
        var o = function(e) {
            return e.clientCard = "isOpenedClientCard",
            e.clientPayments = "isOpenedPayments",
            e
        }({})
    },
    kiQV: function(e) {
        e.exports = JSON.parse('{"name":"pvz-front","version":"1.90.41","scripts":{"ng":"ng","start":"ng serve --host 0.0.0.0","build":"ng build","db":"ng build --output-path ../bin/Debug/netcoreapp2.2/publish/Front/dist","build:ru":"node --max_old_space_size=8192 node_modules/@angular/cli/bin/ng build --configuration=ru && gzipper --verbose --gzip-level=9 ./dist ./dist/gzipped -r","build:npos":"node --max_old_space_size=8192 node_modules/@angular/cli/bin/ng build --configuration=npos && gzipper --verbose --gzip-level=9 ./dist ./dist/gzipped -r","build:npos_dev":"node --max_old_space_size=8192 node_modules/@angular/cli/bin/ng build --configuration=npos_dev && gzipper --verbose --gzip-level=9 ./dist ./dist/gzipped -r","build:npos_test":"node --max_old_space_size=8192 node_modules/@angular/cli/bin/ng build --configuration=npos_test && gzipper --verbose --gzip-level=9 ./dist ./dist/gzipped -r","build:ssr":"ng run pvz-front:server:dev","test":"ng test","test:ci":"ng test --karma-config=karma-ci.conf.js --no-progress","tc":"npm run test:ci","lint":"ng lint","e2e":"ng e2e","npos":"ng serve --configuration npos","npos_dev":"ng serve --configuration npos_dev --host 0.0.0.0"},"private":true,"dependencies":{"@angular/animations":"~9.1.9","@angular/cli":"9.1.6","@angular/common":"~9.1.9","@angular/compiler":"~9.1.9","@angular/core":"9.1.9","@angular/forms":"~9.1.9","@angular/platform-browser":"~9.1.9","@angular/platform-browser-dynamic":"~9.1.9","@angular/pwa":"^0.901.8","@angular/router":"~9.1.9","@angular/service-worker":"^8.2.14","@ngneat/until-destroy":"^7.1.6","@ngx-translate/core":"^11.0.1","@ngx-translate/http-loader":"^4.0.0","angular-imask":"6.2.2","core-js":"^3.4.7","decimal.js":"^10.2.0","gzipper":"^3.4.1","html5-qrcode":"^2.1.2","http-server":"^0.12.0","js_custom_lib":"0.0.18","jsbarcode":"3.11.0","jwt-decode":"^2.2.0","ng-zorro-antd":"^9.3.0","ngx-mask":"^9.0.2","pdf-lib":"1.0.1","pdfmake":"^0.1.64","qrcode-generator":"^1.4.4","rxjs":"~6.5.3","tslib":"^1.10.0","tslint":"^6.0.0-beta0","yarn":"^1.21.1","zone.js":"~0.10.2"},"devDependencies":{"@angular-devkit/build-angular":"~0.901.6","@angular/compiler-cli":"9.1.9","@angular/language-service":"~9.1.9","@types/dom-inputevent":"1.0.5","@types/jasmine":"~3.3.8","@types/jasminewd2":"~2.0.3","@types/node":"^12.12.14","codelyzer":"^5.2.2","jasmine-core":"^3.5.0","jasmine-spec-reporter":"~4.2.1","karma":"^4.4.1","karma-chrome-launcher":"~2.2.0","karma-coverage-istanbul-reporter":"~2.0.1","karma-jasmine":"~2.0.1","karma-jasmine-html-reporter":"^1.4.0","ts-node":"~8.5.4","typescript":"3.8.3"}}')
    },
    lI3o: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return s
        }
        ));
        var o = n("fXoL")
          , r = n("LRne")
          , i = n("bNXi")
          , c = n("sYmb");
        let s = ( () => {
            class e {
                constructor(e, t) {
                    this.service = e,
                    this.translateService = t
                }
                success(e, t) {
                    e instanceof o.L ? this.service.template(e, Object.assign({
                        nzDuration: 7e3
                    }, t)) : this.service.template(this._successTemplate, Object.assign({
                        nzData: {
                            content: e
                        },
                        nzDuration: 7e3
                    }, t))
                }
                error(e, t, n) {
                    this._errorMessage = this.service.template(this._errorTemplate, {
                        nzData: {
                            content: e,
                            errorCode: t,
                            header: n
                        },
                        nzDuration: 3e4
                    })
                }
                warning(e, t, n) {
                    this._lastWarningMessage && this.deleteLastWarning(),
                    this._lastWarningMessage = this.service.template(this._warningTemplate, {
                        nzData: {
                            content: e,
                            text: t
                        },
                        nzDuration: 0,
                        nzClass: n
                    })
                }
                deleteLastWarning() {
                    this._lastWarningMessage && (this.service.remove(this._lastWarningMessage.messageId),
                    this._lastWarningMessage = void 0)
                }
                deleteLastError() {
                    this._errorMessage && (this.service.remove(this._errorMessage.messageId),
                    this._errorMessage = void 0)
                }
                setSuccessTemplate(e) {
                    this._successTemplate = e
                }
                setErrorTemplate(e) {
                    this._errorTemplate = e
                }
                setWarningTemplate(e) {
                    this._warningTemplate = e
                }
                showTranslatableErrorWithEmptyObservable(e, t) {
                    return this.error(this.translateService.instant(e, t)),
                    Object(r.a)()
                }
            }
            return e.\u0275fac = function(t) {
                return new (t || e)(o.gc(i.b),o.gc(c.d))
            }
            ,
            e.\u0275prov = o.Sb({
                token: e,
                factory: e.\u0275fac
            }),
            e
        }
        )()
    },
    lwos: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return c
        }
        ));
        var o = n("HDdC")
          , r = n("ofXK")
          , i = n("fXoL");
        let c = ( () => {
            class e {
                constructor(e) {
                    this.document = e
                }
                load(e) {
                    const t = this.document.createElement("script");
                    t.type = "text/javascript",
                    t.async = !1,
                    t.defer = !0,
                    t.src = e;
                    const n = new o.a(e => {
                        t.onload = t => (t => {
                            e.next(t),
                            e.complete()
                        }
                        )(t),
                        t.onerror = t => (t => {
                            e.error(t)
                        }
                        )(t)
                    }
                    );
                    return this.document.body.appendChild(t),
                    n
                }
            }
            return e.\u0275fac = function(t) {
                return new (t || e)(i.gc(r.d))
            }
            ,
            e.\u0275prov = i.Sb({
                token: e,
                factory: e.\u0275fac,
                providedIn: "root"
            }),
            e
        }
        )()
    },
    mX84: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return c
        }
        ));
        var o = n("AytR")
          , r = n("fXoL")
          , i = n("tk/3");
        let c = ( () => {
            class e {
                constructor(e) {
                    this.http = e
                }
                invent(e) {
                    return this.http.post(o.a.urls.baseUrl + "/api/package/invent", e)
                }
            }
            return e.\u0275fac = function(t) {
                return new (t || e)(r.gc(i.c))
            }
            ,
            e.\u0275prov = r.Sb({
                token: e,
                factory: e.\u0275fac,
                providedIn: "root"
            }),
            e
        }
        )()
    },
    pKmL: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return Z
        }
        ));
        var o = n("3Pt+")
          , r = n("fXoL")
          , i = n("ofXK")
          , c = n("ceTk")
          , s = n("tk/3")
          , a = n("tyNb")
          , l = n("/MIr")
          , u = n("OsF4")
          , d = n("sYmb");
        let h = ( () => {
            class e {
                constructor(e, t, n) {
                    this._elS = e,
                    this.translateService = t,
                    this.loggerService = n
                }
                handleError(e) {
                    this.loggerService.addLog({
                        type: "error",
                        msg: e.message,
                        title: "ErrorHandler",
                        stack: e.stack
                    }),
                    this._elS.show(e.message, this.translateService.instant("wavebreaker.error"), "error")
                }
            }
            return e.\u0275fac = function(t) {
                return new (t || e)(r.gc(l.a),r.gc(d.d),r.gc(u.a))
            }
            ,
            e.\u0275prov = r.Sb({
                token: e,
                factory: e.\u0275fac,
                providedIn: "root"
            }),
            e
        }
        )();
        var p = n("z6cu")
          , C = n("JIr8")
          , g = n("eIep")
          , f = n("vkgz")
          , b = n("Vurf")
          , m = n("AytR");
        let v = ( () => {
            class e {
                constructor(e, t, n) {
                    this._elS = e,
                    this.translateService = t,
                    this.authService = n
                }
                intercept(e, t) {
                    return t.handle(e).pipe(Object(C.a)(n => {
                        if (n instanceof s.e) {
                            if (e.headers.get("skip"))
                                return t.handle(e);
                            switch (n.status) {
                            case 401:
                                if (!m.a.npos)
                                    return this.authService.user && this._elS.show(this.translateService.instant("wavebreaker.unauthorized"), this.translateService.instant("wavebreaker.error"), "error"),
                                    this.authService.logout(window.location.pathname).pipe(Object(g.a)( () => Object(p.a)(n)));
                                break;
                            case 400:
                                return Object(p.a)(n);
                            default:
                                return this._elS.show(n.error, this.translateService.instant("shared.error"), "error"),
                                Object(p.a)(n)
                            }
                        }
                    }
                    ), Object(f.a)(e => this._elS.dismiss(e)))
                }
            }
            return e.\u0275fac = function(t) {
                return new (t || e)(r.gc(l.a),r.gc(d.d),r.gc(b.a))
            }
            ,
            e.\u0275prov = r.Sb({
                token: e,
                factory: e.\u0275fac,
                providedIn: "root"
            }),
            e
        }
        )();
        var k = n("3G0t")
          , w = n("lwos")
          , _ = n("HDdC");
        let x = ( () => {
            class e {
                onUserBlocked() {
                    try {
                        null === Mobile || void 0 === Mobile || Mobile.onUserBlocked()
                    } catch (e) {}
                }
            }
            return e.\u0275fac = function(t) {
                return new (t || e)
            }
            ,
            e.\u0275prov = r.Sb({
                token: e,
                factory: e.\u0275fac,
                providedIn: "root"
            }),
            e
        }
        )();
        var M = n("Ek/g")
          , y = n("sL4t")
          , S = n("lI3o");
        let O = ( () => {
            class e {
                constructor(e, t, n, o, r, i, c) {
                    this.authService = e,
                    this._officeService = t,
                    this._stateService = n,
                    this._router = o,
                    this._notification = r,
                    this.http = i,
                    this._mobile = c,
                    this.requests = []
                }
                intercept(e, t) {
                    return m.a.npos ? new _.a(n => {
                        const o = t.handle(e).subscribe(e => {
                            n.next(e)
                        }
                        , t => {
                            401 === t.status ? this.handleUnauthorizedError(n, e) : 403 === t.status ? this.clearOffice() : 423 === t.status ? (this._notification.error("\u0414\u043e\u0441\u0442\u0443\u043f \u0437\u0430\u0431\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u0430\u043d"),
                            this.authService.logout().subscribe()) : n.error(t)
                        }
                        , () => {
                            n.complete()
                        }
                        );
                        return () => {
                            o.unsubscribe()
                        }
                    }
                    ) : t.handle(e)
                }
                handleUnauthorizedError(e, t) {
                    this.requests.push({
                        subscriber: e,
                        failedRequest: t
                    }),
                    this.refreshInProgress || (this.refreshInProgress = !0,
                    this.authService.refreshLogin().pipe(Object(f.a)( () => {
                        this.refreshInProgress = !1,
                        this.repeatFailedRequests(this.authService.user.accessToken)
                    }
                    ), Object(C.a)( () => (this._mobile.onUserBlocked(),
                    this.authService.logout()))).subscribe())
                }
                repeatFailedRequests(e) {
                    this.requests.forEach(t => {
                        const n = t.failedRequest.headers;
                        n.Authorization = "Bearer " + e;
                        const o = t.failedRequest.clone({
                            headers: n
                        });
                        this.repeatRequest(o, t.subscriber)
                    }
                    ),
                    this.requests = []
                }
                repeatRequest(e, t) {
                    this.http.request(e).subscribe(e => {
                        t.next(e)
                    }
                    , e => {
                        401 === e.status && this.authService.logout().subscribe(),
                        t.error(e)
                    }
                    , () => {
                        t.complete()
                    }
                    )
                }
                clearOffice() {
                    this._officeService.removeOffice(),
                    this._stateService.destroySubject$.next(!1),
                    localStorage.removeItem("cur_office"),
                    this._router.navigate(["/activate-office"])
                }
            }
            return e.\u0275fac = function(t) {
                return new (t || e)(r.gc(b.a),r.gc(M.a),r.gc(y.a),r.gc(a.c),r.gc(S.a),r.gc(s.c),r.gc(x))
            }
            ,
            e.\u0275prov = r.Sb({
                token: e,
                factory: e.\u0275fac,
                providedIn: "root"
            }),
            e
        }
        )()
          , L = ( () => {
            class e {
                constructor(e, t, n) {
                    this.translateService = e,
                    this.authService = t,
                    this.officeService = n
                }
                intercept(e, t) {
                    var n;
                    const o = window.location.hostname;
                    let r = e.url;
                    if ((null == o ? void 0 : o.includes(".wildberries.by")) && (null === (n = e.url) || void 0 === n ? void 0 : n.includes(".wildberries.ru"))) {
                        r = e.url.replace(".wildberries.ru", ".wildberries.by");
                        const n = e.clone({
                            url: r
                        });
                        return n.headers.get("Authorization") ? t.handle(n) : t.handle(this.addHeadersToRequest(n))
                    }
                    return e.headers.get("Authorization") ? t.handle(e) : t.handle(this.addHeadersToRequest(e))
                }
                addHeadersToRequest(e) {
                    const t = {};
                    return this.authService.user && this.authService.user.accessToken && (t.Authorization = "Bearer " + this.authService.user.accessToken),
                    this.officeService.office && this.officeService.office.office_sign && (t["X-Office-Sign"] = this.officeService.office.office_sign),
                    e.clone({
                        setHeaders: t
                    })
                }
            }
            return e.\u0275fac = function(t) {
                return new (t || e)(r.gc(d.d),r.gc(b.a),r.gc(M.a))
            }
            ,
            e.\u0275prov = r.Sb({
                token: e,
                factory: e.\u0275fac,
                providedIn: "root"
            }),
            e
        }
        )();
        var P = n("yW9e")
          , z = n("OzZK")
          , I = n("FwiY")
          , V = n("nJia")
          , j = n("+oEP")
          , T = n("PTRe")
          , H = n("TaO5")
          , B = n("F6ss");
        let Z = ( () => {
            class e {
            }
            return e.\u0275mod = r.Ub({
                type: e
            }),
            e.\u0275inj = r.Tb({
                factory: function(t) {
                    return new (t || e)
                },
                providers: [w.a, c.a, k.a, {
                    provide: r.m,
                    useClass: h
                }, {
                    provide: s.a,
                    useClass: v,
                    multi: !0
                }, {
                    provide: s.a,
                    useClass: O,
                    multi: !0
                }, {
                    provide: s.a,
                    useClass: L,
                    multi: !0
                }],
                imports: [[o.k, i.c, s.d, a.g, o.u, d.b, P.a, z.c, I.c, V.b, j.b, T.d, H.b, B.b]]
            }),
            e
        }
        )()
    },
    qJyV: function(e, t, n) {
        "use strict";
        n.r(t),
        n.d(t, "CouriersModule", (function() {
            return be
        }
        ));
        var o = n("ofXK")
          , r = n("3Pt+")
          , i = n("tyNb")
          , c = n("mrSG")
          , s = n("VfN6")
          , a = n("Ek/g")
          , l = n("lI3o")
          , u = n("LW3/")
          , d = n("Q7je")
          , h = n("vkgz")
          , p = n("nYR2")
          , C = n("tk/3")
          , g = n("AytR")
          , f = (n("JN1X"),
        n("fXoL"));
        let b = ( () => {
            class e {
                constructor(e) {
                    this.http = e
                }
                getTasks() {
                    return this.http.get(g.a.urls.baseUrl + "/api/courier-delivery/tasks")
                }
                getTaskDetails(e, t) {
                    let n = new C.h;
                    return t ? n = n.append("taskUid", t) : e && (n = n.append("taskId", e.toString())),
                    this.http.get(g.a.urls.baseUrl + "/api/courier-delivery/task-details", {
                        params: n
                    })
                }
                getActiveCouriers() {
                    return this.http.get(g.a.urls.baseUrl + "/api/courier-delivery/active-couriers")
                }
                getCourierItems(e, t, n) {
                    let o = new C.h({
                        fromObject: {
                            courierId: e
                        }
                    });
                    return t && (o = o.append("company", t)),
                    n && (o = o.append("uid", n)),
                    this.http.get(g.a.urls.baseUrl + "/api/courier-delivery/courier-items", {
                        params: o
                    })
                }
                acceptItem(e, t, n, o) {
                    let r = new C.h({
                        fromObject: {
                            courierId: e,
                            shkId: null == n ? void 0 : n.toString()
                        }
                    });
                    return t && (r = r.append("company", t)),
                    o && (r = r.append("uid", o)),
                    this.http.post(g.a.urls.baseUrl + "/api/courier-delivery/accept-courier-item", null, {
                        params: r
                    })
                }
            }
            return e.\u0275fac = function(t) {
                return new (t || e)(f.gc(C.c))
            }
            ,
            e.\u0275prov = f.Sb({
                token: e,
                factory: e.\u0275fac,
                providedIn: "root"
            }),
            e
        }
        )();
        var m = n("9D+I")
          , v = n("OzZK")
          , k = n("QlLE")
          , w = n("FwiY")
          , _ = n("rMZv")
          , x = n("RwU8")
          , M = n("C2AL")
          , y = n("hzYp")
          , S = n("WLoL");
        const O = ["shkInput"];
        function L(e, t) {
            1 & e && (f.cc(0, "li"),
            f.Sc(1, "\u041f\u0435\u0440\u0435\u043d\u043e\u0441\u044b \u043f\u0435\u0440\u0435\u043c\u0435\u0449\u0430\u0435\u043c \u043d\u0430 "),
            f.cc(2, "a", 9),
            f.Sc(3, "\u043f\u043e\u043b\u043a\u0438"),
            f.bc(),
            f.bc())
        }
        function P(e, t) {
            1 & e && (f.ac(0),
            f.Sc(1, "/\u0432\u0435\u0449\u0438 \u0441 \u0434\u0440\u0443\u0433\u043e\u0433\u043e \u043f\u0432\u0437"),
            f.Zb())
        }
        function z(e, t) {
            1 & e && f.Xb(0, "nz-empty", 10),
            2 & e && f.wc("nzNotFoundContent", null)
        }
        function I(e, t) {
            if (1 & e && (f.cc(0, "span"),
            f.Xb(1, "br"),
            f.Sc(2),
            f.bc()),
            2 & e) {
                const e = f.oc().$implicit;
                f.Gb(2),
                f.Tc(e.stickerId)
            }
        }
        const V = function(e, t) {
            return {
                active: e,
                selected: t
            }
        };
        function j(e, t) {
            if (1 & e) {
                const e = f.dc();
                f.ac(0),
                f.cc(1, "tr", 25),
                f.kc("click", (function() {
                    f.Ic(e);
                    const n = t.$implicit;
                    return f.oc(2).selectProduct(n)
                }
                )),
                f.cc(2, "td"),
                f.Sc(3),
                f.Qc(4, I, 3, 1, "span", 5),
                f.bc(),
                f.cc(5, "td"),
                f.Sc(6),
                f.bc(),
                f.cc(7, "td"),
                f.Sc(8),
                f.bc(),
                f.cc(9, "td"),
                f.Sc(10),
                f.bc(),
                f.cc(11, "td"),
                f.Sc(12),
                f.bc(),
                f.bc(),
                f.Zb()
            }
            if (2 & e) {
                const e = t.$implicit
                  , n = f.oc(2);
                f.Gb(1),
                f.wc("ngClass", f.Cc(7, V, e == n.selectedProduct, e.isSelected)),
                f.Gb(2),
                f.Uc(" ", e.shkId, " "),
                f.Gb(1),
                f.wc("ngIf", e.stickerId),
                f.Gb(2),
                f.Uc(" ", e.name, " "),
                f.Gb(2),
                f.Uc(" ", e.userName, " "),
                f.Gb(2),
                f.Uc(" ", n.getStatus(e), " "),
                f.Gb(2),
                f.Uc(" ", e.locationName, " ")
            }
        }
        function T(e, t) {
            if (1 & e) {
                const e = f.dc();
                f.cc(0, "div"),
                f.cc(1, "div", 11),
                f.cc(2, "div", 12),
                f.cc(3, "input", 13, 14),
                f.kc("keydown.enter", (function() {
                    return f.Ic(e),
                    f.oc().acceptItem()
                }
                ))("keydown", (function(t) {
                    return f.Ic(e),
                    f.oc().collectShkString(t)
                }
                ))("ngModelChange", (function(t) {
                    return f.Ic(e),
                    f.oc().itemShk = t
                }
                )),
                f.bc(),
                f.cc(5, "button", 15),
                f.kc("click", (function() {
                    return f.Ic(e),
                    f.oc().acceptItem()
                }
                )),
                f.Sc(6, "\u041f\u0440\u0438\u043d\u044f\u0442\u044c"),
                f.bc(),
                f.bc(),
                f.bc(),
                f.cc(7, "h3", 16),
                f.Xb(8, "i", 17),
                f.Sc(9),
                f.bc(),
                f.cc(10, "div", 18),
                f.cc(11, "div", 19),
                f.cc(12, "nz-table", 20, 21),
                f.cc(14, "thead"),
                f.cc(15, "tr"),
                f.cc(16, "th"),
                f.Sc(17, "\u0428\u041a/\u0421\u0442\u0438\u043a\u0435\u0440"),
                f.bc(),
                f.cc(18, "th"),
                f.Sc(19, "\u041d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435"),
                f.bc(),
                f.cc(20, "th"),
                f.Sc(21, "\u041a\u043b\u0438\u0435\u043d\u0442"),
                f.bc(),
                f.cc(22, "th"),
                f.Sc(23, "\u0421\u0442\u0430\u0442\u0443\u0441"),
                f.bc(),
                f.cc(24, "th"),
                f.Sc(25, "\u041c\u0425"),
                f.bc(),
                f.bc(),
                f.bc(),
                f.cc(26, "tbody"),
                f.Qc(27, j, 13, 10, "ng-container", 22),
                f.bc(),
                f.bc(),
                f.bc(),
                f.cc(28, "div", 23),
                f.Xb(29, "app-product-description", 24),
                f.bc(),
                f.bc(),
                f.bc()
            }
            if (2 & e) {
                const e = f.Gc(13)
                  , t = f.oc()
                  , n = f.Gc(25);
                f.Gb(3),
                f.wc("ngModel", t.itemShk),
                f.Gb(6),
                f.Uc(" ", null == t.courierItems || null == t.courierItems.courierInfo ? null : t.courierItems.courierInfo.name, " "),
                f.Gb(3),
                f.wc("nzData", t.returnItems)("nzPageSize", 100)("nzNoResult", n)("nzHideOnSinglePage", !0),
                f.Gb(15),
                f.wc("ngForOf", e.data),
                f.Gb(2),
                f.wc("product", t.selectedProduct)
            }
        }
        function H(e, t) {
            1 & e && (f.cc(0, "p"),
            f.Sc(1, " \u041d\u0435\u0442 \u043f\u043e\u0434\u0445\u043e\u0434\u044f\u0449\u0438\u0445 \u0442\u043e\u0432\u0430\u0440\u043e\u0432 "),
            f.bc())
        }
        let B = ( () => {
            let e = class {
                constructor(e, t, n, o, r, i) {
                    this.route = e,
                    this.courierDeliveriesService = t,
                    this.notificationsService = n,
                    this.dataMatrixCollectionService = o,
                    this.shkService = r,
                    this.officeService = i,
                    this.loading = !1
                }
                ngOnInit() {
                    this.company = this.route.snapshot.paramMap.get("company"),
                    this.courierId = this.route.snapshot.paramMap.get("courierId"),
                    this.courierTaskUid = this.route.snapshot.paramMap.get("courierTaskUid"),
                    this.officeId = this.officeService.office.office_id,
                    this.loadCourierItems()
                }
                get isGuestCourier() {
                    return !!this.courierTaskUid
                }
                flush() {
                    this.itemShk = "",
                    this.setFocus()
                }
                setFocus() {
                    setTimeout( () => {
                        this.shkInput && this.shkInput.nativeElement.focus()
                    }
                    )
                }
                collectShkString(e) {
                    this.itemShk += this.dataMatrixCollectionService.collectShkString(e)
                }
                loadCourierItems() {
                    this.loading = !0,
                    this.courierDeliveriesService.getCourierItems(this.courierId, this.company, this.courierTaskUid).pipe(Object(s.b)(this), Object(h.a)(e => {
                        var t, n;
                        if (e.error)
                            return void this.notificationsService.error(e.error.message);
                        const o = class {
                            static mapdata(e) {
                                return {
                                    courierInfo: e.courierInfo,
                                    items: e.items.map(e => ({
                                        shkId: e.shkId,
                                        docTypeId: null,
                                        stickerId: e.stickerId,
                                        rid: Number(e.rid),
                                        srid: "",
                                        barcode: e.barcode,
                                        locationName: e.locationName,
                                        clientName: "",
                                        name: e.name,
                                        size: e.size,
                                        brandName: e.brandName,
                                        contents: e.contents,
                                        description: "",
                                        price: null,
                                        imgUrls: e.imgUrls,
                                        siteUrl: e.siteUrl,
                                        rStatus: "",
                                        locationId: null,
                                        locationTypeId: e.locationType,
                                        shkType: e.shkType,
                                        statusId: e.statusId,
                                        safePackId: e.safePackId,
                                        officeId: e.officeId,
                                        article: null,
                                        comment: "",
                                        userName: e.userName,
                                        isSupplierReturn: ""
                                    }))
                                }
                            }
                        }
                        .mapdata(e);
                        this.flush(),
                        this.courierItems = o,
                        this.returnItems = (this.courierItems.items || []).filter(e => (2 === e.statusId || 3 === e.statusId && (e.officeId === +this.officeId || !this.isGuestCourier)) && e.locationTypeId === m.a.Courier),
                        (null === (t = null == o ? void 0 : o.courierInfo) || void 0 === t ? void 0 : t.courierId) && (null === (n = null == o ? void 0 : o.courierInfo) || void 0 === n ? void 0 : n.company) && (this.courierId = o.courierInfo.courierId,
                        this.company = o.courierInfo.company)
                    }
                    ), Object(p.a)( () => {
                        this.loading = !1
                    }
                    )).subscribe()
                }
                selectProduct(e) {
                    this.selectedProduct = e
                }
                getStatus(e) {
                    switch (e.statusId) {
                    case 1:
                        return "\u043f\u0440\u043e\u0434\u0430\u043d";
                    case 2:
                        return "\u0432\u043e\u0437\u0432\u0440\u0430\u0442";
                    case 3:
                        return "\u043f\u0435\u0440\u0435\u043d\u043e\u0441";
                    default:
                        return "\u043d\u0435 \u0443\u043a\u0430\u0437\u0430\u043d"
                    }
                }
                acceptItem() {
                    const e = this.itemShk;
                    this.flush(),
                    this.shkService.decode(e).pipe(Object(s.b)(this), Object(h.a)(e => {
                        const t = this.courierItems.items.find(t => t.shkId === +e.shk || t.stickerId === +e.shk || t.safePackId === +e.shk);
                        null == t ? this.notificationsService.error("\u0422\u043e\u0432\u0430\u0440 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d \u0443 \u043a\u0443\u0440\u044c\u0435\u0440\u0430") : 1 === t.statusId ? this.notificationsService.error("\u0422\u043e\u0432\u0430\u0440 \u043f\u0440\u043e\u0434\u0430\u043d!") : 3 === t.statusId && t.officeId !== this.officeId ? this.notificationsService.error(`\u042d\u0442\u043e\u0442 \u043f\u0435\u0440\u0435\u043d\u043e\u0441 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0441\u0434\u0430\u0442\u044c \u0432 \u043e\u0444\u0438\u0441 ${t.officeId}!`) : 2 === t.statusId || 3 === t.statusId ? this.putItem(t.shkId) : this.notificationsService.error("\u041d\u0435\u043f\u043e\u043d\u044f\u0442\u043d\u044b\u0439 \u0441\u0442\u0430\u0442\u0443\u0441 \u0442\u043e\u0432\u0430\u0440\u0430! \u041f\u043e\u043f\u0440\u043e\u0441\u0438\u0442\u0435 \u043a\u0443\u0440\u044c\u0435\u0440\u0430 \u043f\u043e\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u043f\u043e\u043c\u0435\u0442\u043a\u0443 \u043f\u0440\u043e\u0434\u0430\u0436\u0438\u0432\u043e\u0437\u0432\u0440\u0430\u0442\u0430\u043f\u0435\u0440\u0435\u043d\u043e\u0441\u0430!")
                    }
                    )).subscribe()
                }
                putItem(e) {
                    this.courierDeliveriesService.acceptItem(this.courierId, this.company, e, this.courierTaskUid).pipe(Object(s.b)(this), Object(h.a)(t => {
                        if (t.error)
                            return void this.notificationsService.error(t.error.message);
                        const n = this.courierItems.items.find(t => t.shkId === e);
                        n && (n.isSelected = !0,
                        n.locationName = t.location_name)
                    }
                    )).subscribe()
                }
            }
            ;
            return e.\u0275fac = function(t) {
                return new (t || e)(f.Wb(i.a),f.Wb(b),f.Wb(l.a),f.Wb(u.a),f.Wb(d.a),f.Wb(a.a))
            }
            ,
            e.\u0275cmp = f.Qb({
                type: e,
                selectors: [["app-accept-items"]],
                viewQuery: function(e, t) {
                    var n;
                    1 & e && f.Yc(O, !0),
                    2 & e && f.Fc(n = f.lc()) && (t.shkInput = n.first)
                },
                decls: 26,
                vars: 6,
                consts: [[1, "ui", "padded", "segment"], ["nz-button", "", "nzType", "primary", "backButton", ""], [1, "ui", "segment", "instruction"], [1, "ui", "header"], ["routerLink", "/pvz/boxes"], [4, "ngIf"], ["routerLink", "/pvz/acceptance"], [3, "nzNotFoundContent", 4, "ngIf"], ["noResult", ""], ["routerLink", "/pvz/storage"], [3, "nzNotFoundContent"], [1, "ui", "segment"], [1, "ui", "action", "fluid", "input"], ["type", "text", 3, "ngModel", "keydown.enter", "keydown", "ngModelChange"], ["shkInput", ""], [1, "ui", "button", 3, "click"], [1, "courier-name"], ["nz-icon", "", "nzType", "wb-courier", "nzTheme", "fill"], [1, "ui", "grid"], [1, "twelve", "wide", "column"], [3, "nzData", "nzPageSize", "nzNoResult", "nzHideOnSinglePage"], ["basicTable", ""], [4, "ngFor", "ngForOf"], [1, "four", "wide", "column"], [3, "product"], [1, "product", 3, "ngClass", "click"]],
                template: function(e, t) {
                    1 & e && (f.cc(0, "div", 0),
                    f.cc(1, "button", 1),
                    f.Sc(2, "\u041d\u0430\u0437\u0430\u0434"),
                    f.bc(),
                    f.cc(3, "div", 2),
                    f.cc(4, "h3", 3),
                    f.Sc(5, "\u0412\u043d\u0438\u043c\u0430\u043d\u0438\u0435!"),
                    f.bc(),
                    f.cc(6, "ul"),
                    f.cc(7, "li"),
                    f.Sc(8, "\u0421\u043a\u0430\u043d\u0438\u0440\u0443\u0435\u043c \u0432\u043e\u0437\u0432\u0440\u0430\u0442\u044b \u0438 \u043e\u0442\u043a\u0430\u0437\u044b"),
                    f.bc(),
                    f.cc(9, "li"),
                    f.Sc(10, "\u0412\u0435\u0449\u0438 \u043f\u043e\u044f\u0432\u043b\u044f\u044e\u0442\u0441\u044f \u043d\u0430 \u041c\u0425 \u041f\u0412\u0417"),
                    f.bc(),
                    f.cc(11, "li"),
                    f.Sc(12, "\u0412\u043e\u0437\u0432\u0440\u0430\u0442\u044b \u043f\u0435\u0440\u0435\u043c\u0435\u0449\u0430\u0435\u043c \u0432 "),
                    f.cc(13, "a", 4),
                    f.Sc(14, "\u043a\u043e\u0440\u043e\u0431\u043a\u0438"),
                    f.bc(),
                    f.bc(),
                    f.Qc(15, L, 4, 0, "li", 5),
                    f.cc(16, "li"),
                    f.Sc(17, "\u0415\u0441\u043b\u0438 \u0432\u0435\u0449\u044c \u043d\u0435 \u0441\u043a\u0430\u043d\u0438\u0440\u0443\u0435\u0442\u0441\u044f (\u043a\u0443\u0440\u044c\u0435\u0440 \u043f\u0440\u043e\u0434\u0430\u043b/\u043d\u0435 \u043e\u0442\u043c\u0435\u0442\u0438\u043b \u0432 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0438"),
                    f.Qc(18, P, 2, 0, "ng-container", 5),
                    f.Sc(19, ") - \u043f\u0440\u0438\u043d\u0438\u043c\u0430\u0435\u043c \u0447\u0435\u0440\u0435\u0437 "),
                    f.cc(20, "a", 6),
                    f.Sc(21, "\u0432\u043e\u043b\u043d\u043e\u0440\u0435\u0437"),
                    f.bc(),
                    f.bc(),
                    f.bc(),
                    f.bc(),
                    f.Qc(22, z, 1, 1, "nz-empty", 7),
                    f.Qc(23, T, 30, 8, "div", 5),
                    f.bc(),
                    f.Qc(24, H, 2, 0, "ng-template", null, 8, f.Rc)),
                    2 & e && (f.Mb("loading", t.loading),
                    f.Gb(15),
                    f.wc("ngIf", !t.isGuestCourier),
                    f.Gb(3),
                    f.wc("ngIf", !t.isGuestCourier),
                    f.Gb(4),
                    f.wc("ngIf", !t.loading && !t.courierItems),
                    f.Gb(1),
                    f.wc("ngIf", t.courierItems))
                },
                directives: [v.a, x.a, M.a, y.a, i.f, o.o, k.b, r.d, r.p, r.s, w.b, _.c, _.j, _.k, _.b, _.h, _.e, o.n, S.a, o.m],
                styles: ["tr[_ngcontent-%COMP%]{cursor:pointer}tr.product.active[_ngcontent-%COMP%], tr.product.selected[_ngcontent-%COMP%]{background-color:rgba(82,196,26,.08)}tr[_ngcontent-%COMP%]:hover{background-color:#ebebeb}.instruction[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin-bottom:8px;color:#ff4d4f}.instruction[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{font-size:16px;line-height:27px;color:rgba(0,0,0,.85)}.instruction[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:14px}.instruction[_ngcontent-%COMP%]   .warn[_ngcontent-%COMP%]{font-weight:700}.courier-name[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;margin:24px 0 16px}.courier-name[_ngcontent-%COMP%] > i[_ngcontent-%COMP%]{font-size:24px}"]
            }),
            e = Object(c.c)([Object(s.a)()], e),
            e
        }
        )();
        var Z = n("nJia")
          , F = n("TFtw");
        function G(e, t) {
            1 & e && (f.Sc(0, " \u041e\u0442\u0441\u043a\u0430\u043d\u0438\u0440\u0443\u0439\u0442\u0435 QR-\u043a\u043e\u0434 \u0437\u0430\u0434\u0430\u043d\u0438\u044f"),
            f.Xb(1, "br"),
            f.Sc(2, "\u0438\u0437 \u043a\u0443\u0440\u044c\u0435\u0440\u0441\u043a\u043e\u0433\u043e \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f\n"))
        }
        let D = ( () => {
            class e {
                constructor() {
                    this.onScan = new f.n
                }
                handleScan(e) {
                    e && this.onScan.emit(e)
                }
            }
            return e.\u0275fac = function(t) {
                return new (t || e)
            }
            ,
            e.\u0275cmp = f.Qb({
                type: e,
                selectors: [["app-acceptance-courier-scan"]],
                outputs: {
                    onScan: "onScan"
                },
                decls: 7,
                vars: 1,
                consts: [[1, "scan"], ["nz-icon", "", "nzType", "wb-question-hint", "nzTheme", "outline", "nzTooltipPlacement", "right", 3, "nz-tooltip"], [3, "scan"], ["tooltip", ""]],
                template: function(e, t) {
                    if (1 & e && (f.cc(0, "div", 0),
                    f.cc(1, "span"),
                    f.Sc(2, "\u0412\u043e\u0437\u0432\u0440\u0430\u0442\u044b \u0438 \u043e\u0442\u043a\u0430\u0437\u044b \u0441 \u0434\u0440\u0443\u0433\u0438\u0445 \u041f\u0412\u0417"),
                    f.bc(),
                    f.Xb(3, "i", 1),
                    f.bc(),
                    f.cc(4, "app-barcode-scan-listener", 2),
                    f.kc("scan", (function(e) {
                        return t.handleScan(e)
                    }
                    )),
                    f.bc(),
                    f.Qc(5, G, 3, 0, "ng-template", null, 3, f.Rc)),
                    2 & e) {
                        const e = f.Gc(6);
                        f.Gb(3),
                        f.wc("nz-tooltip", e)
                    }
                },
                directives: [w.b, Z.d, F.a],
                styles: [".scan[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;font-family:Roboto,sans-serif;font-size:16px;font-weight:400;line-height:24px;color:#965eeb}.scan[_ngcontent-%COMP%] > i[_ngcontent-%COMP%]{font-size:24px;cursor:pointer}"],
                changeDetection: 0
            }),
            e
        }
        )();
        function R(e, t) {
            if (1 & e) {
                const e = f.dc();
                f.cc(0, "tr", 8),
                f.kc("click", (function() {
                    f.Ic(e);
                    const n = t.$implicit;
                    return f.oc().goToAcceptance(n.courierInfo)
                }
                )),
                f.cc(1, "td"),
                f.Sc(2),
                f.bc(),
                f.cc(3, "td"),
                f.Sc(4),
                f.bc(),
                f.cc(5, "td"),
                f.Sc(6),
                f.bc(),
                f.cc(7, "td"),
                f.Sc(8),
                f.bc(),
                f.cc(9, "td"),
                f.Sc(10),
                f.bc(),
                f.cc(11, "td"),
                f.Sc(12),
                f.bc(),
                f.cc(13, "td"),
                f.Sc(14),
                f.bc(),
                f.cc(15, "td"),
                f.Sc(16),
                f.bc(),
                f.cc(17, "td"),
                f.cc(18, "button", 9),
                f.kc("click", (function() {
                    f.Ic(e);
                    const n = t.$implicit;
                    return f.oc().goToAcceptance(n.courierInfo)
                }
                )),
                f.Sc(19, "\u0414\u0435\u0442\u0430\u043b\u0438"),
                f.bc(),
                f.bc(),
                f.bc()
            }
            if (2 & e) {
                const e = t.$implicit;
                f.Gb(2),
                f.Vc(" ", e.courierInfo.company, " ", e.courierInfo.name, " "),
                f.Gb(2),
                f.Tc(e.courierInfo.phone),
                f.Gb(2),
                f.Tc(e.taskCount),
                f.Gb(2),
                f.Tc(e.deliveriesCount),
                f.Gb(2),
                f.Tc(e.shksCount),
                f.Gb(2),
                f.Tc(e.soldShksCount),
                f.Gb(2),
                f.Tc(e.returnShksCount),
                f.Gb(2),
                f.Tc(e.postponeShksCount)
            }
        }
        function U(e, t) {
            1 & e && (f.cc(0, "p"),
            f.Sc(1, " \u041d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e :( "),
            f.bc())
        }
        let A = ( () => {
            let e = class {
                constructor(e, t, n, o) {
                    this.courierDeliveriesService = e,
                    this.notificationsService = t,
                    this._activatedRoute = n,
                    this._router = o,
                    this.loading = !1
                }
                ngOnInit() {
                    this.loadActiveCouriers()
                }
                loadActiveCouriers() {
                    this.loading = !0,
                    this.courierDeliveriesService.getActiveCouriers().pipe(Object(s.b)(this), Object(h.a)(e => {
                        e.error ? this.notificationsService.error(e.error.message) : this.activeCouriers = e.filter(e => e.returnShksCount + e.postponeShksCount > 0)
                    }
                    ), Object(p.a)( () => {
                        this.loading = !1
                    }
                    )).subscribe()
                }
                goToAcceptance(e) {
                    this._router.navigate([`./${e.company}/${e.courierId}`], {
                        relativeTo: this._activatedRoute
                    })
                }
                handleScanQr(e) {
                    this._router.navigate(["./guest/" + e], {
                        relativeTo: this._activatedRoute
                    })
                }
            }
            ;
            return e.\u0275fac = function(t) {
                return new (t || e)(f.Wb(b),f.Wb(l.a),f.Wb(i.a),f.Wb(i.c))
            }
            ,
            e.\u0275cmp = f.Qb({
                type: e,
                selectors: [["app-acceptance"]],
                decls: 30,
                vars: 7,
                consts: [[1, "ui", "padded", "segment"], [1, "ui", "header"], [1, "scan"], [3, "onScan"], [3, "nzData", "nzPageSize", "nzNoResult", "nzHideOnSinglePage"], ["basicTable", ""], ["class", "tbl-row", 3, "click", 4, "ngFor", "ngForOf"], ["noResult", ""], [1, "tbl-row", 3, "click"], [1, "ui", "button", 3, "click"]],
                template: function(e, t) {
                    if (1 & e && (f.cc(0, "div", 0),
                    f.cc(1, "h1", 1),
                    f.Sc(2, "\u041f\u0440\u0438\u0435\u043c \u0432\u0435\u0449\u0435\u0439 \u043a\u0443\u0440\u044c\u0435\u0440\u0430"),
                    f.bc(),
                    f.cc(3, "div", 2),
                    f.cc(4, "app-acceptance-courier-scan", 3),
                    f.kc("onScan", (function(e) {
                        return t.handleScanQr(e)
                    }
                    )),
                    f.bc(),
                    f.bc(),
                    f.cc(5, "nz-table", 4, 5),
                    f.cc(7, "thead"),
                    f.cc(8, "tr"),
                    f.cc(9, "th"),
                    f.Sc(10, "\u041a\u0443\u0440\u044c\u0435\u0440"),
                    f.bc(),
                    f.cc(11, "th"),
                    f.Sc(12, "\u0422\u0435\u043b\u0435\u0444\u043e\u043d"),
                    f.bc(),
                    f.cc(13, "th"),
                    f.Sc(14, "\u0417\u0430\u0434\u0430\u043d\u0438\u0439"),
                    f.bc(),
                    f.cc(15, "th"),
                    f.Sc(16, "\u0414\u043e\u0441\u0442\u0430\u0432\u043e\u043a"),
                    f.bc(),
                    f.cc(17, "th"),
                    f.Sc(18, "\u0412\u0435\u0449\u0435\u0439 \u043d\u0430 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0443"),
                    f.bc(),
                    f.cc(19, "th"),
                    f.Sc(20, "\u041f\u0440\u043e\u0434\u0430\u043d\u043e"),
                    f.bc(),
                    f.cc(21, "th"),
                    f.Sc(22, "\u0412\u043e\u0437\u0432\u0440\u0430\u0442\u043e\u0432"),
                    f.bc(),
                    f.cc(23, "th"),
                    f.Sc(24, "\u041f\u0435\u0440\u0435\u043d\u043e\u0441\u043e\u0432"),
                    f.bc(),
                    f.Xb(25, "th"),
                    f.bc(),
                    f.bc(),
                    f.cc(26, "tbody"),
                    f.Qc(27, R, 20, 9, "tr", 6),
                    f.bc(),
                    f.bc(),
                    f.Qc(28, U, 2, 0, "ng-template", null, 7, f.Rc),
                    f.bc()),
                    2 & e) {
                        const e = f.Gc(6)
                          , n = f.Gc(29);
                        f.Mb("loading", t.loading),
                        f.Gb(5),
                        f.wc("nzData", t.activeCouriers)("nzPageSize", 50)("nzNoResult", n)("nzHideOnSinglePage", !0),
                        f.Gb(22),
                        f.wc("ngForOf", e.data)
                    }
                },
                directives: [D, _.c, _.j, _.k, _.b, _.h, _.e, o.n],
                styles: [".scan[_ngcontent-%COMP%]{margin-bottom:20px}"]
            }),
            e = Object(c.c)([Object(s.a)()], e),
            e
        }
        )();
        var N = n("NT/Q")
          , $ = n("cQp2")
          , E = n("aRhA");
        function X(e, t) {
            if (1 & e && (f.ac(0),
            f.Sc(1),
            f.Xb(2, "br"),
            f.Sc(3),
            f.Xb(4, "br"),
            f.Sc(5),
            f.Xb(6, "br"),
            f.Zb()),
            2 & e) {
                const e = f.oc().$implicit;
                f.Gb(1),
                f.Uc(" ", e.courierInfo.company, ""),
                f.Gb(2),
                f.Uc(" ", e.courierInfo.name, ""),
                f.Gb(2),
                f.Uc(" ", e.courierInfo.phone, "")
            }
        }
        const Q = function(e) {
            return {
                "in-work": e
            }
        }
          , W = function() {
            return {
                "font-size": "16px"
            }
        };
        function q(e, t) {
            if (1 & e) {
                const e = f.dc();
                f.cc(0, "tr", 14),
                f.kc("click", (function() {
                    f.Ic(e);
                    const n = t.$implicit;
                    return f.oc().handleShowDetails(n.taskId, n.taskUid, n.taskStatusId)
                }
                )),
                f.cc(1, "td"),
                f.Sc(2),
                f.bc(),
                f.cc(3, "td"),
                f.Xb(4, "delivery-status", 15),
                f.bc(),
                f.cc(5, "td"),
                f.Qc(6, X, 7, 3, "ng-container", 16),
                f.bc(),
                f.cc(7, "td"),
                f.Sc(8),
                f.pc(9, "date"),
                f.bc(),
                f.cc(10, "td"),
                f.Sc(11),
                f.bc(),
                f.cc(12, "td"),
                f.Sc(13),
                f.bc(),
                f.cc(14, "td"),
                f.Sc(15),
                f.bc(),
                f.bc()
            }
            if (2 & e) {
                const e = t.$implicit
                  , n = f.oc();
                f.wc("ngClass", f.Bc(13, Q, !n.isForAssemblyStatus(e.taskStatusId))),
                f.Gb(2),
                f.Tc(e.taskId),
                f.Gb(2),
                f.wc("status", e.taskStatusId)("textStyle", f.Ac(15, W))("iconSize", 20),
                f.Gb(2),
                f.wc("ngIf", e.courierInfo),
                f.Gb(2),
                f.Tc(f.rc(9, 10, e.courierReceiveDt, "HH:mm")),
                f.Gb(3),
                f.Tc(e.deliveriesCount),
                f.Gb(2),
                f.Tc(e.deliveryShkCount),
                f.Gb(2),
                f.Tc(e.returnShkCount)
            }
        }
        function K(e, t) {
            1 & e && (f.cc(0, "p"),
            f.Sc(1, " \u041d\u0430 \u0434\u0430\u043d\u043d\u044b\u0439 \u043c\u043e\u043c\u0435\u043d\u0442 \u043d\u0435\u0442 \u0430\u043a\u0442\u0438\u0432\u043d\u044b\u0445 \u043a\u0443\u0440\u044c\u0435\u0440\u0441\u043a\u0438\u0445 \u0437\u0430\u0434\u0430\u043d\u0438\u0439 "),
            f.bc())
        }
        let Y = ( () => {
            let e = class {
                constructor(e, t, n, o) {
                    this.courierDeliveriesService = e,
                    this.notificationsService = t,
                    this._activatedRoute = n,
                    this._router = o,
                    this.loading = !1,
                    this.parent = parent,
                    this.event = event,
                    this.ETaskStatus = N.a
                }
                ngOnInit() {
                    this.load()
                }
                load() {
                    this.loading = !0,
                    this.courierDeliveriesService.getTasks().pipe(Object(s.b)(this), Object(h.a)(e => {
                        e.error ? this.notificationsService.error(e.error.message) : (e.forEach(e => {
                            if (e.courierReceiveDt) {
                                const t = e.courierReceiveDt.toString().replace("Z", "");
                                e.courierReceiveDt = new Date(t)
                            }
                        }
                        ),
                        this.taskList = e.filter(e => e.taskStatusId !== N.a.new || 0 !== e.deliveryShkCount),
                        this._checkLocalStorage(this.taskList))
                    }
                    ), Object(p.a)( () => {
                        this.loading = !1
                    }
                    )).subscribe()
                }
                showDetails(e) {
                    this._router.navigate(["./" + e], {
                        relativeTo: this._activatedRoute
                    })
                }
                showAssembly(e) {
                    this._router.navigate(["../assembly/" + e], {
                        relativeTo: this._activatedRoute
                    })
                }
                handleSort(e) {
                    const t = e.target
                      , n = null == t ? void 0 : t.querySelector(".sort-link");
                    n && n.click()
                }
                handleShowDetails(e, t, n) {
                    this.isForAssemblyStatus(n) ? this.showAssembly(t) : this.showDetails(e)
                }
                isForAssemblyStatus(e) {
                    return e === N.a.new || e === N.a.inProcess || e === N.a.done
                }
                _checkLocalStorage(e) {
                    var t;
                    let n = null !== (t = JSON.parse(localStorage.getItem("assembly_tasks_uid"))) && void 0 !== t ? t : [];
                    n = n.filter(t => {
                        const n = e.find(e => e.taskUid === t);
                        return !(!n || n.taskStatusId !== N.a.inProcess) || (localStorage.removeItem(t),
                        !1)
                    }
                    ),
                    localStorage.setItem("assembly_tasks_uid", JSON.stringify(n))
                }
            }
            ;
            return e.\u0275fac = function(t) {
                return new (t || e)(f.Wb(b),f.Wb(l.a),f.Wb(i.a),f.Wb(i.c))
            }
            ,
            e.\u0275cmp = f.Qb({
                type: e,
                selectors: [["app-courier-tasks"]],
                decls: 18,
                vars: 5,
                consts: [[1, "ui", "padded", "segment"], [1, "ui", "header"], ["nzSize", "default", "nzShowPagination", "true", "nzShowSizeChanger", "true", "nzPageSize", "10", "nzBordered", "true", 1, "tasks-table", 3, "nzData", "nzNoResult"], ["basicTable", ""], [1, "table-header"], ["nzSort", "taskId", "nzSortLabel", "\u0417\u0430\u0434\u0430\u043d\u0438\u0435", "nzFilterType", "number", 3, "click"], ["nzSort", "taskStatus", "nzSortLabel", "\u0421\u0442\u0430\u0442\u0443\u0441", "nzFilterType", "text", 3, "click"], ["nzSort", "courierInfo.name", "nzSortLabel", "\u041a\u0443\u0440\u044c\u0435\u0440", "nzFilterType", "text", 3, "click"], ["nzSort", "courierReceiveDt", "nzSortLabel", "\u0412\u0440\u0435\u043c\u044f", "nzFilterType", "date", 3, "click"], ["nzSort", "deliveriesCount", "nzSortLabel", "\u0414\u043e\u0441\u0442\u0430\u0432\u043e\u043a", "nzFilterType", "number", 3, "click"], ["nzSort", "deliveryShkCount", "nzSortLabel", "\u0412\u0435\u0449\u0435\u0439 \u043d\u0430 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0443", "nzFilterType", "number", 3, "click"], ["nzSort", "returnShkCount", "nzSortLabel", "\u0412\u0435\u0449\u0435\u0439 \u043a \u0432\u043e\u0437\u0432\u0440\u0430\u0442\u0443", "nzFilterType", "number", 3, "click"], ["class", "tbl-row", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], ["noResult", ""], [1, "tbl-row", 3, "ngClass", "click"], ["placement", "Base", 3, "status", "textStyle", "iconSize"], [4, "ngIf"]],
                template: function(e, t) {
                    if (1 & e && (f.cc(0, "div", 0),
                    f.cc(1, "h1", 1),
                    f.Sc(2, "\u041a\u0443\u0440\u044c\u0435\u0440\u0441\u043a\u0438\u0435 \u0437\u0430\u0434\u0430\u043d\u0438\u044f"),
                    f.bc(),
                    f.cc(3, "nz-table", 2, 3),
                    f.cc(5, "thead"),
                    f.cc(6, "tr", 4),
                    f.cc(7, "th", 5),
                    f.kc("click", (function(e) {
                        return t.handleSort(e)
                    }
                    )),
                    f.bc(),
                    f.cc(8, "th", 6),
                    f.kc("click", (function(e) {
                        return t.handleSort(e)
                    }
                    )),
                    f.bc(),
                    f.cc(9, "th", 7),
                    f.kc("click", (function(e) {
                        return t.handleSort(e)
                    }
                    )),
                    f.bc(),
                    f.cc(10, "th", 8),
                    f.kc("click", (function(e) {
                        return t.handleSort(e)
                    }
                    )),
                    f.bc(),
                    f.cc(11, "th", 9),
                    f.kc("click", (function(e) {
                        return t.handleSort(e)
                    }
                    )),
                    f.bc(),
                    f.cc(12, "th", 10),
                    f.kc("click", (function(e) {
                        return t.handleSort(e)
                    }
                    )),
                    f.bc(),
                    f.cc(13, "th", 11),
                    f.kc("click", (function(e) {
                        return t.handleSort(e)
                    }
                    )),
                    f.bc(),
                    f.bc(),
                    f.bc(),
                    f.cc(14, "tbody"),
                    f.Qc(15, q, 16, 16, "tr", 12),
                    f.bc(),
                    f.bc(),
                    f.Qc(16, K, 2, 0, "ng-template", null, 13, f.Rc),
                    f.bc()),
                    2 & e) {
                        const e = f.Gc(4)
                          , n = f.Gc(17);
                        f.Mb("loading", t.loading),
                        f.Gb(3),
                        f.wc("nzData", t.taskList)("nzNoResult", n),
                        f.Gb(12),
                        f.wc("ngForOf", e.data)
                    }
                },
                directives: [_.c, _.j, _.k, _.b, _.h, _.g, $.a, _.e, o.n, o.m, E.a, o.o],
                pipes: [o.e],
                styles: ['.tbl-row[_ngcontent-%COMP%]{cursor:pointer}.in-work[_ngcontent-%COMP%]{background:#fafafa}.in-work[_ngcontent-%COMP%] > td[_ngcontent-%COMP%]{color:rgba(0,0,0,.48)}.tasks-table[_ngcontent-%COMP%]  .ant-table{font-family:Roboto,sans-serif;color:rgba(0,0,0,.85);font-size:16px;font-style:normal;font-weight:400;line-height:24px}.tasks-table[_ngcontent-%COMP%]  .ant-table-container table>thead>tr:first-child th:first-child, .tasks-table[_ngcontent-%COMP%]  .ant-table-container table>thead>tr:first-child th:first-child :hover{border-top-left-radius:4px}.tasks-table[_ngcontent-%COMP%]  .ant-table-container table>thead>tr:first-child th:last-child, .tasks-table[_ngcontent-%COMP%]  .ant-table-container table>thead>tr:first-child th:last-child :hover{border-top-right-radius:4px}.tasks-table[_ngcontent-%COMP%]  .ant-table-container table>thead>tr:first-child>th{height:48px;background:#824ad7;border:none;padding:12px 16px}.tasks-table[_ngcontent-%COMP%]  .ant-table-container table>thead>tr:first-child>th>a{color:hsla(0,0%,100%,.85);font-size:16px;font-weight:500;line-height:24px}.tasks-table[_ngcontent-%COMP%]  .ant-table-container table>thead>tr:first-child>th>a:after{display:inline-block;height:24px;width:24px;vertical-align:middle}.tasks-table[_ngcontent-%COMP%]  .ant-table-container table>thead>tr:first-child>th .sort-table-arrow:after{background-image:url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M16.8886 11.3512H15.7573C15.693 11.3512 15.6316 11.379 15.5883 11.4276L12.5308 14.9317V7.11111C12.5308 7.05 12.4805 7 12.419 7H11.581C11.5195 7 11.4692 7.05 11.4692 7.11111V14.9317L8.41175 11.4276C8.36985 11.379 8.30839 11.3512 8.24274 11.3512H7.11138C7.0164 11.3512 6.96472 11.4637 7.02757 11.5346L11.6634 16.8469C11.7053 16.8949 11.7571 16.9335 11.8153 16.9599C11.8735 16.9863 11.9367 17 12.0007 17C12.0647 17 12.1279 16.9863 12.1861 16.9599C12.2443 16.9335 12.2961 16.8949 12.338 16.8469L16.9724 11.5346C17.0353 11.4623 16.9836 11.3512 16.8886 11.3512Z" fill="%23FFFFFF" fill-opacity="0.45"/></svg>\')}.tasks-table[_ngcontent-%COMP%]  .ant-table-container table>thead>tr:first-child>th .sort-table-arrow-active:after{background-image:url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M16.8886 11.3512H15.7573C15.693 11.3512 15.6316 11.379 15.5883 11.4276L12.5308 14.9317V7.11111C12.5308 7.05 12.4805 7 12.419 7H11.581C11.5195 7 11.4692 7.05 11.4692 7.11111V14.9317L8.41175 11.4276C8.36985 11.379 8.30839 11.3512 8.24274 11.3512H7.11138C7.0164 11.3512 6.96472 11.4637 7.02757 11.5346L11.6634 16.8469C11.7053 16.8949 11.7571 16.9335 11.8153 16.9599C11.8735 16.9863 11.9367 17 12.0007 17C12.0647 17 12.1279 16.9863 12.1861 16.9599C12.2443 16.9335 12.2961 16.8949 12.338 16.8469L16.9724 11.5346C17.0353 11.4623 16.9836 11.3512 16.8886 11.3512Z" fill="%23FFD600"/></svg>\')}.tasks-table[_ngcontent-%COMP%]  .ant-table-tbody>tr.ant-table-row:hover>td{color:rgba(0,0,0,.85);background:rgba(150,94,235,.058823529411764705)}.tasks-table[_ngcontent-%COMP%]  .ant-table-thead .ant-table-row .ant-table-cell:hover{background:linear-gradient(rgba(0,0,0,.16),rgba(0,0,0,.16)),#824ad7}.tasks-table[_ngcontent-%COMP%]  .ant-table-pagination.ant-pagination{justify-content:flex-end}.tasks-table[_ngcontent-%COMP%]  .ant-table-pagination.ant-pagination .ant-pagination-item.ant-pagination-item-active{border-radius:2px;border:1px solid #6c11c9!important;background:var(--Neutral-1,#fff)!important}.tasks-table[_ngcontent-%COMP%]  .ant-table-pagination.ant-pagination .ant-pagination-item.ant-pagination-item-active a{color:#6c11c9}']
            }),
            e = Object(c.c)([Object(s.a)()], e),
            e
        }
        )();
        var J = n("xB20");
        function ee(e, t) {
            1 & e && f.Xb(0, "nz-empty", 4),
            2 & e && f.wc("nzNotFoundContent", null)
        }
        function te(e, t) {
            if (1 & e && (f.ac(0),
            f.Sc(1),
            f.Xb(2, "br"),
            f.Sc(3),
            f.Xb(4, "br"),
            f.Sc(5),
            f.Xb(6, "br"),
            f.Zb()),
            2 & e) {
                const e = f.oc(2);
                f.Gb(1),
                f.Uc(" ", e.taskDetails.task.courierInfo.company, ""),
                f.Gb(2),
                f.Uc(" ", e.taskDetails.task.courierInfo.name, ""),
                f.Gb(2),
                f.Uc(" ", e.taskDetails.task.courierInfo.phone, "")
            }
        }
        function ne(e, t) {
            if (1 & e && (f.cc(0, "span"),
            f.Xb(1, "br"),
            f.Sc(2),
            f.bc()),
            2 & e) {
                const e = f.oc().$implicit;
                f.Gb(2),
                f.Tc(e.stickerId)
            }
        }
        const oe = function(e) {
            return {
                active: e
            }
        };
        function re(e, t) {
            if (1 & e) {
                const e = f.dc();
                f.ac(0),
                f.cc(1, "tr", 22),
                f.kc("click", (function() {
                    f.Ic(e);
                    const n = t.$implicit;
                    return f.oc(3).selectProduct(n)
                }
                )),
                f.cc(2, "td"),
                f.Sc(3),
                f.Qc(4, ne, 3, 1, "span", 9),
                f.bc(),
                f.cc(5, "td"),
                f.Sc(6),
                f.bc(),
                f.cc(7, "td"),
                f.Sc(8),
                f.bc(),
                f.cc(9, "td"),
                f.Sc(10),
                f.bc(),
                f.bc(),
                f.Zb()
            }
            if (2 & e) {
                const e = t.$implicit
                  , n = f.oc(3);
                f.Gb(1),
                f.wc("ngClass", f.Bc(6, oe, e == n.selectedProduct)),
                f.Gb(2),
                f.Uc(" ", e.shkId, " "),
                f.Gb(1),
                f.wc("ngIf", e.stickerId),
                f.Gb(2),
                f.Uc(" ", e.barcode, " "),
                f.Gb(2),
                f.Uc(" ", e.name, " "),
                f.Gb(2),
                f.Uc(" ", e.userName, " ")
            }
        }
        function ie(e, t) {
            if (1 & e && (f.ac(0),
            f.cc(1, "tr", 20),
            f.cc(2, "td", 21),
            f.cc(3, "span"),
            f.Sc(4),
            f.bc(),
            f.bc(),
            f.bc(),
            f.Qc(5, re, 11, 8, "ng-container", 17),
            f.Zb()),
            2 & e) {
                const e = t.$implicit;
                f.Gb(4),
                f.Uc("\u041c\u0425: ", e.locationName, ""),
                f.Gb(1),
                f.wc("ngForOf", e.items)
            }
        }
        function ce(e, t) {
            if (1 & e && (f.cc(0, "div", 5),
            f.cc(1, "nz-descriptions", 6),
            f.cc(2, "nz-descriptions-item", 7),
            f.Sc(3),
            f.bc(),
            f.cc(4, "nz-descriptions-item", 8),
            f.Qc(5, te, 7, 3, "ng-container", 9),
            f.bc(),
            f.cc(6, "nz-descriptions-item", 10),
            f.Sc(7),
            f.bc(),
            f.cc(8, "nz-descriptions-item", 11),
            f.Sc(9),
            f.bc(),
            f.cc(10, "nz-descriptions-item", 12),
            f.Sc(11),
            f.bc(),
            f.bc(),
            f.cc(12, "div", 13),
            f.cc(13, "div", 14),
            f.cc(14, "nz-table", 15, 16),
            f.cc(16, "thead"),
            f.cc(17, "tr"),
            f.cc(18, "th"),
            f.Sc(19, "\u0428\u041a/\u0421\u0442\u0438\u043a\u0435\u0440"),
            f.bc(),
            f.cc(20, "th"),
            f.Sc(21, "\u0411\u0430\u0440\u043a\u043e\u0434"),
            f.bc(),
            f.cc(22, "th"),
            f.Sc(23, "\u041d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435"),
            f.bc(),
            f.cc(24, "th"),
            f.Sc(25, "\u041a\u043b\u0438\u0435\u043d\u0442"),
            f.bc(),
            f.bc(),
            f.bc(),
            f.cc(26, "tbody"),
            f.Qc(27, ie, 6, 2, "ng-container", 17),
            f.bc(),
            f.bc(),
            f.bc(),
            f.cc(28, "div", 18),
            f.Xb(29, "app-product-description", 19),
            f.bc(),
            f.bc(),
            f.bc()),
            2 & e) {
                const e = f.Gc(15)
                  , t = f.oc();
                f.Gb(1),
                f.yc("nzTitle", "\u0414\u0435\u0442\u0430\u043b\u0438 \u0437\u0430\u0434\u0430\u043d\u0438\u044f ", t.taskId, ""),
                f.Gb(2),
                f.Tc(t.taskDetails.task.taskStatus),
                f.Gb(2),
                f.wc("ngIf", t.taskDetails.task.courierInfo),
                f.Gb(2),
                f.Tc(t.taskDetails.task.deliveriesCount),
                f.Gb(2),
                f.Uc("", t.taskDetails.task.deliveryShkCount, " "),
                f.Gb(2),
                f.Tc(t.taskDetails.task.returnShkCount),
                f.Gb(3),
                f.wc("nzData", t.taskDetails.shksOnPlace)("nzPageSize", 100)("nzNoResult", t.noResult)("nzHideOnSinglePage", !0),
                f.Gb(13),
                f.wc("ngForOf", e.data),
                f.Gb(2),
                f.wc("product", t.selectedProduct)
            }
        }
        let se = ( () => {
            let e = class {
                constructor(e, t, n) {
                    this.route = e,
                    this.courierDeliveriesService = t,
                    this.notificationsService = n,
                    this.loading = !1
                }
                ngOnInit() {
                    this.loading = !0,
                    this.taskId = +this.route.snapshot.paramMap.get("taskId"),
                    this.taskUid = this.route.snapshot.paramMap.get("taskUid"),
                    (this.taskId || this.taskUid) && this.loadTaskDetails()
                }
                loadTaskDetails() {
                    this.loading = !0,
                    this.courierDeliveriesService.getTaskDetails(this.taskId, this.taskUid).pipe(Object(s.b)(this), Object(h.a)(e => {
                        e.error ? this.notificationsService.error(e.error.message) : this.taskDetails = e
                    }
                    ), Object(p.a)( () => {
                        this.loading = !1
                    }
                    )).subscribe()
                }
                selectProduct(e) {
                    this.selectedProduct = 0 === e.shkType ? e : null
                }
            }
            ;
            return e.\u0275fac = function(t) {
                return new (t || e)(f.Wb(i.a),f.Wb(b),f.Wb(l.a))
            }
            ,
            e.\u0275cmp = f.Qb({
                type: e,
                selectors: [["app-task-details"]],
                decls: 5,
                vars: 4,
                consts: [[1, "ui", "padded", "segment"], ["nz-button", "", "nzType", "primary", "backButton", ""], [3, "nzNotFoundContent", 4, "ngIf"], ["style", "margin-top: 20px;", 4, "ngIf"], [3, "nzNotFoundContent"], [2, "margin-top", "20px"], ["nzLayout", "vertical", "nzColumn", "2", 3, "nzTitle"], ["nzTitle", "\u0421\u0442\u0430\u0442\u0443\u0441"], ["nzTitle", "\u041a\u0443\u0440\u044c\u0435\u0440"], [4, "ngIf"], ["nzTitle", "\u0414\u043e\u0441\u0442\u0430\u0432\u043e\u043a"], ["nzTitle", "\u0412\u0435\u0449\u0435\u0439 \u043d\u0430 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0443"], ["nzTitle", "\u0412\u0435\u0449\u0435\u0439 \u043a \u0432\u043e\u0437\u0432\u0440\u0430\u0442\u0443"], [1, "ui", "grid"], [1, "twelve", "wide", "column"], [3, "nzData", "nzPageSize", "nzNoResult", "nzHideOnSinglePage"], ["basicTable", ""], [4, "ngFor", "ngForOf"], [1, "four", "wide", "column"], [3, "product"], [1, "location-info"], ["colspan", "4"], [1, "shk-info", 3, "ngClass", "click"]],
                template: function(e, t) {
                    1 & e && (f.cc(0, "div", 0),
                    f.cc(1, "button", 1),
                    f.Sc(2, "\u041d\u0430\u0437\u0430\u0434"),
                    f.bc(),
                    f.Qc(3, ee, 1, 1, "nz-empty", 2),
                    f.Qc(4, ce, 30, 12, "div", 3),
                    f.bc()),
                    2 & e && (f.Mb("loading", t.loading),
                    f.Gb(3),
                    f.wc("ngIf", !t.loading && !t.taskDetails),
                    f.Gb(1),
                    f.wc("ngIf", !t.loading && t.taskDetails))
                },
                directives: [v.a, x.a, M.a, y.a, o.o, k.b, J.a, J.b, _.c, _.j, _.k, _.b, _.h, _.e, o.n, S.a, o.m],
                styles: [".location-info[_ngcontent-%COMP%]{background-color:#ddedfc;font-weight:700;font-size:14px;text-align:center}.shk-info[_ngcontent-%COMP%]{cursor:pointer}.shk-info.active[_ngcontent-%COMP%]{background-color:#b7f78d}"]
            }),
            e = Object(c.c)([Object(s.a)()], e),
            e
        }
        )();
        const ae = [{
            path: "tasks/:taskId",
            component: se
        }, {
            path: "tasks/uid/:taskUid",
            component: se
        }, {
            path: "tasks",
            component: Y
        }, {
            path: "acceptance/guest/:courierTaskUid",
            component: B
        }, {
            path: "acceptance/:company/:courierId",
            component: B
        }, {
            path: "acceptance",
            component: A
        }, {
            path: "assembly/:taskUid",
            loadChildren: () => Promise.all([n.e(0), n.e(23)]).then(n.bind(null, "LVSd")).then(e => e.AssemblyModule)
        }, {
            path: "express-tasks",
            loadChildren: () => Promise.all([n.e(0), n.e(13)]).then(n.bind(null, "fuI2")).then(e => e.ExpressTasksModule)
        }, {
            path: "**",
            redirectTo: "tasks"
        }];
        let le = ( () => {
            class e {
            }
            return e.\u0275mod = f.Ub({
                type: e
            }),
            e.\u0275inj = f.Tb({
                factory: function(t) {
                    return new (t || e)
                },
                imports: [[i.g.forChild(ae)], i.g]
            }),
            e
        }
        )();
        var ue = n("PCNd")
          , de = n("hmWi")
          , he = n("BWwi")
          , pe = n("rDF6")
          , Ce = n("Xb5J");
        let ge = ( () => {
            class e {
            }
            return e.\u0275mod = f.Ub({
                type: e
            }),
            e.\u0275inj = f.Tb({
                factory: function(t) {
                    return new (t || e)
                },
                imports: [[o.c, w.c, Ce.a, Z.b]]
            }),
            e
        }
        )()
          , fe = ( () => {
            class e {
            }
            return e.\u0275mod = f.Ub({
                type: e
            }),
            e.\u0275inj = f.Tb({
                factory: function(t) {
                    return new (t || e)
                },
                imports: [[o.c, v.c, w.c]]
            }),
            e
        }
        )()
          , be = ( () => {
            class e {
            }
            return e.\u0275mod = f.Ub({
                type: e
            }),
            e.\u0275inj = f.Tb({
                factory: function(t) {
                    return new (t || e)
                },
                providers: [u.a, d.a],
                imports: [[o.c, r.k, r.u, le, _.d, ue.a, J.c, k.c, v.c, de.a, he.a, pe.a, w.c, ge, fe]]
            }),
            e
        }
        )()
    },
    qRnr: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return c
        }
        ));
        var o = n("tk/3")
          , r = n("AytR")
          , i = n("fXoL");
        let c = ( () => {
            class e {
                constructor(e) {
                    this.http = e
                }
                search(e) {
                    return this.http.get(`${r.a.urls.baseUrl}/api/users/search?searchstring=${encodeURIComponent(e)}`)
                }
                getById(e) {
                    const t = new o.h({
                        fromObject: {
                            userId: e
                        }
                    });
                    return this.http.get(r.a.urls.baseUrl + "/api/users/get", {
                        params: t
                    })
                }
                getUserById(e) {
                    return this.http.get(`${r.a.urls.baseUrl}/api/user/${e}`)
                }
                getAntifraudById(e) {
                    return this.http.get(`${r.a.urls.baseUrl}/api/users/antifraud?userId=${e}`)
                }
                getInOffice() {
                    return this.http.get(r.a.urls.baseUrl + "/api/users/in-office/get")
                }
                dropFromOffice(e) {
                    return this.http.post(`${r.a.urls.baseUrl}/api/users/in-office/drop?userId=${e}`, null)
                }
            }
            return e.\u0275fac = function(t) {
                return new (t || e)(i.gc(o.c))
            }
            ,
            e.\u0275prov = i.Sb({
                token: e,
                factory: e.\u0275fac,
                providedIn: "root"
            }),
            e
        }
        )()
    },
    rDF6: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return C
        }
        ));
        var o = n("ofXK")
          , r = n("0lU3")
          , i = n("PTRe")
          , c = n("wfDK")
          , s = n("TaO5")
          , a = n("3Pt+")
          , l = n("fXoL");
        let u = ( () => {
            class e {
            }
            return e.\u0275mod = l.Ub({
                type: e
            }),
            e.\u0275inj = l.Tb({
                factory: function(t) {
                    return new (t || e)
                },
                imports: [[s.b, o.c, a.k]]
            }),
            e
        }
        )();
        var d = n("GHcM")
          , h = n("citr")
          , p = n("g5EH");
        let C = ( () => {
            class e {
            }
            return e.\u0275mod = l.Ub({
                type: e
            }),
            e.\u0275inj = l.Tb({
                factory: function(t) {
                    return new (t || e)
                },
                providers: [c.a],
                imports: [[o.c, u, r.b, i.d, d.a, h.a, p.b]]
            }),
            e
        }
        )()
    },
    rVY3: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return o
        }
        ));
        const o = e => {
            if (0 === e)
                return ["0.mp3"];
            const t = 1e3 * Math.floor(e / 1e3)
              , n = e % 1e3
              , o = [];
            return t > 0 && o.push(t.toString() + ".mp3"),
            n > 0 && o.push(n.toString() + ".mp3"),
            o
        }
    },
    sL4t: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return y
        }
        ));
        var o = n("mrSG")
          , r = n("VfN6")
          , i = n("AytR")
          , c = n("2Vo4")
          , s = n("l5mm")
          , a = n("itXk")
          , l = n("LRne")
          , u = n("JX91")
          , d = n("pLZG")
          , h = n("5+tZ")
          , p = n("lJxs")
          , C = n("vkgz")
          , g = n("JIr8")
          , f = n("kiQV")
          , b = n("/MIr")
          , m = n("C1qE")
          , v = n("LV/p")
          , k = n("tk/3")
          , w = n("fXoL");
        let _ = ( () => {
            class e {
                constructor(e, t) {
                    this._http = e,
                    this._logger = t
                }
                getState() {
                    const e = new k.g({
                        skip: "true"
                    });
                    return this._http.get(i.a.urls.baseUrl + "/api/state", {
                        headers: e
                    }).pipe(Object(g.a)( () => Object(l.a)(null)), Object(C.a)(e => {
                        (null == e ? void 0 : e.error) ? this._logger.showError(e.error.message) : (null == e ? void 0 : e.dbState) && "OK" !== e.dbState && i.a.npos && this._logger.showError(e.dbState)
                    }
                    ))
                }
            }
            return e.\u0275fac = function(t) {
                return new (t || e)(w.gc(k.c),w.gc(b.a))
            }
            ,
            e.\u0275prov = w.Sb({
                token: e,
                factory: e.\u0275fac,
                providedIn: "root"
            }),
            e
        }
        )();
        var x = n("dEAy")
          , M = n("tyNb");
        let y = ( () => {
            let e = class {
                constructor(e, t, n, o, r) {
                    this.http = e,
                    this.logger = t,
                    this.modalService = n,
                    this._stateHttpService = o,
                    this.router = r,
                    this.destroySubject$ = new c.a(!0),
                    this.stateSubject$ = new c.a(void 0),
                    this.refreshSubject$ = new c.a(!1),
                    this.newNotificationCount$ = new c.a(0),
                    this.newInstructionsCount$ = new c.a(0),
                    this.isInitTimer = !1
                }
                initState() {
                    this.isInitTimer || (this.isInitTimer = !0,
                    this.startTimer(m.a))
                }
                get state$() {
                    return this.stateSubject$.asObservable()
                }
                get refresh$() {
                    return this.refreshSubject$.asObservable()
                }
                get countNewNotificationMessage() {
                    return this.newNotificationCount$
                }
                get countNewInstructions() {
                    return this.newInstructionsCount$
                }
                decreaseNoticesCount(e) {
                    e === v.a.notification && this.newNotificationCount$.value && this.newNotificationCount$.next(this.newNotificationCount$.value - 1),
                    e === v.a.instruction && this.newInstructionsCount$.value && this.newInstructionsCount$.next(this.newInstructionsCount$.value - 1)
                }
                startTimer(e) {
                    return Object(s.a)(e).pipe(Object(u.a)(void 0), Object(d.a)( () => this.destroySubject$.value), Object(h.a)( () => i.a.npos ? Object(a.a)([this.getAppVersion(), this.getState()]).pipe(Object(p.a)( ([e]) => e)) : this.getState()), Object(r.b)(this)).subscribe(e => {
                        e && i.a.npos && e.toString().trim() !== f.version.trim() && (this.modalService.closeAll(),
                        this.modalService.confirm({
                            nzTitle: "<b>\u0412\u043d\u0438\u043c\u0430\u043d\u0438\u0435!</b>",
                            nzContent: "\u041d\u0430\u0439\u0434\u0435\u043d\u0430 \u0431\u043e\u043b\u0435\u0435 \u043d\u043e\u0432\u0430\u044f \u0432\u0435\u0440\u0441\u0438\u044f \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f, \u043d\u0430\u0436\u043c\u0438\u0442\u0435 \u041e\u041a \u0434\u043b\u044f \u043f\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b",
                            nzOnOk: () => {
                                location.reload()
                            }
                        }))
                    }
                    )
                }
                setState(e) {
                    if (e) {
                        if (!this.appState)
                            return this.appState = e,
                            this.newNotificationCount$.next(e.countNewNotificationMessage),
                            void this.newInstructionsCount$.next(e.countNewInstructions);
                        this.appState.version !== e.version && this.refreshSubject$.next(!0),
                        this.newNotificationCount$.value !== e.countNewNotificationMessage && this.newNotificationCount$.next(e.countNewNotificationMessage),
                        this.newInstructionsCount$.value !== e.countNewInstructions && this.newInstructionsCount$.next(e.countNewInstructions),
                        this.appState = e
                    }
                }
                getState() {
                    return this._stateHttpService.getState().pipe(Object(d.a)(e => e && !e.error), Object(C.a)(e => {
                        this.setState(e),
                        this.stateSubject$.next(e)
                    }
                    ))
                }
                setLocation(e) {
                    return this.http.post(`${i.a.urls.baseUrl}/api/state/set-location/${e}`, null)
                }
                getAppVersion() {
                    return i.a.production ? this.http.get("/version.txt?" + (new Date).getTime(), {
                        responseType: "text"
                    }).pipe(Object(g.a)( () => Object(l.a)(null))) : Object(l.a)(f.version)
                }
            }
            ;
            return e.\u0275fac = function(t) {
                return new (t || e)(w.gc(k.c),w.gc(b.a),w.gc(x.d),w.gc(_),w.gc(M.c))
            }
            ,
            e.\u0275prov = w.Sb({
                token: e,
                factory: e.\u0275fac,
                providedIn: "root"
            }),
            e = Object(o.c)([Object(r.a)()], e),
            e
        }
        )()
    },
    ta3W: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return i
        }
        ));
        var o = n("fXoL")
          , r = n("FwiY");
        let i = ( () => {
            class e {
            }
            return e.\u0275fac = function(t) {
                return new (t || e)
            }
            ,
            e.\u0275cmp = o.Qb({
                type: e,
                selectors: [["app-none-data"]],
                decls: 4,
                vars: 0,
                consts: [[1, "none-data"], ["nz-icon", "", "nzType", "none-data", "nzTheme", "outline", 1, "none-data-icon"], [1, "none-data-text"]],
                template: function(e, t) {
                    1 & e && (o.cc(0, "div", 0),
                    o.Xb(1, "i", 1),
                    o.cc(2, "p", 2),
                    o.Sc(3, "\u041d\u0435\u0442 \u0434\u0430\u043d\u043d\u044b\u0445"),
                    o.bc(),
                    o.bc())
                },
                directives: [r.b],
                styles: [".none-data[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;padding:0 0 28px}.none-data-icon[_ngcontent-%COMP%]{font-size:140px}.none-data-text[_ngcontent-%COMP%]{font-weight:500;font-size:24px;line-height:28px;letter-spacing:1px;color:#bdbdbd}@media (max-width:600px){.none-data[_ngcontent-%COMP%]{padding:5px 0 60px}.none-data-icon[_ngcontent-%COMP%]{font-size:88px}.none-data-text[_ngcontent-%COMP%]{color:#c1c1c1;font-weight:400}}"]
            }),
            e
        }
        )()
    },
    wNeN: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return u
        }
        ));
        var o = n("AytR")
          , r = n("2Vo4")
          , i = n("PqYM")
          , c = n("eIep")
          , s = n("fXoL")
          , a = n("tk/3")
          , l = n("tyNb");
        let u = ( () => {
            class e {
                constructor(e, t) {
                    this.http = e,
                    this.router = t,
                    this.defaultAwaitMinutes = 15,
                    this.agreement$ = new r.a(void 0)
                }
                getAgreement() {
                    return this.http.get(o.a.urls.baseUrl + "/api/notification/personal/get")
                }
                agreeWithAgreement(e) {
                    return this.http.post(`${o.a.urls.baseUrl}/api/notification/personal/read?notificationId=${e}`, null)
                }
                watchActualState() {
                    this.setTimerMinutes(0)
                }
                setTimerMinutes(e) {
                    const t = 60 * e;
                    (new Date).getTime(),
                    this.startTimer(t)
                }
                redirectToAgreement() {
                    this.router.navigate(["/manager-check", {
                        prev: this.router.url
                    }]).then()
                }
                startTimer(e) {
                    const t = Object(i.a)(1e3 * e).pipe(Object(c.a)( () => this.getAgreement())).subscribe({
                        next: e => {
                            t.unsubscribe(),
                            e && !("error"in e) ? (this.agreement$.next(e || null),
                            this.redirectToAgreement()) : this.setTimerMinutes(this.defaultAwaitMinutes)
                        }
                        ,
                        error: () => {
                            t.unsubscribe(),
                            this.setTimerMinutes(this.defaultAwaitMinutes)
                        }
                    })
                }
            }
            return e.\u0275fac = function(t) {
                return new (t || e)(s.gc(a.c),s.gc(l.c))
            }
            ,
            e.\u0275prov = s.Sb({
                token: e,
                factory: e.\u0275fac
            }),
            e
        }
        )()
    },
    wfDK: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return p
        }
        ));
        var o = n("vkgz")
          , r = n("pLZG")
          , i = n("2Vo4");
        const c = (e, t) => {
            const n = e.split(".")
              , o = t[n[0]];
            return 1 === n.length ? o : o ? c(e.slice(n[0].length + 1, e.length), o) : void 0
        }
        ;
        var s = n("PQko")
          , a = n("EhJz")
          , l = n("zHMj")
          , u = n("dndX")
          , d = n("fXoL")
          , h = n("ofXK");
        let p = ( () => {
            class e {
                constructor(e) {
                    this.datePipe = e,
                    this._genericId = 0
                }
                initData(e) {
                    e.genericId || (e.genericId = ++this._genericId);
                    const t = e.genericId;
                    return this._tableMap || (this._tableMap = new Map,
                    this._tableData = new Map,
                    this._tableInits = new Map,
                    this._tableFilters = new Map,
                    this._tableSorts = new Map,
                    this._tableChanges = new Map),
                    this._tableMap.get(t) || (this._tableMap.set(t, e),
                    this._tableMap.get(t)._generateDataCustom = C,
                    this._tableData.set(t, e.nzData),
                    this._tableChanges.set(t, new i.a("change")),
                    this._tableFilters.set(t, []),
                    this._tableSorts.set(t, []),
                    this._tableInits.set(t, new i.a(e.nzData.length > 0)),
                    this._updateChanges(t).subscribe(),
                    this._tableMap.get(t).nzCurrentPageDataChange.pipe(Object(o.a)( () => this._tableChanges.get(t).next("change"))).subscribe()),
                    this._tableInits.get(t)
                }
                _updateChanges(e) {
                    return this._tableChanges.get(e).pipe(Object(o.a)(t => {
                        "change" === t && this._tableData.set(e, this._tableMap.get(e).nzData),
                        this._tableMap.get(e).data = this._applySorts(e, this._applyFilters(e)),
                        this._tableMap.get(e)._generateDataCustom(),
                        this._tableMap.get(e).cdr.markForCheck()
                    }
                    ), Object(r.a)( () => !this._tableInits.get(e).value), Object(o.a)( () => this._tableInits.get(e).next(!0)))
                }
                getTableData(e) {
                    return this._tableData.get(e)
                }
                sort(e, t) {
                    this._addSort(e, t),
                    this._tableChanges.get(e).next("sort")
                }
                filter(e, t) {
                    this._addFilter(e, t),
                    this._tableChanges.get(e).next("filter")
                }
                removeFilter(e, t) {
                    this._tableFilters.get(e) && (this._tableFilters.set(e, this._tableFilters.get(e).filter(e => e.filterField !== t)),
                    this._tableFilters.get(e).length || this._clearData(e))
                }
                _addSort(e, t) {
                    if (this._tableSorts.get(e).find(e => e.sortName === t.sortName)) {
                        const n = this._tableSorts.get(e);
                        n.find(e => e.sortName === t.sortName).sortValue = t.sortValue,
                        n.filter(e => e.sortName !== t.sortName).forEach(e => e.sortValue = void 0),
                        this._tableSorts.set(e, n)
                    } else
                        this._tableSorts.set(e, [...this._tableSorts.get(e), t])
                }
                _addFilter(e, t) {
                    if (this._tableFilters.get(e).find(e => e.filterField === t.filterField)) {
                        const n = this._tableFilters.get(e);
                        n.find(e => e.filterField === t.filterField).value = t.value,
                        this._tableFilters.set(e, n)
                    } else
                        this._tableFilters.set(e, [...this._tableFilters.get(e), t])
                }
                _applySorts(e, t) {
                    return t || (t = [...this.getTableData(e)]),
                    this._tableSorts.get(e).filter(e => null != e.sortValue).forEach(e => {
                        t = [...t.sort( (t, n) => {
                            const o = c(e.sortName, t)
                              , r = c(e.sortName, n);
                            return o > r || !r ? "ascend" === e.sortValue ? 1 : -1 : o < r || !o ? "ascend" === e.sortValue ? -1 : 1 : 0
                        }
                        )]
                    }
                    ),
                    t
                }
                _applyFilters(e, t) {
                    return t || (t = [...this.getTableData(e)]),
                    this._tableFilters.get(e).forEach(e => {
                        switch (e.filterType) {
                        case "date-range":
                            t = t.filter(t => {
                                var n, o;
                                const r = c(e.filterField, t);
                                return !(null === (n = e.value) || void 0 === n ? void 0 : n[0]) && !(null === (o = e.value) || void 0 === o ? void 0 : o[1]) || this._isDateInPeriod(e.value[0], e.value[1], Object(s.a)(r))
                            }
                            );
                            break;
                        case "select-include":
                            t = t.filter(t => {
                                const n = c(e.filterField, t);
                                return null == e.value || "" === e.value || n && n.toString().includes(e.value)
                            }
                            );
                            break;
                        case "select":
                            t = t.filter(t => {
                                const n = c(e.filterField, t);
                                return null == e.value || "" === e.value || n && n === e.value
                            }
                            );
                            break;
                        case "checkbox":
                            t = t.filter(t => {
                                const n = c(e.filterField, t);
                                return !e.value || n && e.value
                            }
                            );
                            break;
                        default:
                            t = t.filter(t => {
                                const n = c(e.filterField, t);
                                return !e.value || n && (e.filterMatcherFn ? e.filterMatcherFn(t, e.value) : this._isValueIncludes(n, e.value))
                            }
                            )
                        }
                    }
                    ),
                    t
                }
                _isDateEquals(e, t) {
                    return this.datePipe.transform(e, "dd.MM.yyyy") === this.datePipe.transform(t, "dd.MM.yyyy")
                }
                _isDateInPeriod(e, t, n) {
                    return (!e || Object(a.a)(n, e) || Object(l.a)(n, e)) && (!t || Object(u.a)(n, t) || Object(l.a)(n, t))
                }
                _isValueIncludes(e, t) {
                    return e.toString().toLowerCase().includes(t.toString().toLowerCase())
                }
                _clearData(e) {
                    this._tableChanges.delete(e),
                    this._tableSorts.delete(e),
                    this._tableFilters.delete(e),
                    this._tableMap.delete(e),
                    this._tableData.delete(e)
                }
            }
            return e.\u0275fac = function(t) {
                return new (t || e)(d.gc(h.e))
            }
            ,
            e.\u0275prov = d.Sb({
                token: e,
                factory: e.\u0275fac
            }),
            e
        }
        )();
        function C() {
            let e = this.data || [];
            this.nzTotal = e.length;
            const t = Math.ceil(e.length / this.nzPageSize) || 1
              , n = this.nzPageIndex && this.nzPageIndex > t ? t : this.nzPageIndex || 1;
            this.nzPageIndex = n,
            this.nzPageIndexChange.emit(n),
            e = e.slice((this.nzPageIndex - 1) * this.nzPageSize, this.nzPageIndex * this.nzPageSize),
            this.data = [...e]
        }
    },
    "x/g9": function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return l
        }
        ));
        var o = n("ofXK")
          , r = n("FwiY")
          , i = n("PTRe")
          , c = n("OzZK")
          , s = n("3Pt+")
          , a = n("fXoL");
        let l = ( () => {
            class e {
            }
            return e.\u0275mod = a.Ub({
                type: e
            }),
            e.\u0275inj = a.Tb({
                factory: function(t) {
                    return new (t || e)
                },
                providers: [],
                imports: [[o.c, r.c, i.d, c.c, s.k]]
            }),
            e
        }
        )()
    },
    x3ft: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return c
        }
        ));
        var o = n("AytR")
          , r = n("fXoL")
          , i = n("tk/3");
        let c = ( () => {
            class e {
                constructor(e) {
                    this.http = e
                }
                getAcceptedBoxes() {
                    return this.http.get(o.a.urls.baseUrl + "/api/boxes/accepted")
                }
                acceptBox(e) {
                    return this.http.post(`${o.a.urls.baseUrl}/api/boxes/accept?boxShk=${e}`, null)
                }
                disassembledBox(e) {
                    return this.http.post(`${o.a.urls.baseUrl}/api/boxes/finish-unpacking?boxId=${e}`, null)
                }
                finishAcceptance() {
                    return this.http.post(o.a.urls.baseUrl + "/api/boxes/finish-acceptance", null)
                }
                createBox(e) {
                    return this.http.post(`${o.a.urls.baseUrl}/api/boxes/create?boxShk=${e}`, null)
                }
                closeBox(e) {
                    return this.http.post(`${o.a.urls.baseUrl}/api/boxes/close/${e}`, null)
                }
                getBox(e) {
                    return this.http.get(`${o.a.urls.baseUrl}/api/boxes/get/${e}`)
                }
                getReturnBoxes() {
                    return this.http.get(o.a.urls.baseUrl + "/api/boxes/get")
                }
                deleteReturnBox(e) {
                    return this.http.post(`${o.a.urls.baseUrl}/api/boxes/delete?boxId=${e}`, null)
                }
                cardBoardBox(e, t) {
                    return this.http.post(o.a.urls.baseUrl + "/api/storage/carton-to-box", {
                        boxId: e,
                        count: t
                    })
                }
            }
            return e.\u0275fac = function(t) {
                return new (t || e)(r.gc(i.c))
            }
            ,
            e.\u0275prov = r.Sb({
                token: e,
                factory: e.\u0275fac,
                providedIn: "root"
            }),
            e
        }
        )()
    },
    "z+jU": function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return O
        }
        ));
        var o = n("mrSG")
          , r = n("fXoL")
          , i = n("VfN6")
          , c = n("2Vo4")
          , s = n("pLZG")
          , a = n("eE7k")
          , l = n("lI3o")
          , u = n("ofXK")
          , d = n("FwiY")
          , h = n("PTRe")
          , p = n("OzZK")
          , C = n("C2AL")
          , g = n("3Pt+")
          , f = n("RwU8");
        function b(e, t) {
            1 & e && r.Yb(0)
        }
        function m(e, t) {
            if (1 & e && (r.cc(0, "div", 9),
            r.Qc(1, b, 1, 0, "ng-container", 10),
            r.bc()),
            2 & e) {
                const e = r.oc();
                r.Gb(1),
                r.wc("ngTemplateOutlet", e.scanBlock)
            }
        }
        function v(e, t) {
            1 & e && r.Yb(0)
        }
        function k(e, t) {
            if (1 & e && (r.cc(0, "div", 11),
            r.Qc(1, v, 1, 0, "ng-container", 10),
            r.bc()),
            2 & e) {
                const e = r.oc();
                r.Gb(1),
                r.wc("ngTemplateOutlet", e.scannedCounter)
            }
        }
        function w(e, t) {
            1 & e && (r.cc(0, "div", 12),
            r.Sc(1, "\u041d\u0430\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u0430\u043c\u0435\u0440\u0443 \u043d\u0430 \u0428\u041a"),
            r.bc())
        }
        const _ = function(e) {
            return {
                scanner__flash_active: e
            }
        };
        function x(e, t) {
            if (1 & e) {
                const e = r.dc();
                r.cc(0, "i", 13),
                r.kc("click", (function() {
                    return r.Ic(e),
                    r.oc().toggleFlash()
                }
                )),
                r.bc()
            }
            if (2 & e) {
                const e = r.oc();
                r.wc("ngClass", r.Bc(1, _, e.isFlashOn))
            }
        }
        function M(e, t) {
            if (1 & e) {
                const e = r.dc();
                r.cc(0, "div", 14),
                r.cc(1, "input", 15),
                r.kc("ngModelChange", (function(t) {
                    return r.Ic(e),
                    r.oc().manualInputValue = t
                }
                )),
                r.bc(),
                r.cc(2, "button", 16),
                r.kc("click", (function() {
                    return r.Ic(e),
                    r.oc().handleSendManualShk()
                }
                )),
                r.Xb(3, "span", 17),
                r.bc(),
                r.bc()
            }
            if (2 & e) {
                const e = r.oc();
                r.Gb(1),
                r.wc("ngModel", e.manualInputValue)
            }
        }
        function y(e, t) {
            1 & e && r.Xb(0, "i", 18)
        }
        const S = function(e) {
            return {
                scanner__container_show: e
            }
        };
        let O = ( () => {
            let e = class {
                constructor(e) {
                    this.notificationsService = e,
                    this.formats = this.getDefaultFormats(),
                    this.isScanOpen = !1,
                    this.isScanStart = !1,
                    this.isCloseAfterScan = !0,
                    this.isNeedManualInput = !0,
                    this.isShowTip = !1,
                    this.onScanSuccess = new r.n,
                    this.isScanOpenChange = new r.n,
                    this.isScanStartChange = new r.n,
                    this.barcode$ = new c.a(""),
                    this.lastScan = "",
                    this.manualInputValue = "",
                    this.isScanOnRest = !1,
                    this.isFlashLightAvailable = !1,
                    this.isFlashOn = !1,
                    this.barcodeChangeSubscription()
                }
                ngOnChanges(e) {
                    (e.isScanStart || e.isScanOpen) && this.setScanActive()
                }
                scanSuccess(e) {
                    this.barcode$.next(e)
                }
                closeScan() {
                    this.isScanOpen = !1,
                    this.isScanOpenChange.next(this.isScanOpen);
                    try {
                        this.cleanCamera()
                    } catch (e) {
                        console.error(e)
                    }
                }
                cleanCamera() {
                    if (!this.html5QrCode)
                        return;
                    const e = this.html5QrCode.getState();
                    e === a.b.PAUSED || e === a.b.SCANNING ? this.html5QrCode.stop().then( () => {
                        this.html5QrCode.clear(),
                        this.html5QrCode = void 0
                    }
                    ) : setTimeout( () => this.cleanCamera(), 100)
                }
                handleSendManualShk() {
                    this.scanSuccess(this.manualInputValue),
                    this.manualInputValue = ""
                }
                turnOffScan() {
                    this.pauseScanning(),
                    this.closeScan()
                }
                pauseScanning() {
                    this.isScanStart = !1,
                    this.isScanStartChange.next(this.isScanStart)
                }
                torchCompatible(e) {
                    this.isFlashLightAvailable = e
                }
                toggleFlash() {
                    this.isFlashOn = !this.isFlashOn
                }
                setScanActive() {
                    if (this.isScanStart && this.html5QrCode) {
                        if (!this.isScanOnRest)
                            try {
                                this.html5QrCode.resume()
                            } catch (e) {
                                console.error(e),
                                setTimeout( () => this.setScanActive(), 100)
                            }
                    } else
                        this.isScanOpen && this.isScanStart && !this.html5QrCode ? this.openScan() : !this.isScanOpen && this.html5QrCode ? this.turnOffScan() : !this.isScanStart && this.html5QrCode && this.isScanOpen && this.html5QrCode.pause()
                }
                openScan() {
                    this.lastScan = "",
                    this.html5QrCode = new a.a("reader",{
                        verbose: !1,
                        formatsToSupport: this.getDefaultFormats()
                    });
                    const e = document.body.clientWidth;
                    this.html5QrCode.start({
                        facingMode: "environment"
                    }, {
                        fps: 30,
                        qrbox: {
                            width: e - 72,
                            height: e - 72
                        }
                    }, (e, t) => {
                        this.lastScan !== e && (this.lastScan = e,
                        this.pauseScanning(),
                        this.isScanOnRest = !0,
                        setTimeout( () => {
                            this.isScanOnRest = !1,
                            this.isCloseAfterScan || this.html5QrCode.resume()
                        }
                        , 1e3),
                        this.scanSuccess(e))
                    }
                    , e => {}
                    ).catch(e => {
                        this.notificationsService.error("\u0421\u043a\u0430\u043d\u0435\u0440 \u043d\u0435\u0434\u043e\u0441\u0442\u0443\u043f\u0435\u043d, \u043f\u0440\u043e\u0432\u0435\u0440\u044c\u0442\u0435 \u0434\u043e\u0441\u0442\u0443\u043f \u043a \u043a\u0430\u043c\u0435\u0440\u0435")
                    }
                    )
                }
                barcodeChangeSubscription() {
                    this.barcode$.pipe(Object(i.b)(this), Object(s.a)(e => !!e)).subscribe(e => {
                        this.onScanSuccess.next(e),
                        this.isCloseAfterScan && this.turnOffScan()
                    }
                    )
                }
                getDefaultFormats() {
                    return [a.c.CODE_128, a.c.DATA_MATRIX, a.c.PDF_417, a.c.QR_CODE]
                }
            }
            ;
            return e.\u0275fac = function(t) {
                return new (t || e)(r.Wb(l.a))
            }
            ,
            e.\u0275cmp = r.Qb({
                type: e,
                selectors: [["app-barcode-scanner"]],
                inputs: {
                    formats: "formats",
                    isScanOpen: "isScanOpen",
                    isScanStart: "isScanStart",
                    isCloseAfterScan: "isCloseAfterScan",
                    isNeedManualInput: "isNeedManualInput",
                    scanBlock: "scanBlock",
                    scannedCounter: "scannedCounter",
                    isShowTip: "isShowTip"
                },
                outputs: {
                    onScanSuccess: "onScanSuccess",
                    isScanOpenChange: "isScanOpenChange",
                    isScanStartChange: "isScanStartChange"
                },
                features: [r.Eb],
                decls: 10,
                vars: 8,
                consts: [[1, "scanner__container", 3, "ngClass"], ["nz-icon", "", "nzType", "smooth-cross", "nzTheme", "outline", 1, "scanner__cross", 3, "click"], ["id", "reader"], ["class", "scanner__shk-info", 4, "ngIf"], ["class", "scanner__counter", 4, "ngIf"], ["class", "scanner__tip", 4, "ngIf"], ["class", "scanner__flash", "nz-icon", "", "nzType", "wb-flash-off", "nzTheme", "outline", 3, "ngClass", "click", 4, "ngIf"], ["class", "scanner__input", 4, "ngIf"], ["loader", ""], [1, "scanner__shk-info"], [4, "ngTemplateOutlet"], [1, "scanner__counter"], [1, "scanner__tip"], ["nz-icon", "", "nzType", "wb-flash-off", "nzTheme", "outline", 1, "scanner__flash", 3, "ngClass", "click"], [1, "scanner__input"], ["nz-input", "", "type", "number", "placeholder", "\u0412\u0432\u0435\u0441\u0442\u0438 \u0428\u041a \u0432\u0440\u0443\u0447\u043d\u0443\u044e", 3, "ngModel", "ngModelChange"], ["nz-button", "", "nzType", "primary", 3, "click"], ["nz-icon", "", "nzType", "arrow-right"], ["nz-icon", "", "nzType", "loading", "nzTheme", "outline", 1, "loader"]],
                template: function(e, t) {
                    1 & e && (r.cc(0, "div", 0),
                    r.cc(1, "i", 1),
                    r.kc("click", (function() {
                        return t.turnOffScan()
                    }
                    )),
                    r.bc(),
                    r.Xb(2, "div", 2),
                    r.Qc(3, m, 2, 1, "div", 3),
                    r.Qc(4, k, 2, 1, "div", 4),
                    r.Qc(5, w, 2, 0, "div", 5),
                    r.Qc(6, x, 1, 3, "i", 6),
                    r.Qc(7, M, 4, 1, "div", 7),
                    r.bc(),
                    r.Qc(8, y, 1, 0, "ng-template", null, 8, r.Rc)),
                    2 & e && (r.wc("ngClass", r.Bc(6, S, t.isScanOpen)),
                    r.Gb(3),
                    r.wc("ngIf", t.scanBlock),
                    r.Gb(1),
                    r.wc("ngIf", t.scannedCounter),
                    r.Gb(1),
                    r.wc("ngIf", t.isShowTip),
                    r.Gb(1),
                    r.wc("ngIf", t.isFlashLightAvailable),
                    r.Gb(1),
                    r.wc("ngIf", t.isNeedManualInput))
                },
                directives: [u.m, d.b, C.a, u.o, u.t, h.a, g.t, g.d, g.p, g.s, p.a, f.a],
                styles: ["#reader[_ngcontent-%COMP%]{width:100%}#reader[_ngcontent-%COMP%], .scanner__container[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center}.scanner__container[_ngcontent-%COMP%]{position:fixed;left:0;top:0;right:0;bottom:0;z-index:-1;pointer-events:none;opacity:0;background:#000}.scanner__container_show[_ngcontent-%COMP%]{z-index:999;pointer-events:auto;opacity:1}.scanner__cross[_ngcontent-%COMP%]{position:absolute;top:8px;right:8px;font-size:41px;color:#fff}.scanner__shk-info[_ngcontent-%COMP%]{position:absolute;width:100%;bottom:57px}.scanner__counter[_ngcontent-%COMP%]{position:absolute;width:100%;top:83px;color:#fff;font-size:18px;font-weight:500;line-height:24px;letter-spacing:.5px;display:flex;justify-content:center;align-items:center}.scanner__tip[_ngcontent-%COMP%]{top:calc(50% - 50vw - 8px);font-size:16px;font-weight:400;line-height:24px}.scanner__flash[_ngcontent-%COMP%], .scanner__tip[_ngcontent-%COMP%]{position:absolute;width:max-content;height:max-content;color:#fff}.scanner__flash[_ngcontent-%COMP%]{top:calc(50% + 50vw - 24px);font-size:26px;padding:4px;border-radius:22px;background:transparent}.scanner__flash_active[_ngcontent-%COMP%]{background:#fff;color:#000}.scanner__input[_ngcontent-%COMP%]{position:absolute;bottom:0;width:100%;display:flex}.scanner__input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:100%;height:40px;border-radius:0}.scanner__input[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:48px;height:40px;position:absolute;right:0;border-radius:0}.loader[_ngcontent-%COMP%]{color:#fff;position:absolute;max-width:86vw;max-height:86vh;font-size:120px;opacity:.2}"]
            }),
            e = Object(o.c)([Object(i.a)()], e),
            e
        }
        )()
    },
    zKup: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return p
        }
        ));
        var o = n("fXoL")
          , r = n("3Pt+")
          , i = n("ofXK")
          , c = n("PTRe")
          , s = n("FwiY");
        const a = ["input"];
        function l(e, t) {
            if (1 & e) {
                const e = o.dc();
                o.cc(0, "input", 3),
                o.kc("ngModelChange", (function(t) {
                    return o.Ic(e),
                    o.oc().writeValue(t)
                }
                ))("ngModelChange", (function(t) {
                    return o.Ic(e),
                    o.oc()._value = t
                }
                )),
                o.bc()
            }
            if (2 & e) {
                const e = o.oc();
                o.Mb("input-style", "newDesign" === e.inputStyle),
                o.xc("nzSize", e.nzSize),
                o.wc("name", e.name)("disabled", e.isDisabled)("ngModel", e._value)("min", e.min)("id", e.id)("type", e.type)("placeholder", e.placeholder)
            }
        }
        function u(e, t) {
            if (1 & e) {
                const e = o.dc();
                o.cc(0, "textarea", 4),
                o.kc("ngModelChange", (function(t) {
                    return o.Ic(e),
                    o.oc().writeValue(t)
                }
                ))("ngModelChange", (function(t) {
                    return o.Ic(e),
                    o.oc()._value = t
                }
                )),
                o.Sc(1, "        "),
                o.bc()
            }
            if (2 & e) {
                const e = o.oc();
                o.xc("nzSize", e.nzSize),
                o.wc("name", e.name)("disabled", e.isDisabled)("ngModel", e._value)("id", e.id)("rows", e.rows)("placeholder", e.placeholder)
            }
        }
        function d(e, t) {
            1 & e && o.Xb(0, "i", 5)
        }
        const h = e => e.toString().replace(/^[.]|^[0][0-9]+|[^0-9.]|[.].*[.]/gm, "");
        let p = ( () => {
            class e {
                constructor(e) {
                    this._elementRef = e,
                    this.placeholder = "",
                    this.min = -1 / 0,
                    this.max = 1 / 0,
                    this.searchIcon = !1,
                    this.inputStyle = "standard",
                    this.nzSize = "large",
                    this._type = "text",
                    this.oldValue = "",
                    this.valueType = "clean",
                    this._value = void 0,
                    this.onChange = () => {}
                    ,
                    this.onTouched = () => {}
                }
                get type() {
                    return this._type
                }
                set type(e) {
                    this._type !== e && (this._type = e)
                }
                updateInputView() {
                    const e = this.input.nativeElement
                      , t = e.selectionStart
                      , n = this._value;
                    let o;
                    "string" == typeof n && (o = n.substring(0, t) + "^" + n.substring(t)),
                    "number" == typeof n && (o = n.toString() + "^");
                    const r = {
                        formatted: h(o),
                        cursorPosition: 0
                    };
                    if (!r)
                        return void (e.value = this.oldValue);
                    const i = r.formatted;
                    i !== e.value && (e.value = i,
                    "number" == typeof n ? e.setSelectionRange(o.length - 1, o.length - 1) : e.setSelectionRange(r.cursorPosition, r.cursorPosition)),
                    this.oldValue = i,
                    this.emitValue(i)
                }
                emitValue(e) {
                    let t;
                    "clean" === this.valueType ? t = e.replace(/[^\d+.]/gm, "") : "full" === this.valueType && (t = e),
                    this.writeValue(t)
                }
                ngOnInit() {}
                ngOnDestroy() {}
                registerOnChange(e) {
                    this.onChange = e
                }
                registerOnTouched(e) {
                    this.onTouched = e
                }
                writeNumberValue(e) {
                    this.writeValue(this._value)
                }
                writeValue(e) {
                    this._value = "number" === this.type && e < this.min ? this.min : e,
                    this.onChange(this._value)
                }
            }
            return e.\u0275fac = function(t) {
                return new (t || e)(o.Wb(o.l))
            }
            ,
            e.\u0275cmp = o.Qb({
                type: e,
                selectors: [["orr-input"]],
                viewQuery: function(e, t) {
                    var n;
                    1 & e && o.Yc(a, !0),
                    2 & e && o.Fc(n = o.lc()) && (t.input = n.first)
                },
                inputs: {
                    isDisabled: "isDisabled",
                    placeholder: "placeholder",
                    id: "id",
                    min: "min",
                    max: "max",
                    step: "step",
                    name: "name",
                    rows: "rows",
                    searchIcon: "searchIcon",
                    inputStyle: "inputStyle",
                    type: "type",
                    valueType: "valueType"
                },
                features: [o.Fb([{
                    provide: r.n,
                    useExisting: Object(o.U)( () => e),
                    multi: !0
                }])],
                decls: 3,
                vars: 3,
                consts: [["nz-input", "", 3, "name", "nzSize", "disabled", "ngModel", "min", "id", "type", "placeholder", "input-style", "ngModelChange", 4, "ngIf"], ["nz-input", "", 3, "name", "nzSize", "disabled", "ngModel", "id", "rows", "placeholder", "ngModelChange", 4, "ngIf"], ["nz-icon", "", "nzType", "search", "class", "search-icon", 4, "ngIf"], ["nz-input", "", 3, "name", "nzSize", "disabled", "ngModel", "min", "id", "type", "placeholder", "ngModelChange"], ["nz-input", "", 3, "name", "nzSize", "disabled", "ngModel", "id", "rows", "placeholder", "ngModelChange"], ["nz-icon", "", "nzType", "search", 1, "search-icon"]],
                template: function(e, t) {
                    1 & e && (o.Qc(0, l, 1, 10, "input", 0),
                    o.Qc(1, u, 2, 7, "textarea", 1),
                    o.Qc(2, d, 1, 0, "i", 2)),
                    2 & e && (o.wc("ngIf", "textarea" !== t.type),
                    o.Gb(1),
                    o.wc("ngIf", "textarea" === t.type),
                    o.Gb(1),
                    o.wc("ngIf", t.searchIcon && !t._value))
                },
                directives: [i.o, c.a, r.d, r.p, r.s, s.b],
                styles: ["[_nghost-%COMP%], nz-input-number[_ngcontent-%COMP%]{width:100%}[_nghost-%COMP%]{position:relative;display:block;height:100%}.ng-invalid[_nghost-%COMP%]   .ant-input-number[_ngcontent-%COMP%]:hover{border-color:#e0b4b4}.search-icon[_ngcontent-%COMP%]{opacity:.25;position:absolute;top:25%;right:5%}input.input-style[_ngcontent-%COMP%]{border-radius:8px;box-shadow:0 5px 4px -4px rgba(0,0,0,.02),0 1px 2px 0 rgba(0,0,0,.06)}"]
            }),
            e
        }
        )()
    },
    zUnb: function(e, t, n) {
        "use strict";
        n.r(t);
        var o = n("fXoL")
          , r = n("AytR")
          , i = (n("F6HI"),
        n("ofXK"))
          , c = n("tk/3")
          , s = n("3Pt+")
          , a = n("jhN1")
          , l = n("R1ws")
          , u = n("Jho9")
          , d = n("sYmb")
          , h = n("FwiY")
          , p = n("PTRe")
          , C = n("rMZv")
          , g = n("Wfee")
          , f = n("F6ss")
          , b = n("ocnv")
          , m = n("z4wI")
          , v = n("nJia")
          , k = n("OzZK")
          , w = n("0lU3")
          , _ = n("JA5x")
          , x = n("A07A")
          , M = n("qAZ0")
          , y = n("Jioy")
          , S = n("bNXi")
          , O = n("TaO5")
          , L = n("SKKP")
          , P = n("oyxB")
          , z = n("bE2y")
          , I = n("tyNb")
          , V = n("Vurf");
        let j = ( () => {
            class e {
                constructor(e, t) {
                    this.loginService = e,
                    this.router = t
                }
                canActivate(e, t) {
                    return !!this.loginService.user || (this.router.navigate(["/login"]),
                    !1)
                }
            }
            return e.\u0275fac = function(t) {
                return new (t || e)(o.gc(V.a),o.gc(I.c))
            }
            ,
            e.\u0275prov = o.Sb({
                token: e,
                factory: e.\u0275fac,
                providedIn: "root"
            }),
            e
        }
        )();
        var T = n("mrSG")
          , H = n("Ek/g")
          , B = n("VfN6")
          , Z = n("lJxs");
        let F = ( () => {
            let e = class {
                constructor(e, t) {
                    this.officeService = e,
                    this.router = t
                }
                canActivate(e, t) {
                    return this.officeService.office$.pipe(Object(B.b)(this), Object(Z.a)(e => {
                        const t = (null == e ? void 0 : e.office_id) > 0;
                        return t || this.router.navigate(["/activate-office"]),
                        t
                    }
                    ))
                }
            }
            ;
            return e.\u0275fac = function(t) {
                return new (t || e)(o.gc(H.a),o.gc(I.c))
            }
            ,
            e.\u0275prov = o.Sb({
                token: e,
                factory: e.\u0275fac,
                providedIn: "root"
            }),
            e = Object(T.c)([Object(B.a)()], e),
            e
        }
        )();
        var G = n("IzEk")
          , D = n("sL4t");
        let R = ( () => {
			let e = class {
				constructor(e, t) {
					this.appStateService = e,
					this.router = t
				}
				canActivate() {
					return this.appStateService.state$.pipe(
						Object(G.a)(1), 
						Object(Z.a)(e => {
						    // Убираем перенаправление на disabled-app
						    if (!e || e.isTrash) {
						        // Вместо перенаправления просто возвращаем false
						        return false; 
						    }
						    // Если условия не выполнены, просто возвращаем true
						    return true;
						})
					);
				}
			}
            ;
            return e.\u0275fac = function(t) {
                return new (t || e)(o.gc(D.a),o.gc(I.c))
            }
            ,
            e.\u0275prov = o.Sb({
                token: e,
                factory: e.\u0275fac,
                providedIn: "root"
            }),
            e = Object(T.c)([Object(B.a)()], e),
            e
        }
        )()
          , U = ( () => {
            let e = class {
                constructor(e, t) {
                    this.appStateService = e,
                    this.router = t
                }
                canActivate() {
                    return this.appStateService.state$.pipe(Object(G.a)(1), Object(Z.a)(e => !(!e || !e.isTrash) || (this.router.navigate(["/"]),
                    !1))).toPromise()
                }
            }
            ;
            return e.\u0275fac = function(t) {
                return new (t || e)(o.gc(D.a),o.gc(I.c))
            }
            ,
            e.\u0275prov = o.Sb({
                token: e,
                factory: e.\u0275fac,
                providedIn: "root"
            }),
            e = Object(T.c)([Object(B.a)()], e),
            e
        }
        )()
          , A = ( () => {
            class e {
                constructor(e, t) {
                    this.loginService = e,
                    this.router = t
                }
                canActivate(e, t) {
                    return !this.loginService.user || (this.router.navigate(["/pvz/schedule"]),
                    !1)
                }
            }
            return e.\u0275fac = function(t) {
                return new (t || e)(o.gc(V.a),o.gc(I.c))
            }
            ,
            e.\u0275prov = o.Sb({
                token: e,
                factory: e.\u0275fac,
                providedIn: "root"
            }),
            e
        }
        )();
        var N = n("wNeN")
          , $ = n("pLZG");
        const E = [{
            path: "",
            canActivate: [R, j, F],
            loadChildren: () => Promise.all([n.e(0), n.e(11)]).then(n.bind(null, "nh7x")).then(e => e.LayoutModule)
        }, {
            path: "login",
            canActivate: [R, A],
            loadChildren: () => Promise.all([n.e(0), n.e(19)]).then(n.bind(null, "hZ2J")).then(e => e.LoginModule)
        }, {
            path: "pickup",
            canActivate: [R, j],
            loadChildren: () => Promise.all([n.e(0), n.e(22)]).then(n.bind(null, "Lhb0")).then(e => e.PickupModule)
        }, {
            path: "manager-check",
            canActivate: [R, j, F, ( () => {
                let e = class {
                    constructor(e, t) {
                        this.managerCheckService = e,
                        this.router = t
                    }
                    canActivate(e, t) {
                        return this.managerCheckService.agreement$.pipe(Object(B.b)(this), Object($.a)(e => void 0 !== e), Object(Z.a)(e => (e || this.router.navigate(["/pvz/schedule"]).then(),
                        !!e)))
                    }
                }
                ;
                return e.\u0275fac = function(t) {
                    return new (t || e)(o.gc(N.a),o.gc(I.c))
                }
                ,
                e.\u0275prov = o.Sb({
                    token: e,
                    factory: e.\u0275fac,
                    providedIn: "root"
                }),
                e = Object(T.c)([Object(B.a)()], e),
                e
            }
            )()],
            loadChildren: () => n.e(20).then(n.bind(null, "N20T")).then(e => e.ManagerCheckModule)
        }, {
            path: "activate-office",
            canActivate: [R, j, ( () => {
                class e {
                    constructor(e, t) {
                        this.officeService = e,
                        this.router = t
                    }
                    canActivate(e, t) {
                        const n = this.officeService.office;
                        return !(n && n.office_id > 0 && (this.router.navigate(["/pvz/schedule"]),
                        1))
                    }
                }
                return e.\u0275fac = function(t) {
                    return new (t || e)(o.gc(H.a),o.gc(I.c))
                }
                ,
                e.\u0275prov = o.Sb({
                    token: e,
                    factory: e.\u0275fac,
                    providedIn: "root"
                }),
                e
            }
            )()],
            loadChildren: () => n.e(21).then(n.bind(null, "Vgpv")).then(e => e.OfficeActivationModule)
        }, {
            path: "disabled-app",
            canActivate: [U],
            loadChildren: () => n.e(16).then(n.bind(null, "8UJb")).then(e => e.DisabledAppModule)
        }, {
            path: "**",
            redirectTo: ""
        }];
        let X = ( () => {
            class e {
            }
            return e.\u0275mod = o.Ub({
                type: e
            }),
            e.\u0275inj = o.Tb({
                factory: function(t) {
                    return new (t || e)
                },
                imports: [[I.g.forRoot(E)], I.g]
            }),
            e
        }
        )();
        var Q = n("3Al/")
          , W = n("lI3o")
          , q = n("3G0t")
          , K = n("kMgu")
          , Y = n("vkgz")
          , J = n("l5mm")
          , ee = n("VRyK")
          , te = n("LRne");
        let ne = ( () => {
            class e {
                constructor(e, t, n) {
                    this.swUpdateService = e,
                    this.notificationsService = t,
                    this.translateService = n,
                    this.hasSW = this.swUpdateService.isEnabled,
                    this.twoMinutes = 12e4
                }
                checkNgsw() {
                    if (this.hasSW) {
                        const e = this.swUpdateService.available.pipe(Object(Y.a)( () => {
                            this.notificationsService.warning(this.translateService.instant("shared.new-version"), this.translateService.instant("shared.update-version"), "new-version")
                        }
                        ))
                          , t = Object(J.a)(this.twoMinutes).pipe(Object(Y.a)( () => this.swUpdateService.checkForUpdate()));
                        return Object(ee.a)(e, t)
                    }
                    return Object(te.a)()
                }
            }
            return e.\u0275fac = function(t) {
                return new (t || e)(o.gc(u.b),o.gc(W.a),o.gc(d.d))
            }
            ,
            e.\u0275prov = o.Sb({
                token: e,
                factory: e.\u0275fac,
                providedIn: "root"
            }),
            e
        }
        )();
        var oe = n("+Z0x")
          , re = n("Se/U")
          , ie = n("EhJz")
          , ce = n("Ctv7")
          , se = function(e) {
            return e.Npos = "NPOS",
            e.Offline = "OFFLINE",
            e
        }({})
          , ae = function(e) {
            return e.UseDevice = "USE_DEVICE",
            e
        }({})
          , le = function(e) {
            return e.AppVersion = "appVersion",
            e.DeviceTtype = "device-type",
            e.OsType = "os-type",
            e.UserAgent = "userAgent",
            e.OfficeId = "officeId",
            e
        }({})
          , ue = function(e) {
            return e.Desktop = "desktop",
            e.Mobile = "mobile",
            e
        }({})
          , de = function(e) {
            return e.Windows = "windows",
            e.Linux = "linux",
            e.Macos = "macos",
            e.IOs = "ios",
            e.Android = "android",
            e.Unknown = "unknown",
            e
        }({})
          , he = n("kiQV");
        let pe = ( () => {
            class e {
                constructor(e, t, n, o) {
                    this.http = e,
                    this.ls = t,
                    this.authService = n,
                    this.officeService = o,
                    this.cacheTtlSec = 86400,
                    this.cacheKey = "DEVICE_ANALYTICS_CACHE",
                    this.accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoid2ItdXNlciIsImlhdCI6MjAzNzMyNzYyOH0.HJD7icMbOOloLmkAD5O2IBXN28YYsCydB102K5hXXC8",
                    this.isNpos = r.a.npos
                }
                init() {
                    this.isCacheValid() || this.sendAnalytics().subscribe( () => this.saveCache(), e => {
                        var t;
                        return console.error(null !== (t = null == e ? void 0 : e.message) && void 0 !== t ? t : e)
                    }
                    )
                }
                sendAnalytics() {
                    const e = new c.g({
                        Authorization: "Bearer " + this.accessToken
                    });
                    return this.http.post(r.a.urls.webAnalytics + "/api/v1/events", this.getDeviceAnalytics(), {
                        headers: e
                    })
                }
                isCacheValid() {
                    const e = this.ls.get(this.cacheKey);
                    return (null == e ? void 0 : e.date) && Object(re.a)(e.date) && Object(ie.a)(Object(ce.a)(e.date, this.cacheTtlSec), new Date)
                }
                saveCache() {
                    const e = {
                        date: new Date
                    };
                    this.ls.set(this.cacheKey, e)
                }
                getDeviceAnalytics() {
                    var e, t, n, o, r, i;
                    const c = window.navigator.userAgent
                      , s = this.getIsMobileDevice(c);
                    return {
                        appName: this.isNpos ? se.Npos : se.Offline,
                        clientDt: new Date,
                        userId: null !== (n = null === (t = null === (e = this.authService.user) || void 0 === e ? void 0 : e.id) || void 0 === t ? void 0 : t.toString()) && void 0 !== n ? n : "",
                        eventName: ae.UseDevice,
                        eventParams: [{
                            paramId: le.AppVersion,
                            paramValue: he.version
                        }, {
                            paramId: le.DeviceTtype,
                            paramValue: s ? ue.Mobile : ue.Desktop
                        }, {
                            paramId: le.OsType,
                            paramValue: this.getOsType(c)
                        }, {
                            paramId: le.UserAgent,
                            paramValue: c
                        }, {
                            paramId: le.OfficeId,
                            paramValue: null !== (i = null === (r = null === (o = this.officeService.office) || void 0 === o ? void 0 : o.office_id) || void 0 === r ? void 0 : r.toString()) && void 0 !== i ? i : "0"
                        }]
                    }
                }
                getIsMobileDevice(e) {
                    return [/Android/i, /iPhone/i, /iPad/i, /iPod/i, /webOS/i, /BlackBerry/i, /Windows Phone/i].some(t => t.test(e))
                }
                getOsType(e) {
                    var t, n;
                    const o = (null === (n = null === (t = window.navigator) || void 0 === t ? void 0 : t.userAgentData) || void 0 === n ? void 0 : n.platform) || window.navigator.platform;
                    return ["macOS", "Macintosh", "MacIntel", "MacPPC", "Mac68K"].includes(o) ? de.Macos : ["iPhone", "iPad", "iPod"].includes(o) ? de.IOs : ["Win32", "Win64", "Windows", "WinCE"].includes(o) ? de.Windows : /Android/i.test(e) ? de.Android : /Linux/i.test(o) ? de.Linux : de.Unknown
                }
            }
            return e.\u0275fac = function(t) {
                return new (t || e)(o.gc(c.c),o.gc(q.a),o.gc(V.a),o.gc(H.a))
            }
            ,
            e.\u0275prov = o.Sb({
                token: e,
                factory: e.\u0275fac,
                providedIn: "root"
            }),
            e
        }
        )();
        var Ce = n("/MIr");
        function ge(e, t) {
            if (1 & e) {
                const e = o.dc();
                o.cc(0, "nz-card", 1),
                o.cc(1, "span", 2),
                o.kc("click", (function(t) {
                    return o.Ic(e),
                    o.oc().dismiss(t)
                }
                )),
                o.Sc(2, "\u2715"),
                o.bc(),
                o.cc(3, "div", 3),
                o.Xb(4, "i", 4),
                o.cc(5, "div", 5),
                o.cc(6, "div", 6),
                o.Sc(7),
                o.bc(),
                o.cc(8, "p"),
                o.Sc(9),
                o.bc(),
                o.bc(),
                o.bc(),
                o.bc()
            }
            if (2 & e) {
                const e = o.oc();
                o.Gb(7),
                o.Uc(" ", e.title, " "),
                o.Gb(2),
                o.Tc(e.message)
            }
        }
        let fe = ( () => {
            class e {
                constructor(e, t) {
                    this._elS = e,
                    this.translateService = t,
                    this.title = this.translateService.instant("wavebreaker.error"),
                    this.show = !1,
                    this.type = "success"
                }
                ngOnInit() {
                    this.elSubscription = this._elS.elState.subscribe(e => {
                        this.type = e.type,
                        this.message = e.message,
                        this.title = e.title,
                        this.show = e.show
                    }
                    )
                }
                ngOnDestroy() {
                    this.elSubscription.unsubscribe()
                }
                dismiss() {
                    this.show = !1
                }
            }
            return e.\u0275fac = function(t) {
                return new (t || e)(o.Wb(Ce.a),o.Wb(d.d))
            }
            ,
            e.\u0275cmp = o.Qb({
                type: e,
                selectors: [["app-event-log"]],
                decls: 1,
                vars: 1,
                consts: [["class", "red pem", 4, "ngIf"], [1, "red", "pem"], [1, "times", 3, "click"], [1, "content"], [1, "exclamation", "icon"], [1, "content__text"], [1, "header"]],
                template: function(e, t) {
                    1 & e && o.Qc(0, ge, 10, 2, "nz-card", 0),
                    2 & e && o.wc("ngIf", t.show)
                },
                directives: [i.o, _.a],
                styles: [".pem[_ngcontent-%COMP%]{position:fixed;z-index:100000;bottom:5px;float:left;width:80%;width:calc(100% - 20px);left:10px}.pem.red[_ngcontent-%COMP%]{background-color:#dc3545}.pem[_ngcontent-%COMP%]   .times[_ngcontent-%COMP%]{cursor:pointer;color:#fff;position:absolute;right:10px;top:5px}.pem[_ngcontent-%COMP%]   .times[_ngcontent-%COMP%]:hover{color:#000}.pem[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{color:#fff;display:flex;flex-flow:row nowrap}"]
            }),
            e
        }
        )();
        const be = ["errorTemplate"]
          , me = ["successTemplate"]
          , ve = ["warningTemplate"];
        function ke(e, t) {
            if (1 & e && (o.cc(0, "div", 4),
            o.Xb(1, "i", 5),
            o.cc(2, "div"),
            o.Sc(3),
            o.bc(),
            o.bc()),
            2 & e) {
                const e = t.data;
                o.Gb(3),
                o.Tc(e.content)
            }
        }
        function we(e, t) {
            if (1 & e && (o.cc(0, "h3", 10),
            o.Sc(1),
            o.bc()),
            2 & e) {
                const e = o.oc().data;
                o.Gb(1),
                o.Tc(e.header)
            }
        }
        function _e(e, t) {
            if (1 & e && (o.cc(0, "span", 11),
            o.Sc(1),
            o.pc(2, "translate"),
            o.bc()),
            2 & e) {
                const e = o.oc().data;
                o.Gb(1),
                o.Vc("(", o.qc(2, 2, "shared.error-code"), ": ", e.errorCode, ")")
            }
        }
        function xe(e, t) {
            if (1 & e && (o.cc(0, "div", 6),
            o.Xb(1, "i", 7),
            o.cc(2, "div"),
            o.Qc(3, we, 2, 1, "h3", 8),
            o.Sc(4),
            o.Qc(5, _e, 3, 4, "span", 9),
            o.bc(),
            o.bc()),
            2 & e) {
                const e = t.data;
                o.Gb(3),
                o.wc("ngIf", e.header),
                o.Gb(1),
                o.Uc(" ", e.content, " "),
                o.Gb(1),
                o.wc("ngIf", e.errorCode)
            }
        }
        function Me(e, t) {
            if (1 & e) {
                const e = o.dc();
                o.cc(0, "div", 12),
                o.Xb(1, "i", 13),
                o.cc(2, "div", 14),
                o.cc(3, "div"),
                o.Sc(4),
                o.bc(),
                o.cc(5, "button", 15),
                o.kc("click", (function() {
                    return o.Ic(e),
                    o.oc().notificationsService.deleteLastWarning()
                }
                )),
                o.Sc(6),
                o.bc(),
                o.bc(),
                o.bc()
            }
            if (2 & e) {
                const e = t.data;
                o.Gb(4),
                o.Tc(e.content),
                o.Gb(2),
                o.Tc(e.text)
            }
        }
        let ye = ( () => {
            let e = class {
                constructor(e, t, n, o, r, i, c, s, a, l, u) {
                    this.translate = e,
                    this.officeService = t,
                    this.notificationsService = n,
                    this.authService = o,
                    this.appStateService = r,
                    this.ls = i,
                    this.serviceWorkerUpdateService = c,
                    this.router = s,
                    this.urlService = a,
                    this.title = l,
                    this.deviceAnalyticsService = u,
                    this.isClosed = !0,
                    this.currentAppVer = ""
                }
                ngOnInit() {
                    this.checkNgsw(),
                    this.setMultiTabsData(),
                    this.translate.setTranslation("ru", Q),
                    this.translate.setDefaultLang("ru"),
                    this.notificationsService.setSuccessTemplate(this.successTemplate),
                    this.notificationsService.setErrorTemplate(this.errorTemplate),
                    this.notificationsService.setWarningTemplate(this.warningTemplate),
                    this.getUserInfo(),
                    this.getOfficeInfo(),
                    this.title.setTitle(r.a.npos ? "Npos" : "OfflinePvz"),
                    this.checkSelectedSpeech(),
                    document.getElementById("favicon").setAttribute("href", `./assets/favicon-modes/${r.a.npos ? "favicon-web" : "favicon-off"}.ico`)
                }
                ngAfterViewInit() {
                    this.deviceAnalyticsService.init()
                }
                checkSelectedSpeech() {
                    localStorage.getItem("speaker") || localStorage.setItem("speaker", JSON.stringify("oksana"))
                }
                checkNgsw() {
                    this.serviceWorkerUpdateService.hasSW && this.serviceWorkerUpdateService.checkNgsw().pipe(Object(B.b)(this)).subscribe()
                }
                setMultiTabsData() {
                    Object.values(K.a).forEach(e => this.ls.set(e, !1))
                }
                getUserInfo() {
                    this.authService.user$.pipe(Object(B.b)(this)).subscribe(e => this.user = e)
                }
                getOfficeInfo() {
                    this.officeService.office$.pipe(Object(B.b)(this)).subscribe(e => {
                        var t;
                        (null === (t = e) || void 0 === t ? void 0 : t.error) ? this.notificationsService.error(e.error.message) : this.office = e
                    }
                    )
                }
            }
            ;
            return e.\u0275fac = function(t) {
                return new (t || e)(o.Wb(d.d),o.Wb(H.a),o.Wb(W.a),o.Wb(V.a),o.Wb(D.a),o.Wb(q.a),o.Wb(ne),o.Wb(I.c),o.Wb(oe.a),o.Wb(a.c),o.Wb(pe))
            }
            ,
            e.\u0275cmp = o.Qb({
                type: e,
                selectors: [["app-root"]],
                viewQuery: function(e, t) {
                    var n;
                    1 & e && (o.Nc(be, !0),
                    o.Nc(me, !0),
                    o.Nc(ve, !0)),
                    2 & e && (o.Fc(n = o.lc()) && (t.errorTemplate = n.first),
                    o.Fc(n = o.lc()) && (t.successTemplate = n.first),
                    o.Fc(n = o.lc()) && (t.warningTemplate = n.first))
                },
                decls: 9,
                vars: 0,
                consts: [["emsg", ""], ["successTemplate", ""], ["errorTemplate", ""], ["warningTemplate", ""], [1, "notification-wrapper", "success"], [1, "anticon", "anticon-check-circle"], [1, "notification-wrapper", "error"], [1, "anticon", "anticon-close-circle"], ["class", "notification-wrapper__header", 4, "ngIf"], ["class", "error-code", 4, "ngIf"], [1, "notification-wrapper__header"], [1, "error-code"], [1, "notification-wrapper", "warning"], [1, "anticon", "anticon-warning"], [1, "message"], [1, "warning-continue", 3, "click"]],
                template: function(e, t) {
                    1 & e && (o.cc(0, "router-outlet"),
                    o.Xb(1, "app-event-log", null, 0),
                    o.bc(),
                    o.Qc(3, ke, 4, 1, "ng-template", null, 1, o.Rc),
                    o.Qc(5, xe, 6, 3, "ng-template", null, 2, o.Rc),
                    o.Qc(7, Me, 7, 2, "ng-template", null, 3, o.Rc))
                },
                directives: [I.h, fe, i.o],
                pipes: [d.c],
                styles: ['.container[_ngcontent-%COMP%]{display:grid;grid-template-columns:250px 1fr;grid-template-rows:50px 1fr 30px;grid-template-areas:"header header" "navi main" "navi footer";height:100vh;position:fixed;top:0;z-index:1;width:100%}.header[_ngcontent-%COMP%]{grid-area:header;background:#e8e8e8}.navi[_ngcontent-%COMP%]{grid-area:navi;background:#3a3633}.main[_ngcontent-%COMP%]{grid-area:main;background:#efefef;overflow-y:auto}.footer[_ngcontent-%COMP%]{grid-area:footer;background:#e2e2e2}.main-content[_ngcontent-%COMP%]{background:#fff;padding:24px;min-height:280px}.main-container[_ngcontent-%COMP%]{padding-bottom:48px;display:grid;grid-template-rows:auto max-content;overflow-x:visible!important}.main-container[_ngcontent-%COMP%]   nz-content[_ngcontent-%COMP%]{overflow:visible}.main-container[_ngcontent-%COMP%]   nz-footer[_ngcontent-%COMP%]{grid-row:2}.settings[_ngcontent-%COMP%]{margin-top:50px}.main-layout[_ngcontent-%COMP%]{min-height:100%;position:relative}.footer[_ngcontent-%COMP%]{position:fixed;right:0;left:250px;bottom:0;text-align:center}.app-layout[_ngcontent-%COMP%]{display:grid;grid-template-rows:max-content auto;grid-template-areas:"h" "c"}app-header[_ngcontent-%COMP%]{grid-area:h}.app-content[_ngcontent-%COMP%]{grid-area:c}nz-footer[_ngcontent-%COMP%]{right:0;bottom:0;left:250px;height:30px;z-index:999;position:fixed;text-align:center}.pvz-icon[_ngcontent-%COMP%]{width:40px;height:40px;cursor:pointer;background-size:contain;background:url(pvz-icon.3479a912720eac842c69.svg) no-repeat 50%}.icon[_ngcontent-%COMP%]{display:inline-block}.notification-wrapper__header[_ngcontent-%COMP%]{margin-bottom:12px}']
            }),
            e = Object(T.c)([Object(B.a)()], e),
            e
        }
        )();
        var Se = n("quSY")
          , Oe = n("XNiG")
          , Le = n("jtHE")
          , Pe = n("Rm4T")
          , ze = n("wq8c")
          , Ie = n.n(ze)
          , Ve = n("BAOO")
          , je = n.n(Ve)
          , Te = n("h6u5")
          , He = n.n(Te);
        let Be = ( () => {
            class e {
                constructor(e, t, n) {
                    this.http = e,
                    this.translate = t,
                    this.i18n = n,
                    this.additionalStorageKey = "",
                    this.config = null,
                    this.loadSubs = new Se.a,
                    this.configSubs = new Se.a,
                    this.loadSubj = new Oe.a,
                    this.usedLanguageSubj = new Le.a(1),
                    this.translationsDir = r.a.production ? "assets/i18n/" : "../../assets/i18n/",
                    this.translationsConfig = "config.json",
                    this.fallbackLang = r.a.lang,
                    this.selectedLang = this.usedLanguage || this.fallbackLang
                }
                get usedLanguage$() {
                    return this.usedLanguageSubj
                }
                get usedLanguage() {
                    return localStorage.getItem(this.storageKey)
                }
                set usedLanguage(e) {
                    localStorage.setItem(this.storageKey, e),
                    this.usedLanguageSubj.next(e)
                }
                get storageKey() {
                    return this.additionalStorageKey ? "APP_LANG_" + this.additionalStorageKey : "APP_LANG"
                }
                loadTranslation(e="") {
                    if (e || (e = this.selectedLang),
                    e !== this.loadedLang)
                        return this.config ? this.loadAndUseLang(e) : (this.configSubs.unsubscribe(),
                        this.configSubs = this.loadConfig().subscribe( () => this.loadAndUseLang(e))),
                        this.loadSubj.asObservable().toPromise()
                }
                loadConfig() {
                    return this.http.get(`${this.translationsDir}${this.translationsConfig}`).pipe(Object(Y.a)(e => {
                        this.config = e
                    }
                    ))
                }
                loadAndUseLang(e) {
                    this.loadSubs.unsubscribe(),
                    this.loadSubs = this.http.get(`${this.translationsDir}${this.config[e] || this.config[this.fallbackLang]}`).subscribe(t => {
                        switch (this.translate.setTranslation(e, t),
                        e) {
                        case "ru":
                            Object(i.B)(Ie.a),
                            this.i18n.setLocale(Pe.g);
                            break;
                        case "en":
                            this.i18n.setLocale(Pe.e);
                            break;
                        case "pl":
                            Object(i.B)(je.a),
                            this.i18n.setLocale(Pe.f);
                            break;
                        case "sk":
                            Object(i.B)(He.a),
                            this.i18n.setLocale(Pe.h);
                            break;
                        default:
                            Object(i.B)(Ie.a),
                            this.i18n.setLocale(Pe.g)
                        }
                        this.translate.use(e).subscribe( () => {
                            this.onLangLoaded(e)
                        }
                        , t => this.onLoadLangError(e, t))
                    }
                    , t => this.onLoadLangError(e, t))
                }
                onLangLoaded(e) {
                    this.loadedLang && this.loadedLang !== e && this.translate.resetLang(this.loadedLang),
                    this.loadedLang = e,
                    this.selectedLang = e,
                    this.usedLanguage = e,
                    this.loadSubj.complete()
                }
                onLoadLangError(e, t) {
                    this.loadedLang ? this.translate.use(this.loadedLang).subscribe( () => this.onLangLoaded(this.loadedLang), e => this.loadSubj.error(e)) : e !== this.fallbackLang ? this.loadAndUseLang(this.fallbackLang) : this.loadSubj.error(t)
                }
            }
            return e.\u0275fac = function(t) {
                return new (t || e)(o.gc(c.c),o.gc(d.d),o.gc(Pe.d))
            }
            ,
            e.\u0275prov = o.Sb({
                token: e,
                factory: e.\u0275fac
            }),
            e
        }
        )();
        var Ze = n("pKmL")
          , Fe = n("mqiu");
        function Ge(e) {
            return new Fe.a(e)
        }
        function De(e) {
            return () => e.initState()
        }
        var Re = n("itXk");
        function Ue(e, t, n) {
            const o = Object(Re.a)([t.office$, n.user$]).pipe(Object($.a)( ([e,t]) => !!e && !!t)).subscribe({
                next: () => {
                    o.unsubscribe(),
                    e.watchActualState()
                }
            });
            return () => o
        }
        function Ae(e) {
            return () => e.checkingContentViewed()
        }
        var Ne = n("biIK")
          , $e = n("NXyV")
          , Ee = n("EY2u")
          , Xe = n("5+tZ")
          , Qe = n("JIr8");
        function We(e, t) {
            return () => Object($e.a)( () => r.a.npos ? t.refreshLogin().pipe(Object(Xe.a)( () => function(e) {
                const t = new URL(window.location.href).searchParams.get("manager_shk");
                return t ? e.getOfficeByShk(t).pipe(Object(Qe.a)( () => (this.router.navigate(["/activate-office"]),
                Ee.a)), Object(Y.a)(e => {
                    var t;
                    (null === (t = e) || void 0 === t ? void 0 : t.error) && this.router.navigate(["/activate-office"])
                }
                )) : Object(te.a)(null)
            }(e)), Object(Qe.a)( () => t.logout())) : t.updateAuth().pipe(Object(Xe.a)( () => e.getOfficeInfo()), Object(Qe.a)( () => Ee.a))).toPromise()
        }
        function qe(e) {
            return () => e.loadTranslation()
        }
        var Ke = n("qJyV")
          , Ye = n("DrIY")
          , Je = n("hD7a")
          , et = n("GHcM")
          , tt = n("citr")
          , nt = n("dEAy")
          , ot = n("rDF6")
          , rt = n("WXh7")
          , it = n("b/7W")
          , ct = n("PScX")
          , st = n("emTK");
        let at = ( () => {
            class e {
            }
            return e.\u0275mod = o.Ub({
                type: e
            }),
            e.\u0275inj = o.Tb({
                factory: function(t) {
                    return new (t || e)
                },
                providers: [st.a],
                imports: [[i.c, h.c, k.c, v.b, ct.d]]
            }),
            e
        }
        )()
          , lt = ( () => {
            class e {
            }
            return e.\u0275mod = o.Ub({
                type: e
            }),
            e.\u0275inj = o.Tb({
                factory: function(t) {
                    return new (t || e)
                },
                providers: [it.a],
                imports: [[i.c, nt.b, tt.a, s.u, ot.a, C.d, b.e, p.d, rt.a, M.b, h.c, at]]
            }),
            e
        }
        )()
          , ut = ( () => {
            class e {
            }
            return e.\u0275mod = o.Ub({
                type: e
            }),
            e.\u0275inj = o.Tb({
                factory: function(t) {
                    return new (t || e)
                },
                imports: [[i.c, lt, rt.a, h.c, k.c]]
            }),
            e
        }
        )();
        var dt = n("Nqz0");
        let ht = ( () => {
            class e {
            }
            return e.\u0275mod = o.Ub({
                type: e
            }),
            e.\u0275inj = o.Tb({
                factory: function(t) {
                    return new (t || e)
                },
                imports: [[i.c, h.c, dt.c]]
            }),
            e
        }
        )()
          , pt = ( () => {
            class e {
            }
            return e.\u0275mod = o.Ub({
                type: e
            }),
            e.\u0275inj = o.Tb({
                factory: function(t) {
                    return new (t || e)
                },
                imports: [[i.c, ht, p.d, s.u]]
            }),
            e
        }
        )()
          , Ct = ( () => {
            class e {
            }
            return e.\u0275mod = o.Ub({
                type: e
            }),
            e.\u0275inj = o.Tb({
                factory: function(t) {
                    return new (t || e)
                },
                providers: [it.a],
                imports: [[i.c, et.a, tt.a, P.c, h.c, ut, pt, k.c]]
            }),
            e
        }
        )();
        var gt = n("PCNd")
          , ft = n("zAKX")
          , bt = n("D9mS");
        let mt = ( () => {
            class e {
            }
            return e.\u0275mod = o.Ub({
                type: e
            }),
            e.\u0275inj = o.Tb({
                factory: function(t) {
                    return new (t || e)
                },
                imports: [[i.c, bt.a, h.c, k.c]]
            }),
            e
        }
        )()
          , vt = ( () => {
            class e {
            }
            return e.\u0275mod = o.Ub({
                type: e
            }),
            e.\u0275inj = o.Tb({
                factory: function(t) {
                    return new (t || e)
                },
                imports: [[i.c, k.c, h.c, p.d, mt, s.u, ft.c]]
            }),
            e
        }
        )()
          , kt = ( () => {
            class e {
            }
            return e.\u0275mod = o.Ub({
                type: e
            }),
            e.\u0275inj = o.Tb({
                factory: function(t) {
                    return new (t || e)
                },
                imports: [[i.c, h.c]]
            }),
            e
        }
        )()
          , wt = ( () => {
            class e {
            }
            return e.\u0275mod = o.Ub({
                type: e
            }),
            e.\u0275inj = o.Tb({
                factory: function(t) {
                    return new (t || e)
                },
                imports: [[i.c, C.d, ot.a, v.b, k.c, gt.a, lt, rt.a, h.c, vt, kt]]
            }),
            e
        }
        )()
          , _t = ( () => {
            class e {
            }
            return e.\u0275mod = o.Ub({
                type: e
            }),
            e.\u0275inj = o.Tb({
                factory: function(t) {
                    return new (t || e)
                },
                imports: [[i.c, p.d, et.a, P.c, wt, rt.a]]
            }),
            e
        }
        )();
        var xt = n("OtHt")
          , Mt = n("jAVn");
        let yt = ( () => {
            class e {
            }
            return e.\u0275mod = o.Ub({
                type: e
            }),
            e.\u0275inj = o.Tb({
                factory: function(t) {
                    return new (t || e)
                },
                providers: [Mt.a],
                imports: [[i.c, Ct, _t, h.c, xt.d, wt, v.b]]
            }),
            e
        }
        )()
          , St = ( () => {
            class e {
            }
            return e.\u0275mod = o.Ub({
                type: e
            }),
            e.\u0275inj = o.Tb({
                factory: function(t) {
                    return new (t || e)
                },
                imports: [[i.c, h.c, gt.a, O.b, f.b, s.k, s.u]]
            }),
            e
        }
        )()
          , Ot = ( () => {
            class e {
            }
            return e.\u0275mod = o.Ub({
                type: e
            }),
            e.\u0275inj = o.Tb({
                factory: function(t) {
                    return new (t || e)
                },
                imports: [[i.c, s.u, w.b, k.c]]
            }),
            e
        }
        )()
          , Lt = ( () => {
            class e {
            }
            return e.\u0275mod = o.Ub({
                type: e
            }),
            e.\u0275inj = o.Tb({
                factory: function(t) {
                    return new (t || e)
                },
                imports: [[i.c, w.b, h.c, s.k, k.c, Ot]]
            }),
            e
        }
        )();
        var Pt = n("WMuC");
        let zt = ( () => {
            class e {
            }
            return e.\u0275mod = o.Ub({
                type: e
            }),
            e.\u0275inj = o.Tb({
                factory: function(t) {
                    return new (t || e)
                },
                providers: [Pt.a],
                imports: [[i.c, z.d, C.d, s.u, h.c, xt.d, v.b, w.b, k.c, St, Lt, rt.a]]
            }),
            e
        }
        )();
        var It = n("Erp3");
        let Vt = ( () => {
            class e {
            }
            return e.\u0275mod = o.Ub({
                type: e
            }),
            e.\u0275inj = o.Tb({
                factory: function(t) {
                    return new (t || e)
                },
                imports: [[i.c, h.c]]
            }),
            e
        }
        )()
          , jt = ( () => {
            class e {
            }
            return e.\u0275mod = o.Ub({
                type: e
            }),
            e.\u0275inj = o.Tb({
                factory: function(t) {
                    return new (t || e)
                },
                imports: [[i.c]]
            }),
            e
        }
        )()
          , Tt = ( () => {
            class e {
            }
            return e.\u0275mod = o.Ub({
                type: e
            }),
            e.\u0275inj = o.Tb({
                factory: function(t) {
                    return new (t || e)
                },
                imports: [[i.c, Vt, jt, h.c]]
            }),
            e
        }
        )()
          , Ht = ( () => {
            class e {
            }
            return e.\u0275mod = o.Ub({
                type: e
            }),
            e.\u0275inj = o.Tb({
                factory: function(t) {
                    return new (t || e)
                },
                imports: [[i.c, h.c]]
            }),
            e
        }
        )()
          , Bt = ( () => {
            class e {
            }
            return e.\u0275mod = o.Ub({
                type: e
            }),
            e.\u0275inj = o.Tb({
                factory: function(t) {
                    return new (t || e)
                },
                imports: [[i.c, h.c, Vt, Ht]]
            }),
            e
        }
        )()
          , Zt = ( () => {
            class e {
            }
            return e.\u0275mod = o.Ub({
                type: e
            }),
            e.\u0275inj = o.Tb({
                factory: function(t) {
                    return new (t || e)
                },
                imports: [[i.c]]
            }),
            e
        }
        )()
          , Ft = ( () => {
            class e {
            }
            return e.\u0275mod = o.Ub({
                type: e
            }),
            e.\u0275inj = o.Tb({
                factory: function(t) {
                    return new (t || e)
                },
                providers: [It.a],
                imports: [[i.c, a.a, Tt, Bt, Zt]]
            }),
            e
        }
        )()
          , Gt = ( () => {
            class e {
            }
            return e.\u0275mod = o.Ub({
                type: e
            }),
            e.\u0275inj = o.Tb({
                factory: function(t) {
                    return new (t || e)
                },
                providers: [it.a],
                imports: [[i.c, h.c, v.b, C.d, rt.a, xt.d, z.d, s.u]]
            }),
            e
        }
        )();
        var Dt = n("B+r4")
          , Rt = n("IvDN")
          , Ut = n("UXJo");
        let At = ( () => {
            class e {
            }
            return e.\u0275mod = o.Ub({
                type: e
            }),
            e.\u0275inj = o.Tb({
                factory: function(t) {
                    return new (t || e)
                },
                imports: [[i.c, Ut.b, v.b, h.c]]
            }),
            e
        }
        )();
        var Nt = n("8UY1");
        let $t = ( () => {
            class e {
            }
            return e.\u0275mod = o.Ub({
                type: e
            }),
            e.\u0275inj = o.Tb({
                factory: function(t) {
                    return new (t || e)
                },
                imports: [[i.c, p.d, h.c, k.c, s.u, z.d, ft.c, v.b, Rt.b, At, Nt.c, M.b, xt.d]]
            }),
            e
        }
        )();
        var Et = n("rDax");
        let Xt = ( () => {
            class e {
            }
            return e.\u0275mod = o.Ub({
                type: e
            }),
            e.\u0275inj = o.Tb({
                factory: function(t) {
                    return new (t || e)
                },
                imports: [[i.c, M.b, Nt.c, At, v.b]]
            }),
            e
        }
        )();
        var Qt = n("4xsP");
        let Wt = ( () => {
            class e {
            }
            return e.\u0275mod = o.Ub({
                type: e
            }),
            e.\u0275inj = o.Tb({
                factory: function(t) {
                    return new (t || e)
                },
                imports: [[i.c, Et.g, Rt.b, Xt, O.b, s.k, xt.d, Qt.b]]
            }),
            e
        }
        )()
          , qt = ( () => {
            class e {
            }
            return e.\u0275mod = o.Ub({
                type: e
            }),
            e.\u0275inj = o.Tb({
                factory: function(t) {
                    return new (t || e)
                },
                imports: [[i.c, Dt.b, $t, Wt, M.b]]
            }),
            e
        }
        )()
          , Kt = ( () => {
            class e {
                constructor(e) {
                    this.http = e
                }
                setMarketPlaceDelivery(e) {
                    return this.http.post(`${r.a.urls.baseUrl}/api/acceptance/ttn?shk=${e}`, null)
                }
            }
            return e.\u0275fac = function(t) {
                return new (t || e)(o.gc(c.c))
            }
            ,
            e.\u0275prov = o.Sb({
                token: e,
                factory: e.\u0275fac
            }),
            e
        }
        )();
        var Yt = n("3Cwb")
          , Jt = n("Zodz");
        let en = ( () => {
            class e {
            }
            return e.\u0275mod = o.Ub({
                type: e
            }),
            e.\u0275inj = o.Tb({
                factory: function(t) {
                    return new (t || e)
                },
                imports: [[i.c, s.k, I.g, gt.a, p.d, Jt.a, s.u]]
            }),
            e
        }
        )();
        var tn = n("PFgF")
          , nn = n("x/g9");
        let on = ( () => {
            class e {
            }
            return e.\u0275mod = o.Ub({
                type: e
            }),
            e.\u0275inj = o.Tb({
                factory: function(t) {
                    return new (t || e)
                },
                imports: [[i.c]]
            }),
            e
        }
        )();
        var rn = n("x3ft");
        let cn = ( () => {
            class e {
                constructor(e) {
                    this.http = e
                }
                getShkReport() {
                    return this.http.get(r.a.urls.baseUrl + "/api/report/shk")
                }
                getBoxReport() {
                    return this.http.get(r.a.urls.baseUrl + "/api/report/box")
                }
                getCourierReport() {
                    return this.http.get(r.a.urls.baseUrl + "/api/report/courier")
                }
            }
            return e.\u0275fac = function(t) {
                return new (t || e)(o.gc(c.c))
            }
            ,
            e.\u0275prov = o.Sb({
                token: e,
                factory: e.\u0275fac,
                providedIn: "root"
            }),
            e
        }
        )();
        var sn = n("qRnr");
        let an = ( () => {
            class e {
                constructor(e) {
                    this.http = e
                }
                scanItem(e, t, n) {
                    return this.http.post(r.a.urls.baseUrl + "/api/invent/scan", {
                        shk: encodeURIComponent(e),
                        locationTypeId: t,
                        locationId: n
                    })
                }
                finishInvent(e) {
                    return this.http.post(r.a.urls.baseUrl + "/api/invent/finish", e)
                }
            }
            return e.\u0275fac = function(t) {
                return new (t || e)(o.gc(c.c))
            }
            ,
            e.\u0275prov = o.Sb({
                token: e,
                factory: e.\u0275fac,
                providedIn: "root"
            }),
            e
        }
        )();
        var ln = n("zeWv")
          , un = n("+bLX")
          , dn = n("eIep")
          , hn = n("RwU8")
          , pn = n("C2AL");
        let Cn = ( () => {
            class e {
                constructor() {
                    this.onClick = new o.n
                }
            }
            return e.\u0275fac = function(t) {
                return new (t || e)
            }
            ,
            e.\u0275cmp = o.Qb({
                type: e,
                selectors: [["offer-global-modal"]],
                outputs: {
                    onClick: "onClick"
                },
                decls: 22,
                vars: 0,
                consts: [[1, "modal"], [1, "modal__content"], [1, "modal__footer"], ["nz-button", "", "nzType", "primary", "nzSize", "large", 3, "click"]],
                template: function(e, t) {
                    1 & e && (o.cc(0, "div", 0),
                    o.cc(1, "h2"),
                    o.Sc(2, " \u041e \u043f\u0435\u0440\u0435\u0432\u043e\u0434\u0435 \u0432 \u043e\u0431\u044a\u0435\u0434\u0438\u043d\u0451\u043d\u043d\u0443\u044e \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u044e \u041e\u041e\u041e \xab\u0420\u0412\u0411\xbb "),
                    o.bc(),
                    o.cc(3, "div", 1),
                    o.cc(4, "p"),
                    o.Sc(5, " 13 \u0430\u0432\u0433\u0443\u0441\u0442\u0430 \u041e\u041e\u041e \xab\u0420\u0412\u0411\xbb \u043f\u0440\u0438\u043d\u044f\u043b\u043e \u043d\u0430 \u0441\u0435\u0431\u044f \u0432\u0441\u0435 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u0441\u0442\u0432\u0430 \u043f\u0435\u0440\u0435\u0434 \u043f\u0430\u0440\u0442\u043d\u0451\u0440\u0430\u043c\u0438 \u0438 \u043a\u043b\u0438\u0435\u043d\u0442\u0430\u043c\u0438 \u041e\u041e\u041e \xab\u0412\u0430\u0439\u043b\u0434\u0431\u0435\u0440\u0440\u0438\u0437\xbb. \u0421\u043e\u0432\u043c\u0435\u0441\u0442\u043d\u043e\u0435 \u043f\u0440\u0435\u0434\u043f\u0440\u0438\u044f\u0442\u0438\u0435 \u041e\u041e\u041e \xab\u0420\u0412\u0411\xbb \u0431\u044b\u043b\u043e \u0443\u0447\u0440\u0435\u0436\u0434\u0435\u043d\u043e \u0432 \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u0435 \u043e\u0431\u044a\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u044f Wildberries \u0438 \u043a\u0440\u0443\u043f\u043d\u0435\u0439\u0448\u0435\u0433\u043e \u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u0430 \u043d\u0430\u0440\u0443\u0436\u043d\u043e\u0439 \u0440\u0435\u043a\u043b\u0430\u043c\u044b \u2014 \u0433\u0440\u0443\u043f\u043f\u044b Russ. \u041d\u0430 \u0431\u0430\u0437\u0435 \u043e\u0431\u044a\u0435\u0434\u0438\u043d\u0435\u043d\u043d\u043e\u0439 \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0438 \u0441\u043e\u0437\u0434\u0430\u0451\u0442\u0441\u044f \u043d\u043e\u0432\u0435\u0439\u0448\u0430\u044f \u0446\u0438\u0444\u0440\u043e\u0432\u0430\u044f \u0442\u043e\u0440\u0433\u043e\u0432\u0430\u044f \u043f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u0430. "),
                    o.bc(),
                    o.cc(6, "p"),
                    o.Sc(7, " \u041f\u0440\u0438 \u044d\u0442\u043e\u043c \u043d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u0438\u0437\u043c\u0435\u043d\u0438\u043b\u043e\u0441\u044c \u0432 \u043f\u043e\u0432\u0441\u0435\u0434\u043d\u0435\u0432\u043d\u043e\u0439 \u0440\u0430\u0431\u043e\u0442\u0435 \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0438: \u0432\u0441\u0435 \u0443\u0441\u043b\u0443\u0433\u0438 \u043f\u043e \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0435, \u0445\u0440\u0430\u043d\u0435\u043d\u0438\u044e \u0438 \u043e\u0431\u0441\u043b\u0443\u0436\u0438\u0432\u0430\u043d\u0438\u044e \u043f\u0440\u043e\u0434\u043e\u043b\u0436\u0430\u044e\u0442 \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u0442\u044c\u0441\u044f \u043a\u0430\u043a \u043e\u0431\u044b\u0447\u043d\u043e. \u0412\u0441\u0451 \u043e\u0441\u0442\u0430\u043d\u0435\u0442\u0441\u044f \u0442\u0430\u043a\u0436\u0435 \u043a\u0430\u043a \u0438 \u043f\u0440\u0435\u0436\u0434\u0435, \u0432 \u0442\u043e\u043c \u0447\u0438\u0441\u043b\u0435 - \u043b\u044e\u0431\u0438\u043c\u044b\u0439 \u0432\u0441\u0435\u043c\u0438 \u0431\u0440\u0435\u043d\u0434 Wildberries. "),
                    o.bc(),
                    o.cc(8, "h4"),
                    o.Sc(9, " \u0427\u0442\u043e \u044d\u0442\u043e \u0437\u043d\u0430\u0447\u0438\u0442 \u0434\u043b\u044f \u0432\u0430\u0441? "),
                    o.bc(),
                    o.cc(10, "ul"),
                    o.cc(11, "li"),
                    o.Sc(12, " \u043f\u043e\u0434\u043f\u0438\u0448\u0435\u043c \u0441 \u0432\u0430\u043c\u0438 \u0441\u043e\u0433\u043b\u0430\u0448\u0435\u043d\u0438\u0435 \u043e \u043f\u0435\u0440\u0435\u0432\u043e\u0434\u0435 \u0432 \u041e\u041e\u041e \xab\u0420\u0412\u0411\xbb "),
                    o.bc(),
                    o.cc(13, "li"),
                    o.Sc(14, " \u0432\u0441\u0435 \u0432\u044b\u043f\u043b\u0430\u0442\u044b \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u043c \u0432 \u0441\u0440\u043e\u043a \u0438 \u0432 \u043f\u043e\u043b\u043d\u043e\u043c \u043e\u0431\u044a\u0451\u043c\u0435 "),
                    o.bc(),
                    o.cc(15, "li"),
                    o.Sc(16, " \u0441\u0434\u0435\u043b\u0430\u0435\u043c \u043f\u0440\u043e\u0446\u0435\u0441\u0441 \u043e\u0444\u043e\u0440\u043c\u043b\u0435\u043d\u0438\u044f \u043e\u043f\u0435\u0440\u0430\u0442\u0438\u0432\u043d\u044b\u043c \u0438 \u043a\u043e\u043c\u0444\u043e\u0440\u0442\u043d\u044b\u043c "),
                    o.bc(),
                    o.cc(17, "li"),
                    o.Sc(18, " \u0432 \u0432\u0430\u0448\u0435\u0439 \u0435\u0436\u0435\u0434\u043d\u0435\u0432\u043d\u043e\u0439 \u0440\u0430\u0431\u043e\u0442\u0435 \u043d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u0438\u0437\u043c\u0435\u043d\u0438\u0442\u0441\u044f - \u0432\u0441\u0451 \u043e\u0441\u0442\u0430\u043d\u0435\u0442\u0441\u044f \u043f\u043e-\u043f\u0440\u0435\u0436\u043d\u0435\u043c\u0443 "),
                    o.bc(),
                    o.bc(),
                    o.bc(),
                    o.cc(19, "div", 2),
                    o.cc(20, "button", 3),
                    o.kc("click", (function() {
                        return t.onClick.emit()
                    }
                    )),
                    o.Sc(21, " \u0421\u043e\u0433\u043b\u0430\u0441\u0438\u0442\u044c\u0441\u044f "),
                    o.bc(),
                    o.bc(),
                    o.bc())
                },
                directives: [k.a, hn.a, pn.a],
                styles: [".modal[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:20px;font-size:14px}.modal[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0;font-size:20px;line-height:32px}.modal__content[_ngcontent-%COMP%]{color:rgba(0,0,0,.8)}.modal__content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin:0;padding-left:15px}.modal__content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{margin-top:20px;font-size:16px}.modal__footer[_ngcontent-%COMP%]{display:flex;justify-content:end}@media (max-width:767px){.modal[_ngcontent-%COMP%]{max-height:calc(100vh - 48px)}.modal__content[_ngcontent-%COMP%]{overflow:auto}.modal__footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:100%}}"],
                changeDetection: 0
            }),
            e
        }
        )();
        var gn = n("8ou0");
        let fn = ( () => {
            let e = class {
                constructor(e, t, n, o, r, i) {
                    this._http = e,
                    this._authService = t,
                    this._officeService = n,
                    this._router = o,
                    this._nzModalService = r,
                    this._nzDrawerService = i,
                    this.isMobile = !1,
                    this.contentViewed = null
                }
                getContentViewed() {
                    return this._http.get(r.a.urls.baseUrl + "/api/manager_hiring/api/v1/mobile/content-viewed").pipe(Object(Z.a)(e => {
                        return {
                            needShowContent: (t = e).need_show_content,
                            title: t.title,
                            text: t.text
                        };
                        var t
                    }
                    ), Object(Y.a)(e => this.contentViewed = e))
                }
                setContentViewed() {
                    return this._http.post(r.a.urls.baseUrl + "/api/manager_hiring/api/v1/mobile/content-viewed/add", null)
                }
                checkingContentViewed() {
                    this.routerNav$ = this._router.events.pipe(Object($.a)(e => this._authService.user && this._officeService.office && e instanceof I.b), Object(dn.a)( () => Object($e.a)( () => this.contentViewed ? Object(te.a)(this.contentViewed) : this.getContentViewed()))).subscribe( ({needShowContent: e}) => {
                        if (!e)
                            return void this.destroyRouterNav();
                        let t;
                        t = this.isMobile ? this._nzDrawerService.create({
                            nzContent: Cn,
                            nzPlacement: "bottom",
                            nzHeight: "fit-content",
                            nzWrapClassName: "offer-global-drawer"
                        }) : this._nzModalService.create({
                            nzContent: Cn,
                            nzWrapClassName: "offer-global-modal",
                            nzFooter: null,
                            nzWidth: 600
                        }),
                        setTimeout( () => {
                            const e = t.getContentComponent();
                            e && e.onClick.pipe(Object(B.b)(this), Object(dn.a)( () => this.setContentViewed())).subscribe( () => {
                                this.destroyRouterNav(),
                                t.close()
                            }
                            )
                        }
                        , 0)
                    }
                    )
                }
                destroyRouterNav() {
                    this.routerNav$.unsubscribe(),
                    this.contentViewed = null
                }
            }
            ;
            return e.\u0275fac = function(t) {
                return new (t || e)(o.gc(c.c),o.gc(V.a),o.gc(H.a),o.gc(I.c),o.gc(nt.d),o.gc(f.d))
            }
            ,
            e.\u0275prov = o.Sb({
                token: e,
                factory: e.\u0275fac,
                providedIn: "root"
            }),
            Object(T.c)([Object(gn.a)({
                width: 768
            }), Object(T.f)("design:type", Object)], e.prototype, "isMobile", void 0),
            e = Object(T.c)([Object(B.a)()], e),
            e
        }
        )();
        var bn = n("mX84")
          , mn = n("JAMu");
        let vn = ( () => {
            class e {
                constructor(e) {
                    this.http = e
                }
                getBox(e) {
                    return this.http.get(`${r.a.urls.baseUrl}/api/shipment/box?boxShk=${e}`)
                }
                create(e) {
                    return this.http.post(r.a.urls.baseUrl + "/api/shipment/create_v1", e)
                }
                get() {
                    return this.http.get(r.a.urls.baseUrl + "/api/shipment/get")
                }
                printData(e) {
                    return this.http.get(`${r.a.urls.baseUrl}/api/shipment/printData?shipmentId=${e}`)
                }
            }
            return e.\u0275fac = function(t) {
                return new (t || e)(o.gc(c.c))
            }
            ,
            e.\u0275prov = o.Sb({
                token: e,
                factory: e.\u0275fac,
                providedIn: "root"
            }),
            e
        }
        )();
        var kn = n("Q7je")
          , wn = n("AY4b")
          , _n = n("POlk");
        let xn = ( () => {
            class e {
                get RUB() {
                    return {
                        id: 1,
                        code: 643,
                        name: "\u0440\u043e\u0441\u0441\u0438\u0439\u0441\u043a\u0438\u0439 \u0440\u0443\u0431\u043b\u044c"
                    }
                }
                get KZT() {
                    return {
                        id: 13,
                        code: 398,
                        name: "\u043a\u0430\u0437\u0430\u0445\u0441\u0442\u0430\u043d\u0441\u043a\u0438\u0439 \u0442\u0435\u043d\u0433\u0435"
                    }
                }
                get BYN() {
                    return {
                        id: 16,
                        code: 933,
                        name: "\u0431\u0435\u043b\u043e\u0440\u0443\u0441\u0441\u043a\u0438\u0439 \u0440\u0443\u0431\u043b\u044c"
                    }
                }
                get KGS() {
                    return {
                        id: 17,
                        code: 417,
                        name: "\u043a\u0438\u0440\u0433\u0438\u0437\u0441\u043a\u0438\u0439 \u0441\u043e\u043c"
                    }
                }
                get AMD() {
                    return {
                        id: 18,
                        code: 51,
                        name: "\u0430\u0440\u043c\u044f\u043d\u0441\u043a\u0438\u0439 \u0434\u0440\u0430\u043c"
                    }
                }
                get PLN() {
                    return {
                        id: 20,
                        code: 985,
                        name: "Z\u0142oty"
                    }
                }
                getCurrencyNameByCode(e) {
                    switch (parseInt(e, 10)) {
                    case this.RUB.code:
                        return "money-movements.rub";
                    case this.BYN.code:
                        return "\u0411\u0435\u043b\u043e\u0440\u0443\u0441\u0441\u043a\u0438\u0439 \u0440\u0443\u0431\u043b\u044c";
                    case this.KZT.code:
                        return "\u041a\u0430\u0437\u0430\u0445\u0441\u0442\u0430\u043d\u0441\u043a\u0438\u0439 \u0442\u0435\u043d\u0433\u0435";
                    case this.KGS.code:
                        return "\u041a\u0438\u0440\u0433\u0438\u0437\u0441\u043a\u0438\u0439 \u0441\u043e\u043c";
                    case this.AMD.code:
                        return "\u0410\u0440\u043c\u044f\u043d\u0441\u043a\u0438\u0439 \u0434\u0440\u0430\u043c";
                    case this.PLN.code:
                        return "Z\u0142oty"
                    }
                }
            }
            return e.\u0275fac = function(t) {
                return new (t || e)
            }
            ,
            e.\u0275prov = o.Sb({
                token: e,
                factory: e.\u0275fac
            }),
            e
        }
        )()
          , Mn = ( () => {
            class e {
            }
            return e.\u0275mod = o.Ub({
                type: e,
                bootstrap: [ye]
            }),
            e.\u0275inj = o.Tb({
                factory: function(t) {
                    return new (t || e)
                },
                providers: [D.a, {
                    provide: o.d,
                    useFactory: De,
                    deps: [D.a],
                    multi: !0
                }, H.a, V.a, N.a, Be, i.e, fn, {
                    provide: o.d,
                    useFactory: Ae,
                    deps: [fn],
                    multi: !0
                }, {
                    provide: h.a,
                    useValue: Ye.a
                }, {
                    provide: o.d,
                    useFactory: qe,
                    deps: [Be],
                    multi: !0
                }, {
                    provide: o.d,
                    useFactory: We,
                    deps: [H.a, V.a],
                    multi: !0
                }, {
                    provide: o.d,
                    useFactory: Ue,
                    deps: [N.a, H.a, V.a],
                    multi: !0
                }, rn.a, _n.a, ln.a, sn.a, mn.a, wn.a, cn, vn, kn.a, an, xn, Ne.a, oe.a, bn.a, W.a, un.a, Kt, pe],
                imports: [[a.a, l.b, c.d, X, Ze.a, s.k, i.c, on, s.u, tn.a, gt.a, ot.a, d.b.forRoot({
                    loader: {
                        provide: d.a,
                        useFactory: Ge,
                        deps: [c.c]
                    }
                }), u.a.register("ngsw-worker.js", {
                    enabled: r.a.production
                }), p.d, C.d, g.b, f.b, b.e, m.b, v.b, h.c, k.c, w.b, _.c, x.b, M.b, y.b, S.a, O.b, L.b, P.c, Gt, yt, Yt.SupportModule, zt, z.d, nn.a, Je.AcceptanceModule, Ke.CouriersModule, qt, Ft, en]]
            }),
            e
        }
        )();
        r.a.production && Object(o.T)(),
        a.d().bootstrapModule(Mn).catch(e => console.error(e))
    },
    zXOW: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return c
        }
        ));
        var o = n("FwiY")
          , r = n("ofXK")
          , i = n("fXoL");
        let c = ( () => {
            class e {
            }
            return e.\u0275mod = i.Ub({
                type: e
            }),
            e.\u0275inj = i.Tb({
                factory: function(t) {
                    return new (t || e)
                },
                providers: [],
                imports: [[r.c, o.c]]
            }),
            e
        }
        )()
    },
    zeWv: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return a
        }
        ));
        var o = n("AytR");
        const r = e => ({
            barcode: e.barcode,
            brandName: e.brandName,
            locationId: e.locationId,
            imgUrls: e.imgUrls,
            shkId: e.shkId,
            stickerId: e.stickerId,
            docTypeId: e.docTypeId,
            rid: e.rid,
            srid: e.srid,
            locationName: e.locationName,
            clientName: e.clientName,
            name: e.name,
            size: e.size,
            contents: e.contents,
            description: e.description,
            price: e.price,
            siteUrl: e.siteUrl,
            rStatus: e.rStatus,
            locationTypeId: e.locationTypeId,
            shkType: e.shkType,
            statusId: e.statusId,
            safePackId: e.safePackId,
            officeId: e.officeId,
            article: e.article,
            comment: e.comment,
            userName: e.userName,
            isSupplierReturn: e.isSupplierReturn
        });
        var i = n("UD+q")
          , c = n("fXoL")
          , s = n("tk/3");
        let a = ( () => {
            class e {
                constructor(e) {
                    this.http = e
                }
                getByLocation(e, t) {
                    return this.http.get(`${o.a.urls.baseUrl}/api/storage/on-place?locationId=${e}&locationType=${t}`)
                }
                getForReturn() {
                    return this.http.get(o.a.urls.baseUrl + "/api/items/return")
                }
                getForSort() {
                    return this.http.get(o.a.urls.baseUrl + "/api/items/sort")
                }
                getForUtilization() {
                    return this.http.get(o.a.urls.baseUrl + "/api/items/for-util").pipe(Object(i.b)(r))
                }
                postItemsForUtilization(e) {
                    return this.http.post(o.a.urls.baseUrl + "/api/items/utilize", e)
                }
                search(e) {
                    return this.http.get(`${o.a.urls.baseUrl}/api/items/search?input=${encodeURIComponent(e)}`)
                }
                createActByShk(e, t) {
                    return this.http.post(`${o.a.urls.baseUrl}/api/items/createActByShk?shkId=${e}&reasonId=${t}`, null)
                }
                getCells(e) {
                    return this.http.get(`${o.a.urls.baseUrl}/api/places/getwbcells?count=${e}`)
                }
                getPlaces(e) {
                    return this.http.get(`${o.a.urls.baseUrl}/api/places/getplaces?count=${e}`)
                }
                generateBoxes(e) {
                    return this.http.get(`${o.a.urls.baseUrl}/api/boxes/generate?count=${e}`)
                }
            }
            return e.\u0275fac = function(t) {
                return new (t || e)(c.gc(s.c))
            }
            ,
            e.\u0275prov = c.Sb({
                token: e,
                factory: e.\u0275fac,
                providedIn: "root"
            }),
            e
        }
        )()
    }
}, [[0, 1, 10]]]);

