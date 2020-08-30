import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
const gql = Apollo.gql;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  timestamptz: any;
};

/** columns and relationships of "Circle" */
export type Circle = {
  __typename?: 'Circle';
  /** An array relationship */
  CicleSkills: Array<CircleSkill>;
  /** An aggregated array relationship */
  CicleSkills_aggregate: CircleSkill_Aggregate;
  /** An array relationship */
  CircleUsers: Array<CircleUser>;
  /** An aggregated array relationship */
  CircleUsers_aggregate: CircleUser_Aggregate;
  /** An array relationship */
  Messages: Array<Message>;
  /** An aggregated array relationship */
  Messages_aggregate: Message_Aggregate;
  /** An object relationship */
  Organization?: Maybe<Organization>;
  /** An object relationship */
  SubCategory?: Maybe<SubCategory>;
  /** An object relationship */
  User?: Maybe<User>;
  avatar: Scalars['String'];
  id: Scalars['Int'];
  main_role?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  organization_id?: Maybe<Scalars['Int']>;
  owner_id?: Maybe<Scalars['String']>;
  recruit_title?: Maybe<Scalars['String']>;
  sub_category_id?: Maybe<Scalars['Int']>;
  what_we_will_do?: Maybe<Scalars['String']>;
};


/** columns and relationships of "Circle" */
export type CircleCicleSkillsArgs = {
  distinct_on?: Maybe<Array<CircleSkill_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<CircleSkill_Order_By>>;
  where?: Maybe<CircleSkill_Bool_Exp>;
};


/** columns and relationships of "Circle" */
export type CircleCicleSkills_AggregateArgs = {
  distinct_on?: Maybe<Array<CircleSkill_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<CircleSkill_Order_By>>;
  where?: Maybe<CircleSkill_Bool_Exp>;
};


/** columns and relationships of "Circle" */
export type CircleCircleUsersArgs = {
  distinct_on?: Maybe<Array<CircleUser_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<CircleUser_Order_By>>;
  where?: Maybe<CircleUser_Bool_Exp>;
};


/** columns and relationships of "Circle" */
export type CircleCircleUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<CircleUser_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<CircleUser_Order_By>>;
  where?: Maybe<CircleUser_Bool_Exp>;
};


/** columns and relationships of "Circle" */
export type CircleMessagesArgs = {
  distinct_on?: Maybe<Array<Message_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Message_Order_By>>;
  where?: Maybe<Message_Bool_Exp>;
};


/** columns and relationships of "Circle" */
export type CircleMessages_AggregateArgs = {
  distinct_on?: Maybe<Array<Message_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Message_Order_By>>;
  where?: Maybe<Message_Bool_Exp>;
};

/** columns and relationships of "CircleSkill" */
export type CircleSkill = {
  __typename?: 'CircleSkill';
  /** An object relationship */
  Circle: Circle;
  /** An object relationship */
  Skill: Skill;
  circle_id: Scalars['Int'];
  id: Scalars['Int'];
  skill_id: Scalars['Int'];
};

/** aggregated selection of "CircleSkill" */
export type CircleSkill_Aggregate = {
  __typename?: 'CircleSkill_aggregate';
  aggregate?: Maybe<CircleSkill_Aggregate_Fields>;
  nodes: Array<CircleSkill>;
};

/** aggregate fields of "CircleSkill" */
export type CircleSkill_Aggregate_Fields = {
  __typename?: 'CircleSkill_aggregate_fields';
  avg?: Maybe<CircleSkill_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<CircleSkill_Max_Fields>;
  min?: Maybe<CircleSkill_Min_Fields>;
  stddev?: Maybe<CircleSkill_Stddev_Fields>;
  stddev_pop?: Maybe<CircleSkill_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<CircleSkill_Stddev_Samp_Fields>;
  sum?: Maybe<CircleSkill_Sum_Fields>;
  var_pop?: Maybe<CircleSkill_Var_Pop_Fields>;
  var_samp?: Maybe<CircleSkill_Var_Samp_Fields>;
  variance?: Maybe<CircleSkill_Variance_Fields>;
};


