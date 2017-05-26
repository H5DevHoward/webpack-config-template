<template>
<div class="information">
    <el-col :span="8">
        <el-card :body-style="{ padding: '0px' }">
            <img src="assets/img/backup.png" class="image">
        </el-card>
    </el-col>


    <el-form ref="form" :model="todoUser" label-width="80px">
        <el-row type="flex" align="middle" justify="space-between">
            <el-col :span="8">
                <el-form-item label="姓名">
                    <el-input :disabled="!value" v-model="todoUser.name"></el-input>
                </el-form-item>
            </el-col>

            <el-col :span="8">
                <el-radio :disabled="!value" v-model="todoUser.sex" label="male">男</el-radio>
                <el-radio :disabled="!value" v-model="todoUser.sex" label="female">女</el-radio>
            </el-col>

            <el-col :span="8">
                <el-form-item label="年龄">
                    <el-input :disabled="!value" v-model="todoUser.age"></el-input>
                </el-form-item>
            </el-col>
        </el-row>

        <el-row type="flex" align="middle">
            <el-col :span="12">
                <div class="block">
                    <span class="demonstration">职位</span>
                    <el-cascader :disabled="!value" expand-trigger="hover" :options="options" v-model="todoUser.department" @change="handleChange">
                    </el-cascader>
                </div>
            </el-col>
            <el-col :span="12" v-if="todoUser.isAdmin">
                <span class="demonstration">修改信息</span>
                <el-switch v-model="value" on-text="" off-text="">
                </el-switch>
            </el-col>
        </el-row>
    </el-form>
</div>
</template>

<script>
import {
    mapGetters,
} from 'vuex';

export default {
    data() {
        return {
            value: false,
            options: [{
                value: 'develop',
                label: '研发部',
                children: [{
                    value: 'web',
                    label: '前端开发工程师',
                }, {
                    value: 'ui',
                    label: '设计师',
                }],
            }, {
                value: 'sale',
                label: '销售部',
                children: [{
                    value: 'sss',
                    label: '销售',
                }],
            }, {
                value: 'operate',
                label: '运维部',
                children: [{
                    value: 'ooo',
                    label: '运维',
                }],
            }],
        };
    },
    computed: mapGetters([
        'todoUser',
    ]),
    methods: {
        onSubmit() {
            console.log('submit!');
        },
        handleChange(value) {
            console.log(value);
        },
    },
};
</script>

<style lang="scss" scoped>
.el-form {
    text-align: center;
}

.el-form-item {
    margin: 11px 0;
}

.bottom {
    margin-top: 13px;
    line-height: 12px;
}

.button {
    padding: 0;
    float: right;
}

.image {
    width: 100%;
    display: block;
}
.clearfix:after,
.clearfix:before {
    display: table;
    content: "";
}
.clearfix:after {
    clear: both;
}
</style>
