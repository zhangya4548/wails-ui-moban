import Layout from "@components/Layout";
import Modal from "@components/Modal";



export default function HomePage() {
    const handleSave = () => {
        // 实现保存操作的逻辑
        console.log('111111111111');
    };

  return (
    <Layout>
      <p>首页</p>
        {/*绑定弹窗id: 123*/}
        <button  data-hs-overlay="#hs-basic-modal">弹窗</ button >
        <Modal id="hs-basic-modal" title="Modal调用示例" onSave={handleSave}>
            {/* 这里传递模态框内容 */}
            <p>这是模态框的内容。</p>
            <p>可以包含任何 JSX 元素。</p>
        </Modal>
    </Layout>
  );
}