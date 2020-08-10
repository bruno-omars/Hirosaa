export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
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
  Messages: Array<Message>;
  /** An array relationship */
  SubCategories: Array<SubCategory>;
  /** An object relationship */
  User?: Maybe<User>;
  avatar: Scalars['String'];
  id: Scalars['Int'];
  name: Scalars['String'];
  organization_id?: Maybe<Scalars['Int']>;
  owner_id?: Maybe<Scalars['String']>;
  to_be_required?: Maybe<Scalars['String']>;
  what_we_will_do?: Maybe<Scalars['String']>;
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
export type CircleSubCategoriesArgs = {
  distinct_on?: Maybe<Array<SubCategory_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<SubCategory_Order_By>>;
  where?: Maybe<SubCategory_Bool_Exp>;
};

/** input type for inserting array relation for remote table "Circle" */
export type Circle_Arr_Rel_Insert_Input = {
  data: Array<Circle_Insert_Input>;
  on_conflict?: Maybe<Circle_On_Conflict>;
};

/** Boolean expression to filter rows from the table "Circle". All fields are combined with a logical 'AND'. */
export type Circle_Bool_Exp = {
  Messages?: Maybe<Message_Bool_Exp>;
  SubCategories?: Maybe<SubCategory_Bool_Exp>;
  User?: Maybe<User_Bool_Exp>;
  _and?: Maybe<Array<Maybe<Circle_Bool_Exp>>>;
  _not?: Maybe<Circle_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Circle_Bool_Exp>>>;
  avatar?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  organization_id?: Maybe<Int_Comparison_Exp>;
  owner_id?: Maybe<String_Comparison_Exp>;
  to_be_required?: Maybe<String_Comparison_Exp>;
  what_we_will_do?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "Circle" */
export enum Circle_Constraint {
  /** unique or primary key constraint */
  RoomsPkey = 'rooms_pkey'
}

/** input type for inserting data into table "Circle" */
export type Circle_Insert_Input = {
  avatar?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  to_be_required?: Maybe<Scalars['String']>;
  what_we_will_do?: Maybe<Scalars['String']>;
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
  User?: Maybe<User_Order_By>;
  avatar?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  organization_id?: Maybe<Order_By>;
  owner_id?: Maybe<Order_By>;
  to_be_required?: Maybe<Order_By>;
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
  Name = 'name',
  /** column name */
  OrganizationId = 'organization_id',
  /** column name */
  OwnerId = 'owner_id',
  /** column name */
  ToBeRequired = 'to_be_required',
  /** column name */
  WhatWeWillDo = 'what_we_will_do'
}

/** input type for updating data in table "Circle" */
export type Circle_Set_Input = {
  avatar?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  to_be_required?: Maybe<Scalars['String']>;
  what_we_will_do?: Maybe<Scalars['String']>;
};

/** update columns of table "Circle" */
export enum Circle_Update_Column {
  /** column name */
  Avatar = 'avatar',
  /** column name */
  Name = 'name',
  /** column name */
  ToBeRequired = 'to_be_required',
  /** column name */
  WhatWeWillDo = 'what_we_will_do'
}

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

/** columns and relationships of "ParentCategory" */
export type ParentCategory = {
  __typename?: 'ParentCategory';
  /** An array relationship */
  SubCategories: Array<SubCategory>;
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

/** Boolean expression to filter rows from the table "ParentCategory". All fields are combined with a logical 'AND'. */
export type ParentCategory_Bool_Exp = {
  SubCategories?: Maybe<SubCategory_Bool_Exp>;
  _and?: Maybe<Array<Maybe<ParentCategory_Bool_Exp>>>;
  _not?: Maybe<ParentCategory_Bool_Exp>;
  _or?: Maybe<Array<Maybe<ParentCategory_Bool_Exp>>>;
  id?: Maybe<Int_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
};

/** ordering options when selecting data from "ParentCategory" */
export type ParentCategory_Order_By = {
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

/** columns and relationships of "Skill" */
export type Skill = {
  __typename?: 'Skill';
  avatar: Scalars['String'];
  id: Scalars['Int'];
  name: Scalars['String'];
};

/** Boolean expression to filter rows from the table "Skill". All fields are combined with a logical 'AND'. */
export type Skill_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Skill_Bool_Exp>>>;
  _not?: Maybe<Skill_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Skill_Bool_Exp>>>;
  avatar?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
};

/** ordering options when selecting data from "Skill" */
export type Skill_Order_By = {
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
  Circle: Circle;
  /** An object relationship */
  ParentCategory: ParentCategory;
  circle_id: Scalars['Int'];
  id: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  parent_category_id: Scalars['Int'];
};

/** Boolean expression to filter rows from the table "SubCategory". All fields are combined with a logical 'AND'. */
export type SubCategory_Bool_Exp = {
  Circle?: Maybe<Circle_Bool_Exp>;
  ParentCategory?: Maybe<ParentCategory_Bool_Exp>;
  _and?: Maybe<Array<Maybe<SubCategory_Bool_Exp>>>;
  _not?: Maybe<SubCategory_Bool_Exp>;
  _or?: Maybe<Array<Maybe<SubCategory_Bool_Exp>>>;
  circle_id?: Maybe<Int_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  parent_category_id?: Maybe<Int_Comparison_Exp>;
};

/** ordering options when selecting data from "SubCategory" */
export type SubCategory_Order_By = {
  Circle?: Maybe<Circle_Order_By>;
  ParentCategory?: Maybe<ParentCategory_Order_By>;
  circle_id?: Maybe<Order_By>;
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
  CircleId = 'circle_id',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  ParentCategoryId = 'parent_category_id'
}

/** columns and relationships of "User" */
export type User = {
  __typename?: 'User';
  /** An array relationship */
  Messages: Array<Message>;
  /** An object relationship */
  User?: Maybe<Circle>;
  avatar?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  interested_in?: Maybe<Scalars['String']>;
  introduction?: Maybe<Scalars['String']>;
  last_seen?: Maybe<Scalars['timestamptz']>;
  name?: Maybe<Scalars['String']>;
  organization_id?: Maybe<Scalars['Int']>;
};


/** columns and relationships of "User" */
export type UserMessagesArgs = {
  distinct_on?: Maybe<Array<Message_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Message_Order_By>>;
  where?: Maybe<Message_Bool_Exp>;
};

/** Boolean expression to filter rows from the table "User". All fields are combined with a logical 'AND'. */
export type User_Bool_Exp = {
  Messages?: Maybe<Message_Bool_Exp>;
  User?: Maybe<Circle_Bool_Exp>;
  _and?: Maybe<Array<Maybe<User_Bool_Exp>>>;
  _not?: Maybe<User_Bool_Exp>;
  _or?: Maybe<Array<Maybe<User_Bool_Exp>>>;
  avatar?: Maybe<String_Comparison_Exp>;
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

/** response of any mutation on the table "User" */
export type User_Mutation_Response = {
  __typename?: 'User_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<User>;
};

/** on conflict condition type for table "User" */
export type User_On_Conflict = {
  constraint: User_Constraint;
  update_columns: Array<User_Update_Column>;
  where?: Maybe<User_Bool_Exp>;
};

/** ordering options when selecting data from "User" */
export type User_Order_By = {
  User?: Maybe<Circle_Order_By>;
  avatar?: Maybe<Order_By>;
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
  interested_in?: Maybe<Scalars['String']>;
  introduction?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** update columns of table "User" */
export enum User_Update_Column {
  /** column name */
  Avatar = 'avatar',
  /** column name */
  InterestedIn = 'interested_in',
  /** column name */
  Introduction = 'introduction',
  /** column name */
  Name = 'name'
}

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "Circle" */
  delete_Circle?: Maybe<Circle_Mutation_Response>;
  /** delete single row from the table: "Circle" */
  delete_Circle_by_pk?: Maybe<Circle>;
  /** insert data into the table: "Circle" */
  insert_Circle?: Maybe<Circle_Mutation_Response>;
  /** insert a single row into the table: "Circle" */
  insert_Circle_one?: Maybe<Circle>;
  /** update data of the table: "Circle" */
  update_Circle?: Maybe<Circle_Mutation_Response>;
  /** update single row of the table: "Circle" */
  update_Circle_by_pk?: Maybe<Circle>;
  /** update data of the table: "User" */
  update_User?: Maybe<User_Mutation_Response>;
  /** update single row of the table: "User" */
  update_User_by_pk?: Maybe<User>;
};


/** mutation root */
export type Mutation_RootDelete_CircleArgs = {
  where: Circle_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Circle_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootInsert_CircleArgs = {
  objects: Array<Circle_Insert_Input>;
  on_conflict?: Maybe<Circle_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Circle_OneArgs = {
  object: Circle_Insert_Input;
  on_conflict?: Maybe<Circle_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_CircleArgs = {
  _set?: Maybe<Circle_Set_Input>;
  where: Circle_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Circle_By_PkArgs = {
  _set?: Maybe<Circle_Set_Input>;
  pk_columns: Circle_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_UserArgs = {
  _set?: Maybe<User_Set_Input>;
  where: User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_By_PkArgs = {
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
  /** fetch data from the table: "Circle" using primary key columns */
  Circle_by_pk?: Maybe<Circle>;
  /** fetch data from the table: "Message" */
  Message: Array<Message>;
  /** fetch data from the table: "Message" using primary key columns */
  Message_by_pk?: Maybe<Message>;
  /** fetch data from the table: "ParentCategory" */
  ParentCategory: Array<ParentCategory>;
  /** fetch data from the table: "ParentCategory" using primary key columns */
  ParentCategory_by_pk?: Maybe<ParentCategory>;
  /** fetch data from the table: "Skill" */
  Skill: Array<Skill>;
  /** fetch data from the table: "Skill" using primary key columns */
  Skill_by_pk?: Maybe<Skill>;
  /** fetch data from the table: "SubCategory" */
  SubCategory: Array<SubCategory>;
  /** fetch data from the table: "SubCategory" using primary key columns */
  SubCategory_by_pk?: Maybe<SubCategory>;
  /** fetch data from the table: "User" */
  User: Array<User>;
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
export type Query_RootMessage_By_PkArgs = {
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
export type Query_RootUser_By_PkArgs = {
  id: Scalars['String'];
};

/** subscription root */
export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "Circle" */
  Circle: Array<Circle>;
  /** fetch data from the table: "Circle" using primary key columns */
  Circle_by_pk?: Maybe<Circle>;
  /** fetch data from the table: "Message" */
  Message: Array<Message>;
  /** fetch data from the table: "Message" using primary key columns */
  Message_by_pk?: Maybe<Message>;
  /** fetch data from the table: "ParentCategory" */
  ParentCategory: Array<ParentCategory>;
  /** fetch data from the table: "ParentCategory" using primary key columns */
  ParentCategory_by_pk?: Maybe<ParentCategory>;
  /** fetch data from the table: "Skill" */
  Skill: Array<Skill>;
  /** fetch data from the table: "Skill" using primary key columns */
  Skill_by_pk?: Maybe<Skill>;
  /** fetch data from the table: "SubCategory" */
  SubCategory: Array<SubCategory>;
  /** fetch data from the table: "SubCategory" using primary key columns */
  SubCategory_by_pk?: Maybe<SubCategory>;
  /** fetch data from the table: "User" */
  User: Array<User>;
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
export type Subscription_RootMessage_By_PkArgs = {
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

export type Unnamed_1_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_1_Query = (
  { __typename?: 'query_root' }
  & { User: Array<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'name'>
  )> }
);

