<template>
    <v-dialog v-model="show" max-width="600px">
        <v-card>
            <v-card-title>
                <div class="info-panel-title">More Information</div>
            </v-card-title>
            <v-card-text>

                <div class="info-panel-text" v-if="currentView === 'manga-decolorization'">
                    <p>This demonstrates several CNN models for manga-colorzation. They are adapted from GitHub repo <a
                            target="_blank" rel="noopener noreferrer"
                            href="https://github.com/MingwangLin/cyclegan-keras">MingwangLin/CycleGAN-keras</a>. See the
                        corresponding <a target="_blank" rel="noopener noreferrer"
                                         href="https://github.com/MingwangLin/cyclegan-keras/blob/master/CycleGAN-keras.ipynb">Jupyter
                            notebook</a> preparing the models for Keras.js.</p>
                    <p>All computation performed entirely in your browser. Images are not uploaded to any servers.</p>
                </div>
                <div class="info-panel-text" v-else-if="currentView === 'manga-colorization'">
                    <p>This demonstrates several CNN models for manga-decolorzation. They are adapted from GitHub repo <a
                            target="_blank" rel="noopener noreferrer"
                            href="https://github.com/MingwangLin/cyclegan-keras">MingwangLin/CycleGAN-keras</a>. See the
                        corresponding <a target="_blank" rel="noopener noreferrer"
                                         href="https://github.com/MingwangLin/cyclegan-keras/blob/master/CycleGAN-keras.ipynb">Jupyter
                            notebook</a> preparing the models for Keras.js.</p>
                    <p>All computation performed entirely in your browser. Images are not uploaded to any servers.</p>
                </div>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" flat @click.stop="show = false">Close</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
    export default {
        props: {
            showInfoPanel: {type: Boolean, default: false},
            currentView: {type: String},
            close: {type: Function}
        },
        data() {
            return {
                show: false
            }
        },
        watch: {
            showInfoPanel(newVal) {
                this.show = newVal
            },
            show(newVal) {
                if (!newVal) this.close()
            }
        }
    }
</script>

<style scoped lang="postcss">
    @import '../variables.css';

    .info-panel-title {
        margin-top: 10px;
        font-size: 14px;
        font-weight: 600;
        color: var(--color-lightgray);
    }

    .info-panel-text {
        font-size: 14px;
        color: var(--color-darkgray);

    &
    a {
        color: var(--color-green);
        transition: color 0.2s ease-in;

    &
    :hover {
        color: var(--color-green-light);
    }

    }
    }
</style>
