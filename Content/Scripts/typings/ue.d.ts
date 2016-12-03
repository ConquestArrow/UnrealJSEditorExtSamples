/// <reference path="_part_0_ue.d.ts">/>
/// <reference path="_part_1_ue.d.ts">/>
/// <reference path="_part_2_ue.d.ts">/>
/// <reference path="_part_3_ue.d.ts">/>
declare class CustomMeshTriangle { 
	/**
	 * Vertex 0
	*/
	Vertex0: Vector;
	/**
	 * Vertex 1
	*/
	Vertex1: Vector;
	/**
	 * Vertex 2
	*/
	Vertex2: Vector;
	clone() : CustomMeshTriangle;
	static C(Other: UObject): CustomMeshTriangle;
}

declare class CustomMeshComponent extends MeshComponent { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): CustomMeshComponent;
	static Find(Outer: UObject, ResourceName: string): CustomMeshComponent;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): CustomMeshComponent;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CustomMeshComponent;
	/**
	 * Set the geometry to use on this triangle mesh
	*/
	SetCustomMeshTriangles(Triangles: CustomMeshTriangle[]): boolean;
	/**
	 * Removes all geometry from this triangle mesh.  Does not deallocate memory, allowing new geometry to reuse the existing allocation.
	*/
	ClearCustomMeshTriangles(): void;
	/**
	 * Add to the geometry to use on this triangle mesh.  This may cause an allocation.  Use SetCustomMeshTriangles() instead when possible to reduce allocations.
	*/
	AddCustomMeshTriangles(Triangles: CustomMeshTriangle[]): void;
	static C(Other: UObject): CustomMeshComponent;
}

declare class HmdUserProfileField { 
	/**
	 * Field Name
	*/
	FieldName: string;
	/**
	 * Field Value
	*/
	FieldValue: string;
	clone() : HmdUserProfileField;
	static C(Other: UObject): HmdUserProfileField;
}

declare class HmdUserProfile { 
	/**
	 * Name of the user's profile.
	*/
	Name: string;
	/**
	 * Gender of the user ("male", "female", etc).
	*/
	Gender: string;
	/**
	 * Height of the player, in meters
	*/
	PlayerHeight: number;
	/**
	 * Height of the player, in meters
	*/
	EyeHeight: number;
	/**
	 * Interpupillary distance of the player, in meters
	*/
	IPD: number;
	/**
	 * Neck-to-eye distance, in meters. X - horizontal, Y - vertical.
	*/
	NeckToEyeDistance: Vector2D;
	/**
	 * Extra Fields
	*/
	ExtraFields: HmdUserProfileField[];
	clone() : HmdUserProfile;
	static C(Other: UObject): HmdUserProfile;
	/**
	 * Returns current user profile.
	 * @param Profile                (out) Structure to hold current user profile.
	 * @return (boolean)     True, if user profile was acquired.
	*/
	GetUserProfile(): {Profile: HmdUserProfile, $: boolean};
	/**
	 * Returns current user profile.
	 * @param Profile                (out) Structure to hold current user profile.
	 * @return (boolean)     True, if user profile was acquired.
	*/
	static GetUserProfile(Profile?: HmdUserProfile): {Profile: HmdUserProfile, $: boolean};
}

declare class OculusFunctionLibrary extends BlueprintFunctionLibrary { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): OculusFunctionLibrary;
	static Find(Outer: UObject, ResourceName: string): OculusFunctionLibrary;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): OculusFunctionLibrary;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OculusFunctionLibrary;
	/**
	 * Shows loading splash screen.
	*/
	static ShowLoadingSplashScreen(): void;
	/**
	 * Sets a texture for loading icon mode and shows it. This call will clear all the splashes.
	*/
	static ShowLoadingIcon(Texture: Texture2D): void;
	/**
	 * Scales the HMD position that gets added to the virtual camera position.
	 * @param PosScale3D    (in) the scale to apply to the HMD position.
	*/
	static SetPositionScale3D(PosScale3D: Vector): void;
	/**
	 * Sets loading splash screen parameters.
	 * @param TexturePath           (in) A path to the texture asset to be used for the splash. GearVR uses it as a path for loading icon; all other params are currently ignored by GearVR.
	 * @param DistanceInMeters      (in) Distance, in meters, to the center of the splash screen.
	 * @param SizeInMeters          (in) Size, in meters, of the quad with the splash screen.
	 * @param RotationAxes          (in) A vector that specifies the axis of the splash screen rotation (if RotationDelta is specified).
	 * @param RotationDeltaInDeg (in) Rotation delta, in degrees, that is added each 2nd frame to the quad transform. The quad is rotated around the vector "RotationAxes".
	*/
	static SetLoadingSplashParams(TexturePath: string,DistanceInMeters: Vector,SizeInMeters: Vector2D,RotationAxis: Vector,RotationDeltaInDeg: number): void;
	/**
	 * Sets 'base rotation' - the rotation that will be subtracted from
	 * the actual HMD orientation.
	 * The position offset might be added to current HMD position,
	 * effectively moving the virtual camera by the specified offset. The addition
	 * occurs after the HMD orientation and position are applied.
	 * @param BaseRot                       (in) Rotator object with base rotation
	 * @param PosOffset                     (in) the vector to be added to HMD position.
	 * @param Options                       (in) specifies either position, orientation or both should be set.
	*/
	static SetBaseRotationAndPositionOffset(BaseRot: Rotator,PosOffset: Vector,Options: EOrientPositionSelector): void;
	/**
	 * Sets 'base rotation' - the rotation that will be subtracted from
	 * the actual HMD orientation.
	 * Sets base position offset (in meters). The base position offset is the distance from the physical (0, 0, 0) position
	 * to current HMD position (bringing the (0, 0, 0) point to the current HMD position)
	 * Note, this vector is set by ResetPosition call; use this method with care.
	 * The axis of the vector are the same as in Unreal: X - forward, Y - right, Z - up.
	 * @param Rotation                       (in) Rotator object with base rotation
	 * @param BaseOffsetInMeters (in) the vector to be set as base offset, in meters.
	 * @param Options                        (in) specifies either position, orientation or both should be set.
	*/
	static SetBaseRotationAndBaseOffsetInMeters(Rotation: Rotator,BaseOffsetInMeters: Vector,Options: EOrientPositionSelector): void;
	/**
	 * Returns true if PlayerController follows HMD orientation/position. False, otherwise.
	*/
	static IsPlayerControllerFollowHmdEnabled(): boolean;
	/**
	 * Returns true, if the splash screen is in loading icon mode.
	*/
	static IsLoadingIconEnabled(): boolean;
	/**
	 * Returns true, if the splash screen is automatically shown when LoadMap is called.
	*/
	static IsAutoLoadingSplashScreenEnabled(): boolean;
	/**
	 * Hides loading splash screen.
	 * @param       bClear  (in) Clear all splash screens after hide.
	*/
	static HideLoadingSplashScreen(bClear: boolean): void;
	/**
	 * Clears the loading icon. This call will clear all the splashes.
	*/
	static HideLoadingIcon(): void;
	/**
	 * Returns current user profile.
	 * @param Profile                (out) Structure to hold current user profile.
	 * @return (boolean)     True, if user profile was acquired.
	*/
	static GetUserProfile(Profile?: HmdUserProfile): {Profile: HmdUserProfile, $: boolean};
	/**
	 * Reports raw sensor data. If HMD doesn't support any of the parameters then it will be set to zero.
	 * @param AngularAcceleration    (out) Angular acceleration in radians per second per second.
	 * @param LinearAcceleration             (out) Acceleration in meters per second per second.
	 * @param AngularVelocity                (out) Angular velocity in radians per second.
	 * @param LinearVelocity                 (out) Velocity in meters per second.
	 * @param TimeInSeconds                  (out) Time when the reported IMU reading took place, in seconds.
	*/
	static GetRawSensorData(AngularAcceleration?: Vector,LinearAcceleration?: Vector,AngularVelocity?: Vector,LinearVelocity?: Vector,TimeInSeconds?: number): {AngularAcceleration: Vector, LinearAcceleration: Vector, AngularVelocity: Vector, LinearVelocity: Vector, TimeInSeconds: number};
	/**
	 * Grabs the current orientation and position for the HMD.  If positional tracking is not available, DevicePosition will be a zero vector
	 * @param DeviceRotation        (out) The device's current rotation
	 * @param DevicePosition        (out) The device's current position, in its own tracking space
	 * @param NeckPosition          (out) The estimated neck position, calculated using NeckToEye vector from User Profile. Same coordinate space as DevicePosition.
	 * @param bUseOrienationForPlayerCamera (in) Should be set to 'true' if the orientation is going to be used to update orientation of the camera manually.
	 * @param bUsePositionForPlayerCamera   (in) Should be set to 'true' if the position is going to be used to update position of the camera manually.
	 * @param PositionScale         (in) The 3D scale that will be applied to position.
	*/
	static GetPose(DeviceRotation?: Rotator,DevicePosition?: Vector,NeckPosition?: Vector,bUseOrienationForPlayerCamera?: boolean,bUsePositionForPlayerCamera?: boolean,PositionScale?: Vector): {DeviceRotation: Rotator, DevicePosition: Vector, NeckPosition: Vector};
	/**
	 * Returns current settings for PlayerCameraManager's overrides for following HMD orientation and position.
	 * @param bFollowHmdOrientation (out) True if camera's orientation should be updated by most recent HMD orientation.
	 * @param bFollowHmdPosition    (out) Whether the camera's position should be updated by most recent HMD orientation or not.
	*/
	static GetPlayerCameraManagerFollowHmd(bFollowHmdOrientation?: boolean,bFollowHmdPosition?: boolean): {bFollowHmdOrientation: boolean, bFollowHmdPosition: boolean};
	/**
	 * Returns loading splash screen parameters.
	 * @param TexturePath           (out) A path to the texture asset to be used for the splash. GearVR uses it as a path for loading icon; all other params are currently ignored by GearVR.
	 * @param DistanceInMeters      (out) Distance, in meters, to the center of the splash screen.
	 * @param SizeInMeters          (out) Size, in meters, of the quad with the splash screen.
	 * @param RotationAxes          (out) A vector that specifies the axis of the splash screen rotation (if RotationDelta is specified).
	 * @param RotationDeltaInDeg (out) Rotation delta, in degrees, that is added each 2nd frame to the quad transform. The quad is rotated around the vector "RotationAxes".
	*/
	static GetLoadingSplashParams(TexturePath?: string,DistanceInMeters?: Vector,SizeInMeters?: Vector2D,RotationAxis?: Vector,RotationDeltaInDeg?: number): {TexturePath: string, DistanceInMeters: Vector, SizeInMeters: Vector2D, RotationAxis: Vector, RotationDeltaInDeg: number};
	/**
	 * Returns current base rotation and position offset.
	 * @param OutRot                        (out) Rotator object with base rotation
	 * @param OutPosOffset          (out) the vector with previously set position offset.
	*/
	static GetBaseRotationAndPositionOffset(OutRot?: Rotator,OutPosOffset?: Vector): {OutRot: Rotator, OutPosOffset: Vector};
	/**
	 * Returns current base rotation and base offset.
	 * The base offset is currently used base position offset, previously set by the
	 * ResetPosition or SetBasePositionOffset calls. It represents a vector that translates the HMD's position
	 * into (0,0,0) point, in meters.
	 * The axis of the vector are the same as in Unreal: X - forward, Y - right, Z - up.
	 * @param OutRotation                    (out) Rotator object with base rotation
	 * @param OutBaseOffsetInMeters  (out) base position offset, vector, in meters.
	*/
	static GetBaseRotationAndBaseOffsetInMeters(OutRotation?: Rotator,OutBaseOffsetInMeters?: Vector): {OutRotation: Rotator, OutBaseOffsetInMeters: Vector};
	/**
	 * Turns on/off default PlayerController's behavior to follow HMD orientation/position
	*/
	static EnablePlayerControllerFollowHmd(bEnable: boolean): void;
	/**
	 * Controls how PlayerCameraManager follows HMD. Note, this works for any active PlayerCameraManager
	 * with bFollowHmdOrientation property set to true.
	 * @param bFollowHmdOrientation (in) True if camera's orientation should be updated by most recent HMD orientation.
	 * @param bFollowHmdPosition    (in) Whether the camera's position should be updated by most recent HMD orientation or not.
	*/
	static EnablePlayerCameraManagerFollowHmd(bFollowHmdOrientation: boolean,bFollowHmdPosition: boolean): void;
	/**
	 * Enables/disables splash screen to be automatically shown when LoadMap is called.
	 * @param       bAutoShowEnabled        (in)    True, if automatic showing of splash screens is enabled when map is being loaded.
	*/
	static EnableAutoLoadingSplashScreen(bAutoShowEnabled: boolean): void;
	/**
	 * Removes all the splash screens.
	*/
	static ClearLoadingSplashScreens(): void;
	/**
	 * Adds loading splash screen with parameters
	 * @param Texture                       (in) A texture asset to be used for the splash. GearVR uses it as a path for loading icon; all other params are currently ignored by GearVR.
	 * @param TranslationInMeters (in) Initial translation of the center of the splash screen (in meters).
	 * @param Rotation                      (in) Initial rotation of the splash screen, with the origin at the center of the splash screen.
	 * @param SizeInMeters          (in) Size, in meters, of the quad with the splash screen.
	 * @param DeltaRotation         (in) Incremental rotation, that is added each 2nd frame to the quad transform. The quad is rotated around the center of the quad.
	 * @param bClearBeforeAdd       (in) If true, clears splashes before adding a new one.
	*/
	static AddLoadingSplashScreen(Texture: Texture2D,TranslationInMeters: Vector,Rotation: Rotator,SizeInMeters: Vector2D,DeltaRotation: Rotator,bClearBeforeAdd: boolean): void;
	static C(Other: UObject): OculusFunctionLibrary;
}

