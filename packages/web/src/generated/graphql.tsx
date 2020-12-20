import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  timestamptz: any;
};

/** expression to compare columns of type Int. All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: Maybe<Scalars["Int"]>;
  _gt?: Maybe<Scalars["Int"]>;
  _gte?: Maybe<Scalars["Int"]>;
  _in?: Maybe<Array<Scalars["Int"]>>;
  _is_null?: Maybe<Scalars["Boolean"]>;
  _lt?: Maybe<Scalars["Int"]>;
  _lte?: Maybe<Scalars["Int"]>;
  _neq?: Maybe<Scalars["Int"]>;
  _nin?: Maybe<Array<Scalars["Int"]>>;
};

/** expression to compare columns of type String. All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars["String"]>;
  _gt?: Maybe<Scalars["String"]>;
  _gte?: Maybe<Scalars["String"]>;
  _ilike?: Maybe<Scalars["String"]>;
  _in?: Maybe<Array<Scalars["String"]>>;
  _is_null?: Maybe<Scalars["Boolean"]>;
  _like?: Maybe<Scalars["String"]>;
  _lt?: Maybe<Scalars["String"]>;
  _lte?: Maybe<Scalars["String"]>;
  _neq?: Maybe<Scalars["String"]>;
  _nilike?: Maybe<Scalars["String"]>;
  _nin?: Maybe<Array<Scalars["String"]>>;
  _nlike?: Maybe<Scalars["String"]>;
  _nsimilar?: Maybe<Scalars["String"]>;
  _similar?: Maybe<Scalars["String"]>;
};

/** columns and relationships of "circle_skills" */
export type Circle_Skills = {
  __typename?: "circle_skills";
  /** An object relationship */
  circle: Circles;
  circleId: Scalars["Int"];
  id: Scalars["Int"];
  /** An object relationship */
  skill: Skills;
  skillId: Scalars["Int"];
};

/** aggregated selection of "circle_skills" */
export type Circle_Skills_Aggregate = {
  __typename?: "circle_skills_aggregate";
  aggregate?: Maybe<Circle_Skills_Aggregate_Fields>;
  nodes: Array<Circle_Skills>;
};

/** aggregate fields of "circle_skills" */
export type Circle_Skills_Aggregate_Fields = {
  __typename?: "circle_skills_aggregate_fields";
  avg?: Maybe<Circle_Skills_Avg_Fields>;
  count?: Maybe<Scalars["Int"]>;
  max?: Maybe<Circle_Skills_Max_Fields>;
  min?: Maybe<Circle_Skills_Min_Fields>;
  stddev?: Maybe<Circle_Skills_Stddev_Fields>;
  stddev_pop?: Maybe<Circle_Skills_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Circle_Skills_Stddev_Samp_Fields>;
  sum?: Maybe<Circle_Skills_Sum_Fields>;
  var_pop?: Maybe<Circle_Skills_Var_Pop_Fields>;
  var_samp?: Maybe<Circle_Skills_Var_Samp_Fields>;
  variance?: Maybe<Circle_Skills_Variance_Fields>;
};

