/**
 * Created by Administrator on 2016/7/4.
 */
// action ���յ� store ��Ϊ���ĵ�һ������
// ��Ȼ����ֻ���¼��ķַ���dispatch ���󣩸���Ȥ����state Ҳ������Ϊ��ѡ����룩
// ���ǿ������� ES6 �Ľ⹹��destructuring���������򻯶Բ����ĵ���
//export const incrementCounter = function ({ dispatch, state }) {
//    dispatch('INCREMENT')
//}

export const incrementCounter = function incrementCounter(_ref) {
    var dispatch = _ref.dispatch;
   // var state = _ref.state;

    dispatch('INCREMENT');
};