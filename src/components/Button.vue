<template>
    <div class="button">
        <div class="cta">

            <span><slot></slot></span>
            <svg width="13px" height="10px" viewBox="0 0 13 10">
                <path d="M1,5 L11,5"></path>
                <polyline points="8 1 12 5 8 9"></polyline>
            </svg>
        </div>
    </div>

</template>

<script>
export default {
    name: "Button",

}
</script>

<style lang="scss">
.button {
    display: grid;
    color: var(--Gray);

    a {
        color: var(--Gray);
        text-decoration: none;
        color: inherit;
        font-family: var(--Bold);
    }
}

.cta {
    position: relative;
    margin: auto;
    line-height: 45px;
    padding: 0 20px;
    transition: all .2s ease;

    &:before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        display: block;
        border-radius: 28px;
        border: 3px solid rgba(#077132, .5);
        width: 45px;
        height: 45px;
        transition: all .3s ease;
    }

    span {
        position: relative;
        font-size: 16px;
        line-height: 18px;
        letter-spacing: .25em;
        text-transform: uppercase;
        vertical-align: middle;
    }

    svg {
        position: relative;
        top: 0;
        margin-left: 10px;
        fill: none;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke: var(--Green);
        stroke-width: 2;
        transform: translateX(-5px);
        transition: all .3s ease;
    }

    &:hover {
    &:before {
        width: 100%;
        border: 3px solid rgba(#077132, .5);
    }

    svg {
        transform: translateX(0);
    }
    }

    &:active {
        transform: scale(.96);

    }
}

</style>