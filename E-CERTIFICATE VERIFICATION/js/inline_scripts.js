
//<![CDATA[
var theForm = document.forms['frmMain'];
if (!theForm) {
    theForm = document.frmMain;
}
function __doPostBack(eventTarget, eventArgument) {
    if (!theForm.onsubmit || (theForm.onsubmit() != false)) {
        theForm.__EVENTTARGET.value = eventTarget;
        theForm.__EVENTARGUMENT.value = eventArgument;
        theForm.submit();
    }
}
//]]>



//<![CDATA[
Sys.WebForms.PageRequestManager._initialize('ctl00$ctl12', 'frmMain', [], [], [], 90, 'ctl00');
//]]>



        AddToolTip("#" + "cphBody_txtCertificateNo", "Please enter e-Certificate number.");
        AddToolTip("#" + "cphBody_btnGo", "Click to validate e-Certificate Number.");
        function OnGoClick() {
            CheckMandatory("");
            if (HasError()) {
                ShowBanner(bannerError);
                return false;
            }
            return true;
        }

        function isNumberAllowed(event) {
            var charCode = (event.which) ? event.which : event.keyCode
            if (charCode > 31 && (charCode < 48 || charCode > 57))
                return false;

            return true;
        }
    


//<![CDATA[
OnEachCallBack();//]]>


new Sys.WebForms.Menu({ element: 'mnuMain', disappearAfter: 1000, orientation: 'horizontal', tabIndex: 0, disabled: false });


//<![CDATA[
Sys.Application.add_init(function() {
    $create(Sys.UI._UpdateProgress, {"associatedUpdatePanelId":null,"displayAfter":500,"dynamicLayout":true}, null, null, $get("upLoading"));
});
//]]>



    document.onkeypress = function (event) {

        event = (event || window.event);

        if (event.keyCode == 123) {

            return false;

        }

    }

    document.onmousedown = function (event) {

        event = (event || window.event);

        if (event.keyCode == 123) {

            return false;

        }

    }

    document.onkeydown = function (event) {

        event = (event || window.event);

        if (event.keyCode == 123) {

            return false;

        }

    }

    window.oncontextmenu = function () {

        return false;

    }

    $(document).keydown(function (event) {

        if (event.keyCode == 123) {

            return false;

        }

        else if ((event.ctrlKey && event.shiftKey && event.keyCode == 73) || (event.ctrlKey && event.shiftKey && event.keyCode == 74)

            || (event.ctrlKey && event.shiftKey && event.keyCode == 67)) {

            return false;

        }

    });
    


    $("body").fadeIn(500);
