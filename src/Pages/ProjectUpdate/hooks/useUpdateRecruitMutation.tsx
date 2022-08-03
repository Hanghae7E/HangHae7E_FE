/* eslint-disable no-tabs */
import { FieldValues } from 'react-hook-form';
import { useMutation, useQueryClient } from 'react-query';

import postApi from '../../../Api/postApi';
import { ITag } from '../../../TypeInterface/postType';

function useUpdateRecruitMutation(
  postId : string | undefined,
  hashTag:Array<ITag> | undefined,
  startDate:string | undefined,
  endDate:string | undefined,
  dueDate:string | undefined,
  imgName:File | undefined,
) {
  const query = useQueryClient();
  return useMutation((form: FieldValues) => postApi.updateRecruitPost(
    form,
    postId,
    hashTag,
    startDate,
    endDate,
    dueDate,
    imgName,
  ), {
    onSuccess: () => {
      query.invalidateQueries('recruit_posts');
      query.invalidateQueries('recommend_post');
    },
  });
}

export default useUpdateRecruitMutation;
