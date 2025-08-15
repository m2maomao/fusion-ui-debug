import { Button, Tab } from '@alifd/next';

function App() {

  return (
    <>
      <Button>测试</Button>
      <Tab defaultActiveKey='3' >
        <Tab.Item title="Home" key="1">
          Home content
        </Tab.Item>
        <Tab.Item title="Documentation" key="2">
          Doc content
        </Tab.Item>
        <Tab.Item title="Help" key="3">
          Help Content
        </Tab.Item>
      </Tab>
    </>
  )
}

export default App
