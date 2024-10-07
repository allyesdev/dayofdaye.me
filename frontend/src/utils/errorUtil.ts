import { IErrorMessage } from '@/types/common';
import { showSnackbar } from '@/utils/snackbarUtil';

const errorConfig: Record<string, IErrorMessage> = {
  // # 400 Bad Request
  '1000': { message: '잘못된 요청입니다.' },
  '1001': { message: 'duplicated entity' },
  '1002': { message: '지원하지 않는 파일 형식입니다.' },
  '1101': { message: '사용 가능한 채팅 토큰 수를 초과하였습니다.' },
  '1003': { message: '첨부 파일은 최대 300장까지만 허용됩니다.' },

  // # 401 Unauthorized
  '2001': {
    message: '사용자 정보를 확인할 수 없습니다. 다시 로그인 해주세요.',
  },
  '2002': {
    message: '사용자 인증 정보가 만료되었습니다. 다시 로그인 해주세요.',
  },
  '2003': { message: '유효하지 않은 요청입니다. 다시 로그인 해주세요.' },

  // # 403 Forbidden
  '3000': { message: '접근이 허용되지 않았습니다.' },
  '3001': { message: '공식적인 업데이트가 허용되지 않았습니다.' },

  // # 404 Not Found
  '4001': { message: '페이지를 찾을 수 없습니다.' },

  // # 409 Conflict
  '5001': { message: '요청 처리 중 오류가 발생하였습니다.' },

  // # 429 Too Many Requests
  '6101': { message: '요청 처리 중 오류가 발생하였습니다.' },

  // # 500 Internal Server Error
  '9000': { message: '요청 처리 중 예상치 못한 오류가 발생하였습니다.' },
  '9001': { message: '요청 처리 중 서비스 연결 오류가 발생하였습니다.' },
  '9101': { message: '요청 처리 중 모델 타임아웃 오류가 발생하였습니다.' },
  '9102': { message: '가능한 토큰 길이를 초과하여 오류가 발생하였습니다.' },
  '9103': {
    message: '시간(분)당 요청 가능한 토큰 수를 초과하여 오류가 발생하였습니다.',
  },

  HttpUnknownError: {
    message: `요청 처리 중 오류가 발생하였습니다.`,
  },
  TimeoutError: {
    message: '요청 처리 중 네트워크 오류가 발생하였습니다.',
  },
  EtcError: {
    message: `요청 처리 중 오류가 발생하였습니다.`,
  },
};

export const showError = (errorCode: string, data?: any) => {
  const message = data?.message ?? data?.detail ?? data?.error ?? '오류 발생';
  if (!errorCode && message) {
    showSnackbar(message, 'error', 5);
    return;
  }
  const error = errorConfig[errorCode];
  showSnackbar(error.message, 'error', 5);
};
