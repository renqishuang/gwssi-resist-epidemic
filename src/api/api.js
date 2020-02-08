import axios from 'axios';

axios.defaults.withCredentials = true 

let base = '';

// 用户系统路径
let sysuser_api = '/sysuser_api';
//审批端接口  
export const queryApproveForm = params => { return axios.post('/report_api/api/task/queryApproveForm',params).then(res => res.data)}
//批量确认接口
export const batchApprove = params => { return axios.post('/report_api/api/task/batchApprove',params).then(res => res.data)}
//批量补报接口
export const batchReport = params => { return axios.post('/report_api/api/task/batchReport',params).then(res => res.data)}
//允许补报接口
export const ReReport = params => { return axios.post('/report_api/api/task/ReReport',params).then(res => res.data)}
//历史审核记录接口
export const queryApproveList = params => { return axios.post('/report_api/api/task/queryApproveList',params).then(res => res.data)}
// 审核意见接口
export const saveApprove = params => { return axios.post('/report_api/api/task/saveApprove',params).then(res => res.data)}
//新建任务-保存
export const saveTask = params => { return axios.post('/report_api/api/task/saveTask',params).then(res => res.data)}
//检查任务名字是否重复
export const checkTaskName = params => { return axios.post('/report_api/api/task/checkTaskName',params).then(res => res.data)}
//查询任务列表 企业端
export const queryMyTaskList = params => { return axios.post('/report_api/api/task/queryMyTaskList', params).then(res => res.data) }
//当前无任务, 获取任务
export const queryPublicTask = params => { return axios.post('/report_api/api/task/queryPublicTask',params).then(res=>res.data)}
//查询任务列表
export const queryTaskList = params => { return axios.post('/report_api/api/task/queryTaskList',params).then(res => res.data)}
//查询企业任务列表
export const queryTaskEntList = params => { return axios.post('/report_api/api/task/queryTaskEntList',params).then(res => res.data)}

//办公地址三级分类
export const list = params => { return axios.get(`/report_api/api/distric/findDistrict`, { params:params }).then(res=>res.data)};
//填报表单 基础信息添加
export const addBasic = params => { return axios.post('/report_api/api/basic/addBasic',params).then(res => res.data);};
//基础信息回显
export const getBaseInfo = params => { return axios.get('/report_api/api/basic/getBaseInfo',{params:params}).then(res=>res.data)};
//投融资信息
export const addFinance = params => { return axios.post('/report_api/api/finance/addFinance', params).then(res=>res.data)};

//报送表单列表(添加)
export const savetable = params => { return axios.post('/report_api/manage/savetable', { params:params });};
//报送表单查询
export const findform = params => { return axios.get('/report_api/api/manage/findform',{params:params}).then(res => res.data);};
//编辑表单
export const updateform = params => { return axios.post('/report_api/api/manage/updateform',params).then(res => res.data);};
//填报表单 产品信息添加
export const insertProduct = params => { return axios.post('/report_api/api/product/insertProduct',params).then(res => res.data);};
//填报表单 产品信息下拉查询
export const selectType = params => { return axios.get('/report_api/api/product/selectType',{params:params}).then(res => res.data);};

//填报指南
export const findguide = params => { return axios.get('/report_api/api/guide/findguide',{params:params}).then(res => res.data);};
//填报指南 基础信息回显
export const findguidedetails = params => { return axios.get('/report_api/api/guide/findguidedetails',{params:params}).then(res => res.data);};
//填报指南 产品信息回显
export const findproduct = params => { return axios.get('/report_api/api/guide/findproduct',{params:params}).then(res => res.data);};
//填报指南 核心竞争力回显
export const findcompetence = params => { return axios.get('/report_api/api/guide/findcompetence',{params:params}).then(res => res.data);};
//填报指南 投融资信息回显
export const findFinance = params => { return axios.get('/report_api/api/finance/findFinance',{params:params}).then(res => res.data);};

