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

                    const open =
                        mobileMenu
                            .classList
                            .toggle(
                                "is-open"
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
            );

            mobileMenu
                .querySelectorAll(
                    "a"
                )
                .forEach(
                    function (link) {

                        link.addEventListener(
                            "click",
                            function () {

                                mobileMenu
                                    .classList
                                    .remove(
                                        "is-open"
                                    );

                                menuButton
                                    .setAttribute(
                                        "aria-expanded",
                                        "false"
                                    );

                                mobileMenu
                                    .setAttribute(
                                        "aria-hidden",
                                        "true"
                                    );

                                document
                                    .body
                                    .style
                                    .overflow =
                                        "";

                            }
                        );

                    }
                );

        }

    }
);