declare class KismetProceduralMeshLibrary extends BlueprintFunctionLibrary { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): KismetProceduralMeshLibrary;
	static Find(Outer: UObject, ResourceName: string): KismetProceduralMeshLibrary;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): KismetProceduralMeshLibrary;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): KismetProceduralMeshLibrary;
	/**
	 * Slice the ProceduralMeshComponent (including simple convex collision) using a plane. Optionally create 'cap' geometry.
	 * @param  InProcMesh                              ProceduralMeshComponent to slice
	 * @param  PlanePosition                   Point on the plane to use for slicing, in world space
	 * @param  PlaneNormal                             Normal of plane used for slicing. Geometry on the positive side of the plane will be kept.
	 * @param  bCreateOtherHalf                If true, an additional ProceduralMeshComponent (OutOtherHalfProcMesh) will be created using the other half of the sliced geometry
	 * @param  OutOtherHalfProcMesh    If bCreateOtherHalf is set, this is the new component created. Its owner will be the same as the supplied InProcMesh.
	 * @param  CapOption                               If and how to create 'cap' geometry on the slicing plane
	 * @param  CapMaterial                             If creating a new section for the cap, assign this material to that section
	*/
	static SliceProceduralMesh(InProcMesh: ProceduralMeshComponent,PlanePosition: Vector,PlaneNormal: Vector,bCreateOtherHalf: boolean,OutOtherHalfProcMesh?: ProceduralMeshComponent,CapOption?: EProcMeshSliceCapOption,CapMaterial?: MaterialInterface): {OutOtherHalfProcMesh: ProceduralMeshComponent};
	/**
	 * Grab geometry data from a StaticMesh asset.
	*/
	static GetSectionFromStaticMesh(InMesh: StaticMesh,LODIndex: number,SectionIndex: number,Vertices?: Vector[],Triangles?: number[],Normals?: Vector[],UVs?: Vector2D[],Tangents?: ProcMeshTangent[]): {Vertices: Vector[], Triangles: number[], Normals: Vector[], UVs: Vector2D[], Tangents: ProcMeshTangent[]};
	/**
	 * Generate vertex and index buffer for a simple box, given the supplied dimensions. Normals, UVs and tangents are also generated for each vertex.
	*/
	static GenerateBoxMesh(BoxRadius: Vector,Vertices?: Vector[],Triangles?: number[],Normals?: Vector[],UVs?: Vector2D[],Tangents?: ProcMeshTangent[]): {Vertices: Vector[], Triangles: number[], Normals: Vector[], UVs: Vector2D[], Tangents: ProcMeshTangent[]};
	/**
	 * Generate an index buffer for a grid of quads.
	 * @param  NumX                    Number of vertices in X direction (must be >= 2)
	 * @param  NumY                    Number of vertices in y direction (must be >= 2)
	 * @param  bWinding                Reverses winding of indices generated for each quad
	 * @out    Triangles               Output index buffer
	*/
	static CreateGridMeshTriangles(NumX: number,NumY: number,bWinding: boolean,Triangles?: number[]): {Triangles: number[]};
	/**
	 * Copy materials from StaticMeshComponent to ProceduralMeshComponent.
	*/
	static CopyProceduralMeshFromStaticMeshComponent(StaticMeshComponent: StaticMeshComponent,LODIndex: number,ProcMeshComponent: ProceduralMeshComponent,bCreateCollision: boolean): void;
	/**
	 * Add a quad, specified by four indices, to a triangle index buffer as two triangles.
	*/
	static ConvertQuadToTriangles(Triangles?: number[],Vert0?: number,Vert1?: number,Vert2?: number,Vert3?: number): {Triangles: number[]};
	/**
	 * Automatically generate normals and tangent vectors for a mesh
	 * UVs are required for correct tangent generation.
	*/
	static CalculateTangentsForMesh(Vertices: Vector[],Triangles: number[],UVs: Vector2D[],Normals?: Vector[],Tangents?: ProcMeshTangent[]): {Normals: Vector[], Tangents: ProcMeshTangent[]};
	static C(Other: UObject): KismetProceduralMeshLibrary;
}

declare class SteamVRChaperoneComponent extends ActorComponent { 
	/**
	 * On Leave Bounds
	*/
	OnLeaveBounds: UnrealEngineMulticastDelegate<() => void>;
	/**
	 * On Return to Bounds
	*/
	OnReturnToBounds: UnrealEngineMulticastDelegate<() => void>;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): SteamVRChaperoneComponent;
	static Find(Outer: UObject, ResourceName: string): SteamVRChaperoneComponent;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): SteamVRChaperoneComponent;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SteamVRChaperoneComponent;
	/**
	 * Returns the bounds from the Chaperone, in Unreal-scale HMD-space coordinates, centered around the HMD's calibration origin (0,0,0).  Each set of four bounds will form a quad to define a set of bounds
	*/
	GetBounds(): Vector[];
	static C(Other: UObject): SteamVRChaperoneComponent;
}

declare type ESteamVRTrackedDeviceType = string | symbol;
declare var ESteamVRTrackedDeviceType = { Controller:'Controller',TrackingReference:'TrackingReference',Other:'Other',Invalid:'Invalid', };
declare class SteamVRFunctionLibrary extends BlueprintFunctionLibrary { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): SteamVRFunctionLibrary;
	static Find(Outer: UObject, ResourceName: string): SteamVRFunctionLibrary;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): SteamVRFunctionLibrary;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SteamVRFunctionLibrary;
	/**
	 * Returns an array of the currently tracked device IDs
	 * @param       DeviceType      Which class of device (e.g. controller, tracking devices) to get Device Ids for
	 * @param       OutTrackedDeviceIds     (out) Array containing the ID of each device that's currently tracked
	*/
	static GetValidTrackedDeviceIds(DeviceType: ESteamVRTrackedDeviceType,OutTrackedDeviceIds?: number[]): {OutTrackedDeviceIds: number[]};
	/**
	 * Gets the orientation and position (in device space) of the device with the specified ID
	 * @param       DeviceId                Id of the device to get tracking info for
	 * @param       OutPosition             (out) Current position of the device
	 * @param       OutOrientation  (out) Current orientation of the device
	 * @return      True if the specified device id had a valid tracking pose this frame, false otherwise
	*/
	static GetTrackedDevicePositionAndOrientation(DeviceId: number,OutPosition?: Vector,OutOrientation?: Rotator): {OutPosition: Vector, OutOrientation: Rotator, $: boolean};
	/**
	 * Given a controller index and a hand, returns the position and orientation of the controller
	 * @param       ControllerIndex Index of the controller to get the tracked device ID for
	 * @param       Hand                    Which hand's controller to get the position and orientation for
	 * @param       OutPosition             (out) Current position of the device
	 * @param       OutRotation             (out) Current rotation of the device
	 * @return      True if the specified controller index has a valid tracked device ID
	*/
	static GetHandPositionAndOrientation(ControllerIndex: number,Hand: EControllerHand,OutPosition?: Vector,OutOrientation?: Rotator): {OutPosition: Vector, OutOrientation: Rotator, $: boolean};
	static C(Other: UObject): SteamVRFunctionLibrary;
}

declare class SlateRemoteSettings extends UObject { 
	/**
	 * Whether the Slate Remote server is enabled.
	*/
	EnableRemoteServer: boolean;
	/**
	 * The IP endpoint to listen to when the Remote Server runs in the Editor.
	*/
	EditorServerEndpoint: string;
	/**
	 * The IP endpoint to listen to when the Remote Server runs in a game.
	*/
	GameServerEndpoint: string;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): SlateRemoteSettings;
	static Find(Outer: UObject, ResourceName: string): SlateRemoteSettings;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): SlateRemoteSettings;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SlateRemoteSettings;
	static C(Other: UObject): SlateRemoteSettings;
}

declare class MockAI extends UObject { 
	/**
	 * BBComp
	*/
	BBComp: BlackboardComponent;
	/**
	 * Brain Comp
	*/
	BrainComp: BrainComponent;
	/**
	 * Perception Comp
	*/
	PerceptionComp: AIPerceptionComponent;
	/**
	 * Pawn Action Comp
	*/
	PawnActionComp: PawnActionsComponent;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MockAI;
	static Find(Outer: UObject, ResourceName: string): MockAI;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MockAI;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MockAI;
	static C(Other: UObject): MockAI;
}

declare class MockAI_BT extends MockAI { 
	/**
	 * BTComp
	*/
	BTComp: BehaviorTreeComponent;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MockAI_BT;
	static Find(Outer: UObject, ResourceName: string): MockAI_BT;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MockAI_BT;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MockAI_BT;
	static C(Other: UObject): MockAI_BT;
}

declare class MockTask_Log extends GameplayTask { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MockTask_Log;
	static Find(Outer: UObject, ResourceName: string): MockTask_Log;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MockTask_Log;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MockTask_Log;
	static C(Other: UObject): MockTask_Log;
}

declare class MockGameplayTasksComponent extends GameplayTasksComponent { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MockGameplayTasksComponent;
	static Find(Outer: UObject, ResourceName: string): MockGameplayTasksComponent;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MockGameplayTasksComponent;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MockGameplayTasksComponent;
	static C(Other: UObject): MockGameplayTasksComponent;
}

declare class MockGameplayTaskOwner extends UObject { 
	/**
	 * GTComponent
	*/
	GTComponent: GameplayTasksComponent;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MockGameplayTaskOwner;
	static Find(Outer: UObject, ResourceName: string): MockGameplayTaskOwner;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MockGameplayTaskOwner;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MockGameplayTaskOwner;
	static C(Other: UObject): MockGameplayTaskOwner;
}

declare class TestBTDecorator_CantExecute extends BTDecorator { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): TestBTDecorator_CantExecute;
	static Find(Outer: UObject, ResourceName: string): TestBTDecorator_CantExecute;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): TestBTDecorator_CantExecute;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TestBTDecorator_CantExecute;
	static C(Other: UObject): TestBTDecorator_CantExecute;
}

declare class TestBTDecorator_DelayedAbort extends BTDecorator { 
	/**
	 * Delay Ticks
	*/
	DelayTicks: number;
	/**
	 * Only Once
	*/
	bOnlyOnce: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): TestBTDecorator_DelayedAbort;
	static Find(Outer: UObject, ResourceName: string): TestBTDecorator_DelayedAbort;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): TestBTDecorator_DelayedAbort;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TestBTDecorator_DelayedAbort;
	static C(Other: UObject): TestBTDecorator_DelayedAbort;
}

declare class TestBTService_Log extends BTService { 
	/**
	 * Log Activation
	*/
	LogActivation: number;
	/**
	 * Log Deactivation
	*/
	LogDeactivation: number;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): TestBTService_Log;
	static Find(Outer: UObject, ResourceName: string): TestBTService_Log;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): TestBTService_Log;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TestBTService_Log;
	static C(Other: UObject): TestBTService_Log;
}

declare class TestBTTask_LatentWithFlags extends BTTaskNode { 
	/**
	 * Log Index Execute Start
	*/
	LogIndexExecuteStart: number;
	/**
	 * Log Index Execute Finish
	*/
	LogIndexExecuteFinish: number;
	/**
	 * Log Index Abort Start
	*/
	LogIndexAbortStart: number;
	/**
	 * Log Index Abort Finish
	*/
	LogIndexAbortFinish: number;
	/**
	 * Execute Ticks
	*/
	ExecuteTicks: number;
	/**
	 * Abort Ticks
	*/
	AbortTicks: number;
	/**
	 * Key Name Execute
	*/
	KeyNameExecute: string;
	/**
	 * Key Name Abort
	*/
	KeyNameAbort: string;
	/**
	 * Log Result
	*/
	LogResult: EBTNodeResult;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): TestBTTask_LatentWithFlags;
	static Find(Outer: UObject, ResourceName: string): TestBTTask_LatentWithFlags;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): TestBTTask_LatentWithFlags;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TestBTTask_LatentWithFlags;
	static C(Other: UObject): TestBTTask_LatentWithFlags;
}