/** aggregate fields of "circle_skills" */
export type Circle_Skills_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Circle_Skills_Select_Column>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "circle_skills" */
export type Circle_Skills_Aggregate_Order_By = {
  avg?: Maybe<Circle_Skills_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Circle_Skills_Max_Order_By>;
  min?: Maybe<Circle_Skills_Min_Order_By>;
  stddev?: Maybe<Circle_Skills_Stddev_Order_By>;
  stddev_pop?: Maybe<Circle_Skills_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Circle_Skills_Stddev_Samp_Order_By>;
  sum?: Maybe<Circle_Skills_Sum_Order_By>;
  var_pop?: Maybe<Circle_Skills_Var_Pop_Order_By>;
  var_samp?: Maybe<Circle_Skills_Var_Samp_Order_By>;
  variance?: Maybe<Circle_Skills_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "circle_skills" */
export type Circle_Skills_Arr_Rel_Insert_Input = {
  data: Array<Circle_Skills_Insert_Input>;
  on_conflict?: Maybe<Circle_Skills_On_Conflict>;
};

/** aggregate avg on columns */
export type Circle_Skills_Avg_Fields = {
  __typename?: "circle_skills_avg_fields";
  circleId?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  skillId?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "circle_skills" */
export type Circle_Skills_Avg_Order_By = {
  circleId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  skillId?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "circle_skills". All fields are combined with a logical 'AND'. */
export type Circle_Skills_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Circle_Skills_Bool_Exp>>>;
  _not?: Maybe<Circle_Skills_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Circle_Skills_Bool_Exp>>>;
  circle?: Maybe<Circles_Bool_Exp>;
  circleId?: Maybe<Int_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  skill?: Maybe<Skills_Bool_Exp>;
  skillId?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "circle_skills" */
export enum Circle_Skills_Constraint {
  /** unique or primary key constraint */
  CircleSkillsPkey = "circle_skills_pkey",
}

/** input type for incrementing integer column in table "circle_skills" */
export type Circle_Skills_Inc_Input = {
  circleId?: Maybe<Scalars["Int"]>;
  id?: Maybe<Scalars["Int"]>;
  skillId?: Maybe<Scalars["Int"]>;
};

/** input type for inserting data into table "circle_skills" */
export type Circle_Skills_Insert_Input = {
  circle?: Maybe<Circles_Obj_Rel_Insert_Input>;
  circleId?: Maybe<Scalars["Int"]>;
  id?: Maybe<Scalars["Int"]>;
  skill?: Maybe<Skills_Obj_Rel_Insert_Input>;
  skillId?: Maybe<Scalars["Int"]>;
};

/** aggregate max on columns */
export type Circle_Skills_Max_Fields = {
  __typename?: "circle_skills_max_fields";
  circleId?: Maybe<Scalars["Int"]>;
  id?: Maybe<Scalars["Int"]>;
  skillId?: Maybe<Scalars["Int"]>;
};

/** order by max() on columns of table "circle_skills" */
export type Circle_Skills_Max_Order_By = {
  circleId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  skillId?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Circle_Skills_Min_Fields = {
  __typename?: "circle_skills_min_fields";
  circleId?: Maybe<Scalars["Int"]>;
  id?: Maybe<Scalars["Int"]>;
  skillId?: Maybe<Scalars["Int"]>;
};

/** order by min() on columns of table "circle_skills" */
export type Circle_Skills_Min_Order_By = {
  circleId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  skillId?: Maybe<Order_By>;
};

/** response of any mutation on the table "circle_skills" */
export type Circle_Skills_Mutation_Response = {
  __typename?: "circle_skills_mutation_response";
  /** number of affected rows by the mutation */
  affected_rows: Scalars["Int"];
  /** data of the affected rows by the mutation */
  returning: Array<Circle_Skills>;
};

/** input type for inserting object relation for remote table "circle_skills" */
export type Circle_Skills_Obj_Rel_Insert_Input = {
  data: Circle_Skills_Insert_Input;
  on_conflict?: Maybe<Circle_Skills_On_Conflict>;
};

/** on conflict condition type for table "circle_skills" */
export type Circle_Skills_On_Conflict = {
  constraint: Circle_Skills_Constraint;
  update_columns: Array<Circle_Skills_Update_Column>;
  where?: Maybe<Circle_Skills_Bool_Exp>;
};

/** ordering options when selecting data from "circle_skills" */
export type Circle_Skills_Order_By = {
  circle?: Maybe<Circles_Order_By>;
  circleId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  skill?: Maybe<Skills_Order_By>;
  skillId?: Maybe<Order_By>;
};

/** primary key columns input for table: "circle_skills" */
export type Circle_Skills_Pk_Columns_Input = {
  id: Scalars["Int"];
};

/** select columns of table "circle_skills" */
export enum Circle_Skills_Select_Column {
  /** column name */
  CircleId = "circleId",
  /** column name */
  Id = "id",
  /** column name */
  SkillId = "skillId",
}

/** input type for updating data in table "circle_skills" */
export type Circle_Skills_Set_Input = {
  circleId?: Maybe<Scalars["Int"]>;
  id?: Maybe<Scalars["Int"]>;
  skillId?: Maybe<Scalars["Int"]>;
};

/** aggregate stddev on columns */
export type Circle_Skills_Stddev_Fields = {
  __typename?: "circle_skills_stddev_fields";
  circleId?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  skillId?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "circle_skills" */
export type Circle_Skills_Stddev_Order_By = {
  circleId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  skillId?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Circle_Skills_Stddev_Pop_Fields = {
  __typename?: "circle_skills_stddev_pop_fields";
  circleId?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  skillId?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "circle_skills" */
export type Circle_Skills_Stddev_Pop_Order_By = {
  circleId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  skillId?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Circle_Skills_Stddev_Samp_Fields = {
  __typename?: "circle_skills_stddev_samp_fields";
  circleId?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  skillId?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "circle_skills" */
export type Circle_Skills_Stddev_Samp_Order_By = {
  circleId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  skillId?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Circle_Skills_Sum_Fields = {
  __typename?: "circle_skills_sum_fields";
  circleId?: Maybe<Scalars["Int"]>;
  id?: Maybe<Scalars["Int"]>;
  skillId?: Maybe<Scalars["Int"]>;
};

/** order by sum() on columns of table "circle_skills" */
export type Circle_Skills_Sum_Order_By = {
  circleId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  skillId?: Maybe<Order_By>;
};

/** update columns of table "circle_skills" */
export enum Circle_Skills_Update_Column {
  /** column name */
  CircleId = "circleId",
  /** column name */
  Id = "id",
  /** column name */
  SkillId = "skillId",
}

/** aggregate var_pop on columns */
export type Circle_Skills_Var_Pop_Fields = {
  __typename?: "circle_skills_var_pop_fields";
  circleId?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  skillId?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "circle_skills" */
export type Circle_Skills_Var_Pop_Order_By = {
  circleId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  skillId?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Circle_Skills_Var_Samp_Fields = {
  __typename?: "circle_skills_var_samp_fields";
  circleId?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  skillId?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "circle_skills" */
export type Circle_Skills_Var_Samp_Order_By = {
  circleId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  skillId?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Circle_Skills_Variance_Fields = {
  __typename?: "circle_skills_variance_fields";
  circleId?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  skillId?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "circle_skills" */
export type Circle_Skills_Variance_Order_By = {
  circleId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  skillId?: Maybe<Order_By>;
};

/** columns and relationships of "circle_users" */
export type Circle_Users = {
  __typename?: "circle_users";
  /** An object relationship */
  circle: Circles;
  circleId: Scalars["Int"];
  id: Scalars["Int"];
  /** An object relationship */
  user: Users;
  userId: Scalars["String"];
};

/** aggregated selection of "circle_users" */
export type Circle_Users_Aggregate = {
  __typename?: "circle_users_aggregate";
  aggregate?: Maybe<Circle_Users_Aggregate_Fields>;
  nodes: Array<Circle_Users>;
};

/** aggregate fields of "circle_users" */
export type Circle_Users_Aggregate_Fields = {
  __typename?: "circle_users_aggregate_fields";
  avg?: Maybe<Circle_Users_Avg_Fields>;
  count?: Maybe<Scalars["Int"]>;
  max?: Maybe<Circle_Users_Max_Fields>;
  min?: Maybe<Circle_Users_Min_Fields>;
  stddev?: Maybe<Circle_Users_Stddev_Fields>;
  stddev_pop?: Maybe<Circle_Users_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Circle_Users_Stddev_Samp_Fields>;
  sum?: Maybe<Circle_Users_Sum_Fields>;
  var_pop?: Maybe<Circle_Users_Var_Pop_Fields>;
  var_samp?: Maybe<Circle_Users_Var_Samp_Fields>;
  variance?: Maybe<Circle_Users_Variance_Fields>;
};

/** aggregate fields of "circle_users" */
export type Circle_Users_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Circle_Users_Select_Column>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "circle_users" */
export type Circle_Users_Aggregate_Order_By = {
  avg?: Maybe<Circle_Users_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Circle_Users_Max_Order_By>;
  min?: Maybe<Circle_Users_Min_Order_By>;
  stddev?: Maybe<Circle_Users_Stddev_Order_By>;
  stddev_pop?: Maybe<Circle_Users_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Circle_Users_Stddev_Samp_Order_By>;
  sum?: Maybe<Circle_Users_Sum_Order_By>;
  var_pop?: Maybe<Circle_Users_Var_Pop_Order_By>;
  var_samp?: Maybe<Circle_Users_Var_Samp_Order_By>;
  variance?: Maybe<Circle_Users_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "circle_users" */
export type Circle_Users_Arr_Rel_Insert_Input = {
  data: Array<Circle_Users_Insert_Input>;
  on_conflict?: Maybe<Circle_Users_On_Conflict>;
};

/** aggregate avg on columns */
export type Circle_Users_Avg_Fields = {
  __typename?: "circle_users_avg_fields";
  circleId?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "circle_users" */
export type Circle_Users_Avg_Order_By = {
  circleId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "circle_users". All fields are combined with a logical 'AND'. */
export type Circle_Users_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Circle_Users_Bool_Exp>>>;
  _not?: Maybe<Circle_Users_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Circle_Users_Bool_Exp>>>;
  circle?: Maybe<Circles_Bool_Exp>;
  circleId?: Maybe<Int_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  user?: Maybe<Users_Bool_Exp>;
  userId?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "circle_users" */
export enum Circle_Users_Constraint {
  /** unique or primary key constraint */
  RoomUserPkey = "RoomUser_pkey",
}

/** input type for incrementing integer column in table "circle_users" */
export type Circle_Users_Inc_Input = {
  circleId?: Maybe<Scalars["Int"]>;
  id?: Maybe<Scalars["Int"]>;
};

/** input type for inserting data into table "circle_users" */
export type Circle_Users_Insert_Input = {
  circle?: Maybe<Circles_Obj_Rel_Insert_Input>;
  circleId?: Maybe<Scalars["Int"]>;
  id?: Maybe<Scalars["Int"]>;
  user?: Maybe<Users_Obj_Rel_Insert_Input>;
  userId?: Maybe<Scalars["String"]>;
};

/** aggregate max on columns */
export type Circle_Users_Max_Fields = {
  __typename?: "circle_users_max_fields";
  circleId?: Maybe<Scalars["Int"]>;
  id?: Maybe<Scalars["Int"]>;
  userId?: Maybe<Scalars["String"]>;
};

/** order by max() on columns of table "circle_users" */
export type Circle_Users_Max_Order_By = {
  circleId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Circle_Users_Min_Fields = {
  __typename?: "circle_users_min_fields";
  circleId?: Maybe<Scalars["Int"]>;
  id?: Maybe<Scalars["Int"]>;
  userId?: Maybe<Scalars["String"]>;
};

/** order by min() on columns of table "circle_users" */
export type Circle_Users_Min_Order_By = {
  circleId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** response of any mutation on the table "circle_users" */
export type Circle_Users_Mutation_Response = {
  __typename?: "circle_users_mutation_response";
  /** number of affected rows by the mutation */
  affected_rows: Scalars["Int"];
  /** data of the affected rows by the mutation */
  returning: Array<Circle_Users>;
};

/** input type for inserting object relation for remote table "circle_users" */
export type Circle_Users_Obj_Rel_Insert_Input = {
  data: Circle_Users_Insert_Input;
  on_conflict?: Maybe<Circle_Users_On_Conflict>;
};

/** on conflict condition type for table "circle_users" */
export type Circle_Users_On_Conflict = {
  constraint: Circle_Users_Constraint;
  update_columns: Array<Circle_Users_Update_Column>;
  where?: Maybe<Circle_Users_Bool_Exp>;
};

/** ordering options when selecting data from "circle_users" */
export type Circle_Users_Order_By = {
  circle?: Maybe<Circles_Order_By>;
  circleId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  user?: Maybe<Users_Order_By>;
  userId?: Maybe<Order_By>;
};

/** primary key columns input for table: "circle_users" */
export type Circle_Users_Pk_Columns_Input = {
  id: Scalars["Int"];
};

/** select columns of table "circle_users" */
export enum Circle_Users_Select_Column {
  /** column name */
  CircleId = "circleId",
  /** column name */
  Id = "id",
  /** column name */
  UserId = "userId",
}

/** input type for updating data in table "circle_users" */
export type Circle_Users_Set_Input = {
  circleId?: Maybe<Scalars["Int"]>;
  id?: Maybe<Scalars["Int"]>;
  userId?: Maybe<Scalars["String"]>;
};

/** aggregate stddev on columns */
export type Circle_Users_Stddev_Fields = {
  __typename?: "circle_users_stddev_fields";
  circleId?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "circle_users" */
export type Circle_Users_Stddev_Order_By = {
  circleId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Circle_Users_Stddev_Pop_Fields = {
  __typename?: "circle_users_stddev_pop_fields";
  circleId?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "circle_users" */
export type Circle_Users_Stddev_Pop_Order_By = {
  circleId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Circle_Users_Stddev_Samp_Fields = {
  __typename?: "circle_users_stddev_samp_fields";
  circleId?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "circle_users" */
export type Circle_Users_Stddev_Samp_Order_By = {
  circleId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Circle_Users_Sum_Fields = {
  __typename?: "circle_users_sum_fields";
  circleId?: Maybe<Scalars["Int"]>;
  id?: Maybe<Scalars["Int"]>;
};

/** order by sum() on columns of table "circle_users" */
export type Circle_Users_Sum_Order_By = {
  circleId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** update columns of table "circle_users" */
export enum Circle_Users_Update_Column {
  /** column name */
  CircleId = "circleId",
  /** column name */
  Id = "id",
  /** column name */
  UserId = "userId",
}

/** aggregate var_pop on columns */
export type Circle_Users_Var_Pop_Fields = {
  __typename?: "circle_users_var_pop_fields";
  circleId?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "circle_users" */
export type Circle_Users_Var_Pop_Order_By = {
  circleId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Circle_Users_Var_Samp_Fields = {
  __typename?: "circle_users_var_samp_fields";
  circleId?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "circle_users" */
export type Circle_Users_Var_Samp_Order_By = {
  circleId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Circle_Users_Variance_Fields = {
  __typename?: "circle_users_variance_fields";
  circleId?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "circle_users" */
export type Circle_Users_Variance_Order_By = {
  circleId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** columns and relationships of "circles" */
export type Circles = {
  __typename?: "circles";
  avatar: Scalars["String"];
  /** An array relationship */
  circleSkills: Array<Circle_Skills>;
  /** An aggregated array relationship */
  circleSkills_aggregate: Circle_Skills_Aggregate;
  /** An array relationship */
  circleUsers: Array<Circle_Users>;
  /** An aggregated array relationship */
  circleUsers_aggregate: Circle_Users_Aggregate;
  id: Scalars["Int"];
  mainRole?: Maybe<Scalars["String"]>;
  /** An array relationship */
  messages: Array<Messages>;
  /** An aggregated array relationship */
  messages_aggregate: Messages_Aggregate;
  name: Scalars["String"];
  /** An object relationship */
  owner?: Maybe<Users>;
  ownerId?: Maybe<Scalars["String"]>;
  recruitTitle?: Maybe<Scalars["String"]>;
  /** An object relationship */
  subCategory?: Maybe<Sub_Categories>;
  subCategoryId?: Maybe<Scalars["Int"]>;
  whatWeWillDo?: Maybe<Scalars["String"]>;
};

/** columns and relationships of "circles" */
export type CirclesCircleSkillsArgs = {
  distinct_on?: Maybe<Array<Circle_Skills_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Circle_Skills_Order_By>>;
  where?: Maybe<Circle_Skills_Bool_Exp>;
};

/** columns and relationships of "circles" */
export type CirclesCircleSkills_AggregateArgs = {
  distinct_on?: Maybe<Array<Circle_Skills_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Circle_Skills_Order_By>>;
  where?: Maybe<Circle_Skills_Bool_Exp>;
};

/** columns and relationships of "circles" */
export type CirclesCircleUsersArgs = {
  distinct_on?: Maybe<Array<Circle_Users_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Circle_Users_Order_By>>;
  where?: Maybe<Circle_Users_Bool_Exp>;
};

/** columns and relationships of "circles" */
export type CirclesCircleUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Circle_Users_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Circle_Users_Order_By>>;
  where?: Maybe<Circle_Users_Bool_Exp>;
};

/** columns and relationships of "circles" */
export type CirclesMessagesArgs = {
  distinct_on?: Maybe<Array<Messages_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Messages_Order_By>>;
  where?: Maybe<Messages_Bool_Exp>;
};

/** columns and relationships of "circles" */
export type CirclesMessages_AggregateArgs = {
  distinct_on?: Maybe<Array<Messages_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Messages_Order_By>>;
  where?: Maybe<Messages_Bool_Exp>;
};

/** aggregated selection of "circles" */
export type Circles_Aggregate = {
  __typename?: "circles_aggregate";
  aggregate?: Maybe<Circles_Aggregate_Fields>;
  nodes: Array<Circles>;
};

/** aggregate fields of "circles" */
export type Circles_Aggregate_Fields = {
  __typename?: "circles_aggregate_fields";
  avg?: Maybe<Circles_Avg_Fields>;
  count?: Maybe<Scalars["Int"]>;
  max?: Maybe<Circles_Max_Fields>;
  min?: Maybe<Circles_Min_Fields>;
  stddev?: Maybe<Circles_Stddev_Fields>;
  stddev_pop?: Maybe<Circles_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Circles_Stddev_Samp_Fields>;
  sum?: Maybe<Circles_Sum_Fields>;
  var_pop?: Maybe<Circles_Var_Pop_Fields>;
  var_samp?: Maybe<Circles_Var_Samp_Fields>;
  variance?: Maybe<Circles_Variance_Fields>;
};

/** aggregate fields of "circles" */
export type Circles_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Circles_Select_Column>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "circles" */
export type Circles_Aggregate_Order_By = {
  avg?: Maybe<Circles_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Circles_Max_Order_By>;
  min?: Maybe<Circles_Min_Order_By>;
  stddev?: Maybe<Circles_Stddev_Order_By>;
  stddev_pop?: Maybe<Circles_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Circles_Stddev_Samp_Order_By>;
  sum?: Maybe<Circles_Sum_Order_By>;
  var_pop?: Maybe<Circles_Var_Pop_Order_By>;
  var_samp?: Maybe<Circles_Var_Samp_Order_By>;
  variance?: Maybe<Circles_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "circles" */
export type Circles_Arr_Rel_Insert_Input = {
  data: Array<Circles_Insert_Input>;
  on_conflict?: Maybe<Circles_On_Conflict>;
};

/** aggregate avg on columns */
export type Circles_Avg_Fields = {
  __typename?: "circles_avg_fields";
  id?: Maybe<Scalars["Float"]>;
  subCategoryId?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "circles" */
export type Circles_Avg_Order_By = {
  id?: Maybe<Order_By>;
  subCategoryId?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "circles". All fields are combined with a logical 'AND'. */
export type Circles_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Circles_Bool_Exp>>>;
  _not?: Maybe<Circles_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Circles_Bool_Exp>>>;
  avatar?: Maybe<String_Comparison_Exp>;
  circleSkills?: Maybe<Circle_Skills_Bool_Exp>;
  circleUsers?: Maybe<Circle_Users_Bool_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  mainRole?: Maybe<String_Comparison_Exp>;
  messages?: Maybe<Messages_Bool_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  owner?: Maybe<Users_Bool_Exp>;
  ownerId?: Maybe<String_Comparison_Exp>;
  recruitTitle?: Maybe<String_Comparison_Exp>;
  subCategory?: Maybe<Sub_Categories_Bool_Exp>;
  subCategoryId?: Maybe<Int_Comparison_Exp>;
  whatWeWillDo?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "circles" */
export enum Circles_Constraint {
  /** unique or primary key constraint */
  RoomsPkey = "rooms_pkey",
}

/** input type for incrementing integer column in table "circles" */
export type Circles_Inc_Input = {
  id?: Maybe<Scalars["Int"]>;
  subCategoryId?: Maybe<Scalars["Int"]>;
};

/** input type for inserting data into table "circles" */
export type Circles_Insert_Input = {
  avatar?: Maybe<Scalars["String"]>;
  circleSkills?: Maybe<Circle_Skills_Arr_Rel_Insert_Input>;
  circleUsers?: Maybe<Circle_Users_Arr_Rel_Insert_Input>;
  id?: Maybe<Scalars["Int"]>;
  mainRole?: Maybe<Scalars["String"]>;
  messages?: Maybe<Messages_Arr_Rel_Insert_Input>;
  name?: Maybe<Scalars["String"]>;
  owner?: Maybe<Users_Obj_Rel_Insert_Input>;
  ownerId?: Maybe<Scalars["String"]>;
  recruitTitle?: Maybe<Scalars["String"]>;
  subCategory?: Maybe<Sub_Categories_Obj_Rel_Insert_Input>;
  subCategoryId?: Maybe<Scalars["Int"]>;
  whatWeWillDo?: Maybe<Scalars["String"]>;
};

/** aggregate max on columns */
export type Circles_Max_Fields = {
  __typename?: "circles_max_fields";
  avatar?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["Int"]>;
  mainRole?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  ownerId?: Maybe<Scalars["String"]>;
  recruitTitle?: Maybe<Scalars["String"]>;
  subCategoryId?: Maybe<Scalars["Int"]>;
  whatWeWillDo?: Maybe<Scalars["String"]>;
};

/** order by max() on columns of table "circles" */
export type Circles_Max_Order_By = {
  avatar?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  mainRole?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  ownerId?: Maybe<Order_By>;
  recruitTitle?: Maybe<Order_By>;
  subCategoryId?: Maybe<Order_By>;
  whatWeWillDo?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Circles_Min_Fields = {
  __typename?: "circles_min_fields";
  avatar?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["Int"]>;
  mainRole?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  ownerId?: Maybe<Scalars["String"]>;
  recruitTitle?: Maybe<Scalars["String"]>;
  subCategoryId?: Maybe<Scalars["Int"]>;
  whatWeWillDo?: Maybe<Scalars["String"]>;
};

/** order by min() on columns of table "circles" */
export type Circles_Min_Order_By = {
  avatar?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  mainRole?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  ownerId?: Maybe<Order_By>;
  recruitTitle?: Maybe<Order_By>;
  subCategoryId?: Maybe<Order_By>;
  whatWeWillDo?: Maybe<Order_By>;
};

/** response of any mutation on the table "circles" */
export type Circles_Mutation_Response = {
  __typename?: "circles_mutation_response";
  /** number of affected rows by the mutation */
  affected_rows: Scalars["Int"];
  /** data of the affected rows by the mutation */
  returning: Array<Circles>;
};

/** input type for inserting object relation for remote table "circles" */
export type Circles_Obj_Rel_Insert_Input = {
  data: Circles_Insert_Input;
  on_conflict?: Maybe<Circles_On_Conflict>;
};

/** on conflict condition type for table "circles" */
export type Circles_On_Conflict = {
  constraint: Circles_Constraint;
  update_columns: Array<Circles_Update_Column>;
  where?: Maybe<Circles_Bool_Exp>;
};

/** ordering options when selecting data from "circles" */
export type Circles_Order_By = {
  avatar?: Maybe<Order_By>;
  circleSkills_aggregate?: Maybe<Circle_Skills_Aggregate_Order_By>;
  circleUsers_aggregate?: Maybe<Circle_Users_Aggregate_Order_By>;
  id?: Maybe<Order_By>;
  mainRole?: Maybe<Order_By>;
  messages_aggregate?: Maybe<Messages_Aggregate_Order_By>;
  name?: Maybe<Order_By>;
  owner?: Maybe<Users_Order_By>;
  ownerId?: Maybe<Order_By>;
  recruitTitle?: Maybe<Order_By>;
  subCategory?: Maybe<Sub_Categories_Order_By>;
  subCategoryId?: Maybe<Order_By>;
  whatWeWillDo?: Maybe<Order_By>;
};

/** primary key columns input for table: "circles" */
export type Circles_Pk_Columns_Input = {
  id: Scalars["Int"];
};

/** select columns of table "circles" */
export enum Circles_Select_Column {
  /** column name */
  Avatar = "avatar",
  /** column name */
  Id = "id",
  /** column name */
  MainRole = "mainRole",
  /** column name */
  Name = "name",
  /** column name */
  OwnerId = "ownerId",
  /** column name */
  RecruitTitle = "recruitTitle",
  /** column name */
  SubCategoryId = "subCategoryId",
  /** column name */
  WhatWeWillDo = "whatWeWillDo",
}

/** input type for updating data in table "circles" */
export type Circles_Set_Input = {
  avatar?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["Int"]>;
  mainRole?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  ownerId?: Maybe<Scalars["String"]>;
  recruitTitle?: Maybe<Scalars["String"]>;
  subCategoryId?: Maybe<Scalars["Int"]>;
  whatWeWillDo?: Maybe<Scalars["String"]>;
};

/** aggregate stddev on columns */
export type Circles_Stddev_Fields = {
  __typename?: "circles_stddev_fields";
  id?: Maybe<Scalars["Float"]>;
  subCategoryId?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "circles" */
export type Circles_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  subCategoryId?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Circles_Stddev_Pop_Fields = {
  __typename?: "circles_stddev_pop_fields";
  id?: Maybe<Scalars["Float"]>;
  subCategoryId?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "circles" */
export type Circles_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  subCategoryId?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Circles_Stddev_Samp_Fields = {
  __typename?: "circles_stddev_samp_fields";
  id?: Maybe<Scalars["Float"]>;
  subCategoryId?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "circles" */
export type Circles_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  subCategoryId?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Circles_Sum_Fields = {
  __typename?: "circles_sum_fields";
  id?: Maybe<Scalars["Int"]>;
  subCategoryId?: Maybe<Scalars["Int"]>;
};

/** order by sum() on columns of table "circles" */
export type Circles_Sum_Order_By = {
  id?: Maybe<Order_By>;
  subCategoryId?: Maybe<Order_By>;
};

/** update columns of table "circles" */
export enum Circles_Update_Column {
  /** column name */
  Avatar = "avatar",
  /** column name */
  Id = "id",
  /** column name */
  MainRole = "mainRole",
  /** column name */
  Name = "name",
  /** column name */
  OwnerId = "ownerId",
  /** column name */
  RecruitTitle = "recruitTitle",
  /** column name */
  SubCategoryId = "subCategoryId",
  /** column name */
  WhatWeWillDo = "whatWeWillDo",
}

/** aggregate var_pop on columns */
export type Circles_Var_Pop_Fields = {
  __typename?: "circles_var_pop_fields";
  id?: Maybe<Scalars["Float"]>;
  subCategoryId?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "circles" */
export type Circles_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  subCategoryId?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Circles_Var_Samp_Fields = {
  __typename?: "circles_var_samp_fields";
  id?: Maybe<Scalars["Float"]>;
  subCategoryId?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "circles" */
export type Circles_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  subCategoryId?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Circles_Variance_Fields = {
  __typename?: "circles_variance_fields";
  id?: Maybe<Scalars["Float"]>;
  subCategoryId?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "circles" */
export type Circles_Variance_Order_By = {
  id?: Maybe<Order_By>;
  subCategoryId?: Maybe<Order_By>;
};

/** columns and relationships of "messages" */
export type Messages = {
  __typename?: "messages";
  circleId: Scalars["Int"];
  /** An object relationship */
  circles: Circles;
  id: Scalars["Int"];
  text: Scalars["String"];
  timestamp: Scalars["timestamptz"];
  userId: Scalars["String"];
  /** An object relationship */
  users: Users;
};

/** aggregated selection of "messages" */
export type Messages_Aggregate = {
  __typename?: "messages_aggregate";
  aggregate?: Maybe<Messages_Aggregate_Fields>;
  nodes: Array<Messages>;
};

/** aggregate fields of "messages" */
export type Messages_Aggregate_Fields = {
  __typename?: "messages_aggregate_fields";
  avg?: Maybe<Messages_Avg_Fields>;
  count?: Maybe<Scalars["Int"]>;
  max?: Maybe<Messages_Max_Fields>;
  min?: Maybe<Messages_Min_Fields>;
  stddev?: Maybe<Messages_Stddev_Fields>;
  stddev_pop?: Maybe<Messages_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Messages_Stddev_Samp_Fields>;
  sum?: Maybe<Messages_Sum_Fields>;
  var_pop?: Maybe<Messages_Var_Pop_Fields>;
  var_samp?: Maybe<Messages_Var_Samp_Fields>;
  variance?: Maybe<Messages_Variance_Fields>;
};

/** aggregate fields of "messages" */
export type Messages_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Messages_Select_Column>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "messages" */
export type Messages_Aggregate_Order_By = {
  avg?: Maybe<Messages_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Messages_Max_Order_By>;
  min?: Maybe<Messages_Min_Order_By>;
  stddev?: Maybe<Messages_Stddev_Order_By>;
  stddev_pop?: Maybe<Messages_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Messages_Stddev_Samp_Order_By>;
  sum?: Maybe<Messages_Sum_Order_By>;
  var_pop?: Maybe<Messages_Var_Pop_Order_By>;
  var_samp?: Maybe<Messages_Var_Samp_Order_By>;
  variance?: Maybe<Messages_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "messages" */
export type Messages_Arr_Rel_Insert_Input = {
  data: Array<Messages_Insert_Input>;
  on_conflict?: Maybe<Messages_On_Conflict>;
};

/** aggregate avg on columns */
export type Messages_Avg_Fields = {
  __typename?: "messages_avg_fields";
  circleId?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "messages" */
export type Messages_Avg_Order_By = {
  circleId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "messages". All fields are combined with a logical 'AND'. */
export type Messages_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Messages_Bool_Exp>>>;
  _not?: Maybe<Messages_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Messages_Bool_Exp>>>;
  circleId?: Maybe<Int_Comparison_Exp>;
  circles?: Maybe<Circles_Bool_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  text?: Maybe<String_Comparison_Exp>;
  timestamp?: Maybe<Timestamptz_Comparison_Exp>;
  userId?: Maybe<String_Comparison_Exp>;
  users?: Maybe<Users_Bool_Exp>;
};

/** unique or primary key constraints on table "messages" */
export enum Messages_Constraint {
  /** unique or primary key constraint */
  MessagesPkey = "Messages_pkey",
}

/** input type for incrementing integer column in table "messages" */
export type Messages_Inc_Input = {
  circleId?: Maybe<Scalars["Int"]>;
  id?: Maybe<Scalars["Int"]>;
};

/** input type for inserting data into table "messages" */
export type Messages_Insert_Input = {
  circleId?: Maybe<Scalars["Int"]>;
  circles?: Maybe<Circles_Obj_Rel_Insert_Input>;
  id?: Maybe<Scalars["Int"]>;
  text?: Maybe<Scalars["String"]>;
  timestamp?: Maybe<Scalars["timestamptz"]>;
  userId?: Maybe<Scalars["String"]>;
  users?: Maybe<Users_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Messages_Max_Fields = {
  __typename?: "messages_max_fields";
  circleId?: Maybe<Scalars["Int"]>;
  id?: Maybe<Scalars["Int"]>;
  text?: Maybe<Scalars["String"]>;
  timestamp?: Maybe<Scalars["timestamptz"]>;
  userId?: Maybe<Scalars["String"]>;
};

/** order by max() on columns of table "messages" */
export type Messages_Max_Order_By = {
  circleId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  text?: Maybe<Order_By>;
  timestamp?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Messages_Min_Fields = {
  __typename?: "messages_min_fields";
  circleId?: Maybe<Scalars["Int"]>;
  id?: Maybe<Scalars["Int"]>;
  text?: Maybe<Scalars["String"]>;
  timestamp?: Maybe<Scalars["timestamptz"]>;
  userId?: Maybe<Scalars["String"]>;
};

/** order by min() on columns of table "messages" */
export type Messages_Min_Order_By = {
  circleId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  text?: Maybe<Order_By>;
  timestamp?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** response of any mutation on the table "messages" */
export type Messages_Mutation_Response = {
  __typename?: "messages_mutation_response";
  /** number of affected rows by the mutation */
  affected_rows: Scalars["Int"];
  /** data of the affected rows by the mutation */
  returning: Array<Messages>;
};

/** input type for inserting object relation for remote table "messages" */
export type Messages_Obj_Rel_Insert_Input = {
  data: Messages_Insert_Input;
  on_conflict?: Maybe<Messages_On_Conflict>;
};

/** on conflict condition type for table "messages" */
export type Messages_On_Conflict = {
  constraint: Messages_Constraint;
  update_columns: Array<Messages_Update_Column>;
  where?: Maybe<Messages_Bool_Exp>;
};

/** ordering options when selecting data from "messages" */
export type Messages_Order_By = {
  circleId?: Maybe<Order_By>;
  circles?: Maybe<Circles_Order_By>;
  id?: Maybe<Order_By>;
  text?: Maybe<Order_By>;
  timestamp?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
  users?: Maybe<Users_Order_By>;
};

/** primary key columns input for table: "messages" */
export type Messages_Pk_Columns_Input = {
  id: Scalars["Int"];
};

/** select columns of table "messages" */
export enum Messages_Select_Column {
  /** column name */
  CircleId = "circleId",
  /** column name */
  Id = "id",
  /** column name */
  Text = "text",
  /** column name */
  Timestamp = "timestamp",
  /** column name */
  UserId = "userId",
}

/** input type for updating data in table "messages" */
export type Messages_Set_Input = {
  circleId?: Maybe<Scalars["Int"]>;
  id?: Maybe<Scalars["Int"]>;
  text?: Maybe<Scalars["String"]>;
  timestamp?: Maybe<Scalars["timestamptz"]>;
  userId?: Maybe<Scalars["String"]>;
};

/** aggregate stddev on columns */
export type Messages_Stddev_Fields = {
  __typename?: "messages_stddev_fields";
  circleId?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "messages" */
export type Messages_Stddev_Order_By = {
  circleId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Messages_Stddev_Pop_Fields = {
  __typename?: "messages_stddev_pop_fields";
  circleId?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "messages" */
export type Messages_Stddev_Pop_Order_By = {
  circleId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Messages_Stddev_Samp_Fields = {
  __typename?: "messages_stddev_samp_fields";
  circleId?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "messages" */
export type Messages_Stddev_Samp_Order_By = {
  circleId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Messages_Sum_Fields = {
  __typename?: "messages_sum_fields";
  circleId?: Maybe<Scalars["Int"]>;
  id?: Maybe<Scalars["Int"]>;
};

/** order by sum() on columns of table "messages" */
export type Messages_Sum_Order_By = {
  circleId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** update columns of table "messages" */
export enum Messages_Update_Column {
  /** column name */
  CircleId = "circleId",
  /** column name */
  Id = "id",
  /** column name */
  Text = "text",
  /** column name */
  Timestamp = "timestamp",
  /** column name */
  UserId = "userId",
}

/** aggregate var_pop on columns */
export type Messages_Var_Pop_Fields = {
  __typename?: "messages_var_pop_fields";
  circleId?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "messages" */
export type Messages_Var_Pop_Order_By = {
  circleId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Messages_Var_Samp_Fields = {
  __typename?: "messages_var_samp_fields";
  circleId?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "messages" */
export type Messages_Var_Samp_Order_By = {
  circleId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Messages_Variance_Fields = {
  __typename?: "messages_variance_fields";
  circleId?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "messages" */
export type Messages_Variance_Order_By = {
  circleId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: "mutation_root";
  /** delete data from the table: "circle_skills" */
  delete_circle_skills?: Maybe<Circle_Skills_Mutation_Response>;
  /** delete single row from the table: "circle_skills" */
  delete_circle_skills_by_pk?: Maybe<Circle_Skills>;
  /** delete data from the table: "circle_users" */
  delete_circle_users?: Maybe<Circle_Users_Mutation_Response>;
  /** delete single row from the table: "circle_users" */
  delete_circle_users_by_pk?: Maybe<Circle_Users>;
  /** delete data from the table: "circles" */
  delete_circles?: Maybe<Circles_Mutation_Response>;
  /** delete single row from the table: "circles" */
  delete_circles_by_pk?: Maybe<Circles>;
  /** delete data from the table: "messages" */
  delete_messages?: Maybe<Messages_Mutation_Response>;
  /** delete single row from the table: "messages" */
  delete_messages_by_pk?: Maybe<Messages>;
  /** delete data from the table: "organizations" */
  delete_organizations?: Maybe<Organizations_Mutation_Response>;
  /** delete single row from the table: "organizations" */
  delete_organizations_by_pk?: Maybe<Organizations>;
  /** delete data from the table: "parent_categories" */
  delete_parent_categories?: Maybe<Parent_Categories_Mutation_Response>;
  /** delete single row from the table: "parent_categories" */
  delete_parent_categories_by_pk?: Maybe<Parent_Categories>;
  /** delete data from the table: "skills" */
  delete_skills?: Maybe<Skills_Mutation_Response>;
  /** delete single row from the table: "skills" */
  delete_skills_by_pk?: Maybe<Skills>;
  /** delete data from the table: "sub_categories" */
  delete_sub_categories?: Maybe<Sub_Categories_Mutation_Response>;
  /** delete single row from the table: "sub_categories" */
  delete_sub_categories_by_pk?: Maybe<Sub_Categories>;
  /** delete data from the table: "user_skills" */
  delete_user_skills?: Maybe<User_Skills_Mutation_Response>;
  /** delete single row from the table: "user_skills" */
  delete_user_skills_by_pk?: Maybe<User_Skills>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>;
  /** insert data into the table: "circle_skills" */
  insert_circle_skills?: Maybe<Circle_Skills_Mutation_Response>;
  /** insert a single row into the table: "circle_skills" */
  insert_circle_skills_one?: Maybe<Circle_Skills>;
  /** insert data into the table: "circle_users" */
  insert_circle_users?: Maybe<Circle_Users_Mutation_Response>;
  /** insert a single row into the table: "circle_users" */
  insert_circle_users_one?: Maybe<Circle_Users>;
  /** insert data into the table: "circles" */
  insert_circles?: Maybe<Circles_Mutation_Response>;
  /** insert a single row into the table: "circles" */
  insert_circles_one?: Maybe<Circles>;
  /** insert data into the table: "messages" */
  insert_messages?: Maybe<Messages_Mutation_Response>;
  /** insert a single row into the table: "messages" */
  insert_messages_one?: Maybe<Messages>;
  /** insert data into the table: "organizations" */
  insert_organizations?: Maybe<Organizations_Mutation_Response>;
  /** insert a single row into the table: "organizations" */
  insert_organizations_one?: Maybe<Organizations>;
  /** insert data into the table: "parent_categories" */
  insert_parent_categories?: Maybe<Parent_Categories_Mutation_Response>;
  /** insert a single row into the table: "parent_categories" */
  insert_parent_categories_one?: Maybe<Parent_Categories>;
  /** insert data into the table: "skills" */
  insert_skills?: Maybe<Skills_Mutation_Response>;
  /** insert a single row into the table: "skills" */
  insert_skills_one?: Maybe<Skills>;
  /** insert data into the table: "sub_categories" */
  insert_sub_categories?: Maybe<Sub_Categories_Mutation_Response>;
  /** insert a single row into the table: "sub_categories" */
  insert_sub_categories_one?: Maybe<Sub_Categories>;
  /** insert data into the table: "user_skills" */
  insert_user_skills?: Maybe<User_Skills_Mutation_Response>;
  /** insert a single row into the table: "user_skills" */
  insert_user_skills_one?: Maybe<User_Skills>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>;
  /** update data of the table: "circle_skills" */
  update_circle_skills?: Maybe<Circle_Skills_Mutation_Response>;
  /** update single row of the table: "circle_skills" */
  update_circle_skills_by_pk?: Maybe<Circle_Skills>;
  /** update data of the table: "circle_users" */
  update_circle_users?: Maybe<Circle_Users_Mutation_Response>;
  /** update single row of the table: "circle_users" */
  update_circle_users_by_pk?: Maybe<Circle_Users>;
  /** update data of the table: "circles" */
  update_circles?: Maybe<Circles_Mutation_Response>;
  /** update single row of the table: "circles" */
  update_circles_by_pk?: Maybe<Circles>;
  /** update data of the table: "messages" */
  update_messages?: Maybe<Messages_Mutation_Response>;
  /** update single row of the table: "messages" */
  update_messages_by_pk?: Maybe<Messages>;
  /** update data of the table: "organizations" */
  update_organizations?: Maybe<Organizations_Mutation_Response>;
  /** update single row of the table: "organizations" */
  update_organizations_by_pk?: Maybe<Organizations>;
  /** update data of the table: "parent_categories" */
  update_parent_categories?: Maybe<Parent_Categories_Mutation_Response>;
  /** update single row of the table: "parent_categories" */
  update_parent_categories_by_pk?: Maybe<Parent_Categories>;
  /** update data of the table: "skills" */
  update_skills?: Maybe<Skills_Mutation_Response>;
  /** update single row of the table: "skills" */
  update_skills_by_pk?: Maybe<Skills>;
  /** update data of the table: "sub_categories" */
  update_sub_categories?: Maybe<Sub_Categories_Mutation_Response>;
  /** update single row of the table: "sub_categories" */
  update_sub_categories_by_pk?: Maybe<Sub_Categories>;
  /** update data of the table: "user_skills" */
  update_user_skills?: Maybe<User_Skills_Mutation_Response>;
  /** update single row of the table: "user_skills" */
  update_user_skills_by_pk?: Maybe<User_Skills>;
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>;
};

/** mutation root */
export type Mutation_RootDelete_Circle_SkillsArgs = {
  where: Circle_Skills_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Circle_Skills_By_PkArgs = {
  id: Scalars["Int"];
};

/** mutation root */
export type Mutation_RootDelete_Circle_UsersArgs = {
  where: Circle_Users_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Circle_Users_By_PkArgs = {
  id: Scalars["Int"];
};

/** mutation root */
export type Mutation_RootDelete_CirclesArgs = {
  where: Circles_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Circles_By_PkArgs = {
  id: Scalars["Int"];
};

/** mutation root */
export type Mutation_RootDelete_MessagesArgs = {
  where: Messages_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Messages_By_PkArgs = {
  id: Scalars["Int"];
};

/** mutation root */
export type Mutation_RootDelete_OrganizationsArgs = {
  where: Organizations_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Organizations_By_PkArgs = {
  id: Scalars["String"];
};

/** mutation root */
export type Mutation_RootDelete_Parent_CategoriesArgs = {
  where: Parent_Categories_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Parent_Categories_By_PkArgs = {
  id: Scalars["Int"];
};

/** mutation root */
export type Mutation_RootDelete_SkillsArgs = {
  where: Skills_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Skills_By_PkArgs = {
  id: Scalars["Int"];
};

/** mutation root */
export type Mutation_RootDelete_Sub_CategoriesArgs = {
  where: Sub_Categories_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Sub_Categories_By_PkArgs = {
  id: Scalars["Int"];
};

/** mutation root */
export type Mutation_RootDelete_User_SkillsArgs = {
  where: User_Skills_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_User_Skills_By_PkArgs = {
  id: Scalars["Int"];
};

/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
  id: Scalars["String"];
};

/** mutation root */
export type Mutation_RootInsert_Circle_SkillsArgs = {
  objects: Array<Circle_Skills_Insert_Input>;
  on_conflict?: Maybe<Circle_Skills_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Circle_Skills_OneArgs = {
  object: Circle_Skills_Insert_Input;
  on_conflict?: Maybe<Circle_Skills_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Circle_UsersArgs = {
  objects: Array<Circle_Users_Insert_Input>;
  on_conflict?: Maybe<Circle_Users_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Circle_Users_OneArgs = {
  object: Circle_Users_Insert_Input;
  on_conflict?: Maybe<Circle_Users_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_CirclesArgs = {
  objects: Array<Circles_Insert_Input>;
  on_conflict?: Maybe<Circles_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Circles_OneArgs = {
  object: Circles_Insert_Input;
  on_conflict?: Maybe<Circles_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_MessagesArgs = {
  objects: Array<Messages_Insert_Input>;
  on_conflict?: Maybe<Messages_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Messages_OneArgs = {
  object: Messages_Insert_Input;
  on_conflict?: Maybe<Messages_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_OrganizationsArgs = {
  objects: Array<Organizations_Insert_Input>;
  on_conflict?: Maybe<Organizations_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Organizations_OneArgs = {
  object: Organizations_Insert_Input;
  on_conflict?: Maybe<Organizations_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Parent_CategoriesArgs = {
  objects: Array<Parent_Categories_Insert_Input>;
  on_conflict?: Maybe<Parent_Categories_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Parent_Categories_OneArgs = {
  object: Parent_Categories_Insert_Input;
  on_conflict?: Maybe<Parent_Categories_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_SkillsArgs = {
  objects: Array<Skills_Insert_Input>;
  on_conflict?: Maybe<Skills_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Skills_OneArgs = {
  object: Skills_Insert_Input;
  on_conflict?: Maybe<Skills_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Sub_CategoriesArgs = {
  objects: Array<Sub_Categories_Insert_Input>;
  on_conflict?: Maybe<Sub_Categories_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Sub_Categories_OneArgs = {
  object: Sub_Categories_Insert_Input;
  on_conflict?: Maybe<Sub_Categories_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_User_SkillsArgs = {
  objects: Array<User_Skills_Insert_Input>;
  on_conflict?: Maybe<User_Skills_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_User_Skills_OneArgs = {
  object: User_Skills_Insert_Input;
  on_conflict?: Maybe<User_Skills_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: Maybe<Users_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Users_OneArgs = {
  object: Users_Insert_Input;
  on_conflict?: Maybe<Users_On_Conflict>;
};

/** mutation root */
export type Mutation_RootUpdate_Circle_SkillsArgs = {
  _inc?: Maybe<Circle_Skills_Inc_Input>;
  _set?: Maybe<Circle_Skills_Set_Input>;
  where: Circle_Skills_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Circle_Skills_By_PkArgs = {
  _inc?: Maybe<Circle_Skills_Inc_Input>;
  _set?: Maybe<Circle_Skills_Set_Input>;
  pk_columns: Circle_Skills_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Circle_UsersArgs = {
  _inc?: Maybe<Circle_Users_Inc_Input>;
  _set?: Maybe<Circle_Users_Set_Input>;
  where: Circle_Users_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Circle_Users_By_PkArgs = {
  _inc?: Maybe<Circle_Users_Inc_Input>;
  _set?: Maybe<Circle_Users_Set_Input>;
  pk_columns: Circle_Users_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_CirclesArgs = {
  _inc?: Maybe<Circles_Inc_Input>;
  _set?: Maybe<Circles_Set_Input>;
  where: Circles_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Circles_By_PkArgs = {
  _inc?: Maybe<Circles_Inc_Input>;
  _set?: Maybe<Circles_Set_Input>;
  pk_columns: Circles_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_MessagesArgs = {
  _inc?: Maybe<Messages_Inc_Input>;
  _set?: Maybe<Messages_Set_Input>;
  where: Messages_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Messages_By_PkArgs = {
  _inc?: Maybe<Messages_Inc_Input>;
  _set?: Maybe<Messages_Set_Input>;
  pk_columns: Messages_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_OrganizationsArgs = {
  _set?: Maybe<Organizations_Set_Input>;
  where: Organizations_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Organizations_By_PkArgs = {
  _set?: Maybe<Organizations_Set_Input>;
  pk_columns: Organizations_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Parent_CategoriesArgs = {
  _inc?: Maybe<Parent_Categories_Inc_Input>;
  _set?: Maybe<Parent_Categories_Set_Input>;
  where: Parent_Categories_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Parent_Categories_By_PkArgs = {
  _inc?: Maybe<Parent_Categories_Inc_Input>;
  _set?: Maybe<Parent_Categories_Set_Input>;
  pk_columns: Parent_Categories_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_SkillsArgs = {
  _inc?: Maybe<Skills_Inc_Input>;
  _set?: Maybe<Skills_Set_Input>;
  where: Skills_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Skills_By_PkArgs = {
  _inc?: Maybe<Skills_Inc_Input>;
  _set?: Maybe<Skills_Set_Input>;
  pk_columns: Skills_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Sub_CategoriesArgs = {
  _inc?: Maybe<Sub_Categories_Inc_Input>;
  _set?: Maybe<Sub_Categories_Set_Input>;
  where: Sub_Categories_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Sub_Categories_By_PkArgs = {
  _inc?: Maybe<Sub_Categories_Inc_Input>;
  _set?: Maybe<Sub_Categories_Set_Input>;
  pk_columns: Sub_Categories_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_User_SkillsArgs = {
  _inc?: Maybe<User_Skills_Inc_Input>;
  _set?: Maybe<User_Skills_Set_Input>;
  where: User_Skills_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_User_Skills_By_PkArgs = {
  _inc?: Maybe<User_Skills_Inc_Input>;
  _set?: Maybe<User_Skills_Set_Input>;
  pk_columns: User_Skills_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _set?: Maybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
  _set?: Maybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};

/** column ordering options */
export enum Order_By {
  /** in the ascending order, nulls last */
  Asc = "asc",
  /** in the ascending order, nulls first */
  AscNullsFirst = "asc_nulls_first",
  /** in the ascending order, nulls last */
  AscNullsLast = "asc_nulls_last",
  /** in the descending order, nulls first */
  Desc = "desc",
  /** in the descending order, nulls first */
  DescNullsFirst = "desc_nulls_first",
  /** in the descending order, nulls last */
  DescNullsLast = "desc_nulls_last",
}

/** columns and relationships of "organizations" */
export type Organizations = {
  __typename?: "organizations";
  id: Scalars["String"];
  name: Scalars["String"];
};

/** aggregated selection of "organizations" */
export type Organizations_Aggregate = {
  __typename?: "organizations_aggregate";
  aggregate?: Maybe<Organizations_Aggregate_Fields>;
  nodes: Array<Organizations>;
};

/** aggregate fields of "organizations" */
export type Organizations_Aggregate_Fields = {
  __typename?: "organizations_aggregate_fields";
  count?: Maybe<Scalars["Int"]>;
  max?: Maybe<Organizations_Max_Fields>;
  min?: Maybe<Organizations_Min_Fields>;
};

/** aggregate fields of "organizations" */
export type Organizations_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Organizations_Select_Column>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "organizations" */
export type Organizations_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Organizations_Max_Order_By>;
  min?: Maybe<Organizations_Min_Order_By>;
};

/** input type for inserting array relation for remote table "organizations" */
export type Organizations_Arr_Rel_Insert_Input = {
  data: Array<Organizations_Insert_Input>;
  on_conflict?: Maybe<Organizations_On_Conflict>;
};

/** Boolean expression to filter rows from the table "organizations". All fields are combined with a logical 'AND'. */
export type Organizations_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Organizations_Bool_Exp>>>;
  _not?: Maybe<Organizations_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Organizations_Bool_Exp>>>;
  id?: Maybe<String_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "organizations" */
export enum Organizations_Constraint {
  /** unique or primary key constraint */
  OrganizationPkey = "Organization_pkey",
}

/** input type for inserting data into table "organizations" */
export type Organizations_Insert_Input = {
  id?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
};

/** aggregate max on columns */
export type Organizations_Max_Fields = {
  __typename?: "organizations_max_fields";
  id?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
};

/** order by max() on columns of table "organizations" */
export type Organizations_Max_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Organizations_Min_Fields = {
  __typename?: "organizations_min_fields";
  id?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
};

/** order by min() on columns of table "organizations" */
export type Organizations_Min_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** response of any mutation on the table "organizations" */
export type Organizations_Mutation_Response = {
  __typename?: "organizations_mutation_response";
  /** number of affected rows by the mutation */
  affected_rows: Scalars["Int"];
  /** data of the affected rows by the mutation */
  returning: Array<Organizations>;
};

/** input type for inserting object relation for remote table "organizations" */
export type Organizations_Obj_Rel_Insert_Input = {
  data: Organizations_Insert_Input;
  on_conflict?: Maybe<Organizations_On_Conflict>;
};

/** on conflict condition type for table "organizations" */
export type Organizations_On_Conflict = {
  constraint: Organizations_Constraint;
  update_columns: Array<Organizations_Update_Column>;
  where?: Maybe<Organizations_Bool_Exp>;
};

/** ordering options when selecting data from "organizations" */
export type Organizations_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** primary key columns input for table: "organizations" */
export type Organizations_Pk_Columns_Input = {
  id: Scalars["String"];
};

/** select columns of table "organizations" */
export enum Organizations_Select_Column {
  /** column name */
  Id = "id",
  /** column name */
  Name = "name",
}

/** input type for updating data in table "organizations" */
export type Organizations_Set_Input = {
  id?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
};

/** update columns of table "organizations" */
export enum Organizations_Update_Column {
  /** column name */
  Id = "id",
  /** column name */
  Name = "name",
}

/** columns and relationships of "parent_categories" */
export type Parent_Categories = {
  __typename?: "parent_categories";
  id: Scalars["Int"];
  name: Scalars["String"];
  /** An array relationship */
  subCategories: Array<Sub_Categories>;
  /** An aggregated array relationship */
  subCategories_aggregate: Sub_Categories_Aggregate;
};

/** columns and relationships of "parent_categories" */
export type Parent_CategoriesSubCategoriesArgs = {
  distinct_on?: Maybe<Array<Sub_Categories_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Sub_Categories_Order_By>>;
  where?: Maybe<Sub_Categories_Bool_Exp>;
};

/** columns and relationships of "parent_categories" */
export type Parent_CategoriesSubCategories_AggregateArgs = {
  distinct_on?: Maybe<Array<Sub_Categories_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Sub_Categories_Order_By>>;
  where?: Maybe<Sub_Categories_Bool_Exp>;
};

/** aggregated selection of "parent_categories" */
export type Parent_Categories_Aggregate = {
  __typename?: "parent_categories_aggregate";
  aggregate?: Maybe<Parent_Categories_Aggregate_Fields>;
  nodes: Array<Parent_Categories>;
};

/** aggregate fields of "parent_categories" */
export type Parent_Categories_Aggregate_Fields = {
  __typename?: "parent_categories_aggregate_fields";
  avg?: Maybe<Parent_Categories_Avg_Fields>;
  count?: Maybe<Scalars["Int"]>;
  max?: Maybe<Parent_Categories_Max_Fields>;
  min?: Maybe<Parent_Categories_Min_Fields>;
  stddev?: Maybe<Parent_Categories_Stddev_Fields>;
  stddev_pop?: Maybe<Parent_Categories_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Parent_Categories_Stddev_Samp_Fields>;
  sum?: Maybe<Parent_Categories_Sum_Fields>;
  var_pop?: Maybe<Parent_Categories_Var_Pop_Fields>;
  var_samp?: Maybe<Parent_Categories_Var_Samp_Fields>;
  variance?: Maybe<Parent_Categories_Variance_Fields>;
};

/** aggregate fields of "parent_categories" */
export type Parent_Categories_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Parent_Categories_Select_Column>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "parent_categories" */
export type Parent_Categories_Aggregate_Order_By = {
  avg?: Maybe<Parent_Categories_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Parent_Categories_Max_Order_By>;
  min?: Maybe<Parent_Categories_Min_Order_By>;
  stddev?: Maybe<Parent_Categories_Stddev_Order_By>;
  stddev_pop?: Maybe<Parent_Categories_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Parent_Categories_Stddev_Samp_Order_By>;
  sum?: Maybe<Parent_Categories_Sum_Order_By>;
  var_pop?: Maybe<Parent_Categories_Var_Pop_Order_By>;
  var_samp?: Maybe<Parent_Categories_Var_Samp_Order_By>;
  variance?: Maybe<Parent_Categories_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "parent_categories" */
export type Parent_Categories_Arr_Rel_Insert_Input = {
  data: Array<Parent_Categories_Insert_Input>;
  on_conflict?: Maybe<Parent_Categories_On_Conflict>;
};

/** aggregate avg on columns */
export type Parent_Categories_Avg_Fields = {
  __typename?: "parent_categories_avg_fields";
  id?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "parent_categories" */
export type Parent_Categories_Avg_Order_By = {
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "parent_categories". All fields are combined with a logical 'AND'. */
export type Parent_Categories_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Parent_Categories_Bool_Exp>>>;
  _not?: Maybe<Parent_Categories_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Parent_Categories_Bool_Exp>>>;
  id?: Maybe<Int_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  subCategories?: Maybe<Sub_Categories_Bool_Exp>;
};

/** unique or primary key constraints on table "parent_categories" */
export enum Parent_Categories_Constraint {
  /** unique or primary key constraint */
  ParentCategoryPkey = "ParentCategory_pkey",
}

/** input type for incrementing integer column in table "parent_categories" */
export type Parent_Categories_Inc_Input = {
  id?: Maybe<Scalars["Int"]>;
};

/** input type for inserting data into table "parent_categories" */
export type Parent_Categories_Insert_Input = {
  id?: Maybe<Scalars["Int"]>;
  name?: Maybe<Scalars["String"]>;
  subCategories?: Maybe<Sub_Categories_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Parent_Categories_Max_Fields = {
  __typename?: "parent_categories_max_fields";
  id?: Maybe<Scalars["Int"]>;
  name?: Maybe<Scalars["String"]>;
};

/** order by max() on columns of table "parent_categories" */
export type Parent_Categories_Max_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Parent_Categories_Min_Fields = {
  __typename?: "parent_categories_min_fields";
  id?: Maybe<Scalars["Int"]>;
  name?: Maybe<Scalars["String"]>;
};

/** order by min() on columns of table "parent_categories" */
export type Parent_Categories_Min_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** response of any mutation on the table "parent_categories" */
export type Parent_Categories_Mutation_Response = {
  __typename?: "parent_categories_mutation_response";
  /** number of affected rows by the mutation */
  affected_rows: Scalars["Int"];
  /** data of the affected rows by the mutation */
  returning: Array<Parent_Categories>;
};

/** input type for inserting object relation for remote table "parent_categories" */
export type Parent_Categories_Obj_Rel_Insert_Input = {
  data: Parent_Categories_Insert_Input;
  on_conflict?: Maybe<Parent_Categories_On_Conflict>;
};

/** on conflict condition type for table "parent_categories" */
export type Parent_Categories_On_Conflict = {
  constraint: Parent_Categories_Constraint;
  update_columns: Array<Parent_Categories_Update_Column>;
  where?: Maybe<Parent_Categories_Bool_Exp>;
};

/** ordering options when selecting data from "parent_categories" */
export type Parent_Categories_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  subCategories_aggregate?: Maybe<Sub_Categories_Aggregate_Order_By>;
};

/** primary key columns input for table: "parent_categories" */
export type Parent_Categories_Pk_Columns_Input = {
  id: Scalars["Int"];
};

/** select columns of table "parent_categories" */
export enum Parent_Categories_Select_Column {
  /** column name */
  Id = "id",
  /** column name */
  Name = "name",
}

/** input type for updating data in table "parent_categories" */
export type Parent_Categories_Set_Input = {
  id?: Maybe<Scalars["Int"]>;
  name?: Maybe<Scalars["String"]>;
};

/** aggregate stddev on columns */
export type Parent_Categories_Stddev_Fields = {
  __typename?: "parent_categories_stddev_fields";
  id?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "parent_categories" */
export type Parent_Categories_Stddev_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Parent_Categories_Stddev_Pop_Fields = {
  __typename?: "parent_categories_stddev_pop_fields";
  id?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "parent_categories" */
export type Parent_Categories_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Parent_Categories_Stddev_Samp_Fields = {
  __typename?: "parent_categories_stddev_samp_fields";
  id?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "parent_categories" */
export type Parent_Categories_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Parent_Categories_Sum_Fields = {
  __typename?: "parent_categories_sum_fields";
  id?: Maybe<Scalars["Int"]>;
};

/** order by sum() on columns of table "parent_categories" */
export type Parent_Categories_Sum_Order_By = {
  id?: Maybe<Order_By>;
};

/** update columns of table "parent_categories" */
export enum Parent_Categories_Update_Column {
  /** column name */
  Id = "id",
  /** column name */
  Name = "name",
}

/** aggregate var_pop on columns */
export type Parent_Categories_Var_Pop_Fields = {
  __typename?: "parent_categories_var_pop_fields";
  id?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "parent_categories" */
export type Parent_Categories_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Parent_Categories_Var_Samp_Fields = {
  __typename?: "parent_categories_var_samp_fields";
  id?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "parent_categories" */
export type Parent_Categories_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Parent_Categories_Variance_Fields = {
  __typename?: "parent_categories_variance_fields";
  id?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "parent_categories" */
export type Parent_Categories_Variance_Order_By = {
  id?: Maybe<Order_By>;
};

/** query root */
export type Query_Root = {
  __typename?: "query_root";
  /** fetch data from the table: "circle_skills" */
  circleSkills: Array<Circle_Skills>;
  /** fetch data from the table: "circle_users" */
  circleUsers: Array<Circle_Users>;
  /** fetch aggregated fields from the table: "circle_skills" */
  circle_skills_aggregate: Circle_Skills_Aggregate;
  /** fetch data from the table: "circle_skills" using primary key columns */
  circle_skills_by_pk?: Maybe<Circle_Skills>;
  /** fetch aggregated fields from the table: "circle_users" */
  circle_users_aggregate: Circle_Users_Aggregate;
  /** fetch data from the table: "circle_users" using primary key columns */
  circle_users_by_pk?: Maybe<Circle_Users>;
  /** fetch data from the table: "circles" */
  circles: Array<Circles>;
  /** fetch aggregated fields from the table: "circles" */
  circles_aggregate: Circles_Aggregate;
  /** fetch data from the table: "circles" using primary key columns */
  circles_by_pk?: Maybe<Circles>;
  /** fetch data from the table: "messages" */
  messages: Array<Messages>;
  /** fetch aggregated fields from the table: "messages" */
  messages_aggregate: Messages_Aggregate;
  /** fetch data from the table: "messages" using primary key columns */
  messages_by_pk?: Maybe<Messages>;
  /** fetch data from the table: "organizations" */
  organizations: Array<Organizations>;
  /** fetch aggregated fields from the table: "organizations" */
  organizations_aggregate: Organizations_Aggregate;
  /** fetch data from the table: "organizations" using primary key columns */
  organizations_by_pk?: Maybe<Organizations>;
  /** fetch data from the table: "parent_categories" */
  parentCategories: Array<Parent_Categories>;
  /** fetch aggregated fields from the table: "parent_categories" */
  parent_categories_aggregate: Parent_Categories_Aggregate;
  /** fetch data from the table: "parent_categories" using primary key columns */
  parent_categories_by_pk?: Maybe<Parent_Categories>;
  /** fetch data from the table: "skills" */
  skills: Array<Skills>;
  /** fetch aggregated fields from the table: "skills" */
  skills_aggregate: Skills_Aggregate;
  /** fetch data from the table: "skills" using primary key columns */
  skills_by_pk?: Maybe<Skills>;
  /** fetch data from the table: "sub_categories" */
  subCategories: Array<Sub_Categories>;
  /** fetch data from the table: "sub_categories" using primary key columns */
  subCategory?: Maybe<Sub_Categories>;
  /** fetch aggregated fields from the table: "sub_categories" */
  sub_categories_aggregate: Sub_Categories_Aggregate;
  /** fetch data from the table: "user_skills" */
  userSkills: Array<User_Skills>;
  /** fetch aggregated fields from the table: "user_skills" */
  user_skills_aggregate: User_Skills_Aggregate;
  /** fetch data from the table: "user_skills" using primary key columns */
  user_skills_by_pk?: Maybe<User_Skills>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};

/** query root */
export type Query_RootCircleSkillsArgs = {
  distinct_on?: Maybe<Array<Circle_Skills_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Circle_Skills_Order_By>>;
  where?: Maybe<Circle_Skills_Bool_Exp>;
};

/** query root */
export type Query_RootCircleUsersArgs = {
  distinct_on?: Maybe<Array<Circle_Users_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Circle_Users_Order_By>>;
  where?: Maybe<Circle_Users_Bool_Exp>;
};

/** query root */
export type Query_RootCircle_Skills_AggregateArgs = {
  distinct_on?: Maybe<Array<Circle_Skills_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Circle_Skills_Order_By>>;
  where?: Maybe<Circle_Skills_Bool_Exp>;
};

/** query root */
export type Query_RootCircle_Skills_By_PkArgs = {
  id: Scalars["Int"];
};

/** query root */
export type Query_RootCircle_Users_AggregateArgs = {
  distinct_on?: Maybe<Array<Circle_Users_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Circle_Users_Order_By>>;
  where?: Maybe<Circle_Users_Bool_Exp>;
};

/** query root */
export type Query_RootCircle_Users_By_PkArgs = {
  id: Scalars["Int"];
};

/** query root */
export type Query_RootCirclesArgs = {
  distinct_on?: Maybe<Array<Circles_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Circles_Order_By>>;
  where?: Maybe<Circles_Bool_Exp>;
};

/** query root */
export type Query_RootCircles_AggregateArgs = {
  distinct_on?: Maybe<Array<Circles_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Circles_Order_By>>;
  where?: Maybe<Circles_Bool_Exp>;
};

/** query root */
export type Query_RootCircles_By_PkArgs = {
  id: Scalars["Int"];
};

/** query root */
export type Query_RootMessagesArgs = {
  distinct_on?: Maybe<Array<Messages_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Messages_Order_By>>;
  where?: Maybe<Messages_Bool_Exp>;
};

/** query root */
export type Query_RootMessages_AggregateArgs = {
  distinct_on?: Maybe<Array<Messages_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Messages_Order_By>>;
  where?: Maybe<Messages_Bool_Exp>;
};

/** query root */
export type Query_RootMessages_By_PkArgs = {
  id: Scalars["Int"];
};

/** query root */
export type Query_RootOrganizationsArgs = {
  distinct_on?: Maybe<Array<Organizations_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Organizations_Order_By>>;
  where?: Maybe<Organizations_Bool_Exp>;
};

/** query root */
export type Query_RootOrganizations_AggregateArgs = {
  distinct_on?: Maybe<Array<Organizations_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Organizations_Order_By>>;
  where?: Maybe<Organizations_Bool_Exp>;
};

/** query root */
export type Query_RootOrganizations_By_PkArgs = {
  id: Scalars["String"];
};

/** query root */
export type Query_RootParentCategoriesArgs = {
  distinct_on?: Maybe<Array<Parent_Categories_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Parent_Categories_Order_By>>;
  where?: Maybe<Parent_Categories_Bool_Exp>;
};

/** query root */
export type Query_RootParent_Categories_AggregateArgs = {
  distinct_on?: Maybe<Array<Parent_Categories_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Parent_Categories_Order_By>>;
  where?: Maybe<Parent_Categories_Bool_Exp>;
};

/** query root */
export type Query_RootParent_Categories_By_PkArgs = {
  id: Scalars["Int"];
};

/** query root */
export type Query_RootSkillsArgs = {
  distinct_on?: Maybe<Array<Skills_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Skills_Order_By>>;
  where?: Maybe<Skills_Bool_Exp>;
};

/** query root */
export type Query_RootSkills_AggregateArgs = {
  distinct_on?: Maybe<Array<Skills_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Skills_Order_By>>;
  where?: Maybe<Skills_Bool_Exp>;
};

/** query root */
export type Query_RootSkills_By_PkArgs = {
  id: Scalars["Int"];
};

/** query root */
export type Query_RootSubCategoriesArgs = {
  distinct_on?: Maybe<Array<Sub_Categories_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Sub_Categories_Order_By>>;
  where?: Maybe<Sub_Categories_Bool_Exp>;
};

/** query root */
export type Query_RootSubCategoryArgs = {
  id: Scalars["Int"];
};

/** query root */
export type Query_RootSub_Categories_AggregateArgs = {
  distinct_on?: Maybe<Array<Sub_Categories_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Sub_Categories_Order_By>>;
  where?: Maybe<Sub_Categories_Bool_Exp>;
};

/** query root */
export type Query_RootUserSkillsArgs = {
  distinct_on?: Maybe<Array<User_Skills_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<User_Skills_Order_By>>;
  where?: Maybe<User_Skills_Bool_Exp>;
};

/** query root */
export type Query_RootUser_Skills_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Skills_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<User_Skills_Order_By>>;
  where?: Maybe<User_Skills_Bool_Exp>;
};

/** query root */
export type Query_RootUser_Skills_By_PkArgs = {
  id: Scalars["Int"];
};

/** query root */
export type Query_RootUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};

/** query root */
export type Query_RootUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};

/** query root */
export type Query_RootUsers_By_PkArgs = {
  id: Scalars["String"];
};

/** columns and relationships of "skills" */
export type Skills = {
  __typename?: "skills";
  avatar: Scalars["String"];
  /** An array relationship */
  circleSkills: Array<Circle_Skills>;
  /** An aggregated array relationship */
  circleSkills_aggregate: Circle_Skills_Aggregate;
  id: Scalars["Int"];
  name: Scalars["String"];
  /** An array relationship */
  userSkills: Array<User_Skills>;
  /** An aggregated array relationship */
  userSkills_aggregate: User_Skills_Aggregate;
};

/** columns and relationships of "skills" */
export type SkillsCircleSkillsArgs = {
  distinct_on?: Maybe<Array<Circle_Skills_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Circle_Skills_Order_By>>;
  where?: Maybe<Circle_Skills_Bool_Exp>;
};

/** columns and relationships of "skills" */
export type SkillsCircleSkills_AggregateArgs = {
  distinct_on?: Maybe<Array<Circle_Skills_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Circle_Skills_Order_By>>;
  where?: Maybe<Circle_Skills_Bool_Exp>;
};

/** columns and relationships of "skills" */
export type SkillsUserSkillsArgs = {
  distinct_on?: Maybe<Array<User_Skills_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<User_Skills_Order_By>>;
  where?: Maybe<User_Skills_Bool_Exp>;
};

/** columns and relationships of "skills" */
export type SkillsUserSkills_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Skills_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<User_Skills_Order_By>>;
  where?: Maybe<User_Skills_Bool_Exp>;
};

/** aggregated selection of "skills" */
export type Skills_Aggregate = {
  __typename?: "skills_aggregate";
  aggregate?: Maybe<Skills_Aggregate_Fields>;
  nodes: Array<Skills>;
};

/** aggregate fields of "skills" */
export type Skills_Aggregate_Fields = {
  __typename?: "skills_aggregate_fields";
  avg?: Maybe<Skills_Avg_Fields>;
  count?: Maybe<Scalars["Int"]>;
  max?: Maybe<Skills_Max_Fields>;
  min?: Maybe<Skills_Min_Fields>;
  stddev?: Maybe<Skills_Stddev_Fields>;
  stddev_pop?: Maybe<Skills_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Skills_Stddev_Samp_Fields>;
  sum?: Maybe<Skills_Sum_Fields>;
  var_pop?: Maybe<Skills_Var_Pop_Fields>;
  var_samp?: Maybe<Skills_Var_Samp_Fields>;
  variance?: Maybe<Skills_Variance_Fields>;
};

/** aggregate fields of "skills" */
export type Skills_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Skills_Select_Column>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "skills" */
export type Skills_Aggregate_Order_By = {
  avg?: Maybe<Skills_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Skills_Max_Order_By>;
  min?: Maybe<Skills_Min_Order_By>;
  stddev?: Maybe<Skills_Stddev_Order_By>;
  stddev_pop?: Maybe<Skills_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Skills_Stddev_Samp_Order_By>;
  sum?: Maybe<Skills_Sum_Order_By>;
  var_pop?: Maybe<Skills_Var_Pop_Order_By>;
  var_samp?: Maybe<Skills_Var_Samp_Order_By>;
  variance?: Maybe<Skills_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "skills" */
export type Skills_Arr_Rel_Insert_Input = {
  data: Array<Skills_Insert_Input>;
  on_conflict?: Maybe<Skills_On_Conflict>;
};

/** aggregate avg on columns */
export type Skills_Avg_Fields = {
  __typename?: "skills_avg_fields";
  id?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "skills" */
export type Skills_Avg_Order_By = {
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "skills". All fields are combined with a logical 'AND'. */
export type Skills_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Skills_Bool_Exp>>>;
  _not?: Maybe<Skills_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Skills_Bool_Exp>>>;
  avatar?: Maybe<String_Comparison_Exp>;
  circleSkills?: Maybe<Circle_Skills_Bool_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  userSkills?: Maybe<User_Skills_Bool_Exp>;
};

/** unique or primary key constraints on table "skills" */
export enum Skills_Constraint {
  /** unique or primary key constraint */
  SkillPkey = "Skill_pkey",
}

/** input type for incrementing integer column in table "skills" */
export type Skills_Inc_Input = {
  id?: Maybe<Scalars["Int"]>;
};

/** input type for inserting data into table "skills" */
export type Skills_Insert_Input = {
  avatar?: Maybe<Scalars["String"]>;
  circleSkills?: Maybe<Circle_Skills_Arr_Rel_Insert_Input>;
  id?: Maybe<Scalars["Int"]>;
  name?: Maybe<Scalars["String"]>;
  userSkills?: Maybe<User_Skills_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Skills_Max_Fields = {
  __typename?: "skills_max_fields";
  avatar?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["Int"]>;
  name?: Maybe<Scalars["String"]>;
};

/** order by max() on columns of table "skills" */
export type Skills_Max_Order_By = {
  avatar?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Skills_Min_Fields = {
  __typename?: "skills_min_fields";
  avatar?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["Int"]>;
  name?: Maybe<Scalars["String"]>;
};

/** order by min() on columns of table "skills" */
export type Skills_Min_Order_By = {
  avatar?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** response of any mutation on the table "skills" */
export type Skills_Mutation_Response = {
  __typename?: "skills_mutation_response";
  /** number of affected rows by the mutation */
  affected_rows: Scalars["Int"];
  /** data of the affected rows by the mutation */
  returning: Array<Skills>;
};

/** input type for inserting object relation for remote table "skills" */
export type Skills_Obj_Rel_Insert_Input = {
  data: Skills_Insert_Input;
  on_conflict?: Maybe<Skills_On_Conflict>;
};

/** on conflict condition type for table "skills" */
export type Skills_On_Conflict = {
  constraint: Skills_Constraint;
  update_columns: Array<Skills_Update_Column>;
  where?: Maybe<Skills_Bool_Exp>;
};

/** ordering options when selecting data from "skills" */
export type Skills_Order_By = {
  avatar?: Maybe<Order_By>;
  circleSkills_aggregate?: Maybe<Circle_Skills_Aggregate_Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  userSkills_aggregate?: Maybe<User_Skills_Aggregate_Order_By>;
};

/** primary key columns input for table: "skills" */
export type Skills_Pk_Columns_Input = {
  id: Scalars["Int"];
};

/** select columns of table "skills" */
export enum Skills_Select_Column {
  /** column name */
  Avatar = "avatar",
  /** column name */
  Id = "id",
  /** column name */
  Name = "name",
}

/** input type for updating data in table "skills" */
export type Skills_Set_Input = {
  avatar?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["Int"]>;
  name?: Maybe<Scalars["String"]>;
};

/** aggregate stddev on columns */
export type Skills_Stddev_Fields = {
  __typename?: "skills_stddev_fields";
  id?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "skills" */
export type Skills_Stddev_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Skills_Stddev_Pop_Fields = {
  __typename?: "skills_stddev_pop_fields";
  id?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "skills" */
export type Skills_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Skills_Stddev_Samp_Fields = {
  __typename?: "skills_stddev_samp_fields";
  id?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "skills" */
export type Skills_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Skills_Sum_Fields = {
  __typename?: "skills_sum_fields";
  id?: Maybe<Scalars["Int"]>;
};

/** order by sum() on columns of table "skills" */
export type Skills_Sum_Order_By = {
  id?: Maybe<Order_By>;
};

/** update columns of table "skills" */
export enum Skills_Update_Column {
  /** column name */
  Avatar = "avatar",
  /** column name */
  Id = "id",
  /** column name */
  Name = "name",
}

/** aggregate var_pop on columns */
export type Skills_Var_Pop_Fields = {
  __typename?: "skills_var_pop_fields";
  id?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "skills" */
export type Skills_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Skills_Var_Samp_Fields = {
  __typename?: "skills_var_samp_fields";
  id?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "skills" */
export type Skills_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Skills_Variance_Fields = {
  __typename?: "skills_variance_fields";
  id?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "skills" */
export type Skills_Variance_Order_By = {
  id?: Maybe<Order_By>;
};

/** columns and relationships of "sub_categories" */
export type Sub_Categories = {
  __typename?: "sub_categories";
  /** An array relationship */
  circles: Array<Circles>;
  /** An aggregated array relationship */
  circles_aggregate: Circles_Aggregate;
  id: Scalars["Int"];
  name: Scalars["String"];
  /** An object relationship */
  parentCategories: Parent_Categories;
  parentCategoryId: Scalars["Int"];
  /** An object relationship */
  subCategories?: Maybe<Circles>;
};

/** columns and relationships of "sub_categories" */
export type Sub_CategoriesCirclesArgs = {
  distinct_on?: Maybe<Array<Circles_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Circles_Order_By>>;
  where?: Maybe<Circles_Bool_Exp>;
};

/** columns and relationships of "sub_categories" */
export type Sub_CategoriesCircles_AggregateArgs = {
  distinct_on?: Maybe<Array<Circles_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Circles_Order_By>>;
  where?: Maybe<Circles_Bool_Exp>;
};

/** aggregated selection of "sub_categories" */
export type Sub_Categories_Aggregate = {
  __typename?: "sub_categories_aggregate";
  aggregate?: Maybe<Sub_Categories_Aggregate_Fields>;
  nodes: Array<Sub_Categories>;
};

/** aggregate fields of "sub_categories" */
export type Sub_Categories_Aggregate_Fields = {
  __typename?: "sub_categories_aggregate_fields";
  avg?: Maybe<Sub_Categories_Avg_Fields>;
  count?: Maybe<Scalars["Int"]>;
  max?: Maybe<Sub_Categories_Max_Fields>;
  min?: Maybe<Sub_Categories_Min_Fields>;
  stddev?: Maybe<Sub_Categories_Stddev_Fields>;
  stddev_pop?: Maybe<Sub_Categories_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Sub_Categories_Stddev_Samp_Fields>;
  sum?: Maybe<Sub_Categories_Sum_Fields>;
  var_pop?: Maybe<Sub_Categories_Var_Pop_Fields>;
  var_samp?: Maybe<Sub_Categories_Var_Samp_Fields>;
  variance?: Maybe<Sub_Categories_Variance_Fields>;
};

/** aggregate fields of "sub_categories" */
export type Sub_Categories_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Sub_Categories_Select_Column>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "sub_categories" */
export type Sub_Categories_Aggregate_Order_By = {
  avg?: Maybe<Sub_Categories_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Sub_Categories_Max_Order_By>;
  min?: Maybe<Sub_Categories_Min_Order_By>;
  stddev?: Maybe<Sub_Categories_Stddev_Order_By>;
  stddev_pop?: Maybe<Sub_Categories_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Sub_Categories_Stddev_Samp_Order_By>;
  sum?: Maybe<Sub_Categories_Sum_Order_By>;
  var_pop?: Maybe<Sub_Categories_Var_Pop_Order_By>;
  var_samp?: Maybe<Sub_Categories_Var_Samp_Order_By>;
  variance?: Maybe<Sub_Categories_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "sub_categories" */
export type Sub_Categories_Arr_Rel_Insert_Input = {
  data: Array<Sub_Categories_Insert_Input>;
  on_conflict?: Maybe<Sub_Categories_On_Conflict>;
};

/** aggregate avg on columns */
export type Sub_Categories_Avg_Fields = {
  __typename?: "sub_categories_avg_fields";
  id?: Maybe<Scalars["Float"]>;
  parentCategoryId?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "sub_categories" */
export type Sub_Categories_Avg_Order_By = {
  id?: Maybe<Order_By>;
  parentCategoryId?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "sub_categories". All fields are combined with a logical 'AND'. */
export type Sub_Categories_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Sub_Categories_Bool_Exp>>>;
  _not?: Maybe<Sub_Categories_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Sub_Categories_Bool_Exp>>>;
  circles?: Maybe<Circles_Bool_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  parentCategories?: Maybe<Parent_Categories_Bool_Exp>;
  parentCategoryId?: Maybe<Int_Comparison_Exp>;
  subCategories?: Maybe<Circles_Bool_Exp>;
};

/** unique or primary key constraints on table "sub_categories" */
export enum Sub_Categories_Constraint {
  /** unique or primary key constraint */
  SubCategoryPkey = "SubCategory_pkey",
}

/** input type for incrementing integer column in table "sub_categories" */
export type Sub_Categories_Inc_Input = {
  id?: Maybe<Scalars["Int"]>;
  parentCategoryId?: Maybe<Scalars["Int"]>;
};

/** input type for inserting data into table "sub_categories" */
export type Sub_Categories_Insert_Input = {
  circles?: Maybe<Circles_Arr_Rel_Insert_Input>;
  id?: Maybe<Scalars["Int"]>;
  name?: Maybe<Scalars["String"]>;
  parentCategories?: Maybe<Parent_Categories_Obj_Rel_Insert_Input>;
  parentCategoryId?: Maybe<Scalars["Int"]>;
  subCategories?: Maybe<Circles_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Sub_Categories_Max_Fields = {
  __typename?: "sub_categories_max_fields";
  id?: Maybe<Scalars["Int"]>;
  name?: Maybe<Scalars["String"]>;
  parentCategoryId?: Maybe<Scalars["Int"]>;
};

/** order by max() on columns of table "sub_categories" */
export type Sub_Categories_Max_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  parentCategoryId?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Sub_Categories_Min_Fields = {
  __typename?: "sub_categories_min_fields";
  id?: Maybe<Scalars["Int"]>;
  name?: Maybe<Scalars["String"]>;
  parentCategoryId?: Maybe<Scalars["Int"]>;
};

/** order by min() on columns of table "sub_categories" */
export type Sub_Categories_Min_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  parentCategoryId?: Maybe<Order_By>;
};

/** response of any mutation on the table "sub_categories" */
export type Sub_Categories_Mutation_Response = {
  __typename?: "sub_categories_mutation_response";
  /** number of affected rows by the mutation */
  affected_rows: Scalars["Int"];
  /** data of the affected rows by the mutation */
  returning: Array<Sub_Categories>;
};

/** input type for inserting object relation for remote table "sub_categories" */
export type Sub_Categories_Obj_Rel_Insert_Input = {
  data: Sub_Categories_Insert_Input;
  on_conflict?: Maybe<Sub_Categories_On_Conflict>;
};

/** on conflict condition type for table "sub_categories" */
export type Sub_Categories_On_Conflict = {
  constraint: Sub_Categories_Constraint;
  update_columns: Array<Sub_Categories_Update_Column>;
  where?: Maybe<Sub_Categories_Bool_Exp>;
};

/** ordering options when selecting data from "sub_categories" */
export type Sub_Categories_Order_By = {
  circles_aggregate?: Maybe<Circles_Aggregate_Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  parentCategories?: Maybe<Parent_Categories_Order_By>;
  parentCategoryId?: Maybe<Order_By>;
  subCategories?: Maybe<Circles_Order_By>;
};

/** primary key columns input for table: "sub_categories" */
export type Sub_Categories_Pk_Columns_Input = {
  id: Scalars["Int"];
};

/** select columns of table "sub_categories" */
export enum Sub_Categories_Select_Column {
  /** column name */
  Id = "id",
  /** column name */
  Name = "name",
  /** column name */
  ParentCategoryId = "parentCategoryId",
}

/** input type for updating data in table "sub_categories" */
export type Sub_Categories_Set_Input = {
  id?: Maybe<Scalars["Int"]>;
  name?: Maybe<Scalars["String"]>;
  parentCategoryId?: Maybe<Scalars["Int"]>;
};

/** aggregate stddev on columns */
export type Sub_Categories_Stddev_Fields = {
  __typename?: "sub_categories_stddev_fields";
  id?: Maybe<Scalars["Float"]>;
  parentCategoryId?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "sub_categories" */
export type Sub_Categories_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  parentCategoryId?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Sub_Categories_Stddev_Pop_Fields = {
  __typename?: "sub_categories_stddev_pop_fields";
  id?: Maybe<Scalars["Float"]>;
  parentCategoryId?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "sub_categories" */
export type Sub_Categories_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  parentCategoryId?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Sub_Categories_Stddev_Samp_Fields = {
  __typename?: "sub_categories_stddev_samp_fields";
  id?: Maybe<Scalars["Float"]>;
  parentCategoryId?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "sub_categories" */
export type Sub_Categories_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  parentCategoryId?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Sub_Categories_Sum_Fields = {
  __typename?: "sub_categories_sum_fields";
  id?: Maybe<Scalars["Int"]>;
  parentCategoryId?: Maybe<Scalars["Int"]>;
};

/** order by sum() on columns of table "sub_categories" */
export type Sub_Categories_Sum_Order_By = {
  id?: Maybe<Order_By>;
  parentCategoryId?: Maybe<Order_By>;
};

/** update columns of table "sub_categories" */
export enum Sub_Categories_Update_Column {
  /** column name */
  Id = "id",
  /** column name */
  Name = "name",
  /** column name */
  ParentCategoryId = "parentCategoryId",
}

/** aggregate var_pop on columns */
export type Sub_Categories_Var_Pop_Fields = {
  __typename?: "sub_categories_var_pop_fields";
  id?: Maybe<Scalars["Float"]>;
  parentCategoryId?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "sub_categories" */
export type Sub_Categories_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  parentCategoryId?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Sub_Categories_Var_Samp_Fields = {
  __typename?: "sub_categories_var_samp_fields";
  id?: Maybe<Scalars["Float"]>;
  parentCategoryId?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "sub_categories" */
export type Sub_Categories_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  parentCategoryId?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Sub_Categories_Variance_Fields = {
  __typename?: "sub_categories_variance_fields";
  id?: Maybe<Scalars["Float"]>;
  parentCategoryId?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "sub_categories" */
export type Sub_Categories_Variance_Order_By = {
  id?: Maybe<Order_By>;
  parentCategoryId?: Maybe<Order_By>;
};

/** subscription root */
export type Subscription_Root = {
  __typename?: "subscription_root";
  /** fetch data from the table: "circle_skills" */
  circleSkills: Array<Circle_Skills>;
  /** fetch data from the table: "circle_users" */
  circleUsers: Array<Circle_Users>;
  /** fetch aggregated fields from the table: "circle_skills" */
  circle_skills_aggregate: Circle_Skills_Aggregate;
  /** fetch data from the table: "circle_skills" using primary key columns */
  circle_skills_by_pk?: Maybe<Circle_Skills>;
  /** fetch aggregated fields from the table: "circle_users" */
  circle_users_aggregate: Circle_Users_Aggregate;
  /** fetch data from the table: "circle_users" using primary key columns */
  circle_users_by_pk?: Maybe<Circle_Users>;
  /** fetch data from the table: "circles" */
  circles: Array<Circles>;
  /** fetch aggregated fields from the table: "circles" */
  circles_aggregate: Circles_Aggregate;
  /** fetch data from the table: "circles" using primary key columns */
  circles_by_pk?: Maybe<Circles>;
  /** fetch data from the table: "messages" */
  messages: Array<Messages>;
  /** fetch aggregated fields from the table: "messages" */
  messages_aggregate: Messages_Aggregate;
  /** fetch data from the table: "messages" using primary key columns */
  messages_by_pk?: Maybe<Messages>;
  /** fetch data from the table: "organizations" */
  organizations: Array<Organizations>;
  /** fetch aggregated fields from the table: "organizations" */
  organizations_aggregate: Organizations_Aggregate;
  /** fetch data from the table: "organizations" using primary key columns */
  organizations_by_pk?: Maybe<Organizations>;
  /** fetch data from the table: "parent_categories" */
  parentCategories: Array<Parent_Categories>;
  /** fetch aggregated fields from the table: "parent_categories" */
  parent_categories_aggregate: Parent_Categories_Aggregate;
  /** fetch data from the table: "parent_categories" using primary key columns */
  parent_categories_by_pk?: Maybe<Parent_Categories>;
  /** fetch data from the table: "skills" */
  skills: Array<Skills>;
  /** fetch aggregated fields from the table: "skills" */
  skills_aggregate: Skills_Aggregate;
  /** fetch data from the table: "skills" using primary key columns */
  skills_by_pk?: Maybe<Skills>;
  /** fetch data from the table: "sub_categories" */
  subCategories: Array<Sub_Categories>;
  /** fetch data from the table: "sub_categories" using primary key columns */
  subCategory?: Maybe<Sub_Categories>;
  /** fetch aggregated fields from the table: "sub_categories" */
  sub_categories_aggregate: Sub_Categories_Aggregate;
  /** fetch data from the table: "user_skills" */
  userSkills: Array<User_Skills>;
  /** fetch aggregated fields from the table: "user_skills" */
  user_skills_aggregate: User_Skills_Aggregate;
  /** fetch data from the table: "user_skills" using primary key columns */
  user_skills_by_pk?: Maybe<User_Skills>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};

/** subscription root */
export type Subscription_RootCircleSkillsArgs = {
  distinct_on?: Maybe<Array<Circle_Skills_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Circle_Skills_Order_By>>;
  where?: Maybe<Circle_Skills_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootCircleUsersArgs = {
  distinct_on?: Maybe<Array<Circle_Users_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Circle_Users_Order_By>>;
  where?: Maybe<Circle_Users_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootCircle_Skills_AggregateArgs = {
  distinct_on?: Maybe<Array<Circle_Skills_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Circle_Skills_Order_By>>;
  where?: Maybe<Circle_Skills_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootCircle_Skills_By_PkArgs = {
  id: Scalars["Int"];
};

/** subscription root */
export type Subscription_RootCircle_Users_AggregateArgs = {
  distinct_on?: Maybe<Array<Circle_Users_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Circle_Users_Order_By>>;
  where?: Maybe<Circle_Users_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootCircle_Users_By_PkArgs = {
  id: Scalars["Int"];
};

/** subscription root */
export type Subscription_RootCirclesArgs = {
  distinct_on?: Maybe<Array<Circles_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Circles_Order_By>>;
  where?: Maybe<Circles_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootCircles_AggregateArgs = {
  distinct_on?: Maybe<Array<Circles_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Circles_Order_By>>;
  where?: Maybe<Circles_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootCircles_By_PkArgs = {
  id: Scalars["Int"];
};

/** subscription root */
export type Subscription_RootMessagesArgs = {
  distinct_on?: Maybe<Array<Messages_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Messages_Order_By>>;
  where?: Maybe<Messages_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootMessages_AggregateArgs = {
  distinct_on?: Maybe<Array<Messages_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Messages_Order_By>>;
  where?: Maybe<Messages_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootMessages_By_PkArgs = {
  id: Scalars["Int"];
};

/** subscription root */
export type Subscription_RootOrganizationsArgs = {
  distinct_on?: Maybe<Array<Organizations_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Organizations_Order_By>>;
  where?: Maybe<Organizations_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootOrganizations_AggregateArgs = {
  distinct_on?: Maybe<Array<Organizations_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Organizations_Order_By>>;
  where?: Maybe<Organizations_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootOrganizations_By_PkArgs = {
  id: Scalars["String"];
};

/** subscription root */
export type Subscription_RootParentCategoriesArgs = {
  distinct_on?: Maybe<Array<Parent_Categories_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Parent_Categories_Order_By>>;
  where?: Maybe<Parent_Categories_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootParent_Categories_AggregateArgs = {
  distinct_on?: Maybe<Array<Parent_Categories_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Parent_Categories_Order_By>>;
  where?: Maybe<Parent_Categories_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootParent_Categories_By_PkArgs = {
  id: Scalars["Int"];
};

/** subscription root */
export type Subscription_RootSkillsArgs = {
  distinct_on?: Maybe<Array<Skills_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Skills_Order_By>>;
  where?: Maybe<Skills_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootSkills_AggregateArgs = {
  distinct_on?: Maybe<Array<Skills_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Skills_Order_By>>;
  where?: Maybe<Skills_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootSkills_By_PkArgs = {
  id: Scalars["Int"];
};

/** subscription root */
export type Subscription_RootSubCategoriesArgs = {
  distinct_on?: Maybe<Array<Sub_Categories_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Sub_Categories_Order_By>>;
  where?: Maybe<Sub_Categories_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootSubCategoryArgs = {
  id: Scalars["Int"];
};

/** subscription root */
export type Subscription_RootSub_Categories_AggregateArgs = {
  distinct_on?: Maybe<Array<Sub_Categories_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Sub_Categories_Order_By>>;
  where?: Maybe<Sub_Categories_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootUserSkillsArgs = {
  distinct_on?: Maybe<Array<User_Skills_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<User_Skills_Order_By>>;
  where?: Maybe<User_Skills_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootUser_Skills_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Skills_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<User_Skills_Order_By>>;
  where?: Maybe<User_Skills_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootUser_Skills_By_PkArgs = {
  id: Scalars["Int"];
};

/** subscription root */
export type Subscription_RootUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootUsers_By_PkArgs = {
  id: Scalars["String"];
};

/** expression to compare columns of type timestamptz. All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: Maybe<Scalars["timestamptz"]>;
  _gt?: Maybe<Scalars["timestamptz"]>;
  _gte?: Maybe<Scalars["timestamptz"]>;
  _in?: Maybe<Array<Scalars["timestamptz"]>>;
  _is_null?: Maybe<Scalars["Boolean"]>;
  _lt?: Maybe<Scalars["timestamptz"]>;
  _lte?: Maybe<Scalars["timestamptz"]>;
  _neq?: Maybe<Scalars["timestamptz"]>;
  _nin?: Maybe<Array<Scalars["timestamptz"]>>;
};

/** columns and relationships of "user_skills" */
export type User_Skills = {
  __typename?: "user_skills";
  id: Scalars["Int"];
  level: Scalars["Int"];
  /** An object relationship */
  skill: Skills;
  skillId: Scalars["Int"];
  /** An object relationship */
  user: Users;
  userId: Scalars["String"];
};

/** aggregated selection of "user_skills" */
export type User_Skills_Aggregate = {
  __typename?: "user_skills_aggregate";
  aggregate?: Maybe<User_Skills_Aggregate_Fields>;
  nodes: Array<User_Skills>;
};

/** aggregate fields of "user_skills" */
export type User_Skills_Aggregate_Fields = {
  __typename?: "user_skills_aggregate_fields";
  avg?: Maybe<User_Skills_Avg_Fields>;
  count?: Maybe<Scalars["Int"]>;
  max?: Maybe<User_Skills_Max_Fields>;
  min?: Maybe<User_Skills_Min_Fields>;
  stddev?: Maybe<User_Skills_Stddev_Fields>;
  stddev_pop?: Maybe<User_Skills_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<User_Skills_Stddev_Samp_Fields>;
  sum?: Maybe<User_Skills_Sum_Fields>;
  var_pop?: Maybe<User_Skills_Var_Pop_Fields>;
  var_samp?: Maybe<User_Skills_Var_Samp_Fields>;
  variance?: Maybe<User_Skills_Variance_Fields>;
};

/** aggregate fields of "user_skills" */
export type User_Skills_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<User_Skills_Select_Column>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "user_skills" */
export type User_Skills_Aggregate_Order_By = {
  avg?: Maybe<User_Skills_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<User_Skills_Max_Order_By>;
  min?: Maybe<User_Skills_Min_Order_By>;
  stddev?: Maybe<User_Skills_Stddev_Order_By>;
  stddev_pop?: Maybe<User_Skills_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<User_Skills_Stddev_Samp_Order_By>;
  sum?: Maybe<User_Skills_Sum_Order_By>;
  var_pop?: Maybe<User_Skills_Var_Pop_Order_By>;
  var_samp?: Maybe<User_Skills_Var_Samp_Order_By>;
  variance?: Maybe<User_Skills_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "user_skills" */
export type User_Skills_Arr_Rel_Insert_Input = {
  data: Array<User_Skills_Insert_Input>;
  on_conflict?: Maybe<User_Skills_On_Conflict>;
};

/** aggregate avg on columns */
export type User_Skills_Avg_Fields = {
  __typename?: "user_skills_avg_fields";
  id?: Maybe<Scalars["Float"]>;
  level?: Maybe<Scalars["Float"]>;
  skillId?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "user_skills" */
export type User_Skills_Avg_Order_By = {
  id?: Maybe<Order_By>;
  level?: Maybe<Order_By>;
  skillId?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "user_skills". All fields are combined with a logical 'AND'. */
export type User_Skills_Bool_Exp = {
  _and?: Maybe<Array<Maybe<User_Skills_Bool_Exp>>>;
  _not?: Maybe<User_Skills_Bool_Exp>;
  _or?: Maybe<Array<Maybe<User_Skills_Bool_Exp>>>;
  id?: Maybe<Int_Comparison_Exp>;
  level?: Maybe<Int_Comparison_Exp>;
  skill?: Maybe<Skills_Bool_Exp>;
  skillId?: Maybe<Int_Comparison_Exp>;
  user?: Maybe<Users_Bool_Exp>;
  userId?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "user_skills" */
export enum User_Skills_Constraint {
  /** unique or primary key constraint */
  UserSkillPkey = "UserSkill_pkey",
}

/** input type for incrementing integer column in table "user_skills" */
export type User_Skills_Inc_Input = {
  id?: Maybe<Scalars["Int"]>;
  level?: Maybe<Scalars["Int"]>;
  skillId?: Maybe<Scalars["Int"]>;
};

/** input type for inserting data into table "user_skills" */
export type User_Skills_Insert_Input = {
  id?: Maybe<Scalars["Int"]>;
  level?: Maybe<Scalars["Int"]>;
  skill?: Maybe<Skills_Obj_Rel_Insert_Input>;
  skillId?: Maybe<Scalars["Int"]>;
  user?: Maybe<Users_Obj_Rel_Insert_Input>;
  userId?: Maybe<Scalars["String"]>;
};

/** aggregate max on columns */
export type User_Skills_Max_Fields = {
  __typename?: "user_skills_max_fields";
  id?: Maybe<Scalars["Int"]>;
  level?: Maybe<Scalars["Int"]>;
  skillId?: Maybe<Scalars["Int"]>;
  userId?: Maybe<Scalars["String"]>;
};

/** order by max() on columns of table "user_skills" */
export type User_Skills_Max_Order_By = {
  id?: Maybe<Order_By>;
  level?: Maybe<Order_By>;
  skillId?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type User_Skills_Min_Fields = {
  __typename?: "user_skills_min_fields";
  id?: Maybe<Scalars["Int"]>;
  level?: Maybe<Scalars["Int"]>;
  skillId?: Maybe<Scalars["Int"]>;
  userId?: Maybe<Scalars["String"]>;
};

/** order by min() on columns of table "user_skills" */
export type User_Skills_Min_Order_By = {
  id?: Maybe<Order_By>;
  level?: Maybe<Order_By>;
  skillId?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** response of any mutation on the table "user_skills" */
export type User_Skills_Mutation_Response = {
  __typename?: "user_skills_mutation_response";
  /** number of affected rows by the mutation */
  affected_rows: Scalars["Int"];
  /** data of the affected rows by the mutation */
  returning: Array<User_Skills>;
};

/** input type for inserting object relation for remote table "user_skills" */
export type User_Skills_Obj_Rel_Insert_Input = {
  data: User_Skills_Insert_Input;
  on_conflict?: Maybe<User_Skills_On_Conflict>;
};

/** on conflict condition type for table "user_skills" */
export type User_Skills_On_Conflict = {
  constraint: User_Skills_Constraint;
  update_columns: Array<User_Skills_Update_Column>;
  where?: Maybe<User_Skills_Bool_Exp>;
};

/** ordering options when selecting data from "user_skills" */
export type User_Skills_Order_By = {
  id?: Maybe<Order_By>;
  level?: Maybe<Order_By>;
  skill?: Maybe<Skills_Order_By>;
  skillId?: Maybe<Order_By>;
  user?: Maybe<Users_Order_By>;
  userId?: Maybe<Order_By>;
};

/** primary key columns input for table: "user_skills" */
export type User_Skills_Pk_Columns_Input = {
  id: Scalars["Int"];
};

/** select columns of table "user_skills" */
export enum User_Skills_Select_Column {
  /** column name */
  Id = "id",
  /** column name */
  Level = "level",
  /** column name */
  SkillId = "skillId",
  /** column name */
  UserId = "userId",
}

/** input type for updating data in table "user_skills" */
export type User_Skills_Set_Input = {
  id?: Maybe<Scalars["Int"]>;
  level?: Maybe<Scalars["Int"]>;
  skillId?: Maybe<Scalars["Int"]>;
  userId?: Maybe<Scalars["String"]>;
};

/** aggregate stddev on columns */
export type User_Skills_Stddev_Fields = {
  __typename?: "user_skills_stddev_fields";
  id?: Maybe<Scalars["Float"]>;
  level?: Maybe<Scalars["Float"]>;
  skillId?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "user_skills" */
export type User_Skills_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  level?: Maybe<Order_By>;
  skillId?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type User_Skills_Stddev_Pop_Fields = {
  __typename?: "user_skills_stddev_pop_fields";
  id?: Maybe<Scalars["Float"]>;
  level?: Maybe<Scalars["Float"]>;
  skillId?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "user_skills" */
export type User_Skills_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  level?: Maybe<Order_By>;
  skillId?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type User_Skills_Stddev_Samp_Fields = {
  __typename?: "user_skills_stddev_samp_fields";
  id?: Maybe<Scalars["Float"]>;
  level?: Maybe<Scalars["Float"]>;
  skillId?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "user_skills" */
export type User_Skills_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  level?: Maybe<Order_By>;
  skillId?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type User_Skills_Sum_Fields = {
  __typename?: "user_skills_sum_fields";
  id?: Maybe<Scalars["Int"]>;
  level?: Maybe<Scalars["Int"]>;
  skillId?: Maybe<Scalars["Int"]>;
};

/** order by sum() on columns of table "user_skills" */
export type User_Skills_Sum_Order_By = {
  id?: Maybe<Order_By>;
  level?: Maybe<Order_By>;
  skillId?: Maybe<Order_By>;
};

/** update columns of table "user_skills" */
export enum User_Skills_Update_Column {
  /** column name */
  Id = "id",
  /** column name */
  Level = "level",
  /** column name */
  SkillId = "skillId",
  /** column name */
  UserId = "userId",
}

/** aggregate var_pop on columns */
export type User_Skills_Var_Pop_Fields = {
  __typename?: "user_skills_var_pop_fields";
  id?: Maybe<Scalars["Float"]>;
  level?: Maybe<Scalars["Float"]>;
  skillId?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "user_skills" */
export type User_Skills_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  level?: Maybe<Order_By>;
  skillId?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type User_Skills_Var_Samp_Fields = {
  __typename?: "user_skills_var_samp_fields";
  id?: Maybe<Scalars["Float"]>;
  level?: Maybe<Scalars["Float"]>;
  skillId?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "user_skills" */
export type User_Skills_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  level?: Maybe<Order_By>;
  skillId?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type User_Skills_Variance_Fields = {
  __typename?: "user_skills_variance_fields";
  id?: Maybe<Scalars["Float"]>;
  level?: Maybe<Scalars["Float"]>;
  skillId?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "user_skills" */
export type User_Skills_Variance_Order_By = {
  id?: Maybe<Order_By>;
  level?: Maybe<Order_By>;
  skillId?: Maybe<Order_By>;
};

/** columns and relationships of "users" */
export type Users = {
  __typename?: "users";
  avatar?: Maybe<Scalars["String"]>;
  /** An array relationship */
  circleUsers: Array<Circle_Users>;
  /** An aggregated array relationship */
  circleUsers_aggregate: Circle_Users_Aggregate;
  /** An array relationship */
  circles: Array<Circles>;
  /** An aggregated array relationship */
  circles_aggregate: Circles_Aggregate;
  createdAt?: Maybe<Scalars["timestamptz"]>;
  email?: Maybe<Scalars["String"]>;
  id: Scalars["String"];
  interestedIn?: Maybe<Scalars["String"]>;
  introduction?: Maybe<Scalars["String"]>;
  lastSeen?: Maybe<Scalars["timestamptz"]>;
  /** An array relationship */
  messages: Array<Messages>;
  /** An aggregated array relationship */
  messages_aggregate: Messages_Aggregate;
  name?: Maybe<Scalars["String"]>;
  /** An array relationship */
  userSkills: Array<User_Skills>;
  /** An aggregated array relationship */
  userSkills_aggregate: User_Skills_Aggregate;
  /** An object relationship */
  users?: Maybe<Circles>;
};

/** columns and relationships of "users" */
export type UsersCircleUsersArgs = {
  distinct_on?: Maybe<Array<Circle_Users_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Circle_Users_Order_By>>;
  where?: Maybe<Circle_Users_Bool_Exp>;
};

/** columns and relationships of "users" */
export type UsersCircleUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Circle_Users_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Circle_Users_Order_By>>;
  where?: Maybe<Circle_Users_Bool_Exp>;
};

/** columns and relationships of "users" */
export type UsersCirclesArgs = {
  distinct_on?: Maybe<Array<Circles_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Circles_Order_By>>;
  where?: Maybe<Circles_Bool_Exp>;
};

/** columns and relationships of "users" */
export type UsersCircles_AggregateArgs = {
  distinct_on?: Maybe<Array<Circles_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Circles_Order_By>>;
  where?: Maybe<Circles_Bool_Exp>;
};

/** columns and relationships of "users" */
export type UsersMessagesArgs = {
  distinct_on?: Maybe<Array<Messages_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Messages_Order_By>>;
  where?: Maybe<Messages_Bool_Exp>;
};

/** columns and relationships of "users" */
export type UsersMessages_AggregateArgs = {
  distinct_on?: Maybe<Array<Messages_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Messages_Order_By>>;
  where?: Maybe<Messages_Bool_Exp>;
};

/** columns and relationships of "users" */
export type UsersUserSkillsArgs = {
  distinct_on?: Maybe<Array<User_Skills_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<User_Skills_Order_By>>;
  where?: Maybe<User_Skills_Bool_Exp>;
};

/** columns and relationships of "users" */
export type UsersUserSkills_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Skills_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<User_Skills_Order_By>>;
  where?: Maybe<User_Skills_Bool_Exp>;
};

/** aggregated selection of "users" */
export type Users_Aggregate = {
  __typename?: "users_aggregate";
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
  __typename?: "users_aggregate_fields";
  count?: Maybe<Scalars["Int"]>;
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Users_Select_Column>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "users" */
export type Users_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Users_Max_Order_By>;
  min?: Maybe<Users_Min_Order_By>;
};

/** input type for inserting array relation for remote table "users" */
export type Users_Arr_Rel_Insert_Input = {
  data: Array<Users_Insert_Input>;
  on_conflict?: Maybe<Users_On_Conflict>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Users_Bool_Exp>>>;
  _not?: Maybe<Users_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Users_Bool_Exp>>>;
  avatar?: Maybe<String_Comparison_Exp>;
  circleUsers?: Maybe<Circle_Users_Bool_Exp>;
  circles?: Maybe<Circles_Bool_Exp>;
  createdAt?: Maybe<Timestamptz_Comparison_Exp>;
  email?: Maybe<String_Comparison_Exp>;
  id?: Maybe<String_Comparison_Exp>;
  interestedIn?: Maybe<String_Comparison_Exp>;
  introduction?: Maybe<String_Comparison_Exp>;
  lastSeen?: Maybe<Timestamptz_Comparison_Exp>;
  messages?: Maybe<Messages_Bool_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  userSkills?: Maybe<User_Skills_Bool_Exp>;
  users?: Maybe<Circles_Bool_Exp>;
};

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint */
  UserPkey = "user_pkey",
}

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  avatar?: Maybe<Scalars["String"]>;
  circleUsers?: Maybe<Circle_Users_Arr_Rel_Insert_Input>;
  circles?: Maybe<Circles_Arr_Rel_Insert_Input>;
  createdAt?: Maybe<Scalars["timestamptz"]>;
  email?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["String"]>;
  interestedIn?: Maybe<Scalars["String"]>;
  introduction?: Maybe<Scalars["String"]>;
  lastSeen?: Maybe<Scalars["timestamptz"]>;
  messages?: Maybe<Messages_Arr_Rel_Insert_Input>;
  name?: Maybe<Scalars["String"]>;
  userSkills?: Maybe<User_Skills_Arr_Rel_Insert_Input>;
  users?: Maybe<Circles_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: "users_max_fields";
  avatar?: Maybe<Scalars["String"]>;
  createdAt?: Maybe<Scalars["timestamptz"]>;
  email?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["String"]>;
  interestedIn?: Maybe<Scalars["String"]>;
  introduction?: Maybe<Scalars["String"]>;
  lastSeen?: Maybe<Scalars["timestamptz"]>;
  name?: Maybe<Scalars["String"]>;
};

/** order by max() on columns of table "users" */
export type Users_Max_Order_By = {
  avatar?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  interestedIn?: Maybe<Order_By>;
  introduction?: Maybe<Order_By>;
  lastSeen?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: "users_min_fields";
  avatar?: Maybe<Scalars["String"]>;
  createdAt?: Maybe<Scalars["timestamptz"]>;
  email?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["String"]>;
  interestedIn?: Maybe<Scalars["String"]>;
  introduction?: Maybe<Scalars["String"]>;
  lastSeen?: Maybe<Scalars["timestamptz"]>;
  name?: Maybe<Scalars["String"]>;
};

/** order by min() on columns of table "users" */
export type Users_Min_Order_By = {
  avatar?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  interestedIn?: Maybe<Order_By>;
  introduction?: Maybe<Order_By>;
  lastSeen?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  __typename?: "users_mutation_response";
  /** number of affected rows by the mutation */
  affected_rows: Scalars["Int"];
  /** data of the affected rows by the mutation */
  returning: Array<Users>;
};

/** input type for inserting object relation for remote table "users" */
export type Users_Obj_Rel_Insert_Input = {
  data: Users_Insert_Input;
  on_conflict?: Maybe<Users_On_Conflict>;
};

/** on conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns: Array<Users_Update_Column>;
  where?: Maybe<Users_Bool_Exp>;
};

/** ordering options when selecting data from "users" */
export type Users_Order_By = {
  avatar?: Maybe<Order_By>;
  circleUsers_aggregate?: Maybe<Circle_Users_Aggregate_Order_By>;
  circles_aggregate?: Maybe<Circles_Aggregate_Order_By>;
  createdAt?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  interestedIn?: Maybe<Order_By>;
  introduction?: Maybe<Order_By>;
  lastSeen?: Maybe<Order_By>;
  messages_aggregate?: Maybe<Messages_Aggregate_Order_By>;
  name?: Maybe<Order_By>;
  userSkills_aggregate?: Maybe<User_Skills_Aggregate_Order_By>;
  users?: Maybe<Circles_Order_By>;
};

/** primary key columns input for table: "users" */
export type Users_Pk_Columns_Input = {
  id: Scalars["String"];
};

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  Avatar = "avatar",
  /** column name */
  CreatedAt = "createdAt",
  /** column name */
  Email = "email",
  /** column name */
  Id = "id",
  /** column name */
  InterestedIn = "interestedIn",
  /** column name */
  Introduction = "introduction",
  /** column name */
  LastSeen = "lastSeen",
  /** column name */
  Name = "name",
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  avatar?: Maybe<Scalars["String"]>;
  createdAt?: Maybe<Scalars["timestamptz"]>;
  email?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["String"]>;
  interestedIn?: Maybe<Scalars["String"]>;
  introduction?: Maybe<Scalars["String"]>;
  lastSeen?: Maybe<Scalars["timestamptz"]>;
  name?: Maybe<Scalars["String"]>;
};

/** update columns of table "users" */
export enum Users_Update_Column {
  /** column name */
  Avatar = "avatar",
  /** column name */
  CreatedAt = "createdAt",
  /** column name */
  Email = "email",
  /** column name */
  Id = "id",
  /** column name */
  InterestedIn = "interestedIn",
  /** column name */
  Introduction = "introduction",
  /** column name */
  LastSeen = "lastSeen",
  /** column name */
  Name = "name",
}

export type DeleteCircleSkillMutationVariables = Exact<{
  circleId: Scalars["Int"];
  skillId: Scalars["Int"];
}>;

export type DeleteCircleSkillMutation = { __typename?: "mutation_root" } & {
  delete_circle_skills?: Maybe<
    { __typename?: "circle_skills_mutation_response" } & Pick<
      Circle_Skills_Mutation_Response,
      "affected_rows"
    >
  >;
};

export type DeleteUserSkillMutationVariables = Exact<{
  userId: Scalars["String"];
  skillId: Scalars["Int"];
}>;

export type DeleteUserSkillMutation = { __typename?: "mutation_root" } & {
  delete_user_skills?: Maybe<
    { __typename?: "user_skills_mutation_response" } & Pick<
      User_Skills_Mutation_Response,
      "affected_rows"
    >
  >;
};

export type InsertCircleMutationVariables = Exact<{
  objects: Array<Circles_Insert_Input>;
}>;

export type InsertCircleMutation = { __typename?: "mutation_root" } & {
  insert_circles?: Maybe<
    { __typename?: "circles_mutation_response" } & Pick<
      Circles_Mutation_Response,
      "affected_rows"
    >
  >;
};

export type InsertCircleSkillMutationVariables = Exact<{
  circleId: Scalars["Int"];
  skillId: Scalars["Int"];
}>;

export type InsertCircleSkillMutation = { __typename?: "mutation_root" } & {
  insert_circle_skills?: Maybe<
    { __typename?: "circle_skills_mutation_response" } & Pick<
      Circle_Skills_Mutation_Response,
      "affected_rows"
    >
  >;
};

export type InsertMessageMutationVariables = Exact<{
  objects: Array<Messages_Insert_Input>;
}>;

export type InsertMessageMutation = { __typename?: "mutation_root" } & {
  insert_messages?: Maybe<
    { __typename?: "messages_mutation_response" } & {
      returning: Array<{ __typename?: "messages" } & Pick<Messages, "id">>;
    }
  >;
};

export type InsertUserSkillMutationVariables = Exact<{
  userId: Scalars["String"];
  skillId: Scalars["Int"];
}>;

export type InsertUserSkillMutation = { __typename?: "mutation_root" } & {
  insert_user_skills?: Maybe<
    { __typename?: "user_skills_mutation_response" } & Pick<
      User_Skills_Mutation_Response,
      "affected_rows"
    >
  >;
};

export type UpdateCirlceMutationVariables = Exact<{
  id: Scalars["Int"];
  inputs?: Maybe<Circles_Set_Input>;
}>;

export type UpdateCirlceMutation = { __typename?: "mutation_root" } & {
  update_circles?: Maybe<
    { __typename?: "circles_mutation_response" } & Pick<
      Circles_Mutation_Response,
      "affected_rows"
    >
  >;
};

export type UpdateUserMutationVariables = Exact<{
  _set?: Maybe<Users_Set_Input>;
  where: Users_Bool_Exp;
}>;

export type UpdateUserMutation = { __typename?: "mutation_root" } & {
  update_users?: Maybe<
    { __typename?: "users_mutation_response" } & Pick<
      Users_Mutation_Response,
      "affected_rows"
    >
  >;
};

export type CategoriesQueryVariables = Exact<{ [key: string]: never }>;

export type CategoriesQuery = { __typename?: "query_root" } & {
  parentCategories: Array<
    { __typename?: "parent_categories" } & Pick<
      Parent_Categories,
      "id" | "name"
    > & {
        subCategories: Array<
          { __typename?: "sub_categories" } & Pick<
            Sub_Categories,
            "id" | "name"
          >
        >;
      }
  >;
};

export type CircleQueryVariables = Exact<{
  id: Scalars["Int"];
}>;

export type CircleQuery = { __typename?: "query_root" } & {
  circle?: Maybe<
    { __typename?: "circles" } & Pick<
      Circles,
      "id" | "avatar" | "name" | "mainRole" | "whatWeWillDo" | "recruitTitle"
    > & {
        owner?: Maybe<
          { __typename?: "users" } & Pick<Users, "id" | "name" | "avatar">
        >;
        subCategory?: Maybe<
          { __typename?: "sub_categories" } & Pick<
            Sub_Categories,
            "id" | "name"
          >
        >;
        circleSkills: Array<
          { __typename?: "circle_skills" } & {
            skill: { __typename?: "skills" } & Pick<
              Skills,
              "id" | "name" | "avatar"
            >;
          }
        >;
        circleUsers: Array<
          { __typename?: "circle_users" } & Pick<Circle_Users, "id">
        >;
        circleUsers_aggregate: { __typename?: "circle_users_aggregate" } & {
          aggregate?: Maybe<
            { __typename?: "circle_users_aggregate_fields" } & Pick<
              Circle_Users_Aggregate_Fields,
              "count"
            >
          >;
        };
      }
  >;
};

export type CirclesQueryVariables = Exact<{
  limit: Scalars["Int"];
  offset: Scalars["Int"];
  where?: Maybe<Circles_Bool_Exp>;
}>;

export type CirclesQuery = { __typename?: "query_root" } & {
  circles: Array<
    { __typename?: "circles" } & Pick<
      Circles,
      "id" | "name" | "recruitTitle" | "avatar" | "whatWeWillDo" | "mainRole"
    > & {
        circleUsers_aggregate: { __typename?: "circle_users_aggregate" } & {
          aggregate?: Maybe<
            { __typename?: "circle_users_aggregate_fields" } & Pick<
              Circle_Users_Aggregate_Fields,
              "count"
            >
          >;
        };
      }
  >;
  circles_aggregate: { __typename?: "circles_aggregate" } & {
    aggregate?: Maybe<
      { __typename?: "circles_aggregate_fields" } & Pick<
        Circles_Aggregate_Fields,
        "count"
      >
    >;
  };
};

export type MessagesQueryVariables = Exact<{
  last_received_ts?: Maybe<Scalars["timestamptz"]>;
}>;

export type MessagesQuery = { __typename?: "query_root" } & {
  messages: Array<
    { __typename?: "messages" } & Pick<
      Messages,
      "timestamp" | "text" | "id"
    > & {
        users: { __typename?: "users" } & Pick<Users, "id" | "avatar" | "name">;
      }
  >;
};

export type SkillAndSubCategoryQueryVariables = Exact<{ [key: string]: never }>;

export type SkillAndSubCategoryQuery = { __typename?: "query_root" } & {
  skills: Array<
    { __typename?: "skills" } & Pick<Skills, "id" | "avatar" | "name">
  >;
  subCategories: Array<
    { __typename?: "sub_categories" } & Pick<Sub_Categories, "id" | "name">
  >;
};

export type UserQueryVariables = Exact<{
  id: Scalars["String"];
}>;

export type UserQuery = { __typename?: "query_root" } & {
  user?: Maybe<
    { __typename?: "users" } & Pick<
      Users,
      "id" | "avatar" | "name" | "introduction" | "interestedIn"
    > & {
        userSkills: Array<
          { __typename?: "user_skills" } & {
            skill: { __typename?: "skills" } & Pick<
              Skills,
              "id" | "avatar" | "name"
            >;
          }
        >;
        circleUsers: Array<
          { __typename?: "circle_users" } & {
            circle: { __typename?: "circles" } & Pick<
              Circles,
              "id" | "avatar" | "name" | "recruitTitle"
            > & {
                circleUsers_aggregate: {
                  __typename?: "circle_users_aggregate";
                } & {
                  aggregate?: Maybe<
                    { __typename?: "circle_users_aggregate_fields" } & Pick<
                      Circle_Users_Aggregate_Fields,
                      "count"
                    >
                  >;
                };
              };
          }
        >;
      }
  >;
};

export type UserCirclesQueryVariables = Exact<{
  id: Scalars["String"];
}>;

export type UserCirclesQuery = { __typename?: "query_root" } & {
  user?: Maybe<
    { __typename?: "users" } & Pick<Users, "id"> & {
        circleUsers: Array<
          { __typename?: "circle_users" } & {
            circle: { __typename?: "circles" } & Pick<
              Circles,
              "id" | "name" | "avatar"
            >;
          }
        >;
      }
  >;
};

export type NewMessagesSubscriptionVariables = Exact<{
  circleId: Scalars["Int"];
}>;

export type NewMessagesSubscription = { __typename?: "subscription_root" } & {
  messages: Array<
    { __typename?: "messages" } & Pick<
      Messages,
      "timestamp" | "text" | "id"
    > & {
        users: { __typename?: "users" } & Pick<Users, "id" | "avatar" | "name">;
      }
  >;
};

export const DeleteCircleSkillDocument = gql`
  mutation DeleteCircleSkill($circleId: Int!, $skillId: Int!) {
    delete_circle_skills(
      where: { circleId: { _eq: $circleId }, skillId: { _eq: $skillId } }
    ) {
      affected_rows
    }
  }
`;
export type DeleteCircleSkillMutationFn = Apollo.MutationFunction<
  DeleteCircleSkillMutation,
  DeleteCircleSkillMutationVariables
>;

/**
 * __useDeleteCircleSkillMutation__
 *
 * To run a mutation, you first call `useDeleteCircleSkillMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteCircleSkillMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteCircleSkillMutation, { data, loading, error }] = useDeleteCircleSkillMutation({
 *   variables: {
 *      circleId: // value for 'circleId'
 *      skillId: // value for 'skillId'
 *   },
 * });
 */
export function useDeleteCircleSkillMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteCircleSkillMutation,
    DeleteCircleSkillMutationVariables
  >
) {
  return Apollo.useMutation<
    DeleteCircleSkillMutation,
    DeleteCircleSkillMutationVariables
  >(DeleteCircleSkillDocument, baseOptions);
}
export type DeleteCircleSkillMutationHookResult = ReturnType<
  typeof useDeleteCircleSkillMutation
>;
export type DeleteCircleSkillMutationResult = Apollo.MutationResult<DeleteCircleSkillMutation>;
export type DeleteCircleSkillMutationOptions = Apollo.BaseMutationOptions<
  DeleteCircleSkillMutation,
  DeleteCircleSkillMutationVariables
>;
export const DeleteUserSkillDocument = gql`
  mutation DeleteUserSkill($userId: String!, $skillId: Int!) {
    delete_user_skills(
      where: { userId: { _eq: $userId }, skillId: { _eq: $skillId } }
    ) {
      affected_rows
    }
  }
`;
export type DeleteUserSkillMutationFn = Apollo.MutationFunction<
  DeleteUserSkillMutation,
  DeleteUserSkillMutationVariables
>;

/**
 * __useDeleteUserSkillMutation__
 *
 * To run a mutation, you first call `useDeleteUserSkillMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteUserSkillMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteUserSkillMutation, { data, loading, error }] = useDeleteUserSkillMutation({
 *   variables: {
 *      userId: // value for 'userId'
 *      skillId: // value for 'skillId'
 *   },
 * });
 */
export function useDeleteUserSkillMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteUserSkillMutation,
    DeleteUserSkillMutationVariables
  >
) {
  return Apollo.useMutation<
    DeleteUserSkillMutation,
    DeleteUserSkillMutationVariables
  >(DeleteUserSkillDocument, baseOptions);
}
export type DeleteUserSkillMutationHookResult = ReturnType<
  typeof useDeleteUserSkillMutation
>;
export type DeleteUserSkillMutationResult = Apollo.MutationResult<DeleteUserSkillMutation>;
export type DeleteUserSkillMutationOptions = Apollo.BaseMutationOptions<
  DeleteUserSkillMutation,
  DeleteUserSkillMutationVariables
>;
export const InsertCircleDocument = gql`
  mutation InsertCircle($objects: [circles_insert_input!]!) {
    insert_circles(objects: $objects) {
      affected_rows
    }
  }
`;
export type InsertCircleMutationFn = Apollo.MutationFunction<
  InsertCircleMutation,
  InsertCircleMutationVariables
>;

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
export function useInsertCircleMutation(
  baseOptions?: Apollo.MutationHookOptions<
    InsertCircleMutation,
    InsertCircleMutationVariables
  >
) {
  return Apollo.useMutation<
    InsertCircleMutation,
    InsertCircleMutationVariables
  >(InsertCircleDocument, baseOptions);
}
export type InsertCircleMutationHookResult = ReturnType<
  typeof useInsertCircleMutation
>;
export type InsertCircleMutationResult = Apollo.MutationResult<InsertCircleMutation>;
export type InsertCircleMutationOptions = Apollo.BaseMutationOptions<
  InsertCircleMutation,
  InsertCircleMutationVariables
>;
export const InsertCircleSkillDocument = gql`
  mutation InsertCircleSkill($circleId: Int!, $skillId: Int!) {
    insert_circle_skills(objects: { circleId: $circleId, skillId: $skillId }) {
      affected_rows
    }
  }
`;
export type InsertCircleSkillMutationFn = Apollo.MutationFunction<
  InsertCircleSkillMutation,
  InsertCircleSkillMutationVariables
>;

/**
 * __useInsertCircleSkillMutation__
 *
 * To run a mutation, you first call `useInsertCircleSkillMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertCircleSkillMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertCircleSkillMutation, { data, loading, error }] = useInsertCircleSkillMutation({
 *   variables: {
 *      circleId: // value for 'circleId'
 *      skillId: // value for 'skillId'
 *   },
 * });
 */
export function useInsertCircleSkillMutation(
  baseOptions?: Apollo.MutationHookOptions<
    InsertCircleSkillMutation,
    InsertCircleSkillMutationVariables
  >
) {
  return Apollo.useMutation<
    InsertCircleSkillMutation,
    InsertCircleSkillMutationVariables
  >(InsertCircleSkillDocument, baseOptions);
}
export type InsertCircleSkillMutationHookResult = ReturnType<
  typeof useInsertCircleSkillMutation
>;
export type InsertCircleSkillMutationResult = Apollo.MutationResult<InsertCircleSkillMutation>;
export type InsertCircleSkillMutationOptions = Apollo.BaseMutationOptions<
  InsertCircleSkillMutation,
  InsertCircleSkillMutationVariables
>;
export const InsertMessageDocument = gql`
  mutation InsertMessage($objects: [messages_insert_input!]!) {
    insert_messages(objects: $objects) {
      returning {
        id
      }
    }
  }
`;
export type InsertMessageMutationFn = Apollo.MutationFunction<
  InsertMessageMutation,
  InsertMessageMutationVariables
>;

/**
 * __useInsertMessageMutation__
 *
 * To run a mutation, you first call `useInsertMessageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertMessageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertMessageMutation, { data, loading, error }] = useInsertMessageMutation({
 *   variables: {
 *      objects: // value for 'objects'
 *   },
 * });
 */
export function useInsertMessageMutation(
  baseOptions?: Apollo.MutationHookOptions<
    InsertMessageMutation,
    InsertMessageMutationVariables
  >
) {
  return Apollo.useMutation<
    InsertMessageMutation,
    InsertMessageMutationVariables
  >(InsertMessageDocument, baseOptions);
}
export type InsertMessageMutationHookResult = ReturnType<
  typeof useInsertMessageMutation
>;
export type InsertMessageMutationResult = Apollo.MutationResult<InsertMessageMutation>;
export type InsertMessageMutationOptions = Apollo.BaseMutationOptions<
  InsertMessageMutation,
  InsertMessageMutationVariables
>;
export const InsertUserSkillDocument = gql`
  mutation InsertUserSkill($userId: String!, $skillId: Int!) {
    insert_user_skills(
      objects: { userId: $userId, skillId: $skillId, level: 1 }
    ) {
      affected_rows
    }
  }
`;
export type InsertUserSkillMutationFn = Apollo.MutationFunction<
  InsertUserSkillMutation,
  InsertUserSkillMutationVariables
>;

/**
 * __useInsertUserSkillMutation__
 *
 * To run a mutation, you first call `useInsertUserSkillMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertUserSkillMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertUserSkillMutation, { data, loading, error }] = useInsertUserSkillMutation({
 *   variables: {
 *      userId: // value for 'userId'
 *      skillId: // value for 'skillId'
 *   },
 * });
 */
export function useInsertUserSkillMutation(
  baseOptions?: Apollo.MutationHookOptions<
    InsertUserSkillMutation,
    InsertUserSkillMutationVariables
  >
) {
  return Apollo.useMutation<
    InsertUserSkillMutation,
    InsertUserSkillMutationVariables
  >(InsertUserSkillDocument, baseOptions);
}
export type InsertUserSkillMutationHookResult = ReturnType<
  typeof useInsertUserSkillMutation
>;
export type InsertUserSkillMutationResult = Apollo.MutationResult<InsertUserSkillMutation>;
export type InsertUserSkillMutationOptions = Apollo.BaseMutationOptions<
  InsertUserSkillMutation,
  InsertUserSkillMutationVariables
>;
export const UpdateCirlceDocument = gql`
  mutation UpdateCirlce($id: Int!, $inputs: circles_set_input) {
    update_circles(where: { id: { _eq: $id } }, _set: $inputs) {
      affected_rows
    }
  }
`;
export type UpdateCirlceMutationFn = Apollo.MutationFunction<
  UpdateCirlceMutation,
  UpdateCirlceMutationVariables
>;

/**
 * __useUpdateCirlceMutation__
 *
 * To run a mutation, you first call `useUpdateCirlceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCirlceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCirlceMutation, { data, loading, error }] = useUpdateCirlceMutation({
 *   variables: {
 *      id: // value for 'id'
 *      inputs: // value for 'inputs'
 *   },
 * });
 */
export function useUpdateCirlceMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateCirlceMutation,
    UpdateCirlceMutationVariables
  >
) {
  return Apollo.useMutation<
    UpdateCirlceMutation,
    UpdateCirlceMutationVariables
  >(UpdateCirlceDocument, baseOptions);
}
export type UpdateCirlceMutationHookResult = ReturnType<
  typeof useUpdateCirlceMutation
>;
export type UpdateCirlceMutationResult = Apollo.MutationResult<UpdateCirlceMutation>;
export type UpdateCirlceMutationOptions = Apollo.BaseMutationOptions<
  UpdateCirlceMutation,
  UpdateCirlceMutationVariables
>;
export const UpdateUserDocument = gql`
  mutation updateUser($_set: users_set_input, $where: users_bool_exp!) {
    update_users(where: $where, _set: $_set) {
      affected_rows
    }
  }
`;
export type UpdateUserMutationFn = Apollo.MutationFunction<
  UpdateUserMutation,
  UpdateUserMutationVariables
>;

/**
 * __useUpdateUserMutation__
 *
 * To run a mutation, you first call `useUpdateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserMutation, { data, loading, error }] = useUpdateUserMutation({
 *   variables: {
 *      _set: // value for '_set'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useUpdateUserMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateUserMutation,
    UpdateUserMutationVariables
  >
) {
  return Apollo.useMutation<UpdateUserMutation, UpdateUserMutationVariables>(
    UpdateUserDocument,
    baseOptions
  );
}
export type UpdateUserMutationHookResult = ReturnType<
  typeof useUpdateUserMutation
>;
export type UpdateUserMutationResult = Apollo.MutationResult<UpdateUserMutation>;
export type UpdateUserMutationOptions = Apollo.BaseMutationOptions<
  UpdateUserMutation,
  UpdateUserMutationVariables
>;
export const CategoriesDocument = gql`
  query Categories {
    parentCategories {
      id
      name
      subCategories {
        id
        name
      }
    }
  }
`;

/**
 * __useCategoriesQuery__
 *
 * To run a query within a React component, call `useCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCategoriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useCategoriesQuery(
  baseOptions?: Apollo.QueryHookOptions<
    CategoriesQuery,
    CategoriesQueryVariables
  >
) {
  return Apollo.useQuery<CategoriesQuery, CategoriesQueryVariables>(
    CategoriesDocument,
    baseOptions
  );
}
export function useCategoriesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    CategoriesQuery,
    CategoriesQueryVariables
  >
) {
  return Apollo.useLazyQuery<CategoriesQuery, CategoriesQueryVariables>(
    CategoriesDocument,
    baseOptions
  );
}
export type CategoriesQueryHookResult = ReturnType<typeof useCategoriesQuery>;
export type CategoriesLazyQueryHookResult = ReturnType<
  typeof useCategoriesLazyQuery
>;
export type CategoriesQueryResult = Apollo.QueryResult<
  CategoriesQuery,
  CategoriesQueryVariables
>;
export const CircleDocument = gql`
  query Circle($id: Int!) {
    circle: circles_by_pk(id: $id) {
      id
      avatar
      name
      mainRole
      whatWeWillDo
      recruitTitle
      owner {
        id
        name
        avatar
      }
      subCategory {
        id
        name
      }
      circleSkills {
        skill {
          id
          name
          avatar
        }
      }
      circleUsers {
        id
      }
      circleUsers_aggregate {
        aggregate {
          count
        }
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
export function useCircleQuery(
  baseOptions: Apollo.QueryHookOptions<CircleQuery, CircleQueryVariables>
) {
  return Apollo.useQuery<CircleQuery, CircleQueryVariables>(
    CircleDocument,
    baseOptions
  );
}
export function useCircleLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<CircleQuery, CircleQueryVariables>
) {
  return Apollo.useLazyQuery<CircleQuery, CircleQueryVariables>(
    CircleDocument,
    baseOptions
  );
}
export type CircleQueryHookResult = ReturnType<typeof useCircleQuery>;
export type CircleLazyQueryHookResult = ReturnType<typeof useCircleLazyQuery>;
export type CircleQueryResult = Apollo.QueryResult<
  CircleQuery,
  CircleQueryVariables
>;
export const CirclesDocument = gql`
  query Circles($limit: Int!, $offset: Int!, $where: circles_bool_exp) {
    circles(limit: $limit, offset: $offset, where: $where) {
      id
      name
      recruitTitle
      avatar
      whatWeWillDo
      mainRole
      circleUsers_aggregate {
        aggregate {
          count
        }
      }
    }
    circles_aggregate(where: $where) {
      aggregate {
        count(columns: avatar)
      }
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
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useCirclesQuery(
  baseOptions: Apollo.QueryHookOptions<CirclesQuery, CirclesQueryVariables>
) {
  return Apollo.useQuery<CirclesQuery, CirclesQueryVariables>(
    CirclesDocument,
    baseOptions
  );
}
export function useCirclesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<CirclesQuery, CirclesQueryVariables>
) {
  return Apollo.useLazyQuery<CirclesQuery, CirclesQueryVariables>(
    CirclesDocument,
    baseOptions
  );
}
export type CirclesQueryHookResult = ReturnType<typeof useCirclesQuery>;
export type CirclesLazyQueryHookResult = ReturnType<typeof useCirclesLazyQuery>;
export type CirclesQueryResult = Apollo.QueryResult<
  CirclesQuery,
  CirclesQueryVariables
>;
export const MessagesDocument = gql`
  query Messages($last_received_ts: timestamptz) {
    messages(
      where: { timestamp: { _lt: $last_received_ts } }
      order_by: { timestamp: desc }
      limit: 20
    ) {
      timestamp
      text
      id
      users {
        id
        avatar
        name
      }
    }
  }
`;

/**
 * __useMessagesQuery__
 *
 * To run a query within a React component, call `useMessagesQuery` and pass it any options that fit your needs.
 * When your component renders, `useMessagesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMessagesQuery({
 *   variables: {
 *      last_received_ts: // value for 'last_received_ts'
 *   },
 * });
 */
export function useMessagesQuery(
  baseOptions?: Apollo.QueryHookOptions<MessagesQuery, MessagesQueryVariables>
) {
  return Apollo.useQuery<MessagesQuery, MessagesQueryVariables>(
    MessagesDocument,
    baseOptions
  );
}
export function useMessagesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    MessagesQuery,
    MessagesQueryVariables
  >
) {
  return Apollo.useLazyQuery<MessagesQuery, MessagesQueryVariables>(
    MessagesDocument,
    baseOptions
  );
}
export type MessagesQueryHookResult = ReturnType<typeof useMessagesQuery>;
export type MessagesLazyQueryHookResult = ReturnType<
  typeof useMessagesLazyQuery
>;
export type MessagesQueryResult = Apollo.QueryResult<
  MessagesQuery,
  MessagesQueryVariables
>;
export const SkillAndSubCategoryDocument = gql`
  query SkillAndSubCategory {
    skills {
      id
      avatar
      name
    }
    subCategories {
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
export function useSkillAndSubCategoryQuery(
  baseOptions?: Apollo.QueryHookOptions<
    SkillAndSubCategoryQuery,
    SkillAndSubCategoryQueryVariables
  >
) {
  return Apollo.useQuery<
    SkillAndSubCategoryQuery,
    SkillAndSubCategoryQueryVariables
  >(SkillAndSubCategoryDocument, baseOptions);
}
export function useSkillAndSubCategoryLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    SkillAndSubCategoryQuery,
    SkillAndSubCategoryQueryVariables
  >
) {
  return Apollo.useLazyQuery<
    SkillAndSubCategoryQuery,
    SkillAndSubCategoryQueryVariables
  >(SkillAndSubCategoryDocument, baseOptions);
}
export type SkillAndSubCategoryQueryHookResult = ReturnType<
  typeof useSkillAndSubCategoryQuery
>;
export type SkillAndSubCategoryLazyQueryHookResult = ReturnType<
  typeof useSkillAndSubCategoryLazyQuery
>;
export type SkillAndSubCategoryQueryResult = Apollo.QueryResult<
  SkillAndSubCategoryQuery,
  SkillAndSubCategoryQueryVariables
>;
export const UserDocument = gql`
  query User($id: String!) {
    user: users_by_pk(id: $id) {
      id
      avatar
      name
      introduction
      interestedIn
      userSkills {
        skill {
          id
          avatar
          name
        }
      }
      circleUsers {
        circle {
          id
          avatar
          name
          recruitTitle
          circleUsers_aggregate {
            aggregate {
              count
            }
          }
        }
      }
    }
  }
`;

/**
 * __useUserQuery__
 *
 * To run a query within a React component, call `useUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useUserQuery(
  baseOptions: Apollo.QueryHookOptions<UserQuery, UserQueryVariables>
) {
  return Apollo.useQuery<UserQuery, UserQueryVariables>(
    UserDocument,
    baseOptions
  );
}
export function useUserLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<UserQuery, UserQueryVariables>
) {
  return Apollo.useLazyQuery<UserQuery, UserQueryVariables>(
    UserDocument,
    baseOptions
  );
}
export type UserQueryHookResult = ReturnType<typeof useUserQuery>;
export type UserLazyQueryHookResult = ReturnType<typeof useUserLazyQuery>;
export type UserQueryResult = Apollo.QueryResult<UserQuery, UserQueryVariables>;
export const UserCirclesDocument = gql`
  query UserCircles($id: String!) {
    user: users_by_pk(id: $id) {
      id
      circleUsers {
        circle {
          id
          name
          avatar
        }
      }
    }
  }
`;

/**
 * __useUserCirclesQuery__
 *
 * To run a query within a React component, call `useUserCirclesQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserCirclesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserCirclesQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useUserCirclesQuery(
  baseOptions: Apollo.QueryHookOptions<
    UserCirclesQuery,
    UserCirclesQueryVariables
  >
) {
  return Apollo.useQuery<UserCirclesQuery, UserCirclesQueryVariables>(
    UserCirclesDocument,
    baseOptions
  );
}
export function useUserCirclesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    UserCirclesQuery,
    UserCirclesQueryVariables
  >
) {
  return Apollo.useLazyQuery<UserCirclesQuery, UserCirclesQueryVariables>(
    UserCirclesDocument,
    baseOptions
  );
}
export type UserCirclesQueryHookResult = ReturnType<typeof useUserCirclesQuery>;
export type UserCirclesLazyQueryHookResult = ReturnType<
  typeof useUserCirclesLazyQuery
>;
export type UserCirclesQueryResult = Apollo.QueryResult<
  UserCirclesQuery,
  UserCirclesQueryVariables
>;
export const NewMessagesDocument = gql`
  subscription NewMessages($circleId: Int!) {
    messages(
      where: { circles: { id: { _eq: $circleId } } }
      order_by: { timestamp: desc }
      limit: 1
    ) {
      timestamp
      text
      id
      users {
        id
        avatar
        name
      }
    }
  }
`;

/**
 * __useNewMessagesSubscription__
 *
 * To run a query within a React component, call `useNewMessagesSubscription` and pass it any options that fit your needs.
 * When your component renders, `useNewMessagesSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNewMessagesSubscription({
 *   variables: {
 *      circleId: // value for 'circleId'
 *   },
 * });
 */
export function useNewMessagesSubscription(
  baseOptions: Apollo.SubscriptionHookOptions<
    NewMessagesSubscription,
    NewMessagesSubscriptionVariables
  >
) {
  return Apollo.useSubscription<
    NewMessagesSubscription,
    NewMessagesSubscriptionVariables
  >(NewMessagesDocument, baseOptions);
}
export type NewMessagesSubscriptionHookResult = ReturnType<
  typeof useNewMessagesSubscription
>;
export type NewMessagesSubscriptionResult = Apollo.SubscriptionResult<NewMessagesSubscription>;
