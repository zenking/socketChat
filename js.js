/**
 * Created by zjy on 2015/10/4.
 */
//�������õ���js,����ѧ��oc��һ�����������

//����һ������,�൱oc�� BOOL b = YES��
// ����BOOL �������������ͣ�
// b�Ǳ������ƣ�
// =  �Ǹ�ֵ���ţ�
// YES�Ǹ�b��ֵ�� �Ժ�b�ͱ�ʾYES
var n='i am from quanta';

//����һ������
//function������ ��
// printName�Ǳ�������name�ǲ����������˵
function printName(name){
    //console.log()�Ǵ�ӡ��������name�Ž�ȥ��ʾ��ӡname������ֵ
    console.log(name);
}

//���ú���
//�������ǰ���Լ�д��printName()����,
// ��n��()��,(n),��ʾ��n��������������,���Ǻ�,���������������name,(name),��ʾname��ӹ�n��������ֵ
printName(n);


//��������
// �������һ�������������ı���
function add(num1,num2){
    //num1��num2���ӷ�����ֵ���������ı���re
    var re=num1+num2;

    //��re����ȥ
    return re;
}

//���ú���
//��ʱ��result�͵��ں���add() return ������ֵ
var result=add(10,5);

//��ӡ��������
console.log(result);