declare class TestBTTask_Log extends BTTaskNode { 
	/**
	 * Log Index
	*/
	LogIndex: number;
	/**
	 * Log Finished
	*/
	LogFinished: number;
	/**
	 * Execution Ticks
	*/
	ExecutionTicks: number;
	/**
	 * Log Result
	*/
	LogResult: EBTNodeResult;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): TestBTTask_Log;
	static Find(Outer: UObject, ResourceName: string): TestBTTask_Log;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): TestBTTask_Log;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TestBTTask_Log;
	static C(Other: UObject): TestBTTask_Log;
}

declare class TestBTTask_SetFlag extends BTTaskNode { 
	/**
	 * Key Name
	*/
	KeyName: string;
	/**
	 * Value
	*/
	bValue: boolean;
	/**
	 * Task Result
	*/
	TaskResult: EBTNodeResult;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): TestBTTask_SetFlag;
	static Find(Outer: UObject, ResourceName: string): TestBTTask_SetFlag;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): TestBTTask_SetFlag;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TestBTTask_SetFlag;
	static C(Other: UObject): TestBTTask_SetFlag;
}

declare class TestBTTask_SetValue extends BTTaskNode { 
	/**
	 * Key Name
	*/
	KeyName: string;
	/**
	 * Value
	*/
	Value: number;
	/**
	 * Task Result
	*/
	TaskResult: EBTNodeResult;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): TestBTTask_SetValue;
	static Find(Outer: UObject, ResourceName: string): TestBTTask_SetValue;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): TestBTTask_SetValue;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TestBTTask_SetValue;
	static C(Other: UObject): TestBTTask_SetValue;
}

declare class TestPawnAction_Log extends PawnAction { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): TestPawnAction_Log;
	static Find(Outer: UObject, ResourceName: string): TestPawnAction_Log;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): TestPawnAction_Log;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TestPawnAction_Log;
	static C(Other: UObject): TestPawnAction_Log;
}

declare class TestPawnAction_CallFunction extends TestPawnAction_Log { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): TestPawnAction_CallFunction;
	static Find(Outer: UObject, ResourceName: string): TestPawnAction_CallFunction;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): TestPawnAction_CallFunction;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TestPawnAction_CallFunction;
	static C(Other: UObject): TestPawnAction_CallFunction;
}

declare class EditorUtilityBlueprint extends Blueprint { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): EditorUtilityBlueprint;
	static Find(Outer: UObject, ResourceName: string): EditorUtilityBlueprint;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): EditorUtilityBlueprint;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): EditorUtilityBlueprint;
	static C(Other: UObject): EditorUtilityBlueprint;
}

declare class EditorUtilityBlueprintFactory extends Factory { 
	/**
	 * The parent class of the created blueprint
	*/
	ParentClass: UnrealEngineClass;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): EditorUtilityBlueprintFactory;
	static Find(Outer: UObject, ResourceName: string): EditorUtilityBlueprintFactory;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): EditorUtilityBlueprintFactory;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): EditorUtilityBlueprintFactory;
	static C(Other: UObject): EditorUtilityBlueprintFactory;
}

declare class GlobalEditorUtilityBase extends UObject { 
	/**
	 * Help Text
	*/
	HelpText: string;
	/**
	 * Dirtied Selection Set
	*/
	bDirtiedSelectionSet: boolean;
	/**
	 * Should this blueprint automatically run OnDefaultActionClicked, or should it open up a details panel to edit properties and/or offer multiple buttons
	*/
	bAutoRunDefaultAction: boolean;
	/**
	 * The method called for each selected actor when ForEachSelectedActor is called
	*/
	OnEachSelectedActor: UnrealEngineMulticastDelegate<(Actor: Actor, Index: number) => void>;
	/**
	 * The method called for each selected actor when ForEachSelectedAsset is called
	*/
	OnEachSelectedAsset: UnrealEngineMulticastDelegate<(Asset: UObject, Index: number) => void>;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): GlobalEditorUtilityBase;
	static Find(Outer: UObject, ResourceName: string): GlobalEditorUtilityBase;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): GlobalEditorUtilityBase;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GlobalEditorUtilityBase;
	/**
	 * Set the selection state for the selected actor
	*/
	SetActorSelectionState(Actor: Actor,bShouldBeSelected: boolean): void;
	/**
	 * Selects nothing in the editor (another way to clear the selection)
	*/
	SelectNothing(): void;
	/**
	 * Renames an asset (cannot move folders)
	*/
	RenameAsset(Asset: UObject,NewName: string): void;
	/**
	 * The default action called when the blutility is invoked if bAutoRunDefaultAction=true (it is never called otherwise)
	*/
	OnDefaultActionClicked(): void;
	/**
	 * Get Selection Set
	*/
	GetSelectionSet(): Actor[];
	/**
	 * Get Selection Bounds
	*/
	GetSelectionBounds(Origin?: Vector,BoxExtent?: Vector,SphereRadius?: number): {Origin: Vector, BoxExtent: Vector, SphereRadius: number};
	/**
	 * Get Editor User Settings
	*/
	GetEditorUserSettings(): EditorPerProjectUserSettings;
	/**
	 * Attempts to find the actor specified by PathToActor in the current editor world
	 * @param       PathToActor     The path to the actor (e.g. PersistentLevel.PlayerStart)
	 * @return      A reference to the actor, or none if it wasn't found
	*/
	GetActorReference(PathToActor: string): Actor;
	/**
	 * Calls OnEachSelectedAsset for each selected asset
	*/
	ForEachSelectedAsset(): void;
	/**
	 * Calls OnEachSelectedActor for each selected actor
	*/
	ForEachSelectedActor(): void;
	/**
	 * Remove all actors from the selection set
	*/
	ClearActorSelectionSet(): void;
	static C(Other: UObject): GlobalEditorUtilityBase;
}

declare class PlacedEditorUtilityBase extends Actor { 
	/**
	 * Help Text
	*/
	HelpText: string;
	constructor(InWorld: World, Location?: Vector, Rotation?: Rotator);
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): PlacedEditorUtilityBase;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PlacedEditorUtilityBase;
	/**
	 * Sets information about the camera position for the primary level editor viewport.
	 * @param        CameraLocation  Location the camera will be moved to.
	 * @param        CameraRotation  Rotation the camera will be set to.
	*/
	SetLevelViewportCameraInfo(CameraLocation: Vector,CameraRotation: Rotator): void;
	/**
	 * Set the selection state for the selected actor
	*/
	SetActorSelectionState(Actor: Actor,bShouldBeSelected: boolean): void;
	/**
	 * Selects nothing in the editor (another way to clear the selection)
	*/
	SelectNothing(): void;
	/**
	 * Returns the current selection set in the editor.  Note that for non-editor builds, this will return an empty array
	*/
	GetSelectionSet(): Actor[];
	/**
	 * Gets information about the camera position for the primary level editor viewport.  In non-editor builds, these will be zeroed
	 * @param       CameraLocation  (out) Current location of the level editing viewport camera, or zero if none found
	 * @param       CameraRotation  (out) Current rotation of the level editing viewport camera, or zero if none found
	 * @return      Whether or not we were able to get a camera for a level editing viewport
	*/
	GetLevelViewportCameraInfo(CameraLocation?: Vector,CameraRotation?: Rotator): {CameraLocation: Vector, CameraRotation: Rotator, $: boolean};
	/**
	 * Attempts to find the actor specified by PathToActor in the current editor world
	 * @param        PathToActor     The path to the actor (e.g. PersistentLevel.PlayerStart)
	 * @return       A reference to the actor, or none if it wasn't found
	*/
	GetActorReference(PathToActor: string): Actor;
	/**
	 * Remove all actors from the selection set
	*/
	ClearActorSelectionSet(): void;
	static C(Other: UObject): PlacedEditorUtilityBase;
}

declare class EdGraph_ReferenceViewer extends EdGraph { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): EdGraph_ReferenceViewer;
	static Find(Outer: UObject, ResourceName: string): EdGraph_ReferenceViewer;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): EdGraph_ReferenceViewer;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): EdGraph_ReferenceViewer;
	static C(Other: UObject): EdGraph_ReferenceViewer;
}

declare class EdGraphNode_Reference extends EdGraphNode { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): EdGraphNode_Reference;
	static Find(Outer: UObject, ResourceName: string): EdGraphNode_Reference;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): EdGraphNode_Reference;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): EdGraphNode_Reference;
	static C(Other: UObject): EdGraphNode_Reference;
}

declare class ReferenceViewerSchema extends EdGraphSchema { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ReferenceViewerSchema;
	static Find(Outer: UObject, ResourceName: string): ReferenceViewerSchema;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ReferenceViewerSchema;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ReferenceViewerSchema;
	static C(Other: UObject): ReferenceViewerSchema;
}

declare class MeshMergingSettingsObject extends UObject { 
	/**
	 * Settings
	*/
	Settings: MeshMergingSettings;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MeshMergingSettingsObject;
	static Find(Outer: UObject, ResourceName: string): MeshMergingSettingsObject;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MeshMergingSettingsObject;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MeshMergingSettingsObject;
	static C(Other: UObject): MeshMergingSettingsObject;
}

declare class ActorFactoryNiagara extends ActorFactory { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ActorFactoryNiagara;
	static Find(Outer: UObject, ResourceName: string): ActorFactoryNiagara;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ActorFactoryNiagara;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ActorFactoryNiagara;
	static C(Other: UObject): ActorFactoryNiagara;
}

declare class EdGraphSchema_Niagara extends EdGraphSchema { 
	/**
	 * Allowable PinType.PinCategory values
	*/
	PC_Float: string;
	/**
	 * PC Vector
	*/
	PC_Vector: string;
	/**
	 * PC Matrix
	*/
	PC_Matrix: string;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): EdGraphSchema_Niagara;
	static Find(Outer: UObject, ResourceName: string): EdGraphSchema_Niagara;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): EdGraphSchema_Niagara;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): EdGraphSchema_Niagara;
	static C(Other: UObject): EdGraphSchema_Niagara;
}

declare class NiagaraMovieSceneSection extends MovieSceneSection { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): NiagaraMovieSceneSection;
	static Find(Outer: UObject, ResourceName: string): NiagaraMovieSceneSection;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): NiagaraMovieSceneSection;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NiagaraMovieSceneSection;
	static C(Other: UObject): NiagaraMovieSceneSection;
}

declare class EmitterMovieSceneTrack extends MovieSceneNameableTrack { 
	/**
	 * Sections
	*/
	Sections: MovieSceneSection[];
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): EmitterMovieSceneTrack;
	static Find(Outer: UObject, ResourceName: string): EmitterMovieSceneTrack;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): EmitterMovieSceneTrack;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): EmitterMovieSceneTrack;
	static C(Other: UObject): EmitterMovieSceneTrack;
}

declare class NiagaraEffectFactoryNew extends Factory { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): NiagaraEffectFactoryNew;
	static Find(Outer: UObject, ResourceName: string): NiagaraEffectFactoryNew;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): NiagaraEffectFactoryNew;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NiagaraEffectFactoryNew;
	static C(Other: UObject): NiagaraEffectFactoryNew;
}

declare class NiagaraGraph extends EdGraph { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): NiagaraGraph;
	static Find(Outer: UObject, ResourceName: string): NiagaraGraph;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): NiagaraGraph;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NiagaraGraph;
	static C(Other: UObject): NiagaraGraph;
}

declare class NiagaraNode extends EdGraphNode { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): NiagaraNode;
	static Find(Outer: UObject, ResourceName: string): NiagaraNode;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): NiagaraNode;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NiagaraNode;
	static C(Other: UObject): NiagaraNode;
}

declare class NiagaraNodeFunctionCall extends NiagaraNode { 
	/**
	 * Function Script
	*/
	FunctionScript: NiagaraScript;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): NiagaraNodeFunctionCall;
	static Find(Outer: UObject, ResourceName: string): NiagaraNodeFunctionCall;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): NiagaraNodeFunctionCall;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NiagaraNodeFunctionCall;
	static C(Other: UObject): NiagaraNodeFunctionCall;
}

