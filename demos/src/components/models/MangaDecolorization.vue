<template>
    <div class="demo">
        <manga
                hasWebGL="hasWebGL"
                :modelFilePath="modelFilePath"
                :modelSelectList="modelSelectList"
                :modelLabel="去色模型列表"
                :imageURLSelectList="imageURLSelectList"
                :srcMaxWidth="256"
                :srcMaxHeight="256"
                :patchSize="256"
                :patchStride="256"
                :downsamplingRatio="0.8"
        ></manga>
    </div>
</template>

<script>

    import Manga from '../common/Manga'
    import {IMAGE_URLS_COLOR} from '../../data/sample-image-urls'

    export default {
        props: ['hasWebGL'],

        data() {
            const modelFilePath = '/demos/data/manga_decolorization/'
            const modelSelectList = [
                {text: 'basic(7.9MB)', value: 'sr'},

            ]
            return {
                modelFilePath: modelFilePath,
                modelSelectList: modelSelectList,
                imageURLSelectList: IMAGE_URLS_COLOR,
            }
        },

        components: {Manga}


    }
</script>

<style scoped lang="postcss">

</style>