// 用户登录
export const login = params => { return axios.post(`${sysuser_api}/api/user/login`,params,{emulateJSON:true}).then(res => res.data)};
// 用户注册
export const register = params => { return axios.post(`${sysuser_api}/api/user/register`, params).then(res => res.data)};
// 忘记密码
export const forget = params => { return axios.post(`${sysuser_api}/api/user/forget`, params).then(res => res.data)};
// 修改密码
export const updatePassword = params => { return axios.post(`${sysuser_api}/api/user/updatePassword`, params).then(res => res.data)};
// 获取验证码
export const verifyCode = params => { return axios.get(`${sysuser_api}/api/user/getVerifyCode`, { params:params }).then(res => res.data)};
// 获取联系人信息
export const queryContactsInfoAndImgByUserId = params => { return axios.get(`${sysuser_api}/api/entContacts/queryContactsInfoAndImgByUserId`, { params:params }).then(res => res.data)};
//核心竞争力添加
export const insertCompetence = params => { return axios.post('/report_api/api/competence/insertCompetence',params).then(res => res.data);};

//中央 填报指南 列表显示
export const findbaseform = params => { return axios.get('/report_api/api/basic/findbaseform',{params:params}).then(res => res.data)};
//中央 填报指南 基本信息回显
export const Centerlist= params => { return axios.get('/report_api/api/guide/Centerlist',{params:params}).then(res => res.data);};
//删除指南操作任务
export const Centerdelete= params => { return axios.post('/report_api/api/guide/Centerdelete',params).then(res => res.data);};
//中央填报指南列表发布任务状态
export const Centerupdate= params => { return axios.post('/report_api/api/guide/Centerupdate',params).then(res => res.data);};
//修改指南操作基础信息任务
export const CenterupdateBasicslist = params => { return axios.post('/report_api/api/guide/CenterupdateBasicslist', params).then(res=>res.data)};
//修改指南操作产品信息任务
export const Centerupdateproductlist = params => { return axios.post('/report_api/api/guide/Centerupdateproductlist', params).then(res=>res.data)};
//修改指南操作核心竞争信息任务
export const Centerupdatecorelist = params => { return axios.post('/report_api/api/guide/Centerupdatecorelist', params).then(res=>res.data)};
//修改指南投融资信息
export const CenterupdateFinance = params => { return axios.post('/report_api/api/guide/CenterupdateFinance', params).then(res=>res.data)};
//中央填报指南产品信息回显
export const Centerproductlist= params => { return axios.get('/report_api/api/guide/Centerproductlist',{params:params}).then(res => res.data);};
//中央填报指南核心竞争力信息回显
export const Centercorelist= params => { return axios.get('/report_api/api/guide/Centercorelist',{params:params}).then(res => res.data);};
//中央填报指南投融资信息回显
export const Centerfinancelist= params => { return axios.get('/report_api/api/guide/Centerfinancelist',{params:params}).then(res => res.data);};

//填报任务->提交
export const SubmitReport = params => { return axios.post('/report_api/api/task/submitReport', params).then(res=>res.data)}
//所属行业三级分类
export const industry = params => { return axios.get('/report_api/api/industry/industry', { params:params }).then(res=>res.data)};
//重点领域三级分类
export const focusareas = params => { return axios.get(`/report_api/api/focusareas/focusareas`, { params:params }).then(res=>res.data)};

//统计分类三级分类 第三级数据
export const industrythree = params => { return axios.get(`/report_api/api/industry/industrytree`, { params:params }).then(res=>res.data)};
//重点领域三级分类 第三级数据
export const focusareasthree = params => { return axios.get(`/report_api/api/focusareas/focusareasthree`, { params:params }).then(res=>res.data)};

//企业-反馈意见-列表
export const entFeedBackList = params => { return axios.get('/report_api/api/myproblem/serectproblem',{params}).then(res=>res.data) }
//企业-反馈意见-详情
export const entFeedBackDetail = params => { return axios.get('/report_api/api/myproblem/selectdetails',{params}).then(res=>res.data)}
//企业-反馈意见-添加
export const entFeedBackAdd = params => { return axios.post('/report_api/api/myproblem/addproblem',params).then(res=>res.data)}
//网信办-反馈意见-列表
export const netCreditFeedBackList = params => { return axios.get('/report_api/api/myproblem/selectquestion',{params}).then(res=>res.data) }
//反馈意见-回复/追问
export const feedBackAddAnswer = params => { return axios.post('/report_api/api/asked/addanswer',params).then(res=>res.data) }
//反馈意见-状态更新(已解决)
export const feedBackSetState = params => { return axios.post('/report_api/api/myproblem/renewal',params).then(res=>res.data) }
