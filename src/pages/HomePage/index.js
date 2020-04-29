import React, { Component } from 'react';
import echarts from 'echarts/lib/echarts';
import moment from 'moment';
import styles from '../../styles/css/homePage.css'
import { Card, Col, Row, DatePicker, Icon, Select } from 'antd';
import TitleComp from '../../components/titleComp';
import 'moment/locale/zh-cn';

import "echarts/lib/chart/bar";
import "echarts/lib/component/legend";
import "echarts/lib/component/grid";

import image1 from "../../styles/images/1.png";
import image2 from "../../styles/images/2.png";
import image3 from "../../styles/images/3.png";
import image4 from "../../styles/images/4.png";
import image5 from "../../styles/images/5.png";
import image6 from "../../styles/images/6.png";

moment.locale('zh-cn');

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataOverView: [{ image: image1, sum: 1000, id: 'image1' }, { image: image2, sum: 2000, id: 'image2' }, { image: image3, sum: 3000, id: 'image3' }, { image: image4, sum: 4000, id: 'image4' }, { image: image5, sum: 5000, id: 'image5' }, { image: image6, sum: 6000, id: 'image6' }]
    };
  }
  getEchartsConfig_2 = () => {
    const option = {
      grid: [
        {
          top: 10,
          left: 5,
          bottom: 0,
          width: '45%',
          containLabel: true
        },
        {
          top: 10,
          left: '50%',
          bottom: 0,
          width: '45%',
          containLabel: true
        },
      ],
      tooltip: {
        formatter: '{b} ({c})'
      },
      xAxis: [{
        gridIndex: 0,
        type: 'value',
        max: 100,
        axisTick: {
          show: false
        },
        axisLabel: {
          show: false
        },
        splitLine: {
          show: false
        },
        axisLine: {
          show: false
        }
      },
      {
        gridIndex: 1,
        type: 'value',
        max: 100,
        axisTick: {
          show: false
        },
        axisLabel: {
          show: false
        },
        splitLine: {
          show: false
        },
        axisLine: {
          show: false
        }
      },
      ],
      yAxis: [{
        gridIndex: 0,
        interval: 0,
        data: ['1号', '2号', '3号', '4号', '5号', '6号', '7号', '8号'],
        axisTick: {
          show: false
        },
        axisLabel: {
          show: true
        },
        splitLine: {
          show: false
        },
        axisLine: {
          show: false,
        },
      }, {
        gridIndex: 1,
        interval: 0,
        data: ['9号', '10号', '11号', '12号', '13号', '14号', '15号', '16号'],
        axisTick: {
          show: false
        },
        axisLabel: {
          show: true
        },
        splitLine: {
          show: false
        },
        axisLine: {
          show: false,
        },
      }],
      series: [
        {
          name: '',
          type: 'bar',
          xAxisIndex: 0,
          yAxisIndex: 0,
          barWidth: '45%',
          itemStyle: {
            normal: {
              color: '#86c9f4'
            }
          },
          label: {
            normal: {
              show: true,
              position: "right",
              textStyle: {
                color: "#9EA7C4"
              }
            }
          },
          data: [10, 50, 80, 60, 70, 95, 100, 95],
        }, {
          name: '',
          type: 'bar',
          xAxisIndex: 1,
          yAxisIndex: 1,
          barWidth: '45%',
          itemStyle: {
            normal: {
              color: '#86c9f4'
            }
          },
          label: {
            normal: {
              show: true,
              position: "right",
              textStyle: {
                color: "#9EA7C4"
              }
            }
          },
          data: [10, 50, 80, 60, 70, 95, 100, 95],
        },
      ]
    }
    return option;
  }
  getEchartsConfig_1 = () => {
    let option = {
      grid: {
        top: '8%',
        left: '1%',
        right: '1%',
        bottom: '15%',
        containLabel: false,
      },
      xAxis: [
        {
          type: 'category',
          data: ['水份', '油份', '敏感', '痘痘', '皮脂', '毛孔', '色素色斑', '细纹'],
          axisTick: {
            show: false,
            alignWithLabel: true
          },
          axisLabel: {
            interval: 0,
            // showMaxLabel: true,
            // showMinLabel: true,
          },
          axisLine: {
            show: true
          },
          splitLine: {
            show: false
          }
        }
      ],
      yAxis: [
        {
          type: 'value',
          max: 100,
          axisTick: {
            show: false,
          },
          splitLine: {
            show: false
          },
          axisLine: {
            show: false
          },
          axisLabel: {
            show: false
          },
        }
      ],
      series: [
        {
          name: '',
          type: 'bar',
          barWidth: '30%',
          label: {
            normal: {
              show: true,
              position: "top",
              textStyle: {
                color: "#9EA7C4"
              }
            }
          },
          data: [100, 85, 100, 75, 100, 10, 95, 85]
        }
      ]
    };
    return option;
  }

  drawEcharts = () => {
    let echartInstance_1 = echarts.init(this.saleChart_1);
    let echartInstance_2 = echarts.init(this.saleChart_2);
    let option_1 = this.getEchartsConfig_1();
    let option_2 = this.getEchartsConfig_2();
    echartInstance_1.setOption(option_1);
    echartInstance_2.setOption(option_2);
  }

  componentDidMount = () => {
    this.drawEcharts();
  }
  handleChange = (value) => {
    console.log(`selected ${value}`);
  }

  render() {
    let { RangePicker } = DatePicker;
    let { Option } = Select;
    let { dataOverView } = this.state;
    let overViewList = [];
    if (dataOverView.length > 0) {
      overViewList = dataOverView.map(x => {
        return (
          <div className="clear_f flex p_outside border_e0e0e0 m_l_30" key={x.id}>
            <img className={[`${styles.icon}`, `${styles.f_left}`].join(' ')} alt="" src={x.image}></img>
            <div className={[`${styles.f_left}`, 'm_l_10'].join(' ')}>
              <p>检测人数</p>
              <p>{x.sum}</p>
            </div>
          </div>
        );
      })
    }
    return (
      <React.Fragment>
        <TitleComp title="首页概况" btnTxt="" />
        <div className="block_container">
          <div className="home_p_24 m_b_15">
            <label>时间：
            <RangePicker
                allowClear={false}
                style={{ width: 240 }}
              />
            </label>
            <label className="m_l_10">
              门店：
            <Select defaultValue="lucy" style={{ width: 200 }} onChange={this.handleChange}>
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="yiminghe">yiminghe</Option>
              </Select>
            </label>
          </div>
          <div className="b_g_f0f2f5">
            <Card title="数据总览">
              <div className="d_flex">
                {overViewList}
              </div>
            </Card>
            <Card title="产品销售情况" className="m_t_30">

              <Row>
                <Col span={9}>
                  <Card title="超导焕肤销量情况" bordered={false} headStyle={{ border: 0, fontSize: 14 }} bodyStyle={{ padding: '0 0 24px 24px' }}>
                    <div className={styles.sale_chart} ref={(ref) => this.saleChart_1 = ref}></div>
                  </Card>
                </Col>
                <Col span={15}>
                  <Card title="处方化精华销量情况" bordered={false} headStyle={{ border: 0, fontSize: 14 }} bodyStyle={{ padding: '0 0 24px 24px' }}>
                    <Row>
                      <div className={styles.sale_chart} ref={(ref) => this.saleChart_2 = ref}></div>
                    </Row>
                  </Card>
                </Col>
              </Row>
            </Card>
          </div>
        </div>
      </React.Fragment>
    )
  }
}
export default HomePage;