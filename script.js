document.addEventListener(
    "DOMContentLoaded",
    function () {

        const header =
            document.getElementById(
                "statusHeader"
            );

        const intro =
            document.querySelector(
                ".status-intro"
            );

        const menuButton =
            document.getElementById(
                "statusMenuToggle"
            );

        const mobileMenu =
            document.getElementById(
                "statusMobileMenu"
            );

        const mobileClose =
            document.getElementById(
                "statusMobileClose"
            );

        function updateHeader() {

            if (
                !header ||
                !intro
            ) {
                return;
            }

            const introTop =
                intro
                    .getBoundingClientRect()
                    .top;

            const trigger =
                window.innerWidth <= 767
                    ? 66
                    : 72;

            if (
                introTop <= trigger
            ) {
                header
                    .classList
                    .add(
                        "is-content"
                    );
            } else {
                header
                    .classList
                    .remove(
                        "is-content"
                    );
            }

        }

        function setMenuState(open) {

            if (
                !header ||
                !menuButton ||
                !mobileMenu
            ) {
                return;
            }

            mobileMenu
                .classList
                .toggle(
                    "is-open",
                    open
                );

            header
                .classList
                .toggle(
                    "is-menu-open",
                    open
                );

            menuButton
                .setAttribute(
                    "aria-expanded",
                    open
                );

            mobileMenu
                .setAttribute(
                    "aria-hidden",
                    !open
                );

            document
                .body
                .style
                .overflow =
                    open
                        ? "hidden"
                        : "";

        }

        updateHeader();

        window.addEventListener(
            "scroll",
            updateHeader,
            {
                passive: true
            }
        );

        window.addEventListener(
            "resize",
            updateHeader
        );

        if (
            menuButton &&
            mobileMenu
        ) {

            menuButton.addEventListener(
                "click",
                function () {
                    setMenuState(true);
                }
            );

            if (mobileClose) {
                mobileClose.addEventListener(
                    "click",
                    function () {
                        setMenuState(false);
                    }
                );
            }

            mobileMenu
                .querySelectorAll(
                    "a"
                )
                .forEach(
                    function (link) {
                        link.addEventListener(
                            "click",
                            function () {
                                setMenuState(false);
                            }
                        );
                    }
                );

            document.addEventListener(
                "keydown",
                function (event) {

                    if (
                        event.key === "Escape" &&
                        mobileMenu
                            .classList
                            .contains(
                                "is-open"
                            )
                    ) {
                        setMenuState(false);
                    }

                }
            );

        }

    }
);
