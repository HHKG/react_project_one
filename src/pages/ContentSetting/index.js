import React, { Component } from 'react';
import TabChange from '../../components/tabChange';
import TitleComp from '../../components/titleComp';
import image from '../../styles/images/targetimage.png';
import deleteIcon from '../../styles/images/close.png';
import styles from './content.css';
import { Modal, message, Upload, Table } from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';

const columns = [
  { title: '维度', dataIndex: 'category', key: 'category' },
  { title: '程度', dataIndex: 'level', key: 'level' },
  { title: '内容', dataIndex: 'content', key: 'content' },
  {
    title: '操作',
    dataIndex: '',
    key: 'x',
    render: () => <a>编辑</a>,
  },
];
const data_explain=[
  {
    key: 1,
    category: '干性',
    level: '良好',
    content: '干性皮肤是指因皮脂腺分泌的减少及皮肤屏障损伤造成经表皮失水增加而造成皮肤角质层水分低于10%的肤质。其表面肤质较轻薄，皮肤上很少长粉刺和暗疮，毛孔不明显。干性皮肤分为缺水和缺油两种情况。',
  },
  {
    key: 2,
    category: '紧皱',
    level: '良好',
    content: '面部皮肤松弛的话建议要适当的运动运动，肌肉比脂肪是要富有弹性的可以多吃富含优质蛋白和维生素C的食物如蛋类、奶类、大豆、新鲜蔬菜水果，这样可以合成胶原蛋白，从而美容护肤',
  },
  {
    key: 3,
    category: '色沉',
    level: '良好',
    content: '皮肤色素沉着按类型分有黄褐斑、妊娠斑、蝴蝶斑、老年斑、咖啡斑和雀斑，是一种常见的多发性皮肤疾病。',
  },
  {
    key: 4,
    category: '敏感',
    level: '良好',
    content: '是指人的肌肤处于无损状态，角质层长期保持水油平衡，细腻强健，能很好的抵抗外面环境的一切刺激。',
  },
  {
    key: 5,
    category: '油性',
    level: '良好',
    content: '油性皮肤是因人体皮脂腺分泌旺盛所产生的，皮肤中的皮脂腺特性由遗传因子决定。临床上根据皮肤表面脂质量的多少，可将皮肤大致分为：油性皮肤、干性皮肤、中性皮肤和混合皮肤等多种类型。',
  },
];
const data = [
  {
    key: 1,
    category: '干性',
    level: '良好',
    content: '展开查看内容',
    description: '哈哈哈哈哈哈哈哈哈一哈哈哈哈哈哈哈哈哈二哈哈哈哈哈哈哈哈哈三哈哈哈哈哈哈哈哈哈四哈哈哈哈哈哈哈哈哈五哈哈哈哈哈哈哈哈哈六哈哈哈哈哈哈哈哈哈七哈哈哈哈哈哈哈哈哈八哈哈哈哈哈fdgddddd',
  },
  {
    key: 2,
    category: '油性',
    level: '良好',
    content: '展开查看内容',
    description: 'dgaf 阿萨德发斯蒂芬斯蒂芬沙发撒sdf舒服舒服的沙发撒的双方都双方都对方的水电',
  },
  {
    key: 3,
    category: '敏感',
    level: '良好',
    content: '展开查看内容',
    description: 'dgaf 阿萨德发斯蒂芬斯蒂芬沙发撒sdf舒服舒服的沙发撒的双方都双方都对方的水电',
  },
  {
    key: 4,
    category: '色沉',
    level: '良好',
    content: '展开查看内容',
    description: 'dgaf 阿萨德发斯蒂芬斯蒂芬沙发撒sdf舒服舒服的沙发撒的双方都双方都对方的水电',
  },
  {
    key: 5,
    category: '紧皱',
    level: '良好',
    content: '展开查看内容',
    description: 'dgaf 阿萨德发斯蒂芬斯蒂芬沙发撒sdf舒服舒服的沙发撒的双方都双方都对方的水电',
  },
];

class ContentSetting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabTxt: ['知识图库', '综合说明', '程度说明'],
      knowledgeGalleryList: [{ img: '', id: 1 }, { img: '', id: 2 }, { img: '', id: 3 }, { img: '', id: 4 }, { img: '', id: 5 }, { img: '', id: 6 }, { img: '', id: 7 }, { img: '', id: 8 }, { img: '', id: 9 }, { img: '', id: 10 }, { img: '', id: 11 }, { img: '', id: 12 }, { img: '', id: 13 }, { img: '', id: 14 }, { img: '', id: 15 }, { img: '', id: 16 }, { img: '', id: 17 }],
      tabCategory: 0,
      visible: false,
      currentId: null,
      loading: false,
      imageUrl: ''
    };
  }
  selectItem = (currentIndex) => {
    this.setState({
      tabCategory: currentIndex
    })
  }
  deleteImg = (currentId) => {
    this.setState({
      currentId,
      visible: true
    })
  }
  handleOk = () => {
    this.setState({
      visible: false
    }, () => {
      let { knowledgeGalleryList, currentId } = this.state;
      knowledgeGalleryList.splice(currentId, 1);
      this.setState({
        knowledgeGalleryList
      }, () => {
        message.success('删除成功！');
      })
    })
  }
  handleCancel = () => {
    this.setState({
      visible: false
    })
    return;
  }

  getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
  }
  beforeUpload = (file) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
      message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
  }
  handleChange = info => {
    if (info.file.status === 'uploading') {
      this.setState({ loading: true });
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      this.getBase64(info.file.originFileObj, imageUrl =>
        this.setState({
          imageUrl,
          loading: false,
        }),
      );
    }
  };

  render() {
    let { tabCategory, knowledgeGalleryList } = this.state;
    let knowledgeGalleryListDom = knowledgeGalleryList.map(val => {
      return (<div className={styles.img_container} key={val.id}>
        <img src={image}></img>
        <img src={deleteIcon} onClick={this.deleteImg.bind(this, val.id)}></img>
      </div>);
    })
    const uploadButton = (
      <div>
        {this.state.loading ? <LoadingOutlined /> : <PlusOutlined />}
        <div className="ant-upload-text">Upload</div>
      </div>
    );
    const { imageUrl } = this.state;
    return (
      <React.Fragment>
        <TitleComp title="内容设置" btnTxt="" handleFn=""></TitleComp>
        <TabChange tabTxtArr={this.state.tabTxt} selectItem={this.selectItem}></TabChange>
        <div className="block_container">
          <div className="home_p_24">
            {
              tabCategory === 0 ? (
                <div className={styles.content_container}>
                  {knowledgeGalleryListDom}
                  <Upload
                    name="avatar"
                    listType="picture-card"
                    className="avatar-uploader"
                    showUploadList={false}
                    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                    beforeUpload={this.beforeUpload}
                    onChange={this.handleChange}
                  >
                    {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
                  </Upload>
                </div>
              ) : null
            }
            {
              tabCategory === 1 ? (
                <div>
                  <Table
                    columns={columns}
                    expandable={{
                      expandedRowRender: record => <p style={{ margin: 0 }}>{record.description}</p>,
                      rowExpandable: record => record.name !== 'Not Expandable',
                    }}
                    dataSource={data}
                  />
                </div>
              ) : null
            }
            {
              tabCategory === 2 ? (
                <div>
                 <Table columns={columns} dataSource={data_explain} size="middle" />
                </div>
              ) : null
            }
          </div>
        </div>
        <Modal
          title="删除提示"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <p style={{ textAlign: "center" }}>确定要删除当前图库吗？</p>
        </Modal>
      </React.Fragment>
    )
  }
}
export default ContentSetting;