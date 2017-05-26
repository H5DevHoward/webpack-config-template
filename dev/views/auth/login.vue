<template>
    <div class="Login">
        <el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
            <el-form-item label="用户名" prop="username">
                <el-input v-model="ruleForm2.username"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="pass">
                <el-input type="password" v-model="ruleForm2.pass" auto-complete="off"></el-input>
            </el-form-item>
            <!-- <el-form-item label="确认密码" prop="checkPass">
                <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off"></el-input>
            </el-form-item> -->
            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
                <el-button @click="resetForm('ruleForm2')">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
import _ from 'lodash';
import authService from '@/services/authService';

export default {
    data() {
        const validateName = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请输入用户名'));
            } else {
                callback();
            }
        };
        const validatePass = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请输入密码'));
            } else {
                if (this.ruleForm2.checkPass !== '') {
                    this.$refs.ruleForm2.validateField('checkPass');
                }
                callback();
            }
        };
        const validatePass2 = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请再次输入密码'));
            } else if (value !== this.ruleForm2.pass) {
                callback(new Error('两次输入密码不一致!'));
            } else {
                callback();
            }
        };

        return {
            ruleForm2: {
                pass: '',
                checkPass: '',
                username: '',
            },
            rules2: {
                pass: [{
                    validator: validatePass,
                    trigger: 'blur',
                }],
                checkPass: [{
                    validator: validatePass2,
                    trigger: 'blur',
                }],
                username: [{
                    validator: validateName,
                    trigger: 'blur',
                }],
            },
        };
    },
    methods: {
        submitForm(formName) {
            this.$refs[formName].validate(valid => {
                if (valid) {
                    authService
                        .login({
                            username: this.ruleForm2.username,
                            password: this.ruleForm2.pass,
                        })
                        .then(userData => {
                            // if (userData) {
                            //     this.$store.dispatch('login', userData);
                            //     this.$router.replace('/home/index');
                            // } else {
                            //     this.$router.replace('/');
                            // }

                            this.$alert(`${!userData ? '登录失败' : '登陆成功'}`, '登录提示', {
                                confirmButtonText: '确定',
                                callback: action => {
                                    if (!userData) {
                                        this.$router.replace('/');
                                    } else {
                                        this.$store.dispatch('login', userData);
                                        this.$router.push('/home/index');
                                    }
                                },
                            });
                        });
                }
            });
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        },
    },
};
</script>

<style lang="scss">
.Login {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 400px;
    height: 400px;
    border: 2px solid #20a0ff;
    border-radius: 5px;
    overflow: hidden;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    margin: auto;
}

.el-form-item__label {
    text-align: left;
}
</style>