declare class NiagaraNodeInput extends NiagaraNode { 
	/**
	 * Input
	*/
	Input: NiagaraVariableInfo;
	/**
	 * TODO: Customize the details for this and hide these when they're not relevant.
	*/
	FloatDefault: number;
	/**
	 * Vector Default
	*/
	VectorDefault: Vector4;
	/**
	 * Matrix Default
	*/
	MatrixDefault: Matrix;
	/**
	 * Allows code to explicitly disable exposing of certain inputs e.g. system constants such as Delta Time.
	*/
	bCanBeExposed: boolean;
	/**
	 * When true, and this input is a constant, the input is exposed to the effect editor.
	*/
	bExposeWhenConstant: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): NiagaraNodeInput;
	static Find(Outer: UObject, ResourceName: string): NiagaraNodeInput;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): NiagaraNodeInput;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NiagaraNodeInput;
	static C(Other: UObject): NiagaraNodeInput;
}

declare class NiagaraNodeOp extends NiagaraNode { 
	/**
	 * Name of operation
	*/
	OpName: string;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): NiagaraNodeOp;
	static Find(Outer: UObject, ResourceName: string): NiagaraNodeOp;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): NiagaraNodeOp;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NiagaraNodeOp;
	static C(Other: UObject): NiagaraNodeOp;
}

declare class NiagaraNodeOutput extends NiagaraNode { 
	/**
	 * Outputs
	*/
	Outputs: NiagaraVariableInfo[];
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): NiagaraNodeOutput;
	static Find(Outer: UObject, ResourceName: string): NiagaraNodeOutput;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): NiagaraNodeOutput;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NiagaraNodeOutput;
	static C(Other: UObject): NiagaraNodeOutput;
}

declare class NiagaraNodeReadDataSet extends NiagaraNode { 
	/**
	 * Data Set
	*/
	DataSet: NiagaraDataSetID;
	/**
	 * Variables
	*/
	Variables: NiagaraVariableInfo[];
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): NiagaraNodeReadDataSet;
	static Find(Outer: UObject, ResourceName: string): NiagaraNodeReadDataSet;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): NiagaraNodeReadDataSet;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NiagaraNodeReadDataSet;
	static C(Other: UObject): NiagaraNodeReadDataSet;
}

declare class NiagaraNodeWriteDataSet extends NiagaraNode { 
	/**
	 * Data Set
	*/
	DataSet: NiagaraDataSetID;
	/**
	 * Variables
	*/
	Variables: NiagaraVariableInfo[];
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): NiagaraNodeWriteDataSet;
	static Find(Outer: UObject, ResourceName: string): NiagaraNodeWriteDataSet;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): NiagaraNodeWriteDataSet;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NiagaraNodeWriteDataSet;
	static C(Other: UObject): NiagaraNodeWriteDataSet;
}

declare class NiagaraScriptFactoryNew extends Factory { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): NiagaraScriptFactoryNew;
	static Find(Outer: UObject, ResourceName: string): NiagaraScriptFactoryNew;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): NiagaraScriptFactoryNew;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NiagaraScriptFactoryNew;
	static C(Other: UObject): NiagaraScriptFactoryNew;
}

declare class NiagaraScriptSource extends NiagaraScriptSourceBase { 
	/**
	 * Graph for particle update expression
	*/
	NodeGraph: NiagaraGraph;
	/**
	 * The same node graph from above but with all function calls merge into a single graph.
	*/
	FlattenedNodeGraph: NiagaraGraph;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): NiagaraScriptSource;
	static Find(Outer: UObject, ResourceName: string): NiagaraScriptSource;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): NiagaraScriptSource;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NiagaraScriptSource;
	static C(Other: UObject): NiagaraScriptSource;
}

declare type EAndroidInstallLocation = string | symbol;
declare var EAndroidInstallLocation = { InternalOnly:'InternalOnly',PreferExternal:'PreferExternal',Auto:'Auto', };
declare type EAndroidScreenOrientation = string | symbol;
declare var EAndroidScreenOrientation = { Portrait:'Portrait',ReversePortrait:'ReversePortrait',SensorPortrait:'SensorPortrait',Landscape:'Landscape',ReverseLandscape:'ReverseLandscape',SensorLandscape:'SensorLandscape',Sensor:'Sensor',FullSensor:'FullSensor', };
declare type EAndroidAntVerbosity = string | symbol;
declare var EAndroidAntVerbosity = { Quiet:'Quiet',Normal:'Normal',Verbose:'Verbose', };
declare type EAndroidDepthBufferPreference = string | symbol;
declare var EAndroidDepthBufferPreference = { Default:'Default',Bits16:'Bits16',Bits24:'Bits24',Bits32:'Bits32',EAndroidDepthBufferPreference_MAX:'EAndroidDepthBufferPreference_MAX',None:'None', };
declare type EGoogleVRMode = string | symbol;
declare var EGoogleVRMode = { Cardboard:'Cardboard',Daydream:'Daydream',DaydreamAndCardboard:'DaydreamAndCardboard', };
declare class GooglePlayAchievementMapping { 
	/**
	 * The game-specific achievement name (the one passed in to WriteAchievement calls).
	*/
	Name: string;
	/**
	 * The ID of the corresponding achievement, generated by the Google Play developer console.
	*/
	AchievementID: string;
	clone() : GooglePlayAchievementMapping;
	static C(Other: UObject): GooglePlayAchievementMapping;
}

declare class GooglePlayLeaderboardMapping { 
	/**
	 * The game-specific leaderboard name (the one passed in to WriteLeaderboards calls).
	*/
	Name: string;
	/**
	 * The ID of the corresponding leaderboard, generated by the Google Play developer console.
	*/
	LeaderboardID: string;
	clone() : GooglePlayLeaderboardMapping;
	static C(Other: UObject): GooglePlayLeaderboardMapping;
}

declare type EAndroidAudio = string | symbol;
declare var EAndroidAudio = { Default:'Default',OGG:'OGG',ADPCM:'ADPCM', };
declare class AndroidRuntimeSettings extends UObject { 
	/**
	 * The official name of the product (same as the name you use on the Play Store web site). Note: Must have at least 2 sections separated by a period and be unique!
	*/
	PackageName: string;
	/**
	 * The version number used to indicate newer versions in the Store
	*/
	StoreVersion: number;
	/**
	 * The visual application name displayed for end users
	*/
	ApplicationDisplayName: string;
	/**
	 * The visual version displayed for end users
	*/
	VersionDisplayName: string;
	/**
	 * What OS version the app is allowed to be installed on (do not set this lower than 9)
	*/
	MinSDKVersion: number;
	/**
	 * What OS version the app is expected to run on (do not set this lower than 9, set to 19 for GearVR)
	*/
	TargetSDKVersion: number;
	/**
	 * Preferred install location for the application
	*/
	InstallLocation: EAndroidInstallLocation;
	/**
	 * Should the data be placed into the .apk file instead of a separate .obb file. Amazon requires this to be enabled, but Google Play Store will not allow .apk files larger than 50MB, so only small games will work with this enabled.
	*/
	bPackageDataInsideApk: boolean;
	/**
	 * If checked, both batch (.bat) files and shell script (.command) files will be generated, otherwise only done for the current system (default)
	*/
	bCreateAllPlatformsInstall: boolean;
	/**
	 * Disable the verification of an OBB file when it is downloaded or on first start when in a distribution build.
	*/
	bDisableVerifyOBBOnStartUp: boolean;
	/**
	 * The permitted orientation of the application on the device
	*/
	Orientation: EAndroidScreenOrientation;
	/**
	 * Level of verbosity to use during packaging with Ant
	*/
	AntVerbosity: EAndroidAntVerbosity;
	/**
	 * Should the software navigation buttons be hidden or not
	*/
	bFullScreen: boolean;
	/**
	 * The preferred depth buffer bitcount for Android
	*/
	DepthBufferPreference: EAndroidDepthBufferPreference;
	/**
	 * Any extra tags for the <manifest> node
	*/
	ExtraManifestNodeTags: string[];
	/**
	 * Any extra tags for the <application> node
	*/
	ExtraApplicationNodeTags: string[];
	/**
	 * Any extra tags for the com.epicgames.UE4.GameActivity <activity> node
	 * Any extra settings for the <application> section (an optional file <Project>/Build/Android/ManifestApplicationAdditions.txt will also be included)
	*/
	ExtraApplicationSettings: string;
	/**
	 * Extra Activity Node Tags
	*/
	ExtraActivityNodeTags: string[];
	/**
	 * Any extra settings for the main <activity> section (an optional file <Project>/Build/Android/ManifestApplicationActivtyAdditions.txt will also be included)
	*/
	ExtraActivitySettings: string;
	/**
	 * Any extra permissions your app needs (an optional file <Project>/Build/Android/ManifestRequirementsAdditions.txt will also be included,
	 * or an optional file <Project>/Build/Android/ManifestRequirementsOverride.txt will replace the entire <!-- Requirements --> section)
	*/
	ExtraPermissions: string[];
	/**
	 * Configure AndroidManifest.xml for GearVR
	*/
	bPackageForGearVR: boolean;
	/**
	 * Removes Oculus Signature Files (osig) from APK if GearVR APK signed for distribution and enables entitlement checker
	*/
	bRemoveOSIG: boolean;
	/**
	 * Configure AndroidManifest.xml for Cardboard, Cardboard Advanced, or Daydream deployment. If running in Daydream-only mode, sustained performance and async reprojection are forced.
	*/
	GoogleVRMode: EGoogleVRMode;
	/**
	 * Configure the Android to run in sustained performance with lower max speeds, but no FPS fluctuations due to temperature
	*/
	bGoogleVRSustainedPerformance: boolean;
	/**
	 * This is the file that keytool outputs, specified with the -keystore parameter (file should be in <Project>/Build/Android)
	*/
	KeyStore: string;
	/**
	 * This is the name of the key that you specified with the -alias parameter to keytool
	*/
	KeyAlias: string;
	/**
	 * This is the password that you specified FOR THE KEYSTORE NOT THE KEY, when running keytool (either with -storepass or by typing it in).
	*/
	KeyStorePassword: string;
	/**
	 * This is the password for the key that you may have specified with keytool, if it's different from the keystore password. Leave blank to use same as Keystore
	*/
	KeyPassword: string;
	/**
	 * Enable ArmV7 support? (this will be used if all type are unchecked)
	*/
	bBuildForArmV7: boolean;
	/**
	 * Enable Arm64 support?
	*/
	bBuildForArm64: boolean;
	/**
	 * Enable x86 support? [CURRENTLY FOR FULL SOURCE GAMES ONLY]
	*/
	bBuildForX86: boolean;
	/**
	 * Enable x86-64 support? [CURRENTLY FOR FULL SOURCE GAMES ONLY]
	*/
	bBuildForX8664: boolean;
	/**
	 * Enable ES2 support? [CURRENTLY FOR FULL SOURCE GAMES ONLY]
	*/
	bBuildForES2: boolean;
	/**
	 * Enable ES3.1 support? [CURRENTLY FOR FULL SOURCE GAMES ONLY]
	*/
	bBuildForES31: boolean;
	/**
	 * Enable ES Deferred shading support? [CURRENTLY FOR FULL SOURCE GAMES ONLY. SUPPORTED BY NVIDIA K-1 AND X-1 ONLY.]
	*/
	bBuildForESDeferred: boolean;
	/**
	 * Enable Vulkan support? [CURRENTLY FOR FULL SOURCE GAMES ONLY]
	*/
	bSupportsVulkan: boolean;
	/**
	 * Should Google Play support be enabled?
	*/
	bEnableGooglePlaySupport: boolean;
	/**
	 * The app id obtained from the Google Play Developer Console
	*/
	GamesAppID: string;
	/**
	 * Mapping of game achievement names to IDs generated by Google Play.
	*/
	AchievementMap: GooglePlayAchievementMapping[];
	/**
	 * Mapping of game leaderboard names to IDs generated by Google Play.
	*/
	LeaderboardMap: GooglePlayLeaderboardMapping[];
	/**
	 * The unique identifier for the ad obtained from AdMob.
	*/
	AdMobAdUnitID: string;
	/**
	 * Identifiers for ads obtained from AdMob
	*/
	AdMobAdUnitIDs: string[];
	/**
	 * The unique identifier for this application (needed for IAP)
	*/
	GooglePlayLicenseKey: string;
	/**
	 * Show the launch image as a startup slash screen
	*/
	bShowLaunchImage: boolean;
	/**
	 * Android Audio encoding options
	*/
	AndroidAudio: EAndroidAudio;
	/**
	 * Include ETC1 textures when packaging with the Android (Multi) variant. ETC1 will be included if no other formats are selected.
	*/
	bMultiTargetFormat_ETC1: boolean;
	/**
	 * Include ETC2 textures when packaging with the Android (Multi) variant.
	*/
	bMultiTargetFormat_ETC2: boolean;
	/**
	 * Include DXT textures when packaging with the Android (Multi) variant.
	*/
	bMultiTargetFormat_DXT: boolean;
	/**
	 * Include PVRTC textures when packaging with the Android (Multi) variant.
	*/
	bMultiTargetFormat_PVRTC: boolean;
	/**
	 * Include ATC textures when packaging with the Android (Multi) variant.
	*/
	bMultiTargetFormat_ATC: boolean;
	/**
	 * Include ASTC textures when packaging with the Android (Multi) variant.
	*/
	bMultiTargetFormat_ASTC: boolean;
	/**
	 * Priority for the ETC1 texture format when launching on device or packaging using Android_Multi. The highest priority format supported by the device will be used. Default value is 0.1.
	*/
	TextureFormatPriority_ETC1: number;
	/**
	 * Priority for the ETC2 texture format when launching on device or packaging using Android_Multi. The highest priority format supported by the device will be used. Default value is 0.2.
	*/
	TextureFormatPriority_ETC2: number;
	/**
	 * Priority for the DXT texture format when launching on device or packaging using Android_Multi. The highest priority format supported by the device will be used. Default value is 0.6.
	*/
	TextureFormatPriority_DXT: number;
	/**
	 * Priority for the PVRTC texture format when launching on device or packaging using Android_Multi. The highest priority format supported by the device will be used. Default value is 0.8.
	*/
	TextureFormatPriority_PVRTC: number;
	/**
	 * Priority for the ATC texture format when launching on device or packaging using Android_Multi. The highest priority format supported by the device will be used. Default value is 0.5.
	*/
	TextureFormatPriority_ATC: number;
	/**
	 * Priority for the ASTC texture format when launching on device or packaging using Android_Multi. The highest priority format supported by the device will be used. Default value is 0.9.
	*/
	TextureFormatPriority_ASTC: number;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): AndroidRuntimeSettings;
	static Find(Outer: UObject, ResourceName: string): AndroidRuntimeSettings;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): AndroidRuntimeSettings;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AndroidRuntimeSettings;
	static C(Other: UObject): AndroidRuntimeSettings;
}