/** aggregate fields of "CircleSkill" */
export type CircleSkill_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<CircleSkill_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "CircleSkill" */
export type CircleSkill_Aggregate_Order_By = {
  avg?: Maybe<CircleSkill_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<CircleSkill_Max_Order_By>;
  min?: Maybe<CircleSkill_Min_Order_By>;
  stddev?: Maybe<CircleSkill_Stddev_Order_By>;
  stddev_pop?: Maybe<CircleSkill_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<CircleSkill_Stddev_Samp_Order_By>;
  sum?: Maybe<CircleSkill_Sum_Order_By>;
  var_pop?: Maybe<CircleSkill_Var_Pop_Order_By>;
  var_samp?: Maybe<CircleSkill_Var_Samp_Order_By>;
  variance?: Maybe<CircleSkill_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "CircleSkill" */
export type CircleSkill_Arr_Rel_Insert_Input = {
  data: Array<CircleSkill_Insert_Input>;
  on_conflict?: Maybe<CircleSkill_On_Conflict>;
};

/** aggregate avg on columns */
export type CircleSkill_Avg_Fields = {
  __typename?: 'CircleSkill_avg_fields';
  circle_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  skill_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "CircleSkill" */
export type CircleSkill_Avg_Order_By = {
  circle_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  skill_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "CircleSkill". All fields are combined with a logical 'AND'. */
export type CircleSkill_Bool_Exp = {
  Circle?: Maybe<Circle_Bool_Exp>;
  Skill?: Maybe<Skill_Bool_Exp>;
  _and?: Maybe<Array<Maybe<CircleSkill_Bool_Exp>>>;
  _not?: Maybe<CircleSkill_Bool_Exp>;
  _or?: Maybe<Array<Maybe<CircleSkill_Bool_Exp>>>;
  circle_id?: Maybe<Int_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  skill_id?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "CircleSkill" */
export enum CircleSkill_Constraint {
  /** unique or primary key constraint */
  CicleSkillPkey = 'CicleSkill_pkey'
}

/** input type for incrementing integer column in table "CircleSkill" */
export type CircleSkill_Inc_Input = {
  circle_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  skill_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "CircleSkill" */
export type CircleSkill_Insert_Input = {
  Circle?: Maybe<Circle_Obj_Rel_Insert_Input>;
  Skill?: Maybe<Skill_Obj_Rel_Insert_Input>;
  circle_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  skill_id?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type CircleSkill_Max_Fields = {
  __typename?: 'CircleSkill_max_fields';
  circle_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  skill_id?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "CircleSkill" */
export type CircleSkill_Max_Order_By = {
  circle_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  skill_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type CircleSkill_Min_Fields = {
  __typename?: 'CircleSkill_min_fields';
  circle_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  skill_id?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "CircleSkill" */
export type CircleSkill_Min_Order_By = {
  circle_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  skill_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "CircleSkill" */
export type CircleSkill_Mutation_Response = {
  __typename?: 'CircleSkill_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<CircleSkill>;
};

/** input type for inserting object relation for remote table "CircleSkill" */
export type CircleSkill_Obj_Rel_Insert_Input = {
  data: CircleSkill_Insert_Input;
  on_conflict?: Maybe<CircleSkill_On_Conflict>;
};

/** on conflict condition type for table "CircleSkill" */
export type CircleSkill_On_Conflict = {
  constraint: CircleSkill_Constraint;
  update_columns: Array<CircleSkill_Update_Column>;
  where?: Maybe<CircleSkill_Bool_Exp>;
};

/** ordering options when selecting data from "CircleSkill" */
export type CircleSkill_Order_By = {
  Circle?: Maybe<Circle_Order_By>;
  Skill?: Maybe<Skill_Order_By>;
  circle_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  skill_id?: Maybe<Order_By>;
};

/** primary key columns input for table: "CircleSkill" */
export type CircleSkill_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "CircleSkill" */
export enum CircleSkill_Select_Column {
  /** column name */
  CircleId = 'circle_id',
  /** column name */
  Id = 'id',
  /** column name */
  SkillId = 'skill_id'
}

/** input type for updating data in table "CircleSkill" */
export type CircleSkill_Set_Input = {
  circle_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  skill_id?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type CircleSkill_Stddev_Fields = {
  __typename?: 'CircleSkill_stddev_fields';
  circle_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  skill_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "CircleSkill" */
export type CircleSkill_Stddev_Order_By = {
  circle_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  skill_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type CircleSkill_Stddev_Pop_Fields = {
  __typename?: 'CircleSkill_stddev_pop_fields';
  circle_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  skill_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "CircleSkill" */
export type CircleSkill_Stddev_Pop_Order_By = {
  circle_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  skill_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type CircleSkill_Stddev_Samp_Fields = {
  __typename?: 'CircleSkill_stddev_samp_fields';
  circle_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  skill_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "CircleSkill" */
export type CircleSkill_Stddev_Samp_Order_By = {
  circle_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  skill_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type CircleSkill_Sum_Fields = {
  __typename?: 'CircleSkill_sum_fields';
  circle_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  skill_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "CircleSkill" */
export type CircleSkill_Sum_Order_By = {
  circle_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  skill_id?: Maybe<Order_By>;
};

/** update columns of table "CircleSkill" */
export enum CircleSkill_Update_Column {
  /** column name */
  CircleId = 'circle_id',
  /** column name */
  Id = 'id',
  /** column name */
  SkillId = 'skill_id'
}

/** aggregate var_pop on columns */
export type CircleSkill_Var_Pop_Fields = {
  __typename?: 'CircleSkill_var_pop_fields';
  circle_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  skill_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "CircleSkill" */
export type CircleSkill_Var_Pop_Order_By = {
  circle_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  skill_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type CircleSkill_Var_Samp_Fields = {
  __typename?: 'CircleSkill_var_samp_fields';
  circle_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  skill_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "CircleSkill" */
export type CircleSkill_Var_Samp_Order_By = {
  circle_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  skill_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type CircleSkill_Variance_Fields = {
  __typename?: 'CircleSkill_variance_fields';
  circle_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  skill_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "CircleSkill" */
export type CircleSkill_Variance_Order_By = {
  circle_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  skill_id?: Maybe<Order_By>;
};

/** columns and relationships of "CircleUser" */
export type CircleUser = {
  __typename?: 'CircleUser';
  /** An object relationship */
  Circle: Circle;
  /** An object relationship */
  User: User;
  circle_id: Scalars['Int'];
  id: Scalars['Int'];
  user_id: Scalars['String'];
};

/** aggregated selection of "CircleUser" */
export type CircleUser_Aggregate = {
  __typename?: 'CircleUser_aggregate';
  aggregate?: Maybe<CircleUser_Aggregate_Fields>;
  nodes: Array<CircleUser>;
};

/** aggregate fields of "CircleUser" */
export type CircleUser_Aggregate_Fields = {
  __typename?: 'CircleUser_aggregate_fields';
  avg?: Maybe<CircleUser_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<CircleUser_Max_Fields>;
  min?: Maybe<CircleUser_Min_Fields>;
  stddev?: Maybe<CircleUser_Stddev_Fields>;
  stddev_pop?: Maybe<CircleUser_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<CircleUser_Stddev_Samp_Fields>;
  sum?: Maybe<CircleUser_Sum_Fields>;
  var_pop?: Maybe<CircleUser_Var_Pop_Fields>;
  var_samp?: Maybe<CircleUser_Var_Samp_Fields>;
  variance?: Maybe<CircleUser_Variance_Fields>;
};


/** aggregate fields of "CircleUser" */
export type CircleUser_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<CircleUser_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "CircleUser" */
export type CircleUser_Aggregate_Order_By = {
  avg?: Maybe<CircleUser_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<CircleUser_Max_Order_By>;
  min?: Maybe<CircleUser_Min_Order_By>;
  stddev?: Maybe<CircleUser_Stddev_Order_By>;
  stddev_pop?: Maybe<CircleUser_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<CircleUser_Stddev_Samp_Order_By>;
  sum?: Maybe<CircleUser_Sum_Order_By>;
  var_pop?: Maybe<CircleUser_Var_Pop_Order_By>;
  var_samp?: Maybe<CircleUser_Var_Samp_Order_By>;
  variance?: Maybe<CircleUser_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "CircleUser" */
export type CircleUser_Arr_Rel_Insert_Input = {
  data: Array<CircleUser_Insert_Input>;
  on_conflict?: Maybe<CircleUser_On_Conflict>;
};

/** aggregate avg on columns */
export type CircleUser_Avg_Fields = {
  __typename?: 'CircleUser_avg_fields';
  circle_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "CircleUser" */
export type CircleUser_Avg_Order_By = {
  circle_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "CircleUser". All fields are combined with a logical 'AND'. */
export type CircleUser_Bool_Exp = {
  Circle?: Maybe<Circle_Bool_Exp>;
  User?: Maybe<User_Bool_Exp>;
  _and?: Maybe<Array<Maybe<CircleUser_Bool_Exp>>>;
  _not?: Maybe<CircleUser_Bool_Exp>;
  _or?: Maybe<Array<Maybe<CircleUser_Bool_Exp>>>;
  circle_id?: Maybe<Int_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  user_id?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "CircleUser" */
export enum CircleUser_Constraint {
  /** unique or primary key constraint */
  RoomUserPkey = 'RoomUser_pkey'
}

/** input type for incrementing integer column in table "CircleUser" */
export type CircleUser_Inc_Input = {
  circle_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "CircleUser" */
export type CircleUser_Insert_Input = {
  Circle?: Maybe<Circle_Obj_Rel_Insert_Input>;
  User?: Maybe<User_Obj_Rel_Insert_Input>;
  circle_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type CircleUser_Max_Fields = {
  __typename?: 'CircleUser_max_fields';
  circle_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "CircleUser" */
export type CircleUser_Max_Order_By = {
  circle_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type CircleUser_Min_Fields = {
  __typename?: 'CircleUser_min_fields';
  circle_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "CircleUser" */
export type CircleUser_Min_Order_By = {
  circle_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "CircleUser" */
export type CircleUser_Mutation_Response = {
  __typename?: 'CircleUser_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<CircleUser>;
};

/** input type for inserting object relation for remote table "CircleUser" */
export type CircleUser_Obj_Rel_Insert_Input = {
  data: CircleUser_Insert_Input;
  on_conflict?: Maybe<CircleUser_On_Conflict>;
};

/** on conflict condition type for table "CircleUser" */
export type CircleUser_On_Conflict = {
  constraint: CircleUser_Constraint;
  update_columns: Array<CircleUser_Update_Column>;
  where?: Maybe<CircleUser_Bool_Exp>;
};

/** ordering options when selecting data from "CircleUser" */
export type CircleUser_Order_By = {
  Circle?: Maybe<Circle_Order_By>;
  User?: Maybe<User_Order_By>;
  circle_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** primary key columns input for table: "CircleUser" */
export type CircleUser_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "CircleUser" */
export enum CircleUser_Select_Column {
  /** column name */
  CircleId = 'circle_id',
  /** column name */
  Id = 'id',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "CircleUser" */
export type CircleUser_Set_Input = {
  circle_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type CircleUser_Stddev_Fields = {
  __typename?: 'CircleUser_stddev_fields';
  circle_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "CircleUser" */
export type CircleUser_Stddev_Order_By = {
  circle_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type CircleUser_Stddev_Pop_Fields = {
  __typename?: 'CircleUser_stddev_pop_fields';
  circle_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "CircleUser" */
export type CircleUser_Stddev_Pop_Order_By = {
  circle_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type CircleUser_Stddev_Samp_Fields = {
  __typename?: 'CircleUser_stddev_samp_fields';
  circle_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "CircleUser" */
export type CircleUser_Stddev_Samp_Order_By = {
  circle_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type CircleUser_Sum_Fields = {
  __typename?: 'CircleUser_sum_fields';
  circle_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "CircleUser" */
export type CircleUser_Sum_Order_By = {
  circle_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** update columns of table "CircleUser" */
export enum CircleUser_Update_Column {
  /** column name */
  CircleId = 'circle_id',
  /** column name */
  Id = 'id',
  /** column name */
  UserId = 'user_id'
}

/** aggregate var_pop on columns */
export type CircleUser_Var_Pop_Fields = {
  __typename?: 'CircleUser_var_pop_fields';
  circle_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "CircleUser" */
export type CircleUser_Var_Pop_Order_By = {
  circle_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type CircleUser_Var_Samp_Fields = {
  __typename?: 'CircleUser_var_samp_fields';
  circle_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "CircleUser" */
export type CircleUser_Var_Samp_Order_By = {
  circle_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type CircleUser_Variance_Fields = {
  __typename?: 'CircleUser_variance_fields';
  circle_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "CircleUser" */
export type CircleUser_Variance_Order_By = {
  circle_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregated selection of "Circle" */
export type Circle_Aggregate = {
  __typename?: 'Circle_aggregate';
  aggregate?: Maybe<Circle_Aggregate_Fields>;
  nodes: Array<Circle>;
};

/** aggregate fields of "Circle" */
export type Circle_Aggregate_Fields = {
  __typename?: 'Circle_aggregate_fields';
  avg?: Maybe<Circle_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Circle_Max_Fields>;
  min?: Maybe<Circle_Min_Fields>;
  stddev?: Maybe<Circle_Stddev_Fields>;
  stddev_pop?: Maybe<Circle_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Circle_Stddev_Samp_Fields>;
  sum?: Maybe<Circle_Sum_Fields>;
  var_pop?: Maybe<Circle_Var_Pop_Fields>;
  var_samp?: Maybe<Circle_Var_Samp_Fields>;
  variance?: Maybe<Circle_Variance_Fields>;
};


/** aggregate fields of "Circle" */
export type Circle_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Circle_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "Circle" */
export type Circle_Aggregate_Order_By = {
  avg?: Maybe<Circle_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Circle_Max_Order_By>;
  min?: Maybe<Circle_Min_Order_By>;
  stddev?: Maybe<Circle_Stddev_Order_By>;
  stddev_pop?: Maybe<Circle_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Circle_Stddev_Samp_Order_By>;
  sum?: Maybe<Circle_Sum_Order_By>;
  var_pop?: Maybe<Circle_Var_Pop_Order_By>;
  var_samp?: Maybe<Circle_Var_Samp_Order_By>;
  variance?: Maybe<Circle_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "Circle" */
export type Circle_Arr_Rel_Insert_Input = {
  data: Array<Circle_Insert_Input>;
  on_conflict?: Maybe<Circle_On_Conflict>;
};

/** aggregate avg on columns */
export type Circle_Avg_Fields = {
  __typename?: 'Circle_avg_fields';
  id?: Maybe<Scalars['Float']>;
  organization_id?: Maybe<Scalars['Float']>;
  sub_category_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "Circle" */
export type Circle_Avg_Order_By = {
  id?: Maybe<Order_By>;
  organization_id?: Maybe<Order_By>;
  sub_category_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "Circle". All fields are combined with a logical 'AND'. */
export type Circle_Bool_Exp = {
  CicleSkills?: Maybe<CircleSkill_Bool_Exp>;
  CircleUsers?: Maybe<CircleUser_Bool_Exp>;
  Messages?: Maybe<Message_Bool_Exp>;
  Organization?: Maybe<Organization_Bool_Exp>;
  SubCategory?: Maybe<SubCategory_Bool_Exp>;
  User?: Maybe<User_Bool_Exp>;
  _and?: Maybe<Array<Maybe<Circle_Bool_Exp>>>;
  _not?: Maybe<Circle_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Circle_Bool_Exp>>>;
  avatar?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  main_role?: Maybe<String_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  organization_id?: Maybe<Int_Comparison_Exp>;
  owner_id?: Maybe<String_Comparison_Exp>;
  recruit_title?: Maybe<String_Comparison_Exp>;
  sub_category_id?: Maybe<Int_Comparison_Exp>;
  what_we_will_do?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "Circle" */
export enum Circle_Constraint {
  /** unique or primary key constraint */
  RoomsPkey = 'rooms_pkey'
}

/** input type for incrementing integer column in table "Circle" */
export type Circle_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  organization_id?: Maybe<Scalars['Int']>;
  sub_category_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "Circle" */
export type Circle_Insert_Input = {
  CicleSkills?: Maybe<CircleSkill_Arr_Rel_Insert_Input>;
  CircleUsers?: Maybe<CircleUser_Arr_Rel_Insert_Input>;
  Messages?: Maybe<Message_Arr_Rel_Insert_Input>;
  Organization?: Maybe<Organization_Obj_Rel_Insert_Input>;
  SubCategory?: Maybe<SubCategory_Obj_Rel_Insert_Input>;
  User?: Maybe<User_Obj_Rel_Insert_Input>;
  avatar?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  main_role?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  organization_id?: Maybe<Scalars['Int']>;
  owner_id?: Maybe<Scalars['String']>;
  recruit_title?: Maybe<Scalars['String']>;
  sub_category_id?: Maybe<Scalars['Int']>;
  what_we_will_do?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Circle_Max_Fields = {
  __typename?: 'Circle_max_fields';
  avatar?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  main_role?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  organization_id?: Maybe<Scalars['Int']>;
  owner_id?: Maybe<Scalars['String']>;
  recruit_title?: Maybe<Scalars['String']>;
  sub_category_id?: Maybe<Scalars['Int']>;
  what_we_will_do?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "Circle" */
export type Circle_Max_Order_By = {
  avatar?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  main_role?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  organization_id?: Maybe<Order_By>;
  owner_id?: Maybe<Order_By>;
  recruit_title?: Maybe<Order_By>;
  sub_category_id?: Maybe<Order_By>;
  what_we_will_do?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Circle_Min_Fields = {
  __typename?: 'Circle_min_fields';
  avatar?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  main_role?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  organization_id?: Maybe<Scalars['Int']>;
  owner_id?: Maybe<Scalars['String']>;
  recruit_title?: Maybe<Scalars['String']>;
  sub_category_id?: Maybe<Scalars['Int']>;
  what_we_will_do?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "Circle" */
export type Circle_Min_Order_By = {
  avatar?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  main_role?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  organization_id?: Maybe<Order_By>;
  owner_id?: Maybe<Order_By>;
  recruit_title?: Maybe<Order_By>;
  sub_category_id?: Maybe<Order_By>;
  what_we_will_do?: Maybe<Order_By>;
};

/** response of any mutation on the table "Circle" */
export type Circle_Mutation_Response = {
  __typename?: 'Circle_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Circle>;
};

/** input type for inserting object relation for remote table "Circle" */
export type Circle_Obj_Rel_Insert_Input = {
  data: Circle_Insert_Input;
  on_conflict?: Maybe<Circle_On_Conflict>;
};

/** on conflict condition type for table "Circle" */
export type Circle_On_Conflict = {
  constraint: Circle_Constraint;
  update_columns: Array<Circle_Update_Column>;
  where?: Maybe<Circle_Bool_Exp>;
};

/** ordering options when selecting data from "Circle" */
export type Circle_Order_By = {
  CicleSkills_aggregate?: Maybe<CircleSkill_Aggregate_Order_By>;
  CircleUsers_aggregate?: Maybe<CircleUser_Aggregate_Order_By>;
  Messages_aggregate?: Maybe<Message_Aggregate_Order_By>;
  Organization?: Maybe<Organization_Order_By>;
  SubCategory?: Maybe<SubCategory_Order_By>;
  User?: Maybe<User_Order_By>;
  avatar?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  main_role?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  organization_id?: Maybe<Order_By>;
  owner_id?: Maybe<Order_By>;
  recruit_title?: Maybe<Order_By>;
  sub_category_id?: Maybe<Order_By>;
  what_we_will_do?: Maybe<Order_By>;
};

/** primary key columns input for table: "Circle" */
export type Circle_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "Circle" */
export enum Circle_Select_Column {
  /** column name */
  Avatar = 'avatar',
  /** column name */
  Id = 'id',
  /** column name */
  MainRole = 'main_role',
  /** column name */
  Name = 'name',
  /** column name */
  OrganizationId = 'organization_id',
  /** column name */
  OwnerId = 'owner_id',
  /** column name */
  RecruitTitle = 'recruit_title',
  /** column name */
  SubCategoryId = 'sub_category_id',
  /** column name */
  WhatWeWillDo = 'what_we_will_do'
}

/** input type for updating data in table "Circle" */
export type Circle_Set_Input = {
  avatar?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  main_role?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  organization_id?: Maybe<Scalars['Int']>;
  owner_id?: Maybe<Scalars['String']>;
  recruit_title?: Maybe<Scalars['String']>;
  sub_category_id?: Maybe<Scalars['Int']>;
  what_we_will_do?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Circle_Stddev_Fields = {
  __typename?: 'Circle_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  organization_id?: Maybe<Scalars['Float']>;
  sub_category_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "Circle" */
export type Circle_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  organization_id?: Maybe<Order_By>;
  sub_category_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Circle_Stddev_Pop_Fields = {
  __typename?: 'Circle_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  organization_id?: Maybe<Scalars['Float']>;
  sub_category_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "Circle" */
export type Circle_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  organization_id?: Maybe<Order_By>;
  sub_category_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Circle_Stddev_Samp_Fields = {
  __typename?: 'Circle_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  organization_id?: Maybe<Scalars['Float']>;
  sub_category_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "Circle" */
export type Circle_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  organization_id?: Maybe<Order_By>;
  sub_category_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Circle_Sum_Fields = {
  __typename?: 'Circle_sum_fields';
  id?: Maybe<Scalars['Int']>;
  organization_id?: Maybe<Scalars['Int']>;
  sub_category_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "Circle" */
export type Circle_Sum_Order_By = {
  id?: Maybe<Order_By>;
  organization_id?: Maybe<Order_By>;
  sub_category_id?: Maybe<Order_By>;
};

/** update columns of table "Circle" */
export enum Circle_Update_Column {
  /** column name */
  Avatar = 'avatar',
  /** column name */
  Id = 'id',
  /** column name */
  MainRole = 'main_role',
  /** column name */
  Name = 'name',
  /** column name */
  OrganizationId = 'organization_id',
  /** column name */
  OwnerId = 'owner_id',
  /** column name */
  RecruitTitle = 'recruit_title',
  /** column name */
  SubCategoryId = 'sub_category_id',
  /** column name */
  WhatWeWillDo = 'what_we_will_do'
}

/** aggregate var_pop on columns */
export type Circle_Var_Pop_Fields = {
  __typename?: 'Circle_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  organization_id?: Maybe<Scalars['Float']>;
  sub_category_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "Circle" */
export type Circle_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  organization_id?: Maybe<Order_By>;
  sub_category_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Circle_Var_Samp_Fields = {
  __typename?: 'Circle_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  organization_id?: Maybe<Scalars['Float']>;
  sub_category_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "Circle" */
export type Circle_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  organization_id?: Maybe<Order_By>;
  sub_category_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Circle_Variance_Fields = {
  __typename?: 'Circle_variance_fields';
  id?: Maybe<Scalars['Float']>;
  organization_id?: Maybe<Scalars['Float']>;
  sub_category_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "Circle" */
export type Circle_Variance_Order_By = {
  id?: Maybe<Order_By>;
  organization_id?: Maybe<Order_By>;
  sub_category_id?: Maybe<Order_By>;
};

/** expression to compare columns of type Int. All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: Maybe<Scalars['Int']>;
  _gt?: Maybe<Scalars['Int']>;
  _gte?: Maybe<Scalars['Int']>;
  _in?: Maybe<Array<Scalars['Int']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Int']>;
  _lte?: Maybe<Scalars['Int']>;
  _neq?: Maybe<Scalars['Int']>;
  _nin?: Maybe<Array<Scalars['Int']>>;
};

/** columns and relationships of "Message" */
export type Message = {
  __typename?: 'Message';
  /** An object relationship */
  Circle: Circle;
  /** An object relationship */
  User: User;
  circle_id: Scalars['Int'];
  id: Scalars['Int'];
  text: Scalars['String'];
  timestamp: Scalars['timestamptz'];
  user_id: Scalars['String'];
};

/** aggregated selection of "Message" */
export type Message_Aggregate = {
  __typename?: 'Message_aggregate';
  aggregate?: Maybe<Message_Aggregate_Fields>;
  nodes: Array<Message>;
};

/** aggregate fields of "Message" */
export type Message_Aggregate_Fields = {
  __typename?: 'Message_aggregate_fields';
  avg?: Maybe<Message_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Message_Max_Fields>;
  min?: Maybe<Message_Min_Fields>;
  stddev?: Maybe<Message_Stddev_Fields>;
  stddev_pop?: Maybe<Message_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Message_Stddev_Samp_Fields>;
  sum?: Maybe<Message_Sum_Fields>;
  var_pop?: Maybe<Message_Var_Pop_Fields>;
  var_samp?: Maybe<Message_Var_Samp_Fields>;
  variance?: Maybe<Message_Variance_Fields>;
};


/** aggregate fields of "Message" */
export type Message_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Message_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "Message" */
export type Message_Aggregate_Order_By = {
  avg?: Maybe<Message_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Message_Max_Order_By>;
  min?: Maybe<Message_Min_Order_By>;
  stddev?: Maybe<Message_Stddev_Order_By>;
  stddev_pop?: Maybe<Message_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Message_Stddev_Samp_Order_By>;
  sum?: Maybe<Message_Sum_Order_By>;
  var_pop?: Maybe<Message_Var_Pop_Order_By>;
  var_samp?: Maybe<Message_Var_Samp_Order_By>;
  variance?: Maybe<Message_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "Message" */
export type Message_Arr_Rel_Insert_Input = {
  data: Array<Message_Insert_Input>;
  on_conflict?: Maybe<Message_On_Conflict>;
};

/** aggregate avg on columns */
export type Message_Avg_Fields = {
  __typename?: 'Message_avg_fields';
  circle_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "Message" */
export type Message_Avg_Order_By = {
  circle_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "Message". All fields are combined with a logical 'AND'. */
export type Message_Bool_Exp = {
  Circle?: Maybe<Circle_Bool_Exp>;
  User?: Maybe<User_Bool_Exp>;
  _and?: Maybe<Array<Maybe<Message_Bool_Exp>>>;
  _not?: Maybe<Message_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Message_Bool_Exp>>>;
  circle_id?: Maybe<Int_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  text?: Maybe<String_Comparison_Exp>;
  timestamp?: Maybe<Timestamptz_Comparison_Exp>;
  user_id?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "Message" */
export enum Message_Constraint {
  /** unique or primary key constraint */
  MessagesPkey = 'Messages_pkey'
}

/** input type for incrementing integer column in table "Message" */
export type Message_Inc_Input = {
  circle_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "Message" */
export type Message_Insert_Input = {
  Circle?: Maybe<Circle_Obj_Rel_Insert_Input>;
  User?: Maybe<User_Obj_Rel_Insert_Input>;
  circle_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  text?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Message_Max_Fields = {
  __typename?: 'Message_max_fields';
  circle_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  text?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "Message" */
export type Message_Max_Order_By = {
  circle_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  text?: Maybe<Order_By>;
  timestamp?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Message_Min_Fields = {
  __typename?: 'Message_min_fields';
  circle_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  text?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "Message" */
export type Message_Min_Order_By = {
  circle_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  text?: Maybe<Order_By>;
  timestamp?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "Message" */
export type Message_Mutation_Response = {
  __typename?: 'Message_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Message>;
};

/** input type for inserting object relation for remote table "Message" */
export type Message_Obj_Rel_Insert_Input = {
  data: Message_Insert_Input;
  on_conflict?: Maybe<Message_On_Conflict>;
};

/** on conflict condition type for table "Message" */
export type Message_On_Conflict = {
  constraint: Message_Constraint;
  update_columns: Array<Message_Update_Column>;
  where?: Maybe<Message_Bool_Exp>;
};

/** ordering options when selecting data from "Message" */
export type Message_Order_By = {
  Circle?: Maybe<Circle_Order_By>;
  User?: Maybe<User_Order_By>;
  circle_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  text?: Maybe<Order_By>;
  timestamp?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** primary key columns input for table: "Message" */
export type Message_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "Message" */
export enum Message_Select_Column {
  /** column name */
  CircleId = 'circle_id',
  /** column name */
  Id = 'id',
  /** column name */
  Text = 'text',
  /** column name */
  Timestamp = 'timestamp',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "Message" */
export type Message_Set_Input = {
  circle_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  text?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Message_Stddev_Fields = {
  __typename?: 'Message_stddev_fields';
  circle_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "Message" */
export type Message_Stddev_Order_By = {
  circle_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Message_Stddev_Pop_Fields = {
  __typename?: 'Message_stddev_pop_fields';
  circle_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "Message" */
export type Message_Stddev_Pop_Order_By = {
  circle_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Message_Stddev_Samp_Fields = {
  __typename?: 'Message_stddev_samp_fields';
  circle_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "Message" */
export type Message_Stddev_Samp_Order_By = {
  circle_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Message_Sum_Fields = {
  __typename?: 'Message_sum_fields';
  circle_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "Message" */
export type Message_Sum_Order_By = {
  circle_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** update columns of table "Message" */
export enum Message_Update_Column {
  /** column name */
  CircleId = 'circle_id',
  /** column name */
  Id = 'id',
  /** column name */
  Text = 'text',
  /** column name */
  Timestamp = 'timestamp',
  /** column name */
  UserId = 'user_id'
}

/** aggregate var_pop on columns */
export type Message_Var_Pop_Fields = {
  __typename?: 'Message_var_pop_fields';
  circle_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "Message" */
export type Message_Var_Pop_Order_By = {
  circle_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Message_Var_Samp_Fields = {
  __typename?: 'Message_var_samp_fields';
  circle_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "Message" */
export type Message_Var_Samp_Order_By = {
  circle_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Message_Variance_Fields = {
  __typename?: 'Message_variance_fields';
  circle_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "Message" */
export type Message_Variance_Order_By = {
  circle_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** columns and relationships of "Organization" */
export type Organization = {
  __typename?: 'Organization';
  /** An array relationship */
  Circles: Array<Circle>;
  /** An aggregated array relationship */
  Circles_aggregate: Circle_Aggregate;
  /** An array relationship */
  Users: Array<User>;
  /** An aggregated array relationship */
  Users_aggregate: User_Aggregate;
  domain: Scalars['String'];
  id: Scalars['Int'];
  name: Scalars['String'];
};


/** columns and relationships of "Organization" */
export type OrganizationCirclesArgs = {
  distinct_on?: Maybe<Array<Circle_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Circle_Order_By>>;
  where?: Maybe<Circle_Bool_Exp>;
};


/** columns and relationships of "Organization" */
export type OrganizationCircles_AggregateArgs = {
  distinct_on?: Maybe<Array<Circle_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Circle_Order_By>>;
  where?: Maybe<Circle_Bool_Exp>;
};


/** columns and relationships of "Organization" */
export type OrganizationUsersArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};


/** columns and relationships of "Organization" */
export type OrganizationUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};

/** aggregated selection of "Organization" */
export type Organization_Aggregate = {
  __typename?: 'Organization_aggregate';
  aggregate?: Maybe<Organization_Aggregate_Fields>;
  nodes: Array<Organization>;
};

/** aggregate fields of "Organization" */
export type Organization_Aggregate_Fields = {
  __typename?: 'Organization_aggregate_fields';
  avg?: Maybe<Organization_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Organization_Max_Fields>;
  min?: Maybe<Organization_Min_Fields>;
  stddev?: Maybe<Organization_Stddev_Fields>;
  stddev_pop?: Maybe<Organization_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Organization_Stddev_Samp_Fields>;
  sum?: Maybe<Organization_Sum_Fields>;
  var_pop?: Maybe<Organization_Var_Pop_Fields>;
  var_samp?: Maybe<Organization_Var_Samp_Fields>;
  variance?: Maybe<Organization_Variance_Fields>;
};


/** aggregate fields of "Organization" */
export type Organization_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Organization_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "Organization" */
export type Organization_Aggregate_Order_By = {
  avg?: Maybe<Organization_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Organization_Max_Order_By>;
  min?: Maybe<Organization_Min_Order_By>;
  stddev?: Maybe<Organization_Stddev_Order_By>;
  stddev_pop?: Maybe<Organization_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Organization_Stddev_Samp_Order_By>;
  sum?: Maybe<Organization_Sum_Order_By>;
  var_pop?: Maybe<Organization_Var_Pop_Order_By>;
  var_samp?: Maybe<Organization_Var_Samp_Order_By>;
  variance?: Maybe<Organization_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "Organization" */
export type Organization_Arr_Rel_Insert_Input = {
  data: Array<Organization_Insert_Input>;
  on_conflict?: Maybe<Organization_On_Conflict>;
};

/** aggregate avg on columns */
export type Organization_Avg_Fields = {
  __typename?: 'Organization_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "Organization" */
export type Organization_Avg_Order_By = {
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "Organization". All fields are combined with a logical 'AND'. */
export type Organization_Bool_Exp = {
  Circles?: Maybe<Circle_Bool_Exp>;
  Users?: Maybe<User_Bool_Exp>;
  _and?: Maybe<Array<Maybe<Organization_Bool_Exp>>>;
  _not?: Maybe<Organization_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Organization_Bool_Exp>>>;
  domain?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "Organization" */
export enum Organization_Constraint {
  /** unique or primary key constraint */
  OrganizationPkey = 'Organization_pkey'
}

/** input type for incrementing integer column in table "Organization" */
export type Organization_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "Organization" */
export type Organization_Insert_Input = {
  Circles?: Maybe<Circle_Arr_Rel_Insert_Input>;
  Users?: Maybe<User_Arr_Rel_Insert_Input>;
  domain?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Organization_Max_Fields = {
  __typename?: 'Organization_max_fields';
  domain?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "Organization" */
export type Organization_Max_Order_By = {
  domain?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Organization_Min_Fields = {
  __typename?: 'Organization_min_fields';
  domain?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "Organization" */
export type Organization_Min_Order_By = {
  domain?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** response of any mutation on the table "Organization" */
export type Organization_Mutation_Response = {
  __typename?: 'Organization_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Organization>;
};

/** input type for inserting object relation for remote table "Organization" */
export type Organization_Obj_Rel_Insert_Input = {
  data: Organization_Insert_Input;
  on_conflict?: Maybe<Organization_On_Conflict>;
};

/** on conflict condition type for table "Organization" */
export type Organization_On_Conflict = {
  constraint: Organization_Constraint;
  update_columns: Array<Organization_Update_Column>;
  where?: Maybe<Organization_Bool_Exp>;
};

/** ordering options when selecting data from "Organization" */
export type Organization_Order_By = {
  Circles_aggregate?: Maybe<Circle_Aggregate_Order_By>;
  Users_aggregate?: Maybe<User_Aggregate_Order_By>;
  domain?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** primary key columns input for table: "Organization" */
export type Organization_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "Organization" */
export enum Organization_Select_Column {
  /** column name */
  Domain = 'domain',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "Organization" */
export type Organization_Set_Input = {
  domain?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Organization_Stddev_Fields = {
  __typename?: 'Organization_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "Organization" */
export type Organization_Stddev_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Organization_Stddev_Pop_Fields = {
  __typename?: 'Organization_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "Organization" */
export type Organization_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Organization_Stddev_Samp_Fields = {
  __typename?: 'Organization_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "Organization" */
export type Organization_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Organization_Sum_Fields = {
  __typename?: 'Organization_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "Organization" */
export type Organization_Sum_Order_By = {
  id?: Maybe<Order_By>;
};

/** update columns of table "Organization" */
export enum Organization_Update_Column {
  /** column name */
  Domain = 'domain',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** aggregate var_pop on columns */
export type Organization_Var_Pop_Fields = {
  __typename?: 'Organization_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "Organization" */
export type Organization_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Organization_Var_Samp_Fields = {
  __typename?: 'Organization_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "Organization" */
export type Organization_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Organization_Variance_Fields = {
  __typename?: 'Organization_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "Organization" */
export type Organization_Variance_Order_By = {
  id?: Maybe<Order_By>;
};

/** columns and relationships of "ParentCategory" */
export type ParentCategory = {
  __typename?: 'ParentCategory';
  /** An array relationship */
  SubCategories: Array<SubCategory>;
  /** An aggregated array relationship */
  SubCategories_aggregate: SubCategory_Aggregate;
  id: Scalars['Int'];
  name: Scalars['String'];
};


/** columns and relationships of "ParentCategory" */
export type ParentCategorySubCategoriesArgs = {
  distinct_on?: Maybe<Array<SubCategory_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<SubCategory_Order_By>>;
  where?: Maybe<SubCategory_Bool_Exp>;
};


/** columns and relationships of "ParentCategory" */
export type ParentCategorySubCategories_AggregateArgs = {
  distinct_on?: Maybe<Array<SubCategory_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<SubCategory_Order_By>>;
  where?: Maybe<SubCategory_Bool_Exp>;
};

/** aggregated selection of "ParentCategory" */
export type ParentCategory_Aggregate = {
  __typename?: 'ParentCategory_aggregate';
  aggregate?: Maybe<ParentCategory_Aggregate_Fields>;
  nodes: Array<ParentCategory>;
};

/** aggregate fields of "ParentCategory" */
export type ParentCategory_Aggregate_Fields = {
  __typename?: 'ParentCategory_aggregate_fields';
  avg?: Maybe<ParentCategory_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<ParentCategory_Max_Fields>;
  min?: Maybe<ParentCategory_Min_Fields>;
  stddev?: Maybe<ParentCategory_Stddev_Fields>;
  stddev_pop?: Maybe<ParentCategory_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<ParentCategory_Stddev_Samp_Fields>;
  sum?: Maybe<ParentCategory_Sum_Fields>;
  var_pop?: Maybe<ParentCategory_Var_Pop_Fields>;
  var_samp?: Maybe<ParentCategory_Var_Samp_Fields>;
  variance?: Maybe<ParentCategory_Variance_Fields>;
};


/** aggregate fields of "ParentCategory" */
export type ParentCategory_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<ParentCategory_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "ParentCategory" */
export type ParentCategory_Aggregate_Order_By = {
  avg?: Maybe<ParentCategory_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<ParentCategory_Max_Order_By>;
  min?: Maybe<ParentCategory_Min_Order_By>;
  stddev?: Maybe<ParentCategory_Stddev_Order_By>;
  stddev_pop?: Maybe<ParentCategory_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<ParentCategory_Stddev_Samp_Order_By>;
  sum?: Maybe<ParentCategory_Sum_Order_By>;
  var_pop?: Maybe<ParentCategory_Var_Pop_Order_By>;
  var_samp?: Maybe<ParentCategory_Var_Samp_Order_By>;
  variance?: Maybe<ParentCategory_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "ParentCategory" */
export type ParentCategory_Arr_Rel_Insert_Input = {
  data: Array<ParentCategory_Insert_Input>;
  on_conflict?: Maybe<ParentCategory_On_Conflict>;
};

/** aggregate avg on columns */
export type ParentCategory_Avg_Fields = {
  __typename?: 'ParentCategory_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "ParentCategory" */
export type ParentCategory_Avg_Order_By = {
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "ParentCategory". All fields are combined with a logical 'AND'. */
export type ParentCategory_Bool_Exp = {
  SubCategories?: Maybe<SubCategory_Bool_Exp>;
  _and?: Maybe<Array<Maybe<ParentCategory_Bool_Exp>>>;
  _not?: Maybe<ParentCategory_Bool_Exp>;
  _or?: Maybe<Array<Maybe<ParentCategory_Bool_Exp>>>;
  id?: Maybe<Int_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "ParentCategory" */
export enum ParentCategory_Constraint {
  /** unique or primary key constraint */
  ParentCategoryPkey = 'ParentCategory_pkey'
}

/** input type for incrementing integer column in table "ParentCategory" */
export type ParentCategory_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "ParentCategory" */
export type ParentCategory_Insert_Input = {
  SubCategories?: Maybe<SubCategory_Arr_Rel_Insert_Input>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type ParentCategory_Max_Fields = {
  __typename?: 'ParentCategory_max_fields';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "ParentCategory" */
export type ParentCategory_Max_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type ParentCategory_Min_Fields = {
  __typename?: 'ParentCategory_min_fields';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "ParentCategory" */
export type ParentCategory_Min_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** response of any mutation on the table "ParentCategory" */
export type ParentCategory_Mutation_Response = {
  __typename?: 'ParentCategory_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<ParentCategory>;
};

/** input type for inserting object relation for remote table "ParentCategory" */
export type ParentCategory_Obj_Rel_Insert_Input = {
  data: ParentCategory_Insert_Input;
  on_conflict?: Maybe<ParentCategory_On_Conflict>;
};

/** on conflict condition type for table "ParentCategory" */
export type ParentCategory_On_Conflict = {
  constraint: ParentCategory_Constraint;
  update_columns: Array<ParentCategory_Update_Column>;
  where?: Maybe<ParentCategory_Bool_Exp>;
};

/** ordering options when selecting data from "ParentCategory" */
export type ParentCategory_Order_By = {
  SubCategories_aggregate?: Maybe<SubCategory_Aggregate_Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** primary key columns input for table: "ParentCategory" */
export type ParentCategory_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "ParentCategory" */
export enum ParentCategory_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "ParentCategory" */
export type ParentCategory_Set_Input = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type ParentCategory_Stddev_Fields = {
  __typename?: 'ParentCategory_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "ParentCategory" */
export type ParentCategory_Stddev_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type ParentCategory_Stddev_Pop_Fields = {
  __typename?: 'ParentCategory_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "ParentCategory" */
export type ParentCategory_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type ParentCategory_Stddev_Samp_Fields = {
  __typename?: 'ParentCategory_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "ParentCategory" */
export type ParentCategory_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type ParentCategory_Sum_Fields = {
  __typename?: 'ParentCategory_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "ParentCategory" */
export type ParentCategory_Sum_Order_By = {
  id?: Maybe<Order_By>;
};

/** update columns of table "ParentCategory" */
export enum ParentCategory_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** aggregate var_pop on columns */
export type ParentCategory_Var_Pop_Fields = {
  __typename?: 'ParentCategory_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "ParentCategory" */
export type ParentCategory_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type ParentCategory_Var_Samp_Fields = {
  __typename?: 'ParentCategory_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "ParentCategory" */
export type ParentCategory_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type ParentCategory_Variance_Fields = {
  __typename?: 'ParentCategory_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "ParentCategory" */
export type ParentCategory_Variance_Order_By = {
  id?: Maybe<Order_By>;
};

/** columns and relationships of "Skill" */
export type Skill = {
  __typename?: 'Skill';
  /** An array relationship */
  CicleSkills: Array<CircleSkill>;
  /** An aggregated array relationship */
  CicleSkills_aggregate: CircleSkill_Aggregate;
  /** An array relationship */
  UserSkills: Array<UserSkill>;
  /** An aggregated array relationship */
  UserSkills_aggregate: UserSkill_Aggregate;
  avatar: Scalars['String'];
  id: Scalars['Int'];
  name: Scalars['String'];
};


/** columns and relationships of "Skill" */
export type SkillCicleSkillsArgs = {
  distinct_on?: Maybe<Array<CircleSkill_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<CircleSkill_Order_By>>;
  where?: Maybe<CircleSkill_Bool_Exp>;
};


/** columns and relationships of "Skill" */
export type SkillCicleSkills_AggregateArgs = {
  distinct_on?: Maybe<Array<CircleSkill_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<CircleSkill_Order_By>>;
  where?: Maybe<CircleSkill_Bool_Exp>;
};


/** columns and relationships of "Skill" */
export type SkillUserSkillsArgs = {
  distinct_on?: Maybe<Array<UserSkill_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<UserSkill_Order_By>>;
  where?: Maybe<UserSkill_Bool_Exp>;
};


/** columns and relationships of "Skill" */
export type SkillUserSkills_AggregateArgs = {
  distinct_on?: Maybe<Array<UserSkill_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<UserSkill_Order_By>>;
  where?: Maybe<UserSkill_Bool_Exp>;
};

/** aggregated selection of "Skill" */
export type Skill_Aggregate = {
  __typename?: 'Skill_aggregate';
  aggregate?: Maybe<Skill_Aggregate_Fields>;
  nodes: Array<Skill>;
};

/** aggregate fields of "Skill" */
export type Skill_Aggregate_Fields = {
  __typename?: 'Skill_aggregate_fields';
  avg?: Maybe<Skill_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Skill_Max_Fields>;
  min?: Maybe<Skill_Min_Fields>;
  stddev?: Maybe<Skill_Stddev_Fields>;
  stddev_pop?: Maybe<Skill_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Skill_Stddev_Samp_Fields>;
  sum?: Maybe<Skill_Sum_Fields>;
  var_pop?: Maybe<Skill_Var_Pop_Fields>;
  var_samp?: Maybe<Skill_Var_Samp_Fields>;
  variance?: Maybe<Skill_Variance_Fields>;
};


/** aggregate fields of "Skill" */
export type Skill_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Skill_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "Skill" */
export type Skill_Aggregate_Order_By = {
  avg?: Maybe<Skill_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Skill_Max_Order_By>;
  min?: Maybe<Skill_Min_Order_By>;
  stddev?: Maybe<Skill_Stddev_Order_By>;
  stddev_pop?: Maybe<Skill_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Skill_Stddev_Samp_Order_By>;
  sum?: Maybe<Skill_Sum_Order_By>;
  var_pop?: Maybe<Skill_Var_Pop_Order_By>;
  var_samp?: Maybe<Skill_Var_Samp_Order_By>;
  variance?: Maybe<Skill_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "Skill" */
export type Skill_Arr_Rel_Insert_Input = {
  data: Array<Skill_Insert_Input>;
  on_conflict?: Maybe<Skill_On_Conflict>;
};

/** aggregate avg on columns */
export type Skill_Avg_Fields = {
  __typename?: 'Skill_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "Skill" */
export type Skill_Avg_Order_By = {
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "Skill". All fields are combined with a logical 'AND'. */
export type Skill_Bool_Exp = {
  CicleSkills?: Maybe<CircleSkill_Bool_Exp>;
  UserSkills?: Maybe<UserSkill_Bool_Exp>;
  _and?: Maybe<Array<Maybe<Skill_Bool_Exp>>>;
  _not?: Maybe<Skill_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Skill_Bool_Exp>>>;
  avatar?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "Skill" */
export enum Skill_Constraint {
  /** unique or primary key constraint */
  SkillPkey = 'Skill_pkey'
}

/** input type for incrementing integer column in table "Skill" */
export type Skill_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "Skill" */
export type Skill_Insert_Input = {
  CicleSkills?: Maybe<CircleSkill_Arr_Rel_Insert_Input>;
  UserSkills?: Maybe<UserSkill_Arr_Rel_Insert_Input>;
  avatar?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Skill_Max_Fields = {
  __typename?: 'Skill_max_fields';
  avatar?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "Skill" */
export type Skill_Max_Order_By = {
  avatar?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Skill_Min_Fields = {
  __typename?: 'Skill_min_fields';
  avatar?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "Skill" */
export type Skill_Min_Order_By = {
  avatar?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** response of any mutation on the table "Skill" */
export type Skill_Mutation_Response = {
  __typename?: 'Skill_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Skill>;
};

/** input type for inserting object relation for remote table "Skill" */
export type Skill_Obj_Rel_Insert_Input = {
  data: Skill_Insert_Input;
  on_conflict?: Maybe<Skill_On_Conflict>;
};

/** on conflict condition type for table "Skill" */
export type Skill_On_Conflict = {
  constraint: Skill_Constraint;
  update_columns: Array<Skill_Update_Column>;
  where?: Maybe<Skill_Bool_Exp>;
};

/** ordering options when selecting data from "Skill" */
export type Skill_Order_By = {
  CicleSkills_aggregate?: Maybe<CircleSkill_Aggregate_Order_By>;
  UserSkills_aggregate?: Maybe<UserSkill_Aggregate_Order_By>;
  avatar?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** primary key columns input for table: "Skill" */
export type Skill_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "Skill" */
export enum Skill_Select_Column {
  /** column name */
  Avatar = 'avatar',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "Skill" */
export type Skill_Set_Input = {
  avatar?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Skill_Stddev_Fields = {
  __typename?: 'Skill_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "Skill" */
export type Skill_Stddev_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Skill_Stddev_Pop_Fields = {
  __typename?: 'Skill_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "Skill" */
export type Skill_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Skill_Stddev_Samp_Fields = {
  __typename?: 'Skill_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "Skill" */
export type Skill_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Skill_Sum_Fields = {
  __typename?: 'Skill_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "Skill" */
export type Skill_Sum_Order_By = {
  id?: Maybe<Order_By>;
};

/** update columns of table "Skill" */
export enum Skill_Update_Column {
  /** column name */
  Avatar = 'avatar',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** aggregate var_pop on columns */
export type Skill_Var_Pop_Fields = {
  __typename?: 'Skill_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "Skill" */
export type Skill_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Skill_Var_Samp_Fields = {
  __typename?: 'Skill_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "Skill" */
export type Skill_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Skill_Variance_Fields = {
  __typename?: 'Skill_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "Skill" */
export type Skill_Variance_Order_By = {
  id?: Maybe<Order_By>;
};

/** expression to compare columns of type String. All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['String']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['String']>>;
  _nlike?: Maybe<Scalars['String']>;
  _nsimilar?: Maybe<Scalars['String']>;
  _similar?: Maybe<Scalars['String']>;
};

/** columns and relationships of "SubCategory" */
export type SubCategory = {
  __typename?: 'SubCategory';
  /** An object relationship */
  ParentCategory: ParentCategory;
  /** An object relationship */
  SubCategory?: Maybe<Circle>;
  id: Scalars['Int'];
  name: Scalars['String'];
  parent_category_id: Scalars['Int'];
};

/** aggregated selection of "SubCategory" */
export type SubCategory_Aggregate = {
  __typename?: 'SubCategory_aggregate';
  aggregate?: Maybe<SubCategory_Aggregate_Fields>;
  nodes: Array<SubCategory>;
};

/** aggregate fields of "SubCategory" */
export type SubCategory_Aggregate_Fields = {
  __typename?: 'SubCategory_aggregate_fields';
  avg?: Maybe<SubCategory_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<SubCategory_Max_Fields>;
  min?: Maybe<SubCategory_Min_Fields>;
  stddev?: Maybe<SubCategory_Stddev_Fields>;
  stddev_pop?: Maybe<SubCategory_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<SubCategory_Stddev_Samp_Fields>;
  sum?: Maybe<SubCategory_Sum_Fields>;
  var_pop?: Maybe<SubCategory_Var_Pop_Fields>;
  var_samp?: Maybe<SubCategory_Var_Samp_Fields>;
  variance?: Maybe<SubCategory_Variance_Fields>;
};


/** aggregate fields of "SubCategory" */
export type SubCategory_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<SubCategory_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "SubCategory" */
export type SubCategory_Aggregate_Order_By = {
  avg?: Maybe<SubCategory_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<SubCategory_Max_Order_By>;
  min?: Maybe<SubCategory_Min_Order_By>;
  stddev?: Maybe<SubCategory_Stddev_Order_By>;
  stddev_pop?: Maybe<SubCategory_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<SubCategory_Stddev_Samp_Order_By>;
  sum?: Maybe<SubCategory_Sum_Order_By>;
  var_pop?: Maybe<SubCategory_Var_Pop_Order_By>;
  var_samp?: Maybe<SubCategory_Var_Samp_Order_By>;
  variance?: Maybe<SubCategory_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "SubCategory" */
export type SubCategory_Arr_Rel_Insert_Input = {
  data: Array<SubCategory_Insert_Input>;
  on_conflict?: Maybe<SubCategory_On_Conflict>;
};

/** aggregate avg on columns */
export type SubCategory_Avg_Fields = {
  __typename?: 'SubCategory_avg_fields';
  id?: Maybe<Scalars['Float']>;
  parent_category_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "SubCategory" */
export type SubCategory_Avg_Order_By = {
  id?: Maybe<Order_By>;
  parent_category_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "SubCategory". All fields are combined with a logical 'AND'. */
export type SubCategory_Bool_Exp = {
  ParentCategory?: Maybe<ParentCategory_Bool_Exp>;
  SubCategory?: Maybe<Circle_Bool_Exp>;
  _and?: Maybe<Array<Maybe<SubCategory_Bool_Exp>>>;
  _not?: Maybe<SubCategory_Bool_Exp>;
  _or?: Maybe<Array<Maybe<SubCategory_Bool_Exp>>>;
  id?: Maybe<Int_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  parent_category_id?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "SubCategory" */
export enum SubCategory_Constraint {
  /** unique or primary key constraint */
  SubCategoryPkey = 'SubCategory_pkey'
}

/** input type for incrementing integer column in table "SubCategory" */
export type SubCategory_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  parent_category_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "SubCategory" */
export type SubCategory_Insert_Input = {
  ParentCategory?: Maybe<ParentCategory_Obj_Rel_Insert_Input>;
  SubCategory?: Maybe<Circle_Obj_Rel_Insert_Input>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  parent_category_id?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type SubCategory_Max_Fields = {
  __typename?: 'SubCategory_max_fields';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  parent_category_id?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "SubCategory" */
export type SubCategory_Max_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  parent_category_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type SubCategory_Min_Fields = {
  __typename?: 'SubCategory_min_fields';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  parent_category_id?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "SubCategory" */
export type SubCategory_Min_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  parent_category_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "SubCategory" */
export type SubCategory_Mutation_Response = {
  __typename?: 'SubCategory_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<SubCategory>;
};

/** input type for inserting object relation for remote table "SubCategory" */
export type SubCategory_Obj_Rel_Insert_Input = {
  data: SubCategory_Insert_Input;
  on_conflict?: Maybe<SubCategory_On_Conflict>;
};

/** on conflict condition type for table "SubCategory" */
export type SubCategory_On_Conflict = {
  constraint: SubCategory_Constraint;
  update_columns: Array<SubCategory_Update_Column>;
  where?: Maybe<SubCategory_Bool_Exp>;
};

/** ordering options when selecting data from "SubCategory" */
export type SubCategory_Order_By = {
  ParentCategory?: Maybe<ParentCategory_Order_By>;
  SubCategory?: Maybe<Circle_Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  parent_category_id?: Maybe<Order_By>;
};

/** primary key columns input for table: "SubCategory" */
export type SubCategory_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "SubCategory" */
export enum SubCategory_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  ParentCategoryId = 'parent_category_id'
}

/** input type for updating data in table "SubCategory" */
export type SubCategory_Set_Input = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  parent_category_id?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type SubCategory_Stddev_Fields = {
  __typename?: 'SubCategory_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  parent_category_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "SubCategory" */
export type SubCategory_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  parent_category_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type SubCategory_Stddev_Pop_Fields = {
  __typename?: 'SubCategory_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  parent_category_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "SubCategory" */
export type SubCategory_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  parent_category_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type SubCategory_Stddev_Samp_Fields = {
  __typename?: 'SubCategory_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  parent_category_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "SubCategory" */
export type SubCategory_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  parent_category_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type SubCategory_Sum_Fields = {
  __typename?: 'SubCategory_sum_fields';
  id?: Maybe<Scalars['Int']>;
  parent_category_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "SubCategory" */
export type SubCategory_Sum_Order_By = {
  id?: Maybe<Order_By>;
  parent_category_id?: Maybe<Order_By>;
};

/** update columns of table "SubCategory" */
export enum SubCategory_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  ParentCategoryId = 'parent_category_id'
}

/** aggregate var_pop on columns */
export type SubCategory_Var_Pop_Fields = {
  __typename?: 'SubCategory_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  parent_category_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "SubCategory" */
export type SubCategory_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  parent_category_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type SubCategory_Var_Samp_Fields = {
  __typename?: 'SubCategory_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  parent_category_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "SubCategory" */
export type SubCategory_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  parent_category_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type SubCategory_Variance_Fields = {
  __typename?: 'SubCategory_variance_fields';
  id?: Maybe<Scalars['Float']>;
  parent_category_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "SubCategory" */
export type SubCategory_Variance_Order_By = {
  id?: Maybe<Order_By>;
  parent_category_id?: Maybe<Order_By>;
};

/** columns and relationships of "User" */
export type User = {
  __typename?: 'User';
  /** An array relationship */
  CircleUsers: Array<CircleUser>;
  /** An aggregated array relationship */
  CircleUsers_aggregate: CircleUser_Aggregate;
  /** An array relationship */
  Messages: Array<Message>;
  /** An aggregated array relationship */
  Messages_aggregate: Message_Aggregate;
  /** An object relationship */
  Organization?: Maybe<Organization>;
  /** An object relationship */
  User?: Maybe<Circle>;
  /** An array relationship */
  UserSkills: Array<UserSkill>;
  /** An aggregated array relationship */
  UserSkills_aggregate: UserSkill_Aggregate;
  avatar?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  interested_in?: Maybe<Scalars['String']>;
  introduction?: Maybe<Scalars['String']>;
  last_seen?: Maybe<Scalars['timestamptz']>;
  name?: Maybe<Scalars['String']>;
  organization_id?: Maybe<Scalars['Int']>;
};


/** columns and relationships of "User" */
export type UserCircleUsersArgs = {
  distinct_on?: Maybe<Array<CircleUser_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<CircleUser_Order_By>>;
  where?: Maybe<CircleUser_Bool_Exp>;
};


/** columns and relationships of "User" */
export type UserCircleUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<CircleUser_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<CircleUser_Order_By>>;
  where?: Maybe<CircleUser_Bool_Exp>;
};


/** columns and relationships of "User" */
export type UserMessagesArgs = {
  distinct_on?: Maybe<Array<Message_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Message_Order_By>>;
  where?: Maybe<Message_Bool_Exp>;
};


/** columns and relationships of "User" */
export type UserMessages_AggregateArgs = {
  distinct_on?: Maybe<Array<Message_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Message_Order_By>>;
  where?: Maybe<Message_Bool_Exp>;
};


/** columns and relationships of "User" */
export type UserUserSkillsArgs = {
  distinct_on?: Maybe<Array<UserSkill_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<UserSkill_Order_By>>;
  where?: Maybe<UserSkill_Bool_Exp>;
};


/** columns and relationships of "User" */
export type UserUserSkills_AggregateArgs = {
  distinct_on?: Maybe<Array<UserSkill_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<UserSkill_Order_By>>;
  where?: Maybe<UserSkill_Bool_Exp>;
};

/** columns and relationships of "UserSkill" */
export type UserSkill = {
  __typename?: 'UserSkill';
  /** An object relationship */
  Skill: Skill;
  /** An object relationship */
  User: User;
  id: Scalars['Int'];
  level: Scalars['Int'];
  skill_id: Scalars['Int'];
  user_id: Scalars['String'];
};

/** aggregated selection of "UserSkill" */
export type UserSkill_Aggregate = {
  __typename?: 'UserSkill_aggregate';
  aggregate?: Maybe<UserSkill_Aggregate_Fields>;
  nodes: Array<UserSkill>;
};

/** aggregate fields of "UserSkill" */
export type UserSkill_Aggregate_Fields = {
  __typename?: 'UserSkill_aggregate_fields';
  avg?: Maybe<UserSkill_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<UserSkill_Max_Fields>;
  min?: Maybe<UserSkill_Min_Fields>;
  stddev?: Maybe<UserSkill_Stddev_Fields>;
  stddev_pop?: Maybe<UserSkill_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<UserSkill_Stddev_Samp_Fields>;
  sum?: Maybe<UserSkill_Sum_Fields>;
  var_pop?: Maybe<UserSkill_Var_Pop_Fields>;
  var_samp?: Maybe<UserSkill_Var_Samp_Fields>;
  variance?: Maybe<UserSkill_Variance_Fields>;
};


/** aggregate fields of "UserSkill" */
export type UserSkill_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<UserSkill_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "UserSkill" */
export type UserSkill_Aggregate_Order_By = {
  avg?: Maybe<UserSkill_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<UserSkill_Max_Order_By>;
  min?: Maybe<UserSkill_Min_Order_By>;
  stddev?: Maybe<UserSkill_Stddev_Order_By>;
  stddev_pop?: Maybe<UserSkill_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<UserSkill_Stddev_Samp_Order_By>;
  sum?: Maybe<UserSkill_Sum_Order_By>;
  var_pop?: Maybe<UserSkill_Var_Pop_Order_By>;
  var_samp?: Maybe<UserSkill_Var_Samp_Order_By>;
  variance?: Maybe<UserSkill_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "UserSkill" */
export type UserSkill_Arr_Rel_Insert_Input = {
  data: Array<UserSkill_Insert_Input>;
  on_conflict?: Maybe<UserSkill_On_Conflict>;
};

/** aggregate avg on columns */
export type UserSkill_Avg_Fields = {
  __typename?: 'UserSkill_avg_fields';
  id?: Maybe<Scalars['Float']>;
  level?: Maybe<Scalars['Float']>;
  skill_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "UserSkill" */
export type UserSkill_Avg_Order_By = {
  id?: Maybe<Order_By>;
  level?: Maybe<Order_By>;
  skill_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "UserSkill". All fields are combined with a logical 'AND'. */
export type UserSkill_Bool_Exp = {
  Skill?: Maybe<Skill_Bool_Exp>;
  User?: Maybe<User_Bool_Exp>;
  _and?: Maybe<Array<Maybe<UserSkill_Bool_Exp>>>;
  _not?: Maybe<UserSkill_Bool_Exp>;
  _or?: Maybe<Array<Maybe<UserSkill_Bool_Exp>>>;
  id?: Maybe<Int_Comparison_Exp>;
  level?: Maybe<Int_Comparison_Exp>;
  skill_id?: Maybe<Int_Comparison_Exp>;
  user_id?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "UserSkill" */
export enum UserSkill_Constraint {
  /** unique or primary key constraint */
  UserSkillPkey = 'UserSkill_pkey'
}

/** input type for incrementing integer column in table "UserSkill" */
export type UserSkill_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  level?: Maybe<Scalars['Int']>;
  skill_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "UserSkill" */
export type UserSkill_Insert_Input = {
  Skill?: Maybe<Skill_Obj_Rel_Insert_Input>;
  User?: Maybe<User_Obj_Rel_Insert_Input>;
  id?: Maybe<Scalars['Int']>;
  level?: Maybe<Scalars['Int']>;
  skill_id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type UserSkill_Max_Fields = {
  __typename?: 'UserSkill_max_fields';
  id?: Maybe<Scalars['Int']>;
  level?: Maybe<Scalars['Int']>;
  skill_id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "UserSkill" */
export type UserSkill_Max_Order_By = {
  id?: Maybe<Order_By>;
  level?: Maybe<Order_By>;
  skill_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type UserSkill_Min_Fields = {
  __typename?: 'UserSkill_min_fields';
  id?: Maybe<Scalars['Int']>;
  level?: Maybe<Scalars['Int']>;
  skill_id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "UserSkill" */
export type UserSkill_Min_Order_By = {
  id?: Maybe<Order_By>;
  level?: Maybe<Order_By>;
  skill_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "UserSkill" */
export type UserSkill_Mutation_Response = {
  __typename?: 'UserSkill_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<UserSkill>;
};

/** input type for inserting object relation for remote table "UserSkill" */
export type UserSkill_Obj_Rel_Insert_Input = {
  data: UserSkill_Insert_Input;
  on_conflict?: Maybe<UserSkill_On_Conflict>;
};

/** on conflict condition type for table "UserSkill" */
export type UserSkill_On_Conflict = {
  constraint: UserSkill_Constraint;
  update_columns: Array<UserSkill_Update_Column>;
  where?: Maybe<UserSkill_Bool_Exp>;
};

/** ordering options when selecting data from "UserSkill" */
export type UserSkill_Order_By = {
  Skill?: Maybe<Skill_Order_By>;
  User?: Maybe<User_Order_By>;
  id?: Maybe<Order_By>;
  level?: Maybe<Order_By>;
  skill_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** primary key columns input for table: "UserSkill" */
export type UserSkill_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "UserSkill" */
export enum UserSkill_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Level = 'level',
  /** column name */
  SkillId = 'skill_id',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "UserSkill" */
export type UserSkill_Set_Input = {
  id?: Maybe<Scalars['Int']>;
  level?: Maybe<Scalars['Int']>;
  skill_id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type UserSkill_Stddev_Fields = {
  __typename?: 'UserSkill_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  level?: Maybe<Scalars['Float']>;
  skill_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "UserSkill" */
export type UserSkill_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  level?: Maybe<Order_By>;
  skill_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type UserSkill_Stddev_Pop_Fields = {
  __typename?: 'UserSkill_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  level?: Maybe<Scalars['Float']>;
  skill_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "UserSkill" */
export type UserSkill_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  level?: Maybe<Order_By>;
  skill_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type UserSkill_Stddev_Samp_Fields = {
  __typename?: 'UserSkill_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  level?: Maybe<Scalars['Float']>;
  skill_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "UserSkill" */
export type UserSkill_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  level?: Maybe<Order_By>;
  skill_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type UserSkill_Sum_Fields = {
  __typename?: 'UserSkill_sum_fields';
  id?: Maybe<Scalars['Int']>;
  level?: Maybe<Scalars['Int']>;
  skill_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "UserSkill" */
export type UserSkill_Sum_Order_By = {
  id?: Maybe<Order_By>;
  level?: Maybe<Order_By>;
  skill_id?: Maybe<Order_By>;
};

/** update columns of table "UserSkill" */
export enum UserSkill_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Level = 'level',
  /** column name */
  SkillId = 'skill_id',
  /** column name */
  UserId = 'user_id'
}

/** aggregate var_pop on columns */
export type UserSkill_Var_Pop_Fields = {
  __typename?: 'UserSkill_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  level?: Maybe<Scalars['Float']>;
  skill_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "UserSkill" */
export type UserSkill_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  level?: Maybe<Order_By>;
  skill_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type UserSkill_Var_Samp_Fields = {
  __typename?: 'UserSkill_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  level?: Maybe<Scalars['Float']>;
  skill_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "UserSkill" */
export type UserSkill_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  level?: Maybe<Order_By>;
  skill_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type UserSkill_Variance_Fields = {
  __typename?: 'UserSkill_variance_fields';
  id?: Maybe<Scalars['Float']>;
  level?: Maybe<Scalars['Float']>;
  skill_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "UserSkill" */
export type UserSkill_Variance_Order_By = {
  id?: Maybe<Order_By>;
  level?: Maybe<Order_By>;
  skill_id?: Maybe<Order_By>;
};

/** aggregated selection of "User" */
export type User_Aggregate = {
  __typename?: 'User_aggregate';
  aggregate?: Maybe<User_Aggregate_Fields>;
  nodes: Array<User>;
};

/** aggregate fields of "User" */
export type User_Aggregate_Fields = {
  __typename?: 'User_aggregate_fields';
  avg?: Maybe<User_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<User_Max_Fields>;
  min?: Maybe<User_Min_Fields>;
  stddev?: Maybe<User_Stddev_Fields>;
  stddev_pop?: Maybe<User_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<User_Stddev_Samp_Fields>;
  sum?: Maybe<User_Sum_Fields>;
  var_pop?: Maybe<User_Var_Pop_Fields>;
  var_samp?: Maybe<User_Var_Samp_Fields>;
  variance?: Maybe<User_Variance_Fields>;
};


/** aggregate fields of "User" */
export type User_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<User_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "User" */
export type User_Aggregate_Order_By = {
  avg?: Maybe<User_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<User_Max_Order_By>;
  min?: Maybe<User_Min_Order_By>;
  stddev?: Maybe<User_Stddev_Order_By>;
  stddev_pop?: Maybe<User_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<User_Stddev_Samp_Order_By>;
  sum?: Maybe<User_Sum_Order_By>;
  var_pop?: Maybe<User_Var_Pop_Order_By>;
  var_samp?: Maybe<User_Var_Samp_Order_By>;
  variance?: Maybe<User_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "User" */
export type User_Arr_Rel_Insert_Input = {
  data: Array<User_Insert_Input>;
  on_conflict?: Maybe<User_On_Conflict>;
};

/** aggregate avg on columns */
export type User_Avg_Fields = {
  __typename?: 'User_avg_fields';
  organization_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "User" */
export type User_Avg_Order_By = {
  organization_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "User". All fields are combined with a logical 'AND'. */
export type User_Bool_Exp = {
  CircleUsers?: Maybe<CircleUser_Bool_Exp>;
  Messages?: Maybe<Message_Bool_Exp>;
  Organization?: Maybe<Organization_Bool_Exp>;
  User?: Maybe<Circle_Bool_Exp>;
  UserSkills?: Maybe<UserSkill_Bool_Exp>;
  _and?: Maybe<Array<Maybe<User_Bool_Exp>>>;
  _not?: Maybe<User_Bool_Exp>;
  _or?: Maybe<Array<Maybe<User_Bool_Exp>>>;
  avatar?: Maybe<String_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  email?: Maybe<String_Comparison_Exp>;
  id?: Maybe<String_Comparison_Exp>;
  interested_in?: Maybe<String_Comparison_Exp>;
  introduction?: Maybe<String_Comparison_Exp>;
  last_seen?: Maybe<Timestamptz_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  organization_id?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "User" */
export enum User_Constraint {
  /** unique or primary key constraint */
  UserPkey = 'user_pkey'
}

/** input type for incrementing integer column in table "User" */
export type User_Inc_Input = {
  organization_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "User" */
export type User_Insert_Input = {
  CircleUsers?: Maybe<CircleUser_Arr_Rel_Insert_Input>;
  Messages?: Maybe<Message_Arr_Rel_Insert_Input>;
  Organization?: Maybe<Organization_Obj_Rel_Insert_Input>;
  User?: Maybe<Circle_Obj_Rel_Insert_Input>;
  UserSkills?: Maybe<UserSkill_Arr_Rel_Insert_Input>;
  avatar?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  interested_in?: Maybe<Scalars['String']>;
  introduction?: Maybe<Scalars['String']>;
  last_seen?: Maybe<Scalars['timestamptz']>;
  name?: Maybe<Scalars['String']>;
  organization_id?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type User_Max_Fields = {
  __typename?: 'User_max_fields';
  avatar?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  interested_in?: Maybe<Scalars['String']>;
  introduction?: Maybe<Scalars['String']>;
  last_seen?: Maybe<Scalars['timestamptz']>;
  name?: Maybe<Scalars['String']>;
  organization_id?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "User" */
export type User_Max_Order_By = {
  avatar?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  interested_in?: Maybe<Order_By>;
  introduction?: Maybe<Order_By>;
  last_seen?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  organization_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type User_Min_Fields = {
  __typename?: 'User_min_fields';
  avatar?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  interested_in?: Maybe<Scalars['String']>;
  introduction?: Maybe<Scalars['String']>;
  last_seen?: Maybe<Scalars['timestamptz']>;
  name?: Maybe<Scalars['String']>;
  organization_id?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "User" */
export type User_Min_Order_By = {
  avatar?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  interested_in?: Maybe<Order_By>;
  introduction?: Maybe<Order_By>;
  last_seen?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  organization_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "User" */
export type User_Mutation_Response = {
  __typename?: 'User_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<User>;
};

/** input type for inserting object relation for remote table "User" */
export type User_Obj_Rel_Insert_Input = {
  data: User_Insert_Input;
  on_conflict?: Maybe<User_On_Conflict>;
};

/** on conflict condition type for table "User" */
export type User_On_Conflict = {
  constraint: User_Constraint;
  update_columns: Array<User_Update_Column>;
  where?: Maybe<User_Bool_Exp>;
};

/** ordering options when selecting data from "User" */
export type User_Order_By = {
  CircleUsers_aggregate?: Maybe<CircleUser_Aggregate_Order_By>;
  Messages_aggregate?: Maybe<Message_Aggregate_Order_By>;
  Organization?: Maybe<Organization_Order_By>;
  User?: Maybe<Circle_Order_By>;
  UserSkills_aggregate?: Maybe<UserSkill_Aggregate_Order_By>;
  avatar?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  interested_in?: Maybe<Order_By>;
  introduction?: Maybe<Order_By>;
  last_seen?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  organization_id?: Maybe<Order_By>;
};

/** primary key columns input for table: "User" */
export type User_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "User" */
export enum User_Select_Column {
  /** column name */
  Avatar = 'avatar',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  InterestedIn = 'interested_in',
  /** column name */
  Introduction = 'introduction',
  /** column name */
  LastSeen = 'last_seen',
  /** column name */
  Name = 'name',
  /** column name */
  OrganizationId = 'organization_id'
}

/** input type for updating data in table "User" */
export type User_Set_Input = {
  avatar?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  interested_in?: Maybe<Scalars['String']>;
  introduction?: Maybe<Scalars['String']>;
  last_seen?: Maybe<Scalars['timestamptz']>;
  name?: Maybe<Scalars['String']>;
  organization_id?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type User_Stddev_Fields = {
  __typename?: 'User_stddev_fields';
  organization_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "User" */
export type User_Stddev_Order_By = {
  organization_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type User_Stddev_Pop_Fields = {
  __typename?: 'User_stddev_pop_fields';
  organization_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "User" */
export type User_Stddev_Pop_Order_By = {
  organization_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type User_Stddev_Samp_Fields = {
  __typename?: 'User_stddev_samp_fields';
  organization_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "User" */
export type User_Stddev_Samp_Order_By = {
  organization_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type User_Sum_Fields = {
  __typename?: 'User_sum_fields';
  organization_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "User" */
export type User_Sum_Order_By = {
  organization_id?: Maybe<Order_By>;
};

/** update columns of table "User" */
export enum User_Update_Column {
  /** column name */
  Avatar = 'avatar',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  InterestedIn = 'interested_in',
  /** column name */
  Introduction = 'introduction',
  /** column name */
  LastSeen = 'last_seen',
  /** column name */
  Name = 'name',
  /** column name */
  OrganizationId = 'organization_id'
}

/** aggregate var_pop on columns */
export type User_Var_Pop_Fields = {
  __typename?: 'User_var_pop_fields';
  organization_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "User" */
export type User_Var_Pop_Order_By = {
  organization_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type User_Var_Samp_Fields = {
  __typename?: 'User_var_samp_fields';
  organization_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "User" */
export type User_Var_Samp_Order_By = {
  organization_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type User_Variance_Fields = {
  __typename?: 'User_variance_fields';
  organization_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "User" */
export type User_Variance_Order_By = {
  organization_id?: Maybe<Order_By>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "Circle" */
  delete_Circle?: Maybe<Circle_Mutation_Response>;
  /** delete data from the table: "CircleSkill" */
  delete_CircleSkill?: Maybe<CircleSkill_Mutation_Response>;
  /** delete single row from the table: "CircleSkill" */
  delete_CircleSkill_by_pk?: Maybe<CircleSkill>;
  /** delete data from the table: "CircleUser" */
  delete_CircleUser?: Maybe<CircleUser_Mutation_Response>;
  /** delete single row from the table: "CircleUser" */
  delete_CircleUser_by_pk?: Maybe<CircleUser>;
  /** delete single row from the table: "Circle" */
  delete_Circle_by_pk?: Maybe<Circle>;
  /** delete data from the table: "Message" */
  delete_Message?: Maybe<Message_Mutation_Response>;
  /** delete single row from the table: "Message" */
  delete_Message_by_pk?: Maybe<Message>;
  /** delete data from the table: "Organization" */
  delete_Organization?: Maybe<Organization_Mutation_Response>;
  /** delete single row from the table: "Organization" */
  delete_Organization_by_pk?: Maybe<Organization>;
  /** delete data from the table: "ParentCategory" */
  delete_ParentCategory?: Maybe<ParentCategory_Mutation_Response>;
  /** delete single row from the table: "ParentCategory" */
  delete_ParentCategory_by_pk?: Maybe<ParentCategory>;
  /** delete data from the table: "Skill" */
  delete_Skill?: Maybe<Skill_Mutation_Response>;
  /** delete single row from the table: "Skill" */
  delete_Skill_by_pk?: Maybe<Skill>;
  /** delete data from the table: "SubCategory" */
  delete_SubCategory?: Maybe<SubCategory_Mutation_Response>;
  /** delete single row from the table: "SubCategory" */
  delete_SubCategory_by_pk?: Maybe<SubCategory>;
  /** delete data from the table: "User" */
  delete_User?: Maybe<User_Mutation_Response>;
  /** delete data from the table: "UserSkill" */
  delete_UserSkill?: Maybe<UserSkill_Mutation_Response>;
  /** delete single row from the table: "UserSkill" */
  delete_UserSkill_by_pk?: Maybe<UserSkill>;
  /** delete single row from the table: "User" */
  delete_User_by_pk?: Maybe<User>;
  /** insert data into the table: "Circle" */
  insert_Circle?: Maybe<Circle_Mutation_Response>;
  /** insert data into the table: "CircleSkill" */
  insert_CircleSkill?: Maybe<CircleSkill_Mutation_Response>;
  /** insert a single row into the table: "CircleSkill" */
  insert_CircleSkill_one?: Maybe<CircleSkill>;
  /** insert data into the table: "CircleUser" */
  insert_CircleUser?: Maybe<CircleUser_Mutation_Response>;
  /** insert a single row into the table: "CircleUser" */
  insert_CircleUser_one?: Maybe<CircleUser>;
  /** insert a single row into the table: "Circle" */
  insert_Circle_one?: Maybe<Circle>;
  /** insert data into the table: "Message" */
  insert_Message?: Maybe<Message_Mutation_Response>;
  /** insert a single row into the table: "Message" */
  insert_Message_one?: Maybe<Message>;
  /** insert data into the table: "Organization" */
  insert_Organization?: Maybe<Organization_Mutation_Response>;
  /** insert a single row into the table: "Organization" */
  insert_Organization_one?: Maybe<Organization>;
  /** insert data into the table: "ParentCategory" */
  insert_ParentCategory?: Maybe<ParentCategory_Mutation_Response>;
  /** insert a single row into the table: "ParentCategory" */
  insert_ParentCategory_one?: Maybe<ParentCategory>;
  /** insert data into the table: "Skill" */
  insert_Skill?: Maybe<Skill_Mutation_Response>;
  /** insert a single row into the table: "Skill" */
  insert_Skill_one?: Maybe<Skill>;
  /** insert data into the table: "SubCategory" */
  insert_SubCategory?: Maybe<SubCategory_Mutation_Response>;
  /** insert a single row into the table: "SubCategory" */
  insert_SubCategory_one?: Maybe<SubCategory>;
  /** insert data into the table: "User" */
  insert_User?: Maybe<User_Mutation_Response>;
  /** insert data into the table: "UserSkill" */
  insert_UserSkill?: Maybe<UserSkill_Mutation_Response>;
  /** insert a single row into the table: "UserSkill" */
  insert_UserSkill_one?: Maybe<UserSkill>;
  /** insert a single row into the table: "User" */
  insert_User_one?: Maybe<User>;
  /** update data of the table: "Circle" */
  update_Circle?: Maybe<Circle_Mutation_Response>;
  /** update data of the table: "CircleSkill" */
  update_CircleSkill?: Maybe<CircleSkill_Mutation_Response>;
  /** update single row of the table: "CircleSkill" */
  update_CircleSkill_by_pk?: Maybe<CircleSkill>;
  /** update data of the table: "CircleUser" */
  update_CircleUser?: Maybe<CircleUser_Mutation_Response>;
  /** update single row of the table: "CircleUser" */
  update_CircleUser_by_pk?: Maybe<CircleUser>;
  /** update single row of the table: "Circle" */
  update_Circle_by_pk?: Maybe<Circle>;
  /** update data of the table: "Message" */
  update_Message?: Maybe<Message_Mutation_Response>;
  /** update single row of the table: "Message" */
  update_Message_by_pk?: Maybe<Message>;
  /** update data of the table: "Organization" */
  update_Organization?: Maybe<Organization_Mutation_Response>;
  /** update single row of the table: "Organization" */
  update_Organization_by_pk?: Maybe<Organization>;
  /** update data of the table: "ParentCategory" */
  update_ParentCategory?: Maybe<ParentCategory_Mutation_Response>;
  /** update single row of the table: "ParentCategory" */
  update_ParentCategory_by_pk?: Maybe<ParentCategory>;
  /** update data of the table: "Skill" */
  update_Skill?: Maybe<Skill_Mutation_Response>;
  /** update single row of the table: "Skill" */
  update_Skill_by_pk?: Maybe<Skill>;
  /** update data of the table: "SubCategory" */
  update_SubCategory?: Maybe<SubCategory_Mutation_Response>;
  /** update single row of the table: "SubCategory" */
  update_SubCategory_by_pk?: Maybe<SubCategory>;
  /** update data of the table: "User" */
  update_User?: Maybe<User_Mutation_Response>;
  /** update data of the table: "UserSkill" */
  update_UserSkill?: Maybe<UserSkill_Mutation_Response>;
  /** update single row of the table: "UserSkill" */
  update_UserSkill_by_pk?: Maybe<UserSkill>;
  /** update single row of the table: "User" */
  update_User_by_pk?: Maybe<User>;
};


/** mutation root */
export type Mutation_RootDelete_CircleArgs = {
  where: Circle_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_CircleSkillArgs = {
  where: CircleSkill_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_CircleSkill_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_CircleUserArgs = {
  where: CircleUser_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_CircleUser_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Circle_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_MessageArgs = {
  where: Message_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Message_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_OrganizationArgs = {
  where: Organization_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Organization_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_ParentCategoryArgs = {
  where: ParentCategory_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_ParentCategory_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_SkillArgs = {
  where: Skill_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Skill_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_SubCategoryArgs = {
  where: SubCategory_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_SubCategory_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_UserArgs = {
  where: User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_UserSkillArgs = {
  where: UserSkill_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_UserSkill_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_User_By_PkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootInsert_CircleArgs = {
  objects: Array<Circle_Insert_Input>;
  on_conflict?: Maybe<Circle_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_CircleSkillArgs = {
  objects: Array<CircleSkill_Insert_Input>;
  on_conflict?: Maybe<CircleSkill_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_CircleSkill_OneArgs = {
  object: CircleSkill_Insert_Input;
  on_conflict?: Maybe<CircleSkill_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_CircleUserArgs = {
  objects: Array<CircleUser_Insert_Input>;
  on_conflict?: Maybe<CircleUser_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_CircleUser_OneArgs = {
  object: CircleUser_Insert_Input;
  on_conflict?: Maybe<CircleUser_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Circle_OneArgs = {
  object: Circle_Insert_Input;
  on_conflict?: Maybe<Circle_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_MessageArgs = {
  objects: Array<Message_Insert_Input>;
  on_conflict?: Maybe<Message_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Message_OneArgs = {
  object: Message_Insert_Input;
  on_conflict?: Maybe<Message_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_OrganizationArgs = {
  objects: Array<Organization_Insert_Input>;
  on_conflict?: Maybe<Organization_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Organization_OneArgs = {
  object: Organization_Insert_Input;
  on_conflict?: Maybe<Organization_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ParentCategoryArgs = {
  objects: Array<ParentCategory_Insert_Input>;
  on_conflict?: Maybe<ParentCategory_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ParentCategory_OneArgs = {
  object: ParentCategory_Insert_Input;
  on_conflict?: Maybe<ParentCategory_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_SkillArgs = {
  objects: Array<Skill_Insert_Input>;
  on_conflict?: Maybe<Skill_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Skill_OneArgs = {
  object: Skill_Insert_Input;
  on_conflict?: Maybe<Skill_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_SubCategoryArgs = {
  objects: Array<SubCategory_Insert_Input>;
  on_conflict?: Maybe<SubCategory_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_SubCategory_OneArgs = {
  object: SubCategory_Insert_Input;
  on_conflict?: Maybe<SubCategory_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UserArgs = {
  objects: Array<User_Insert_Input>;
  on_conflict?: Maybe<User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UserSkillArgs = {
  objects: Array<UserSkill_Insert_Input>;
  on_conflict?: Maybe<UserSkill_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UserSkill_OneArgs = {
  object: UserSkill_Insert_Input;
  on_conflict?: Maybe<UserSkill_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_OneArgs = {
  object: User_Insert_Input;
  on_conflict?: Maybe<User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_CircleArgs = {
  _inc?: Maybe<Circle_Inc_Input>;
  _set?: Maybe<Circle_Set_Input>;
  where: Circle_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_CircleSkillArgs = {
  _inc?: Maybe<CircleSkill_Inc_Input>;
  _set?: Maybe<CircleSkill_Set_Input>;
  where: CircleSkill_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_CircleSkill_By_PkArgs = {
  _inc?: Maybe<CircleSkill_Inc_Input>;
  _set?: Maybe<CircleSkill_Set_Input>;
  pk_columns: CircleSkill_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_CircleUserArgs = {
  _inc?: Maybe<CircleUser_Inc_Input>;
  _set?: Maybe<CircleUser_Set_Input>;
  where: CircleUser_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_CircleUser_By_PkArgs = {
  _inc?: Maybe<CircleUser_Inc_Input>;
  _set?: Maybe<CircleUser_Set_Input>;
  pk_columns: CircleUser_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Circle_By_PkArgs = {
  _inc?: Maybe<Circle_Inc_Input>;
  _set?: Maybe<Circle_Set_Input>;
  pk_columns: Circle_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_MessageArgs = {
  _inc?: Maybe<Message_Inc_Input>;
  _set?: Maybe<Message_Set_Input>;
  where: Message_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Message_By_PkArgs = {
  _inc?: Maybe<Message_Inc_Input>;
  _set?: Maybe<Message_Set_Input>;
  pk_columns: Message_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_OrganizationArgs = {
  _inc?: Maybe<Organization_Inc_Input>;
  _set?: Maybe<Organization_Set_Input>;
  where: Organization_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Organization_By_PkArgs = {
  _inc?: Maybe<Organization_Inc_Input>;
  _set?: Maybe<Organization_Set_Input>;
  pk_columns: Organization_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_ParentCategoryArgs = {
  _inc?: Maybe<ParentCategory_Inc_Input>;
  _set?: Maybe<ParentCategory_Set_Input>;
  where: ParentCategory_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_ParentCategory_By_PkArgs = {
  _inc?: Maybe<ParentCategory_Inc_Input>;
  _set?: Maybe<ParentCategory_Set_Input>;
  pk_columns: ParentCategory_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_SkillArgs = {
  _inc?: Maybe<Skill_Inc_Input>;
  _set?: Maybe<Skill_Set_Input>;
  where: Skill_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Skill_By_PkArgs = {
  _inc?: Maybe<Skill_Inc_Input>;
  _set?: Maybe<Skill_Set_Input>;
  pk_columns: Skill_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_SubCategoryArgs = {
  _inc?: Maybe<SubCategory_Inc_Input>;
  _set?: Maybe<SubCategory_Set_Input>;
  where: SubCategory_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_SubCategory_By_PkArgs = {
  _inc?: Maybe<SubCategory_Inc_Input>;
  _set?: Maybe<SubCategory_Set_Input>;
  pk_columns: SubCategory_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_UserArgs = {
  _inc?: Maybe<User_Inc_Input>;
  _set?: Maybe<User_Set_Input>;
  where: User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_UserSkillArgs = {
  _inc?: Maybe<UserSkill_Inc_Input>;
  _set?: Maybe<UserSkill_Set_Input>;
  where: UserSkill_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_UserSkill_By_PkArgs = {
  _inc?: Maybe<UserSkill_Inc_Input>;
  _set?: Maybe<UserSkill_Set_Input>;
  pk_columns: UserSkill_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_User_By_PkArgs = {
  _inc?: Maybe<User_Inc_Input>;
  _set?: Maybe<User_Set_Input>;
  pk_columns: User_Pk_Columns_Input;
};

/** column ordering options */
export enum Order_By {
  /** in the ascending order, nulls last */
  Asc = 'asc',
  /** in the ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in the ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in the descending order, nulls first */
  Desc = 'desc',
  /** in the descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in the descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** query root */
export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "Circle" */
  Circle: Array<Circle>;
  /** fetch data from the table: "CircleSkill" */
  CircleSkill: Array<CircleSkill>;
  /** fetch aggregated fields from the table: "CircleSkill" */
  CircleSkill_aggregate: CircleSkill_Aggregate;
  /** fetch data from the table: "CircleSkill" using primary key columns */
  CircleSkill_by_pk?: Maybe<CircleSkill>;
  /** fetch data from the table: "CircleUser" */
  CircleUser: Array<CircleUser>;
  /** fetch aggregated fields from the table: "CircleUser" */
  CircleUser_aggregate: CircleUser_Aggregate;
  /** fetch data from the table: "CircleUser" using primary key columns */
  CircleUser_by_pk?: Maybe<CircleUser>;
  /** fetch aggregated fields from the table: "Circle" */
  Circle_aggregate: Circle_Aggregate;
  /** fetch data from the table: "Circle" using primary key columns */
  Circle_by_pk?: Maybe<Circle>;
  /** fetch data from the table: "Message" */
  Message: Array<Message>;
  /** fetch aggregated fields from the table: "Message" */
  Message_aggregate: Message_Aggregate;
  /** fetch data from the table: "Message" using primary key columns */
  Message_by_pk?: Maybe<Message>;
  /** fetch data from the table: "Organization" */
  Organization: Array<Organization>;
  /** fetch aggregated fields from the table: "Organization" */
  Organization_aggregate: Organization_Aggregate;
  /** fetch data from the table: "Organization" using primary key columns */
  Organization_by_pk?: Maybe<Organization>;
  /** fetch data from the table: "ParentCategory" */
  ParentCategory: Array<ParentCategory>;
  /** fetch aggregated fields from the table: "ParentCategory" */
  ParentCategory_aggregate: ParentCategory_Aggregate;
  /** fetch data from the table: "ParentCategory" using primary key columns */
  ParentCategory_by_pk?: Maybe<ParentCategory>;
  /** fetch data from the table: "Skill" */
  Skill: Array<Skill>;
  /** fetch aggregated fields from the table: "Skill" */
  Skill_aggregate: Skill_Aggregate;
  /** fetch data from the table: "Skill" using primary key columns */
  Skill_by_pk?: Maybe<Skill>;
  /** fetch data from the table: "SubCategory" */
  SubCategory: Array<SubCategory>;
  /** fetch aggregated fields from the table: "SubCategory" */
  SubCategory_aggregate: SubCategory_Aggregate;
  /** fetch data from the table: "SubCategory" using primary key columns */
  SubCategory_by_pk?: Maybe<SubCategory>;
  /** fetch data from the table: "User" */
  User: Array<User>;
  /** fetch data from the table: "UserSkill" */
  UserSkill: Array<UserSkill>;
  /** fetch aggregated fields from the table: "UserSkill" */
  UserSkill_aggregate: UserSkill_Aggregate;
  /** fetch data from the table: "UserSkill" using primary key columns */
  UserSkill_by_pk?: Maybe<UserSkill>;
  /** fetch aggregated fields from the table: "User" */
  User_aggregate: User_Aggregate;
  /** fetch data from the table: "User" using primary key columns */
  User_by_pk?: Maybe<User>;
};


/** query root */
export type Query_RootCircleArgs = {
  distinct_on?: Maybe<Array<Circle_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Circle_Order_By>>;
  where?: Maybe<Circle_Bool_Exp>;
};


/** query root */
export type Query_RootCircleSkillArgs = {
  distinct_on?: Maybe<Array<CircleSkill_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<CircleSkill_Order_By>>;
  where?: Maybe<CircleSkill_Bool_Exp>;
};


/** query root */
export type Query_RootCircleSkill_AggregateArgs = {
  distinct_on?: Maybe<Array<CircleSkill_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<CircleSkill_Order_By>>;
  where?: Maybe<CircleSkill_Bool_Exp>;
};


/** query root */
export type Query_RootCircleSkill_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootCircleUserArgs = {
  distinct_on?: Maybe<Array<CircleUser_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<CircleUser_Order_By>>;
  where?: Maybe<CircleUser_Bool_Exp>;
};


/** query root */
export type Query_RootCircleUser_AggregateArgs = {
  distinct_on?: Maybe<Array<CircleUser_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<CircleUser_Order_By>>;
  where?: Maybe<CircleUser_Bool_Exp>;
};


/** query root */
export type Query_RootCircleUser_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootCircle_AggregateArgs = {
  distinct_on?: Maybe<Array<Circle_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Circle_Order_By>>;
  where?: Maybe<Circle_Bool_Exp>;
};


/** query root */
export type Query_RootCircle_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootMessageArgs = {
  distinct_on?: Maybe<Array<Message_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Message_Order_By>>;
  where?: Maybe<Message_Bool_Exp>;
};


/** query root */
export type Query_RootMessage_AggregateArgs = {
  distinct_on?: Maybe<Array<Message_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Message_Order_By>>;
  where?: Maybe<Message_Bool_Exp>;
};


/** query root */
export type Query_RootMessage_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootOrganizationArgs = {
  distinct_on?: Maybe<Array<Organization_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Organization_Order_By>>;
  where?: Maybe<Organization_Bool_Exp>;
};


/** query root */
export type Query_RootOrganization_AggregateArgs = {
  distinct_on?: Maybe<Array<Organization_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Organization_Order_By>>;
  where?: Maybe<Organization_Bool_Exp>;
};


/** query root */
export type Query_RootOrganization_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootParentCategoryArgs = {
  distinct_on?: Maybe<Array<ParentCategory_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ParentCategory_Order_By>>;
  where?: Maybe<ParentCategory_Bool_Exp>;
};


/** query root */
export type Query_RootParentCategory_AggregateArgs = {
  distinct_on?: Maybe<Array<ParentCategory_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ParentCategory_Order_By>>;
  where?: Maybe<ParentCategory_Bool_Exp>;
};


/** query root */
export type Query_RootParentCategory_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootSkillArgs = {
  distinct_on?: Maybe<Array<Skill_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Skill_Order_By>>;
  where?: Maybe<Skill_Bool_Exp>;
};


/** query root */
export type Query_RootSkill_AggregateArgs = {
  distinct_on?: Maybe<Array<Skill_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Skill_Order_By>>;
  where?: Maybe<Skill_Bool_Exp>;
};


/** query root */
export type Query_RootSkill_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootSubCategoryArgs = {
  distinct_on?: Maybe<Array<SubCategory_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<SubCategory_Order_By>>;
  where?: Maybe<SubCategory_Bool_Exp>;
};


/** query root */
export type Query_RootSubCategory_AggregateArgs = {
  distinct_on?: Maybe<Array<SubCategory_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<SubCategory_Order_By>>;
  where?: Maybe<SubCategory_Bool_Exp>;
};


/** query root */
export type Query_RootSubCategory_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootUserArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};


/** query root */
export type Query_RootUserSkillArgs = {
  distinct_on?: Maybe<Array<UserSkill_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<UserSkill_Order_By>>;
  where?: Maybe<UserSkill_Bool_Exp>;
};


/** query root */
export type Query_RootUserSkill_AggregateArgs = {
  distinct_on?: Maybe<Array<UserSkill_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<UserSkill_Order_By>>;
  where?: Maybe<UserSkill_Bool_Exp>;
};


/** query root */
export type Query_RootUserSkill_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootUser_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};


/** query root */
export type Query_RootUser_By_PkArgs = {
  id: Scalars['String'];
};

/** subscription root */
export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "Circle" */
  Circle: Array<Circle>;
  /** fetch data from the table: "CircleSkill" */
  CircleSkill: Array<CircleSkill>;
  /** fetch aggregated fields from the table: "CircleSkill" */
  CircleSkill_aggregate: CircleSkill_Aggregate;
  /** fetch data from the table: "CircleSkill" using primary key columns */
  CircleSkill_by_pk?: Maybe<CircleSkill>;
  /** fetch data from the table: "CircleUser" */
  CircleUser: Array<CircleUser>;
  /** fetch aggregated fields from the table: "CircleUser" */
  CircleUser_aggregate: CircleUser_Aggregate;
  /** fetch data from the table: "CircleUser" using primary key columns */
  CircleUser_by_pk?: Maybe<CircleUser>;
  /** fetch aggregated fields from the table: "Circle" */
  Circle_aggregate: Circle_Aggregate;
  /** fetch data from the table: "Circle" using primary key columns */
  Circle_by_pk?: Maybe<Circle>;
  /** fetch data from the table: "Message" */
  Message: Array<Message>;
  /** fetch aggregated fields from the table: "Message" */
  Message_aggregate: Message_Aggregate;
  /** fetch data from the table: "Message" using primary key columns */
  Message_by_pk?: Maybe<Message>;
  /** fetch data from the table: "Organization" */
  Organization: Array<Organization>;
  /** fetch aggregated fields from the table: "Organization" */
  Organization_aggregate: Organization_Aggregate;
  /** fetch data from the table: "Organization" using primary key columns */
  Organization_by_pk?: Maybe<Organization>;
  /** fetch data from the table: "ParentCategory" */
  ParentCategory: Array<ParentCategory>;
  /** fetch aggregated fields from the table: "ParentCategory" */
  ParentCategory_aggregate: ParentCategory_Aggregate;
  /** fetch data from the table: "ParentCategory" using primary key columns */
  ParentCategory_by_pk?: Maybe<ParentCategory>;
  /** fetch data from the table: "Skill" */
  Skill: Array<Skill>;
  /** fetch aggregated fields from the table: "Skill" */
  Skill_aggregate: Skill_Aggregate;
  /** fetch data from the table: "Skill" using primary key columns */
  Skill_by_pk?: Maybe<Skill>;
  /** fetch data from the table: "SubCategory" */
  SubCategory: Array<SubCategory>;
  /** fetch aggregated fields from the table: "SubCategory" */
  SubCategory_aggregate: SubCategory_Aggregate;
  /** fetch data from the table: "SubCategory" using primary key columns */
  SubCategory_by_pk?: Maybe<SubCategory>;
  /** fetch data from the table: "User" */
  User: Array<User>;
  /** fetch data from the table: "UserSkill" */
  UserSkill: Array<UserSkill>;
  /** fetch aggregated fields from the table: "UserSkill" */
  UserSkill_aggregate: UserSkill_Aggregate;
  /** fetch data from the table: "UserSkill" using primary key columns */
  UserSkill_by_pk?: Maybe<UserSkill>;
  /** fetch aggregated fields from the table: "User" */
  User_aggregate: User_Aggregate;
  /** fetch data from the table: "User" using primary key columns */
  User_by_pk?: Maybe<User>;
};


/** subscription root */
export type Subscription_RootCircleArgs = {
  distinct_on?: Maybe<Array<Circle_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Circle_Order_By>>;
  where?: Maybe<Circle_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootCircleSkillArgs = {
  distinct_on?: Maybe<Array<CircleSkill_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<CircleSkill_Order_By>>;
  where?: Maybe<CircleSkill_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootCircleSkill_AggregateArgs = {
  distinct_on?: Maybe<Array<CircleSkill_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<CircleSkill_Order_By>>;
  where?: Maybe<CircleSkill_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootCircleSkill_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootCircleUserArgs = {
  distinct_on?: Maybe<Array<CircleUser_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<CircleUser_Order_By>>;
  where?: Maybe<CircleUser_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootCircleUser_AggregateArgs = {
  distinct_on?: Maybe<Array<CircleUser_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<CircleUser_Order_By>>;
  where?: Maybe<CircleUser_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootCircleUser_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootCircle_AggregateArgs = {
  distinct_on?: Maybe<Array<Circle_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Circle_Order_By>>;
  where?: Maybe<Circle_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootCircle_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootMessageArgs = {
  distinct_on?: Maybe<Array<Message_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Message_Order_By>>;
  where?: Maybe<Message_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootMessage_AggregateArgs = {
  distinct_on?: Maybe<Array<Message_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Message_Order_By>>;
  where?: Maybe<Message_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootMessage_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootOrganizationArgs = {
  distinct_on?: Maybe<Array<Organization_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Organization_Order_By>>;
  where?: Maybe<Organization_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootOrganization_AggregateArgs = {
  distinct_on?: Maybe<Array<Organization_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Organization_Order_By>>;
  where?: Maybe<Organization_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootOrganization_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootParentCategoryArgs = {
  distinct_on?: Maybe<Array<ParentCategory_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ParentCategory_Order_By>>;
  where?: Maybe<ParentCategory_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootParentCategory_AggregateArgs = {
  distinct_on?: Maybe<Array<ParentCategory_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ParentCategory_Order_By>>;
  where?: Maybe<ParentCategory_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootParentCategory_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootSkillArgs = {
  distinct_on?: Maybe<Array<Skill_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Skill_Order_By>>;
  where?: Maybe<Skill_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootSkill_AggregateArgs = {
  distinct_on?: Maybe<Array<Skill_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Skill_Order_By>>;
  where?: Maybe<Skill_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootSkill_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootSubCategoryArgs = {
  distinct_on?: Maybe<Array<SubCategory_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<SubCategory_Order_By>>;
  where?: Maybe<SubCategory_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootSubCategory_AggregateArgs = {
  distinct_on?: Maybe<Array<SubCategory_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<SubCategory_Order_By>>;
  where?: Maybe<SubCategory_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootSubCategory_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootUserArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootUserSkillArgs = {
  distinct_on?: Maybe<Array<UserSkill_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<UserSkill_Order_By>>;
  where?: Maybe<UserSkill_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootUserSkill_AggregateArgs = {
  distinct_on?: Maybe<Array<UserSkill_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<UserSkill_Order_By>>;
  where?: Maybe<UserSkill_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootUserSkill_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootUser_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootUser_By_PkArgs = {
  id: Scalars['String'];
};


/** expression to compare columns of type timestamptz. All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: Maybe<Scalars['timestamptz']>;
  _gt?: Maybe<Scalars['timestamptz']>;
  _gte?: Maybe<Scalars['timestamptz']>;
  _in?: Maybe<Array<Scalars['timestamptz']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['timestamptz']>;
  _lte?: Maybe<Scalars['timestamptz']>;
  _neq?: Maybe<Scalars['timestamptz']>;
  _nin?: Maybe<Array<Scalars['timestamptz']>>;
};

export type InsertCircleMutationVariables = Exact<{
  objects: Array<Circle_Insert_Input>;
}>;


export type InsertCircleMutation = (
  { __typename?: 'mutation_root' }
  & { insert_Circle?: Maybe<(
    { __typename?: 'Circle_mutation_response' }
    & Pick<Circle_Mutation_Response, 'affected_rows'>
  )> }
);

export type CircleQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type CircleQuery = (
  { __typename?: 'query_root' }
  & { Circle_by_pk?: Maybe<(
    { __typename?: 'Circle' }
    & Pick<Circle, 'id' | 'avatar' | 'name' | 'main_role' | 'what_we_will_do' | 'recruit_title'>
    & { User?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'id'>
    )>, SubCategory?: Maybe<(
      { __typename?: 'SubCategory' }
      & Pick<SubCategory, 'name' | 'id'>
    )> }
  )> }
);

export type SkillAndSubCategoryQueryVariables = Exact<{ [key: string]: never; }>;


export type SkillAndSubCategoryQuery = (
  { __typename?: 'query_root' }
  & { Skill: Array<(
    { __typename?: 'Skill' }
    & Pick<Skill, 'id' | 'avatar' | 'name'>
  )>, SubCategory: Array<(
    { __typename?: 'SubCategory' }
    & Pick<SubCategory, 'id' | 'name'>
  )> }
);

export type UsersQueryVariables = Exact<{ [key: string]: never; }>;


export type UsersQuery = (
  { __typename?: 'query_root' }
  & { User: Array<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'name'>
  )> }
);

export type CirclesQueryVariables = Exact<{ [key: string]: never; }>;


export type CirclesQuery = (
  { __typename?: 'query_root' }
  & { Circle: Array<(
    { __typename?: 'Circle' }
    & Pick<Circle, 'id' | 'name' | 'recruit_title' | 'avatar' | 'what_we_will_do' | 'main_role'>
  )> }
);


export const InsertCircleDocument = gql`
    mutation InsertCircle($objects: [Circle_insert_input!]!) {
  insert_Circle(objects: $objects) {
    affected_rows
  }
}
    `;
export type InsertCircleMutationFn = Apollo.MutationFunction<InsertCircleMutation, InsertCircleMutationVariables>;

/**
 * __useInsertCircleMutation__
 *
 * To run a mutation, you first call `useInsertCircleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertCircleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertCircleMutation, { data, loading, error }] = useInsertCircleMutation({
 *   variables: {
 *      objects: // value for 'objects'
 *   },
 * });
 */
export function useInsertCircleMutation(baseOptions?: Apollo.MutationHookOptions<InsertCircleMutation, InsertCircleMutationVariables>) {
        return Apollo.useMutation<InsertCircleMutation, InsertCircleMutationVariables>(InsertCircleDocument, baseOptions);
      }
export type InsertCircleMutationHookResult = ReturnType<typeof useInsertCircleMutation>;
export type InsertCircleMutationResult = Apollo.MutationResult<InsertCircleMutation>;
export type InsertCircleMutationOptions = Apollo.BaseMutationOptions<InsertCircleMutation, InsertCircleMutationVariables>;
export const CircleDocument = gql`
    query Circle($id: Int!) {
  Circle_by_pk(id: $id) {
    id
    avatar
    name
    main_role
    what_we_will_do
    recruit_title
    User {
      id
    }
    SubCategory {
      name
      id
    }
  }
}
    `;

/**
 * __useCircleQuery__
 *
 * To run a query within a React component, call `useCircleQuery` and pass it any options that fit your needs.
 * When your component renders, `useCircleQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCircleQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useCircleQuery(baseOptions?: Apollo.QueryHookOptions<CircleQuery, CircleQueryVariables>) {
        return Apollo.useQuery<CircleQuery, CircleQueryVariables>(CircleDocument, baseOptions);
      }
export function useCircleLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CircleQuery, CircleQueryVariables>) {
          return Apollo.useLazyQuery<CircleQuery, CircleQueryVariables>(CircleDocument, baseOptions);
        }
export type CircleQueryHookResult = ReturnType<typeof useCircleQuery>;
export type CircleLazyQueryHookResult = ReturnType<typeof useCircleLazyQuery>;
export type CircleQueryResult = Apollo.QueryResult<CircleQuery, CircleQueryVariables>;
export const SkillAndSubCategoryDocument = gql`
    query SkillAndSubCategory {
  Skill {
    id
    avatar
    name
  }
  SubCategory {
    id
    name
  }
}
    `;

/**
 * __useSkillAndSubCategoryQuery__
 *
 * To run a query within a React component, call `useSkillAndSubCategoryQuery` and pass it any options that fit your needs.
 * When your component renders, `useSkillAndSubCategoryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSkillAndSubCategoryQuery({
 *   variables: {
 *   },
 * });
 */
export function useSkillAndSubCategoryQuery(baseOptions?: Apollo.QueryHookOptions<SkillAndSubCategoryQuery, SkillAndSubCategoryQueryVariables>) {
        return Apollo.useQuery<SkillAndSubCategoryQuery, SkillAndSubCategoryQueryVariables>(SkillAndSubCategoryDocument, baseOptions);
      }
export function useSkillAndSubCategoryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SkillAndSubCategoryQuery, SkillAndSubCategoryQueryVariables>) {
          return Apollo.useLazyQuery<SkillAndSubCategoryQuery, SkillAndSubCategoryQueryVariables>(SkillAndSubCategoryDocument, baseOptions);
        }
export type SkillAndSubCategoryQueryHookResult = ReturnType<typeof useSkillAndSubCategoryQuery>;
export type SkillAndSubCategoryLazyQueryHookResult = ReturnType<typeof useSkillAndSubCategoryLazyQuery>;
export type SkillAndSubCategoryQueryResult = Apollo.QueryResult<SkillAndSubCategoryQuery, SkillAndSubCategoryQueryVariables>;
export const UsersDocument = gql`
    query Users {
  User {
    id
    name
  }
}
    `;

/**
 * __useUsersQuery__
 *
 * To run a query within a React component, call `useUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useUsersQuery(baseOptions?: Apollo.QueryHookOptions<UsersQuery, UsersQueryVariables>) {
        return Apollo.useQuery<UsersQuery, UsersQueryVariables>(UsersDocument, baseOptions);
      }
export function useUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UsersQuery, UsersQueryVariables>) {
          return Apollo.useLazyQuery<UsersQuery, UsersQueryVariables>(UsersDocument, baseOptions);
        }
export type UsersQueryHookResult = ReturnType<typeof useUsersQuery>;
export type UsersLazyQueryHookResult = ReturnType<typeof useUsersLazyQuery>;
export type UsersQueryResult = Apollo.QueryResult<UsersQuery, UsersQueryVariables>;
export const CirclesDocument = gql`
    query Circles {
  Circle {
    id
    name
    recruit_title
    avatar
    what_we_will_do
    main_role
  }
}
    `;

/**
 * __useCirclesQuery__
 *
 * To run a query within a React component, call `useCirclesQuery` and pass it any options that fit your needs.
 * When your component renders, `useCirclesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCirclesQuery({
 *   variables: {
 *   },
 * });
 */
export function useCirclesQuery(baseOptions?: Apollo.QueryHookOptions<CirclesQuery, CirclesQueryVariables>) {
        return Apollo.useQuery<CirclesQuery, CirclesQueryVariables>(CirclesDocument, baseOptions);
      }
export function useCirclesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CirclesQuery, CirclesQueryVariables>) {
          return Apollo.useLazyQuery<CirclesQuery, CirclesQueryVariables>(CirclesDocument, baseOptions);
        }
export type CirclesQueryHookResult = ReturnType<typeof useCirclesQuery>;
export type CirclesLazyQueryHookResult = ReturnType<typeof useCirclesLazyQuery>;
export type CirclesQueryResult = Apollo.QueryResult<CirclesQuery, CirclesQueryVariables>;