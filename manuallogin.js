define(["exports", "./../modules/viewmanager/baseview.js", "./../modules/loading/loading.js", "./../modules/common/globalize.js", "./../modules/emby-elements/emby-input/emby-input.js", "./../modules/emby-elements/emby-button/emby-button.js", "./../modules/emby-elements/emby-checkbox/emby-checkbox.js", "./../modules/emby-elements/emby-select/emby-select.js", "./../modules/emby-elements/emby-scroller/emby-scroller.js", "./../modules/emby-apiclient/connectionmanager.js", "./../modules/approuter.js", "./../modules/focusmanager.js", "./../modules/common/appsettings.js", "./../modules/common/servicelocator.js", "./startuphelper.js"], function(_exports, _baseview, _loading, _globalize, _embyInput, _embyButton, _embyCheckbox, _embySelect, _embyScroller, _connectionmanager, _approuter, _focusmanager, _appsettings, _servicelocator, _startuphelper) {
    function View(view, params) {
        _baseview.default.apply(this, arguments),
        view.querySelector(".buttonCancel").addEventListener("click", function(e) {
            _approuter.default.back()
        }),
        view.querySelector(".btnForgotPassword").addEventListener("click", function(e) {
            _approuter.default.showItem({
                Type: "ForgotPassword",
                ServerId: params.serverId
            })
        }),
        view.querySelector(".btnSelectServer").addEventListener("click", function(e) {
            _approuter.default.showSelectServer()
        }),
        view.querySelector("form").addEventListener("submit", function(e) {
            var username = this.querySelector(".txtUserName").value
              , password = this.querySelector(".txtPassword").value
              , serverId = (_loading.default.show(),
            params.serverId);
            return _appsettings.default.enableAutoLogin(view.querySelector(".chkRememberLogin").checked),
            _startuphelper.default.authenticateUser(serverId, username, password),
            e.preventDefault(),
            !1
        }),
        _servicelocator.appHost.supports("multiserver") && view.querySelector(".btnSelectServer").classList.remove("hide"),
        function(view, apiClient) {
            _servicelocator.appHost.supports("multiserver") || apiClient.getJSON(apiClient.getUrl("Branding/Configuration")).then(function(options) {
                var elem = view.querySelector(".disclaimer");
                options.LoginDisclaimer && elem.classList.remove("hide"),
                elem.textContent = options.LoginDisclaimer || ""
            })
        }(view, _connectionmanager.default.getApiClient(params.serverId));

        var registerLink = document.createElement("span");
        registerLink.textContent = "没有账号？点击注册";
        registerLink.style.cursor = "pointer";
        registerLink.classList.add("registerLink");
        view.querySelector(".form").appendChild(registerLink);

        registerLink.addEventListener("click", function(e) {
            window.location.href = "https://accounts.0m.ee/invite/t9aM29oouM2N6dxeZwFCaW";
        });
    }

    Object.defineProperty(_exports, "__esModule", {
        value: !0
    }),
    _exports.default = void 0,
    require(["material-icons"]),
    Object.assign(View.prototype, _baseview.default.prototype),
    View.prototype.onResume = function(options) {
        _baseview.default.prototype.onResume.apply(this, arguments);
        var view = this.view
          , params = this.params
          , txtUserName = (_loading.default.hide(),
        view.querySelector(".txtUserName"));
        txtUserName.value = params.user || "",
        view.querySelector(".txtPassword").value = "",
        view.querySelector(".chkRememberLogin").checked = _appsettings.default.enableAutoLogin(),
        params.user ? _focusmanager.default.focus(view.querySelector(".txtPassword")) : _focusmanager.default.focus(txtUserName)
    }
    ,
    _exports.default = View
});
