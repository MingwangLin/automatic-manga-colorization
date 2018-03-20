<template>
    <div class="model-status text-xs-center py-5 px-5 mb-3 elevation-3">
        <div class="title mx-3 primary--text">{{ message }}{{ value }}%</div>
        <div class="progress-wrapper">
            <v-progress-linear v-model="value" height="6" color="primary"></v-progress-linear>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            modelLoading: {type: Boolean, required: true},
            modelLoadingProgress: {type: Number, required: true},
            modelInitializing: {type: Boolean, required: true},
            modelInitProgress: {type: Number, required: true},
            modelRunning: {type: Boolean, required: true},
            modelRunningProgress: {type: Number, required: true}
        },

        data() {
            return {
                value: 0
            }
        },

        computed: {
            message() {
                if (this.modelLoading) {
                    return '????????...'
                } else if (this.modelInitializing) {
                    return '?????????...'
                } else if (this.modelRunning) {
                    return '???????...'
                }
                else {
                    return ''
                }
            }
        },

        watch: {
            modelLoadingProgress(newVal) {
                this.value = newVal
            },
            modelInitProgress(newVal) {
                this.value = newVal
            },
            modelRunningProgress(newVal) {
                this.value = newVal
            }
        }
    }
</script>

<style lang="postcss" scoped>
    .model-status {
        position: absolute;
        z-index: 2;
        width: 100%;
        background-color: whitesmoke;
    }

    .progress-wrapper {
        width: 100%;
        max-width: 450px;
        margin: 0 auto;
    }
</style>
