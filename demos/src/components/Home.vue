<template>
    <div class="demo home text-xs-center">
        <div v-for="info in demoInfo" :key="info.path" style="width:100%">
            <a :href="`#/${info.path}`">
                <div class="demo-card">
                    <div class="demo-card-image"><img :src="info.imagePath"/></div>
                    <div class="demo-card-heading">{{ info.title }}</div>
                </div>
            </a>
        </div>
    </div>
</template>

<script>
    const DEMO_INFO = [
        {
            title: '黑白漫画上色 (小图)',
            path: 'manga-colorization',
            imagePath: 'demos/assets/manga-colorization.png'
        },

        {
            title: '黑白漫画上色 (大图)',
            path: 'manga-colorization-big',
            imagePath: 'demos/assets/manga-colorization-big.png'
        },

        {
            title: '彩色漫画去色 (小图)',
            path: 'manga-decolorization',
            imagePath: 'demos/assets/manga-decolorization.png'
        }
    ]

    export default {
        data: function () {
            return {demoInfo: DEMO_INFO}
        }
    }
</script>

<style scoped lang="postcss">
    @import '../variables.css';

    .demo-card {
        font-family: var(--font-sans-serif);
        width: 100%;
        max-width: 1000px;
        height: 135px;
        margin: 30px auto;
        background: white;
        border: 1px solid whitesmoke;
        cursor: default;
        user-select: none;
        display: inline-flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        overflow: hidden;
        box-shadow: 3px 3px #cccccc;
        transition: box-shadow 0.2s ease-out;

    &
    :first-child {
        margin-top: 0;
    }

    &
    :hover {
        box-shadow: 3px 3px 5px var(--color-green-light);
        cursor: pointer;

    &
    .demo-card-heading {
        color: var(--color-green);
    }

    }
    }

    .demo-card-heading {
        flex: 1;
        padding: 20px;
        text-align: center;
        color: var(--color-lightgray);
        font-size: 27px;
        transition: color 0.2s ease-out;
    }

    .demo-card-image {
        height: 135px;

    &
    img {
        width: 165px;
        height: 100%;
    }

    }
</style>
