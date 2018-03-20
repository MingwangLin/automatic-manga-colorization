<template>
    <v-dialog v-model="show" max-width="600px">
        <v-card>
            <v-card-title>
                <div class="info-panel-title">More Information</div>
            </v-card-title>
            <v-card-text>

                <div class="info-panel-text" v-if="currentView === 'manga-decolorization'">
                    <p>上色工作对电脑配置的要求较高，所以配置较差的电脑运行速度会进一步降低.
                    为了保证Demo的可用性，建议大家在较新的Firefox或Chrome桌面端浏览.由于一些兼容性问题，移动端设备端目前暂不可用.</p>
                    <p>上色模型训练自<a
                            target="_blank" rel="noopener noreferrer"
                            href="https://github.com/MingwangLin/cyclegan-keras">MingwangLin/CycleGAN-keras</a>. See the
                        corresponding <a target="_blank" rel="noopener noreferrer"
                                         href="https://github.com/MingwangLin/cyclegan-keras/blob/master/CycleGAN-keras.ipynb">Jupyter
                            notebook</a> preparing the models for Keras.js.</p>
                    <p>所有的上色运算都在本地浏览器完成，不会有任何的图像上传情况.</p>
                </div>
                <div class="info-panel-text" v-else-if="currentView === 'manga-colorization'">
                <p>上色工作对电脑配置的要求较高，所以配置较差的电脑运行速度会进一步降低.
                    为了保证Demo的可用性，建议大家在较新的Firefox或Chrome桌面端浏览.由于一些兼容性问题，移动端设备端目前暂不可用.</p>
                    <p>上色模型训练自<a
                            target="_blank" rel="noopener noreferrer"
                            href="https://github.com/MingwangLin/cyclegan-keras">MingwangLin/CycleGAN-keras</a>. See the
                        corresponding <a target="_blank" rel="noopener noreferrer"
                                         href="https://github.com/MingwangLin/cyclegan-keras/blob/master/CycleGAN-keras.ipynb">Jupyter
                            notebook</a> preparing the models for Keras.js.</p>
                    <p>上色模型训练自
                        <a
                                target="_blank" rel="noopener noreferrer"
                                href="https://github.com/MingwangLin/cyclegan-keras">MingwangLin/CycleGAN-keras</a>。</p>
                    <p>所有的上色运算都在本地浏览器完成，不会有任何的图像上传情况.</p>
                </div>
                <div class="info-panel-text" v-else-if="currentView === 'manga-colorization-big'">
                    <p>随着图像输出的增大，上色工作对电脑配置的要求也更高，所以配置较差的电脑运行速度会进一步降低。
                    为了保证Demo的可用性，建议大家在较新的Firefox或Chrome桌面端浏览。由于一些兼容性问题，移动端设备端目前暂不可用.</p>
                    <p>上色模型训练自<a
                            target="_blank" rel="noopener noreferrer"
                            href="https://github.com/MingwangLin/cyclegan-keras">MingwangLin/CycleGAN-keras</a>.</p>
                    <p>所有的上色运算都在本地浏览器完成，不会有任何的图像上传情况.</p>
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