declare class IOSBuildResourceDirectory { 
	/**
	 * The path to the file.
	*/
	Path: string;
	clone() : IOSBuildResourceDirectory;
	static C(Other: UObject): IOSBuildResourceDirectory;
}

declare class IOSBuildResourceFilePath { 
	/**
	 * The path to the file.
	*/
	FilePath: string;
	clone() : IOSBuildResourceFilePath;
	static C(Other: UObject): IOSBuildResourceFilePath;
}

declare type EPowerUsageFrameRateLock = string | symbol;
declare var EPowerUsageFrameRateLock = { PUFRL_None:'PUFRL_None',PUFRL_20:'PUFRL_20',PUFRL_30:'PUFRL_30',PUFRL_60:'PUFRL_60',PUFRL_MAX:'PUFRL_MAX',None:'None', };
declare type EIOSVersion = string | symbol;
declare var EIOSVersion = { IOS_61:'IOS_61',IOS_7:'IOS_7',IOS_8:'IOS_8',IOS_9:'IOS_9',IOS_MAX:'IOS_MAX',None:'None', };
declare class IOSRuntimeSettings extends UObject { 
	/**
	 * Should Game Center support (iOS Online Subsystem) be enabled?
	*/
	bEnableGameCenterSupport: boolean;
	/**
	 * Should Cloud Kit support (iOS Online Subsystem) be enabled?
	*/
	bEnableCloudKitSupport: boolean;
	/**
	 * Whether or not to add support for Metal API (requires IOS8 and A7 processors).
	*/
	bSupportsMetal: boolean;
	/**
	 * Whether or not to add support for deferred rendering Metal API (requires IOS8 and A8 processors)
	*/
	bSupportsMetalMRT: boolean;
	/**
	 * Whether or not to add support for OpenGL ES2 (if this is false, then your game should specify minimum IOS8 version)
	*/
	bSupportsOpenGLES2: boolean;
	/**
	 * Enable generation of dSYM file
	*/
	bGeneratedSYMFile: boolean;
	/**
	 * Enable generation of dSYM bundle
	*/
	bGeneratedSYMBundle: boolean;
	/**
	 * Enable generation of xcode archive package
	*/
	bGenerateXCArchive: boolean;
	/**
	 * Enable ArmV7 support? (this will be used if all type are unchecked)
	*/
	bDevForArmV7: boolean;
	/**
	 * Enable Arm64 support?
	*/
	bDevForArm64: boolean;
	/**
	 * Enable ArmV7s support?
	*/
	bDevForArmV7S: boolean;
	/**
	 * Enable ArmV7 support? (this will be used if all type are unchecked)
	*/
	bShipForArmV7: boolean;
	/**
	 * Enable Arm64 support?
	*/
	bShipForArm64: boolean;
	/**
	 * Enable ArmV7s support?
	*/
	bShipForArmV7S: boolean;
	/**
	 * Enable bitcode compiling?
	*/
	bShipForBitcode: boolean;
	/**
	 * Any additional linker flags to pass to the linker in non-shipping builds
	*/
	AdditionalLinkerFlags: string;
	/**
	 * Any additional linker flags to pass to the linker in shipping builds
	*/
	AdditionalShippingLinkerFlags: string;
	/**
	 * The name or ip address of the remote mac which will be used to build IOS
	*/
	RemoteServerName: string;
	/**
	 * Enable the use of RSync for remote builds on a mac
	*/
	bUseRSync: boolean;
	/**
	 * The mac users name which matches the SSH Private Key, for remote builds using RSync.
	*/
	RSyncUsername: string;
	/**
	 * The install directory of DeltaCopy.
	*/
	DeltaCopyInstallPath: IOSBuildResourceDirectory;
	/**
	 * The existing location of an SSH Key found by UE4.
	*/
	SSHPrivateKeyLocation: string;
	/**
	 * The path of the ssh permissions key to be used when connecting to the remote server.
	*/
	SSHPrivateKeyOverridePath: IOSBuildResourceFilePath;
	/**
	 * If checked, the Siri Remote will act as a separate controller Id from any connected controllers. If unchecked, the remote and the first connected controller will share an ID (and control the same player)
	*/
	bTreatRemoteAsSeparateController: boolean;
	/**
	 * If checked, the Siri Remote can be rotated to landscape view
	*/
	bAllowRemoteRotation: boolean;
	/**
	 * If checked, the trackpad is a virtual joystick (acts like the left stick of a controller). If unchecked, the trackpad will send touch events
	*/
	bUseRemoteAsVirtualJoystick: boolean;
	/**
	 * If checked, the center of the trackpad is 0,0 (center) for the virtual joystick. If unchecked, the location the user taps becomes 0,0
	*/
	bUseRemoteAbsoluteDpadValues: boolean;
	/**
	 * Supports default portrait orientation. Landscape will not be supported.
	*/
	bSupportsPortraitOrientation: boolean;
	/**
	 * Supports upside down portrait orientation. Landscape will not be supported.
	*/
	bSupportsUpsideDownOrientation: boolean;
	/**
	 * Supports left landscape orientation. Portrait will not be supported.
	*/
	bSupportsLandscapeLeftOrientation: boolean;
	/**
	 * Supports right landscape orientation. Portrait will not be supported.
	*/
	bSupportsLandscapeRightOrientation: boolean;
	/**
	 * Specifies the the display name for the application. This will be displayed under the icon on the device.
	*/
	BundleDisplayName: string;
	/**
	 * Specifies the the name of the application bundle. This is the short name for the application bundle.
	*/
	BundleName: string;
	/**
	 * Specifies the bundle identifier for the application.
	*/
	BundleIdentifier: string;
	/**
	 * Specifies the version for the application.
	*/
	VersionInfo: string;
	/**
	 * Set the maximum frame rate to save on power consumption
	*/
	FrameRateLock: EPowerUsageFrameRateLock;
	/**
	 * Minimum iOS version this game supports
	*/
	MinimumiOSVersion: EIOSVersion;
	/**
	 * Whether or not to add support for iPad devices
	*/
	bSupportsIPad: boolean;
	/**
	 * Whether or not to add support for iPhone devices
	*/
	bSupportsIPhone: boolean;
	/**
	 * Any additional plist key/value data utilizing \n for a new line
	*/
	AdditionalPlistData: string;
	/**
	 * Whether the app supports Facebook
	*/
	bEnableFacebookSupport: boolean;
	/**
	 * Facebook App ID obtained from Facebook's Developer Centre
	*/
	FacebookAppID: string;
	/**
	 * Mobile provision to utilize when signing
	*/
	MobileProvision: string;
	/**
	 * Signing certificate to utilize when signing
	*/
	SigningCertificate: string;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): IOSRuntimeSettings;
	static Find(Outer: UObject, ResourceName: string): IOSRuntimeSettings;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): IOSRuntimeSettings;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): IOSRuntimeSettings;
	static C(Other: UObject): IOSRuntimeSettings;
}

declare class AndroidSDKSettings extends UObject { 
	/**
	 * Location on disk of the Android SDK (falls back to ANDROID_HOME environment variable if this is left blank)
	*/
	SDKPath: DirectoryPath;
	/**
	 * Location on disk of the Android NDK (falls back to NDKROOT environment variable if this is left blank)
	*/
	NDKPath: DirectoryPath;
	/**
	 * Location on disk of the ANT tool (falls back to ANT_HOME environment variable if this is left blank)
	*/
	ANTPath: DirectoryPath;
	/**
	 * Location on disk of Java (falls back to JAVA_HOME environment variable if this is left blank)
	*/
	JavaPath: DirectoryPath;
	/**
	 * Which SDK to package and compile Java with (a specific version or (without quotes) 'latest' for latest version on disk, or 'matchndk' to match the NDK API Level)
	*/
	SDKAPILevel: string;
	/**
	 * Which NDK to compile with (a specific version or (without quotes) 'latest' for latest version on disk). Note that choosing android-21 or later won't run on pre-5.0 devices.
	*/
	NDKAPILevel: string;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): AndroidSDKSettings;
	static Find(Outer: UObject, ResourceName: string): AndroidSDKSettings;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): AndroidSDKSettings;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AndroidSDKSettings;
	static C(Other: UObject): AndroidSDKSettings;
}

declare class HTML5DeviceMapping { 
	/**
	 * Device Name
	*/
	DeviceName: string;
	/**
	 * Device Path
	*/
	DevicePath: FilePath;
	clone() : HTML5DeviceMapping;
	static C(Other: UObject): HTML5DeviceMapping;
}

declare class HTML5SDKSettings extends UObject { 
	/**
	 * Available browsers that can be used when launching HTML5 builds.
	*/
	DeviceMap: HTML5DeviceMapping[];
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): HTML5SDKSettings;
	static Find(Outer: UObject, ResourceName: string): HTML5SDKSettings;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): HTML5SDKSettings;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): HTML5SDKSettings;
	static C(Other: UObject): HTML5SDKSettings;
}

declare class HTML5LevelTransitions { 
	/**
	 * Map From
	*/
	MapFrom: FilePath;
	/**
	 * Map To
	*/
	MapTo: FilePath;
	clone() : HTML5LevelTransitions;
	static C(Other: UObject): HTML5LevelTransitions;
}

declare class HTML5TargetSettings extends UObject { 
	/**
	 * Setting to control HTML5 Heap size (in Development)
	*/
	HeapSizeDevelopment: number;
	/**
	 * Setting to control HTML5 Heap size
	*/
	HeapSizeShipping: number;
	/**
	 * Port to use when deploying game from the editor
	*/
	DeployServerPort: number;
	/**
	 * Use a loading level and download maps during transitions.
	*/
	UseAsyncLevelLoading: boolean;
	/**
	 * Generate Delta Pak files for these level transitions.
	*/
	LevelTransitions: HTML5LevelTransitions[];
	/**
	 * Upload to S3
	*/
	UploadToS3: boolean;
	/**
	 * Required
	*/
	S3KeyID: string;
	/**
	 * Required
	*/
	S3SecretAccessKey: string;
	/**
	 * Required
	*/
	S3BucketName: string;
	/**
	 * Provide another level of nesting beyond the bucket. Can be left empty, defaults to game name.
	*/
	S3FolderName: string;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): HTML5TargetSettings;
	static Find(Outer: UObject, ResourceName: string): HTML5TargetSettings;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): HTML5TargetSettings;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): HTML5TargetSettings;
	static C(Other: UObject): HTML5TargetSettings;
}

