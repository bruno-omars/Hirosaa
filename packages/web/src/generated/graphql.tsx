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
  id: Scalars['Int'];
  room_id: Scalars['Int'];
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
  id?: Maybe<Scalars['Float']>;
  room_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "Message" */
export type Message_Avg_Order_By = {
  id?: Maybe<Order_By>;
  room_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "Message". All fields are combined with a logical 'AND'. */
export type Message_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Message_Bool_Exp>>>;
  _not?: Maybe<Message_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Message_Bool_Exp>>>;
  id?: Maybe<Int_Comparison_Exp>;
  room_id?: Maybe<Int_Comparison_Exp>;
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
  id?: Maybe<Scalars['Int']>;
  room_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "Message" */
export type Message_Insert_Input = {
  id?: Maybe<Scalars['Int']>;
  room_id?: Maybe<Scalars['Int']>;
  text?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Message_Max_Fields = {
  __typename?: 'Message_max_fields';
  id?: Maybe<Scalars['Int']>;
  room_id?: Maybe<Scalars['Int']>;
  text?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "Message" */
export type Message_Max_Order_By = {
  id?: Maybe<Order_By>;
  room_id?: Maybe<Order_By>;
  text?: Maybe<Order_By>;
  timestamp?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Message_Min_Fields = {
  __typename?: 'Message_min_fields';
  id?: Maybe<Scalars['Int']>;
  room_id?: Maybe<Scalars['Int']>;
  text?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "Message" */
export type Message_Min_Order_By = {
  id?: Maybe<Order_By>;
  room_id?: Maybe<Order_By>;
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
  id?: Maybe<Order_By>;
  room_id?: Maybe<Order_By>;
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
  Id = 'id',
  /** column name */
  RoomId = 'room_id',
  /** column name */
  Text = 'text',
  /** column name */
  Timestamp = 'timestamp',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "Message" */
export type Message_Set_Input = {
  id?: Maybe<Scalars['Int']>;
  room_id?: Maybe<Scalars['Int']>;
  text?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Message_Stddev_Fields = {
  __typename?: 'Message_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  room_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "Message" */
export type Message_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  room_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Message_Stddev_Pop_Fields = {
  __typename?: 'Message_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  room_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "Message" */
export type Message_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  room_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Message_Stddev_Samp_Fields = {
  __typename?: 'Message_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  room_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "Message" */
export type Message_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  room_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Message_Sum_Fields = {
  __typename?: 'Message_sum_fields';
  id?: Maybe<Scalars['Int']>;
  room_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "Message" */
export type Message_Sum_Order_By = {
  id?: Maybe<Order_By>;
  room_id?: Maybe<Order_By>;
};

/** update columns of table "Message" */
export enum Message_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  RoomId = 'room_id',
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
  id?: Maybe<Scalars['Float']>;
  room_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "Message" */
export type Message_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  room_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Message_Var_Samp_Fields = {
  __typename?: 'Message_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  room_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "Message" */
export type Message_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  room_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Message_Variance_Fields = {
  __typename?: 'Message_variance_fields';
  id?: Maybe<Scalars['Float']>;
  room_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "Message" */
export type Message_Variance_Order_By = {
  id?: Maybe<Order_By>;
  room_id?: Maybe<Order_By>;
};

/** columns and relationships of "Room" */
export type Room = {
  __typename?: 'Room';
  avatar: Scalars['String'];
  id: Scalars['Int'];
  name: Scalars['String'];
  organization_id?: Maybe<Scalars['Int']>;
};

/** aggregated selection of "Room" */
export type Room_Aggregate = {
  __typename?: 'Room_aggregate';
  aggregate?: Maybe<Room_Aggregate_Fields>;
  nodes: Array<Room>;
};

/** aggregate fields of "Room" */
export type Room_Aggregate_Fields = {
  __typename?: 'Room_aggregate_fields';
  avg?: Maybe<Room_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Room_Max_Fields>;
  min?: Maybe<Room_Min_Fields>;
  stddev?: Maybe<Room_Stddev_Fields>;
  stddev_pop?: Maybe<Room_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Room_Stddev_Samp_Fields>;
  sum?: Maybe<Room_Sum_Fields>;
  var_pop?: Maybe<Room_Var_Pop_Fields>;
  var_samp?: Maybe<Room_Var_Samp_Fields>;
  variance?: Maybe<Room_Variance_Fields>;
};


/** aggregate fields of "Room" */
export type Room_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Room_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "Room" */
export type Room_Aggregate_Order_By = {
  avg?: Maybe<Room_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Room_Max_Order_By>;
  min?: Maybe<Room_Min_Order_By>;
  stddev?: Maybe<Room_Stddev_Order_By>;
  stddev_pop?: Maybe<Room_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Room_Stddev_Samp_Order_By>;
  sum?: Maybe<Room_Sum_Order_By>;
  var_pop?: Maybe<Room_Var_Pop_Order_By>;
  var_samp?: Maybe<Room_Var_Samp_Order_By>;
  variance?: Maybe<Room_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "Room" */
export type Room_Arr_Rel_Insert_Input = {
  data: Array<Room_Insert_Input>;
  on_conflict?: Maybe<Room_On_Conflict>;
};

/** aggregate avg on columns */
export type Room_Avg_Fields = {
  __typename?: 'Room_avg_fields';
  id?: Maybe<Scalars['Float']>;
  organization_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "Room" */
export type Room_Avg_Order_By = {
  id?: Maybe<Order_By>;
  organization_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "Room". All fields are combined with a logical 'AND'. */
export type Room_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Room_Bool_Exp>>>;
  _not?: Maybe<Room_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Room_Bool_Exp>>>;
  avatar?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  organization_id?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "Room" */
export enum Room_Constraint {
  /** unique or primary key constraint */
  RoomsPkey = 'rooms_pkey'
}

/** input type for incrementing integer column in table "Room" */
export type Room_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  organization_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "Room" */
export type Room_Insert_Input = {
  avatar?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  organization_id?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Room_Max_Fields = {
  __typename?: 'Room_max_fields';
  avatar?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  organization_id?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "Room" */
export type Room_Max_Order_By = {
  avatar?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  organization_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Room_Min_Fields = {
  __typename?: 'Room_min_fields';
  avatar?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  organization_id?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "Room" */
export type Room_Min_Order_By = {
  avatar?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  organization_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "Room" */
export type Room_Mutation_Response = {
  __typename?: 'Room_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Room>;
};

/** input type for inserting object relation for remote table "Room" */
export type Room_Obj_Rel_Insert_Input = {
  data: Room_Insert_Input;
  on_conflict?: Maybe<Room_On_Conflict>;
};

/** on conflict condition type for table "Room" */
export type Room_On_Conflict = {
  constraint: Room_Constraint;
  update_columns: Array<Room_Update_Column>;
  where?: Maybe<Room_Bool_Exp>;
};

/** ordering options when selecting data from "Room" */
export type Room_Order_By = {
  avatar?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  organization_id?: Maybe<Order_By>;
};

/** primary key columns input for table: "Room" */
export type Room_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "Room" */
export enum Room_Select_Column {
  /** column name */
  Avatar = 'avatar',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  OrganizationId = 'organization_id'
}

/** input type for updating data in table "Room" */
export type Room_Set_Input = {
  avatar?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  organization_id?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Room_Stddev_Fields = {
  __typename?: 'Room_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  organization_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "Room" */
export type Room_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  organization_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Room_Stddev_Pop_Fields = {
  __typename?: 'Room_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  organization_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "Room" */
export type Room_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  organization_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Room_Stddev_Samp_Fields = {
  __typename?: 'Room_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  organization_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "Room" */
export type Room_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  organization_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Room_Sum_Fields = {
  __typename?: 'Room_sum_fields';
  id?: Maybe<Scalars['Int']>;
  organization_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "Room" */
export type Room_Sum_Order_By = {
  id?: Maybe<Order_By>;
  organization_id?: Maybe<Order_By>;
};

/** update columns of table "Room" */
export enum Room_Update_Column {
  /** column name */
  Avatar = 'avatar',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  OrganizationId = 'organization_id'
}

/** aggregate var_pop on columns */
export type Room_Var_Pop_Fields = {
  __typename?: 'Room_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  organization_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "Room" */
export type Room_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  organization_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Room_Var_Samp_Fields = {
  __typename?: 'Room_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  organization_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "Room" */
export type Room_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  organization_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Room_Variance_Fields = {
  __typename?: 'Room_variance_fields';
  id?: Maybe<Scalars['Float']>;
  organization_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "Room" */
export type Room_Variance_Order_By = {
  id?: Maybe<Order_By>;
  organization_id?: Maybe<Order_By>;
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

/** columns and relationships of "User" */
export type User = {
  __typename?: 'User';
  avatar?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  interested_in?: Maybe<Scalars['String']>;
  introduction?: Maybe<Scalars['String']>;
  last_seen?: Maybe<Scalars['timestamptz']>;
  name?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
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
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "User" */
export type User_Avg_Order_By = {
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "User". All fields are combined with a logical 'AND'. */
export type User_Bool_Exp = {
  _and?: Maybe<Array<Maybe<User_Bool_Exp>>>;
  _not?: Maybe<User_Bool_Exp>;
  _or?: Maybe<Array<Maybe<User_Bool_Exp>>>;
  avatar?: Maybe<String_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  email?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  interested_in?: Maybe<String_Comparison_Exp>;
  introduction?: Maybe<String_Comparison_Exp>;
  last_seen?: Maybe<Timestamptz_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  username?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "User" */
export enum User_Constraint {
  /** unique or primary key constraint */
  UserPkey = 'user_pkey',
  /** unique or primary key constraint */
  UserUsernameKey = 'user_username_key'
}

/** input type for incrementing integer column in table "User" */
export type User_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "User" */
export type User_Insert_Input = {
  avatar?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  interested_in?: Maybe<Scalars['String']>;
  introduction?: Maybe<Scalars['String']>;
  last_seen?: Maybe<Scalars['timestamptz']>;
  name?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type User_Max_Fields = {
  __typename?: 'User_max_fields';
  avatar?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  interested_in?: Maybe<Scalars['String']>;
  introduction?: Maybe<Scalars['String']>;
  last_seen?: Maybe<Scalars['timestamptz']>;
  name?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
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
  username?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type User_Min_Fields = {
  __typename?: 'User_min_fields';
  avatar?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  interested_in?: Maybe<Scalars['String']>;
  introduction?: Maybe<Scalars['String']>;
  last_seen?: Maybe<Scalars['timestamptz']>;
  name?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
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
  username?: Maybe<Order_By>;
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
  avatar?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  interested_in?: Maybe<Order_By>;
  introduction?: Maybe<Order_By>;
  last_seen?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  username?: Maybe<Order_By>;
};

/** primary key columns input for table: "User" */
export type User_Pk_Columns_Input = {
  id: Scalars['Int'];
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
  Username = 'username'
}

/** input type for updating data in table "User" */
export type User_Set_Input = {
  avatar?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  interested_in?: Maybe<Scalars['String']>;
  introduction?: Maybe<Scalars['String']>;
  last_seen?: Maybe<Scalars['timestamptz']>;
  name?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type User_Stddev_Fields = {
  __typename?: 'User_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "User" */
export type User_Stddev_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type User_Stddev_Pop_Fields = {
  __typename?: 'User_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "User" */
export type User_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type User_Stddev_Samp_Fields = {
  __typename?: 'User_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "User" */
export type User_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type User_Sum_Fields = {
  __typename?: 'User_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "User" */
export type User_Sum_Order_By = {
  id?: Maybe<Order_By>;
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
  Username = 'username'
}

/** aggregate var_pop on columns */
export type User_Var_Pop_Fields = {
  __typename?: 'User_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "User" */
export type User_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type User_Var_Samp_Fields = {
  __typename?: 'User_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "User" */
export type User_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type User_Variance_Fields = {
  __typename?: 'User_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "User" */
export type User_Variance_Order_By = {
  id?: Maybe<Order_By>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "Message" */
  delete_Message?: Maybe<Message_Mutation_Response>;
  /** delete single row from the table: "Message" */
  delete_Message_by_pk?: Maybe<Message>;
  /** delete data from the table: "Room" */
  delete_Room?: Maybe<Room_Mutation_Response>;
  /** delete single row from the table: "Room" */
  delete_Room_by_pk?: Maybe<Room>;
  /** delete data from the table: "User" */
  delete_User?: Maybe<User_Mutation_Response>;
  /** delete single row from the table: "User" */
  delete_User_by_pk?: Maybe<User>;
  /** insert data into the table: "Message" */
  insert_Message?: Maybe<Message_Mutation_Response>;
  /** insert a single row into the table: "Message" */
  insert_Message_one?: Maybe<Message>;
  /** insert data into the table: "Room" */
  insert_Room?: Maybe<Room_Mutation_Response>;
  /** insert a single row into the table: "Room" */
  insert_Room_one?: Maybe<Room>;
  /** insert data into the table: "User" */
  insert_User?: Maybe<User_Mutation_Response>;
  /** insert a single row into the table: "User" */
  insert_User_one?: Maybe<User>;
  /** update data of the table: "Message" */
  update_Message?: Maybe<Message_Mutation_Response>;
  /** update single row of the table: "Message" */
  update_Message_by_pk?: Maybe<Message>;
  /** update data of the table: "Room" */
  update_Room?: Maybe<Room_Mutation_Response>;
  /** update single row of the table: "Room" */
  update_Room_by_pk?: Maybe<Room>;
  /** update data of the table: "User" */
  update_User?: Maybe<User_Mutation_Response>;
  /** update single row of the table: "User" */
  update_User_by_pk?: Maybe<User>;
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
export type Mutation_RootDelete_RoomArgs = {
  where: Room_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Room_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_UserArgs = {
  where: User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_User_By_PkArgs = {
  id: Scalars['Int'];
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
export type Mutation_RootInsert_RoomArgs = {
  objects: Array<Room_Insert_Input>;
  on_conflict?: Maybe<Room_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Room_OneArgs = {
  object: Room_Insert_Input;
  on_conflict?: Maybe<Room_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UserArgs = {
  objects: Array<User_Insert_Input>;
  on_conflict?: Maybe<User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_OneArgs = {
  object: User_Insert_Input;
  on_conflict?: Maybe<User_On_Conflict>;
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
export type Mutation_RootUpdate_RoomArgs = {
  _inc?: Maybe<Room_Inc_Input>;
  _set?: Maybe<Room_Set_Input>;
  where: Room_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Room_By_PkArgs = {
  _inc?: Maybe<Room_Inc_Input>;
  _set?: Maybe<Room_Set_Input>;
  pk_columns: Room_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_UserArgs = {
  _inc?: Maybe<User_Inc_Input>;
  _set?: Maybe<User_Set_Input>;
  where: User_Bool_Exp;
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
  /** fetch data from the table: "Message" */
  Message: Array<Message>;
  /** fetch aggregated fields from the table: "Message" */
  Message_aggregate: Message_Aggregate;
  /** fetch data from the table: "Message" using primary key columns */
  Message_by_pk?: Maybe<Message>;
  /** fetch data from the table: "Room" */
  Room: Array<Room>;
  /** fetch aggregated fields from the table: "Room" */
  Room_aggregate: Room_Aggregate;
  /** fetch data from the table: "Room" using primary key columns */
  Room_by_pk?: Maybe<Room>;
  /** fetch data from the table: "User" */
  User: Array<User>;
  /** fetch aggregated fields from the table: "User" */
  User_aggregate: User_Aggregate;
  /** fetch data from the table: "User" using primary key columns */
  User_by_pk?: Maybe<User>;
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
export type Query_RootRoomArgs = {
  distinct_on?: Maybe<Array<Room_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Room_Order_By>>;
  where?: Maybe<Room_Bool_Exp>;
};


/** query root */
export type Query_RootRoom_AggregateArgs = {
  distinct_on?: Maybe<Array<Room_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Room_Order_By>>;
  where?: Maybe<Room_Bool_Exp>;
};


/** query root */
export type Query_RootRoom_By_PkArgs = {
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
export type Query_RootUser_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};


/** query root */
export type Query_RootUser_By_PkArgs = {
  id: Scalars['Int'];
};

/** subscription root */
export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "Message" */
  Message: Array<Message>;
  /** fetch aggregated fields from the table: "Message" */
  Message_aggregate: Message_Aggregate;
  /** fetch data from the table: "Message" using primary key columns */
  Message_by_pk?: Maybe<Message>;
  /** fetch data from the table: "Room" */
  Room: Array<Room>;
  /** fetch aggregated fields from the table: "Room" */
  Room_aggregate: Room_Aggregate;
  /** fetch data from the table: "Room" using primary key columns */
  Room_by_pk?: Maybe<Room>;
  /** fetch data from the table: "User" */
  User: Array<User>;
  /** fetch aggregated fields from the table: "User" */
  User_aggregate: User_Aggregate;
  /** fetch data from the table: "User" using primary key columns */
  User_by_pk?: Maybe<User>;
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
export type Subscription_RootRoomArgs = {
  distinct_on?: Maybe<Array<Room_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Room_Order_By>>;
  where?: Maybe<Room_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootRoom_AggregateArgs = {
  distinct_on?: Maybe<Array<Room_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Room_Order_By>>;
  where?: Maybe<Room_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootRoom_By_PkArgs = {
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
export type Subscription_RootUser_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootUser_By_PkArgs = {
  id: Scalars['Int'];
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

export type UsersQueryVariables = Exact<{ [key: string]: never; }>;


export type UsersQuery = (
  { __typename?: 'query_root' }
  & { User: Array<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'name'>
  )> }
);


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