declare type EEditorLiveStreamingWebCamResolution = string | symbol;
declare var EEditorLiveStreamingWebCamResolution = { Normal_320x240:'Normal_320x240',Wide_320x180:'Wide_320x180',Normal_640x480:'Normal_640x480',Wide_640x360:'Wide_640x360',Normal_800x600:'Normal_800x600',Wide_800x450:'Wide_800x450',Normal_1024x768:'Normal_1024x768',Wide_1024x576:'Wide_1024x576',Normal_1080x810:'Normal_1080x810',Wide_1080x720:'Wide_1080x720',Normal_1280x960:'Normal_1280x960',Wide_1280x720:'Wide_1280x720',Normal_1920x1440:'Normal_1920x1440',Wide_1920x1080:'Wide_1920x1080', };
declare class EditorLiveStreamingSettings extends UObject { 
	/**
	 * Frame rate to stream video from the editor at when broadcasting to services like Twitch.
	*/
	FrameRate: number;
	/**
	 * How much to scale the broadcast video resolution down to reduce streaming bandwidth.  We recommend broadcasting at resolutions of 1280x720 or lower.  Some live streaming providers will not be able to transcode your video to a lower resolution, so using a high resolution stream may prevent low-bandwidth users from having a good viewing experience.
	*/
	ScreenScaling: number;
	/**
	 * By default, we only broadcast video from your primary monitor's work area (excludes the task bar area.)  Turning off this feature enables broadcasting from all monitors, covering your entire usable desktop area.  This may greatly increase the video resolution of your stream, so we recommend leaving this option turned off.
	*/
	bPrimaryMonitorOnly: boolean;
	/**
	 * If enabled, video from your web camera will be captured and displayed in the editor while broadcasting, so that your viewers can see your presence.
	*/
	bEnableWebCam: boolean;
	/**
	 * The camera video resolution that you'd prefer.  The camera may not support the exact resolution you specify, so we'll try to find the best match automatically
	*/
	WebCamResolution: EEditorLiveStreamingWebCamResolution;
	/**
	 * You can enable this to flip the web cam image horizontally so that it looks more like a mirror
	*/
	bMirrorWebCamImage: boolean;
	/**
	 * Enables broadcast of audio being played by your computer, such as in-game sounds
	*/
	bCaptureAudioFromComputer: boolean;
	/**
	 * Enables broadcast of audio from your default microphone recording device
	*/
	bCaptureAudioFromMicrophone: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): EditorLiveStreamingSettings;
	static Find(Outer: UObject, ResourceName: string): EditorLiveStreamingSettings;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): EditorLiveStreamingSettings;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): EditorLiveStreamingSettings;
	static C(Other: UObject): EditorLiveStreamingSettings;
}

declare class LogVisualizerSessionSettings extends UObject { 
	/**
	 * Whether to show trivial logs, i.e. the ones with only one entry.
	*/
	bEnableGraphsVisualization: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): LogVisualizerSessionSettings;
	static Find(Outer: UObject, ResourceName: string): LogVisualizerSessionSettings;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): LogVisualizerSessionSettings;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LogVisualizerSessionSettings;
	static C(Other: UObject): LogVisualizerSessionSettings;
}

declare class CategoryFilter { 
	/**
	 * Category Name
	*/
	CategoryName: string;
	/**
	 * Log Verbosity
	*/
	LogVerbosity: number;
	/**
	 * Enabled
	*/
	Enabled: boolean;
	clone() : CategoryFilter;
	static C(Other: UObject): CategoryFilter;
}

declare class VisualLoggerFiltersData { 
	/**
	 * Search Box Filter
	*/
	SearchBoxFilter: string;
	/**
	 * Object Name Filter
	*/
	ObjectNameFilter: string;
	/**
	 * Categories
	*/
	Categories: CategoryFilter[];
	/**
	 * Selected Classes
	*/
	SelectedClasses: string[];
	clone() : VisualLoggerFiltersData;
	static C(Other: UObject): VisualLoggerFiltersData;
}

declare class LogVisualizerSettings extends UObject { 
	/**
	 * Whether to show trivial logs, i.e. the ones with only one entry.
	*/
	bIgnoreTrivialLogs: boolean;
	/**
	 * Threshold for trivial Logs
	*/
	TrivialLogsThreshold: number;
	/**
	 * Whether to show the recent data or not. Property disabled for now.
	*/
	bStickToRecentData: boolean;
	/**
	 * Whether to reset current data or not for each new session.
	*/
	bResetDataWithNewSession: boolean;
	/**
	 * Whether to show histogram labels inside graph or outside. Property disabled for now.
	*/
	bShowHistogramLabelsOutside: boolean;
	/**
	 * Camera distance used to setup location during reaction on log item double click
	*/
	DefaultCameraDistance: number;
	/**
	 * Whether to search/filter categories or to get text vlogs into account too
	*/
	bSearchInsideLogs: boolean;
	/**
	 * Background color for 2d graphs visualization
	*/
	GraphsBackgroundColor: Color;
	/**
	 * Whether to store all filter settings on exit
	*/
	bPresistentFilters: boolean;
	/**
	 * Whether to extreme values on graph (data has to be provided for extreme values)
	*/
	bDrawExtremesOnGraphs: boolean;
	/**
	 * Whether to use PlayersOnly during Pause or not
	*/
	bUsePlayersOnlyForPause: boolean;
	/**
	 * Whether to dump Navigation Octree on Stop recording or not
	*/
	bLogNavOctreeOnStop: boolean;
	/**
	 * Presistent Filters
	*/
	PresistentFilters: VisualLoggerFiltersData;
	/**
	 * A material used to render debug meshes with kind of flat shading, mostly used by Visual Logger tool.
	*/
	DebugMeshMaterialFakeLight: Material;
	/**
	 * @todo document
	*/
	DebugMeshMaterialFakeLightName: string;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): LogVisualizerSettings;
	static Find(Outer: UObject, ResourceName: string): LogVisualizerSettings;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): LogVisualizerSettings;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LogVisualizerSettings;
	static C(Other: UObject): LogVisualizerSettings;
}

declare class VisualLoggerCameraController extends DebugCameraController { 
	/**
	 * Picked Actor
	*/
	PickedActor: Actor;
	constructor(InWorld: World, Location?: Vector, Rotation?: Rotator);
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): VisualLoggerCameraController;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VisualLoggerCameraController;
	static C(Other: UObject): VisualLoggerCameraController;
}

declare class VisualLoggerHUD extends DebugCameraHUD { 
	constructor(InWorld: World, Location?: Vector, Rotation?: Rotator);
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): VisualLoggerHUD;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VisualLoggerHUD;
	static C(Other: UObject): VisualLoggerHUD;
}

declare class VisualLoggerRenderingActor extends Actor { 
	constructor(InWorld: World, Location?: Vector, Rotation?: Rotator);
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): VisualLoggerRenderingActor;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VisualLoggerRenderingActor;
	static C(Other: UObject): VisualLoggerRenderingActor;
}

declare class VisualLoggerRenderingComponent extends PrimitiveComponent { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): VisualLoggerRenderingComponent;
	static Find(Outer: UObject, ResourceName: string): VisualLoggerRenderingComponent;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): VisualLoggerRenderingComponent;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VisualLoggerRenderingComponent;
	static C(Other: UObject): VisualLoggerRenderingComponent;
}

declare class AndroidFileMediaSourceFactory extends Factory { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): AndroidFileMediaSourceFactory;
	static Find(Outer: UObject, ResourceName: string): AndroidFileMediaSourceFactory;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): AndroidFileMediaSourceFactory;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AndroidFileMediaSourceFactory;
	static C(Other: UObject): AndroidFileMediaSourceFactory;
}

declare class AvfFileMediaSourceFactory extends Factory { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): AvfFileMediaSourceFactory;
	static Find(Outer: UObject, ResourceName: string): AvfFileMediaSourceFactory;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): AvfFileMediaSourceFactory;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AvfFileMediaSourceFactory;
	static C(Other: UObject): AvfFileMediaSourceFactory;
}

declare class WmfFileMediaSourceFactory extends Factory { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): WmfFileMediaSourceFactory;
	static Find(Outer: UObject, ResourceName: string): WmfFileMediaSourceFactory;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): WmfFileMediaSourceFactory;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): WmfFileMediaSourceFactory;
	static C(Other: UObject): WmfFileMediaSourceFactory;
}

declare class LevelSequencePropertyTrackSettings { 
	/**
	 * Optional ActorComponent tag (when keying a component property).
	*/
	ComponentPath: string;
	/**
	 * Path to the keyed property within the Actor or ActorComponent.
	*/
	PropertyPath: string;
	clone() : LevelSequencePropertyTrackSettings;
	static C(Other: UObject): LevelSequencePropertyTrackSettings;
}

declare class LevelSequenceTrackSettings { 
	/**
	 * The Actor class to create movie scene tracks for.
	*/
	MatchingActorClass: StringClassReference;
	/**
	 * List of movie scene track classes to be added automatically.
	*/
	DefaultTracks: StringClassReference[];
	/**
	 * List of movie scene track classes not to be added automatically.
	*/
	ExcludeDefaultTracks: StringClassReference[];
	/**
	 * List of property names for which movie scene tracks will be created automatically.
	*/
	DefaultPropertyTracks: LevelSequencePropertyTrackSettings[];
	/**
	 * List of property names for which movie scene tracks will not be created automatically.
	*/
	ExcludeDefaultPropertyTracks: LevelSequencePropertyTrackSettings[];
	clone() : LevelSequenceTrackSettings;
	static C(Other: UObject): LevelSequenceTrackSettings;
}

declare class LevelSequenceEditorSettings extends UObject { 
	/**
	 * Specifies class properties for which movie scene tracks will be created automatically.
	*/
	TrackSettings: LevelSequenceTrackSettings[];
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): LevelSequenceEditorSettings;
	static Find(Outer: UObject, ResourceName: string): LevelSequenceEditorSettings;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): LevelSequenceEditorSettings;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LevelSequenceEditorSettings;
	static C(Other: UObject): LevelSequenceEditorSettings;
}

declare class LevelSequenceMasterSequenceSettings extends UObject { 
	/**
	 * Master sequence name.
	*/
	MasterSequenceName: string;
	/**
	 * Master sequence suffix.
	*/
	MasterSequenceSuffix: string;
	/**
	 * Master sequence path.
	*/
	MasterSequenceBasePath: DirectoryPath;
	/**
	 * Master sequence number of shots.
	*/
	MasterSequenceNumShots: any;
	/**
	 * Master sequence level sequence to duplicate when creating shots.
	*/
	MasterSequenceLevelSequenceToDuplicate: any;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): LevelSequenceMasterSequenceSettings;
	static Find(Outer: UObject, ResourceName: string): LevelSequenceMasterSequenceSettings;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): LevelSequenceMasterSequenceSettings;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LevelSequenceMasterSequenceSettings;
	static C(Other: UObject): LevelSequenceMasterSequenceSettings;
}

declare class LevelSequenceFactoryNew extends Factory { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): LevelSequenceFactoryNew;
	static Find(Outer: UObject, ResourceName: string): LevelSequenceFactoryNew;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): LevelSequenceFactoryNew;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LevelSequenceFactoryNew;
	static C(Other: UObject): LevelSequenceFactoryNew;
}

declare class MovieSceneParticleTrackSectionRecorder extends UObject { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MovieSceneParticleTrackSectionRecorder;
	static Find(Outer: UObject, ResourceName: string): MovieSceneParticleTrackSectionRecorder;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MovieSceneParticleTrackSectionRecorder;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MovieSceneParticleTrackSectionRecorder;
	/**
	 * On Triggered
	*/
	OnTriggered(Component: ParticleSystemComponent,bActivating: boolean): void;
	static C(Other: UObject): MovieSceneParticleTrackSectionRecorder;
}

declare class MovieSceneVisibilitySectionRecorderSettings extends UObject { 
	/**
	 * Whether to record actor visibility.
	*/
	bRecordVisibility: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MovieSceneVisibilitySectionRecorderSettings;
	static Find(Outer: UObject, ResourceName: string): MovieSceneVisibilitySectionRecorderSettings;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MovieSceneVisibilitySectionRecorderSettings;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MovieSceneVisibilitySectionRecorderSettings;
	static C(Other: UObject): MovieSceneVisibilitySectionRecorderSettings;
}

declare class GeomModifier extends UObject { 
	/**
	 * A human readable name for this modifier (appears on buttons, menus, etc)
	*/
	Description: string;
	/**
	 * The tooltip to be displayed for this modifier
	*/
	Tooltip: string;
	/**
	 * If true, this modifier should be displayed as a push button instead of a radio button
	*/
	bPushButton: boolean;
	/**
	 * true if the modifier has been initialized.
	 * This is useful for interpreting user input and mouse drags correctly.
	*/
	bInitialized: boolean;
	/**
	 * If true, the pivot offset should be updated when the modification ends
	*/
	bPendingPivotOffsetUpdate: boolean;
	/**
	 * Stored state of polys in case the brush state needs to be restroed
	*/
	CachedPolys: Polys;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): GeomModifier;
	static Find(Outer: UObject, ResourceName: string): GeomModifier;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): GeomModifier;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GeomModifier;
	static C(Other: UObject): GeomModifier;
}

declare class GeomModifier_Edit extends GeomModifier { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): GeomModifier_Edit;
	static Find(Outer: UObject, ResourceName: string): GeomModifier_Edit;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): GeomModifier_Edit;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GeomModifier_Edit;
	static C(Other: UObject): GeomModifier_Edit;
}

declare class GeomModifier_Clip extends GeomModifier_Edit { 
	/**
	 * Flip Normal
	*/
	bFlipNormal: boolean;
	/**
	 * Split
	*/
	bSplit: boolean;
	/**
	 * The clip markers that the user has dropped down in the world so far.
	*/
	ClipMarkers: Vector[];
	/**
	 * The mouse position, in world space, where the user currently is hovering.
	*/
	SnappedMouseWorldSpacePos: Vector;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): GeomModifier_Clip;
	static Find(Outer: UObject, ResourceName: string): GeomModifier_Clip;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): GeomModifier_Clip;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GeomModifier_Clip;
	static C(Other: UObject): GeomModifier_Clip;
}

declare class GeomModifier_Create extends GeomModifier_Edit { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): GeomModifier_Create;
	static Find(Outer: UObject, ResourceName: string): GeomModifier_Create;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): GeomModifier_Create;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GeomModifier_Create;
	static C(Other: UObject): GeomModifier_Create;
}

declare class GeomModifier_Delete extends GeomModifier_Edit { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): GeomModifier_Delete;
	static Find(Outer: UObject, ResourceName: string): GeomModifier_Delete;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): GeomModifier_Delete;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GeomModifier_Delete;
	static C(Other: UObject): GeomModifier_Delete;
}

declare class GeomModifier_Extrude extends GeomModifier_Edit { 
	/**
	 * Length
	*/
	Length: number;
	/**
	 * Segments
	*/
	Segments: number;
	/**
	 * Save Coord System
	*/
	SaveCoordSystem: number;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): GeomModifier_Extrude;
	static Find(Outer: UObject, ResourceName: string): GeomModifier_Extrude;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): GeomModifier_Extrude;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GeomModifier_Extrude;
	static C(Other: UObject): GeomModifier_Extrude;
}

declare class GeomModifier_Flip extends GeomModifier_Edit { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): GeomModifier_Flip;
	static Find(Outer: UObject, ResourceName: string): GeomModifier_Flip;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): GeomModifier_Flip;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GeomModifier_Flip;
	static C(Other: UObject): GeomModifier_Flip;
}

declare class GeomModifier_Lathe extends GeomModifier_Edit { 
	/**
	 * Total Segments
	*/
	TotalSegments: number;
	/**
	 * Segments
	*/
	Segments: number;
	/**
	 * Align to Side
	*/
	AlignToSide: boolean;
	/**
	 * The axis of rotation to use when creating the brush.  This is automatically determined from the current ortho viewport.
	*/
	Axis: EAxis;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): GeomModifier_Lathe;
	static Find(Outer: UObject, ResourceName: string): GeomModifier_Lathe;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): GeomModifier_Lathe;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GeomModifier_Lathe;
	static C(Other: UObject): GeomModifier_Lathe;
}

declare class GeomModifier_Pen extends GeomModifier_Edit { 
	/**
	 * If true, the shape will be automatically extruded into a brush upon completion.
	*/
	bAutoExtrude: boolean;
	/**
	 * If true, the tool will try and optimize the resulting triangles into convex polygons before creating the brush.
	*/
	bCreateConvexPolygons: boolean;
	/**
	 * If true, the resulting shape will be turned into an ABrushShape actor.
	*/
	bCreateBrushShape: boolean;
	/**
	 * How far to extrude the newly created brush if bAutoExtrude is set to true.
	*/
	ExtrudeDepth: number;
	/**
	 * The vertices that the user has dropped down in the world so far.
	*/
	ShapeVertices: Vector[];
	/**
	 * The mouse position, in world space, where the user currently is hovering (snapped to grid if that setting is enabled).
	*/
	MouseWorldSpacePos: Vector;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): GeomModifier_Pen;
	static Find(Outer: UObject, ResourceName: string): GeomModifier_Pen;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): GeomModifier_Pen;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GeomModifier_Pen;
	static C(Other: UObject): GeomModifier_Pen;
}

declare class GeomModifier_Split extends GeomModifier_Edit { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): GeomModifier_Split;
	static Find(Outer: UObject, ResourceName: string): GeomModifier_Split;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): GeomModifier_Split;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GeomModifier_Split;
	static C(Other: UObject): GeomModifier_Split;
}

declare class GeomModifier_Triangulate extends GeomModifier_Edit { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): GeomModifier_Triangulate;
	static Find(Outer: UObject, ResourceName: string): GeomModifier_Triangulate;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): GeomModifier_Triangulate;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GeomModifier_Triangulate;
	static C(Other: UObject): GeomModifier_Triangulate;
}

declare class GeomModifier_Optimize extends GeomModifier_Triangulate { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): GeomModifier_Optimize;
	static Find(Outer: UObject, ResourceName: string): GeomModifier_Optimize;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): GeomModifier_Optimize;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GeomModifier_Optimize;
	static C(Other: UObject): GeomModifier_Optimize;
}

declare class GeomModifier_Turn extends GeomModifier_Edit { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): GeomModifier_Turn;
	static Find(Outer: UObject, ResourceName: string): GeomModifier_Turn;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): GeomModifier_Turn;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GeomModifier_Turn;
	static C(Other: UObject): GeomModifier_Turn;
}

declare class GeomModifier_Weld extends GeomModifier_Edit { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): GeomModifier_Weld;
	static Find(Outer: UObject, ResourceName: string): GeomModifier_Weld;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): GeomModifier_Weld;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GeomModifier_Weld;
	static C(Other: UObject): GeomModifier_Weld;
}

declare class ActorFactoryLandscape extends ActorFactory { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ActorFactoryLandscape;
	static Find(Outer: UObject, ResourceName: string): ActorFactoryLandscape;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ActorFactoryLandscape;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ActorFactoryLandscape;
	static C(Other: UObject): ActorFactoryLandscape;
}

declare type ELandscapeToolFlattenMode = string | symbol;
declare var ELandscapeToolFlattenMode = { Both:'Both',Raise:'Raise',Lower:'Lower', };
declare type ELandscapeToolErosionMode = string | symbol;
declare var ELandscapeToolErosionMode = { Both:'Both',Raise:'Raise',Lower:'Lower', };
declare type ELandscapeToolHydroErosionMode = string | symbol;
declare var ELandscapeToolHydroErosionMode = { Both:'Both',Positive:'Positive', };
declare type ELandscapeToolNoiseMode = string | symbol;
declare var ELandscapeToolNoiseMode = { Both:'Both',Raise:'Raise',Lower:'Lower', };
declare type ELandscapeToolPasteMode = string | symbol;
declare var ELandscapeToolPasteMode = { Both:'Both',Raise:'Raise',Lower:'Lower', };
declare class GizmoImportLayer { 
	/**
	 * Layer Filename
	*/
	LayerFilename: string;
	/**
	 * Layer Name
	*/
	LayerName: string;
	/**
	 * No Import
	*/
	bNoImport: boolean;
	clone() : GizmoImportLayer;
	static C(Other: UObject): GizmoImportLayer;
}

declare type ELandscapeMirrorOperation = string | symbol;
declare var ELandscapeMirrorOperation = { MinusXToPlusX:'MinusXToPlusX',PlusXToMinusX:'PlusXToMinusX',MinusYToPlusY:'MinusYToPlusY',PlusYToMinusY:'PlusYToMinusY', };
declare type ELandscapeConvertMode = string | symbol;
declare var ELandscapeConvertMode = { Expand:'Expand',Clip:'Clip',Resample:'Resample', };
declare type ELandscapeImportResult = string | symbol;
declare var ELandscapeImportResult = { Success:'Success',Warning:'Warning',Error:'Error', };
declare type ELandscapeImportAlphamapType = string | symbol;
declare var ELandscapeImportAlphamapType = { Additive:'Additive',Layered:'Layered', };
declare class LandscapeImportLayerInfo { 
	/**
	 * Layer Name
	*/
	LayerName: string;
	/**
	 * Layer Info
	*/
	LayerInfo: LandscapeLayerInfoObject;
	/**
	 * Source File Path
	*/
	SourceFilePath: string;
	clone() : LandscapeImportLayerInfo;
	static C(Other: UObject): LandscapeImportLayerInfo;
}

declare class LandscapeImportLayer extends LandscapeImportLayerInfo { 
	/**
	 * Thumbnail MIC
	*/
	ThumbnailMIC: LandscapeMaterialInstanceConstant;
	/**
	 * Import Result
	*/
	ImportResult: ELandscapeImportResult;
	/**
	 * Error Message
	*/
	ErrorMessage: string;
	clone() : LandscapeImportLayer;
	static C(Other: UObject): LandscapeImportLayer;
}

declare class LandscapePatternBrushWorldSpaceSettings { 
	/**
	 * Origin
	*/
	Origin: Vector2D;
	/**
	 * Rotation
	*/
	Rotation: number;
	/**
	 * if true, the texture used for the pattern is centered on the PatternOrigin.
	 * if false, the corner of the texture is placed at the PatternOrigin
	*/
	bCenterTextureOnOrigin: boolean;
	/**
	 * Repeat Size
	*/
	RepeatSize: number;
	clone() : LandscapePatternBrushWorldSpaceSettings;
	static C(Other: UObject): LandscapePatternBrushWorldSpaceSettings;
}

declare type EColorChannel = string | symbol;
declare var EColorChannel = { Red:'Red',Green:'Green',Blue:'Blue',Alpha:'Alpha', };
declare class LandscapeEditorObject extends UObject { 
	/**
	 * Strength of the tool. If you're using a pen/tablet with pressure-sensing, the pressure used affects the strength of the tool.
	*/
	ToolStrength: number;
	/**
	 * Enable to make tools blend towards a target value
	*/
	bUseWeightTargetValue: boolean;
	/**
	 * Enable to make tools blend towards a target value
	*/
	WeightTargetValue: number;
	/**
	 * I have no idea what this is for but it's used by the noise and erosion tools, and isn't exposed to the UI
	*/
	MaximumValueRadius: number;
	/**
	 * Whether to flatten by lowering, raising, or both
	*/
	FlattenMode: ELandscapeToolFlattenMode;
	/**
	 * Flattens to the angle of the clicked point, instead of horizontal
	*/
	bUseSlopeFlatten: boolean;
	/**
	 * Constantly picks new values to flatten towards when dragging around, instead of only using the first clicked point
	*/
	bPickValuePerApply: boolean;
	/**
	 * Enable to flatten towards a target height
	*/
	bUseFlattenTarget: boolean;
	/**
	 * Target height to flatten towards (in Unreal Units)
	*/
	FlattenTarget: number;
	/**
	 * Whether to show the preview grid for the flatten target height
	*/
	bShowFlattenTargetPreview: boolean;
	/**
	 * Width of ramp
	*/
	RampWidth: number;
	/**
	 * Falloff on side of ramp
	*/
	RampSideFalloff: number;
	/**
	 * The radius smoothing is performed over
	 * Higher values smooth out bigger details, lower values only smooth out smaller details
	*/
	SmoothFilterKernelSize: number;
	/**
	 * If checked, performs a detail preserving smooth using the specified detail smoothing value
	*/
	bDetailSmooth: boolean;
	/**
	 * Larger detail smoothing values remove more details, while smaller values preserve more details
	*/
	DetailScale: number;
	/**
	 * The minimum height difference necessary for the erosion effects to be applied. Smaller values will result in more erosion being applied
	*/
	ErodeThresh: number;
	/**
	 * The thickness of the surface for the layer weight erosion effect
	*/
	ErodeSurfaceThickness: number;
	/**
	 * Number of erosion iterations, more means more erosion but is slower
	*/
	ErodeIterationNum: number;
	/**
	 * Whether to erode by lowering, raising, or both
	*/
	ErosionNoiseMode: ELandscapeToolErosionMode;
	/**
	 * The size of the perlin noise filter used
	*/
	ErosionNoiseScale: number;
	/**
	 * The amount of rain to apply to the surface. Larger values will result in more erosion
	*/
	RainAmount: number;
	/**
	 * The amount of sediment that the water can carry. Larger values will result in more erosion
	*/
	SedimentCapacity: number;
	/**
	 * Number of erosion iterations, more means more erosion but is slower
	*/
	HErodeIterationNum: number;
	/**
	 * Initial Rain Distribution
	*/
	RainDistMode: ELandscapeToolHydroErosionMode;
	/**
	 * The size of the noise filter for applying initial rain to the surface
	*/
	RainDistScale: number;
	/**
	 * If checked, performs a detail-preserving smooth to the erosion effect using the specified detail smoothing value
	*/
	bHErosionDetailSmooth: boolean;
	/**
	 * Larger detail smoothing values remove more details, while smaller values preserve more details
	*/
	HErosionDetailScale: number;
	/**
	 * Whether to apply noise that raises, lowers, or both
	*/
	NoiseMode: ELandscapeToolNoiseMode;
	/**
	 * The size of the perlin noise filter used
	*/
	NoiseScale: number;
	/**
	 * Uses selected region as a mask for other tools
	*/
	bUseSelectedRegion: boolean;
	/**
	 * If enabled, protects the selected region from changes
	 * If disabled, only allows changes in the selected region
	*/
	bUseNegativeMask: boolean;
	/**
	 * Whether to paste will only raise, only lower, or both
	*/
	PasteMode: ELandscapeToolPasteMode;
	/**
	 * If set, copies/pastes all layers, otherwise only copy/pastes the layer selected in the targets panel
	*/
	bApplyToAllTargets: boolean;
	/**
	 * Makes sure the gizmo is snapped perfectly to the landscape so that the sample points line up, which makes copy/paste less blurry. Irrelevant if gizmo is scaled
	*/
	bSnapGizmo: boolean;
	/**
	 * Smooths the edges of the gizmo data into the landscape. Without this, the edges of the pasted data will be sharp
	*/
	bSmoothGizmoBrush: boolean;
	/**
	 * Gizmo Heightmap Filename String
	*/
	GizmoHeightmapFilenameString: string;
	/**
	 * Gizmo Import Size
	*/
	GizmoImportSize: IntPoint;
	/**
	 * Gizmo Import Layers
	*/
	GizmoImportLayers: GizmoImportLayer[];
	/**
	 * Location of the mirror plane, defaults to the center of the landscape. Doesn't normally need to be changed!
	*/
	MirrorPoint: Vector2D;
	/**
	 * Type of mirroring operation to perform e.g. "Minus X To Plus X" copies and flips the -X half of the landscape onto the +X half
	*/
	MirrorOp: ELandscapeMirrorOperation;
	/**
	 * Number of quads per landscape component section
	*/
	ResizeLandscape_QuadsPerSection: number;
	/**
	 * Number of sections per landscape component
	*/
	ResizeLandscape_SectionsPerComponent: number;
	/**
	 * Number of components in resulting landscape
	*/
	ResizeLandscape_ComponentCount: IntPoint;
	/**
	 * Determines how the new component size will be applied to the existing landscape geometry.
	*/
	ResizeLandscape_ConvertMode: ELandscapeConvertMode;
	/**
	 * Material initially applied to the landscape. Setting a material here exposes properties for setting up layer info based on the landscape blend nodes in the material.
	*/
	NewLandscape_Material: any;
	/**
	 * The number of quads in a single landscape section. One section is the unit of LOD transition for landscape rendering.
	*/
	NewLandscape_QuadsPerSection: number;
	/**
	 * The number of sections in a single landscape component. This along with the section size determines the size of each landscape component. A component is the base unit of rendering and culling.
	*/
	NewLandscape_SectionsPerComponent: number;
	/**
	 * The number of components in the X and Y direction, determining the overall size of the landscape.
	*/
	NewLandscape_ComponentCount: IntPoint;
	/**
	 * The location of the new landscape
	*/
	NewLandscape_Location: Vector;
	/**
	 * The rotation of the new landscape
	*/
	NewLandscape_Rotation: Rotator;
	/**
	 * The scale of the new landscape. This is the distance between each vertex on the landscape, defaulting to 100 units.
	*/
	NewLandscape_Scale: Vector;
	/**
	 * Import Landscape Heightmap Import Result
	*/
	ImportLandscape_HeightmapImportResult: ELandscapeImportResult;
	/**
	 * Import Landscape Heightmap Error Message
	*/
	ImportLandscape_HeightmapErrorMessage: string;
	/**
	 * Specify a height map file in 16-bit RAW or PNG format
	*/
	ImportLandscape_HeightmapFilename: string;
	/**
	 * Import Landscape Width
	*/
	ImportLandscape_Width: any;
	/**
	 * Import Landscape Height
	*/
	ImportLandscape_Height: any;
	/**
	 * Import Landscape Data
	*/
	ImportLandscape_Data: any[];
	/**
	 * Whether the imported alpha maps are to be interpreted as "layered" or "additive" (UE4 uses additive internally)
	*/
	ImportLandscape_AlphamapType: ELandscapeImportAlphamapType;
	/**
	 * The landscape layers that will be created. Only layer names referenced in the material assigned above are shown here. Modify the material to add more layers.
	*/
	ImportLandscape_Layers: LandscapeImportLayer[];
	/**
	 * The radius of the brush, in unreal units
	*/
	BrushRadius: number;
	/**
	 * The falloff at the edge of the brush, as a fraction of the brush's size. 0 = no falloff, 1 = all falloff
	*/
	BrushFalloff: number;
	/**
	 * Selects the Clay Brush painting mode
	*/
	bUseClayBrush: boolean;
	/**
	 * Scale of the brush texture. A scale of 1.000 maps the brush texture to the landscape at a 1 pixel = 1 vertex size
	*/
	AlphaBrushScale: number;
	/**
	 * Rotate brush to follow mouse
	*/
	bAlphaBrushAutoRotate: boolean;
	/**
	 * Rotates the brush mask texture
	*/
	AlphaBrushRotation: number;
	/**
	 * Horizontally offsets the brush mask texture
	*/
	AlphaBrushPanU: number;
	/**
	 * Vertically offsets the brush mask texture
	*/
	AlphaBrushPanV: number;
	/**
	 * Use World Space Pattern Brush
	*/
	bUseWorldSpacePatternBrush: boolean;
	/**
	 * World Space Pattern Brush Settings
	*/
	WorldSpacePatternBrushSettings: LandscapePatternBrushWorldSpaceSettings;
	/**
	 * Mask texture to use
	*/
	AlphaTexture: Texture2D;
	/**
	 * Channel of Mask Texture to use
	*/
	AlphaTextureChannel: EColorChannel;
	/**
	 * Alpha Texture Size X
	*/
	AlphaTextureSizeX: number;
	/**
	 * Alpha Texture Size Y
	*/
	AlphaTextureSizeY: number;
	/**
	 * Alpha Texture Data
	*/
	AlphaTextureData: number[];
	/**
	 * Number of components X/Y to affect at once. 1 means 1x1, 2 means 2x2, etc
	*/
	BrushComponentSize: number;
	/**
	 * Limits painting to only the components that already have the selected layer
	*/
	PaintingRestriction: ELandscapeLayerPaintingRestriction;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): LandscapeEditorObject;
	static Find(Outer: UObject, ResourceName: string): LandscapeEditorObject;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): LandscapeEditorObject;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LandscapeEditorObject;
	static C(Other: UObject): LandscapeEditorObject;
}

declare class LandscapePlaceholder extends Actor { 
	constructor(InWorld: World, Location?: Vector, Rotation?: Rotator);
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): LandscapePlaceholder;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LandscapePlaceholder;
	static C(Other: UObject): LandscapePlaceholder;
}

declare class ActorFactoryProceduralFoliage extends ActorFactoryBoxVolume { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ActorFactoryProceduralFoliage;
	static Find(Outer: UObject, ResourceName: string): ActorFactoryProceduralFoliage;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ActorFactoryProceduralFoliage;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ActorFactoryProceduralFoliage;
	static C(Other: UObject): ActorFactoryProceduralFoliage;
}

declare class FoliageType_ISMThumbnailRenderer extends DefaultSizedThumbnailRenderer { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): FoliageType_ISMThumbnailRenderer;
	static Find(Outer: UObject, ResourceName: string): FoliageType_ISMThumbnailRenderer;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): FoliageType_ISMThumbnailRenderer;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): FoliageType_ISMThumbnailRenderer;
	static C(Other: UObject): FoliageType_ISMThumbnailRenderer;
}

declare class FoliageTypeFactory extends Factory { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): FoliageTypeFactory;
	static Find(Outer: UObject, ResourceName: string): FoliageTypeFactory;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): FoliageTypeFactory;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): FoliageTypeFactory;
	static C(Other: UObject): FoliageTypeFactory;
}

declare class LandscapeGrassTypeFactory extends Factory { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): LandscapeGrassTypeFactory;
	static Find(Outer: UObject, ResourceName: string): LandscapeGrassTypeFactory;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): LandscapeGrassTypeFactory;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LandscapeGrassTypeFactory;
	static C(Other: UObject): LandscapeGrassTypeFactory;
}

declare class ProceduralFoliageSpawnerFactory extends Factory { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ProceduralFoliageSpawnerFactory;
	static Find(Outer: UObject, ResourceName: string): ProceduralFoliageSpawnerFactory;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ProceduralFoliageSpawnerFactory;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ProceduralFoliageSpawnerFactory;
	static C(Other: UObject): ProceduralFoliageSpawnerFactory;
}

declare class SceneOutlinerSettings extends UObject { 
	/**
	 * True when the Scene Outliner is hiding temporary/run-time Actors
	*/
	bHideTemporaryActors: boolean;
	/**
	 * True when the Scene Outliner is showing only Actors that exist in the current level
	*/
	bShowOnlyActorsInCurrentLevel: boolean;
	/**
	 * True when the Scene Outliner is only displaying selected Actors
	*/
	bShowOnlySelectedActors: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): SceneOutlinerSettings;
	static Find(Outer: UObject, ResourceName: string): SceneOutlinerSettings;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): SceneOutlinerSettings;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SceneOutlinerSettings;
	static C(Other: UObject): SceneOutlinerSettings;
}

declare class HLODSelectionActor extends Actor { 
	/**
	 * Visualization component for rendering the LODActors bounds (cluster bounds)
	*/
	DrawSphereComponent: DrawSphereComponent;
	constructor(InWorld: World, Location?: Vector, Rotation?: Rotator);
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): HLODSelectionActor;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): HLODSelectionActor;
	static C(Other: UObject): HLODSelectionActor;
}

declare class TRASHCLASS_DmgTypeBP_Environmental_0 { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): TRASHCLASS_DmgTypeBP_Environmental_0;
	static Find(Outer: UObject, ResourceName: string): TRASHCLASS_DmgTypeBP_Environmental_0;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): TRASHCLASS_DmgTypeBP_Environmental_0;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TRASHCLASS_DmgTypeBP_Environmental_0;
	static C(Other: UObject): TRASHCLASS_DmgTypeBP_Environmental_0;
}

declare class ORPHANED_DATA_ONLY_DmgTypeBP_Environmental_C_1 { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ORPHANED_DATA_ONLY_DmgTypeBP_Environmental_C_1;
	static Find(Outer: UObject, ResourceName: string): ORPHANED_DATA_ONLY_DmgTypeBP_Environmental_C_1;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ORPHANED_DATA_ONLY_DmgTypeBP_Environmental_C_1;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ORPHANED_DATA_ONLY_DmgTypeBP_Environmental_C_1;
	static C(Other: UObject): ORPHANED_DATA_ONLY_DmgTypeBP_Environmental_C_1;
}

declare class TRASHCLASS_LevelEditorAttract_2 { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): TRASHCLASS_LevelEditorAttract_2;
	static Find(Outer: UObject, ResourceName: string): TRASHCLASS_LevelEditorAttract_2;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): TRASHCLASS_LevelEditorAttract_2;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TRASHCLASS_LevelEditorAttract_2;
	static C(Other: UObject): TRASHCLASS_LevelEditorAttract_2;
}

declare class ORPHANED_DATA_ONLY_LevelEditorAttract_C_3 { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ORPHANED_DATA_ONLY_LevelEditorAttract_C_3;
	static Find(Outer: UObject, ResourceName: string): ORPHANED_DATA_ONLY_LevelEditorAttract_C_3;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ORPHANED_DATA_ONLY_LevelEditorAttract_C_3;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ORPHANED_DATA_ONLY_LevelEditorAttract_C_3;
	static C(Other: UObject): ORPHANED_DATA_ONLY_LevelEditorAttract_C_3;
}

declare class TRASHCLASS_LevelEditorOverview_4 { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): TRASHCLASS_LevelEditorOverview_4;
	static Find(Outer: UObject, ResourceName: string): TRASHCLASS_LevelEditorOverview_4;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): TRASHCLASS_LevelEditorOverview_4;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TRASHCLASS_LevelEditorOverview_4;
	static C(Other: UObject): TRASHCLASS_LevelEditorOverview_4;
}

declare var Context : JavascriptContext;

